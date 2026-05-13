# Fix step 2: Replace broken skeleton text with correct Vietnamese
# After step 1 stripped U+FFFD chars, text like "Nhân" became "Nhn"
# This script replaces those skeletons with correct Vietnamese words

$dir = $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)

$files = @(
    'nvph.html','nvxl-tra.html','nvxl-lay.html','nvxl-luanchuyen.html',
    'nvxl-khac.html','nvxl-kinhdoanh.html','nvxl-botchat.html',
    'nvpttt.html','nvpttt-kinhdoanh.html','nvpttt-botchat.html',
    'fieldsale.html','fieldsale-banhang.html'
)

# Replacement pairs: [skeleton, correct]
# Order matters - longer/more specific patterns first
$pairs = @(
    # === TITLES (most specific first) ===
    ,@('Nhn vin Phn hng - Quy trnh lm vi?c', 'Nhân viên Phân hàng - Quy trình làm việc')
    ,@('Nhn vin X? l - Quy trnh x? l hng tr', 'Nhân viên Xử lý - Quy trình xử lý hàng trả')
    ,@('Nhn vin X? l - Quy trnh x? l hng l?y', 'Nhân viên Xử lý - Quy trình xử lý hàng lấy')
    ,@('Nhn vin X? l - Quy trnh x? l lun chuy?n', 'Nhân viên Xử lý - Quy trình xử lý luân chuyển')
    ,@('Nhn vin X? l - Quy trnh khc', 'Nhân viên Xử lý - Quy trình khác')
    ,@('Nhn vin X? l - K? nng Kinh doanh', 'Nhân viên Xử lý - Kỹ năng Kinh doanh')
    ,@('Nhn vin X? l - Botchat Vn hnh', 'Nhân viên Xử lý - Botchat Vận hành')
    ,@('Nhn vin Kinh doanh Thc da -- GHN Learning', 'Nhân viên Kinh doanh Thực địa - GHN Learning')
    ,@('Nhn vin Kinh doanh Thc da - Quy trnh bn hng', 'Nhân viên Kinh doanh Thực địa - Quy trình bán hàng')
    ,@('NV Pht trin Th? tru?ng - Quy trnh lm vi?c', 'NV Phát triển Thị trường - Quy trình làm việc')
    ,@('NV Pht trin - K? nng Kinh doanh', 'NV Phát triển - Kỹ năng Kinh doanh')
    ,@('NV Pht trin - Botchat Vn hnh', 'NV Phát triển - Botchat Vận hành')
    
    # === NAVBAR ===
    ,@('>Trang ch?<', '>Trang chủ<')
    ,@('>Kh?i Van Phng<', '>Khối Văn Phòng<')
    ,@('>Kh?i Th? Tru?ng<', '>Khối Thị Trường<')
    ,@('>Kh?i Hng N?ng<', '>Khối Hàng Nặng<')
    ,@('Tm ki?m kha h?c...', 'Tìm kiếm khóa học...')
    
    # === DRAWER NAV ===
    ,@('>Trang ch?</', '>Trang chủ</')
    ,@('>Kh?i Van phng</', '>Khối Văn phòng</')
    ,@('>Chuong trnh H?i nh?p<', '>Chương trình Hội nhập<')
    ,@('Nhn vin Cham sc Khch hng', 'Nhân viên Chăm sóc Khách hàng')
    ,@('Nhn vin Field Sale', 'Nhân viên Field Sale')
    ,@('>Kh?i Th? Tru?ng</', '>Khối Thị Trường</')
    ,@('>Qu?n l Khu v?c<', '>Quản lý Khu vực<')
    ,@('>Nhn vin X? l</', '>Nhân viên Xử lý</')
    ,@('>Nhn vin Pht tri?n Th? tru?ng<', '>Nhân viên Phát triển Thị trường<')
    ,@('>Nhn vin Phn hng<', '>Nhân viên Phân hàng<')
    ,@('>Kh?i Hng N?ng</', '>Khối Hàng Nặng</')
    
    # === SIDEBAR TITLES ===
    ,@('Nhn vin<br>Phn hng', 'Nhân viên<br>Phân hàng')
    ,@('Nhn vin<br>X? l', 'Nhân viên<br>Xử lý')
    ,@('Nhn vin<br>Pht tri?n<br>', 'Nhân viên<br>Phát triển<br>')
    ,@('Nhn vin<br>Kinh doanh<br>Thc da', 'Nhân viên<br>Kinh doanh<br>Thực địa')
    
    # === SIDEBAR LINKS ===
    ,@('Quy trnh x? l hng giao', 'Quy trình xử lý hàng giao')
    ,@('Quy trnh x? l hng l?y', 'Quy trình xử lý hàng lấy')
    ,@('Quy trnh x? l hng tr', 'Quy trình xử lý hàng trả')
    ,@('Quy trnh x? l lun chuy?n', 'Quy trình xử lý luân chuyển')
    ,@('Quy trnh khc', 'Quy trình khác')
    ,@('K? n?ng Kinh doanh', 'Kỹ năng Kinh doanh')
    ,@('K? nng Kinh doanh', 'Kỹ năng Kinh doanh')
    ,@('Botchat Vn hnh', 'Botchat Vận hành')
    ,@('Quy trnh lm vi?c', 'Quy trình làm việc')
    
    # === MOBILE CHIPS ===
    ,@('>Hng giao<', '>Hàng giao<')
    ,@('>Hng l?y<', '>Hàng lấy<')
    ,@('>Hng tr<', '>Hàng trả<')
    ,@('>Lun chuy?n<', '>Luân chuyển<')
    ,@('>Quy trnh khc<', '>Quy trình khác<')
    
    # === MOBILE ROLE TITLE ===
    ,@('NV Pht tri?n', 'NV Phát triển')
    ,@('NV Kinh doanh Thc da', 'NV Kinh doanh Thực địa')
    ,@('>Nhn vin Phn hng<', '>Nhân viên Phân hàng<')
    ,@('>Nhn vin X? l<', '>Nhân viên Xử lý<')
    
    # === BREADCRUMB ===
    ,@('>Kh?i Th? Tru?ng<', '>Khối Thị Trường<')
    
    # === NVPH CARDS ===
    ,@('N?i quy lm vi?c', 'Nội quy làm việc')
    ,@('>N?i quy<', '>Nội quy<')
    ,@('Nh?p hng', 'Nhập hàng')
    ,@('X? l hng nh?p', 'Xử lý hàng nhập')
    ,@('? t?i', 'Đổ tải')
    ,@('R hng/C?p hng t?i Feeder', 'Rã hàng/Cấp hàng tại Feeder')
    ,@('ng ki?n t?i Chute', 'Đóng kiện tại Chute')
    ,@('ng ki?n<', 'Đóng kiện<')
    ,@('Xu?t ki?n', 'Xuất kiện')
    ,@('An ton lao d?ng', 'An toàn lao động')
    ,@('Cc l?i/ s? c? thu?ng g?p', 'Các lỗi/ sự cố thường gặp')
    ,@('>S? c?<', '>Sự cố<')
    ,@('B?t d?u h?c', 'Bắt đầu học')
    ,@('10 pht', '10 phút')
    ,@('20 pht', '20 phút')
    ,@('15 pht', '15 phút')
    ,@('2 pht', '2 phút')
    
    # === NVXL-LAY CARDS ===
    ,@('Gn don l?y', 'Gán đơn lấy')
    ,@('GN ON L?Y', 'GÁN ĐƠN LẤY')
    ,@('B?n ki?m', 'Bắn kiểm')
    ,@('B?N KI?M ON HNG L?Y', 'BẮN KIỂM ĐƠN HÀNG LẤY')
    ,@('Nh?n hng t?i Buu c?c', 'Nhận hàng tại Bưu cục')
    ,@('NH?N HNG T?I BUU C?C', 'NHẬN HÀNG TẠI BƯU CỤC')
    ,@('T?ng h?p quy trnh x? l hng l?y', 'Tổng hợp quy trình xử lý hàng lấy')
    ,@('NH?N VIN X? L', 'NHÂN VIÊN XỬ LÝ')
    ,@('QUY TRNH X? L HNG L?Y', 'QUY TRÌNH XỬ LÝ HÀNG LẤY')
    
    # === NVXL-TRA CARDS ===
    ,@('Phn lo?i don hng', 'Phân loại đơn hàng')
    ,@('PHN LO?I ON HNG TR', 'PHÂN LOẠI ĐƠN HÀNG TRẢ')
    ,@('In m don', 'In mã đơn')
    ,@('IN M ON TR', 'IN MÃ ĐƠN TRẢ')
    ,@('T?ng h?p quy trnh x? l hng tr', 'Tổng hợp quy trình xử lý hàng trả')
    ,@('QUY TRNH X? L HNG TR', 'QUY TRÌNH XỬ LÝ HÀNG TRẢ')
    ,@('T?NG H?P', 'TỔNG HỢP')
    
    # === NVXL-LUANCHUYEN CARDS ===
    ,@('ng ki?n', 'Đóng kiện')
    ,@('NG KI?N', 'ĐÓNG KIỆN')
    ,@('>Xu?t ki?n<', '>Xuất kiện<')
    ,@('XU?T KI?N', 'XUẤT KIỆN')
    ,@('T?ng h?p quy trnh x? l lun chuy?n', 'Tổng hợp quy trình xử lý luân chuyển')
    ,@('QUY TRNH LUN CHUY?N', 'QUY TRÌNH LUÂN CHUYỂN')
    
    # === NVXL-KHAC CARDS ===
    ,@('X? l Ticket', 'Xử lý Ticket')
    ,@('X? L TICKET', 'XỬ LÝ TICKET')
    ,@('T?o phi?u Qu?n l R?i ro', 'Tạo phiếu Quản lý Rủi ro')
    ,@('T?O PHI?U QLRR', 'TẠO PHIẾU QLRR')
    
    # === NVXL-KINHDOANH / NVPTTT-KINHDOANH ===
    ,@('Cham sc Khch hng l?n', 'Chăm sóc Khách hàng lớn')
    ,@('CHAM SC KHCH HNG L?N', 'CHĂM SÓC KHÁCH HÀNG LỚN')
    ,@('Cham sc Khch hng', 'Chăm sóc Khách hàng')
    ,@('CHAM SC KHCH HNG', 'CHĂM SÓC KHÁCH HÀNG')
    ,@('K? n?ng bn hng', 'Kỹ năng bán hàng')
    ,@('K? nng bn hng', 'Kỹ năng bán hàng')
    
    # === NVPTTT CARDS ===
    ,@('Giao hng', 'Giao hàng')
    ,@('L?y hng', 'Lấy hàng')
    ,@('Quy d?nh v? POD', 'Quy định về POD')
    ,@('Quy trnh Check-in', 'Quy trình Check-in')
    ,@('Xem luong t?m t?nh', 'Xem lương tạm tính')
    ,@('Luong t?m t?nh', 'Lương tạm tính')
    ,@('Gi?i trnh ZNS', 'Giải trình ZNS')
    ,@('Quy trnh giao hng', 'Quy trình giao hàng')
    ,@('Quy trnh l?y hng', 'Quy trình lấy hàng')
    
    # === FIELDSALE CARDS ===
    ,@('Ki?n th?c T?ng quan', 'Kiến thức Tổng quan')
    ,@('Quy trnh bn hng', 'Quy trình bán hàng')
    ,@('Bn hng', 'Bán hàng')
    ,@('S?n ph?m Th? tru?ng SME', 'Sản phẩm Thị trường SME')
    ,@('Quy trnh V?n hnh GHN', 'Quy trình Vận hành GHN')
    ,@('Thc da', 'Thực địa')
    ,@('Chnh sch', 'Chính sách')
    ,@('Cng c?', 'Công cụ')
    ,@('Ph?n m?m Qu?n l bn hng', 'Phần mềm Quản lý bán hàng')
    ,@('Bn hng thc da', 'Bán hàng thực địa')
    ,@('H?p tc lin phng ban', 'Hợp tác liên phòng ban')
    
    # === BOTCHAT ===
    ,@('Botchat l ', 'Botchat là ')
    ,@('Tr? l V?n hnh', 'Trợ lý Vận hành')
    ,@('Gi?i dp m?i th?c m?c v? v?n hnh t?i GHN', 'Giải đáp mọi thắc mắc về vận hành tại GHN')
    
    # === FOOTER ===
    ,@('Phng H?c t?p v Pht tri?n', 'Phòng Học tập và Phát triển')
    ,@('Tr? s?: Rivera Park, 7/28 Thnh Thi, Phu?ng Din H?ng TP. HCM', 'Trụ sở: Rivera Park, 7/28 Thành Thái, Phường Diên Hồng TP. HCM')
    ,@('Nguy?n Ng?c Mai Trm', 'Nguyễn Ngọc Mai Trâm')
    
    # === EMOJI FIXES ===
    ,@('u{1F5C2}u{FE0F}', [string][char]0x1F5C2 + [string][char]0xFE0F)
    ,@('>??<', '>' + [string][char]0x1F4E6 + '<')
)

Write-Host "Starting encoding fix (step 2: skeleton text replacement)..."

foreach ($f in $files) {
    $fp = Join-Path $dir $f
    if (-not (Test-Path $fp)) { Write-Host "SKIP: $f"; continue }
    
    $text = [System.IO.File]::ReadAllText($fp, [System.Text.Encoding]::UTF8)
    $original = $text
    $count = 0
    
    foreach ($pair in $pairs) {
        $from = $pair[0]
        $to = $pair[1]
        if ($text.Contains($from)) {
            $text = $text.Replace($from, $to)
            $count++
        }
    }
    
    if ($text -ne $original) {
        [System.IO.File]::WriteAllText($fp, $text, $utf8)
        Write-Host "FIXED: $f - $count patterns applied"
    } else {
        Write-Host "NO CHANGES: $f"
    }
}

Write-Host "Done!"
