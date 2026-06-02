'use client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workshop - Leaders Talk - GHN Learning',
};

export default function WorkshopPage() {
  return (
    <>
      <style>{`
:root{--orange:#ff5200;--blue:#009be0;--blue-2:#006fad;--yellow:#f8b200;--ink:#281812;--brown:#5c4037;--cream:#fff8f6;--soft-blue:#f0f8ff;--soft-yellow:#fffbe6;--line:#e5f1f7;--slate:#475569;--page:clamp(24px,4vw,64px);}
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;background:#f9f9fc;color:var(--ink);font-family:"Be Vietnam Pro",Arial,sans-serif;line-height:1.6;}
a{color:inherit;text-decoration:none;}
.navbar{position:sticky;top:0;z-index:100;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 32px;width:100%;height:64px;background:#fff;border-bottom:1px solid #E5F1F7;box-shadow:0 1px 2px rgba(0,0,0,.05);}
.logo{font-family:'Montserrat',sans-serif;font-weight:900;font-size:24px;line-height:32px;color:#FF5200;letter-spacing:-0.5px;text-decoration:none;}
.logo span{color:#009BE0;}
.nav-links{display:flex;flex-direction:row;align-items:center;gap:24px;}
.nav-link{font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:16px;line-height:24px;color:#475569;text-decoration:none;cursor:pointer;}
.nav-link.active{font-weight:600;color:#FF5200;border-bottom:2px solid #FF5200;padding-bottom:4px;}
.search-box{display:flex;align-items:center;position:relative;}
.search-box input{width:221px;height:42px;background:#F3F3F6;border:1px solid #E5BEB2;border-radius:8px;padding:10px 16px 10px 40px;font-family:'Be Vietnam Pro',sans-serif;font-size:16px;color:#6B7280;outline:none;}
.search-box input::placeholder{color:#6B7280;}
.nav-item{position:relative;display:flex;align-items:center;}.nav-trigger{display:flex;align-items:center;gap:4px;}.nav-caret{width:10px;height:10px;transition:transform .2s;}.nav-item:hover .nav-caret,.nav-item:focus-within .nav-caret{transform:rotate(180deg);}.nav-menu{display:none;position:absolute;top:100%;left:0;background:#fff;border:1px solid #e5f1f7;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.1);padding:8px 0;min-width:200px;z-index:200;}.nav-item:hover .nav-menu,.nav-item:focus-within .nav-menu{display:block;}.nav-menu a{display:block;padding:8px 16px;font-size:14px;color:#475569;white-space:nowrap;}.nav-menu a:hover{background:#f0f8ff;color:#ff5200;}
.section{padding:72px var(--page);}
.hero{display:grid;grid-template-columns:minmax(0,0.92fr) minmax(420px,1.08fr);gap:54px;min-height:678px;padding-top:44px;padding-bottom:54px;background:var(--cream);}
.hero-copy{align-self:center;max-width:570px;}
.hot-badge{display:inline-flex;align-items:center;min-height:42px;padding:8px 18px;margin-bottom:22px;color:var(--orange);background:rgba(255,82,0,0.1);border-radius:9999px;font-family:Montserrat,sans-serif;font-size:15px;transform:rotate(-2deg);}
h1,h2,h3,h4{margin:0;font-family:Montserrat,sans-serif;}
h1{max-width:590px;color:var(--ink);font-size:clamp(40px,4.4vw,72px);font-weight:800;line-height:1.12;letter-spacing:-1.28px;text-transform:uppercase;}
h1 .accent{color:var(--orange);}
.hero-copy p{max-width:520px;margin:26px 0 32px;color:var(--brown);font-size:14px;line-height:32px;}
.hero-actions{display:flex;gap:24px;flex-wrap:wrap;}
.btn{display:inline-flex;align-items:center;justify-content:center;min-width:174px;min-height:60px;padding:16px 32px;border-radius:9999px;font:400 16px/24px Montserrat,sans-serif;transition:transform 160ms ease,box-shadow 160ms ease;}
.btn:hover{transform:translateY(-2px);}
.btn-primary{color:#fff;background:var(--orange);box-shadow:0 10px 15px -3px rgba(255,82,0,0.2),0 4px 6px -4px rgba(255,82,0,0.2);}
.hero-visual{position:relative;align-self:center;min-height:600px;}
.speaker-hero{height:600px;overflow:hidden;border-radius:32px;background:radial-gradient(circle at 50% 34%,rgba(255,255,255,0.18),transparent 26%),linear-gradient(135deg,#171717,#0e0e0e 54%,#1f1f1f);box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);display:grid;place-items:center;color:rgba(255,255,255,0.7);text-align:center;}
.speaker-figure{width:min(82%,430px);aspect-ratio:0.72;border-radius:42% 42% 12px 12px;background:radial-gradient(circle at 50% 19%,#ffd7bf 0 11%,transparent 11.5%),linear-gradient(90deg,transparent 0 30%,#214f86 30% 70%,transparent 70%),linear-gradient(#111,#111);position:relative;}
.floating{position:absolute;z-index:2;display:flex;align-items:center;gap:16px;padding:22px 24px;background:#fff;border-radius:16px;box-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 8px 10px -6px rgba(0,0,0,0.1);}
.floating.top{right:-14px;top:-11px;transform:rotate(3deg);}
.floating.bottom{left:-24px;bottom:-46px;transform:rotate(-2deg);}
.floating-icon{width:48px;height:48px;display:grid;place-items:center;border-radius:9999px;font-weight:700;}
.floating.top .floating-icon{color:var(--orange);background:rgba(255,82,0,0.1);}
.floating.bottom .floating-icon{color:var(--blue);background:rgba(0,155,224,0.1);}
.floating strong{display:block;color:#ff5201;font-family:Montserrat,sans-serif;font-size:40px;font-weight:400;line-height:28px;text-shadow:0 4px 4px rgba(0,0,0,0.25);}
.floating span{display:block;margin-top:6px;color:var(--brown);font-size:12px;font-weight:700;line-height:16px;}
.benefits{background:var(--cream);}
.section-heading{max-width:760px;margin:0 auto 64px;text-align:center;}
.section-heading h2{color:var(--ink);font-size:clamp(36px,3.75vw,48px);font-weight:700;line-height:1.2;}
.section-heading p{margin:16px auto 0;color:var(--brown);font-size:20px;line-height:24px;}
.benefit-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px;}
.benefit-card{min-height:288px;padding:32px;background:#fff;border-top:4px solid var(--card-color);border-radius:16px;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1);}
.icon-box{width:56px;height:56px;display:grid;place-items:center;margin-bottom:24px;color:var(--card-color);background:color-mix(in srgb,var(--card-color) 10%,white);border-radius:12px;font-size:24px;}
.benefit-card h3{color:var(--ink);font-size:18px;font-weight:400;line-height:28px;margin-bottom:12px;}
.benefit-card p{margin:0;color:var(--brown);font-size:14px;line-height:20px;}
.strip{display:flex;align-items:center;gap:32px;min-height:63px;padding:16px var(--page);background:#00a0fa;color:rgba(255,255,255,0.8);font-size:15px;font-weight:600;}
.strip a{padding-bottom:4px;border-bottom:2px solid transparent;transition:color 160ms ease,border-color 160ms ease;}
.strip a:hover{color:#fff;}
.strip a.active{color:#fff;font-size:16px;font-weight:700;border-bottom:2px solid #fff;}
.workshop-section{padding:64px var(--page);background:#f9f9fc;}
.workshop-container{max-width:1200px;margin:0 auto;display:flex;flex-direction:column;gap:16px;}
.workshop-card{background:#FFFFFF;border:1px solid rgba(189,200,208,0.5);border-radius:14px;padding:16px;display:flex;align-items:center;gap:16px;transition:transform 200ms ease;}
.workshop-card:hover{transform:translateX(8px);box-shadow:0 4px 12px rgba(0,0,0,0.05);}
.card-visual{width:88px;height:66px;background:var(--blue);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:24px;flex-shrink:0;}
.card-content{flex:1;}
.card-title{font-family:'Montserrat';font-weight:700;font-size:14px;color:#171C1F;margin-bottom:4px;text-transform:uppercase;}
.card-speaker{font-family:'Be Vietnam Pro';font-size:12px;color:#3E484F;margin-bottom:4px;}
.card-date{font-family:'Be Vietnam Pro';font-size:11px;color:#6E7880;}
.btn-view{width:130px;height:36px;background:var(--yellow);border-radius:9999px;display:flex;align-items:center;justify-content:center;gap:8px;color:#FFFFFF;font-family:'Montserrat';font-weight:700;font-size:16px;text-decoration:none;}
footer{min-height:164px;display:flex;align-items:center;justify-content:space-between;background:#f8fafc;border-top:1px solid #e2e8f0;padding:28px var(--page);}
.footer-right{color:#64748b;font-size:12px;line-height:16px;}
.footer-title{margin:0 0 14px;color:#0f172a;font-family:Montserrat,sans-serif;font-size:18px;font-weight:700;line-height:28px;}
.footer-info{margin:0;color:#64748b;font-size:12px;line-height:16px;}
@media(max-width:1100px){.hero{grid-template-columns:1fr;}.benefit-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.benefit-grid{grid-template-columns:repeat(2,1fr);}.floating{position:static;margin-top:16px;transform:none;}}
.search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:18px;height:18px;opacity:.6}
.mobile-header{display:none;}.drawer{display:none;}.drawer-overlay{display:none;}
@media(max-width:960px){
  html,body{min-width:0!important;width:100%!important;overflow-x:hidden!important;padding:0;}
  .navbar{display:none!important;}
  .mobile-header{display:flex!important;flex-direction:row;justify-content:space-between;align-items:center;padding:0px 16px;width:100%;height:64px;background:#FFFFFF;border-bottom:1px solid #E5F1F7;box-shadow:0px 4px 20px rgba(0,0,0,0.04);position:fixed;top:0;left:0;z-index:100;box-sizing:border-box;}
  .menu-btn{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8px;width:34px;height:28px;border-radius:4px;background:none;border:none;cursor:pointer;}
  .menu-icon{width:18px;height:12px;display:flex;flex-direction:column;justify-content:space-between;}
  .menu-icon span{width:100%;height:2px;background:#64748B;}
  .mobile-header .logo{font-size:18px;line-height:28px;color:#FF5200;text-decoration:none;}
  .search-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:8px;width:40px;height:40px;background:none;border:none;}
  .drawer-overlay{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:101;opacity:0;visibility:hidden;transition:opacity 0.3s ease;}
  .drawer-overlay.open{opacity:1;visibility:visible;}
  .drawer{display:flex!important;box-sizing:border-box;flex-direction:column;align-items:flex-start;position:fixed;width:280px;height:100vh;left:-280px;top:0px;background:#FFFFFF;border-right:1px solid #E5F1F7;z-index:102;transition:left 0.3s ease;overflow-y:auto;padding:16px 0;}
  .drawer.open{left:0;box-shadow:0px 20px 25px -5px rgba(0,0,0,0.1),0px 8px 10px -6px rgba(0,0,0,0.1);}
  .nav-item{display:flex;flex-direction:row;align-items:center;padding:12px 16px;gap:12px;width:100%;height:44px;text-decoration:none;box-sizing:border-box;}
  .nav-item.active{background:rgba(255,247,237,0.5);border-right:2px solid #FF5200;}
  .nav-item.active .nav-text{color:#FF5200;}
  .nav-item.active .nav-icon svg{fill:#FF5200;}
  .nav-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;}
  .nav-text{font-family:'Lexend';font-weight:500;font-size:14px;line-height:20px;color:#475569;}
  .sub-nav{display:flex;flex-direction:column;align-items:flex-start;padding:12px 16px 12px 48px;gap:12px;width:100%;box-sizing:border-box;}
  .sub-nav-item{font-family:'Lexend';font-weight:400;font-size:14px;line-height:20px;color:#475569;text-decoration:none;display:block;}
  .hero{grid-template-columns:1fr!important;min-height:auto!important;padding:32px 16px!important;}
  .hero-visual{display:none!important;}
  .hero-copy{max-width:100%!important;}
  .hero-actions .btn-primary{width:100%;}
  .benefit-grid{grid-template-columns:repeat(2,1fr)!important;gap:16px!important;}
  .benefit-card{min-height:auto!important;padding:20px!important;}
  .section{padding:40px 16px!important;}
  .workshop-card{flex-direction:column!important;align-items:flex-start!important;gap:12px!important;padding:14px!important;}
  .card-visual{width:100%!important;height:48px!important;border-radius:8px!important;}
  .card-content{width:100%!important;}
  .workshop-card .card-title{font-size:12px!important;line-height:16px!important;white-space:normal!important;overflow:visible!important;text-overflow:unset!important;height:auto!important;}
  .card-speaker,.card-date{font-size:11px!important;line-height:16px!important;}
  .btn-view{width:100%!important;height:32px!important;font-size:13px!important;margin-top:4px!important;}
  .workshop-container{padding:0 16px!important;gap:12px!important;}
  .workshop-section{padding:40px 0!important;}
}
      `}</style>

      <main>
        {/* Hero Section */}
        <section className="hero section" id="overview">
          <div className="hero-copy">
            <div className="hot-badge">SỰ KIỆN HOT NHẤT 2026</div>
            <h1>Học để hành<br /><span className="accent">Không phải để dành</span></h1>
            <p>Leaders Talk không dành cho người chỉ muốn ngồi nghe cho hết giờ. Đây là nơi những Business Leader thật bước lên sân khấu để bóc tách các vấn đề đau đầu nhất trong công việc: đội ngũ không chạy, KPI không đạt, vận hành rối, quyết định sai và áp lực chồng áp lực. Không slide màu mè, không lý thuyết sách vở, chỉ có câu chuyện thật, góc nhìn thật và những cuộc tranh luận thẳng đến tận gốc vấn đề.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://forms.gle/XMnH7BKRFpWgiNJ2A" target="_blank" rel="noopener noreferrer">Đăng ký ngay</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="speaker-hero">
              <div className="speaker-figure" aria-hidden="true"></div>
            </div>
            <div className="floating top">
              <div className="floating-icon">♟</div>
              <div><strong>20+</strong><span>Diễn giả</span></div>
            </div>
            <div className="floating bottom">
              <div className="floating-icon">✺</div>
              <div><strong>500+</strong><span>Học viên/Workshop</span></div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section benefits" id="benefits">
          <div className="section-heading">
            <h2>Bạn sẽ nhận được gì?</h2>
            <p>Mỗi workshop đều được thiết kế để mang lại giá trị thực tế nhất cho công việc hàng ngày của bạn.</p>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card" style={{'--card-color': '#ff5200'} as React.CSSProperties}>
              <div className="icon-box">♙</div>
              <h3>Góc nhìn thực chiến</h3>
              <p>Không phải lý thuyết. Bạn được nghe cách người thật đang xử lý vấn đề thật – thứ bạn có thể đem về áp dụng ngay ngày mai.</p>
            </article>
            <article className="benefit-card" style={{'--card-color': '#009be0'} as React.CSSProperties}>
              <div className="icon-box">✣</div>
              <h3>Đào sâu pain point</h3>
              <p>Những vấn đề &quot;đau nhưng ít ai nói&quot; sẽ được mang lên bàn: đội ngũ, KPI, vận hành, áp lực… và mổ xẻ đến tận gốc.</p>
            </article>
            <article className="benefit-card" style={{'--card-color': '#f8b200'} as React.CSSProperties}>
              <div className="icon-box">♢</div>
              <h3>Tranh luận trực diện</h3>
              <p>Không chỉ nghe – bạn được hỏi thẳng, phản biện, challenge diễn giả để tìm ra góc nhìn phù hợp nhất với mình.</p>
            </article>
            <article className="benefit-card" style={{'--card-color': '#006fad'} as React.CSSProperties}>
              <div className="icon-box">▣</div>
              <h3>Giải pháp thực tế</h3>
              <p>Rời buổi không chỉ có insight, mà có luôn cách làm cụ thể để xử lý bài toán bạn đang mắc kẹt.</p>
            </article>
          </div>
        </section>

        {/* Sub-tab Strip */}
        <nav className="strip" id="strip-nav" aria-label="Leaders Talk sections">
          <a href="/leaders-talk#strip-nav">Tổng quan</a>
          <a className="active" href="/workshop#strip-nav">Workshop</a>
          <a href="/dien-gia#strip-nav">Diễn giả</a>
        </nav>

        {/* Workshop List */}
        <section className="workshop-section">
          <div className="workshop-container">
            <div className="workshop-card">
              <div className="card-visual">▶</div>
              <div className="card-content">
                <div className="card-title">TASK MANAGEMENT x ANTIGRAVITY: CÔNG NGHỆ DẪN DẮT - HIỆU SUẤT &quot;BAY&quot; CAO</div>
                <div className="card-speaker">Diễn giả: Lương Dũng Nhân</div>
                <div className="card-date">16/04/2026</div>
              </div>
              <a href="https://drive.google.com/file/d/1a1l6WChLuBRPANgL1iK_dXx6F9V5RzIh/view?usp=sharing" className="btn-view" target="_blank" rel="noopener noreferrer"><span>▶</span> Xem lại</a>
            </div>
            <div className="workshop-card">
              <div className="card-visual">▶</div>
              <div className="card-content">
                <div className="card-title">AI IN SHOW - PRODUCT IN FLOW</div>
                <div className="card-speaker">Diễn giả: Nguyễn Lâm Hoàng Yên</div>
                <div className="card-date">31/01/2026</div>
              </div>
              <a href="https://youtube.com/playlist?list=PL9zkf3eNT74EEI-jMFdxaNUqiu3uwi6zk&si=Pp2pNRfBeE3uy8Xk" className="btn-view" target="_blank" rel="noopener noreferrer"><span>▶</span> Xem lại</a>
            </div>
            <div className="workshop-card">
              <div className="card-visual">▶</div>
              <div className="card-content">
                <div className="card-title">LEADERSHIP IN FLUX - LÃNH ĐẠO TRONG DÒNG CHẢY BIẾN ĐỘNG</div>
                <div className="card-speaker">Diễn giả: Thơm Trần, Phạm Hoàng Long, Trần Thế Trung</div>
                <div className="card-date">16/04/2026</div>
              </div>
              <a href="https://youtube.com/playlist?list=PL9zkf3eNT74EEI-jMFdxaNUqiu3uwi6zk&si=Pp2pNRfBeE3uy8Xk" className="btn-view" target="_blank" rel="noopener noreferrer"><span>▶</span> Xem lại</a>
            </div>
            <div className="workshop-card">
              <div className="card-visual">▶</div>
              <div className="card-content">
                <div className="card-title">HIỆU QUẢ BẤT NGỜ CÙNG N8N</div>
                <div className="card-speaker">Diễn giả: Giáp Đức Thắng</div>
                <div className="card-date">19/11/2025</div>
              </div>
              <a href="https://youtube.com/playlist?list=PL9zkf3eNT74FCxP_-4cb8ZW30thSi3yMP&si=FEZNFFNf4cwYaFbE" className="btn-view" target="_blank" rel="noopener noreferrer"><span>▶</span> Xem lại</a>
            </div>
            <div className="workshop-card">
              <div className="card-visual">▶</div>
              <div className="card-content">
                <div className="card-title">ĐI GIỮA RANH GIỚI - GIỮ VẸN NGHĨA TÌNH</div>
                <div className="card-speaker">Diễn giả: Nguyễn Minh Trung</div>
                <div className="card-date">01/10/2025</div>
              </div>
              <a href="https://youtube.com/playlist?list=PL9zkf3eNT74GDnftsKuGUwjKPEsp14NEz&si=EU2_DVxWlmEipYgL" className="btn-view" target="_blank" rel="noopener noreferrer"><span>▶</span> Xem lại</a>
            </div>
            <div className="workshop-card">
              <div className="card-visual">▶</div>
              <div className="card-content">
                <div className="card-title">GIỮ ĐƯỢC TÂM - MỚI VƯƠN ĐƯỢC TẦM</div>
                <div className="card-speaker">Diễn giả: Nhi Nguyễn</div>
                <div className="card-date">22/08/2025</div>
              </div>
              <a href="https://youtube.com/playlist?list=PL9zkf3eNT74FxeH2zhVV4TT3BFznaeupk&si=qRYyWoY_zKi5P6MC" className="btn-view" target="_blank" rel="noopener noreferrer"><span>▶</span> Xem lại</a>
            </div>
            <div className="workshop-card">
              <div className="card-visual">▶</div>
              <div className="card-content">
                <div className="card-title">VIBE CODING CÙNG GEMINI</div>
                <div className="card-speaker">Diễn giả: Lê Thanh Bính</div>
                <div className="card-date">11/07/2025</div>
              </div>
              <a href="https://youtube.com/playlist?list=PL9zkf3eNT74FO89M0Chixiq6wogNr-qIW&si=sSTfrh9b7vhFRSzI" className="btn-view" target="_blank" rel="noopener noreferrer"><span>▶</span> Xem lại</a>
            </div>
            <div className="workshop-card">
              <div className="card-visual">▶</div>
              <div className="card-content">
                <div className="card-title">GẶP SẾP HUY: HỎI ĐI - ĐỪNG CÓ SUY</div>
                <div className="card-speaker">Diễn giả: Kim Lê Huy</div>
                <div className="card-date">26/06/2025</div>
              </div>
              <a href="https://youtube.com/playlist?list=PL9zkf3eNT74EBqs6Vtw-DVAK2pjGDlZ1f&si=_EE0u7-OjHFFPLoj" className="btn-view" target="_blank" rel="noopener noreferrer"><span>▶</span> Xem lại</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <p className="footer-title">Phòng Học tập và Phát triển</p>
          <p className="footer-info">📍 Trụ sở: Rivera Park, 7/28 Thành Thái, Phường Diên Hồng, TP. HCM</p>
          <p className="footer-info">📩 Email: lnd@scommerce.asia</p>
        </div>
        <div className="footer-right">© 2026 GHN Learning &amp; Development</div>
      </footer>
    </>
  );
}
