const fs = require('fs');
const path = require('path');

const files = [
    'freight.html',
    'freight-lay.html',
    'freight-tra.html',
    'freight-lc.html',
    'freight-khac.html'
];

const replacements = {
    'Trang chá»§': 'Trang chủ',
    'Khá»‘i VÄƒn phÃ²ng': 'Khối Văn phòng',
    'ChÆ°Æ¡ng trÃ¬nh Há»™i nháº­p': 'Chương trình Hội nhập',
    'NhÃ¢n viÃªn ChÄƒm sÃ³c KhÃ¡ch hÃ ng': 'Nhân viên Chăm sóc Khách hàng',
    'NhÃ¢n viÃªn Field Sale': 'Nhân viên Field Sale',
    'Khá»‘i Thá»‹ TrÆ°á» ng': 'Khối Thị Trường',
    'Quáº£n lÃ½ Khu vá»±c': 'Quản lý Khu vực',
    'NhÃ¢n viÃªn Xá»­ lÃ½': 'Nhân viên Xử lý',
    'NhÃ¢n viÃªn PhÃ¡t triá»ƒn Thá»‹ trÆ°á» ng': 'Nhân viên Phát triển Thị trường',
    'NhÃ¢n viÃªn PhÃ¢n hÃ ng': 'Nhân viên Phân hàng',
    'Khá»‘i HÃ ng Náº·ng': 'Khối Hàng Nặng',
    'NV Xá»­ lÃ½ HÃ ng náº·ng': 'NV Xử lý Hàng nặng',
    'HÃ ng giao': 'Hàng giao',
    'HÃ ng láº¥y': 'Hàng lấy',
    'HÃ ng tráº£': 'Hàng trả',
    'LuÃ¢n chuyá»ƒn': 'Luân chuyển',
    'KhÃ¡c': 'Khác'
};

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        for (const [wrong, right] of Object.entries(replacements)) {
            content = content.split(wrong).join(right);
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed ${file}`);
    }
});
