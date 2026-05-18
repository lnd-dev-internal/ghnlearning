const fs = require('fs');

const workshops = [
  { title: 'TASK MANAGEMENT x ANTIGRAVITY: CÔNG NGHỆ DẪN DẮT - HIỆU SUẤT "BAY" CAO', speaker: 'Lương Dũng Nhân', date: '16/04/2026' },
  { title: 'MÁY VẬN HÀNH, NGƯỜI KIẾN TẠO: NÂNG TẦM CÔNG NGHỆ, LÀM CHỦ AI', speaker: 'Hoàng Giang, Đỗ Đình Thương, Phạm Từ Thứ', date: '20/03/2026' },
  { title: 'AI IN SHOW - PRODUCT IN FLOW', speaker: 'Nguyễn Lâm Hoàng Yên', date: '31/01/2026' },
  { title: 'LEADERSHIP IN FLUX - LÃNH ĐẠO TRONG DÒNG CHẢY BIẾN ĐỘNG', speaker: 'Thơm Trần, Phạm Hoàng Long, Trần Thế Trung', date: '16/04/2026' },
  { title: 'HIỆU QUẢ BẤT NGỜ CÙNG N8N', speaker: 'Giáp Đức Thắng', date: '19/11/2025' },
  { title: 'ĐI GIỮA RANH GIỚI - GIỮ VẸN NGHĨA TÌNH', speaker: 'Nguyễn Minh Trung', date: '01/10/2025' },
  { title: 'GIỮ ĐƯỢC TÂM - MỚI VƯƠN ĐƯỢC TẦM', speaker: 'Nhi Nguyễn', date: '22/08/2025' },
  { title: 'VIBE CODING CÙNG GEMINI', speaker: 'Lê Thanh Bính', date: '11/07/2025' },
  { title: 'GẶP SẾP HUY: HỎI ĐI - ĐỪNG CÓ SUY', speaker: 'Kim Lê Huy', date: '26/06/2025' },
  { title: 'LEVEL UP! - BỨT PHÁ HIỆU SUẤT CÁ NHÂN & ĐỘI NGŨ CÙNG PHƯƠNG PHÁP 3UP', speaker: 'Nguyễn Hoàng Nam', date: '23/05/2025' },
  { title: 'THÔNG MINH CẢM XÚC TRONG GIAO TIẾP - BIẾN TIÊU CỰC THÀNH TÍCH CỰC', speaker: 'Ngân Trần', date: '25/04/2025' },
  { title: 'TOÀN DÂN AI: KHÔNG XÀI AI - AI XÀI MÌNH', speaker: 'Hoàng Giang', date: '28/03/2025' },
  { title: 'CHO VÀ NHẬN PHẢN HỒI HIỆU QUẢ', speaker: 'Cao Tuấn Minh', date: '27/02/2025' },
  { title: 'AI EMPOWERMENT: DẪN LỐI TƯƠNG LAI - BỨT PHÁ THÀNH CÔNG', speaker: 'Nguyễn Lâm Hoàng Yên', date: '17/01/2025' },
];

