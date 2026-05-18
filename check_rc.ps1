$ErrorActionPreference = "Stop"
$dir = $PSScriptRoot

# Read a file and replace ALL occurrences of replacement char U+FFFD
# with empty string first, then do targeted string fixes
$files = @(
    "nvph.html",
    "nvxl-tra.html",
    "nvxl-lay.html",
    "nvxl-luanchuyen.html",
    "nvxl-khac.html",
    "nvxl-kinhdoanh.html",
    "nvxl-botchat.html",
    "nvpttt.html",
    "nvpttt-kinhdoanh.html",
    "nvpttt-botchat.html",
    "fieldsale.html",
    "fieldsale-banhang.html"
)

$utf8 = New-Object System.Text.UTF8Encoding($false)
$rc = [char]0xFFFD  # replacement character

foreach ($f in $files) {
    $fp = Join-Path $dir $f
    if (-not (Test-Path $fp)) { Write-Host "SKIP: $f"; continue }
    
    $text = [System.IO.File]::ReadAllText($fp, [System.Text.Encoding]::UTF8)
    $hasRC = $text.Contains($rc)
    $hasQM = $text -match '\?\?\?'
    
    Write-Host "${f}: hasReplacementChar=$hasRC, hasTripleQM=$hasQM, length=$($text.Length)"
    
    # Count replacement chars
    $count = 0
    foreach ($c in $text.ToCharArray()) { if ($c -eq $rc) { $count++ } }
    Write-Host "  Replacement chars: $count"
}
