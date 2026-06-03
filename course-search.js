(function () {
  var SEARCH_STYLE_ID = "course-search-global-style";
  var MAX_RESULTS = 8;

  var COURSE_INDEX = [
    { title: "Hướng dẫn Hội nhập", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / Quản lý Khu vực" },
    { title: "Kiểm soát và bàn giao hàng hóa", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / Quản lý Khu vực" },
    { title: "Quy trình bán hàng 5T", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / Quản lý Khu vực" },
    { title: "Quy trình mở mới Bưu cục", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / Quản lý Khu vực" },
    { title: "Xử lý Bưu cục cảnh báo & Điều hành Event", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / Quản lý Khu vực" },
    { title: "Quy trình làm việc NVXL", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / AM / Kỹ năng Chuyên môn" },
    { title: "Quy trình làm việc NVPTTT", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / AM / Kỹ năng Chuyên môn" },
    { title: "Nội quy lao động", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / AM / Kỹ năng Chuyên môn" },
    { title: "Quản lý Nghỉ phép", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / AM / Kỹ năng Chuyên môn" },
    { title: "Quy định về Camera", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / AM / Kỹ năng Chuyên môn" },
    { title: "Quản lý Ngân sách", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / AM / Kỹ năng Chuyên môn" },
    { title: "Chăm sóc Khách hàng", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / AM / Kỹ năng Chuyên môn" },
    { title: "Chăm sóc Khách hàng lớn", href: "am-kynang-chuyenmon.html", page: "Khối Thị Trường / AM / Kỹ năng Chuyên môn" },
    { title: "Tuyển dụng & Giữ chân Nhân viên", href: "am-kynang-quanly.html", page: "Khối Thị Trường / AM / Kỹ năng Quản lý" },
    { title: "Quản lý Hiệu quả công việc", href: "am-kynang-quanly.html", page: "Khối Thị Trường / AM / Kỹ năng Quản lý" },

    { title: "Vì sao Hội nhập quan trọng?", href: "newbie.html", page: "Khối Văn Phòng / GHN Newbie" },
    { title: "Bài 1: Chào bạn mới", href: "newbie.html", page: "Khối Văn Phòng / GHN Newbie" },
    { title: "Bài 2: An tâm làm việc - Hạnh phúc đồng hành", href: "newbie.html", page: "Khối Văn Phòng / GHN Newbie" },
    { title: "Bài 3: Bật mí bí mật vận hành", href: "newbie.html", page: "Khối Văn Phòng / GHN Newbie", aliases: ["Bài 3: Bật mí bí mật vận hành GHN"] },

    { title: "Quy trình xử lý đơn hàng", href: "cskh.html", page: "Khối Văn Phòng / CSKH / Tổng quan" },
    { title: "Trạng thái đơn hàng thường gặp", href: "cskh.html", page: "Khối Văn Phòng / CSKH / Tổng quan" },
    { title: "Hệ thống Chăm sóc Khách hàng", href: "cskh.html", page: "Khối Văn Phòng / CSKH / Tổng quan" },
    { title: "Quy định về SLA xử lý khiếu nại", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý Phiếu Tư vấn", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý Phiếu Thay đổi thông tin", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý Phiếu Hối Giao-Lấy-Trả", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại Mất hàng/Thiếu hàng", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại Sai SOP", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại Mâu thuẫn thông tin", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại Sai trạng thái", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại Đơn hàng quá hạn", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại COD/Công nợ", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại Hàng Hư hỏng", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại Nhầm hàng", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại Thái độ nhân viên", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Xử lý khiếu nại Lừa đảo", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },
    { title: "Quy trình xử lý Đền bù", href: "cskh-khieunai.html", page: "Khối Văn Phòng / CSKH / Khiếu nại" },

    { title: "Sản phẩm Thị trường SME", href: "fieldsale.html", page: "Khối Văn Phòng / Field Sale / Tổng quan" },
    { title: "Quy trình Vận hành GHN", href: "fieldsale.html", page: "Khối Văn Phòng / Field Sale / Tổng quan" },
    { title: "Chính sách & Quy trình bán hàng", href: "fieldsale-banhang.html", page: "Khối Văn Phòng / Field Sale / Bán hàng" },
    { title: "Công cụ & Phần mềm Quản lý bán hàng", href: "fieldsale-banhang.html", page: "Khối Văn Phòng / Field Sale / Bán hàng" },
    { title: "Kỹ năng Bán hàng thực địa", href: "fieldsale-banhang.html", page: "Khối Văn Phòng / Field Sale / Bán hàng" },
    { title: "Kỹ năng Hợp tác liên phòng ban", href: "fieldsale-banhang.html", page: "Khối Văn Phòng / Field Sale / Bán hàng" },

    { title: "Nhận tải", href: "freight.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng giao" },
    { title: "Gán đơn", href: "freight.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng giao" },
    { title: "Bắn kiểm", href: "freight.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng giao" },
    { title: "Thu tiền & Tạo phiếu", href: "freight.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng giao" },
    { title: "Tổng hợp quy trình xử lý hàng giao", href: "freight.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng giao" },
    { title: "Gán đơn lấy", href: "freight-lay.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng lấy" },
    { title: "Bắn kiểm", href: "freight-lay.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng lấy" },
    { title: "Nhận hàng tại kho GXT", href: "freight-lay.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng lấy" },
    { title: "Tổng hợp quy trình xử lý hàng lấy", href: "freight-lay.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng lấy" },
    { title: "Phân loại đơn hàng", href: "freight-tra.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng trả" },
    { title: "In mã đơn", href: "freight-tra.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng trả" },
    { title: "Tổng hợp quy trình xử lý hàng trả", href: "freight-tra.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Hàng trả" },
    { title: "Tổng hợp quy trình xử lý luân chuyển", href: "freight-lc.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Luân chuyển" },
    { title: "Xử lý Ticket", href: "freight-khac.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Quy trình khác" },
    { title: "Tạo phiếu Quản lý Rủi ro", href: "freight-khac.html", page: "Khối Hàng Nặng / Nhân viên Xử lý / Quy trình khác" },

    { title: "Nội quy làm việc", href: "nvph.html", page: "Khối Thị Trường / Nhân viên Phân loại hàng" },
    { title: "Nhập hàng", href: "nvph.html", page: "Khối Thị Trường / Nhân viên Phân loại hàng" },
    { title: "Xử lý hàng nhập", href: "nvph.html", page: "Khối Thị Trường / Nhân viên Phân loại hàng" },
    { title: "Đổ tải", href: "nvph.html", page: "Khối Thị Trường / Nhân viên Phân loại hàng" },
    { title: "Rã hàng/Cấp hàng tại Feeder", href: "nvph.html", page: "Khối Thị Trường / Nhân viên Phân loại hàng" },
    { title: "Đóng kiện tại Chute", href: "nvph.html", page: "Khối Thị Trường / Nhân viên Phân loại hàng" },
    { title: "Xuất kiện", href: "nvph.html", page: "Khối Thị Trường / Nhân viên Phân loại hàng" },
    { title: "An toàn lao động", href: "nvph.html", page: "Khối Thị Trường / Nhân viên Phân loại hàng" },
    { title: "Các lỗi/ sự cố thường gặp", href: "nvph.html", page: "Khối Thị Trường / Nhân viên Phân loại hàng" },

    { title: "Giao hàng", href: "nvpttt.html", page: "Khối Thị Trường / Nhân viên PTTT / Quy trình làm việc" },
    { title: "Lấy hàng", href: "nvpttt.html", page: "Khối Thị Trường / Nhân viên PTTT / Quy trình làm việc" },
    { title: "Quy định về POD", href: "nvpttt.html", page: "Khối Thị Trường / Nhân viên PTTT / Quy trình làm việc" },
    { title: "Quy trình Check-in", href: "nvpttt.html", page: "Khối Thị Trường / Nhân viên PTTT / Quy trình làm việc" },
    { title: "Xem lương tạm tính", href: "nvpttt.html", page: "Khối Thị Trường / Nhân viên PTTT / Quy trình làm việc" },
    { title: "Giải trình ZNS", href: "nvpttt.html", page: "Khối Thị Trường / Nhân viên PTTT / Quy trình làm việc" },
    { title: "Chăm sóc Khách hàng", href: "nvpttt-kinhdoanh.html", page: "Khối Thị Trường / Nhân viên PTTT / Kỹ năng Kinh doanh" },
    { title: "Chăm sóc Khách hàng lớn", href: "nvpttt-kinhdoanh.html", page: "Khối Thị Trường / Nhân viên PTTT / Kỹ năng Kinh doanh" },
    { title: "Kỹ năng bán hàng", href: "nvpttt-kinhdoanh.html", page: "Khối Thị Trường / Nhân viên PTTT / Kỹ năng Kinh doanh" },

    { title: "Nhận tải", href: "nvxl.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng giao" },
    { title: "Rã kiện", href: "nvxl.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng giao" },
    { title: "Gán đơn giao", href: "nvxl.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng giao" },
    { title: "Bắn kiểm", href: "nvxl.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng giao" },
    { title: "Thu tiền & Tạo phiếu", href: "nvxl.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng giao" },
    { title: "Tổng hợp quy trình xử lý hàng giao", href: "nvxl.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng giao" },
    { title: "Gán đơn lấy", href: "nvxl-lay.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng lấy" },
    { title: "Bắn kiểm", href: "nvxl-lay.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng lấy" },
    { title: "Nhận hàng tại Bưu cục", href: "nvxl-lay.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng lấy" },
    { title: "Tổng hợp quy trình xử lý hàng lấy", href: "nvxl-lay.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng lấy" },
    { title: "Phân loại đơn hàng", href: "nvxl-tra.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng trả" },
    { title: "In mã đơn", href: "nvxl-tra.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng trả" },
    { title: "Tổng hợp quy trình xử lý hàng trả", href: "nvxl-tra.html", page: "Khối Thị Trường / Nhân viên Xử lý / Hàng trả" },
    { title: "Đóng kiện", href: "nvxl-luanchuyen.html", page: "Khối Thị Trường / Nhân viên Xử lý / Luân chuyển" },
    { title: "Xuất kiện", href: "nvxl-luanchuyen.html", page: "Khối Thị Trường / Nhân viên Xử lý / Luân chuyển" },
    { title: "Tổng hợp quy trình xử lý luân chuyển", href: "nvxl-luanchuyen.html", page: "Khối Thị Trường / Nhân viên Xử lý / Luân chuyển" },
    { title: "Xử lý Ticket", href: "nvxl-khac.html", page: "Khối Thị Trường / Nhân viên Xử lý / Quy trình khác" },
    { title: "Tạo phiếu Quản lý Rủi ro", href: "nvxl-khac.html", page: "Khối Thị Trường / Nhân viên Xử lý / Quy trình khác" },
    { title: "Chăm sóc Khách hàng", href: "nvxl-kinhdoanh.html", page: "Khối Thị Trường / Nhân viên Xử lý / Kỹ năng Kinh doanh" },
    { title: "Chăm sóc Khách hàng lớn", href: "nvxl-kinhdoanh.html", page: "Khối Thị Trường / Nhân viên Xử lý / Kỹ năng Kinh doanh" },

    { title: "Hội nhập AM mới", href: "index.html", page: "Khối Thị Trường" },
    { title: "Quy trình nhận tải", href: "index.html", page: "Khối Thị Trường" },
    { title: "Quy trình rã kiện", href: "index.html", page: "Khối Thị Trường" },
    { title: "Quy trình gán đơn", href: "index.html", page: "Khối Thị Trường" },
    { title: "Quy trình bắn kiểm", href: "index.html", page: "Khối Thị Trường" },
    { title: "Quy trình giao hàng", href: "index.html", page: "Khối Thị Trường" },
    { title: "Quy trình lấy hàng", href: "index.html", page: "Khối Thị Trường" },
    { title: "Quy định về POD", href: "index.html", page: "Khối Thị Trường" },
    { title: "Quy trình Check-in", href: "index.html", page: "Khối Thị Trường" },
    { title: "Nội quy làm việc & Kiểm soát an ninh", href: "index.html", page: "Khối Thị Trường" },
    { title: "Quy trình nhận hàng", href: "index.html", page: "Khối Thị Trường" },
    { title: "Rã hàng/Cấp hàng tại Feeder", href: "index.html", page: "Khối Thị Trường" },
    { title: "An toàn lao động", href: "index.html", page: "Khối Thị Trường" },

    { title: "Task Management x Antigravity: Công nghệ dẫn dắt - Hiệu suất bay cao", href: "workshop.html", page: "Leaders Talk / Workshop", aliases: ["Task Management", "Antigravity", "Lương Dũng Nhân"] },
    { title: "AI In Show - Product In Flow", href: "workshop.html", page: "Leaders Talk / Workshop", aliases: ["AI", "Product", "Nguyễn Lâm Hoàng Yên"] },
    { title: "Leadership In Flux - Lãnh đạo trong dòng chảy biến động", href: "workshop.html", page: "Leaders Talk / Workshop", aliases: ["Leadership", "Lãnh đạo", "Thơm Trần", "Phạm Hoàng Long", "Trần Thế Trung"] },
    { title: "Hiệu quả bất ngờ cùng N8N", href: "workshop.html", page: "Leaders Talk / Workshop", aliases: ["N8N", "Giáp Đức Thắng"] },
    { title: "Đi giữa ranh giới - Giữ vẹn nghĩa tình", href: "workshop.html", page: "Leaders Talk / Workshop", aliases: ["Ranh giới", "Nghĩa tình", "Nguyễn Minh Trung"] },
    { title: "Giữ được tâm - Mới vươn được tầm", href: "workshop.html", page: "Leaders Talk / Workshop", aliases: ["Tâm", "Tầm", "Nhi Nguyễn"] },
    { title: "Vibe Coding cùng Gemini", href: "workshop.html", page: "Leaders Talk / Workshop", aliases: ["Vibe Coding", "Gemini", "Lê Thanh Bính"] },
    { title: "Gặp sếp Huy: Hỏi đi - Đừng có suy", href: "workshop.html", page: "Leaders Talk / Workshop", aliases: ["Sếp Huy", "Kim Lê Huy"] }
  ];

  function normalizeText(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function ensureStyles() {
    if (document.getElementById(SEARCH_STYLE_ID)) {
      return;
    }

    var style = document.createElement("style");
    style.id = SEARCH_STYLE_ID;
    style.textContent = [
      ".course-search-panel{position:absolute;right:0;top:calc(100% + 8px);width:360px;max-width:calc(100vw - 32px);max-height:360px;overflow:auto;background:#fff;border:1px solid #E5BEB2;border-radius:12px;box-shadow:0 12px 30px rgba(15,23,42,.12);padding:8px;z-index:300;}",
      ".course-search-panel[hidden]{display:none !important;}",
      ".course-search-result{display:flex;flex-direction:column;gap:2px;width:100%;padding:10px 12px;border:0;border-radius:8px;background:transparent;text-align:left;cursor:pointer;}",
      ".course-search-result:hover,.course-search-result.is-active{background:rgba(255,82,0,.08);}",
      ".course-search-result-title{font-family:'Be Vietnam Pro',sans-serif;font-size:14px;line-height:20px;font-weight:600;color:#1A1C1E;}",
      ".course-search-result-page{font-family:'Be Vietnam Pro',sans-serif;font-size:12px;line-height:16px;color:#64748B;}",
      ".course-search-result-empty{padding:12px;color:#5C4037;font-family:'Be Vietnam Pro',sans-serif;font-size:14px;line-height:20px;}",
      ".search-box{position:relative;}",
      ".market-nav-item{position:relative;display:flex;align-items:center;}",
      ".market-nav-trigger{display:flex;align-items:center;gap:4px;}",
      ".market-nav-caret{width:12px;height:12px;display:inline-flex;align-items:center;justify-content:center;color:currentColor;transition:transform .18s ease;flex-shrink:0;}",
      ".market-nav-caret svg{width:12px;height:12px;display:block;}",
      ".market-nav-menu{position:absolute;left:0;top:calc(100% + 8px);min-width:258px;background:#FFFFFF;border:1px solid #F1F5F9;box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);border-radius:8px;padding:8px 0;z-index:320;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .18s ease,transform .18s ease,visibility .18s ease;}",
      ".market-nav-item:hover .market-nav-menu, .market-nav-item:focus-within .market-nav-menu{opacity:1;visibility:visible;transform:translateY(0);}",
      ".market-nav-item:hover .market-nav-caret, .market-nav-item:focus-within .market-nav-caret{transform:rotate(180deg);}",
      ".market-nav-option{display:flex;align-items:center;padding:10px 16px;min-height:44px;font-family:'Be Vietnam Pro',sans-serif;font-size:16px;line-height:24px;font-weight:500;color:#475569;text-decoration:none;white-space:nowrap;transition:background .15s ease,color .15s ease;}",
      ".market-nav-option:hover,.market-nav-option:focus,.market-nav-option.is-active{background:rgba(255,82,0,.06);color:#FF5200;outline:none;}"
    ].join("");
    document.head.appendChild(style);
  }

  function getCurrentFileName() {
    var parts = window.location.pathname.split("/");
    return parts[parts.length - 1] || "index.html";
  }

  function scoreTerm(term, query) {
    if (!query) {
      return -1;
    }
    if (term === query) {
      return 1000;
    }
    if (term.indexOf(query) === 0) {
      return 800;
    }
    if (term.indexOf(" " + query) !== -1) {
      return 700;
    }
    if (term.indexOf(query) !== -1) {
      return 500;
    }
    return -1;
  }

  function prepareIndex() {
    return COURSE_INDEX.map(function (item) {
      var searchTerms = [item.title].concat(item.aliases || []).map(normalizeText);
      return {
        title: item.title,
        href: item.href,
        page: item.page,
        searchTerms: searchTerms,
        pageTerm: normalizeText(item.page)
      };
    });
  }

  var preparedIndex = prepareIndex();

  function findMatches(query) {
    var normalizedQuery = normalizeText(query);
    var currentFile = getCurrentFileName();

    if (!normalizedQuery) {
      return [];
    }

    return preparedIndex
      .map(function (item) {
        var bestScore = -1;
        item.searchTerms.forEach(function (term) {
          bestScore = Math.max(bestScore, scoreTerm(term, normalizedQuery));
        });

        if (bestScore < 0 && item.pageTerm.indexOf(normalizedQuery) !== -1) {
          bestScore = 250;
        }

        if (bestScore >= 0 && item.href === currentFile) {
          bestScore += 10;
        }

        return {
          title: item.title,
          href: item.href,
          page: item.page,
          score: bestScore
        };
      })
      .filter(function (item) {
        return item.score >= 0;
      })
      .sort(function (a, b) {
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        if (a.title !== b.title) {
          return a.title.localeCompare(b.title, "vi");
        }
        return a.page.localeCompare(b.page, "vi");
      })
      .slice(0, MAX_RESULTS);
  }

  function navigateToResult(result) {
    if (!result) {
      return;
    }
    window.location.href = result.href;
  }

  function getMarketBranch(fileName) {
    if (/^am(?:-|\.html$)/.test(fileName)) {
      return "am";
    }
    if (/^nvxl(?:-|\.html$)/.test(fileName)) {
      return "nvxl";
    }
    if (/^nvpttt(?:-|\.html$)/.test(fileName)) {
      return "nvpttt";
    }
    if (fileName === "nvph.html") {
      return "nvph";
    }
    return "";
  }

  function getOfficeBranch(fileName) {
    if (/^newbie(?:-|\.html$)/.test(fileName)) {
      return "newbie";
    }
    if (/^cskh(?:-|\.html$)/.test(fileName)) {
      return "cskh";
    }
    if (/^fieldsale(?:-|\.html$)/.test(fileName)) {
      return "fieldsale";
    }
    return "";
  }

  function initMarketDropdown() {
    var currentFile = getCurrentFileName();
    var currentBranch = getMarketBranch(currentFile);
    var navGroups = document.querySelectorAll(".nav-links");

    navGroups.forEach(function (nav) {
      var trigger = Array.from(nav.querySelectorAll(".nav-link")).find(function (link) {
        return normalizeText(link.textContent) === "khoi thi truong";
      });

      if (!trigger || trigger.parentElement.classList.contains("market-nav-item") || trigger.parentElement.classList.contains("nav-item")) {
        return;
      }

      trigger.href = "index.html";

      var wrapper = document.createElement("div");
      wrapper.className = "market-nav-item";
      trigger.parentNode.insertBefore(wrapper, trigger);
      wrapper.appendChild(trigger);
      trigger.classList.add("market-nav-trigger");
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");

      var caret = document.createElement("span");
      caret.className = "market-nav-caret";
      caret.setAttribute("aria-hidden", "true");
      caret.innerHTML = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      trigger.appendChild(caret);

      var menu = document.createElement("div");
      menu.className = "market-nav-menu";

      [
        { label: "Quản lý khu vực", href: "am-kynang-chuyenmon.html", key: "am" },
        { label: "Nhân viên Xử lý", href: "nvxl.html", key: "nvxl" },
        { label: "NVPTTT", href: "nvpttt.html", key: "nvpttt" },
        { label: "Nhân viên Phân hàng", href: "nvph.html", key: "nvph" }
      ].forEach(function (item) {
        var option = document.createElement("a");
        option.className = "market-nav-option";
        option.href = item.href;
        option.textContent = item.label;
        if (item.key === currentBranch) {
          option.classList.add("is-active");
        }
        menu.appendChild(option);
      });

      wrapper.appendChild(menu);
    });
  }

  function initOfficeDropdown() {
    var currentFile = getCurrentFileName();
    var currentBranch = getOfficeBranch(currentFile);
    var navGroups = document.querySelectorAll(".nav-links");

    navGroups.forEach(function (nav) {
      var trigger = Array.from(nav.querySelectorAll(".nav-link")).find(function (link) {
        return normalizeText(link.textContent) === "khoi van phong";
      });

      if (!trigger || trigger.parentElement.classList.contains("market-nav-item") || trigger.parentElement.classList.contains("nav-item")) {
        return;
      }

      trigger.href = "vanphong.html";

      var wrapper = document.createElement("div");
      wrapper.className = "market-nav-item";
      trigger.parentNode.insertBefore(wrapper, trigger);
      wrapper.appendChild(trigger);
      trigger.classList.add("market-nav-trigger");
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");

      var caret = document.createElement("span");
      caret.className = "market-nav-caret";
      caret.setAttribute("aria-hidden", "true");
      caret.innerHTML = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      trigger.appendChild(caret);

      var menu = document.createElement("div");
      menu.className = "market-nav-menu";

      [
        { label: "Chương trình Hội nhập", href: "newbie.html", key: "newbie" },
        { label: "Nhân viên Chăm sóc Khách hàng", href: "cskh.html", key: "cskh" },
        { label: "Nhân viên Field Sale", href: "fieldsale.html", key: "fieldsale" }
      ].forEach(function (item) {
        var option = document.createElement("a");
        option.className = "market-nav-option";
        option.href = item.href;
        option.textContent = item.label;
        if (item.key === currentBranch) {
          option.classList.add("is-active");
        }
        menu.appendChild(option);
      });

      wrapper.appendChild(menu);
    });
  }

  function getFreightBranch(fileName) {
    if (/^freight(?:-|\.html$)/.test(fileName)) {
      return "freight";
    }
    return "";
  }

  function initFreightDropdown() {
    var currentFile = getCurrentFileName();
    var currentBranch = getFreightBranch(currentFile);
    var navGroups = document.querySelectorAll(".nav-links");

    navGroups.forEach(function (nav) {
      var trigger = Array.from(nav.querySelectorAll(".nav-link")).find(function (link) {
        return normalizeText(link.textContent) === "khoi hang nang";
      });

      if (!trigger || trigger.parentElement.classList.contains("market-nav-item") || trigger.parentElement.classList.contains("nav-item")) {
        return;
      }

      trigger.href = "hangnang.html";

      var wrapper = document.createElement("div");
      wrapper.className = "market-nav-item";
      trigger.parentNode.insertBefore(wrapper, trigger);
      wrapper.appendChild(trigger);
      trigger.classList.add("market-nav-trigger");
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");

      var caret = document.createElement("span");
      caret.className = "market-nav-caret";
      caret.setAttribute("aria-hidden", "true");
      caret.innerHTML = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      trigger.appendChild(caret);

      var menu = document.createElement("div");
      menu.className = "market-nav-menu";

      [
        { label: "Nhân viên Xử lý", href: "freight.html", key: "freight" }
      ].forEach(function (item) {
        var option = document.createElement("a");
        option.className = "market-nav-option";
        option.href = item.href;
        option.textContent = item.label;
        if (item.key === currentBranch) {
          option.classList.add("is-active");
        }
        menu.appendChild(option);
      });

      wrapper.appendChild(menu);
    });
  }

  function createPanel(searchBox) {
    var panel = document.createElement("div");
    panel.className = "course-search-panel";
    panel.hidden = true;
    searchBox.appendChild(panel);
    return panel;
  }

  function renderPanel(panel, results, activeIndex) {
    panel.innerHTML = "";

    if (!results.length) {
      var empty = document.createElement("div");
      empty.className = "course-search-result-empty";
      empty.textContent = "Không tìm thấy bài học phù hợp";
      panel.appendChild(empty);
      panel.hidden = false;
      return;
    }

    results.forEach(function (result, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "course-search-result" + (index === activeIndex ? " is-active" : "");

      var title = document.createElement("div");
      title.className = "course-search-result-title";
      title.textContent = result.title;

      var page = document.createElement("div");
      page.className = "course-search-result-page";
      page.textContent = result.page;

      button.appendChild(title);
      button.appendChild(page);
      button.addEventListener("mousedown", function (event) {
        event.preventDefault();
        navigateToResult(result);
      });

      panel.appendChild(button);
    });

    panel.hidden = false;
  }

  function hidePanel(panel) {
    panel.hidden = true;
    panel.innerHTML = "";
  }

  function initSearchInput(input) {
    var searchBox = input.closest(".search-box");
    if (!searchBox) {
      return;
    }

    var panel = createPanel(searchBox);
    var activeIndex = -1;
    var lastResults = [];

    input.setAttribute("autocomplete", "off");

    function updateResults() {
      lastResults = findMatches(input.value);
      activeIndex = lastResults.length ? 0 : -1;
      if (!normalizeText(input.value)) {
        hidePanel(panel);
        return;
      }
      renderPanel(panel, lastResults, activeIndex);
    }

    input.addEventListener("input", updateResults);

    input.addEventListener("focus", function () {
      if (normalizeText(input.value)) {
        updateResults();
      }
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        input.value = "";
        hidePanel(panel);
        input.blur();
        return;
      }

      if (!lastResults.length) {
        if (event.key === "Enter") {
          event.preventDefault();
        }
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        activeIndex = (activeIndex + 1) % lastResults.length;
        renderPanel(panel, lastResults, activeIndex);
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        activeIndex = (activeIndex - 1 + lastResults.length) % lastResults.length;
        renderPanel(panel, lastResults, activeIndex);
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        navigateToResult(lastResults[Math.max(activeIndex, 0)]);
      }
    });

    document.addEventListener("mousedown", function (event) {
      if (!searchBox.contains(event.target)) {
        hidePanel(panel);
      }
    });
  }

  function initExternalLessonLinks() {
    var lessonLinks = document.querySelectorAll('a.btn[href^="http"], a.card-btn[href^="http"]');
    lessonLinks.forEach(function (link) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    ensureStyles();
    initOfficeDropdown();
    initMarketDropdown();
    initFreightDropdown();
    initExternalLessonLinks();
    var inputs = document.querySelectorAll('.search-box input[placeholder*="Tìm kiếm khóa học"]');
    inputs.forEach(initSearchInput);
  });
})();