const cards = workshops.map(w => `
        <article class="ws-card">
          <div class="ws-thumb">
            <div class="ws-play"><svg width="7" height="9" viewBox="0 0 7 9" fill="none"><path d="M0 0L7 4.5L0 9V0Z" fill="#0C181D"/></svg></div>
          </div>
          <div class="ws-info">
            <h4>${w.title}</h4>
            <p class="ws-speaker">Diễn giả: <strong>${w.speaker}</strong></p>
            <span class="ws-date">${w.date}</span>
          </div>
          <a href="#" class="ws-btn">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1C3.24 1 1 3.24 1 6s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1 7.5v-5l4 2.5-4 2.5z" fill="#fff"/></svg>
            Xem lại
          </a>
        </article>`).join('');

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Workshop - Leaders Talk - GHN Learning</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Montserrat:wght@400;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root{--orange:#FF5200;--blue:#009BE0;--yellow:#F8B201;--ink:#281812;--brown:#5C4037;--cream:#FFF8F6;--slate:#475569;--line:#E5F1F7}
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Be Vietnam Pro',sans-serif;background:#fff;color:var(--ink);overflow-x:hidden}
    a{text-decoration:none;color:inherit}

    /* ===== TOPBAR ===== */
    .topbar{position:sticky;top:0;z-index:100;height:64px;background:#fff;border-bottom:1px solid var(--line);box-shadow:0 1px 2px rgba(0,0,0,.05)}
    .topbar-inner{max-width:1280px;margin:0 auto;height:100%;display:flex;align-items:center;gap:0;padding:0 32px}
    .brand{font-family:Montserrat,sans-serif;font-size:24px;font-weight:900;color:var(--orange);white-space:nowrap;margin-right:32px}
    .nav{display:flex;align-items:center;gap:24px;flex:1}
    .nav a{font-size:16px;font-weight:500;color:var(--slate);white-space:nowrap;padding-bottom:4px;border-bottom:2px solid transparent;transition:color .15s,border-color .15s}
    .nav a:hover{color:var(--orange)}
    .nav a.active{color:var(--orange);font-weight:600;border-color:var(--orange)}
    .search-wrap{position:relative;flex-shrink:0}
    .search-wrap input{width:221px;height:42px;background:#F3F3F6;border:1px solid #E5BEB2;border-radius:8px;padding:10px 16px 10px 40px;font:400 16px/20px 'Be Vietnam Pro',sans-serif;color:#6B7280;outline:none}
    .search-wrap::before{content:'';position:absolute;left:12px;top:50%;transform:translateY(-50%);width:18px;height:18px;background:rgba(92,64,55,.6);-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z' stroke='currentColor' stroke-width='2' fill='none'/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z' stroke='currentColor' stroke-width='2' fill='none'/%3E%3C/svg%3E") center/contain no-repeat}

    /* ===== HERO ===== */
    .hero{background:var(--cream);padding:96px 0;display:grid;grid-template-columns:1fr 1fr;gap:54px;min-height:678px;padding-left:max(30px,calc((100vw - 1194px)/2 + 30px));padding-right:max(30px,calc((100vw - 1194px)/2 + 30px))}
    .hero-copy{align-self:center;max-width:572px}
    .hot-badge{display:inline-flex;align-items:center;padding:8px 18px;background:rgba(255,82,0,.1);border-radius:9999px;font-family:Montserrat,sans-serif;font-size:15px;color:var(--orange);transform:rotate(-2deg);margin-bottom:24px}
    .hero h1{font-family:Montserrat,sans-serif;font-size:clamp(36px,4.4vw,72px);font-weight:800;line-height:1.15;letter-spacing:-1.28px;text-transform:uppercase;color:var(--ink);margin-bottom:24px}
    .hero h1 span{color:var(--orange)}
    .hero-copy p{font-size:14px;line-height:32px;color:var(--brown);margin-bottom:32px;max-width:462px}
    .hero-actions{display:flex;gap:24px;flex-wrap:wrap}
    .btn-primary{display:inline-flex;align-items:center;justify-content:center;min-width:174px;height:60px;padding:0 32px;background:var(--orange);color:#fff;border-radius:9999px;font-family:Montserrat,sans-serif;font-size:16px;box-shadow:0 10px 15px -3px rgba(255,82,0,.2),0 4px 6px -4px rgba(255,82,0,.2);transition:transform .15s}
    .btn-primary:hover{transform:translateY(-2px)}
    .btn-outline{display:inline-flex;align-items:center;justify-content:center;min-width:174px;height:60px;padding:0 32px;border:2px solid var(--orange);color:var(--orange);border-radius:9999px;font-family:Montserrat,sans-serif;font-size:16px;transition:transform .15s}
    .btn-outline:hover{transform:translateY(-2px)}
    .hero-visual{position:relative;align-self:center}
    .speaker-box{height:600px;border-radius:32px;background:linear-gradient(135deg,#171717,#0e0e0e 54%,#1f1f1f);box-shadow:0 25px 50px -12px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);font-size:14px;font-style:italic}
    .badge-float{position:absolute;display:flex;align-items:center;gap:16px;padding:22px 24px;background:#fff;border-radius:16px;box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)}
    .badge-float.top{right:-14px;top:-11px;transform:rotate(3deg)}
    .badge-float.bottom{left:-24px;bottom:-46px;transform:rotate(-2deg)}
    .badge-icon{width:48px;height:48px;border-radius:9999px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700}
    .badge-float.top .badge-icon{background:rgba(255,82,0,.1);color:var(--orange)}
    .badge-float.bottom .badge-icon{background:rgba(0,155,224,.1);color:var(--blue)}
    .badge-num{font-family:Montserrat,sans-serif;font-size:40px;font-weight:400;line-height:28px;color:#FF5201;text-shadow:0 4px 4px rgba(0,0,0,.25);display:block}
    .badge-label{font-size:12px;font-weight:700;color:var(--brown);display:block;margin-top:6px}

    /* ===== BENEFITS ===== */
    .benefits{background:var(--cream);padding:72px max(32px,calc((100vw - 1175px)/2))}
    .section-head{text-align:center;margin-bottom:64px}
    .section-head h2{font-family:Montserrat,sans-serif;font-size:clamp(32px,4vw,48px);font-weight:700;color:var(--ink)}
    .section-head p{font-size:20px;line-height:24px;color:var(--brown);margin-top:16px}
    .benefit-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
    .benefit-card{background:#fff;border-top:4px solid var(--c);border-radius:16px;padding:32px;min-height:288px;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)}
    .b-icon{width:56px;height:56px;border-radius:12px;background:color-mix(in srgb,var(--c) 10%,white);display:flex;align-items:center;justify-content:center;font-size:24px;color:var(--c);margin-bottom:24px}
    .benefit-card h3{font-family:Montserrat,sans-serif;font-size:18px;font-weight:400;color:var(--ink);margin-bottom:12px}
    .benefit-card p{font-size:14px;line-height:20px;color:var(--brown)}

    /* ===== STRIP NAV ===== */
    .strip{background:#00A0FA;display:flex;align-items:center;gap:32px;padding:0 max(32px,calc((100vw - 1193px)/2));height:63px}
    .strip a{font-size:15px;font-weight:600;color:rgba(204,236,254,.9);padding-bottom:4px;border-bottom:2px solid transparent;white-space:nowrap;transition:color .15s,border-color .15s}
    .strip a:hover{color:#fff}
    .strip a.active{color:#fff;font-size:16px;font-weight:700;border-color:#fff}

    /* ===== WORKSHOP LIST ===== */
    .ws-section{background:#F9F9FC;padding:32px max(32px,calc((100vw - 1193px)/2)) 96px}
    .ws-list{display:flex;flex-direction:column;gap:16px}
    .ws-card{display:flex;align-items:center;height:101px;background:#fff;border:1px solid rgba(189,200,208,.5);border-radius:14px;overflow:hidden;transition:transform .2s,box-shadow .2s}
    .ws-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08)}
    .ws-thumb{flex-shrink:0;width:88px;height:66px;background:var(--blue);border-radius:8px;margin:0 0 0 17px;display:flex;align-items:center;justify-content:center}
    .ws-play{width:24px;height:24px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 6px rgba(0,0,0,.1)}
    .ws-info{flex:1;display:flex;flex-direction:column;gap:4px;padding:0 16px;min-width:0}
    .ws-info h4{font-family:Montserrat,sans-serif;font-size:14px;font-weight:700;line-height:20px;color:#171C1F;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .ws-speaker{font-size:12px;line-height:16px;color:#3E484F}
    .ws-speaker strong{color:var(--orange);font-weight:400}
    .ws-date{font-size:11px;line-height:16px;color:#6E7880}
    .ws-btn{flex-shrink:0;display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 16px;margin-right:24px;background:var(--yellow);border-radius:9999px;color:#fff;font-family:Montserrat,sans-serif;font-size:14px;font-weight:700;white-space:nowrap;transition:transform .15s}
    .ws-btn:hover{transform:translateY(-1px)}
    .ws-btn svg{flex-shrink:0}

    /* ===== FOOTER ===== */
    footer{min-height:169px;display:flex;align-items:center;background:#F8FAFC;border-top:1px solid #E2E8F0;padding:0 66px}
    .footer-title{font-family:Montserrat,sans-serif;font-size:18px;font-weight:700;color:#0F172A;margin-bottom:14px}
    .footer-info{font-size:12px;line-height:20px;color:#64748B}

    /* ===== TRANSITIONS ===== */
    .slide-out-left{animation:soL .3s forwards ease-in-out}
    .slide-out-right{animation:soR .3s forwards ease-in-out}
    .slide-in-left{animation:siL .3s forwards ease-in-out}
    .slide-in-right{animation:siR .3s forwards ease-in-out}
    .fade-in{animation:fi .3s forwards ease-in-out}
    @keyframes fi{from{opacity:0}to{opacity:1}}
    @keyframes soL{from{transform:translateX(0);opacity:1}to{transform:translateX(-30px);opacity:0}}
    @keyframes soR{from{transform:translateX(0);opacity:1}to{transform:translateX(30px);opacity:0}}
    @keyframes siL{from{transform:translateX(-30px);opacity:0}to{transform:translateX(0);opacity:1}}
    @keyframes siR{from{transform:translateX(30px);opacity:0}to{transform:translateX(0);opacity:1}}

    @media(max-width:1100px){.hero{grid-template-columns:1fr;padding:64px 32px}.benefit-grid{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:640px){.hero{padding:48px 20px}.benefit-grid{grid-template-columns:1fr}.ws-card{height:auto;flex-direction:column;align-items:stretch}.ws-thumb{width:100%;height:100px;margin:0;border-radius:14px 14px 0 0}.ws-info{padding:16px}.ws-btn{margin:0 16px 16px}}
  </style>
</head>
<body>

  <!-- TOPBAR -->
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="index.html">GHN Learning</a>
      <nav class="nav">
        <a href="index.html">Trang chủ</a>
        <a href="index.html#office">Khối Văn Phòng</a>
        <a href="index.html#market">Khối Thị Trường</a>
        <a href="index.html#heavy">Khối Hàng Nặng</a>
        <a class="active" href="leaders-talk.html">Leaders Talk</a>
      </nav>
      <div class="search-wrap">
        <input type="search" placeholder="Tìm kiếm khóa học...">
      </div>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero">
      <div class="hero-copy">
        <div class="hot-badge">SỰ KIỆN HOT NHẤT 2026</div>
        <h1>Dẫn lối tương lai<br><span>Bức phá thành công</span></h1>
        <p>Leaders Talk không dành cho người chỉ muốn ngồi nghe cho hết giờ. Đây là nơi những Business Leader thật bước lên sân khấu để bóc tách các vấn đề đau đầu nhất trong công việc: đội ngũ không chạy, KPI không đạt, vận hành rối, quyết định sai và áp lực chồng áp lực. Không slide màu mè, không lý thuyết sách vở, chỉ có câu chuyện thật, góc nhìn thật và những cuộc tranh luận thẳng đến tận gốc vấn đề.</p>
        <div class="hero-actions">
          <a class="btn-primary" href="#">Đăng ký ngay</a>
          <a class="btn-outline" href="#benefits">Xem Agenda</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="speaker-box">Hình ảnh diễn giả</div>
        <div class="badge-float top">
          <div class="badge-icon">♟</div>
          <div><span class="badge-num">20+</span><span class="badge-label">Diễn giả</span></div>
        </div>
        <div class="badge-float bottom">
          <div class="badge-icon">✺</div>
          <div><span class="badge-num">500+</span><span class="badge-label">Học viên/Workshop</span></div>
        </div>
      </div>
    </section>

    <!-- BENEFITS -->
    <section class="benefits" id="benefits">
      <div class="section-head">
        <h2>Bạn sẽ nhận được gì?</h2>
        <p>Mỗi workshop đều được thiết kế để mang lại giá trị thực tế nhất cho công việc hàng ngày của bạn.</p>
      </div>
      <div class="benefit-grid">
        <div class="benefit-card" style="--c:#FF5200"><div class="b-icon">♙</div><h3>Góc nhìn thực chiến</h3><p>Không phải lý thuyết. Bạn được nghe cách người thật đang xử lý vấn đề thật – thứ bạn có thể đem về áp dụng ngay ngày mai.</p></div>
        <div class="benefit-card" style="--c:#009BE0"><div class="b-icon">✣</div><h3>Đào sâu pain point</h3><p>Những vấn đề "đau nhưng ít ai nói" sẽ được mang lên bàn: đội ngũ, KPI, vận hành, áp lực… và mổ xẻ đến tận gốc.</p></div>
        <div class="benefit-card" style="--c:#F8B200"><div class="b-icon">♢</div><h3>Tranh luận trực diện</h3><p>Không chỉ nghe – bạn được hỏi thẳng, phản biện, challenge diễn giả để tìm ra góc nhìn phù hợp nhất với mình.</p></div>
        <div class="benefit-card" style="--c:#006FAD"><div class="b-icon">▣</div><h3>Giải pháp thực tế</h3><p>Rời buổi không chỉ có insight, mà có luôn cách làm cụ thể để xử lý bài toán bạn đang mắc kẹt.</p></div>
      </div>
    </section>

    <!-- STRIP NAV -->
    <nav class="strip" aria-label="Leaders Talk sections">
      <a href="leaders-talk.html">Tổng quan</a>
      <a class="active" href="workshop.html">Workshop</a>
      <a href="dien-gia.html">Diễn giả</a>
    </nav>

    <!-- WORKSHOP LIST -->
    <section class="ws-section" id="workshops">
      <div class="ws-list">
${cards}
      </div>
    </section>
  </main>

  <footer>
    <div>
      <p class="footer-title">Phòng Học tập và Phát triển</p>
      <p class="footer-info">📍 Trụ sở: Rivera Park, 7/28 Thành Thái, Phường Diên Hồng, TP. HCM<br>☎️ Nguyễn Ngọc Mai Trâm (Training Manager) - 090 272 1104<br>📩 Email: tramnnm@ghn.vn</p>
    </div>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded',()=>{
      const t=sessionStorage.getItem('pageTransition');
      if(t==='forward')document.body.classList.add('slide-in-right');
      else if(t==='backward')document.body.classList.add('slide-in-left');
      else document.body.classList.add('fade-in');
      sessionStorage.removeItem('pageTransition');
      const pages=['index.html','leaders-talk.html','workshop.html','dien-gia.html'];
      document.querySelectorAll('a[href]').forEach(link=>{
        link.addEventListener('click',e=>{
          const href=link.getAttribute('href');
          if(!href||href.startsWith('#')||href.startsWith('http')||href.startsWith('mailto'))return;
          e.preventDefault();
          let cur=window.location.pathname.split('/').pop()||'index.html';
          const tgt=href.split('/').pop();
          const ci=pages.indexOf(cur),ti=pages.indexOf(tgt);
          const dir=(ci!==-1&&ti!==-1&&ti>ci)?'forward':'backward';
          sessionStorage.setItem('pageTransition',dir);
          document.body.classList.add(dir==='forward'?'slide-out-left':'slide-out-right');
          setTimeout(()=>window.location.href=href,250);
        });
      });
    });
  </script>
</body>
</html>`;

fs.writeFileSync('/Users/nguyenthihuynhnhu/Desktop/LandingPage-Trang ch\u1ee7/workshop.html', html, 'utf8');
console.log('Done! Lines: ' + html.split('\n').length);
