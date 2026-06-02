import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B2B – GHN L&D Portal',
};

export default function HangNangPage() {
  return (
    <>
      <style>{`
*{box-sizing:border-box;margin:0;padding:0;}
html,body{width:100%;max-width:100%;min-height:1080px;}
body{font-family:'Be Vietnam Pro',sans-serif;background:#F9F9FC;overflow-x:auto;}
.navbar{position:sticky;top:0;z-index:100;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 32px;width:100%;height:64px;background:#fff;border-bottom:1px solid #E5F1F7;box-shadow:0 1px 2px rgba(0,0,0,.05);}
.logo{font-family:'Montserrat',sans-serif;font-weight:900;font-size:24px;line-height:32px;color:#FF5200;letter-spacing:-0.5px;text-decoration:none;}
.logo span{color:#009BE0;}
.nav-links{display:flex;flex-direction:row;align-items:center;gap:24px;}
.nav-link{font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:16px;line-height:24px;color:#475569;text-decoration:none;cursor:pointer;}
.nav-link.active{font-weight:600;color:#FF5200;border-bottom:2px solid #FF5200;padding-bottom:4px;}
.search-box{display:flex;align-items:center;position:relative;}
.search-box input{width:221px;height:42px;background:#F3F3F6;border:1px solid #E5BEB2;border-radius:8px;padding:10px 16px 10px 40px;font-family:'Be Vietnam Pro',sans-serif;font-size:16px;color:#6B7280;outline:none;}
.search-box input::placeholder{color:#6B7280;}
.search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:18px;height:18px;opacity:.6;}
.page{display:flex;flex-direction:column;max-width:1920px;width:100%;min-height:1080px;margin:0 auto;background:#F9F9FC;}
.main-content{display:flex;flex-direction:column;align-items:flex-start;padding:32px 64px 0;gap:64px;max-width:1920px;width:100%;}
.header-section{display:flex;flex-direction:column;gap:8px;width:100%;}
.page-title{font-family:'Montserrat',sans-serif;font-weight:700;font-size:40px;line-height:48px;letter-spacing:-0.8px;color:#1A1C1E;}
.page-desc{font-family:'Be Vietnam Pro',sans-serif;font-weight:400;font-size:18px;line-height:28px;color:#5C4037;}
.section{display:flex;flex-direction:column;gap:16px;width:100%;}
.section-border{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 0 8px;border-bottom:1px solid #E5BEB2;}
.section-title{font-family:'Montserrat',sans-serif;font-weight:800;font-size:32px;line-height:40px;letter-spacing:-0.32px;color:#FF5200;}
.section-link{font-family:'Be Vietnam Pro',sans-serif;font-weight:600;font-size:14px;line-height:20px;letter-spacing:0.14px;color:#FF5200;text-decoration:none;}
.section-link:hover{text-decoration:underline;}
.card-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;width:100%;}
.card{background:#fff;border:1px solid #E5BEB2;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .2s,transform .2s;}
.card:hover{box-shadow:0 8px 24px rgba(255,82,0,.12);transform:translateY(-2px);}
.card-thumb{width:100%;height:170px;object-fit:contain;display:block;background:#f5f8ff;}
.card-thumb-placeholder{width:100%;height:170px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
.card-body{display:flex;flex-direction:column;justify-content:space-between;padding:16px;flex:1;}
.card-title{font-family:'Montserrat',sans-serif;font-weight:600;font-size:18px;line-height:28px;color:#1A1C1E;margin-bottom:8px;}
.card-meta{display:flex;flex-direction:row;align-items:center;gap:8px;color:#5c4037;font-size:12px;line-height:16px;font-weight:500;margin-bottom:auto}
.clock{width:13px;height:13px;border:1.5px solid #5c4037;border-radius:50%;position:relative;flex:0 0 13px}
.clock:before,.clock:after{content:'';position:absolute;background:#5c4037;left:50%;top:50%;transform-origin:bottom center}
.clock:before{width:1.5px;height:4px;transform:translate(-50%,-90%)}
.clock:after{width:4px;height:1.5px;transform:translate(-5%,-50%) rotate(45deg)}
.card-btn{display:flex;justify-content:center;align-items:center;padding:8px 16px;width:100%;height:36px;background:#009BE0;border-radius:8px;border:none;cursor:pointer;font-family:'Be Vietnam Pro',sans-serif;font-weight:600;font-size:14px;line-height:20px;letter-spacing:0.14px;color:#fff;margin-top:12px;transition:background .2s;}
.card-btn:hover{background:#0080c0;}
.thumb-1{background:linear-gradient(135deg,#01579B 0%,#0288D1 100%);}
.thumb-2{background:linear-gradient(135deg,#004B77 0%,#0097A7 100%);}
.thumb-3{background:linear-gradient(135deg,#006064 0%,#0288D1 100%);}
.thumb-4{background:linear-gradient(135deg,#1A237E 0%,#1565C0 100%);}
.thumb-badge{position:absolute;top:12px;left:12px;background:rgba(0,0,0,.55);color:#fff;font-family:'Be Vietnam Pro',sans-serif;font-size:10px;font-weight:600;padding:3px 8px;border-radius:4px;letter-spacing:.5px;text-transform:uppercase;}
.thumb-person{font-size:52px;margin-top:8px;}
.footer-wrap{display:flex;flex-direction:column;align-items:flex-start;padding:24px 0 0;max-width:1920px;width:100%;margin:0 auto;margin-top:64px;}
.footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 96px;max-width:1920px;width:100%;height:125px;background:#F8FAFC;border-top:1px solid #E2E8F0;}
.footer-brand{font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#0F172A;margin-bottom:8px;}
.footer-info{font-family:'Be Vietnam Pro',sans-serif;font-size:12px;line-height:20px;color:#64748B;}
.footer-right{font-family:'Be Vietnam Pro',sans-serif;font-size:12px;color:#94A3B8;}
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
  .nav{width:100%;display:flex;flex-direction:column;}
  .nav-item{display:flex;flex-direction:row;align-items:center;padding:12px 16px;gap:12px;width:100%;height:44px;text-decoration:none;box-sizing:border-box;}
  .nav-item.active{background:rgba(255,247,237,0.5);border-right:2px solid #FF5200;}
  .nav-item.active .nav-text{color:#FF5200;}
  .nav-item.active .nav-icon svg{fill:#FF5200;}
  .nav-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;}
  .nav-text{font-family:'Lexend';font-weight:500;font-size:14px;line-height:20px;color:#475569;}
  .sub-nav{display:flex;flex-direction:column;align-items:flex-start;padding:12px 16px 12px 48px;gap:12px;width:100%;box-sizing:border-box;}
  .sub-nav-item{font-family:'Lexend';font-weight:400;font-size:14px;line-height:20px;color:#475569;text-decoration:none;display:block;}
  .page{width:100%!important;min-width:0!important;min-height:auto!important;padding-top:64px!important;}
  .main-content{width:100%!important;padding:0 0 40px 0!important;gap:0!important;}
  .header-section{padding:30px 16px!important;background:#FF5200;position:relative;overflow:hidden;min-height:180px;justify-content:center;border-radius:0;}
  .page-title{font-size:24px!important;line-height:30px!important;color:#fff!important;position:relative;z-index:1;margin-bottom:8px;letter-spacing:0;}
  .page-desc{font-size:12px!important;line-height:17px!important;color:#fff!important;font-style:italic;position:relative;z-index:1;max-width:100%;}
  .section{padding:30px 16px 0!important;gap:16px!important;}
  .section-border{padding-bottom:0!important;border-bottom:none!important;}
  .section-title{font-size:16px!important;line-height:24px!important;letter-spacing:0;border-left:4px solid #FF5200;padding-left:12px!important;color:#181C1E!important;}
  .section-link{font-size:12px!important;}
  .card-grid-4,.card-grid-3,.card-grid{display:grid!important;grid-template-columns:repeat(2,1fr)!important;gap:12px!important;}
  .card-grid-4 .card:nth-child(n+3),.card-grid-3 .card:nth-child(n+3),.card-grid .card:nth-child(n+3){display:none!important;}
  .card{border-radius:8px!important;}
  .card-thumb,.card-thumb-placeholder{height:100px!important;}
  .card-body{padding:12px!important;gap:8px!important;}
  .card-title{font-size:14px!important;line-height:20px!important;height:40px!important;margin-bottom:0!important;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}
  .card-meta{font-size:12px!important;}
  .card-btn{height:30px!important;font-size:12px!important;padding:4px 12px!important;margin-top:auto!important;}
  .footer-wrap{width:100%!important;padding:16px 24px!important;margin-top:40px!important;border-top:1px solid #EBEEF0;background:#fff;}
  .footer{width:100%!important;height:auto!important;flex-direction:column!important;align-items:flex-start!important;padding:24px 0!important;gap:16px!important;background:transparent!important;border-top:none!important;}
  .footer > div:first-child{display:flex;flex-direction:column;gap:8px;border-top:1px solid #F1F5F9;padding-top:24px;width:100%;}
  .footer-brand{font-size:14px!important;}
  .footer-info{font-size:11px!important;line-height:16px!important;}
  .footer-right{font-size:11px!important;margin-top:16px;align-self:center;text-align:center;}
}
.nav-item{position:relative;display:flex;align-items:center;}.nav-trigger{display:flex;align-items:center;gap:4px;}.nav-caret{width:10px;height:10px;transition:transform .2s;}.nav-item:hover .nav-caret,.nav-item:focus-within .nav-caret{transform:rotate(180deg);}.nav-menu{display:none;position:absolute;top:100%;left:0;background:#fff;border:1px solid #e5f1f7;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.1);padding:8px 0;min-width:200px;z-index:200;}.nav-item:hover .nav-menu,.nav-item:focus-within .nav-menu{display:block;}.nav-menu a{display:block;padding:8px 16px;font-size:14px;color:#475569;white-space:nowrap;text-decoration:none;}.nav-menu a:hover{background:#f0f8ff;color:#ff5200;}
      `}</style>

      <div className="page">
        <div className="main-content">

          {/* HEADER */}
          <div className="header-section">
            <h1 className="page-title">B2B</h1>
            <p className="page-desc">Nâng cao năng lực vận hành, hiệu quả và an toàn dành riêng cho Giao Hàng Nặng</p>
          </div>

          {/* SECTION 1: Nhân viên Xử lý */}
          <div className="section">
            <div className="section-border">
              <h2 className="section-title">Nhân viên Xử lý</h2>
              <a className="section-link" href="/freight">Xem thêm</a>
            </div>
            <div className="card-grid-4">

              {/* Card 1 */}
              <div className="card">
                <img className="card-thumb" src="/freight-lay.png" alt="Tổng hợp quy trình xử lý hàng lấy" />
                <div className="card-thumb-placeholder thumb-1" style={{display:'none'}}>
                  <span className="thumb-badge">NVXL · HÀNG LẤY</span>
                  <span className="thumb-person">📥</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Tổng hợp quy trình xử lý hàng lấy</div>
                  <div className="card-meta"><span className="clock"></span><span>2 phút</span></div>
                  <a className="card-btn" href="/freight-lay">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card">
                <img className="card-thumb" src="/freight-giao.png" alt="Tổng hợp quy trình xử lý hàng giao" />
                <div className="card-thumb-placeholder thumb-2" style={{display:'none'}}>
                  <span className="thumb-badge">NVXL · HÀNG GIAO</span>
                  <span className="thumb-person">🚚</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Tổng hợp quy trình xử lý hàng giao</div>
                  <div className="card-meta"><span className="clock"></span><span>20 phút</span></div>
                  <a className="card-btn" href="/freight">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card">
                <img className="card-thumb" src="/freight-tra.png" alt="Tổng hợp quy trình xử lý hàng trả" />
                <div className="card-thumb-placeholder thumb-3" style={{display:'none'}}>
                  <span className="thumb-badge">NVXL · HÀNG TRẢ</span>
                  <span className="thumb-person">↩️</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Tổng hợp quy trình xử lý hàng trả</div>
                  <div className="card-meta"><span className="clock"></span><span>20 phút</span></div>
                  <a className="card-btn" href="/freight-tra">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="card">
                <img className="card-thumb" src="/freight-lc.png" alt="Tổng hợp quy trình xử lý luân chuyển" />
                <div className="card-thumb-placeholder thumb-4" style={{display:'none'}}>
                  <span className="thumb-badge">NVXL · LUÂN CHUYỂN</span>
                  <span className="thumb-person">🔃</span>
                </div>
                <div className="card-body">
                  <div className="card-title">Tổng hợp quy trình xử lý luân chuyển</div>
                  <div className="card-meta"><span className="clock"></span><span>20 phút</span></div>
                  <a className="card-btn" href="/freight-lc">Bắt đầu học</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="footer-wrap">
        <footer className="footer">
          <div>
            <div className="footer-brand">Phòng Học tập và Phát triển</div>
            <div className="footer-info">📍 Trụ sở: Rivera Park, 7/28 Thành Thái, Phường Diên Hồng, TP. HCM</div>
            <div className="footer-info">📩 Email: lnd@scommerce.asia</div>
          </div>
          <div className="footer-right">© 2026 GHN Learning &amp; Development</div>
        </footer>
      </div>
    </>
  );
}
