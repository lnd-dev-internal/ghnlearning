$bytes = [System.IO.File]::ReadAllBytes("$PSScriptRoot\nvph.html")
$text = [System.Text.Encoding]::UTF8.GetString($bytes)

# Find title
$start = $text.IndexOf('<title>') + 7
$end = $text.IndexOf('</title>')
$title = $text.Substring($start, $end - $start)
Write-Host "Title: [$title]"

# Get bytes of title
$titleBytes = [System.Text.Encoding]::UTF8.GetBytes($title)
$hex = ($titleBytes | ForEach-Object { '{0:x2}' -f $_ }) -join ' '
Write-Host "Hex: $hex"

# Check sidebar-title
$idx1 = $text.IndexOf('sidebar-title')
if ($idx1 -gt 0) {
    $snippet = $text.Substring($idx1, [Math]::Min(200, $text.Length - $idx1))
    Write-Host "Sidebar snippet: $snippet"
}
