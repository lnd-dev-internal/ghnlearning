$ErrorActionPreference = "Stop"

$homeHtml = Get-Content 'homepage.html' -Raw -Encoding UTF8

# Extract navbar CSS from homepage.html
if ($homeHtml -match '(?s)(\.logo\{.*?\})</style>') {
    $navCss = $Matches[1]
} else {
    Write-Host "Could not find nav CSS in homepage.html"
    exit 1
}

# Extract header HTML from homepage.html
if ($homeHtml -match '(?s)(<header>\s*<nav class="navbar">.*?</header>)') {
    $navHtml = $Matches[1]
} else {
    Write-Host "Could not find header HTML in homepage.html"
    exit 1
}

$files = @("leaders-talk.html", "workshop.html", "dien-gia.html")

foreach ($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # 1. Replace topbar CSS with navbar CSS
    $content = $content -replace '(?s)\.topbar\s*\{.*?(?=\s*</style>)', $navCss
    
    # 2. Replace header HTML
    $content = $content -replace '(?s)<header class="topbar">.*?</header>', $navHtml
    
    # 3. Update strip nav with id and hash links
    $content = $content -replace '(<nav class="strip".*?>)\s*<a(.*?)href="leaders-talk\.html"(.*?)>Tổng quan</a>\s*<a(.*?)href="workshop\.html"(.*?)>(Workshop|Học viên/Workshop)</a>\s*<a(.*?)href="dien-gia\.html"(.*?)>Diễn giả</a>\s*</nav>', 
        "`$1`n      <a`$2href=`"leaders-talk.html#strip-nav`"`$3>Tổng quan</a>`n      <a`$4href=`"workshop.html#strip-nav`"`$5>`$6</a>`n      <a`$7href=`"dien-gia.html#strip-nav`"`$8>Diễn giả</a>`n    </nav>"
        
    # Also add id="strip-nav" to the strip if not present
    $content = $content -replace '<nav class="strip" (?!id="strip-nav")', '<nav class="strip" id="strip-nav" '
    
    Set-Content $file $content -Encoding UTF8
}

Write-Host "Successfully updated all 3 files!"
