'use client';

export default function NvphPage() {
  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        html,body{width:100%;max-width:100%;min-height:1080px}
        body{font-family:'Be Vietnam Pro',sans-serif;background:#f9f9fc;color:#1a1c1e;overflow-x:auto}
        a{text-decoration:none;color:inherit}
        .page{display:flex;flex-direction:column;max-width:1920px;width:100%;min-height:1080px;margin:0 auto;background:#f9f9fc}
        .navbar{position:sticky;top:0;z-index:100;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 32px;width:100%;height:64px;background:#fff;border-bottom:1px solid #e5f1f7;box-shadow:0 1px 2px rgba(0,0,0,.05)}
        .logo{font-family:'Montserrat',sans-serif;font-weight:900;font-size:24px;line-height:32px;color:#ff5200;letter-spacing:-.5px;text-decoration:none}
        .logo span{color:#009BE0}
        .nav-links{display:flex;flex-direction:row;align-items:center;gap:24px}
        .nav-link{font-family:'Be Vietnam Pro',sans-serif;font-weight:500;font-size:16px;line-height:24px;color:#475569;text-decoration:none;cursor:pointer}
        .nav-link.active{color:#ff5200;font-weight:600;border-bottom:2px solid #ff5200;padding-bottom:4px}
        .search-box{display:flex;align-items:center;position:relative}
        .search-box input{width:221px;height:42px;padding:10px 16px 10px 40px;border:1px solid #e5beb2;border-radius:8px;background:#f3f3f6;color:#6b7280;font:400 16px/20px 'Be Vietnam Pro',sans-serif;outline:none}
        .search-box input::placeholder{color:#6b7280}
        .search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);width:18px;height:18px;pointer-events:none}
        .main{flex:1;display:flex;flex-direction:row;align-items:flex-start;gap:48px;padding:32px 64px 0;background:#f9f9fc}
        .sidebar{width:280px;min-height:calc(100vh - 64px - 32px);flex-shrink:0;background:#fff;border-right:1px solid #e5f1f7;padding:24px 0 80px;display:flex;flex-direction:column;gap:0;border-radius:12px 0 0 12px}
        .sidebar-top{display:flex;flex-direction:column;gap:32px}
        .sidebar-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;gap:16px;height:64px;margin-bottom:32px}
        .avatar{width:48px;height:48px;border-radius:9999px;background:#70bcff;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:22px}
        .sidebar-title{font-family:'Montserrat',sans-serif;font-weight:600;font-size:24px;line-height:32px;color:#1a1c1e}
        .side-nav{display:flex;flex-direction:column;gap:4px;padding:0 16px}
        .side-link{display:flex;flex-direction:row;align-items:center;padding:12px 16px;gap:12px;border-radius:8px;color:#6b7280;text-decoration:none;cursor:pointer;transition:background .15s}
        .side-link:hover{background:rgba(229,241,247,.4)}
        .side-link.active{background:rgba(229,241,247,.3);border-left:4px solid #ff5200;border-radius:0 8px 8px 0;padding-left:12px;color:#ff5200;font-weight:600}
        .side-icon{width:18px;height:18px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px;line-height:1}
        .side-text{font-family:'Lexend',sans-serif;font-weight:400;font-size:14px;line-height:20px;color:#6b7280}
        .side-link.active .side-text{font-weight:600;color:#ff5200}
        .content{flex:1;display:flex;flex-direction:column;gap:24px;min-width:0}
        .breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:8px}
        .breadcrumb a{font-family:'Be Vietnam Pro',sans-serif;font-size:14px;color:#6b7280;text-decoration:none}
        .breadcrumb a:hover{color:#ff5200}
        .breadcrumb-sep{color:#cbd5e1;font-size:14px}
        .breadcrumb-cur{font-family:'Be Vietnam Pro',sans-serif;font-size:14px;color:#ff5200;font-weight:600}
        .section-head{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 0 8px;border-bottom:1px solid #e5beb2;margin-bottom:8px}
        .section-title{font-family:'Montserrat',sans-serif;font-weight:800;font-size:32px;line-height:40px;letter-spacing:-.32px;color:#ff5200}
        .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;width:100%}
        .card{background:#fff;border:1px solid #e5beb2;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .2s,transform .2s}
        .card:hover{box-shadow:0 8px 24px rgba(255,82,0,.12);transform:translateY(-2px)}
        .thumb{height:160px;position:relative;overflow:hidden}
        .thumb img{width:100%;height:100%;object-fit:cover;display:block}
        .thumb-fallback{position:absolute;inset:0;background:linear-gradient(135deg,#ffffff 0%,#fff5ef 40%,#d7eefc 100%);display:flex;align-items:flex-end;justify-content:flex-start;padding:16px}
        .thumb-fallback span{display:inline-flex;align-items:center;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,.85);font-family:'Be Vietnam Pro',sans-serif;font-size:12px;font-weight:600;color:#ff5200;letter-spacing:.2px}
        .card-body{display:flex;flex-direction:column;justify-content:space-between;padding:16px;flex:1}
        .card-title{font-family:'Montserrat',sans-serif;font-weight:600;font-size:18px;line-height:28px;color:#1a1c1e;margin-bottom:8px}
        .card-meta{display:flex;flex-direction:row;align-items:center;gap:8px;color:#5c4037;font-size:12px;line-height:16px;font-weight:500;margin-bottom:auto}
        .clock{width:13px;height:13px;border:1.5px solid #5c4037;border-radius:50%;position:relative;flex:0 0 13px}
        .clock:before,.clock:after{content:'';position:absolute;background:#5c4037;left:50%;top:50%;transform-origin:bottom center}
        .clock:before{width:1.5px;height:4px;transform:translate(-50%,-90%)}
        .clock:after{width:4px;height:1.5px;transform:translate(-5%,-50%) rotate(45deg)}
        .btn{display:flex;justify-content:center;align-items:center;padding:8px 16px;width:100%;height:36px;background:#009be0;border-radius:8px;border:none;cursor:pointer;font-family:'Be Vietnam Pro',sans-serif;font-weight:600;font-size:14px;line-height:20px;letter-spacing:.14px;color:#fff;margin-top:12px;transition:background .2s}
        .btn:hover{background:#0080c0}
        .footer-wrap{display:flex;flex-direction:column;align-items:flex-start;padding:24px 0 0;max-width:1920px;width:100%;margin:0 auto}
        .footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 96px;max-width:1920px;width:100%;height:125px;background:#f8fafc;border-top:1px solid #e2e8f0}
        .footer h3{font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;line-height:28px;color:#0f172a;margin-bottom:8px}
        .footer p{font-family:'Be Vietnam Pro',sans-serif;font-size:12px;line-height:20px;color:#64748b}
        .mobile-header{display:none;}.drawer{display:none;}.drawer-overlay{display:none;}.mobile-role-info{display:none;}
        .nav-item{position:relative;display:flex;align-items:center;}.nav-trigger{display:flex;align-items:center;gap:4px;}.nav-caret{width:10px;height:10px;transition:transform .2s;}.nav-item:hover .nav-caret,.nav-item:focus-within .nav-caret{transform:rotate(180deg);}.nav-menu{display:none;position:absolute;top:100%;left:0;background:#fff;border:1px solid #e5f1f7;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.1);padding:8px 0;min-width:200px;z-index:200;}.nav-item:hover .nav-menu,.nav-item:focus-within .nav-menu{display:block;}.nav-menu a{display:block;padding:8px 16px;font-size:14px;color:#475569;white-space:nowrap;text-decoration:none;}.nav-menu a:hover{background:#f0f8ff;color:#ff5200;}
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
          .main{width:100%!important;padding:64px 0 40px!important;gap:0!important;flex-direction:column!important;}
          .mobile-role-info{display:flex!important;flex-direction:column;align-items:flex-start;padding:24px 16px;width:100%;background:#fff;border-bottom:1px solid #E5E7EB;}
          .role-container{display:flex;flex-direction:row;align-items:center;}
          .role-avatar{width:48px;height:48px;background:#0090D4;border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
          .role-title{font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;line-height:28px;color:#1E293B;margin-left:16px;}
          .content{width:100%!important;padding:0!important;}
          .breadcrumb{display:none!important;}
          .section-head{padding:24px 16px 0!important;border-bottom:none!important;background:#F8FAFC;}
          .section-title{font-size:18px!important;line-height:28px!important;color:#F37021!important;letter-spacing:0!important;}
          .grid{display:flex!important;flex-direction:column!important;gap:16px!important;padding:16px!important;}
          .card{border-radius:12px!important;box-shadow:0 1px 2px rgba(0,0,0,.05)!important;border:1px solid #F3F4F6!important;}
          .thumb{height:200px!important;}
          .thumb img{height:200px!important;object-fit:cover!important;}
          .thumb-fallback{height:200px!important;position:relative!important;}
          .card-body{padding:16px!important;}
          .card-title{font-size:16px!important;line-height:20px!important;font-weight:600!important;color:#111827!important;}
          .card-meta{color:#6B7280!important;}
          .btn{height:40px!important;font-size:14px!important;margin-top:16px!important;background:#0095DA!important;border-radius:8px!important;}
          .footer-wrap{width:100%!important;padding:16px 24px!important;margin-top:40px!important;border-top:1px solid #EBEEF0!important;background:#fff!important;}
          .footer{width:100%!important;height:auto!important;flex-direction:column!important;align-items:flex-start!important;padding:24px 0!important;gap:16px!important;background:transparent!important;border-top:none!important;}
          .footer > div:first-child{display:flex;flex-direction:column;gap:8px;border-top:1px solid #F1F5F9;padding-top:24px;width:100%;}
          .footer-brand{font-size:14px!important;}
          .footer-info{font-size:11px!important;line-height:16px!important;}
          .footer h3{font-size:14px!important;margin-bottom:0!important;}
          .footer p{font-size:11px!important;line-height:16px!important;}
        }
      `}</style>

      <div className="page">
        <main className="main">
          <aside className="sidebar">
            <div className="sidebar-top">
              <div className="sidebar-header">
                <div className="avatar">📦</div>
                <div className="sidebar-title">Nhân viên<br />Phân hàng</div>
              </div>
              <nav className="side-nav">
                <a className="side-link active" href="/nvph"><span className="side-icon">🗂️</span><span className="side-text">Quy trình làm việc</span></a>
              </nav>
            </div>
          </aside>
          <section className="content">
            <div className="mobile-role-info">
              <div className="role-container">
                <div className="role-avatar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M3 3h18v18H3z"/>
                    <path d="M12 8v8"/>
                    <path d="M8 12h8"/>
                  </svg>
                </div>
                <div className="role-title">Nhân viên Phân hàng</div>
              </div>
            </div>
            <div className="breadcrumb">
              <a href="/khoi-thi-truong">Khối Thị Trường</a>
              <span className="breadcrumb-sep"></span>
              <a href="/nvph">Nhân viên Phân hàng</a>
              <span className="breadcrumb-sep"></span>
              <span className="breadcrumb-cur">Quy trình làm việc</span>
            </div>
            <div className="section-head"><h1 className="section-title">Quy trình làm việc</h1></div>
            <div className="grid">
              <article className="card">
                <div className="thumb">
                  <img src="/nvph-noiquy.png" alt="Nội quy làm việc" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                  <div className="thumb-fallback" style={{display:'none'}}><span>Nội quy</span></div>
                </div>
                <div className="card-body">
                  <div className="card-title">Nội quy làm việc</div>
                  <div className="card-meta"><span className="clock"></span><span>10 phút</span></div>
                  <a className="btn" href="#">Bắt đầu học</a>
                </div>
              </article>
              <article className="card">
                <div className="thumb">
                  <img src="/nvph-nhanhang.png" alt="Nhập hàng" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                  <div className="thumb-fallback" style={{display:'none'}}><span>Nhập hàng</span></div>
                </div>
                <div className="card-body">
                  <div className="card-title">Nhập hàng</div>
                  <div className="card-meta"><span className="clock"></span><span>10 phút</span></div>
                  <a className="btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68e6a0020175b1e9c535e377" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </article>
              <article className="card">
                <div className="thumb">
                  <img src="/nvph-xulyhangnhap.png" alt="Xử lý hàng nhập" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                  <div className="thumb-fallback" style={{display:'none'}}><span>Xử lý hàng nhập</span></div>
                </div>
                <div className="card-body">
                  <div className="card-title">Xử lý hàng nhập</div>
                  <div className="card-meta"><span className="clock"></span><span>10 phút</span></div>
                  <a className="btn" href="#">Bắt đầu học</a>
                </div>
              </article>
              <article className="card">
                <div className="thumb">
                  <img src="/nvph-dotai.png" alt="Đổ tải" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                  <div className="thumb-fallback" style={{display:'none'}}><span>Đổ tải</span></div>
                </div>
                <div className="card-body">
                  <div className="card-title">Đổ tải</div>
                  <div className="card-meta"><span className="clock"></span><span>10 phút</span></div>
                  <a className="btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68d8fcbde3e2281132a415f5" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </article>
              <article className="card">
                <div className="thumb">
                  <img src="/nvph-feeder.png" alt="Rã hàng/Cấp hàng tại Feeder" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                  <div className="thumb-fallback" style={{display:'none'}}><span>Feeder</span></div>
                </div>
                <div className="card-body">
                  <div className="card-title">Rã hàng/Cấp hàng tại Feeder</div>
                  <div className="card-meta"><span className="clock"></span><span>10 phút</span></div>
                  <a className="btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68d8fd20e3e2281132a415f8" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </article>
              <article className="card">
                <div className="thumb">
                  <img src="/nvph-dongkien.png" alt="Đóng kiện tại Chute" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                  <div className="thumb-fallback" style={{display:'none'}}><span>Đóng kiện</span></div>
                </div>
                <div className="card-body">
                  <div className="card-title">Đóng kiện tại Chute</div>
                  <div className="card-meta"><span className="clock"></span><span>10 phút</span></div>
                  <a className="btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68d9013c24fe9c232415a741" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </article>
              <article className="card">
                <div className="thumb">
                  <img src="/nvph-xuatkien.png" alt="Xuất kiện" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                  <div className="thumb-fallback" style={{display:'none'}}><span>Xuất kiện</span></div>
                </div>
                <div className="card-body">
                  <div className="card-title">Xuất kiện</div>
                  <div className="card-meta"><span className="clock"></span><span>10 phút</span></div>
                  <a className="btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68e6a1469653b7435d007932" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </article>
              <article className="card">
                <div className="thumb">
                  <img src="/nvph-atld.png" alt="An toàn lao động" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                  <div className="thumb-fallback" style={{display:'none'}}><span>An toàn lao động</span></div>
                </div>
                <div className="card-body">
                  <div className="card-title">An toàn lao động</div>
                  <div className="card-meta"><span className="clock"></span><span>10 phút</span></div>
                  <a className="btn" href="#">Bắt đầu học</a>
                </div>
              </article>
              <article className="card">
                <div className="thumb">
                  <img src="/nvph-suco.png" alt="Các lỗi/ sự cố thường gặp" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                  <div className="thumb-fallback" style={{display:'none'}}><span>Sự cố</span></div>
                </div>
                <div className="card-body">
                  <div className="card-title">Các lỗi/ sự cố thường gặp</div>
                  <div className="card-meta"><span className="clock"></span><span>10 phút</span></div>
                  <a className="btn" href="#">Bắt đầu học</a>
                </div>
              </article>
            </div>
          </section>
        </main>
        <div className="footer-wrap">
          <footer className="footer">
            <div>
              <h3>Phòng Học tập và Phát triển</h3>
              <p>📍 Trụ sở: Rivera Park, 7/28 Thành Thái, Phường Diên Hồng TP. HCM</p>
              <p>📩 Email: lnd@scommerce.asia</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
