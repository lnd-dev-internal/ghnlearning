"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type { FormField, FormConfig } from '@/lib/formStore';
import { useFormConfig, updateFormConfig, createFormConfig } from '@/lib/formStore';
import styles from './FormEditor.module.css';
import { supabase } from '@/lib/supabase';

// ── Default fields for first-time creation ────────────────────────────────
const DEFAULT_FIELDS: FormField[] = [
  { id: 'email', label: 'Địa chỉ email', type: 'email', required: true, placeholder: 'example@ghn.vn', sheetHeader: 'Địa chỉ email' },
  { id: 'fullName', label: 'Họ và Tên của Anh/Chị', type: 'text', required: true, placeholder: 'Nguyễn Văn A', sheetHeader: 'Họ và Tên của Anh/Chị' },
  { id: 'attendDate', label: 'Ngày tham dự', type: 'select', required: true, options: ['29/05/2026 (Thứ 6)'], sheetHeader: 'Ngày tham dự' },
  { id: 'mode', label: 'Hình thức tham dự', type: 'radio', required: true, options: ['Online (Google Meet)', 'Offline (Tại GHN Learning Center)'], sheetHeader: 'Hình thức tham dự' },
];

const FIELD_TYPES: FormField['type'][] = ['text', 'email', 'select', 'radio', 'textarea'];

const TYPE_LABELS: Record<FormField['type'], string> = {
  text: 'Văn bản',
  email: 'Email',
  select: 'Dropdown',
  radio: 'Radio',
  textarea: 'Đoạn văn',
};

