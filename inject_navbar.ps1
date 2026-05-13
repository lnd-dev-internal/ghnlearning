# Inject new navbar + drawer + mobile CSS into the 3 restored backup files
$dir = (Get-Location).Path
$utf8 = New-Object System.Text.UTF8Encoding($false)

$navbarCSS = @'
    /* -- Navbar from homepage -- */
    .navbar{position:sticky;top:0;z-index:100;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 32px;width:100%;height:64px;background:#fff;border-bottom:1px solid #E5F1F7;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.logo{font-family:'Montserrat',sans-serif;font-weight:900;font-size:24px;line-height:32px;color:#FF5200;letter-spacing:-0.5px;text-decoration:none}
.logo span{color:#009BE0}
.nav-links{display:flex;flex-direction:row;align-items:center;gap:24px}
.nav-item{position:relative;display:flex;align-items:center}
.nav-link{font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:16px;line-height:24px;color:#475569;text-decoration:none;cursor:pointer}
.nav-link:hover{color:#FF5200}
.nav-link.active{font-weight:600;color:#FF5200;border-bottom:2px solid #FF5200;padding-bottom:4px}
.nav-trigger{display:inline-flex;align-items:center;gap:6px}
.nav-caret{width:10px;height:10px;flex:0 0 10px;transition:transform .2s ease}
.nav-item:hover .nav-caret,.nav-item:focus-within .nav-caret{transform:rotate(180deg)}
.nav-menu{position:absolute;top:calc(100% + 12px);left:0;min-width:292px;padding:10px 0;background:#fff;border:1px solid #E5F1F7;border-radius:12px;box-shadow:0 12px 32px rgba(15,23,42,.12);opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .18s ease,transform .18s ease,visibility .18s ease;z-index:120}
.nav-item:hover .nav-menu,.nav-item:focus-within .nav-menu{opacity:1;visibility:visible;transform:translateY(0)}
.nav-menu a{display:block;padding:14px 16px;font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:16px;line-height:24px;color:#475569;text-decoration:none;white-space:nowrap}
.nav-menu a:hover{background:#F8FAFC;color:#FF5200}
.search-box{display:flex;align-items:center;position:relative}
.search-box input{width:221px;height:42px;background:#F3F3F6;border:1px solid #E5BEB2;border-radius:8px;padding:10px 16px 10px 40px;font-family:'Be Vietnam Pro',sans-serif;font-size:16px;color:#6B7280;outline:none}
.search-box input::placeholder{color:#6B7280}
.search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:18px;height:18px;opacity:.6}
'@

$mobileCSS = @'

    /* -- Strict Layout & Smooth Scroll -- */
    html { scroll-behavior: smooth; }
    body { overflow-x: auto; }
    main, footer { margin: 0 auto; }
    #strip-nav { scroll-margin-top: 0; }

    /* MOBILE NAV CSS */
    .mobile-header { display: none; }
    .drawer { display: none; }
    .drawer-overlay { display: none; }
    @media (max-width: 960px) {
      body { min-width: 0 !important; overflow-x: hidden !important; }
      main, footer { width: 100% !important; margin: 0; }
      .navbar { display: none !important; }
      .mobile-header{display:flex!important;flex-direction:row;justify-content:space-between;align-items:center;padding:0 16px;width:100%;height:64px;background:#fff;border-bottom:1px solid #E5F1F7;box-shadow:0 4px 20px rgba(0,0,0,.04);position:fixed;top:0;left:0;z-index:100;box-sizing:border-box;}
      .menu-btn{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8px;width:34px;height:28px;border-radius:4px;background:none;border:none;cursor:pointer;}
      .menu-icon{width:18px;height:12px;display:flex;flex-direction:column;justify-content:space-between;}
      .menu-icon span{width:100%;height:2px;background:#64748B;}
      .mobile-header .logo{font-family:'Montserrat',sans-serif;font-weight:900;font-size:24px;line-height:32px;color:#FF5200;text-decoration:none;}
      .search-btn{display:flex;align-items:center;justify-content:center;padding:8px;width:40px;height:40px;background:none;border:none;}
      .drawer-overlay{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:101;opacity:0;visibility:hidden;transition:opacity .3s;}
      .drawer-overlay.open{opacity:1;visibility:visible;}
      .drawer{display:flex!important;box-sizing:border-box;flex-direction:column;position:fixed;width:280px;height:100vh;left:-280px;top:0;background:#fff;border-right:1px solid #E5F1F7;z-index:102;transition:left .3s;overflow-y:auto;padding:16px 0;}
      .drawer.open{left:0;box-shadow:0 20px 25px -5px rgba(0,0,0,.1);}
      .nav{width:100%;display:flex;flex-direction:column;}
      .nav-item{display:flex;flex-direction:row;align-items:center;padding:12px 16px !important;margin:0 !important;gap:12px;width:100%;height:44px;text-decoration:none;box-sizing:border-box;}
      .nav-item.active{background:rgba(255,247,237,.5);border-right:2px solid #FF5200;}
      .nav-item.active .nav-text{color:#FF5200;}
      .nav-item.active .nav-icon svg{fill:#FF5200;}
      .nav-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;}
      .nav-text{font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#475569;margin:0;}
      .sub-nav{display:flex;flex-direction:column;align-items:flex-start;padding:12px 16px 12px 48px !important;margin:0 !important;gap:12px;width:100%;box-sizing:border-box;}
      .sub-nav-item{font-family:'Be Vietnam Pro',sans-serif;font-weight:400;font-size:14px;line-height:20px !important;color:#475569;text-decoration:none;display:block;margin:0 !important;padding:0 !important;height:auto !important;}
      
      main { padding-top: 64px !important; }
      .hero { padding: 40px 16px !important; }
      .section { padding: 40px 16px !important; }
      .strip { padding: 16px !important; flex-wrap: wrap; }
      .footer { width: 100% !important; padding: 24px 16px !important; flex-direction: column; align-items: flex-start; height: auto !important; }
      
      .benefit-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px; }
      .benefit-card { padding: 24px; min-height: auto; }
      .hero-visual { display: none !important; }
      .speaker-hero { height: 320px; }
      .floating strong { font-size: 24px; line-height: 24px; }
      .floating-icon { width: 32px; height: 32px; font-size: 14px; }
      .floating { padding: 12px; gap: 8px; }
      .event-image { min-height: 180px; }
      .event-body { padding: 24px; gap: 16px; }
    }
'@

$drawerHTML = @'
<div class="drawer-overlay" id="drawerOverlay"></div>
<aside class="drawer" id="drawer">
  <div class="nav">
    <a href="homepage.html" class="nav-item">
      <div class="nav-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></div>
      <div class="nav-text">Trang ch&#7911;</div>
    </a>
    <a href="vanphong.html" class="nav-item">
      <div class="nav-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.8l7 7v7h-4v-6H9v6H5v-7l7-7z"/></svg></div>
      <div class="nav-text">Kh&#7889;i V&#259;n ph&#242;ng</div>
    </a>
    <div class="sub-nav">
      <a href="newbie.html" class="sub-nav-item">Ch&#432;&#417;ng tr&#236;nh H&#7897;i nh&#7853;p</a>
      <a href="cskh.html" class="sub-nav-item">Nh&#226;n vi&#234;n Ch&#259;m s&#243;c Kh&#225;ch h&#224;ng</a>
      <a href="fieldsale.html" class="sub-nav-item">Nh&#226;n vi&#234;n Field Sale</a>
    </div>
    <a href="index.html" class="nav-item">
      <div class="nav-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></div>
      <div class="nav-text">Kh&#7889;i Th&#7883; Tr&#432;&#7901;ng</div>
    </a>
    <div class="sub-nav">
      <a href="am.html" class="sub-nav-item">Qu&#7843;n l&#253; Khu v&#7921;c</a>
      <a href="nvxl.html" class="sub-nav-item">Nh&#226;n vi&#234;n X&#7917; l&#253;</a>
      <a href="nvpttt.html" class="sub-nav-item">Nh&#226;n vi&#234;n Ph&#225;t tri&#7875;n Th&#7883; tr&#432;&#7901;ng</a>
      <a href="nvph.html" class="sub-nav-item">Nh&#226;n vi&#234;n Ph&#226;n h&#224;ng</a>
    </div>
    <a href="hangnang.html" class="nav-item">
      <div class="nav-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/></svg></div>
      <div class="nav-text">Kh&#7889;i H&#224;ng N&#7863;ng</div>
    </a>
    <div class="sub-nav" style="padding-bottom:20px;">
      <a href="hangnang.html" class="sub-nav-item">Nh&#226;n vi&#234;n X&#7917; l&#253;</a>
    </div>
    <a href="leaders-talk.html" class="nav-item active">
      <div class="nav-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg></div>
      <div class="nav-text" style="font-weight:700;">Leaders Talk</div>
    </a>
  </div>
</aside>
<header class="mobile-header">
  <button class="menu-btn" id="menuBtn"><div class="menu-icon"><span></span><span></span><span></span></div></button>
  <a href="homepage.html" class="logo">GHN Learning</a>
  <button class="search-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
</header>
'@

$navbarHTML = @'
  <header>
  <nav class="navbar">
    <a class="logo" href="homepage.html">GHN <span>Learning</span></a>
    <div class="nav-links">
      <a class="nav-link" href="homepage.html">Trang ch&#7911;</a>
      <div class="nav-item">
        <a class="nav-link nav-trigger" href="vanphong.html">
          <span>Kh&#7889;i V&#259;n Ph&#242;ng</span>
          <svg class="nav-caret" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
        <div class="nav-menu">
          <a href="newbie.html">Ch&#432;&#417;ng tr&#236;nh H&#7897;i nh&#7853;p</a>
          <a href="cskh.html">Nh&#226;n vi&#234;n Ch&#259;m s&#243;c Kh&#225;ch h&#224;ng</a>
          <a href="fieldsale.html">Nh&#226;n vi&#234;n Field Sale</a>
        </div>
      </div>
      <div class="nav-item">
        <a class="nav-link nav-trigger" href="index.html">
          <span>Kh&#7889;i Th&#7883; Tr&#432;&#7901;ng</span>
          <svg class="nav-caret" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
        <div class="nav-menu">
          <a href="am.html">Qu&#7843;n l&#253; Khu v&#7921;c</a>
          <a href="nvxl.html">Nh&#226;n vi&#234;n X&#7917; l&#253;</a>
          <a href="nvpttt.html">NVPTTT</a>
          <a href="nvph.html">Nh&#226;n vi&#234;n Ph&#226;n h&#224;ng</a>
        </div>
      </div>
      <a class="nav-link" href="hangnang.html">Kh&#7889;i H&#224;ng N&#7863;ng</a>
      <a class="nav-link active" href="leaders-talk.html">Leaders Talk</a>
    </div>
    <div class="search-box">
      <svg class="search-icon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="7.5" cy="7.5" r="5.5" stroke="#5C4037" stroke-width="1.5"></circle>
        <path d="M12 12L16 16" stroke="#5C4037" stroke-width="1.5" stroke-linecap="round"></path>
      </svg>
      <input type="text" placeholder="T&#236;m ki&#7871;m kh&#243;a h&#7885;c...">
    </div>
  </nav>
</header>
'@

$drawerScript = @'
<script>
  var menuBtn=document.getElementById('menuBtn'),drawer=document.getElementById('drawer'),drawerOverlay=document.getElementById('drawerOverlay');
  if(menuBtn&&drawer&&drawerOverlay){function toggleDrawer(){drawer.classList.toggle('open');drawerOverlay.classList.toggle('open');}menuBtn.addEventListener('click',toggleDrawer);drawerOverlay.addEventListener('click',toggleDrawer);}
</script>
'@

$files = @('leaders-talk.html', 'dien-gia.html', 'workshop.html')

foreach ($file in $files) {
    $filePath = Join-Path $dir $file
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    
    # 1. Remove old topbar header and replace with new navbar + drawer
    # Old pattern: <header class="topbar">...</header>  or  <body>\n  <header class="topbar">
    $content = $content -replace '(?s)<header class="topbar">.*?</header>', ''
    
    # 2. Inject navbar CSS before </style>
    $content = $content -replace '</style>', ($navbarCSS + $mobileCSS + "`n  </style>")
    
    # 3. Inject drawer + mobile header + navbar after <body>
    $content = $content -replace '<body>', ("<body>`n" + $drawerHTML + "`n" + $navbarHTML)
    
    # 4. Inject drawer script before </body>
    $content = $content -replace '</body>', ($drawerScript + "`n</body>")
    
    # 5. Fix strip nav links to have #strip-nav anchors
    $content = $content -replace 'href="leaders-talk.html"(>T)', 'href="leaders-talk.html#strip-nav"$1'
    $content = $content -replace 'href="workshop.html"(>W)', 'href="workshop.html#strip-nav"$1'
    $content = $content -replace 'href="dien-gia.html"(>D)', 'href="dien-gia.html#strip-nav"$1'
    
    # 6. Add id="strip-nav" to the strip nav
    $content = $content -replace 'class="strip" aria-label', 'class="strip" id="strip-nav" aria-label'
    
    [System.IO.File]::WriteAllText($filePath, $content, $utf8)
    Write-Host "Updated: $file"
}

Write-Host "`nDone! All 3 files updated with new navbar + drawer + mobile CSS"
