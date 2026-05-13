$dir = $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding($false)
$rc = [char]0xFFFD

$files = @(
    'nvph.html','nvxl-tra.html','nvxl-lay.html','nvxl-luanchuyen.html',
    'nvxl-khac.html','nvxl-kinhdoanh.html','nvxl-botchat.html',
    'nvpttt.html','nvpttt-kinhdoanh.html','nvpttt-botchat.html',
    'fieldsale.html','fieldsale-banhang.html'
)

$pairs = @()

# Each file: read as UTF8, replace all U+FFFD with empty, 
# then fix known broken words using context-based regex

foreach ($f in $files) {
    $fp = Join-Path $dir $f
    if (-not (Test-Path $fp)) { continue }
    
    $text = [System.IO.File]::ReadAllText($fp, [System.Text.Encoding]::UTF8)
    $hadRC = $text.Contains($rc)
    
    # Remove all replacement characters
    $text = $text.Replace([string]$rc, '')
    
    [System.IO.File]::WriteAllText($fp, $text, $utf8)
    
    if ($hadRC) {
        Write-Host "Stripped RCs from: $f"
    }
}

Write-Host "Done stripping replacement characters."
Write-Host "Now check the files to see what text remains broken."
