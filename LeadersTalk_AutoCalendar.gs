const CONFIG = {
  RESPONSE_SHEET_NAME: 'Câu trả lời biểu mẫu 1',
  MASTER_SPREADSHEET_ID: '1UOugns_LzajN9n3DXKDSVjzR45eKhTrSDDcEmQhTg_A',
  MASTER_SHEET_NAME: 'Trang tính1',
  CALENDAR_ID: 'primary',
  TIMEZONE: 'Asia/Ho_Chi_Minh',
  SEND_CONFIRMATION_EMAIL: false,
  RESPONSE_HEADERS: {
    email: 'Địa chỉ email',
    fullName: 'Họ và Tên của Anh/Chị',
    attendDate: 'Ngày tham dự',
    mode: 'Hình thức tham dự'
  },
  MASTER_HEADERS: {
    classCode: 'class_code',
    title: 'title',
    mode: 'mode',
    startDate: 'start_date',
    startTime: 'start_time',
    endDate: 'end_date',
    endTime: 'end_time',
    location: 'location',
    meetLink: 'meet_link',
    mailSubject: 'mail_subject',
    mailBody: 'mail_body'
  },
  SYSTEM_COLUMNS: {
    tracking: 'calendar_tracking',
    eventId: 'event_id',
    processedAt: 'processed_at',
    error: 'error_log'
  },
  REMINDERS: {
    useDefault: false,
    overrides: [
      { method: 'popup', minutes: 30 },
      { method: 'email', minutes: 1440 }
    ]
  },

  BATCH_JOB: {
    oldDateText: '17/04/2026',
    newDateText: '16/04/2026',
    mode: 'ALL',
    updateResponseDate: true,
    rowStart: 2,
    rowEnd: 0
  },

  // Dòng bắt đầu khi reprocess các dòng lỗi/còn treo (bỏ qua các dòng cũ phía trên cho nhanh).
  REPROCESS_START_ROW: 2176
};

// Chuẩn hóa tên header: NFC + bỏ NBSP + gộp khoảng trắng + trim + lowercase.
// Dùng chung cho cả đọc và ghi để tránh lệch Unicode (NFC/NFD) tiếng Việt.
function normHeaderKey_(v) {
  return String(v == null ? '' : v)
    .normalize('NFC').replace(/ /g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Leaders Talk Auto')
    .addItem('1. Setup automation', 'setupAutomation')
    .addItem('2. Reprocess pending rows', 'reprocessPendingRows')
    .addItem('2b. Reprocess từ hàng 2176', 'reprocessFromStartRow')
    .addSeparator()
    .addItem('3. Chuyển lịch cũ sang lịch mới', 'rescheduleEventsByOldDateAndMode')
    .addItem('4. Xóa lịch cũ và tạo lịch mới', 'cancelOldAndRecreateEvents')
    .addToUi();
}

function setupAutomation() {
  validateConfig_();
  ensureSystemColumns_();
  createFormSubmitTrigger_();
  Logger.log('Đã setup xong automation.');
}

function onFormSubmit(e) {
  const lock = LockService.getScriptLock();
  const gotLock = lock.tryLock(30000);

  try {
    validateConfig_();

    const responseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.RESPONSE_SHEET_NAME);
    if (!responseSheet) throw new Error(`Không tìm thấy sheet response: ${CONFIG.RESPONSE_SHEET_NAME}`);

    ensureSystemColumns_();

    const row = e && e.range ? e.range.getRow() : responseSheet.getLastRow();
    if (row <= 1) return;

    if (!gotLock) {
      // Không lấy được lock (thường vì batch job đang chạy). KHÔNG bỏ rơi dòng:
      // đánh dấu PENDING_LOCK để reprocess xử lý lại sau.
      const headerMap = getHeaderMap_(responseSheet);
      writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking, 'PENDING_LOCK');
      writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.error,
        'Không lấy được lock lúc submit (có job khác đang chạy). Chờ reprocess.');
      Logger.log('PENDING_LOCK dòng ' + row + ' do không lấy được lock.');
      return;
    }

    processOneRow_(responseSheet, row);
  } catch (error) {
    Logger.log(error.stack || error);
    throw error;
  } finally {
    if (gotLock) lock.releaseLock();
  }
}

function reprocessPendingRows() {
  reprocessRowsFrom_(2);
}

