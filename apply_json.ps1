$content = Get-Content 'leaders-talk.html' -Raw -Encoding UTF8
$json = Get-Content 'replacements.json' -Raw -Encoding UTF8 | ConvertFrom-Json

foreach ($key in $json.psobject.properties.name) {
    $value = $json.$key
    # Escape the key if it contains regex characters, but wait, we are using -replace, so we need to escape.
    # Actually, String.Replace is safer for literal replacement.
    $content = $content.Replace($key, $value)
}

# Fix some exact replacements that might have literal question marks
$content = $content.Replace("Trang ch?", "Trang chủ")
$content = $content.Replace("Kh?i V?n Ph?ng", "Khối Văn Phòng")
$content = $content.Replace("Kh?i Th? Tr??ng", "Khối Thị Trường")
$content = $content.Replace("Kh?i H?ng N?ng", "Khối Hàng Nặng")
$content = $content.Replace("S?p Di?n Ra", "Sắp Diễn Ra")
$content = $content.Replace("C?n ?t ch?", "Còn ít chỗ")
$content = $content.Replace("?inh H? Nho Th?ng", "Đinh Hồ Nho Thông")
$content = $content.Replace("Di?n gi?", "Diễn giả")
$content = $content.Replace("T?ng quan", "Tổng quan")

Set-Content 'leaders-talk.html' $content -Encoding UTF8
Set-Content 'workshop.html' $content -Encoding UTF8
Set-Content 'dien-gia.html' $content -Encoding UTF8
Write-Host "Replaced strings from json!"