function generateId(): string {
  return `field_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

// ── FieldCard sub-component ───────────────────────────────────────────────
interface FieldCardProps {
  field: FormField;
  index: number;
  total: number;
  onChange: (id: string, updates: Partial<FormField>) => void;
  onDelete: (id: string) => void;
  onMove: (id: string, direction: 'up' | 'down') => void;
}

function FieldCard({ field, index, total, onChange, onDelete, onMove }: FieldCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const showPlaceholder = field.type === 'text' || field.type === 'email' || field.type === 'textarea';
  const showOptions = field.type === 'select' || field.type === 'radio';

  const handleOptionChange = (optIndex: number, value: string) => {
    const updated = [...(field.options ?? [])];
    updated[optIndex] = value;
    onChange(field.id, { options: updated });
  };

  const handleAddOption = () => {
    const updated = [...(field.options ?? []), ''];
    onChange(field.id, { options: updated });
  };

  const handleRemoveOption = (optIndex: number) => {
    const updated = (field.options ?? []).filter((_, i) => i !== optIndex);
    onChange(field.id, { options: updated });
  };

  return (
    <div className={styles.fieldCard}>
      {/* Header — always visible */}
      <div className={styles.fieldHeader} onClick={() => setExpanded(!expanded)}>
        <div className={styles.fieldDragHandle} title="Kéo để sắp xếp">
          <span className={styles.fieldDragDot} />
          <span className={styles.fieldDragDot} />
          <span className={styles.fieldDragDot} />
        </div>
        <span className={styles.fieldName}>{field.label || 'Chưa đặt tên'}</span>
        <span className={styles.fieldTypeBadge}>{TYPE_LABELS[field.type]}</span>
        {field.required && <span className={styles.fieldRequiredBadge}>BẮT BUỘC</span>}
        <svg
          className={`${styles.fieldChevron} ${expanded ? styles.fieldChevronOpen : ''}`}
          width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Body — expandable */}
      {expanded && (
        <div className={styles.fieldBody}>
          <div className={styles.fieldBodyInner}>
            {/* Label + Sheet Header */}
            <div className={styles.row2}>
              <div className={styles.field}>
                <label className={styles.label}>NHÃN HIỂN THỊ <span style={{ color: '#FF5200' }}>*</span></label>
                <input
                  className={styles.input}
                  value={field.label}
                  onChange={e => onChange(field.id, { label: e.target.value })}
                  placeholder="Nhập nhãn trường..."
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>TÊN CỘT GOOGLE SHEET</label>
                <input
                  className={styles.input}
                  value={field.sheetHeader}
                  onChange={e => onChange(field.id, { sheetHeader: e.target.value })}
                  placeholder="Tên cột trong Sheet"
                />
              </div>
            </div>

            {/* Type + Required */}
            <div className={styles.row2}>
              <div className={styles.field}>
                <label className={styles.label}>LOẠI TRƯỜNG</label>
                <select
                  className={styles.select}
                  value={field.type}
                  onChange={e => {
                    const newType = e.target.value as FormField['type'];
                    const updates: Partial<FormField> = { type: newType };
                    // Auto-add empty options when switching to select/radio
                    if ((newType === 'select' || newType === 'radio') && !field.options?.length) {
                      updates.options = [''];
                    }
                    // Clear placeholder for non-text types
                    if (newType === 'select' || newType === 'radio') {
                      updates.placeholder = undefined;
                    }
                    onChange(field.id, updates);
                  }}
                >
                  {FIELD_TYPES.map(t => (
                    <option key={t} value={t}>{TYPE_LABELS[t]}</option>
                  ))}
                </select>
              </div>
              <div className={styles.field} style={{ justifyContent: 'flex-end' }}>
                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={e => onChange(field.id, { required: e.target.checked })}
                  />
                  Bắt buộc
                </label>
              </div>
            </div>

            {/* Placeholder (only for text/email/textarea) */}
            {showPlaceholder && (
              <div className={styles.field}>
                <label className={styles.label}>PLACEHOLDER</label>
                <input
                  className={styles.input}
                  value={field.placeholder ?? ''}
                  onChange={e => onChange(field.id, { placeholder: e.target.value })}
                  placeholder="Gợi ý cho người dùng..."
                />
              </div>
            )}

            {/* Options (only for select/radio) */}
            {showOptions && (
              <div className={styles.optionsSection}>
                <label className={styles.label}>
                  CÁC LỰA CHỌN ({(field.options ?? []).length})
                </label>
                {(field.options ?? []).map((opt, i) => (
                  <div key={i} className={styles.optionRow}>
                    <input
                      className={styles.optionInput}
                      value={opt}
                      onChange={e => handleOptionChange(i, e.target.value)}
                      placeholder={`Lựa chọn ${i + 1}`}
                    />
                    <button
                      type="button"
                      className={styles.removeOptionBtn}
                      onClick={() => handleRemoveOption(i)}
                      title="Xóa lựa chọn"
                      aria-label={`Xóa lựa chọn ${i + 1}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </button>
                  </div>
                ))}
                <button type="button" className={styles.addOptionBtn} onClick={handleAddOption}>
                  + Thêm lựa chọn
                </button>
              </div>
            )}

            {/* Move / Delete actions */}
            <div className={styles.fieldActions}>
              {!confirmDelete ? (
                <>
                  <button
                    type="button"
                    className={styles.deleteFieldBtn}
                    onClick={() => setConfirmDelete(true)}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                      <path d="M10 11v6M14 11v6"/>
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                    </svg>
                    Xóa trường
                  </button>
                  <button
                    type="button"
                    className={styles.moveBtn}
                    onClick={() => onMove(field.id, 'up')}
                    disabled={index === 0}
                    title="Di chuyển lên"
                    aria-label="Di chuyển trường lên"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 19V5M5 12l7-7 7 7"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={styles.moveBtn}
                    onClick={() => onMove(field.id, 'down')}
                    disabled={index === total - 1}
                    title="Di chuyển xuống"
                    aria-label="Di chuyển trường xuống"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14M5 12l7 7 7-7"/>
                    </svg>
                  </button>
                </>
              ) : (
                <div className={styles.deleteConfirm}>
                  <span>Xóa trường này?</span>
                  <button
                    type="button"
                    className={styles.deleteConfirmBtn}
                    onClick={() => { onDelete(field.id); setConfirmDelete(false); }}
                  >
                    Xóa
                  </button>
                  <button
                    type="button"
                    className={styles.deleteCancelBtn}
                    onClick={() => setConfirmDelete(false)}
                  >
                    Hủy
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main FormEditor ───────────────────────────────────────────────────────
type SaveState = 'saved' | 'unsaved' | 'saving' | 'error';

export default function FormEditor() {
  const formConfig = useFormConfig();
  const [initialized, setInitialized] = useState(false);
  const [creating, setCreating] = useState(false);

  // Local editable state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [headerImage, setHeaderImage] = useState('');
  const [appsScriptUrl, setAppsScriptUrl] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [fields, setFields] = useState<FormField[]>([]);
  const [configId, setConfigId] = useState<string | null>(null);

  const [saveState, setSaveState] = useState<SaveState>('saved');
  const [saveError, setSaveError] = useState('');

  // Image upload state
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Populate local state from formConfig (only on initial load or after a successful save)
  useEffect(() => {
    if (formConfig) {
      // Only sync from DB if we haven't initialized yet, or if save just completed
      if (!initialized || saveState === 'saved') {
        setTitle(formConfig.title);
        setDescription(formConfig.description);
        setHeaderImage(formConfig.headerImage);
        setAppsScriptUrl(formConfig.appsScriptUrl);
        setIsActive(formConfig.isActive);
        setFields(formConfig.fields);
        setConfigId(formConfig.id);
        setInitialized(true);
      }
    } else if (formConfig === null && !initialized && !creating) {
      // No config exists — auto-create with defaults
      setCreating(true);
      const defaultConfig = {
        title: 'GHN Learning Leaders Talk',
        description: 'Đăng ký tham dự Leaders Talk',
        headerImage: '',
        fields: DEFAULT_FIELDS,
        appsScriptUrl: '',
        isActive: true,
      };
      createFormConfig(defaultConfig)
        .then((created) => {
          setTitle(created.title);
          setDescription(created.description);
          setHeaderImage(created.headerImage);
          setAppsScriptUrl(created.appsScriptUrl);
          setIsActive(created.isActive);
          setFields(created.fields);
          setConfigId(created.id);
          setInitialized(true);
        })
        .catch(() => {
          // Fallback: just use defaults locally
          setTitle(defaultConfig.title);
          setDescription(defaultConfig.description);
          setHeaderImage(defaultConfig.headerImage);
          setAppsScriptUrl(defaultConfig.appsScriptUrl);
          setIsActive(defaultConfig.isActive);
          setFields(defaultConfig.fields);
          setInitialized(true);
        })
        .finally(() => setCreating(false));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formConfig, initialized, creating]);

  // Mark unsaved on any change
  const markUnsaved = useCallback(() => {
    if (initialized) setSaveState('unsaved');
  }, [initialized]);

  const handleTitleChange = (v: string) => { setTitle(v); markUnsaved(); };
  const handleDescriptionChange = (v: string) => { setDescription(v); markUnsaved(); };
  const handleHeaderImageChange = (v: string) => { setHeaderImage(v); markUnsaved(); };
  const handleAppsScriptUrlChange = (v: string) => { setAppsScriptUrl(v); markUnsaved(); };
  const handleActiveToggle = () => { setIsActive(prev => !prev); markUnsaved(); };

  const handleFieldChange = (id: string, updates: Partial<FormField>) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, ...updates } : f));
    markUnsaved();
  };

  const handleFieldDelete = (id: string) => {
    setFields(prev => prev.filter(f => f.id !== id));
    markUnsaved();
  };

  const handleFieldMove = (id: string, direction: 'up' | 'down') => {
    setFields(prev => {
      const idx = prev.findIndex(f => f.id === id);
      if (idx < 0) return prev;
      const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= prev.length) return prev;
      const updated = [...prev];
      [updated[idx], updated[swapIdx]] = [updated[swapIdx], updated[idx]];
      return updated;
    });
    markUnsaved();
  };

  const handleAddField = () => {
    const newField: FormField = {
      id: generateId(),
      label: '',
      type: 'text',
      required: false,
      placeholder: '',
      sheetHeader: '',
    };
    setFields(prev => [...prev, newField]);
    markUnsaved();
  };

  const handleSave = async () => {
    setSaveState('saving');
    setSaveError('');
    try {
      const data: Partial<FormConfig> = {
        title,
        description,
        headerImage,
        appsScriptUrl,
        isActive,
        fields,
      };

      if (configId) {
        await updateFormConfig(configId, data);
      } else {
        const created = await createFormConfig({
          title,
          description,
          headerImage,
          appsScriptUrl,
          isActive,
          fields,
        });
        setConfigId(created.id);
      }
      setSaveState('saved');
    } catch (err: unknown) {
      const msg = err instanceof Error
        ? err.message
        : (err as { message?: string })?.message ?? JSON.stringify(err);
      setSaveError(`Lưu thất bại: ${msg}`);
      setSaveState('error');
    }
  };

  // ── Loading state ────────────────────────────────────────────────────────
  if (!initialized) {
    return (
      <div className={styles.editor}>
        <div className={styles.card}>
          <div className={styles.statusBar}>
            <span className={styles.spinner} />
            {creating ? 'Đang tạo form mặc định...' : 'Đang tải cấu hình form...'}
          </div>
        </div>
      </div>
    );
  }

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div className={styles.editor}>
      {/* ── General settings card ───────────────────────────────────────── */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>
          <span className={styles.cardTitleIcon}>⚙</span>
          Cài đặt chung
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className={styles.field}>
            <label className={styles.label}>TIÊU ĐỀ FORM</label>
            <input
              className={styles.input}
              value={title}
              onChange={e => handleTitleChange(e.target.value)}
              placeholder="GHN Learning Leaders Talk"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>MÔ TẢ</label>
            <textarea
              className={styles.textarea}
              value={description}
              onChange={e => handleDescriptionChange(e.target.value)}
              placeholder="Mô tả ngắn gọn về form đăng ký..."
              rows={2}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>GOOGLE APPS SCRIPT WEB APP URL</label>
            <input
              className={styles.input}
              value={appsScriptUrl}
              onChange={e => handleAppsScriptUrlChange(e.target.value)}
              placeholder="https://script.google.com/macros/s/.../exec"
            />
            <p className={styles.helpText}>
              URL của Web App đã deploy từ Google Apps Script để ghi dữ liệu vào Google Sheet
            </p>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>ẢNH HEADER FORM</label>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                setUploadError('');
                if (file.size > 25 * 1024 * 1024) {
                  setUploadError('File quá lớn. Tối đa 25MB.');
                  return;
                }
                setUploading(true);
                try {
                  const path = `header/${Date.now()}_${file.name}`;
                  const { error } = await supabase.storage.from('form-assets').upload(path, file);
                  if (error) {
                    setUploadError(`Upload thất bại: ${error.message}`);
                    setUploading(false);
                    return;
                  }
                  const { data: { publicUrl } } = supabase.storage.from('form-assets').getPublicUrl(path);
                  handleHeaderImageChange(publicUrl);
                } catch (err: unknown) {
                  setUploadError(`Upload thất bại: ${err instanceof Error ? err.message : 'Unknown error'}`);
                } finally {
                  setUploading(false);
                  // Reset input so same file can be re-selected
                  if (fileInputRef.current) fileInputRef.current.value = '';
                }
              }}
            />

            {headerImage ? (
              /* ── Image preview with remove button ── */
              <div style={{ position: 'relative', marginTop: 4, borderRadius: 14, overflow: 'hidden', maxHeight: 160 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={headerImage} alt="Header preview" style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
                <button
                  type="button"
                  onClick={() => { handleHeaderImageChange(''); setUploadError(''); }}
                  title="Xóa ảnh"
                  aria-label="Xóa ảnh header"
                  style={{
                    position: 'absolute', top: 8, right: 8,
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'rgba(0,0,0,0.55)', border: 'none',
                    color: '#fff', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backdropFilter: 'blur(4px)', transition: 'background 200ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(220,38,38,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.55)')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ) : (
              /* ── Upload drop zone ── */
              <div
                onClick={() => !uploading && fileInputRef.current?.click()}
                style={{
                  border: '2px dashed #e0ddd8', borderRadius: 14,
                  padding: '24px 16px', textAlign: 'center' as const,
                  cursor: uploading ? 'wait' : 'pointer',
                  transition: 'border-color 200ms, background 200ms',
                  background: '#fafaf8', position: 'relative',
                }}
                onMouseEnter={e => { if (!uploading) { e.currentTarget.style.borderColor = '#FF5200'; e.currentTarget.style.background = '#fff8f5'; } }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0ddd8'; e.currentTarget.style.background = '#fafaf8'; }}
              >
                {uploading ? (
                  /* Loading overlay */
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }} aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="#e0ddd8" strokeWidth="3" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="#FF5200" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    <span style={{ fontSize: 13, color: '#8a8578' }}>Đang tải lên...</span>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#bbb5a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span style={{ fontSize: 13, color: '#8a8578', fontWeight: 500 }}>Nhấn để tải ảnh lên</span>
                    <span style={{ fontSize: 11, color: '#b5b0a6' }}>PNG, JPG, WEBP — tối đa 25MB</span>
                  </div>
                )}
              </div>
            )}

            {/* Upload error */}
            {uploadError && (
              <p style={{ margin: '6px 0 0', fontSize: 12, color: '#dc2626', fontWeight: 500 }}>
                {uploadError}
              </p>
            )}

            {/* Alternative: paste URL */}
            <div style={{ marginTop: 8 }}>
              <details style={{ fontSize: 12, color: '#8a8578' }}>
                <summary style={{ cursor: 'pointer', userSelect: 'none' }}>Hoặc dán URL ảnh</summary>
                <input
                  className={styles.input}
                  value={headerImage}
                  onChange={e => handleHeaderImageChange(e.target.value)}
                  placeholder="https://... (URL ảnh banner/header)"
                  style={{ marginTop: 6, fontSize: 13 }}
                />
              </details>
            </div>

            <p className={styles.helpText}>
              Ảnh hiển thị ở đầu form đăng ký (banner). Để trống nếu không cần.
            </p>
          </div>

          <div className={styles.toggleRow}>
            <span className={styles.toggleLabel}>Trạng thái form:</span>
            <button
              type="button"
              className={styles.toggleTrack}
              data-active={isActive}
              onClick={handleActiveToggle}
              aria-label={isActive ? 'Tắt form đăng ký' : 'Bật form đăng ký'}
            >
              <span className={styles.toggleThumb} />
            </button>
            <span
              className={`${styles.toggleStatus} ${isActive ? styles.toggleStatusActive : styles.toggleStatusInactive}`}
            >
              {isActive ? 'Đang mở' : 'Đã đóng'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Fields card ─────────────────────────────────────────────────── */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>
          <span className={styles.cardTitleIcon}>📋</span>
          Các trường dữ liệu ({fields.length})
        </h3>

        <div className={styles.fieldsList}>
          {fields.map((field, idx) => (
            <FieldCard
              key={field.id}
              field={field}
              index={idx}
              total={fields.length}
              onChange={handleFieldChange}
              onDelete={handleFieldDelete}
              onMove={handleFieldMove}
            />
          ))}
        </div>

        <button type="button" className={styles.addFieldBtn} onClick={handleAddField} style={{ marginTop: 12 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Thêm trường mới
        </button>
      </div>

      {/* ── Save footer ─────────────────────────────────────────────────── */}
      <div className={styles.footer}>
        <div className={styles.saveIndicator}>
          <span
            className={`${styles.saveIndicatorDot} ${
              saveState === 'saved' ? styles.saveIndicatorDotSaved :
              saveState === 'saving' ? styles.saveIndicatorDotSaving :
              styles.saveIndicatorDotUnsaved
            }`}
          />
          {saveState === 'saved' && 'Đã lưu'}
          {saveState === 'unsaved' && 'Có thay đổi chưa lưu'}
          {saveState === 'saving' && 'Đang lưu...'}
          {saveState === 'error' && <span className={styles.error}>{saveError}</span>}
        </div>
        <button
          type="button"
          className={styles.saveBtn}
          onClick={handleSave}
          disabled={saveState === 'saving' || saveState === 'saved'}
        >
          {saveState === 'saving' ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </div>
    </div>
  );
}