// Reprocess CHỈ từ hàng REPROCESS_START_ROW trở xuống, chỉ đụng các dòng lỗi/trống/treo.
function reprocessFromStartRow() {
  reprocessRowsFrom_(CONFIG.REPROCESS_START_ROW);
}

function testProcessRow() {
  const rowNumber = 2;
  const responseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.RESPONSE_SHEET_NAME);
  ensureSystemColumns_();
  processOneRow_(responseSheet, rowNumber);
}

function rescheduleEventsByOldDateAndMode() {
  runBatchCalendarAction_('UPDATE');
}

function cancelOldAndRecreateEvents() {
  runBatchCalendarAction_('RECREATE');
}

function runBatchCalendarAction_(actionType) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    validateConfig_();
    ensureSystemColumns_();
    validateBatchJobConfig_();

    const responseSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.RESPONSE_SHEET_NAME);
    const headerMap = getHeaderMap_(responseSheet);
    const lastRow = responseSheet.getLastRow();
    const startRow = Math.max(2, Number(CONFIG.BATCH_JOB.rowStart || 2));
    const endRow = Number(CONFIG.BATCH_JOB.rowEnd || 0) > 0 ? Number(CONFIG.BATCH_JOB.rowEnd) : lastRow;

    const oldDateText = normalizeDateDisplay_(CONFIG.BATCH_JOB.oldDateText);
    const batchMode = resolveBatchModeConfig_(CONFIG.BATCH_JOB.mode);
    const masterRowByMode = {};

    batchMode.targetModes.forEach(mode => {
      masterRowByMode[mode] = findMasterByDateAndModeText_(CONFIG.BATCH_JOB.newDateText, mode);
    });

    let matchedCount = 0;
    let successCount = 0;
    let errorCount = 0;
    let skippedModeCount = 0;
    let skippedInvalidModeCount = 0;

    for (let row = startRow; row <= endRow; row++) {
      const currentAttendDate = readCellByHeader_(responseSheet, row, headerMap, CONFIG.RESPONSE_HEADERS.attendDate);
      const currentMode = readCellByHeader_(responseSheet, row, headerMap, CONFIG.RESPONSE_HEADERS.mode);
      const eventId = String(readCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.eventId) || '').trim();
      const email = String(readCellByHeader_(responseSheet, row, headerMap, CONFIG.RESPONSE_HEADERS.email) || '').trim();
      const fullName = String(readCellByHeader_(responseSheet, row, headerMap, CONFIG.RESPONSE_HEADERS.fullName) || '').trim();

      const rowDateText = normalizeDateDisplaySafe_(currentAttendDate);
      const rowMode = normalizeModeSafe_(currentMode);

      if (rowDateText !== oldDateText) {
        continue;
      }

      if (!rowMode) {
        writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking, 'SKIPPED_MODE_INVALID');
        writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.error, `Không nhận diện được hình thức tham dự: "${currentMode}"`);
        skippedInvalidModeCount++;
        continue;
      }

      if (!batchMode.applyAllModes && rowMode !== batchMode.normalizedMode) {
        writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking, 'SKIPPED_MODE');
        writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.error, `Mode của dòng là "${rowMode}" nhưng batch đang chạy "${batchMode.normalizedMode}"`);
        skippedModeCount++;
        continue;
      }

      matchedCount++;

      try {
        if (!email) throw new Error('Thiếu email học viên.');
        if (!fullName) throw new Error('Thiếu họ tên học viên.');

        const masterRow = masterRowByMode[rowMode];
        if (!masterRow) throw new Error(`Không tìm thấy dòng Master Calendar cho mode ${rowMode} ở ngày mới.`);

        if (actionType === 'UPDATE') {
          if (!eventId) throw new Error('Dòng này chưa có event_id để update lịch cũ.');
          updateExistingEvent_(eventId, masterRow);
          writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking, 'RESCHEDULED');
        } else if (actionType === 'RECREATE') {
          const newEvent = recreateExistingEvent_(eventId, masterRow, fullName, email, rowMode);
          writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.eventId, newEvent.id);
          writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking, 'RECREATED');
        } else {
          throw new Error(`Action không hợp lệ: ${actionType}`);
        }

        if (CONFIG.BATCH_JOB.updateResponseDate) {
          writeCellByHeader_(responseSheet, row, headerMap, CONFIG.RESPONSE_HEADERS.attendDate, normalizeDateForSheet_(masterRow.startDate));
        }

        writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.processedAt, new Date());
        writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.error, '');
        successCount++;
      } catch (error) {
        writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking, 'ERROR');
        writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.error, error.message || String(error));
        errorCount++;
      }
    }

    const summary = `Batch ${actionType} xong. Matched=${matchedCount}, Success=${successCount}, Error=${errorCount}, SkippedMode=${skippedModeCount}, SkippedInvalidMode=${skippedInvalidModeCount}`;
    Logger.log(summary);
    SpreadsheetApp.getUi().alert(summary);
  } finally {
    lock.releaseLock();
  }
}

