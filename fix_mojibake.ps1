# Fix TRIPLE-encoded UTF-8 mojibake
# Pattern: UTF-8 bytes -> misread as Latin-1 -> re-encoded as UTF-8 (twice)
# Fix: Latin-1 decode -> get bytes -> Latin-1 decode again -> get bytes -> UTF-8 decode

$files = @('leaders-talk.html', 'dien-gia.html', 'workshop.html')
$dir = (Get-Location).Path
$latin1 = [System.Text.Encoding]::GetEncoding('iso-8859-1')
$utf8 = [System.Text.Encoding]::UTF8
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

foreach ($file in $files) {
    $filePath = Join-Path $dir $file
    if (-not (Test-Path $filePath)) {
        Write-Host "SKIP: $file not found"
        continue
    }
    
    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    Write-Host "Processing $file ($($bytes.Length) bytes)..."
    
    # Pass 1: interpret UTF-8 bytes as Latin-1 to get intermediate string
    $pass1 = $latin1.GetString($bytes)
    # Convert back to bytes
    $pass1Bytes = $latin1.GetBytes($pass1)
    # Decode as UTF-8
    $pass1Result = $utf8.GetString($pass1Bytes)
    
    # Check if we need another pass
    # Look for common mojibake pattern: Ã followed by specific chars
    if ($pass1Result -match [char]0xC3) {
        Write-Host "  Pass 1 still has issues, doing pass 2..."
        $pass2Bytes = $latin1.GetBytes($pass1Result)
        $pass2Result = $utf8.GetString($pass2Bytes)
        
        [System.IO.File]::WriteAllBytes($filePath, $utf8NoBom.GetBytes($pass2Result))
        Write-Host "  FIXED (2 passes): $file"
    } else {
        [System.IO.File]::WriteAllBytes($filePath, $utf8NoBom.GetBytes($pass1Result))
        Write-Host "  FIXED (1 pass): $file"
    }
}

Write-Host "`nVerification:"
foreach ($file in $files) {
    $filePath = Join-Path $dir $file
    $content = [System.IO.File]::ReadAllText($filePath, $utf8)
    $m = [regex]::Match($content, 'hot-badge">([^<]+)')
    if ($m.Success) {
        Write-Host "  ${file}: badge='$($m.Groups[1].Value)'"
    }
}
