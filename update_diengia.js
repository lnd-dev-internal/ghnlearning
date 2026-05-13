const fs = require('fs');

let html = fs.readFileSync('c:\\Users\\Huawei\\.gemini\\antigravity\\scratch\\ghn-portal\\dien-gia.html', 'utf8');

// Replace CSS
const oldCss = `.speaker-card-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 48px 56px;
      max-width: 960px;
      margin: 0 auto;
    }

    .spk-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: hidden;
      background: #fff;
      border: 1px solid #e0ddd7;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
      border-radius: 14px;
      transition: transform 260ms ease, box-shadow 260ms ease;
      cursor: pointer;
    }

    .spk-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.10);
    }

    .spk-card-image {
      position: relative;
      width: 100%;
      height: 349px;
      background: #f0ede8;
      display: grid;
      place-items: center;
    }

    .spk-avatar {
      width: 96px;
      height: 96px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--orange);
      border: 4px solid #fff;
      border-radius: 9999px;
      color: #fff;
      font-family: Montserrat, sans-serif;
      font-size: 28px;
      font-weight: 400;
      line-height: 42px;
      text-align: center;
    }

    .spk-card-body {
      width: 100%;
      padding: 30px 20px;
    }

    .spk-card-body h3 {
      color: #333;
      font-family: Montserrat, sans-serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: -0.325px;
      text-transform: uppercase;
      margin: 0 0 12px;
    }

    .spk-card-body p {
      margin: 0;
      color: #666;
      font-family: "Be Vietnam Pro", sans-serif;
      font-size: 15px;
      font-weight: 400;
      line-height: 18px;
    }`;

const newCss = `.speaker-grid-new {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .spk-card-new {
      display: flex;
      flex-direction: column;
      background: #FFFFFF;
      box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.05), 0px 8px 10px -6px rgba(0, 0, 0, 0.02);
      border-radius: 32px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 260ms ease, box-shadow 260ms ease;
      border: 2px solid;
    }

    .spk-card-new:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.10);
    }

    .spk-img-wrap {
      position: relative;
      width: 100%;
      aspect-ratio: 284 / 177.5;
      background-color: #f1f5f9;
      background-size: cover;
      background-position: center;
    }

    .spk-gradient {
      position: absolute;
      inset: 0;
      opacity: 0.5;
      transition: opacity 260ms ease;
    }

    .spk-card-new:hover .spk-gradient {
      opacity: 0.8;
    }

    .spk-info-new {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex-grow: 1;
    }

    .spk-info-new h3 {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      margin: 0;
      text-transform: uppercase;
    }

    .spk-info-new p {
      font-family: 'Quicksand', 'Be Vietnam Pro', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: 0.55px;
      text-transform: uppercase;
      color: #3F4852;
      margin: 0;
    }`;

// Replace media queries
html = html.replace('.speaker-card-grid {\n        gap: 32px;\n      }', '.speaker-grid-new {\n        grid-template-columns: repeat(3, 1fr);\n        gap: 24px;\n      }');
html = html.replace('.speaker-card-grid {\n        grid-template-columns: 1fr;\n        gap: 28px;\n      }', '.speaker-grid-new {\n        grid-template-columns: 1fr;\n        gap: 24px;\n      }');

