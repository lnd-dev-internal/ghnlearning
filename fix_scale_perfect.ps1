$ErrorActionPreference = "Stop"

# Extract correct navbar CSS starting from .navbar up to .search-icon
$homeHtml = Get-Content 'homepage.html' -Raw -Encoding UTF8
$navStart = $homeHtml.IndexOf('.navbar{')
$heroStart = $homeHtml.IndexOf('.hero{')
if ($heroStart -eq -1) { throw "Could not find .hero in homepage" }
$navCss = $homeHtml.Substring($navStart, $heroStart - $navStart).Trim()

# Read homepage header HTML
$headerStart = $homeHtml.IndexOf('<header>')
$headerEnd = $homeHtml.IndexOf('</header>', $headerStart) + 9
$navHtml = $homeHtml.Substring($headerStart, $headerEnd - $headerStart)

$files = @(
    @{ src="workshop (1).html"; dst="workshop.html" },
    @{ src="dien-gia (1).html"; dst="dien-gia.html" },
    @{ src="leaders-talk (1).html"; dst="leaders-talk.html" }
)

foreach ($f in $files) {
    $content = Get-Content $f.src -Raw -Encoding UTF8

    # Append the extracted navbar CSS and the 1920px constraint CSS
    $styleEnd = $content.IndexOf('</style>')
    $layoutCss = @"
    /* -- 1920px Strict Layout & Smooth Scroll -- */
    html { scroll-behavior: smooth; }
    body { min-width: 1920px; overflow-x: auto; }
    main, footer { 
        width: 1920px; 
        margin: 0 auto; 
    }
    #strip-nav { scroll-margin-top: 0; }
    /* -- Navbar from homepage -- */
    $navCss
"@
    $content = $content.Substring(0, $styleEnd) + "`n" + $layoutCss + "`n  " + $content.Substring($styleEnd)

    # Replace old topbar header with new navbar header
    $hStart = $content.IndexOf('<header class="topbar">')
    $hEnd = $content.IndexOf('</header>', $hStart) + 9
    $content = $content.Substring(0, $hStart) + $navHtml + $content.Substring($hEnd)

    # Fix active state: "Trang chu" should NOT be active
    $content = $content -replace '<a class="nav-link active" href="homepage\.html">', '<a class="nav-link" href="homepage.html">'
    # "Leaders Talk" should be active
    $content = $content -replace '<a class="nav-link" href="leaders-talk\.html">Leaders Talk</a>', '<a class="nav-link active" href="leaders-talk.html">Leaders Talk</a>'

    # Add id="strip-nav" to the strip nav and update links with hash
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

Write-Host "All files updated perfectly!"