function processOneRow_(responseSheet, row) {
  const headerMap = getHeaderMap_(responseSheet);

  const tracking = readCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking);
  const existingEventId = readCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.eventId);

  if (existingEventId || String(tracking || '').toUpperCase() === 'SENT') {
    return;
  }

  try {
    const values = responseSheet.getRange(row, 1, 1, responseSheet.getLastColumn()).getValues()[0];

    // Đọc theo header khoan dung (normHeaderKey_) để không lệch Unicode
    const emailCol = headerMap[normHeaderKey_(CONFIG.RESPONSE_HEADERS.email)];
    const fullNameCol = headerMap[normHeaderKey_(CONFIG.RESPONSE_HEADERS.fullName)];
    const attendDateCol = headerMap[normHeaderKey_(CONFIG.RESPONSE_HEADERS.attendDate)];
    const modeCol = headerMap[normHeaderKey_(CONFIG.RESPONSE_HEADERS.mode)];

    if (!emailCol) throw new Error(`Không tìm thấy cột "${CONFIG.RESPONSE_HEADERS.email}" trong sheet.`);
    if (!fullNameCol) throw new Error(`Không tìm thấy cột "${CONFIG.RESPONSE_HEADERS.fullName}" trong sheet.`);
    if (!attendDateCol) throw new Error(`Không tìm thấy cột "${CONFIG.RESPONSE_HEADERS.attendDate}" trong sheet.`);
    if (!modeCol) throw new Error(`Không tìm thấy cột "${CONFIG.RESPONSE_HEADERS.mode}" trong sheet.`);

    const email = String(values[emailCol - 1] || '').trim();
    const fullName = String(values[fullNameCol - 1] || '').trim();
    const attendDateRaw = values[attendDateCol - 1];
    const modeRaw = values[modeCol - 1];

    if (!email) throw new Error('Thiếu email học viên.');
    if (!fullName) throw new Error('Thiếu họ tên học viên.');
    if (!attendDateRaw) throw new Error('Thiếu ngày tham dự.');
    if (!modeRaw) throw new Error('Thiếu hình thức tham dự.');

    const attendDate = parseDateValue_(attendDateRaw);
    const mode = normalizeMode_(modeRaw);
    const masterRow = findMasterRow_(attendDate, mode);

    const eventResource = buildEventResource_(masterRow, fullName, email, mode);
    const event = Calendar.Events.insert(eventResource, CONFIG.CALENDAR_ID, {
      sendUpdates: 'all'
    });

    writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.eventId, event.id);
    writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking, 'SENT');
    writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.processedAt, new Date());
    writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.error, '');
  } catch (error) {
    writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking, 'ERROR');
    writeCellByHeader_(responseSheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.error, error.message || String(error));
    throw error;
  }
}

function recreateExistingEvent_(oldEventId, masterRow, fullName, email, mode) {
  if (oldEventId) {
    try {
      Calendar.Events.remove(CONFIG.CALENDAR_ID, oldEventId, { sendUpdates: 'all' });
    } catch (error) {
      Logger.log(`Không xóa được event cũ ${oldEventId}: ${error.message || error}`);
    }
  }

  const eventResource = buildEventResource_(masterRow, fullName, email, mode);
  return Calendar.Events.insert(eventResource, CONFIG.CALENDAR_ID, {
    sendUpdates: 'all'
  });
}

