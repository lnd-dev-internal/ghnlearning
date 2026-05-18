# Inject mobile UI into nvxl.html - copy from nvxl-lay.html
$utf8 = New-Object System.Text.UTF8Encoding($false)

$c = [System.IO.File]::ReadAllText("nvxl.html", $utf8)
$lay = [System.IO.File]::ReadAllText("nvxl-lay.html", $utf8)

# ===== 1. INJECT MOBILE CSS before </style> =====
$mobileCSS = [System.IO.File]::ReadAllText("_mobile_css_nvxl.txt", $utf8)
$styleEnd = $c.IndexOf("</style>")
$c = $c.Substring(0, $styleEnd) + "`n" + $mobileCSS + "`n" + $c.Substring($styleEnd)
Write-Host "1. Injected mobile CSS ($($mobileCSS.Length) chars)"

# ===== 2. INJECT MOBILE HEADER + OVERLAY + DRAWER before <main> =====
# Extract from nvxl-lay
$mhStart = $lay.IndexOf('<header class="mobile-header"')
$mhEnd = $lay.IndexOf('</header>', $mhStart) + 9
$mobileHeader = $lay.Substring($mhStart, $mhEnd - $mhStart)

$ovStart = $lay.IndexOf('<div class="drawer-overlay"')
$ovEnd = $lay.IndexOf('</div>', $ovStart) + 6
$overlay = $lay.Substring($ovStart, $ovEnd - $ovStart)

$drStart = $lay.IndexOf('<aside class="drawer"')
$drEnd = $lay.IndexOf('</aside>', $drStart) + 8
$drawer = $lay.Substring($drStart, $drEnd - $drStart)

# Also extract mobile-role-info and mobile-chip-nav from nvxl-lay
$roleStart = $lay.IndexOf('<div class="mobile-role-info"')
$chipEnd = $lay.IndexOf('</nav>', $lay.IndexOf('<nav class="mobile-chip-nav"')) + 6
$mobileRoleChip = ""
if ($roleStart -ge 0 -and $chipEnd -gt $roleStart) {
    $mobileRoleChip = $lay.Substring($roleStart, $chipEnd - $roleStart)
}

# Update drawer: set "Khoi Thi Truong" sub-nav "Nhan vien Xu ly" as active
# And ensure Leaders Talk link exists

# Insert all mobile elements before <main class="main">
$mainIdx = $c.IndexOf('<main class="main">')
$mobileHTML = "`n  " + $mobileHeader + "`n  " + $overlay + "`n  " + $drawer + "`n"
if ($mobileRoleChip) {
    $mobileHTML += "  " + $mobileRoleChip + "`n"
}
$c = $c.Substring(0, $mainIdx) + $mobileHTML + "  " + $c.Substring($mainIdx)
Write-Host "2. Injected mobile header, overlay, drawer"

# ===== 3. INJECT TOGGLE DRAWER SCRIPT before </body> =====
$toggleScript = @'
<script>
  var menuBtn=document.getElementById('menuBtn'),drawer=document.getElementById('drawer'),drawerOverlay=document.getElementById('drawerOverlay');
  if(menuBtn&&drawer&&drawerOverlay){function toggleDrawer(){drawer.classList.toggle('open');drawerOverlay.classList.toggle('open');}menuBtn.addEventListener('click',toggleDrawer);drawerOverlay.addEventListener('click',toggleDrawer);}
</script>
'@

# Check if already has toggle script
if (-not $c.Contains('toggleDrawer')) {
    $bodyEnd = $c.IndexOf('</body>')
    $c = $c.Substring(0, $bodyEnd) + $toggleScript + "`n" + $c.Substring($bodyEnd)
    Write-Host "3. Injected toggleDrawer script"
}

# ===== 4. FIX: Remove min-width:1920px from base CSS =====
$c = $c.Replace("min-width:1920px;min-height:1080px", "min-height:1080px")
$c = $c.Replace("width:1920px;min-height:1080px;margin:0 auto", "max-width:1920px;min-height:1080px;margin:0 auto")
$c = $c.Replace("width:1920px;margin:0 auto", "max-width:1920px;margin:0 auto")
Write-Host "4. Fixed desktop width constraints"

# ===== 5. UPDATE NAVBAR - add dropdowns =====
# Replace simple nav links with dropdown versions (matching homepage)
$oldNavLinks = '<a class="nav-link" href="homepage.html">Trang chu</a>
      <a class="nav-link" href="vanphong.html">Khoi Van Phong</a>
      <a class="nav-link active" href="nvxl.html">Khoi Thi Truong</a>
      <a class="nav-link" href="hangnang.html">Khoi Hang Nang</a>
      <a class="nav-link" href="#">Leaders Talk</a>'

