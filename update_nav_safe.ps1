$ErrorActionPreference = "Stop"

$homeHtml = Get-Content 'homepage.html' -Raw -Encoding UTF8

$logoIdx = $homeHtml.IndexOf('.logo{')
$styleEndIdx = $homeHtml.IndexOf('</style>', $logoIdx)
$navCss = $homeHtml.Substring($logoIdx, $styleEndIdx - $logoIdx)

$headerStart = $homeHtml.IndexOf('<header>')
$headerEnd = $homeHtml.IndexOf('</header>', $headerStart) + 9
$navHtml = $homeHtml.Substring($headerStart, $headerEnd - $headerStart)

$files = @("leaders-talk.html", "workshop.html", "dien-gia.html")

foreach ($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Replace topbar CSS with navbar CSS
    $topbarStart = $content.IndexOf('.topbar {')
    if ($topbarStart -eq -1) { $topbarStart = $content.IndexOf('.topbar{') }
    $styleEnd = $content.IndexOf('</style>', $topbarStart)
    if ($topbarStart -ne -1 -and $styleEnd -ne -1) {
        $content = $content.Substring(0, $topbarStart) + "`n" + $navCss + "`n" + $content.Substring($styleEnd)
    }
    
    # Replace header HTML
    $hStart = $content.IndexOf('<header class="topbar">')
    $hEnd = $content.IndexOf('</header>', $hStart) + 9
    if ($hStart -ne -1 -and $hEnd -ne -1) {
        $content = $content.Substring(0, $hStart) + $navHtml + $content.Substring($hEnd)
    }
    
    # Update strip nav with id and hash links
    $content = $content -replace 'href="leaders-talk\.html"', 'href="leaders-talk.html#strip-nav"'
    $content = $content -replace 'href="workshop\.html"', 'href="workshop.html#strip-nav"'
    $content = $content -replace 'href="dien-gia\.html"', 'href="dien-gia.html#strip-nav"'
    $content = $content -replace '<nav class="strip" (?!id="strip-nav")', '<nav class="strip" id="strip-nav" '
    
    # Fix the top navbar links which shouldn't have the hash if they were just replaced from homepage.html
    # Wait, homepage.html doesn't have #strip-nav in its top navbar! So replacing `href="leaders-talk.html"` globally WILL add `#strip-nav` to the top navbar too!
    # Let's fix that.
    $content = $content -replace '<a class="nav-link" href="leaders-talk\.html#strip-nav">', '<a class="nav-link active" href="leaders-talk.html">'
    $content = $content -replace '<a class="nav-link active" href="leaders-talk\.html#strip-nav">', '<a class="nav-link active" href="leaders-talk.html">'
    
    Set-Content $file $content -Encoding UTF8
}

Write-Host "Successfully updated all 3 files!"
