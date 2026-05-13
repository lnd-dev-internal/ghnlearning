$ErrorActionPreference = "Stop"

# Read homepage navbar CSS (from .logo to end of its style block)
$homeHtml = Get-Content 'homepage.html' -Raw -Encoding UTF8
$logoIdx = $homeHtml.IndexOf('.logo{')
$homeStyleEnd = $homeHtml.IndexOf('</style>', $logoIdx)
$navCss = $homeHtml.Substring($logoIdx, $homeStyleEnd - $logoIdx).Trim()

# Read homepage header HTML
$headerStart = $homeHtml.IndexOf('<header>')
$headerEnd = $homeHtml.IndexOf('</header>', $headerStart) + 9
$navHtml = $homeHtml.Substring($headerStart, $headerEnd - $headerStart)

$files = @(
    @{ src="workshop (1).html"; dst="workshop.html"; active="workshop" },
    @{ src="dien-gia (1).html"; dst="dien-gia.html"; active="dien-gia" },
    @{ src="leaders-talk (1).html"; dst="leaders-talk.html"; active="leaders-talk" }
)

foreach ($f in $files) {
    $content = Get-Content $f.src -Raw -Encoding UTF8

    # 1. Insert navbar CSS just before </style> (first occurrence)
    $styleEnd = $content.IndexOf('</style>')
    $content = $content.Substring(0, $styleEnd) + "`n    /* -- Navbar from homepage -- */`n    " + $navCss + "`n  " + $content.Substring($styleEnd)

    # 2. Add smooth scroll CSS
    $styleEnd2 = $content.IndexOf('</style>')
    $smoothCss = "`n    html { scroll-behavior: smooth; }`n    #strip-nav { scroll-margin-top: 0; }`n  "
    $content = $content.Substring(0, $styleEnd2) + $smoothCss + $content.Substring($styleEnd2)

    # 3. Replace old topbar header with new navbar header
    $hStart = $content.IndexOf('<header class="topbar">')
    $hEnd = $content.IndexOf('</header>', $hStart) + 9
    $content = $content.Substring(0, $hStart) + $navHtml + $content.Substring($hEnd)

    # 4. Fix active state: "Trang chu" should NOT be active
    $content = $content -replace '<a class="nav-link active" href="homepage\.html">', '<a class="nav-link" href="homepage.html">'
    # "Leaders Talk" should be active
    $content = $content -replace '<a class="nav-link" href="leaders-talk\.html">Leaders Talk</a>', '<a class="nav-link active" href="leaders-talk.html">Leaders Talk</a>'

    # 5. Add id="strip-nav" to the strip nav and update links with hash
    $content = $content -replace '<nav class="strip"', '<nav class="strip" id="strip-nav"'
    $content = $content -replace 'href="leaders-talk\.html"(?!#)', 'href="leaders-talk.html#strip-nav"'
    $content = $content -replace 'href="workshop\.html"(?!#)', 'href="workshop.html#strip-nav"'
    $content = $content -replace 'href="dien-gia\.html"(?!#)', 'href="dien-gia.html#strip-nav"'
    # Fix top navbar Leaders Talk link (should not have #strip-nav)
    $content = $content -replace '<a class="nav-link active" href="leaders-talk\.html#strip-nav">Leaders Talk</a>', '<a class="nav-link active" href="leaders-talk.html">Leaders Talk</a>'
    $content = $content -replace '<a class="nav-link" href="leaders-talk\.html#strip-nav">Leaders Talk</a>', '<a class="nav-link" href="leaders-talk.html">Leaders Talk</a>'

    Set-Content $f.dst $content -Encoding UTF8
    Write-Host "Done: $($f.dst)"
}

Write-Host "All files updated successfully!"