# Actually let me check what the current nav-links look like
$navLinksStart = $c.IndexOf('<div class="nav-links">')
$navLinksEnd = $c.IndexOf('</div>', $navLinksStart) + 6
$currentNavLinks = $c.Substring($navLinksStart, $navLinksEnd - $navLinksStart)
Write-Host "`n5. Current nav-links: $($currentNavLinks.Length) chars"

# Check if it has dropdown already
if (-not $c.Contains('nav-trigger')) {
    # Replace with dropdown version from homepage, keeping active on Khoi Thi Truong
    $newNavLinks = '<div class="nav-links">
      <a class="nav-link" href="homepage.html">Trang ch&#7911;</a>
      <div class="nav-item">
        <a class="nav-link nav-trigger" href="vanphong.html">
          <span>Kh&#7889;i V&#259;n Ph&#242;ng</span>
          <svg class="nav-caret" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
        <div class="nav-menu">
          <a href="newbie.html">Ch&#432;&#417;ng tr&#236;nh H&#7897;i nh&#7853;p</a>
          <a href="cskh.html">Nh&#226;n vi&#234;n Ch&#259;m s&#243;c Kh&#225;ch h&#224;ng</a>
          <a href="fieldsale.html">Nh&#226;n vi&#234;n Field Sale</a>
        </div>
      </div>
      <div class="nav-item">
        <a class="nav-link nav-trigger active" href="index.html">
          <span>Kh&#7889;i Th&#7883; Tr&#432;&#7901;ng</span>
          <svg class="nav-caret" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
        <div class="nav-menu">
          <a href="am.html">Qu&#7843;n l&#253; Khu v&#7921;c</a>
          <a href="nvxl.html">Nh&#226;n vi&#234;n X&#7917; l&#253;</a>
          <a href="nvpttt.html">NVPTTT</a>
          <a href="nvph.html">Nh&#226;n vi&#234;n Ph&#226;n h&#224;ng</a>
        </div>
      </div>
      <div class="nav-item">
        <a class="nav-link nav-trigger" href="hangnang.html">
          <span>Kh&#7889;i H&#224;ng N&#7863;ng</span>
          <svg class="nav-caret" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
        <div class="nav-menu">
          <a href="freight.html">Nh&#226;n vi&#234;n X&#7917; l&#253;</a>
        </div>
      </div>
      <a class="nav-link" href="leaders-talk.html">Leaders Talk</a>
    </div>'
    
    $c = $c.Substring(0, $navLinksStart) + $newNavLinks + $c.Substring($navLinksEnd)
    Write-Host "5. Replaced nav-links with dropdown version"
    
    # Add nav-item CSS if missing
    if (-not $c.Contains('.nav-item{position:relative')) {
        $navbarCSS = ".nav-item{position:relative;display:flex;align-items:center;}.nav-trigger{display:flex;align-items:center;gap:4px;}.nav-caret{width:10px;height:10px;transition:transform .2s;}.nav-item:hover .nav-caret,.nav-item:focus-within .nav-caret{transform:rotate(180deg);}.nav-menu{display:none;position:absolute;top:100%;left:0;background:#fff;border:1px solid #e5f1f7;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.1);padding:8px 0;min-width:200px;z-index:200;}.nav-item:hover .nav-menu,.nav-item:focus-within .nav-menu{display:block;}.nav-menu a{display:block;padding:8px 16px;font-size:14px;color:#475569;white-space:nowrap;}.nav-menu a:hover{background:#f0f8ff;color:#ff5200;}"
        $navbarEnd = $c.IndexOf(".search-box input::placeholder")
        $navbarEnd = $c.IndexOf("}", $navbarEnd) + 1
        $c = $c.Substring(0, $navbarEnd) + "`n" + $navbarCSS + $c.Substring($navbarEnd)
        Write-Host "   Added nav-item dropdown CSS"
    }
}

[System.IO.File]::WriteAllText("nvxl.html", $c, $utf8)
Write-Host "`nDone! nvxl.html now has mobile UI."

# Verify
$verify = [System.IO.File]::ReadAllText("nvxl.html", $utf8)
Write-Host "`n=== VERIFY ==="
Write-Host "mobile-header: $($verify.Contains('mobile-header'))"
Write-Host "drawer: $($verify.Contains('class=""drawer""'))"
Write-Host "drawer-overlay: $($verify.Contains('drawer-overlay'))"
Write-Host "toggleDrawer: $($verify.Contains('toggleDrawer'))"
Write-Host "Leaders Talk in drawer: $($verify.Contains('leaders-talk.html'))"
Write-Host "nav-trigger (dropdowns): $($verify.Contains('nav-trigger'))"
Write-Host "@media: $($verify.Contains('@media'))"
Write-Host "File size: $($verify.Length)"