function updateExistingEvent_(eventId, masterRow) {
  const event = Calendar.Events.get(CONFIG.CALENDAR_ID, eventId);
  event.summary = buildCalendarSummary_(masterRow);
  event.description = buildCalendarContentText_(masterRow, '', '', normalizeMode_(masterRow.mode || CONFIG.BATCH_JOB.mode));
  event.location = normalizeMode_(masterRow.mode || CONFIG.BATCH_JOB.mode) === 'ONLINE' ? 'Online' : (masterRow.location || '');
  event.start = {
    dateTime: toRfc3339_(combineDateTime_(masterRow.startDate, masterRow.startTime), CONFIG.TIMEZONE),
    timeZone: CONFIG.TIMEZONE
  };
  event.end = {
    dateTime: toRfc3339_(combineDateTime_(masterRow.endDate, masterRow.endTime), CONFIG.TIMEZONE),
    timeZone: CONFIG.TIMEZONE
  };
  event.reminders = CONFIG.REMINDERS;

  Calendar.Events.update(event, CONFIG.CALENDAR_ID, eventId, {
    sendUpdates: 'all'
  });
}

function buildEventResource_(masterRow, fullName, email, mode) {
  const startDateTime = combineDateTime_(masterRow.startDate, masterRow.startTime);
  const endDateTime = combineDateTime_(masterRow.endDate, masterRow.endTime);
  const description = buildCalendarContentText_(masterRow, fullName, email, mode);

  return {
    summary: buildCalendarSummary_(masterRow),
    location: mode === 'ONLINE' ? 'Online' : (masterRow.location || ''),
    description: description,
    start: {
      dateTime: toRfc3339_(startDateTime, CONFIG.TIMEZONE),
      timeZone: CONFIG.TIMEZONE
    },
    end: {
      dateTime: toRfc3339_(endDateTime, CONFIG.TIMEZONE),
      timeZone: CONFIG.TIMEZONE
    },
    attendees: [{ email: email, displayName: fullName }],
    reminders: CONFIG.REMINDERS
  };
}

function buildCalendarSummary_(masterRow) {
  const subject = String(masterRow.mailSubject || '').trim();
  if (!subject) return masterRow.title;
  const firstLine = subject.split(/\r?\n/).find(Boolean);
  return firstLine || masterRow.title;
}

function buildCalendarContentText_(masterRow, fullName, email, mode) {
  const template = String(masterRow.mailBody || '').trim();
  const startDateTime = combineDateTime_(masterRow.startDate, masterRow.startTime);
  const endDateTime = combineDateTime_(masterRow.endDate, masterRow.endTime);

  const replacements = {
    '{{name}}': fullName || '',
    '{{email}}': email || '',
    '{{title}}': masterRow.title || '',
    '{{mode}}': mode === 'ONLINE' ? 'Online' : 'Offline',
    '{{date}}': Utilities.formatDate(startDateTime, CONFIG.TIMEZONE, 'dd/MM/yyyy'),
    '{{start_time}}': Utilities.formatDate(startDateTime, CONFIG.TIMEZONE, 'HH:mm'),
    '{{end_time}}': Utilities.formatDate(endDateTime, CONFIG.TIMEZONE, 'HH:mm'),
    '{{location}}': masterRow.location || '',
    '{{meet_link}}': masterRow.meetLink || '',
    '{{class_code}}': masterRow.classCode || ''
  };

  let body = template;
  Object.keys(replacements).forEach(key => {
    body = body.split(key).join(replacements[key]);
  });

  return body;
}

function findMasterRow_(attendDate, mode) {
  const targetDateKey = formatDateKey_(attendDate);
  return findMasterByDateKeyAndMode_(targetDateKey, normalizeMode_(mode));
}

function findMasterByDateAndModeText_(dateText, mode) {
  const targetDateKey = formatDateKey_(parseDateValue_(dateText));
  return findMasterByDateKeyAndMode_(targetDateKey, normalizeMode_(mode));
}

