'use client';

export default function KhoiThiTruongPage() {
  return (
    <>
      <style>{`
        .ktt-page{display:flex;flex-direction:column;align-items:flex-start;max-width:1920px;width:100%;min-height:1080px;margin:0 auto;background:#F9F9FC;}
        .ktt-main-content{display:flex;flex-direction:column;align-items:flex-start;padding:32px 64px 0;gap:64px;max-width:1920px;width:100%;}
        .ktt-header-section{display:flex;flex-direction:column;gap:8px;width:100%;}
        .ktt-page-title{font-family:'Montserrat',sans-serif;font-weight:700;font-size:40px;line-height:48px;letter-spacing:-0.8px;color:#1A1C1E;}
        .ktt-page-desc{font-family:'Be Vietnam Pro',sans-serif;font-weight:400;font-size:18px;line-height:28px;color:#5C4037;max-width:1216px;}
        .ktt-section{display:flex;flex-direction:column;gap:16px;width:100%;}
        .ktt-section-border{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 0 8px;border-bottom:1px solid #E5BEB2;width:100%;}
        .ktt-section-title{font-family:'Montserrat',sans-serif;font-weight:800;font-size:32px;line-height:40px;letter-spacing:-0.32px;color:#FF5200;}
        .ktt-section-link{font-family:'Be Vietnam Pro',sans-serif;font-weight:600;font-size:14px;line-height:20px;letter-spacing:0.14px;color:#FF5200;cursor:pointer;text-decoration:none;white-space:nowrap;}
        .ktt-section-link:hover{text-decoration:underline;}
        .ktt-card-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;width:100%;}
        .ktt-card{background:#fff;border:1px solid #E5BEB2;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .2s,transform .2s;}
        .ktt-card:hover{box-shadow:0 8px 24px rgba(255,82,0,.12);transform:translateY(-2px);}
        .ktt-card-thumb{width:100%;height:170px;object-fit:contain;display:block;background:#f5f8ff;}
        .ktt-card-thumb-placeholder{width:100%;height:170px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .ktt-card-body{display:flex;flex-direction:column;justify-content:space-between;padding:16px;flex:1;}
        .ktt-card-title{font-family:'Montserrat',sans-serif;font-weight:600;font-size:18px;line-height:28px;color:#1A1C1E;margin-bottom:8px;}
        .ktt-card-meta{display:flex;flex-direction:row;align-items:center;gap:8px;color:#5c4037;font-size:12px;line-height:16px;font-weight:500;margin-bottom:auto}
        .ktt-clock{width:13px;height:13px;border:1.5px solid #5c4037;border-radius:50%;position:relative;flex:0 0 13px}
        .ktt-clock:before,.ktt-clock:after{content:'';position:absolute;background:#5c4037;left:50%;top:50%;transform-origin:bottom center}
        .ktt-clock:before{width:1.5px;height:4px;transform:translate(-50%,-90%)}
        .ktt-clock:after{width:4px;height:1.5px;transform:translate(-5%,-50%) rotate(45deg)}
        .ktt-card-btn{display:flex;justify-content:center;align-items:center;padding:8px 16px;width:100%;height:36px;background:#009BE0;border-radius:8px;border:none;cursor:pointer;font-family:'Be Vietnam Pro',sans-serif;font-weight:600;font-size:14px;line-height:20px;letter-spacing:0.14px;color:#fff;margin-top:12px;transition:background .2s;text-decoration:none;}
        .ktt-card-btn:hover{background:#0080c0;}
        .ktt-thumb-1{background:linear-gradient(135deg,#003087 0%,#FF5200 100%);}
        .ktt-thumb-2{background:linear-gradient(135deg,#1565C0 0%,#F57C00 100%);}
        .ktt-thumb-3{background:linear-gradient(135deg,#0D47A1 0%,#FF6F00 100%);}
        .ktt-thumb-4{background:linear-gradient(135deg,#01579B 0%,#E65100 100%);}
        .ktt-thumb-5{background:linear-gradient(135deg,#004D40 0%,#FF5200 100%);}
        .ktt-thumb-6{background:linear-gradient(135deg,#1A237E 0%,#BF360C 100%);}
        .ktt-thumb-7{background:linear-gradient(135deg,#311B92 0%,#FF5200 100%);}
        .ktt-thumb-8{background:linear-gradient(135deg,#006064 0%,#FF6D00 100%);}
        .ktt-thumb-badge{position:absolute;top:12px;left:12px;background:rgba(0,0,0,.55);color:#fff;font-family:'Be Vietnam Pro',sans-serif;font-size:10px;font-weight:600;padding:3px 8px;border-radius:4px;letter-spacing:.5px;text-transform:uppercase;}
        .ktt-thumb-person{font-size:48px;margin-top:8px;}
        .ktt-footer-wrap{display:flex;flex-direction:column;align-items:flex-start;padding:24px 0 0;max-width:1920px;width:100%;margin:0 auto;}
        .ktt-footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 96px;max-width:1920px;width:100%;height:125px;background:#F8FAFC;border-top:1px solid #E2E8F0;}
        .ktt-footer-brand{font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#0F172A;margin-bottom:8px;}
        .ktt-footer-info{font-family:'Be Vietnam Pro',sans-serif;font-size:12px;line-height:20px;color:#64748B;}
        .ktt-footer-right{font-family:'Be Vietnam Pro',sans-serif;font-size:12px;color:#94A3B8;}
        @media (max-width: 960px) {
          .ktt-main-content{width:100% !important;padding:0 0 40px 0 !important;gap:0 !important;}
          .ktt-header-section{padding:30px 16px !important;background:#FF5200;position:relative;overflow:hidden;min-height:180px;justify-content:center;}
          .ktt-page-title{font-size:24px !important;line-height:30px !important;color:#fff !important;}
          .ktt-page-desc{font-size:12px !important;line-height:17px !important;color:#fff !important;font-style:italic;max-width:100%;}
          .ktt-section{padding:30px 16px 0 !important;gap:16px !important;}
          .ktt-section-title{font-size:16px !important;line-height:24px !important;border-left:4px solid #FF5200;padding-left:12px !important;color:#181C1E !important;}
          .ktt-card-grid{display:grid !important;grid-template-columns:repeat(2,1fr) !important;gap:12px !important;}
          .ktt-card-thumb,.ktt-card-thumb-placeholder{height:100px !important;}
          .ktt-card-body{padding:12px !important;}
          .ktt-card-title{font-size:14px !important;line-height:20px !important;}
          .ktt-card-btn{height:30px !important;font-size:12px !important;padding:4px 12px !important;}
        }
      `}</style>

      <div className="ktt-page">
        <div className="ktt-main-content">

          {/* HEADER */}
          <div className="ktt-header-section">
            <h1 className="ktt-page-title">Khối Thị trường</h1>
            <p className="ktt-page-desc">Nền tảng kiến thức dành riêng cho những người vận hành tuyến đầu – những chiến binh thị trường không ngừng đổi mới, học hỏi và chinh phục thử thách mỗi ngày.</p>
          </div>

          {/* SECTION 1: Quản lý Khu vực */}
          <div className="ktt-section">
            <div className="ktt-section-border">
              <h2 className="ktt-section-title">Quản lý Khu vực</h2>
            </div>
            <div className="ktt-card-grid">
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/am-quytrinhnvxl.png" alt="Quy trình làm việc NVXL" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-1" style={{display:'none'}}><span className="ktt-thumb-badge">NVXL</span><span className="ktt-thumb-person">👨‍💼</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình làm việc NVXL</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>30 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=693641e1a0840ad458c460e0" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/am-quytrinhnvpttt.png" alt="Quy trình làm việc NVPTTT" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-2" style={{display:'none'}}><span className="ktt-thumb-badge">NVPTTT</span><span className="ktt-thumb-person">🏍️</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình làm việc NVPTTT</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>30 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=6939537e287afe5ae547e753" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/am-nghiphep.png" alt="Quản lý nghỉ phép" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-3" style={{display:'none'}}><span className="ktt-thumb-badge">NGHỈ PHÉP</span><span className="ktt-thumb-person">📋</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quản lý Nghỉ phép</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>30 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=692d85a7be01e485ec6b82d4" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/am-camera.png" alt="Quy định về Camera" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-4" style={{display:'none'}}><span className="ktt-thumb-badge">CAMERA</span><span className="ktt-thumb-person">📷</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy định về Camera</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>30 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=692826a37ee3a500ac6cb00a" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: Nhân viên Xử lý */}
          <div className="ktt-section">
            <div className="ktt-section-border">
              <h2 className="ktt-section-title">Nhân viên Xử lý</h2>
              <a className="ktt-section-link" href="/nvxl">Xem thêm</a>
            </div>
            <div className="ktt-card-grid">
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvxl-nhantai.png" alt="Quy trình nhận tải" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-5" style={{display:'none'}}><span className="ktt-thumb-badge">XỬ LÝ HÀNG HÓA</span><span className="ktt-thumb-person">👩‍🔧</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình nhận tải</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>15 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68e900a07efad2772ebb92fa" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvxl-rakien.png" alt="Quy trình rã kiện" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-6" style={{display:'none'}}><span className="ktt-thumb-badge">XỬ LÝ HÀNG HÓA</span><span className="ktt-thumb-person">🧑‍🔧</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình rã kiện</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>15 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68e902307efad2772ebb9309" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvxl-gandon.jpg" alt="Quy trình gán đơn" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-7" style={{display:'none'}}><span className="ktt-thumb-badge">GÁN ĐƠN</span><span className="ktt-thumb-person">👨‍💻</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình gán đơn</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>15 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68ee1e7dd7c4dcd12328f7e4" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvxl-bankiem.png" alt="Quy trình bắn kiểm" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-8" style={{display:'none'}}><span className="ktt-thumb-badge">BẮN KIỂM</span><span className="ktt-thumb-person">🔍</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình bắn kiểm</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>15 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68e90593b8b314db43127e0e" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: Nhân viên Phát triển Thị trường */}
          <div className="ktt-section">
            <div className="ktt-section-border">
              <h2 className="ktt-section-title">Nhân viên Phát triển Thị trường</h2>
              <a className="ktt-section-link" href="/nvpttt">Xem thêm</a>
            </div>
            <div className="ktt-card-grid">
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvpttt-giaohang.png" alt="Quy trình giao hàng" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-1" style={{display:'none'}}><span className="ktt-thumb-badge">GIAO HÀNG</span><span className="ktt-thumb-person">🏍️</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình giao hàng</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>15 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=691fd68fbda38916fea7eecf" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvpttt-layhang.png" alt="Quy trình lấy hàng" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-2" style={{display:'none'}}><span className="ktt-thumb-badge">LẤY HÀNG</span><span className="ktt-thumb-person">📦</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình lấy hàng</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>15 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=693952417c5bb2a0f156c9cf" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvpttt-pod.png" alt="Quy định về POD" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-3" style={{display:'none'}}><span className="ktt-thumb-badge">POD</span><span className="ktt-thumb-person">📋</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy định về POD</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>10 phút</span></div>
                  <button className="ktt-card-btn">Bắt đầu học</button>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvpttt-checkin.png" alt="Quy trình Check-in" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-4" style={{display:'none'}}><span className="ktt-thumb-badge">CHECK-IN</span><span className="ktt-thumb-person">✅</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình Check-in</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>10 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=691fdcc7bda38916fea7ef15" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: Nhân viên Phân hàng */}
          <div className="ktt-section">
            <div className="ktt-section-border">
              <h2 className="ktt-section-title">Nhân viên Phân hàng Trung tâm Trung chuyển</h2>
              <a className="ktt-section-link" href="/nvph">Xem thêm</a>
            </div>
            <div className="ktt-card-grid">
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvph-noiquy.png" alt="Nội quy làm việc & Kiểm soát an ninh" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-5" style={{display:'none'}}><span className="ktt-thumb-badge">NỘI QUY</span><span className="ktt-thumb-person">🏭</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Nội quy làm việc &amp; Kiểm soát an ninh</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>15 phút</span></div>
                  <button className="ktt-card-btn">Bắt đầu học</button>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvph-nhanhang.png" alt="Quy trình nhận hàng" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-6" style={{display:'none'}}><span className="ktt-thumb-badge">NHẬN HÀNG</span><span className="ktt-thumb-person">📬</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Quy trình nhận hàng</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>15 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68e6a0020175b1e9c535e377" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvph-feeder.png" alt="Rã hàng/Cấp hàng tại Feeder" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-7" style={{display:'none'}}><span className="ktt-thumb-badge">FEEDER</span><span className="ktt-thumb-person">🔄</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">Rã hàng/Cấp hàng tại Feeder</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>10 phút</span></div>
                  <a className="ktt-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=68d8fd20e3e2281132a415f8" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>
              <div className="ktt-card">
                <img className="ktt-card-thumb" src="/nvph-atld.png" alt="An toàn lao động" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="ktt-card-thumb-placeholder ktt-thumb-8" style={{display:'none'}}><span className="ktt-thumb-badge">AN TOÀN</span><span className="ktt-thumb-person">⛑️</span></div>
                <div className="ktt-card-body">
                  <div className="ktt-card-title">An toàn lao động</div>
                  <div className="ktt-card-meta"><span className="ktt-clock"></span><span>10 phút</span></div>
                  <button className="ktt-card-btn">Bắt đầu học</button>
                </div>
              </div>
            </div>
          </div>

        </div>{/* /main-content */}
      </div>{/* /page */}
    </>
  );
}
