$files = @(
    @{ Path = "vanphong.html"; ActiveMenu = "Khối Văn phòng" },
    @{ Path = "index.html"; ActiveMenu = "Khối Thị Trường" },
    @{ Path = "hangnang.html"; ActiveMenu = "Khối Hàng Nặng" }
)

$mobileCss = @"
/* MOBILE STYLES */
.mobile-header { display: none; }
.drawer { display: none; }
.drawer-overlay { display: none; }

@media (max-width: 960px) {
  html, body {
    min-width: 0 !important;
    width: 100% !important;
    overflow-x: hidden !important;
    padding: 0;
  }
  
  /* Hide Desktop Navbar */
  .navbar { display: none !important; }
  
  /* Drawer & Mobile Header Base Styles */
  .mobile-header {
      display: flex !important;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 16px;
      width: 100%;
      height: 64px;
      background: #FFFFFF;
      border-bottom: 1px solid #E5F1F7;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      box-sizing: border-box;
  }
  .menu-btn {
      display: flex; flex-direction: column; justify-content: center; align-items: center;
      padding: 8px; width: 34px; height: 28px; border-radius: 4px; background: none; border: none; cursor: pointer;
  }
  .menu-icon { width: 18px; height: 12px; display: flex; flex-direction: column; justify-content: space-between; }
  .menu-icon span { width: 100%; height: 2px; background: #64748B; }
  .mobile-header .logo { font-size: 18px; line-height: 28px; color: #FF5200; text-decoration: none; }
  .search-btn { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 8px; width: 40px; height: 40px; background: none; border: none; }

  /* Drawer Overlay */
  .drawer-overlay {
      display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.5); z-index: 101; opacity: 0; visibility: hidden; transition: opacity 0.3s ease;
  }
  .drawer-overlay.open { opacity: 1; visibility: visible; }

  /* Drawer */
  .drawer {
      display: flex !important; box-sizing: border-box; flex-direction: column; align-items: flex-start;
      position: fixed; width: 280px; height: 100vh; left: -280px; top: 0px;
      background: #FFFFFF; border-right: 1px solid #E5F1F7; z-index: 102;
      transition: left 0.3s ease; overflow-y: auto; padding: 16px 0;
  }
  .drawer.open { left: 0; box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1); }

  .nav { width: 100%; display: flex; flex-direction: column; }
  .nav-item { display: flex; flex-direction: row; align-items: center; padding: 12px 16px; gap: 12px; width: 100%; height: 44px; text-decoration: none; box-sizing: border-box; }
  .nav-item.active { background: rgba(255, 247, 237, 0.5); border-right: 2px solid #FF5200; }
  .nav-item.active .nav-text { color: #FF5200; }
  .nav-item.active .nav-icon svg { fill: #FF5200; }
  .nav-icon { width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; }
  .nav-text { font-family: 'Lexend'; font-weight: 500; font-size: 14px; line-height: 20px; color: #475569; }
  .sub-nav { display: flex; flex-direction: column; align-items: flex-start; padding: 12px 16px 12px 48px; gap: 12px; width: 100%; box-sizing: border-box; }
  .sub-nav-item { font-family: 'Lexend'; font-weight: 400; font-size: 14px; line-height: 20px; color: #475569; text-decoration: none; display: block; }

  /* Page Restyling */
  .page {
    width: 100% !important; min-width: 0 !important; min-height: auto !important; padding-top: 64px !important;
  }
  .main-content {
    width: 100% !important; padding: 0 0 40px 0 !important; gap: 0 !important;
  }
  
  /* Header Section */
  .header-section {
    padding: 30px 16px !important;
    background: #FF5200;
    position: relative;
    overflow: hidden;
    min-height: 180px;
    justify-content: center;
    border-radius: 0;
  }
  .header-section::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: url('601507324_26010984441840269_4004410743997208922_n.jpg') center/cover;
    opacity: 0.2; z-index: 0;
  }
  .page-title {
    font-size: 24px !important; line-height: 30px !important; color: #fff !important;
    position: relative; z-index: 1; margin-bottom: 8px; letter-spacing: 0;
  }
  .page-desc {
    font-size: 12px !important; line-height: 17px !important; color: #fff !important;
    font-style: italic; position: relative; z-index: 1; max-width: 100%;
  }

  /* Section */
  .section {
    padding: 30px 16px 0 !important; gap: 16px !important;
  }
  .section-border {
    padding-bottom: 0 !important; border-bottom: none !important;
  }
  .section-title {
    font-size: 16px !important; line-height: 24px !important; letter-spacing: 0;
    border-left: 4px solid #FF5200; padding-left: 12px !important; color: #181C1E !important;
  }
  .section-link {
    font-size: 12px !important;
  }
  
  /* Cards */
  .card-grid-4, .card-grid-3 {
    display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important;
  }
  .card { border-radius: 8px !important; }
  .card-thumb, .card-thumb-placeholder { height: 128px !important; }
  .card-body { padding: 12px !important; gap: 8px !important; }
  .card-title {
    font-size: 14px !important; line-height: 20px !important; height: 40px !important;
    margin-bottom: 0 !important; overflow: hidden; text-overflow: ellipsis;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
  }
  .card-meta { font-size: 12px !important; }
  .card-btn {
    height: 30px !important; font-size: 12px !important; padding: 4px 12px !important; margin-top: auto !important;
  }
  
  /* Footer */
  .footer-wrap { width: 100% !important; padding: 16px 24px !important; margin-top: 40px !important; border-top: 1px solid #EBEEF0; background: #fff;}
  .footer {
    width: 100% !important; height: auto !important; flex-direction: column !important;
    align-items: flex-start !important; padding: 24px 0 !important; gap: 16px !important; background: transparent !important; border-top: none !important;
  }
  .footer > div:first-child { display: flex; flex-direction: column; gap: 8px; border-top: 1px solid #F1F5F9; padding-top: 24px; width: 100%;}
  .footer-brand { font-size: 14px !important; }
  .footer-info { font-size: 11px !important; line-height: 16px !important; }
  .footer-right { font-size: 11px !important; margin-top: 16px; align-self: center; text-align: center; }
}
</style>
"@

$jsCode = @"
<script>
    const menuBtn = document.getElementById('menuBtn');
    const drawer = document.getElementById('drawer');
    const drawerOverlay = document.getElementById('drawerOverlay');

    if(menuBtn && drawer && drawerOverlay) {
        function toggleDrawer() {
            drawer.classList.toggle('open');
            drawerOverlay.classList.toggle('open');
        }
        menuBtn.addEventListener('click', toggleDrawer);
        drawerOverlay.addEventListener('click', toggleDrawer);
    }
</script>
</body>
"@

foreach ($item in $files) {
    if (Test-Path $item.Path) {
        $html = [System.IO.File]::ReadAllText($item.Path)
        
        # Only process if not already processed
        if (-not $html.Contains("id=`"drawerOverlay`"")) {
        
            # Replace </style> with Mobile CSS
            $html = $html -replace "</style>", $mobileCss
            
            # Prepare Drawer HTML with active state
            $vpActive = if ($item.ActiveMenu -eq "Khối Văn phòng") { " active" } else { "" }
            $ttActive = if ($item.ActiveMenu -eq "Khối Thị Trường") { " active" } else { "" }
            $hnActive = if ($item.ActiveMenu -eq "Khối Hàng Nặng") { " active" } else { "" }
            
            $drawerHtml = @"
<!-- MOBILE DRAWER & HEADER -->
<div class="drawer-overlay" id="drawerOverlay"></div>
<aside class="drawer" id="drawer">
    <div class="nav">
        <a href="homepage.html" class="nav-item">
            <div class="nav-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </div>
            <div class="nav-text">Trang chủ</div>
        </a>
        <div class="nav-item$vpActive">
            <div class="nav-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.8l7 7v7h-4v-6H9v6H5v-7l7-7z"/></svg>
            </div>
            <div class="nav-text">Khối Văn phòng</div>
        </div>
        <div class="sub-nav">
            <a href="newbie.html" class="sub-nav-item">Chương trình Hội nhập</a>
            <a href="cskh.html" class="sub-nav-item">Nhân viên Chăm sóc Khách hàng</a>
            <a href="fieldsale.html" class="sub-nav-item">Nhân viên Field Sale</a>
        </div>
        <div class="nav-item$ttActive">
            <div class="nav-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
            <div class="nav-text">Khối Thị Trường</div>
        </div>
        <div class="sub-nav">
            <a href="am.html" class="sub-nav-item">Quản lý Khu vực</a>
            <a href="nvxl.html" class="sub-nav-item">Nhân viên Xử lý</a>
            <a href="nvpttt.html" class="sub-nav-item">Nhân viên Phát triển Thị trường</a>
            <a href="nvph.html" class="sub-nav-item">Nhân viên Phân hàng</a>
        </div>
        <div class="nav-item$hnActive">
            <div class="nav-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/></svg>
            </div>
            <div class="nav-text">Khối Hàng Nặng</div>
        </div>
        <div class="sub-nav" style="padding-bottom: 20px;">
            <a href="hangnang.html" class="sub-nav-item">Nhân viên Xử lý</a>
        </div>
    </div>
</aside>

<header class="mobile-header">
    <button class="menu-btn" id="menuBtn">
        <div class="menu-icon">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
    <a href="homepage.html" class="logo">GHN Learning</a>
    <button class="search-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </button>
</header>
"@
            # Insert Drawer right after <body>
            $html = $html -replace "<body>\s*", "<body>`n$drawerHtml`n"
            
            # Insert JS right before </body>
            $html = $html -replace "</body>", $jsCode
            
            # Special adjustment for hangnang.html to make the banner blue
            if ($item.Path -eq "hangnang.html") {
                $html = $html -replace "<body", "<body class=`"hangnang`""
            }

            $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
            [System.IO.File]::WriteAllText("$PWD\$($item.Path)", $html, $utf8NoBom)
            Write-Host "Processed $($item.Path)"
        }
    }
}
