$dir = $PSScriptRoot
$files = @('nvxl-tra.html','nvxl-lay.html','nvxl-luanchuyen.html','nvxl-khac.html','nvxl-kinhdoanh.html','nvxl-botchat.html','nvpttt.html','nvpttt-kinhdoanh.html','nvpttt-botchat.html','fieldsale-banhang.html')
$utf8 = [System.Text.Encoding]::UTF8

foreach ($f in $files) {
    $fp = Join-Path $dir $f
    if (-not (Test-Path $fp)) { continue }
    $t = [IO.File]::ReadAllText($fp, $utf8)
    $qmarks = 0
    foreach ($c in $t.ToCharArray()) { if ($c -eq '?') { $qmarks++ } }
    Write-Host "$f : ? count = $qmarks"
}