function findMasterByDateKeyAndMode_(targetDateKey, normalizedMode) {
  const masterSheet = SpreadsheetApp.openById(CONFIG.MASTER_SPREADSHEET_ID).getSheetByName(CONFIG.MASTER_SHEET_NAME);
  if (!masterSheet) throw new Error(`Không tìm thấy master sheet: ${CONFIG.MASTER_SHEET_NAME}`);

  const data = masterSheet.getDataRange().getValues();
  if (data.length < 2) throw new Error('Master Calendar chưa có dữ liệu.');

  const headers = data[0];
  const idx = indexMapFromHeaderRow_(headers);
  validateRequiredMasterHeaders_(idx);

  const matches = data.slice(1)
    .filter(row => row.some(cell => cell !== '' && cell !== null))
    .map(row => ({
      classCode: row[idx[CONFIG.MASTER_HEADERS.classCode]],
      title: row[idx[CONFIG.MASTER_HEADERS.title]],
      mode: row[idx[CONFIG.MASTER_HEADERS.mode]],
      startDate: row[idx[CONFIG.MASTER_HEADERS.startDate]],
      startTime: row[idx[CONFIG.MASTER_HEADERS.startTime]],
      endDate: row[idx[CONFIG.MASTER_HEADERS.endDate]],
      endTime: row[idx[CONFIG.MASTER_HEADERS.endTime]],
      location: row[idx[CONFIG.MASTER_HEADERS.location]],
      meetLink: row[idx[CONFIG.MASTER_HEADERS.meetLink]],
      mailSubject: row[idx[CONFIG.MASTER_HEADERS.mailSubject]],
      mailBody: row[idx[CONFIG.MASTER_HEADERS.mailBody]]
    }))
    .filter(item => formatDateKey_(parseDateValue_(item.startDate)) === targetDateKey)
    .filter(item => normalizeMode_(item.mode) === normalizedMode);

  if (matches.length === 0) {
    throw new Error(`Không tìm thấy lịch phù hợp trong Master Calendar cho ngày ${targetDateKey} và hình thức ${normalizedMode}.`);
  }

  if (matches.length > 1) {
    throw new Error(`Có ${matches.length} lịch cùng ngày và cùng hình thức. Form hiện tại chưa có class_code nên chưa thể phân biệt. Bạn cần thêm 1 cột phân loại vào form hoặc master.`);
  }

  return matches[0];
}

function ensureSystemColumns_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.RESPONSE_SHEET_NAME);
  if (!sheet) throw new Error(`Không tìm thấy sheet response: ${CONFIG.RESPONSE_SHEET_NAME}`);

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const existing = headers.map(h => normHeaderKey_(h));
  const additions = Object.values(CONFIG.SYSTEM_COLUMNS).filter(h => !existing.includes(normHeaderKey_(h)));

  if (additions.length) {
    sheet.getRange(1, sheet.getLastColumn() + 1, 1, additions.length).setValues([additions]);
  }
}

