# Replace speaker section in dien-gia.html with new 4-column photo card grid
$utf8 = New-Object System.Text.UTF8Encoding($false)
$c = [System.IO.File]::ReadAllText("dien-gia.html", $utf8)

$oldStart = $c.IndexOf('<section class="section" id="speakers">')
$oldEnd = $c.IndexOf('</section>', $oldStart) + 10

$newSection = @'
<section class="section" id="speakers">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px 24px;max-width:1200px;margin:0 auto;">
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(0,160,250,0.3);" data-speaker="luong-dung-nhan" onclick="openModal('luong-dung-nhan')">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Lương Dũng Nhân.jpg');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#00A0FA;margin:0;">LƯƠNG DŨNG NHÂN</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">GIÁM ĐỐC ĐÀO TẠO HỆ THỐNG GIÁO DỤC ATY</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(248,178,0,0.3);" data-speaker="hoang-giang" onclick="openModal('hoang-giang')">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Hoàng Giang.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#F8B200;margin:0;">HOÀNG GIANG</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">HEAD OF C2C</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(255,82,0,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Đỗ Đình Thương.jpg');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#FF5200;margin:0;">ĐỖ ĐÌNH THƯƠNG</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">CS C2C MANAGER</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(0,160,250,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Phạm Từ Thứ.jpg');background-size:135%;background-position:center 45%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#00A0FA;margin:0;">PHẠM TỪ THỨ</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">PERFORMANCE MARKETING TEAM LEADER</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(248,178,0,0.3);" data-speaker="nguyen-lam-hoang-yen" onclick="openModal('nguyen-lam-hoang-yen')">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Nguyễn Lâm Hoàng Yên.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#F8B200;margin:0;">NGUYỄN LÂM HOÀNG YÊN</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">CORE AI &amp; DATA PLATFORM DIRECTOR</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(255,82,0,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Phạm Hoàng Long.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#FF5200;margin:0;">PHẠM HOÀNG LONG</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">MANAGING DIRECTOR TẠI ATTIVO INTERNATIONAL CO.,LTD</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(0,160,250,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Thơm Trần.png');background-size:cover;background-position:center 10%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#00A0FA;margin:0;">THƠM TRẦN</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">FOUNDER &amp; CEO TẠI KHƠ II</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(248,178,0,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Trần Thế Trung.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#F8B200;margin:0;">TRẦN THẾ TRUNG</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">MANAGEMENT BOARD TẠI DIGIBIRD</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(255,82,0,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Giáp Đức Thắng.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#FF5200;margin:0;">GIÁP ĐỨC THẮNG</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">ĐẠI SỨ N8N VIỆT NAM &amp; CO-FOUNDER EPION</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(0,160,250,0.3);" data-speaker="nguyen-minh-trung" onclick="openModal('nguyen-minh-trung')">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Nguyễn Minh Trung.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#00A0FA;margin:0;">NGUYỄN MINH TRUNG</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">CỰU PHÓ TỔNG GIÁM ĐỐC KHỐI NHÂN LỰC TẠI TẬP ĐOÀN XÂY DỰNG HOÀ BÌNH</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(248,178,0,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Nhi Nguyễn.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#F8B200;margin:0;">NHI NGUYỄN</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">GBS - HEAD OF BRAND PARTNERSHIP, CPG, TIKTOK VIET NAM</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(255,82,0,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Lê Thanh Bính.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#FF5200;margin:0;">LÊ THANH BÍNH</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">TECHNICAL PROGRAM MANAGER TẠI GOOGLE IRELAND</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(0,160,250,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Kim Lê Huy.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#00A0FA;margin:0;">KIM LÊ HUY</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">PHÓ CHỦ TỊCH NGÀNH HÀNG TIÊU DÙNG TỔNG GIÁM ĐỐC DKSH VIỆT NAM</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(248,178,0,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Nguyễn Hoàng Nam.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#F8B200;margin:0;">NGUYỄN HOÀNG NAM</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;"></p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(255,82,0,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Ngân Trần.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#FF5200;margin:0;">NGÂN TRẦN</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">CEO/FOUNDER, THE NEW LEADERS</p></div>
        </article>
        <article style="display:flex;flex-direction:column;background:#fff;box-shadow:0 10px 25px -5px rgba(0,0,0,.05);border-radius:32px;overflow:hidden;cursor:pointer;transition:transform 260ms ease;border:2px solid rgba(0,160,250,0.3);">
          <div style="width:100%;aspect-ratio:284/177.5;background-image:url('Cao Tuấn Minh.png');background-size:cover;background-position:center 20%;"></div>
          <div style="padding:16px;"><h3 style="font-family:Montserrat;font-weight:700;font-size:18px;line-height:22px;text-transform:uppercase;color:#00A0FA;margin:0;">CAO TUẤN MINH</h3><p style="font-size:11px;line-height:16px;letter-spacing:0.55px;text-transform:uppercase;color:#3F4852;margin:0;">SENIOR MANGER, SALESFORCE RECRUITMENT &amp; DEVELOPMENT</p></div>
        </article>
      </div>
    </section>
'@

$before = $c.Substring(0, $oldStart)
$after = $c.Substring($oldEnd)
$result = $before + $newSection + $after

[System.IO.File]::WriteAllText("dien-gia.html", $result, $utf8)
Write-Host "Done! Replaced speaker section with 16 photo cards"
