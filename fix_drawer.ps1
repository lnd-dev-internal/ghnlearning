$files = @("leaders-talk.html", "workshop.html", "dien-gia.html")
$basePath = "c:\Users\Huawei\.gemini\antigravity\scratch\ghn-portal\"

$oldCSS = ".nav{width:100%;display:flex;flex-direction:column;}
      .nav-item{display:flex;flex-direction:row;align-items:center;padding:12px 16px;gap:12px;width:100%;height:44px;text-decoration:none;box-sizing:border-box;}
      .nav-item.active{background:rgba(255,247,237,.5);border-right:2px solid #FF5200;}
      .nav-item.active .nav-text{color:#FF5200;}
      .nav-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;}
      .nav-text{font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#475569;}
      .sub-nav{display:flex;flex-direction:column;padding:12px 16px 12px 48px;gap:12px;width:100%;box-sizing:border-box;}
      .sub-nav-item{font-family:'Be Vietnam Pro',sans-serif;font-weight:400;font-size:14px;line-height:20px;color:#475569;text-decoration:none;display:block;}"

$newCSS = ".nav{width:100%;display:flex;flex-direction:column;}
      .nav-item{display:flex;flex-direction:row;align-items:center;padding:12px 16px !important;margin:0 !important;gap:12px;width:100%;height:44px;text-decoration:none;box-sizing:border-box;}
      .nav-item.active{background:rgba(255,247,237,.5);border-right:2px solid #FF5200;}
      .nav-item.active .nav-text{color:#FF5200;}
      .nav-item.active .nav-icon svg{fill:#FF5200;}
      .nav-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;}
      .nav-text{font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:14px;line-height:20px;color:#475569;margin:0;}
      .sub-nav{display:flex;flex-direction:column;align-items:flex-start;padding:12px 16px 12px 48px !important;margin:0 !important;gap:12px;width:100%;box-sizing:border-box;}
      .sub-nav-item{font-family:'Be Vietnam Pro',sans-serif;font-weight:400;font-size:14px;line-height:20px !important;color:#475569;text-decoration:none;display:block;margin:0 !important;padding:0 !important;height:auto !important;}"

$oldHTML = "<aside class=`"drawer`" id=`"drawer`">
  <div class=`"nav`">
    <a href=`"homepage.html`" class=`"nav-item`"><div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z`"/></svg></div><div class=`"nav-text`">Trang chủ</div></a>
    <a href=`"vanphong.html`" class=`"nav-item`"><div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M12 2L2 12h3v8h14v-8h3L12 2zm0 2.8l7 7v7h-4v-6H9v6H5v-7l7-7z`"/></svg></div><div class=`"nav-text`">Khối Văn phòng</div></a>
    <div class=`"sub-nav`"><a href=`"newbie.html`" class=`"sub-nav-item`">Chương trình Hội nhập</a><a href=`"cskh.html`" class=`"sub-nav-item`">Nhân viên Chăm sóc Khách hàng</a><a href=`"fieldsale.html`" class=`"sub-nav-item`">Nhân viên Field Sale</a></div>
    <a href=`"index.html`" class=`"nav-item`"><div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z`"/></svg></div><div class=`"nav-text`">Khối Thị Trường</div></a>
    <div class=`"sub-nav`"><a href=`"am.html`" class=`"sub-nav-item`">Quản lý Khu vực</a><a href=`"nvxl.html`" class=`"sub-nav-item`">Nhân viên Xử lý</a><a href=`"nvpttt.html`" class=`"sub-nav-item`">Nhân viên Phát triển Thị trường</a><a href=`"nvph.html`" class=`"sub-nav-item`">Nhân viên Phân hàng</a></div>
    <a href=`"hangnang.html`" class=`"nav-item`"><div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z`"/></svg></div><div class=`"nav-text`">Khối Hàng Nặng</div></a>
    <div class=`"sub-nav`" style=`"padding-bottom:20px;`"><a href=`"hangnang.html`" class=`"sub-nav-item`">Nhân viên Xử lý</a></div>
    <a href=`"leaders-talk.html`" class=`"nav-item active`"><div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v-2H4v6h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-6h-2v2h-2v-5h-2v5z`" fill=`"currentColor`"/></svg></div><div class=`"nav-text`" style=`"font-weight:700;color:#FF5200;`">Leaders Talk</div></a>
  </div>
</aside>"

$newHTML = "<aside class=`"drawer`" id=`"drawer`">
  <div class=`"nav`">
    <a href=`"homepage.html`" class=`"nav-item`">
      <div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z`"/></svg></div>
      <div class=`"nav-text`">Trang chủ</div>
    </a>
    <a href=`"vanphong.html`" class=`"nav-item`">
      <div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M12 2L2 12h3v8h14v-8h3L12 2zm0 2.8l7 7v7h-4v-6H9v6H5v-7l7-7z`"/></svg></div>
      <div class=`"nav-text`">Khối Văn phòng</div>
    </a>
    <div class=`"sub-nav`">
      <a href=`"newbie.html`" class=`"sub-nav-item`">Chương trình Hội nhập</a>
      <a href=`"cskh.html`" class=`"sub-nav-item`">Nhân viên Chăm sóc Khách hàng</a>
      <a href=`"fieldsale.html`" class=`"sub-nav-item`">Nhân viên Field Sale</a>
    </div>
    <a href=`"index.html`" class=`"nav-item`">
      <div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z`"/></svg></div>
      <div class=`"nav-text`">Khối Thị Trường</div>
    </a>
    <div class=`"sub-nav`">
      <a href=`"am.html`" class=`"sub-nav-item`">Quản lý Khu vực</a>
      <a href=`"nvxl.html`" class=`"sub-nav-item`">Nhân viên Xử lý</a>
      <a href=`"nvpttt.html`" class=`"sub-nav-item`">Nhân viên Phát triển Thị trường</a>
      <a href=`"nvph.html`" class=`"sub-nav-item`">Nhân viên Phân hàng</a>
    </div>
    <a href=`"hangnang.html`" class=`"nav-item`">
      <div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z`"/></svg></div>
      <div class=`"nav-text`">Khối Hàng Nặng</div>
    </a>
    <div class=`"sub-nav`" style=`"padding-bottom:20px;`">
      <a href=`"hangnang.html`" class=`"sub-nav-item`">Nhân viên Xử lý</a>
    </div>
    <a href=`"leaders-talk.html`" class=`"nav-item active`">
      <div class=`"nav-icon`"><svg width=`"16`" height=`"16`" viewBox=`"0 0 24 24`" fill=`"#475569`"><path d=`"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z`"/></svg></div>
      <div class=`"nav-text`" style=`"font-weight:700;`">Leaders Talk</div>
    </a>
  </div>
</aside>"

foreach ($file in $files) {
    $fullPath = Join-Path $basePath $file
    $content = Get-Content -Path $fullPath -Raw
    $content = $content.Replace($oldCSS, $newCSS)
    $content = $content.Replace($oldHTML, $newHTML)
    Set-Content -Path $fullPath -Value $content -Encoding UTF8
    Write-Host "Processed $file"
}