function createFormSubmitTrigger_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const triggers = ScriptApp.getProjectTriggers();

  triggers.forEach(trigger => {
    if (trigger.getHandlerFunction() === 'onFormSubmit') {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  ScriptApp.newTrigger('onFormSubmit')
    .forSpreadsheet(ss)
    .onFormSubmit()
    .create();
}

// Header map dùng KEY đã chuẩn hóa (normHeaderKey_) -> số cột.
function getHeaderMap_(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const map = {};
  headers.forEach((header, index) => {
    if (header === '' || header == null) return;
    map[normHeaderKey_(header)] = index + 1;
  });
  return map;
}

function indexMapFromHeaderRow_(headers) {
  const map = {};
  headers.forEach((header, index) => {
    if (header) map[String(header).trim()] = index;
  });
  return map;
}

function readCellByHeader_(sheet, row, headerMap, headerName) {
  const col = headerMap[normHeaderKey_(headerName)];
  if (!col) return '';
  return sheet.getRange(row, col).getValue();
}

function writeCellByHeader_(sheet, row, headerMap, headerName, value) {
  const refreshedMap = getHeaderMap_(sheet);
  const col = refreshedMap[normHeaderKey_(headerName)];
  if (!col) throw new Error(`Không tìm thấy cột: ${headerName}`);
  sheet.getRange(row, col).setValue(value);
}

function validateConfig_() {
  if (!CONFIG.MASTER_SPREADSHEET_ID || CONFIG.MASTER_SPREADSHEET_ID === 'PASTE_MASTER_SPREADSHEET_ID_HERE') {
    throw new Error('Bạn chưa điền MASTER_SPREADSHEET_ID trong CONFIG.');
  }
}

function validateBatchJobConfig_() {
  if (!CONFIG.BATCH_JOB.oldDateText) throw new Error('Bạn chưa điền oldDateText trong CONFIG.BATCH_JOB.');
  if (!CONFIG.BATCH_JOB.newDateText) throw new Error('Bạn chưa điền newDateText trong CONFIG.BATCH_JOB.');
  if (!CONFIG.BATCH_JOB.mode) throw new Error('Bạn chưa điền mode trong CONFIG.BATCH_JOB.');
  resolveBatchModeConfig_(CONFIG.BATCH_JOB.mode);
}

function validateRequiredMasterHeaders_(idx) {
  Object.values(CONFIG.MASTER_HEADERS).forEach(header => {
    if (idx[header] === undefined) {
      throw new Error(`Master Calendar đang thiếu cột: ${header}`);
    }
  });
}

function resolveBatchModeConfig_(value) {
  const raw = String(value || '').trim().toUpperCase();
  if (raw === 'ALL') {
    return {
      applyAllModes: true,
      normalizedMode: 'ALL',
      targetModes: ['ONLINE', 'OFFLINE']
    };
  }

  const normalizedMode = normalizeMode_(value);
  return {
    applyAllModes: false,
    normalizedMode: normalizedMode,
    targetModes: [normalizedMode]
  };
}

function normalizeMode_(value) {
  const raw = String(value || '').trim().toLowerCase();

  if (
    raw.includes('online') ||
    raw.includes('onl') ||
    raw.includes('trực tuyến') ||
    raw.includes('google meet') ||
    raw.includes('zoom') ||
    raw.includes('meet')
  ) return 'ONLINE';

  if (
    raw.includes('offline') ||
    raw.includes('off') ||
    raw.includes('trực tiếp') ||
    raw.includes('văn phòng') ||
    raw.includes('learning center') ||
    raw.includes('tại lớp')
  ) return 'OFFLINE';

  throw new Error(`Không nhận diện được hình thức tham dự: ${value}`);
}

function normalizeModeSafe_(value) {
  try {
    return normalizeMode_(value);
  } catch (error) {
    return '';
  }
}

function parseDateValue_(value) {
  if (value instanceof Date) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }

  const str = String(value || '').trim();
  const match = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (match) {
    const day = Number(match[1]);
    const month = Number(match[2]) - 1;
    const year = Number(match[3]);
    return new Date(year, month, day);
  }

  const parsed = new Date(str);
  if (!isNaN(parsed.getTime())) {
    return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
  }

  throw new Error(`Không đọc được ngày: ${value}`);
}

function normalizeDateDisplay_(value) {
  const date = parseDateValue_(value);
  return Utilities.formatDate(date, CONFIG.TIMEZONE, 'dd/MM/yyyy');
}

function normalizeDateDisplaySafe_(value) {
  try {
    return normalizeDateDisplay_(value);
  } catch (error) {
    return '';
  }
}

function normalizeDateForSheet_(value) {
  return parseDateValue_(value);
}

function formatDateKey_(date) {
  return Utilities.formatDate(date, CONFIG.TIMEZONE, 'yyyy-MM-dd');
}

function combineDateTime_(dateValue, timeValue) {
  const date = parseDateValue_(dateValue);
  const time = parseTimeValue_(timeValue);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.hours, time.minutes, 0);
}

function parseTimeValue_(value) {
  if (value instanceof Date) {
    return { hours: value.getHours(), minutes: value.getMinutes() };
  }

  const str = String(value || '').trim();
  const match = str.match(/^(\d{1,2}):(\d{2})$/);
  if (match) {
    return { hours: Number(match[1]), minutes: Number(match[2]) };
  }

  throw new Error(`Không đọc được giờ: ${value}`);
}

