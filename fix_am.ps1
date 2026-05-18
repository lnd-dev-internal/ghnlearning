$ErrorActionPreference = "Stop"

$files = Get-ChildItem -Path "am*.html"

$replacements = @{
    "Botchat Vận hành ––" = "Botchat Vận hành ––"
    "Trang ch?" = "Trang chủ"
    "Kh?i Van phng" = "Khối Văn phòng"
    "Chuong trnh H?i nh?p" = "Chương trình Hội nhập"
    "Nhn vin Cham sc Khch hng" = "Nhân viên Chăm sóc Khách hàng"
    "Nhn vin Field Sale" = "Nhân viên Field Sale"
    "Kh?i Th? Tru?ng" = "Khối Thị Trường"
    "Qu?n l Khu v?c" = "Quản lý Khu vực"
    "Nhn vin X? l" = "Nhân viên Xử lý"
    "Nhn vin Pht tri?n Th? tru?ng" = "Nhân viên Phát triển Thị trường"
    "Nhn vin Phn hng" = "Nhân viên Phân hàng"
    "Kh?i Hng N?ng" = "Khối Hàng Nặng"
    "H?i nh?p" = "Hội nhập"
    "Chuyn mn" = "Chuyên môn"
    "K? nang qu?n l" = "Kỹ năng quản lý"
    "Botchat l <strong>Tr? l V?n hnh</strong> - Gi?i dp m?i th?c m?c v? v?n hnh t?i GHN" = "Botchat là <strong>Trợ lý Vận hành</strong> - Giải đáp mọi thắc mắc về vận hành tại GHN"
    "📍📍📍" = "📍"
    "☎️☎️" = "☎️"
    "📩📩" = "📩"
    " 090" = "- 090"
    "©" = "©"
    "class=""sidebar-link-icon"">📚" = "class=""sidebar-link-icon"">🗂️"
}

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    foreach ($key in $replacements.Keys) {
        $content = $content.Replace($key, $replacements[$key])
    }
    
    # Also replace any remaining 📚 -> 🗂️ globally in case the spacing is weird
    $content = $content -replace "📚", "🗂️"

    # Some additional regex fixes for safe measure if needed
    $content = $content -replace "Botchat l. <strong>Tr. l. V.n h.nh</strong> - Gi.i d.p m.i th.c m.c v. v.n h.nh t.i GHN", "Botchat là <strong>Trợ lý Vận hành</strong> - Giải đáp mọi thắc mắc về vận hành tại GHN"

    Set-Content $file.FullName $content -Encoding UTF8
    Write-Host "Processed $($file.Name)"
}
