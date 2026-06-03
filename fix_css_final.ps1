# Remove old topbar CSS and inject vanphong navbar+drawer CSS
$utf8 = New-Object System.Text.UTF8Encoding($false)

# Get vanphong navbar CSS (from .navbar to .search-icon)
$vp = [System.IO.File]::ReadAllText("vanphong.html", $utf8)
$vpStyleStart = $vp.IndexOf("<style>") + 7
$vpStyleEnd = $vp.IndexOf("</style>", $vpStyleStart)
$vpCSS = $vp.Substring($vpStyleStart, $vpStyleEnd - $vpStyleStart)

# Extract navbar CSS section from vanphong (from .navbar to .search-box input::placeholder)
$navbarCSSStart = $vpCSS.IndexOf(".navbar {")
$navbarCSSEnd = $vpCSS.IndexOf(".search-box input::placeholder")
$navbarCSSEnd = $vpCSS.IndexOf("}", $navbarCSSEnd) + 1
$vpNavbarCSS = $vpCSS.Substring($navbarCSSStart, $navbarCSSEnd - $navbarCSSStart)

Write-Host "Vanphong navbar CSS: $($vpNavbarCSS.Length) chars"

$files = @("leaders-talk.html", "dien-gia.html", "workshop.html")

foreach ($file in $files) {
    $c = [System.IO.File]::ReadAllText($file, $utf8)
    
    # Remove old topbar/nav CSS (from .topbar to .search::before closing })
    # These are the old CSS classes that conflict
    $oldCSS = @(".topbar {", ".nav-inner {", ".brand {", ".nav {", ".nav a {", ".nav a:hover,", ".nav a.active {", ".search {", ".search input {", ".search::before {")
    
    foreach ($selector in $oldCSS) {
        $idx = $c.IndexOf($selector)
        while ($idx -ge 0) {
            $endBrace = $c.IndexOf("}", $idx) + 1
            # Remove the block + surrounding whitespace
            $startTrim = $idx
            while ($startTrim -gt 0 -and $c[$startTrim - 1] -match '\s') { $startTrim-- }
            $endTrim = $endBrace
            while ($endTrim -lt $c.Length -and $c[$endTrim] -match '[\r\n]') { $endTrim++ }
            $c = $c.Substring(0, $startTrim) + $c.Substring($endTrim)
            $idx = $c.IndexOf($selector)
        }
    }
    
    # Also remove old injected navbar CSS block (from /* -- Navbar from homepage -- */ to search-box placeholder)
    $injectedStart = $c.IndexOf("/* -- Navbar from homepage -- */")
    if ($injectedStart -ge 0) {
        $injectedEnd = $c.IndexOf("::placeholder{color:#6B7280}", $injectedStart)
        if ($injectedEnd -ge 0) {
            $injectedEnd += "::placeholder{color:#6B7280}".Length
            $c = $c.Substring(0, $injectedStart) + $c.Substring($injectedEnd)
            Write-Host "${file}: Removed injected navbar CSS block"
        }
    }
    
    # Also remove old injected mobile CSS block (/* -- Strict Layout... */)  
    $strictLayout = $c.IndexOf("/* -- Strict Layout")
    if ($strictLayout -ge 0) {
        # Find end of this block (before the vanphong mobile CSS)
        $mobileHeaderCSS = $c.IndexOf(".mobile-header { display: none; }", $strictLayout)
        if ($mobileHeaderCSS -gt $strictLayout) {
            $c = $c.Substring(0, $strictLayout) + $c.Substring($mobileHeaderCSS)
            Write-Host "${file}: Removed old strict layout CSS"
        }
    }
    
    # Now inject vanphong navbar CSS right after the :root/body/a base CSS
    # Find the .section { or first page-specific CSS
    $sectionCSS = $c.IndexOf(".section {")
    if ($sectionCSS -eq -1) { $sectionCSS = $c.IndexOf(".section{") }
    
    if ($sectionCSS -gt 0) {
        $c = $c.Substring(0, $sectionCSS) + "`n" + $vpNavbarCSS + "`n`n    " + $c.Substring($sectionCSS)
        Write-Host "${file}: Injected vanphong navbar CSS"
    }
    
    # Set Leaders Talk as active in drawer for these 3 pages
    # Remove any existing active from drawer items
    $c = $c -replace '(<a href="vanphong\.html" class="nav-item) active(")', '$1$2'
    
    # Add active to Leaders Talk in drawer
    $c = $c -replace '(<a href="leaders-talk\.html" class="nav-item)"', '$1 active"'
    
    [System.IO.File]::WriteAllText($file, $c, $utf8)
    Write-Host "${file}: DONE"
}

Write-Host "`nAll files updated!"
