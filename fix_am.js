const fs = require('fs');
const path = require('path');

const files = ['am.html', 'am-botchat.html', 'am-kynang-chuyenmon.html', 'am-kynang-quanly.html'];

const replacements = {
    "Botchat Vận hành ––": "Botchat Vận hành ––",
    "Trang ch?": "Trang chủ",
    "Kh?i Van phng": "Khối Văn phòng",
    "Chuong trnh H?i nh?p": "Chương trình Hội nhập",
    "Nhn vin Cham sc Khch hng": "Nhân viên Chăm sóc Khách hàng",
    "Nhn vin Field Sale": "Nhân viên Field Sale",
    "Kh?i Th? Tru?ng": "Khối Thị Trường",
    "Qu?n l Khu v?c": "Quản lý Khu vực",
    "Nhn vin X? l": "Nhân viên Xử lý",
    "Nhn vin Pht tri?n Th? tru?ng": "Nhân viên Phát triển Thị trường",
    "Nhn vin Phn hng": "Nhân viên Phân hàng",
    "Kh?i Hng N?ng": "Khối Hàng Nặng",
    "H?i nh?p": "Hội nhập",
    "Chuyn mn": "Chuyên môn",
    "K? nang qu?n l": "Kỹ năng quản lý",
    "Botchat l <strong>Tr? l V?n hnh</strong> - Gi?i dp m?i th?c m?c v? v?n hnh t?i GHN": "Botchat là <strong>Trợ lý Vận hành</strong> - Giải đáp mọi thắc mắc về vận hành tại GHN",
    "📍📍📍": "📍",
    "☎️☎️": "☎️",
    "📩📩": "📩",
    " 090": "- 090",
    "©": "©",
    "📚": "🗂️",
    "Qu?n l Khu v?c": "Quản lý Khu vực",
    "Kh?i Van phng": "Khối Văn phòng",
    "Chuong trnh H?i nh?p": "Chương trình Hội nhập",
    "Nhn vin Cham sc Khch hng": "Nhân viên Chăm sóc Khách hàng",
    "Nhn vin Field Sale": "Nhân viên Field Sale",
    "Kh?i Th? Tru?ng": "Khối Thị Trường",
    "Nhn vin X? l": "Nhân viên Xử lý",
    "Nhn vin Pht tri?n Th? tru?ng": "Nhân viên Phát triển Thị trường",
    "Nhn vin Phn hng": "Nhân viên Phân hàng",
    "Kh?i Hng N?ng": "Khối Hàng Nặng"
};

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    for (const [key, value] of Object.entries(replacements)) {
        // Use split/join to replace all occurrences
        content = content.split(key).join(value);
    }

    // Additional targeted regex replacements just in case
    content = content.replace(/Botchat l. <strong>Tr. l. V.n h.nh<\/strong> - Gi.i d.p m.i th.c m.c v. v.n h.nh t.i GHN/g, "Botchat là <strong>Trợ lý Vận hành</strong> - Giải đáp mọi thắc mắc về vận hành tại GHN");
    content = content.replace(/Trang ch\?/g, "Trang chủ");

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Processed ${file}`);
}
