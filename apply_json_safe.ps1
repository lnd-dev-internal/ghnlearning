$content = Get-Content 'leaders-talk.html' -Raw -Encoding UTF8
$json = Get-Content 'replacements.json' -Raw -Encoding UTF8 | ConvertFrom-Json

foreach ($key in $json.psobject.properties.name) {
    $value = $json.$key
    $content = $content.Replace($key, $value)
}

$content = $content.Replace("Trang ch?", "Trang chủ")
$content = $content.Replace("Kh?i V?n Ph?ng", "Khối Văn Phòng")
$content = $content.Replace("Kh?i Th? Tr??ng", "Khối Thị Trường")
$content = $content.Replace("Kh?i H?ng N?ng", "Khối Hàng Nặng")
$content = $content.Replace("S?p Di?n Ra", "Sắp Diễn Ra")
$content = $content.Replace("C?n ?t ch?", "Còn ít chỗ")
$content = $content.Replace("?inh H? Nho Th?ng", "Đinh Hồ Nho Thông")
$content = $content.Replace("Di?n gi?", "Diễn giả")
$content = $content.Replace("T?ng quan", "Tổng quan")

Set-Content 'leaders-talk-recovered.html' $content -Encoding UTF8
Write-Host "Replaced strings from json safely!"
