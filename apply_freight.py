import os

files = [
    'freight.html',
    'freight-lay.html',
    'freight-tra.html',
    'freight-lc.html',
    'freight-khac.html'
]

replacements = {
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
}

for file in files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for wrong, right in replacements.items():
            content = content.replace(wrong, right)
            
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {file}")
