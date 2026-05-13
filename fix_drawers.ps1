# Fix ALL drawer navbars - Add Leaders Talk + Fix Font to Lexend
$utf8 = New-Object System.Text.UTF8Encoding($false)

$leadersTalkItem = '        <a href="leaders-talk.html" class="nav-item">
            <div class="nav-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
            </div>
            <div class="nav-text">Leaders Talk</div>
        </a>'

$files = Get-ChildItem -Path . -Filter "*.html" | Where-Object { 
    $_.Name -notmatch "\(1\)" -and $_.Name -notmatch "fixed" -and 
    $_.Name -notmatch "template" -and $_.Name -notmatch "section" -and
    $_.Name -notmatch "navbar_" -and $_.Name -notmatch "speaker_"
}

$updated = 0

foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName, $utf8)
    
    if (-not $c.Contains("class=""drawer""")) { continue }
    
    $changed = $false
    
    # 1. Add Leaders Talk if missing from drawer
    $drawerStart = $c.IndexOf("class=""drawer""")
    $drawerEndTag = $c.IndexOf("</aside>", $drawerStart)
    if ($drawerEndTag -gt 0) {
        $drawerContent = $c.Substring($drawerStart, $drawerEndTag - $drawerStart)
        
        if (-not $drawerContent.Contains("leaders-talk")) {
            # Insert before the closing </div> of .nav (right before </aside>)
            $lastDivClose = $c.LastIndexOf("</div>", $drawerEndTag)
            $c = $c.Substring(0, $lastDivClose) + $leadersTalkItem + "`n    " + $c.Substring($lastDivClose)
            $changed = $true
        }
    }
    
    # 2. Fix font: replace Be Vietnam Pro or Exo 2 with Lexend in nav-text
    $oldFont1 = "font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:14px"
    $newFont1 = "font-family:'Lexend',sans-serif;font-weight:500;font-size:14px"
    if ($c.Contains($oldFont1)) {
        $c = $c.Replace($oldFont1, $newFont1)
        $changed = $true
    }
    
    # Also fix sub-nav-item font
    $oldFont2 = "font-family:'Be Vietnam Pro',sans-serif;font-weight:400;font-size:14px"
    $newFont2 = "font-family:'Lexend',sans-serif;font-weight:400;font-size:14px"
    if ($c.Contains($oldFont2)) {
        $c = $c.Replace($oldFont2, $newFont2)
        $changed = $true
    }
    
    # Fix CSS class-based font declarations
    $c = $c -replace "\.nav-text\s*\{([^}]*?)font-family:\s*['""]?Exo 2['""]?", '.nav-text{${1}font-family:''Lexend'''
    $c = $c -replace "\.nav-text\s*\{([^}]*?)font-family:\s*['""]?Be Vietnam Pro['""]?", '.nav-text{${1}font-family:''Lexend'''
    $c = $c -replace "\.sub-nav-item\s*\{([^}]*?)font-family:\s*['""]?Exo 2['""]?", '.sub-nav-item{${1}font-family:''Lexend'''
    $c = $c -replace "\.sub-nav-item\s*\{([^}]*?)font-family:\s*['""]?Be Vietnam Pro['""]?", '.sub-nav-item{${1}font-family:''Lexend'''
    
    # Ensure Lexend font is loaded
    if (-not $c.Contains("Lexend")) {
        # Already loaded via Google Fonts in most pages
    }
    if ($c.Contains("fonts.googleapis.com") -and -not $c.Contains("Lexend")) {
        $c = $c -replace "(fonts\.googleapis\.com/css2\?family=[^""]+)", '${1}&family=Lexend:wght@400;500;700'
    }
    
    if ($changed) {
        [System.IO.File]::WriteAllText($f.FullName, $c, $utf8)
        $updated++
        Write-Host "UPDATED: $($f.Name)"
    }
}

Write-Host "`nTotal updated: $updated files"

# Verify Leaders Talk in all drawers
Write-Host "`n=== VERIFY ==="
$missing = 0
foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName, $utf8)
    if (-not $c.Contains("class=""drawer""")) { continue }
    $di = $c.IndexOf("class=""drawer""")
    $de = $c.IndexOf("</aside>", $di)
    if ($de -gt 0) {
        $dc = $c.Substring($di, $de - $di)
        if (-not $dc.Contains("leaders-talk")) {
            Write-Host "MISSING: $($f.Name)"
            $missing++
        }
    }
}
if ($missing -eq 0) { Write-Host "All drawers have Leaders Talk!" }
