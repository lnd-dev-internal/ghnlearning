$files = @(
    @{ Path = "freight.html"; ActiveChip = "Hàng giao" },
    @{ Path = "freight-lay.html"; ActiveChip = "Hàng lấy" },
    @{ Path = "freight-tra.html"; ActiveChip = "Hàng trả" },
    @{ Path = "freight-lc.html"; ActiveChip = "Luân chuyển" },
    @{ Path = "freight-khac.html"; ActiveChip = "Khác" }
)

$mobileCss = @"
/* MOBILE */
.mobile-header{display:none;}.drawer{display:none;}.drawer-overlay{display:none;}.mobile-role-info{display:none;}.mobile-chip-nav{display:none;}
@media(max-width:960px){
  html,body{min-width:0!important;width:100%!important;overflow-x:hidden!important;}
  .navbar{display:none!important;}.sidebar{display:none!important;}
  .mobile-header{display:flex!important;flex-direction:row;justify-content:space-between;align-items:center;padding:0 16px;width:100%;height:64px;background:#fff;border-bottom:1px solid #E5F1F7;box-shadow:0 4px 20px rgba(0,0,0,.04);position:fixed;top:0;left:0;z-index:100;box-sizing:border-box;}
  .menu-btn{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8px;width:34px;height:28px;border-radius:4px;background:none;border:none;cursor:pointer;}
  .menu-icon{width:18px;height:12px;display:flex;flex-direction:column;justify-content:space-between;}
  .menu-icon span{width:100%;height:2px;background:#64748B;}
  .mobile-header .logo{font-family:'Lexend',sans-serif;font-weight:700;font-size:18px;line-height:28px;color:#FF5200;text-decoration:none;}
  .search-btn{display:flex;align-items:center;justify-content:center;padding:8px;width:40px;height:40px;background:none;border:none;}
  .drawer-overlay{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:101;opacity:0;visibility:hidden;transition:opacity .3s;}
  .drawer-overlay.open{opacity:1;visibility:visible;}
  .drawer{display:flex!important;box-sizing:border-box;flex-direction:column;position:fixed;width:280px;height:100vh;left:-280px;top:0;background:#fff;border-right:1px solid #E5F1F7;z-index:102;transition:left .3s;overflow-y:auto;padding:16px 0;}
  .drawer.open{left:0;box-shadow:0 20px 25px -5px rgba(0,0,0,.1);}
  .nav{width:100%;display:flex;flex-direction:column;}
  .nav-item{display:flex;flex-direction:row;align-items:center;padding:12px 16px;gap:12px;width:100%;height:44px;text-decoration:none;box-sizing:border-box;}
  .nav-item.active{background:rgba(255,247,237,.5);border-right:2px solid #FF5200;}
  .nav-item.active .nav-text{color:#FF5200;}
  .nav-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;}
  .nav-text{font-family:'Lexend',sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#475569;}
  .sub-nav{display:flex;flex-direction:column;padding:12px 16px 12px 48px;gap:12px;width:100%;box-sizing:border-box;}
  .sub-nav-item{font-family:'Lexend',sans-serif;font-weight:400;font-size:14px;line-height:20px;color:#475569;text-decoration:none;display:block;}
  .page{width:100%!important;min-width:0!important;}
  .main-content{width:100%!important;padding:64px 0 40px!important;gap:0!important;flex-direction:column!important;}
  .mobile-role-info{display:flex!important;flex-direction:column;align-items:flex-start;padding:24px 16px;width:100%;background:#fff;border-bottom:1px solid #E5E7EB;}
  .role-container{display:flex;flex-direction:row;align-items:center;}
  .role-avatar{width:48px;height:48px;background:#004B77;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .role-title{font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;line-height:28px;color:#1E293B;margin-left:16px;}
  .mobile-chip-nav{display:flex!important;align-items:center;padding:8px 16px;width:100%;background:#fff;border-bottom:1px solid #E5E7EB;overflow-x:auto;white-space:nowrap;scrollbar-width:none;}
  .mobile-chip-nav::-webkit-scrollbar{display:none;}
  .chip{display:inline-flex;align-items:center;justify-content:center;padding:8px 16px;height:32px;border-radius:9999px;background:#F1F5F9;font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:12px;color:#475569;text-decoration:none;white-space:nowrap;margin-right:8px;}
  .chip.active{background:rgba(241,90,36,.1);font-weight:700;color:#F15A24;}
  .content{width:100%!important;padding:0 16px 24px!important;}
  .breadcrumb{display:none!important;}
  .section-border{padding:24px 0 0!important;border-bottom:none!important;}
  .section-title{font-size:18px!important;line-height:28px!important;color:#F37021!important;letter-spacing:0!important;}
  .card-grid{grid-template-columns:1fr!important;gap:16px!important;}
  .card-thumb{height:160px!important;}
  .footer-wrap{width:100%!important;padding:16px 24px!important;margin-top:40px!important;border-top:1px solid #EBEEF0!important;background:#fff!important;}
  .footer{width:100%!important;height:auto!important;flex-direction:column!important;align-items:flex-start!important;padding:24px 0!important;gap:16px!important;background:transparent!important;border-top:none!important;}
  .footer > div:first-child{display:flex;flex-direction:column;gap:8px;border-top:1px solid #F1F5F9;padding-top:24px;width:100%;}
  .footer-brand{font-size:14px!important;}
  .footer-info{font-size:11px!important;line-height:16px!important;}
  .footer h3{font-size:14px!important;margin-bottom:0!important;}
  .footer p{font-size:11px!important;line-height:16px!important;}
}
</style>
"@

$jsCode = @"
<script>
  var menuBtn=document.getElementById('menuBtn'),drawer=document.getElementById('drawer'),drawerOverlay=document.getElementById('drawerOverlay');
  if(menuBtn&&drawer&&drawerOverlay){function toggleDrawer(){drawer.classList.toggle('open');drawerOverlay.classList.toggle('open');}menuBtn.addEventListener('click',toggleDrawer);drawerOverlay.addEventListener('click',toggleDrawer);}
</script>
</body>
"@

foreach ($item in $files) {
    if (Test-Path $item.Path) {
        $html = [System.IO.File]::ReadAllText($item.Path)
        
        # Add Lexend font if not present
        if (-not $html.Contains("family=Lexend")) {
            $html = $html -replace "family=Montserrat", "family=Lexend:wght@400;500;600;700&family=Montserrat"
        }

        # Apply Mobile CSS
        if (-not $html.Contains("/* MOBILE */")) {
            $html = $html -replace "</style>", $mobileCss
        }

        # Setup Drawer HTML
        $drawerHtml = @"
<div class="drawer-overlay" id="drawerOverlay"></div>
<aside class="drawer" id="drawer">
  <div class="nav">
    <a href="homepage.html" class="nav-item"><div class="nav-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg></div><div class="nav-text">Trang chủ</div></a>
    <a href="vanphong.html" class="nav-item"><div class="nav-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.8l7 7v7h-4v-6H9v6H5v-7l7-7z"/></svg></div><div class="nav-text">Khối Văn phòng</div></a>
    <div class="sub-nav"><a href="newbie.html" class="sub-nav-item">Chương trình Hội nhập</a><a href="cskh.html" class="sub-nav-item">Nhân viên Chăm sóc Khách hàng</a><a href="fieldsale.html" class="sub-nav-item">Nhân viên Field Sale</a></div>
    <a href="index.html" class="nav-item"><div class="nav-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></div><div class="nav-text">Khối Thị Trường</div></a>
    <div class="sub-nav"><a href="am.html" class="sub-nav-item">Quản lý Khu vực</a><a href="nvxl.html" class="sub-nav-item">Nhân viên Xử lý</a><a href="nvpttt.html" class="sub-nav-item">Nhân viên Phát triển Thị trường</a><a href="nvph.html" class="sub-nav-item">Nhân viên Phân hàng</a></div>
    <a href="hangnang.html" class="nav-item active"><div class="nav-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#475569"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/></svg></div><div class="nav-text">Khối Hàng Nặng</div></a>
    <div class="sub-nav" style="padding-bottom:20px;"><a href="freight.html" class="sub-nav-item" style="font-weight:700;color:#FF5200;">Nhân viên Xử lý</a></div>
  </div>
</aside>
<header class="mobile-header">
  <button class="menu-btn" id="menuBtn"><div class="menu-icon"><span></span><span></span><span></span></div></button>
  <a href="homepage.html" class="logo">GHN Learning</a>
  <button class="search-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
</header>
"@

        if (-not $html.Contains("id=`"drawerOverlay`"")) {
            $html = $html -replace "<body>\s*<nav", "<body>`n$drawerHtml`n<nav"
        }

        # Setup Mobile Role Info & Chips
        $giaoActive = if ($item.ActiveChip -eq "Hàng giao") { " active" } else { "" }
        $layActive = if ($item.ActiveChip -eq "Hàng lấy") { " active" } else { "" }
        $traActive = if ($item.ActiveChip -eq "Hàng trả") { " active" } else { "" }
        $lcActive = if ($item.ActiveChip -eq "Luân chuyển") { " active" } else { "" }
        $khacActive = if ($item.ActiveChip -eq "Khác") { " active" } else { "" }

        $contentInsert = @"
<div class="mobile-role-info"><div class="role-container"><div class="role-avatar"><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.2 6.7C2.2 4.55 3.95 2.8 6.1 2.8H15.9C18.05 2.8 19.8 4.55 19.8 6.7V14.1C19.8 15.62 18.57 16.85 17.05 16.85H4.95C3.43 16.85 2.2 15.62 2.2 14.1V6.7Z" fill="#70BCFF"/><path d="M4.65 2.8V1.9C4.65 1.18 5.23 0.6 5.95 0.6H8.15C8.87 0.6 9.45 1.18 9.45 1.9V2.8" stroke="#70BCFF" stroke-width="1.2" stroke-linecap="round"/><path d="M12.55 2.8V1.9C12.55 1.18 13.13 0.6 13.85 0.6H16.05C16.77 0.6 17.35 1.18 17.35 1.9V2.8" stroke="#70BCFF" stroke-width="1.2" stroke-linecap="round"/><path d="M7 8.5V11.8" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M11 7.6V11.8" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M15 8.5V11.8" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></svg></div><div class="role-title">NV Xử lý Hàng nặng</div></div></div>
      <div class="mobile-chip-nav"><a href="freight.html" class="chip$giaoActive">Hàng giao</a><a href="freight-lay.html" class="chip$layActive">Hàng lấy</a><a href="freight-tra.html" class="chip$traActive">Hàng trả</a><a href="freight-lc.html" class="chip$lcActive">Luân chuyển</a><a href="freight-khac.html" class="chip$khacActive">Khác</a></div>
      <div class="breadcrumb">
"@

        if (-not $html.Contains("class=`"mobile-role-info`"")) {
            $html = $html -replace '<div class="breadcrumb">', $contentInsert
        }

        # Insert JS right before </body>
        if (-not $html.Contains("toggleDrawer()")) {
            $html = $html -replace "</body>", $jsCode
        }

        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText("$PWD\$($item.Path)", $html, $utf8NoBom)
        Write-Host "Processed $($item.Path)"
    }
}
