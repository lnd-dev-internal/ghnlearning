$mangled = Get-Content 'leaders-talk.html' -Raw
$b1 = [System.Text.Encoding]::GetEncoding(1252).GetBytes($mangled)
$s1 = [System.Text.Encoding]::UTF8.GetString($b1)
$b2 = [System.Text.Encoding]::GetEncoding(1252).GetBytes($s1)
$s2 = [System.Text.Encoding]::UTF8.GetString($b2)

[System.IO.File]::WriteAllText('leaders-talk.html', $s2, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText('workshop.html', $s2, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText('dien-gia.html', $s2, [System.Text.Encoding]::UTF8)

Write-Host "Reversed 2 times!"