if (html.includes(oldCss)) {
  html = html.replace(oldCss, newCss);
} else {
  console.log("Could not find oldCss exactly. Trying regex...");
  html = html.replace(/\.speaker-card-grid \{[\s\S]*?\.spk-card-body p \{[\s\S]*?\}/, newCss);
}

// The HTML block to replace
const oldHtmlMatch = html.match(/<div class="speaker-grid" style="display: grid; grid-template-columns: repeat\(2, 1fr\); gap: 32px; max-width: 900px; margin: 0 auto;">[\s\S]*?<\/div>\s*<\/section>/);

const newHtml = `<div class="speaker-grid-new">
        <!-- Row 1 -->
        <article class="spk-card-new" style="border-color: rgba(0, 160, 250, 0.3);" data-speaker="luong-dung-nhan">
          <div class="spk-img-wrap" style="background-image: url('luong-dung-nhan.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(0, 160, 250, 0.2) 0%, rgba(0, 160, 250, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #00A0FA;">LƯƠNG DŨNG NHÂN</h3>
            <p>GIÁM ĐỐC ĐÀO TẠO HỆ THỐNG GIÁO DỤC ATY</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(248, 178, 0, 0.3);" data-speaker="hoang-giang">
          <div class="spk-img-wrap" style="background-image: url('hoang-giang.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(248, 178, 0, 0.2) 0%, rgba(248, 178, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #F8B200;">HOÀNG GIANG</h3>
            <p>HEAD OF C2C</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(255, 82, 0, 0.3);" data-speaker="do-dinh-thuong">
          <div class="spk-img-wrap" style="background-image: url('do-dinh-thuong.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(255, 82, 0, 0.2) 0%, rgba(255, 82, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #FF5200;">ĐỖ ĐÌNH THƯƠNG</h3>
            <p>CS C2C MANAGER</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(0, 160, 250, 0.3);" data-speaker="pham-tu-thu">
          <div class="spk-img-wrap" style="background-image: url('pham-tu-thu.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(0, 160, 250, 0.2) 0%, rgba(0, 160, 250, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #00A0FA;">PHẠM TỪ THỨ</h3>
            <p>PERFORMANCE MARKETING TEAM LEADER</p>
          </div>
        </article>

        <!-- Row 2 -->
        <article class="spk-card-new" style="border-color: rgba(248, 178, 0, 0.3);" data-speaker="nguyen-lam-hoang-yen">
          <div class="spk-img-wrap" style="background-image: url('nguyen-lam-hoang-yen.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(248, 178, 0, 0.2) 0%, rgba(248, 178, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #F8B200;">NGUYỄN LÂM HOÀNG YẾN</h3>
            <p>CORE AI &amp; DATA PLATFORM DIRECTOR</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(255, 82, 0, 0.3);" data-speaker="pham-hoang-long">
          <div class="spk-img-wrap" style="background-image: url('pham-hoang-long.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(255, 82, 0, 0.2) 0%, rgba(255, 82, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #FF5200;">PHẠM HOÀNG LONG</h3>
            <p>MANAGING DIRECTOR TẠI ATTIVO INTERNATIONAL CO.,LTD</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(0, 160, 250, 0.3);" data-speaker="thom-tran">
          <div class="spk-img-wrap" style="background-image: url('thom-tran.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(0, 160, 250, 0.2) 0%, rgba(0, 160, 250, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #00A0FA;">THƠM TRẦN</h3>
            <p>FOUNDER &amp; CEO TẠI KHƠII</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(248, 178, 0, 0.3);" data-speaker="tran-the-trung">
          <div class="spk-img-wrap" style="background-image: url('tran-the-trung.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(248, 178, 0, 0.2) 0%, rgba(248, 178, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #F8B200;">TRẦN THẾ TRUNG</h3>
            <p>MANAGEMENT BOARD TẠI DIGIBIRD</p>
          </div>
        </article>

        <!-- Row 3 -->
        <article class="spk-card-new" style="border-color: rgba(255, 82, 0, 0.3);" data-speaker="giap-duc-thang">
          <div class="spk-img-wrap" style="background-image: url('giap-duc-thang.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(255, 82, 0, 0.2) 0%, rgba(255, 82, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #FF5200;">GIÁP ĐỨC THẮNG</h3>
            <p>ĐẠI SỨ N8N VIỆT NAM &amp; CO-FOUNDER EPION</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(0, 160, 250, 0.3);" data-speaker="nguyen-minh-trung">
          <div class="spk-img-wrap" style="background-image: url('nguyen-minh-trung.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(0, 160, 250, 0.2) 0%, rgba(0, 160, 250, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #00A0FA;">NGUYỄN MINH TRUNG</h3>
            <p>CỰU PHÓ TỔNG GIÁM ĐỐC KHỐI NHÂN LỰC TẠI TẬP ĐOÀN XÂY DỰNG HOÀ BÌNH</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(248, 178, 0, 0.3);" data-speaker="nhi-nguyen">
          <div class="spk-img-wrap" style="background-image: url('nhi-nguyen.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(248, 178, 0, 0.2) 0%, rgba(248, 178, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #F8B200;">NHI NGUYỄN</h3>
            <p>GBS - HEAD OF BRAND PARTNERSHIP, CPG, TIKTOK VIET NAM</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(255, 82, 0, 0.3);" data-speaker="le-thanh-binh">
          <div class="spk-img-wrap" style="background-image: url('le-thanh-binh.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(255, 82, 0, 0.2) 0%, rgba(255, 82, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #FF5200;">LÊ THANH BÍNH</h3>
            <p>TECHNICAL PROGRAM MANAGER TẠI GOOGLE IRELAND</p>
          </div>
        </article>

        <!-- Row 4 -->
        <article class="spk-card-new" style="border-color: rgba(0, 160, 250, 0.3);" data-speaker="kim-le-huy">
          <div class="spk-img-wrap" style="background-image: url('kim-le-huy.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(0, 160, 250, 0.2) 0%, rgba(0, 160, 250, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #00A0FA;">KIM LÊ HUY</h3>
            <p>PHÓ CHỦ TỊCH NGÀNH HÀNG TIÊU DÙNG TỔNG GIÁM ĐỐC DKSH VIỆT NAM</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(248, 178, 0, 0.3);" data-speaker="nguyen-hoang-nam">
          <div class="spk-img-wrap" style="background-image: url('nguyen-hoang-nam.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(248, 178, 0, 0.2) 0%, rgba(248, 178, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #F8B200;">NGUYỄN HOÀNG NAM</h3>
            <p></p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(255, 82, 0, 0.3);" data-speaker="ngan-tran">
          <div class="spk-img-wrap" style="background-image: url('ngan-tran.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(255, 82, 0, 0.2) 0%, rgba(255, 82, 0, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #FF5200;">NGÂN TRẦN</h3>
            <p>CEO/FOUNDER, THE NEW LEADERS</p>
          </div>
        </article>
        <article class="spk-card-new" style="border-color: rgba(0, 160, 250, 0.3);" data-speaker="cao-tuan-minh">
          <div class="spk-img-wrap" style="background-image: url('cao-tuan-minh.png');">
            <div class="spk-gradient" style="background: linear-gradient(0deg, rgba(0, 160, 250, 0.2) 0%, rgba(0, 160, 250, 0) 100%);"></div>
          </div>
          <div class="spk-info-new">
            <h3 style="color: #00A0FA;">CAO TUẤN MINH</h3>
            <p>SENIOR MANGER, SALESFORCE RECRUITMENT &amp; DEVELOPMENT</p>
          </div>
        </article>
      </div>
    </section>`;

if (oldHtmlMatch) {
  html = html.replace(oldHtmlMatch[0], newHtml);
  
  // Update javascript for opening modal
  html = html.replace('document.querySelectorAll(".spk-card[data-speaker]")', 'document.querySelectorAll(".spk-card-new[data-speaker]")');
  
  fs.writeFileSync('c:\\Users\\Huawei\\.gemini\\antigravity\\scratch\\ghn-portal\\dien-gia.html', html);
  console.log("Replaced HTML and CSS successfully.");
} else {
  console.log("Could not find the HTML block to replace.");
}
