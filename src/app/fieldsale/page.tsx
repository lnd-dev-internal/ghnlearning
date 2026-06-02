'use client';


export default function FieldSalePage() {
  return (
    <>
      <style>{`
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:100%;max-width:100%;min-height:1080px}
body{font-family:'Be Vietnam Pro',sans-serif;background:#F9F9FC;color:#1A1C1E;overflow-x:auto}
a{text-decoration:none;color:inherit}
.navbar{position:sticky;top:0;z-index:100;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 32px;width:100%;height:64px;background:#fff;border-bottom:1px solid #E5F1F7;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.logo{font-family:'Montserrat',sans-serif;font-weight:900;font-size:24px;line-height:32px;color:#FF5200;letter-spacing:-.5px;text-decoration:none}
.logo span{color:#009BE0}
.nav-links{display:flex;flex-direction:row;align-items:center;gap:24px}
.nav-link{font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:16px;line-height:24px;color:#475569;text-decoration:none;cursor:pointer}
.nav-link.active{font-weight:600;color:#FF5200;border-bottom:2px solid #FF5200;padding-bottom:4px}
.search-box{display:flex;align-items:center;position:relative}
.search-box input{width:221px;height:42px;background:#F3F3F6;border:1px solid #E5BEB2;border-radius:8px;padding:10px 16px 10px 40px;font-family:'Be Vietnam Pro',sans-serif;font-size:16px;color:#6B7280;outline:none}
.search-box input::placeholder{color:#6B7280}
.search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:18px;height:18px;opacity:.6}
.page{display:flex;flex-direction:column;max-width:1920px;width:100%;min-height:1080px;margin:0 auto;background:#F9F9FC}
.main-content{display:flex;flex-direction:row;align-items:flex-start;padding:32px 64px 0;gap:48px;max-width:1920px;width:100%;flex:1}
.sidebar{width:280px;flex-shrink:0;background:#fff;border-right:1px solid #E5F1F7;padding:24px 0 80px;min-height:calc(100vh - 64px - 32px);display:flex;flex-direction:column;gap:0;border-radius:12px 0 0 12px}
.sidebar-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;gap:16px;height:96px;margin-bottom:32px}
.sidebar-avatar{width:48px;height:48px;background:#70BCFF;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sidebar-role{font-family:'Montserrat',sans-serif;font-weight:600;font-size:20px;line-height:28px;color:#1A1C1E}
.sidebar-nav{display:flex;flex-direction:column;padding:0 16px;gap:4px}
.sidebar-link{display:flex;flex-direction:row;align-items:center;padding:12px 16px;gap:12px;border-radius:8px;text-decoration:none;cursor:pointer;transition:background .15s}
.sidebar-link:hover{background:rgba(229,241,247,.4)}
.sidebar-link.active{background:rgba(229,241,247,.3);border-left:4px solid #FF5200;border-radius:0 8px 8px 0;padding-left:12px}
.sidebar-link-icon{width:18px;height:18px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px;line-height:1}
.sidebar-link-text{font-family:'Lexend',sans-serif;font-weight:400;font-size:14px;line-height:20px;color:#6B7280}
.sidebar-link.active .sidebar-link-text{font-weight:600;color:#FF5200}
.content{flex:1;display:flex;flex-direction:column;gap:24px;min-width:0}
.breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.breadcrumb a{font-family:'Be Vietnam Pro',sans-serif;font-size:14px;line-height:20px;color:#6B7280;text-decoration:none}
.breadcrumb a:hover{color:#FF5200}
.breadcrumb-sep{font-size:14px;line-height:20px;color:#CBD5E1}
.breadcrumb-cur{font-family:'Be Vietnam Pro',sans-serif;font-size:14px;line-height:20px;color:#FF5200;font-weight:600}
.section-border{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 0 8px;border-bottom:1px solid #E5BEB2;margin-bottom:8px}
.section-title{font-family:'Montserrat',sans-serif;font-weight:800;font-size:32px;line-height:40px;letter-spacing:-.32px;color:#FF5200}
.card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;width:100%}
.card{background:#fff;border:1px solid #E5BEB2;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .2s,transform .2s}
.card:hover{box-shadow:0 8px 24px rgba(255,82,0,.12);transform:translateY(-2px)}
.card-thumb{width:100%;height:130px;object-fit:cover;display:block}
.card-body{display:flex;flex-direction:column;justify-content:space-between;padding:16px;flex:1}
.card-title{font-family:'Montserrat',sans-serif;font-weight:600;font-size:18px;line-height:28px;color:#1A1C1E;margin-bottom:8px}
.card-meta{display:flex;flex-direction:row;align-items:center;gap:8px;margin-bottom:auto;color:#5C4037;font-size:12px;line-height:16px;font-weight:500}
.clock{width:13px;height:13px;border:1.5px solid #5C4037;border-radius:50%;position:relative;flex:0 0 13px}
.clock:before,.clock:after{content:"";position:absolute;background:#5C4037;left:50%;top:50%;transform-origin:bottom center}
.clock:before{width:1.5px;height:4px;transform:translate(-50%,-90%)}
.clock:after{width:4px;height:1.5px;transform:translate(-5%,-50%) rotate(45deg)}
.card-btn{display:flex;justify-content:center;align-items:center;padding:8px 16px;width:100%;height:36px;background:#009BE0;border-radius:8px;border:none;cursor:pointer;font-family:'Be Vietnam Pro',sans-serif;font-weight:600;font-size:14px;line-height:20px;letter-spacing:.14px;color:#fff;margin-top:12px;transition:background .2s}
.card-btn:hover{background:#0080C0}
.footer-wrap{display:flex;flex-direction:column;align-items:flex-start;padding:24px 0 0;max-width:1920px;width:100%;margin:0 auto}
.footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 96px;max-width:1920px;width:100%;height:125px;background:#F8FAFC;border-top:1px solid #E2E8F0}
.footer-brand{font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#0F172A;margin-bottom:8px}
.footer-info{font-family:'Be Vietnam Pro',sans-serif;font-size:12px;line-height:20px;color:#64748B}
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
  .role-avatar{width:48px;height:48px;background:#0090D4;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .role-title{font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;line-height:28px;color:#1E293B;margin-left:16px;}
  .mobile-chip-nav{display:flex!important;align-items:center;padding:8px 16px;width:100%;background:#fff;border-bottom:1px solid #E5E7EB;overflow-x:auto;white-space:nowrap;scrollbar-width:none;}
  .mobile-chip-nav::-webkit-scrollbar{display:none;}
  .chip{display:inline-flex;align-items:center;justify-content:center;padding:8px 16px;height:32px;border-radius:9999px;background:#F1F5F9;font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:12px;color:#475569;text-decoration:none;white-space:nowrap;margin-right:8px;}
  .chip.active{background:rgba(241,90,36,.1);font-weight:700;color:#F15A24;}
  .content{width:100%!important;padding:0!important;}
  .breadcrumb{display:none!important;}
  .section-border{padding:24px 16px 0!important;border-bottom:none!important;background:#F8FAFC;}
  .section-title{font-size:18px!important;line-height:28px!important;color:#F37021!important;letter-spacing:0!important;}
  .card-grid{display:flex!important;flex-direction:column!important;gap:16px!important;padding:16px!important;}
  .card{border-radius:12px!important;box-shadow:0 1px 2px rgba(0,0,0,.05)!important;border:1px solid #F3F4F6!important;}
  .card-thumb{height:200px!important;object-fit:cover!important;}
  .card-body{padding:16px!important;}
  .card-title{font-size:16px!important;line-height:20px!important;font-weight:600!important;color:#111827!important;}
  .card-meta{color:#6B7280!important;}
  .card-btn{height:40px!important;font-size:14px!important;margin-top:16px!important;background:#0095DA!important;border-radius:8px!important;}
  .footer-wrap{width:100%!important;padding:16px 24px!important;margin-top:40px!important;border-top:1px solid #EBEEF0!important;background:#fff!important;}
  .footer{width:100%!important;height:auto!important;flex-direction:column!important;align-items:flex-start!important;padding:24px 0!important;gap:16px!important;background:transparent!important;border-top:none!important;}
  .footer > div:first-child{display:flex;flex-direction:column;gap:8px;border-top:1px solid #F1F5F9;padding-top:24px;width:100%;}
  .footer-brand{font-size:14px!important;}
  .footer-info{font-size:11px!important;line-height:16px!important;}
  .footer h3{font-size:14px!important;margin-bottom:0!important;}
  .footer p{font-size:11px!important;line-height:16px!important;}
}
.nav-item{position:relative;display:flex;align-items:center;}.nav-trigger{display:flex;align-items:center;gap:4px;}.nav-caret{width:10px;height:10px;transition:transform .2s;}.nav-item:hover .nav-caret,.nav-item:focus-within .nav-caret{transform:rotate(180deg);}.nav-menu{display:none;position:absolute;top:100%;left:0;background:#fff;border:1px solid #e5f1f7;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.1);padding:8px 0;min-width:200px;z-index:200;}.nav-item:hover .nav-menu,.nav-item:focus-within .nav-menu{display:block;}.nav-menu a{display:block;padding:8px 16px;font-size:14px;color:#475569;white-space:nowrap;text-decoration:none;}.nav-menu a:hover{background:#f0f8ff;color:#ff5200;}
      `}</style>

      <div className="page">
        <div className="main-content">
          <aside className="sidebar">
            <div className="sidebar-header">
              <div className="sidebar-avatar" aria-hidden="true">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.2 6.7C2.2 4.55 3.95 2.8 6.1 2.8H15.9C18.05 2.8 19.8 4.55 19.8 6.7V14.1C19.8 15.62 18.57 16.85 17.05 16.85H4.95C3.43 16.85 2.2 15.62 2.2 14.1V6.7Z" fill="#004B77"/>
                  <path d="M4.65 2.8V1.9C4.65 1.18 5.23 0.6 5.95 0.6H8.15C8.87 0.6 9.45 1.18 9.45 1.9V2.8" stroke="#004B77" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M12.55 2.8V1.9C12.55 1.18 13.13 0.6 13.85 0.6H16.05C16.77 0.6 17.35 1.18 17.35 1.9V2.8" stroke="#004B77" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M7 8.5V11.8" stroke="#70BCFF" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M11 7.6V11.8" stroke="#70BCFF" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M15 8.5V11.8" stroke="#70BCFF" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="sidebar-role">Nhân viên<br />Kinh doanh<br />Thực địa</div>
            </div>
            <nav className="sidebar-nav">
              <a className="sidebar-link active" href="/fieldsale">
                <span className="sidebar-link-icon">🗂️</span>
                <span className="sidebar-link-text">Kiến thức Tổng quan</span>
              </a>
              <a className="sidebar-link" href="/fieldsale-banhang">
                <span className="sidebar-link-icon">🗂️</span>
                <span className="sidebar-link-text">Quy trình bán hàng</span>
              </a>
            </nav>
          </aside>

          <section className="content">
            <div className="mobile-role-info">
              <div className="role-container">
                <div className="role-avatar">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.2 6.7C2.2 4.55 3.95 2.8 6.1 2.8H15.9C18.05 2.8 19.8 4.55 19.8 6.7V14.1C19.8 15.62 18.57 16.85 17.05 16.85H4.95C3.43 16.85 2.2 15.62 2.2 14.1V6.7Z" fill="#fff"/>
                  </svg>
                </div>
                <div className="role-title">NV Kinh doanh Thực địa</div>
              </div>
            </div>
            <div className="mobile-chip-nav">
              <a href="/fieldsale" className="chip active">Tổng quan</a>
              <a href="/fieldsale-banhang" className="chip">Bán hàng</a>
            </div>
            <div className="breadcrumb">
              <a href="/vanphong">Khối Văn Phòng</a>
              <span className="breadcrumb-sep">›</span>
              <a href="/fieldsale">Nhân viên Kinh doanh Thực địa</a>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-cur">Kiến thức Tổng quan</span>
            </div>

            <div className="section-border">
              <h1 className="section-title">Kiến thức Tổng quan</h1>
            </div>

            <div className="card-grid">
              <article className="card">
                <img className="card-thumb" src="/FS-sanpham.png" alt="Sản phẩm Thị trường SME" />
                <div className="card-body">
                  <div className="card-title">Sản phẩm Thị trường SME</div>
                  <div className="card-meta"><span className="clock"></span><span>15 phút</span></div>
                  <a className="card-btn" href="https://drive.google.com/file/d/1lhavzeFcbgINbBQyKOxmaK6sKdXjQ5-j/view">Bắt đầu học</a>
                </div>
              </article>

              <article className="card">
                <img className="card-thumb" src="/FS-vanhanh.png" alt="Quy trình Vận hành GHN" />
                <div className="card-body">
                  <div className="card-title">Quy trình Vận hành GHN</div>
                  <div className="card-meta"><span className="clock"></span><span>15 phút</span></div>
                  <a className="card-btn" href="https://drive.google.com/file/d/1feTRZ9VLwPvY5rxGMVfEYdGZlrmRPR98/view">Bắt đầu học</a>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <div className="footer-wrap">
        <footer className="footer">
          <div>
            <div className="footer-brand">Phòng Học tập và Phát triển</div>
            <div className="footer-info">📍 Trụ sở: Rivera Park, 7/28 Thành Thái, Phường Diên Hồng TP. HCM</div>
            <div className="footer-info">📩 Email: lnd@scommerce.asia</div>
          </div>
        </footer>
      </div>
    </>
  );
}
