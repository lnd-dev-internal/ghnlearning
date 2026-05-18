# Replace the entire mobile CSS block in leaders-talk, dien-gia, workshop
# with the exact CSS from vanphong.html
$utf8 = New-Object System.Text.UTF8Encoding($false)

# Extract vanphong mobile CSS
$vp = [System.IO.File]::ReadAllText("vanphong.html", $utf8)
$vpMobileStart = $vp.IndexOf(".mobile-header { display: none; }")
$vpMediaStart = $vp.IndexOf("@media (max-width: 960px)", $vpMobileStart)
$braceCount = 0
$pos = $vp.IndexOf("{", $vpMediaStart)
$braceCount = 1
$pos++
while ($braceCount -gt 0 -and $pos -lt $vp.Length) {
    if ($vp[$pos] -eq [char]'{') { $braceCount++ }
    elseif ($vp[$pos] -eq [char]'}') { $braceCount-- }
    $pos++
}
$vpMobileCSS = $vp.Substring($vpMobileStart, $pos - $vpMobileStart)
Write-Host "Reference mobile CSS: $($vpMobileCSS.Length) chars"

$files = @("leaders-talk.html", "dien-gia.html", "workshop.html")

foreach ($file in $files) {
    $c = [System.IO.File]::ReadAllText($file, $utf8)
    
    # Find the injected mobile CSS block
    # It starts with "/* MOBILE NAV CSS */" or ".mobile-header { display: none; }"
    $blockStart = $c.IndexOf("/* MOBILE NAV CSS */")
    if ($blockStart -eq -1) {
        $blockStart = $c.IndexOf(".mobile-header { display: none; }")
    }
    if ($blockStart -eq -1) {
        $blockStart = $c.IndexOf(".mobile-header{display:none")
    }
    
    if ($blockStart -eq -1) {
        Write-Host "${file}: Could not find mobile CSS block start!"
        continue
    }
    
    # Find the end - look for </style> after the block
    $styleEnd = $c.IndexOf("</style>", $blockStart)
    
    # But we need to only replace up to the end of the @media block
    # Find the closing of the @media block that contains drawer/mobile styles
    # The block ends before </style>
    # Let's find the content between blockStart and </style>
    $oldBlock = $c.Substring($blockStart, $styleEnd - $blockStart)
    Write-Host "${file}: Old mobile CSS block: $($oldBlock.Length) chars (starts at $blockStart)"
    
    # Replace old block with vanphong CSS
    $c = $c.Substring(0, $blockStart) + $vpMobileCSS + "`n    " + $c.Substring($styleEnd)
    
    [System.IO.File]::WriteAllText($file, $c, $utf8)
    Write-Host "${file}: REPLACED"
}

# Verify no duplicate .nav-item outside .navbar
Write-Host "`n=== VERIFY ==="
foreach ($file in $files) {
    $c = [System.IO.File]::ReadAllText($file, $utf8)
    $navItemDecls = [regex]::Matches($c, '\.nav-item\s*\{')
    $scopedDecls = [regex]::Matches($c, '\.navbar\s+\.nav-item\s*\{')
    Write-Host "${file}: nav-item CSS decls = $($navItemDecls.Count), scoped = $($scopedDecls.Count)"
}