function toRfc3339_(date, timeZone) {
  const base = Utilities.formatDate(date, timeZone, "yyyy-MM-dd'T'HH:mm:ss");
  const offset = Utilities.formatDate(date, timeZone, 'Z').replace(/([+-]\d{2})(\d{2})/, '$1:$2');
  return base + offset;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  function norm(v) {
    return String(v == null ? '' : v)
      .normalize('NFC').replace(/ /g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  try {
    validateConfig_();
    ensureSystemColumns_();

    var data;
    if (e.parameter && e.parameter.payload) {
      data = JSON.parse(e.parameter.payload);
    } else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      throw new Error('Không nhận được dữ liệu. Kiểm tra lại request.');
    }

    var SHARED_SECRET = PropertiesService.getScriptProperties().getProperty('SHARED_SECRET')
      || '01ac3d94a433004a5ca87e8a5ac970d164e9c34ed359f158';
    if (!data.secret || data.secret !== SHARED_SECRET) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'forbidden' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.RESPONSE_SHEET_NAME);
    if (!sheet) throw new Error('Không tìm thấy sheet response: ' + CONFIG.RESPONSE_SHEET_NAME);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var idx = {};
    headers.forEach(function (h, i) { if (h !== '' && h != null) idx[norm(h)] = i + 1; });
    var col = function (name) { return name ? (idx[norm(name)] || 0) : 0; };

    var ID2HEADER = {
      email: CONFIG.RESPONSE_HEADERS.email,
      fullName: CONFIG.RESPONSE_HEADERS.fullName,
      attendDate: CONFIG.RESPONSE_HEADERS.attendDate,
      mode: CONFIG.RESPONSE_HEADERS.mode
    };

    // Dựng cả dòng rồi appendRow 1 lần (nguyên tử) — tránh va chạm getLastRow()+1 khi có submit đồng thời.
    var lastCol = sheet.getLastColumn();
    var rowArr = new Array(lastCol).fill('');

    var tsCol = col('Dấu thời gian') || col('Timestamp') || 1;
    rowArr[tsCol - 1] = new Date();

    var attendDateCol = col(CONFIG.RESPONSE_HEADERS.attendDate);
    var fields = data.fields || [];
    var unmatched = [];

    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      var value = f.value;
      var c = col(f.sheetHeader || ID2HEADER[f.id]);
      if (!c) { unmatched.push((f.id || '?') + ' / ' + (f.sheetHeader || '(no header)')); continue; }

      if (c === attendDateCol && value) {
        var cleaned = String(value).replace(/\s*\(.*?\)\s*/g, '').trim();
        var parts = cleaned.split('/');
        if (parts.length === 3) {
          value = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
        }
      }
      rowArr[c - 1] = value;
    }
    if (unmatched.length) Logger.log('doPost: không khớp cột cho: ' + unmatched.join(', '));

    sheet.appendRow(rowArr);
    var newRow = sheet.getLastRow();

    var calendarWarning = '';
    try {
      processOneRow_(sheet, newRow);
    } catch (err) {
      calendarWarning = err.message || String(err);
      Logger.log('processOneRow_ error: ' + calendarWarning);
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Đăng ký thành công! Bạn sẽ nhận được lời mời qua Google Calendar.',
      calendarWarning: calendarWarning,
      unmatchedFields: unmatched
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('doPost error: ' + (error.stack || error));
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message || String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// (A) Reprocess các dòng lỗi/trống/treo, bắt đầu từ REPROCESS_START_ROW (mặc định 2176).
//     Bỏ qua các dòng đã SENT hoặc đã có event_id.
function reprocessRowsFrom_(startRow) {
  validateConfig_();
  ensureSystemColumns_();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.RESPONSE_SHEET_NAME);
  var headerMap = getHeaderMap_(sheet);
  var lastRow = sheet.getLastRow();
  var begin = Math.max(2, Number(startRow) || CONFIG.REPROCESS_START_ROW);
  var ok = 0, err = 0, skipped = 0, lastErr = '';

  for (var row = begin; row <= lastRow; row++) {
    var tracking = readCellByHeader_(sheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking);
    var eventId = readCellByHeader_(sheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.eventId);
    if (!eventId && String(tracking || '').toUpperCase() !== 'SENT') {
      try { processOneRow_(sheet, row); ok++; }
      catch (e) { err++; lastErr = 'Dòng ' + row + ': ' + (e.message || e); Logger.log(lastErr); }
    } else {
      skipped++;
    }
  }

  var msg = 'Reprocess từ dòng ' + begin + ' → ' + lastRow +
    '. Thành công=' + ok + ', Lỗi=' + err + ', Bỏ qua (đã SENT)=' + skipped +
    (lastErr ? '\nLỗi gần nhất: ' + lastErr : '');
  Logger.log(msg);
  try { SpreadsheetApp.getUi().alert(msg); } catch (e) {}
}

// (B) Ép chạy ĐÚNG 1 dòng (xóa tracking + event_id cũ) và HIỆN LỖI cụ thể — để test.
function forceRow(rowNumber) {
  var row = Number(rowNumber) || CONFIG.REPROCESS_START_ROW;
  validateConfig_();
  ensureSystemColumns_();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.RESPONSE_SHEET_NAME);
  var headerMap = getHeaderMap_(sheet);
  writeCellByHeader_(sheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.tracking, '');
  writeCellByHeader_(sheet, row, headerMap, CONFIG.SYSTEM_COLUMNS.eventId, '');
  try {
    processOneRow_(sheet, row);
    SpreadsheetApp.getUi().alert('Dòng ' + row + ': OK — đã tạo lịch và gửi lời mời.');
  } catch (e) {
    SpreadsheetApp.getUi().alert('Dòng ' + row + ' LỖI: ' + (e.message || e));
  }
}
