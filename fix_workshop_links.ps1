# Map workshop links to cards by position
$utf8 = New-Object System.Text.UTF8Encoding($false)
$c = [System.IO.File]::ReadAllText("workshop.html", $utf8)

# Links mapped by card title order (1-14):
# 1: TASK MANAGEMENT x ANTIGRAVITY (04/2026)
# 2: MAY VAN HANH (03/2026) - no link
# 3: AI IN SHOW (01/2026)
# 4: LEADERSHIP IN FLUX (12/2025)
# 5: HIEU QUA BAT NGO CUNG N8N (11/2025)
# 6: DI GIUA RANH GIOI (10/2025)
# 7: GIU DUOC TAM (08/2025)
# 8: VIBE CODING CUNG GEMINI (07/2025)
# 9: GAP SEP HUY (06/2025)
# 10: LEVEL UP! (05/2025) - no link
# 11: THONG MINH CAM XUC (04/2025) - no link
# 12: TOAN DAN AI (03/2025) - no link
# 13: CHO VA NHAN PHAN HOI (02/2025) - no link
# 14: AI EMPOWERMENT (01/2025) - no link

$links = @(
    "https://drive.google.com/file/d/1a1l6WChLuBRPANgL1iK_dXx6F9V5RzIh/view?usp=sharing",  # 1
    "#",  # 2 - no link
    "https://youtube.com/playlist?list=PL9zkf3eNT74EEI-jMFdxaNUqiu3uwi6zk&si=Pp2pNRfBeE3uy8Xk",  # 3
    "https://youtube.com/playlist?list=PL9zkf3eNT74EEI-jMFdxaNUqiu3uwi6zk&si=Pp2pNRfBeE3uy8Xk",  # 4
    "https://youtube.com/playlist?list=PL9zkf3eNT74FCxP_-4cb8ZW30thSi3yMP&si=FEZNFFNf4cwYaFbE",  # 5
    "https://youtube.com/playlist?list=PL9zkf3eNT74GDnftsKuGUwjKPEsp14NEz&si=EU2_DVxWlmEipYgL",  # 6
    "https://youtube.com/playlist?list=PL9zkf3eNT74FxeH2zhVV4TT3BFznaeupk&si=qRYyWoY_zKi5P6MC",  # 7
    "https://youtube.com/playlist?list=PL9zkf3eNT74FO89M0Chixiq6wogNr-qIW&si=sSTfrh9b7vhFRSzI",  # 8
    "https://youtube.com/playlist?list=PL9zkf3eNT74EBqs6Vtw-DVAK2pjGDlZ1f&si=_EE0u7-OjHFFPLoj",  # 9
    "#",  # 10 - no link
    "#",  # 11 - no link
    "#",  # 12 - no link
    "#",  # 13 - no link
    "#"   # 14 - no link
)

# Find all btn-view anchors and replace href="#" with the correct link
$pattern = 'href="#" class="btn-view"'
$idx = 0
$pos = 0
$result = ""

for ($i = 0; $i -lt $links.Count; $i++) {
    $found = $c.IndexOf($pattern, $pos)
    if ($found -eq -1) {
        Write-Host "ERROR: Could not find btn-view #$($i+1)"
        break
    }
    
    $replacement = 'href="' + $links[$i] + '" class="btn-view"'
    if ($links[$i] -ne "#") {
        $replacement += ' target="_blank"'
    }
    
    $result += $c.Substring($pos, $found - $pos)
    $result += $replacement
    $pos = $found + $pattern.Length
    
    $linkPreview = if ($links[$i].Length -gt 40) { $links[$i].Substring(0, 40) + "..." } else { $links[$i] }
    Write-Host "Card $($i+1): $linkPreview"
}

# Append the rest
$result += $c.Substring($pos)

[System.IO.File]::WriteAllText("workshop.html", $result, $utf8)

# Verify
$verify = [System.IO.File]::ReadAllText("workshop.html", $utf8)
$realLinks = [regex]::Matches($verify, 'href="(https?://[^"]+)" class="btn-view"')
Write-Host "`nVerification: $($realLinks.Count) real links found"
foreach ($m in $realLinks) { 
    $url = $m.Groups[1].Value
    $short = if ($url.Length -gt 60) { $url.Substring(0, 60) + "..." } else { $url }
    Write-Host "  $short"
}
$placeholders = [regex]::Matches($verify, 'href="#" class="btn-view"')
Write-Host "$($placeholders.Count) placeholder links remaining"
