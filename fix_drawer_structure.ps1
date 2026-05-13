# Replace drawer HTML+overlay+header in leaders-talk, dien-gia, workshop
# with exact copy from vanphong.html (the reference)
$utf8 = New-Object System.Text.UTF8Encoding($false)

# Extract drawer components from vanphong (reference)
$ref = [System.IO.File]::ReadAllText("vanphong.html", $utf8)

# 1. Extract drawer-overlay
$overlayStart = $ref.IndexOf('<div class="drawer-overlay"')
$overlayEnd = $ref.IndexOf('>', $overlayStart) + 7  # self-closing-ish, find the </div>
$overlayEnd = $ref.IndexOf('</div>', $overlayStart) + 6
$refOverlay = $ref.Substring($overlayStart, $overlayEnd - $overlayStart)

# 2. Extract aside drawer (full)
$drawerStart = $ref.IndexOf('<aside class="drawer"')
$drawerEnd = $ref.IndexOf('</aside>', $drawerStart) + 8
$refDrawer = $ref.Substring($drawerStart, $drawerEnd - $drawerStart)

# 3. Extract mobile header
$mobileStart = $ref.IndexOf('<header class="mobile-header"')
$mobileEnd = $ref.IndexOf('</header>', $mobileStart) + 9
$refMobileHeader = $ref.Substring($mobileStart, $mobileEnd - $mobileStart)

# 4. Extract drawer CSS from vanphong (inside @media max-width 960)
# We need the mobile CSS block

Write-Host "Reference extracted:"
Write-Host "  Overlay: $($refOverlay.Length) chars"
Write-Host "  Drawer: $($refDrawer.Length) chars"  
Write-Host "  Mobile header: $($refMobileHeader.Length) chars"

# Now process each of the 3 files
$files = @("leaders-talk.html", "dien-gia.html", "workshop.html")

foreach ($file in $files) {
    $c = [System.IO.File]::ReadAllText($file, $utf8)
    
    # Replace drawer-overlay
    $oldOverlayStart = $c.IndexOf('<div class="drawer-overlay"')
    if ($oldOverlayStart -ge 0) {
        $oldOverlayEnd = $c.IndexOf('</div>', $oldOverlayStart) + 6
        $c = $c.Substring(0, $oldOverlayStart) + $refOverlay + $c.Substring($oldOverlayEnd)
    }
    
    # Replace aside drawer
    $oldDrawerStart = $c.IndexOf('<aside class="drawer"')
    if ($oldDrawerStart -ge 0) {
        $oldDrawerEnd = $c.IndexOf('</aside>', $oldDrawerStart) + 8
        $c = $c.Substring(0, $oldDrawerStart) + $refDrawer + $c.Substring($oldDrawerEnd)
    }
    
    # Replace mobile header
    $oldMobileStart = $c.IndexOf('<header class="mobile-header"')
    if ($oldMobileStart -ge 0) {
        $oldMobileEnd = $c.IndexOf('</header>', $oldMobileStart) + 9
        $c = $c.Substring(0, $oldMobileStart) + $refMobileHeader + $c.Substring($oldMobileEnd)
    }
    
    # Now fix the CSS: remove the duplicate desktop nav-item CSS that conflicts
    # The problem is desktop .nav-item{position:relative;display:flex;align-items:center}
    # conflicts with mobile .nav-item 
    # We need to scope the desktop nav styles to only apply inside .navbar
    
    # Replace unscoped .nav-item with .navbar .nav-item
    $c = $c -replace '(\s+)\.nav-item\{position:relative;display:flex;align-items:center\}', '${1}.navbar .nav-item{position:relative;display:flex;align-items:center}'
    $c = $c -replace '(\s+)\.nav-link\{', '${1}.navbar .nav-link{'
    $c = $c -replace '(\s+)\.nav-link:hover\{', '${1}.navbar .nav-link:hover{'
    $c = $c -replace '(\s+)\.nav-link\.active\{', '${1}.navbar .nav-link.active{'
    $c = $c -replace '(\s+)\.nav-trigger\{', '${1}.navbar .nav-trigger{'
    $c = $c -replace '(\s+)\.nav-caret\{', '${1}.navbar .nav-caret{'
    $c = $c -replace '(\s+)\.nav-item:hover \.nav-caret,\.nav-item:focus-within \.nav-caret\{', '${1}.navbar .nav-item:hover .nav-caret,.navbar .nav-item:focus-within .nav-caret{'
    $c = $c -replace '(\s+)\.nav-menu\{', '${1}.navbar .nav-menu{'
    $c = $c -replace '(\s+)\.nav-item:hover \.nav-menu,\.nav-item:focus-within \.nav-menu\{', '${1}.navbar .nav-item:hover .nav-menu,.navbar .nav-item:focus-within .nav-menu{'
    $c = $c -replace '(\s+)\.nav-menu a\{', '${1}.navbar .nav-menu a{'
    $c = $c -replace '(\s+)\.nav-menu a:hover\{', '${1}.navbar .nav-menu a:hover{'
    
    [System.IO.File]::WriteAllText($file, $c, $utf8)
    Write-Host "UPDATED: $file"
}

Write-Host "`nDone! All 3 files updated with vanphong-style drawer."
