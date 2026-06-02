'use client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Khối Văn Phòng – GHN L&D Portal',
  description: 'Nâng cao năng suất làm việc với các kỹ năng thiết yếu dành riêng cho Khối Văn Phòng tại GHN',
};

export default function VanPhongPage() {
  return (
    <>
      <style>{`
        .vp-page{display:flex;flex-direction:column;max-width:1920px;width:100%;min-height:1080px;margin:0 auto;background:#F9F9FC;}
        .vp-main-content{display:flex;flex-direction:column;align-items:flex-start;padding:32px 64px 0;gap:64px;max-width:1920px;width:100%;}
        .vp-header-section{display:flex;flex-direction:column;gap:8px;width:100%;}
        .vp-page-title{font-family:'Montserrat',sans-serif;font-weight:700;font-size:40px;line-height:48px;letter-spacing:-0.8px;color:#1A1C1E;}
        .vp-page-desc{font-family:'Be Vietnam Pro',sans-serif;font-weight:400;font-size:18px;line-height:28px;color:#5C4037;}
        .vp-section{display:flex;flex-direction:column;gap:16px;width:100%;}
        .vp-section-border{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 0 8px;border-bottom:1px solid #E5BEB2;}
        .vp-section-title{font-family:'Montserrat',sans-serif;font-weight:800;font-size:32px;line-height:40px;letter-spacing:-0.32px;color:#FF5200;}
        .vp-section-link{font-family:'Be Vietnam Pro',sans-serif;font-weight:600;font-size:14px;line-height:20px;letter-spacing:0.14px;color:#FF5200;text-decoration:none;}
        .vp-section-link:hover{text-decoration:underline;}
        .vp-card-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;width:100%;}
        .vp-card-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;width:100%;}
        .vp-card{background:#fff;border:1px solid #E5BEB2;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .2s,transform .2s;}
        .vp-card:hover{box-shadow:0 8px 24px rgba(255,82,0,.12);transform:translateY(-2px);}
        .vp-card-thumb{width:100%;height:170px;object-fit:contain;display:block;background:#f5f8ff;}
        .vp-card-thumb-placeholder{width:100%;height:170px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
        .vp-card-body{display:flex;flex-direction:column;justify-content:space-between;padding:16px;flex:1;}
        .vp-card-title{font-family:'Montserrat',sans-serif;font-weight:600;font-size:18px;line-height:28px;color:#1A1C1E;margin-bottom:8px;}
        .vp-card-meta{display:flex;flex-direction:row;align-items:center;gap:8px;color:#5c4037;font-size:12px;line-height:16px;font-weight:500;margin-bottom:auto}
        .vp-clock{width:13px;height:13px;border:1.5px solid #5c4037;border-radius:50%;position:relative;flex:0 0 13px}
        .vp-clock:before,.vp-clock:after{content:'';position:absolute;background:#5c4037;left:50%;top:50%;transform-origin:bottom center}
        .vp-clock:before{width:1.5px;height:4px;transform:translate(-50%,-90%)}
        .vp-clock:after{width:4px;height:1.5px;transform:translate(-5%,-50%) rotate(45deg)}
        .vp-card-btn{display:flex;justify-content:center;align-items:center;padding:8px 16px;width:100%;height:36px;background:#009BE0;border-radius:8px;border:none;cursor:pointer;font-family:'Be Vietnam Pro',sans-serif;font-weight:600;font-size:14px;line-height:20px;letter-spacing:0.14px;color:#fff;margin-top:12px;transition:background .2s;text-decoration:none;}
        .vp-card-btn:hover{background:#0080c0;}
        .vp-thumb-a{background:linear-gradient(135deg,#003087 0%,#FF5200 100%);}
        .vp-thumb-b{background:linear-gradient(135deg,#1565C0 0%,#F57C00 100%);}
        .vp-thumb-c{background:linear-gradient(135deg,#0D47A1 0%,#FF6F00 100%);}
        .vp-thumb-d{background:linear-gradient(135deg,#4A148C 0%,#FF5200 100%);}
        .vp-thumb-e{background:linear-gradient(135deg,#004D40 0%,#FF5200 100%);}
        .vp-thumb-f{background:linear-gradient(135deg,#B71C1C 0%,#FF8F00 100%);}
        .vp-thumb-g{background:linear-gradient(135deg,#006064 0%,#FF6D00 100%);}
        .vp-thumb-h{background:linear-gradient(135deg,#1A237E 0%,#BF360C 100%);}
        .vp-thumb-i{background:linear-gradient(135deg,#01579B 0%,#E65100 100%);}
        .vp-thumb-j{background:linear-gradient(135deg,#311B92 0%,#FF5200 100%);}
        .vp-thumb-k{background:linear-gradient(135deg,#33691E 0%,#F57F17 100%);}
        .vp-thumb-badge{position:absolute;top:12px;left:12px;background:rgba(0,0,0,.55);color:#fff;font-family:'Be Vietnam Pro',sans-serif;font-size:10px;font-weight:600;padding:3px 8px;border-radius:4px;letter-spacing:.5px;text-transform:uppercase;}
        .vp-thumb-person{font-size:52px;margin-top:8px;}
        .vp-footer-wrap{display:flex;flex-direction:column;align-items:flex-start;padding:24px 0 0;max-width:1920px;width:100%;margin:0 auto;margin-top:64px;}
        .vp-footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 96px;max-width:1920px;width:100%;height:125px;background:#F8FAFC;border-top:1px solid #E2E8F0;}
        .vp-footer-brand{font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;color:#0F172A;margin-bottom:8px;}
        .vp-footer-info{font-family:'Be Vietnam Pro',sans-serif;font-size:12px;line-height:20px;color:#64748B;}
        .vp-footer-right{font-family:'Be Vietnam Pro',sans-serif;font-size:12px;color:#94A3B8;}
        @media (max-width: 960px) {
          .vp-main-content{width:100% !important;padding:0 0 40px 0 !important;gap:0 !important;}
          .vp-header-section{padding:30px 16px !important;background:#FF5200;position:relative;overflow:hidden;min-height:180px;justify-content:center;}
          .vp-page-title{font-size:24px !important;line-height:30px !important;color:#fff !important;}
          .vp-page-desc{font-size:12px !important;line-height:17px !important;color:#fff !important;font-style:italic;max-width:100%;}
          .vp-section{padding:30px 16px 0 !important;gap:16px !important;}
          .vp-section-title{font-size:16px !important;line-height:24px !important;border-left:4px solid #FF5200;padding-left:12px !important;color:#181C1E !important;}
          .vp-card-grid-4,.vp-card-grid-3{display:grid !important;grid-template-columns:repeat(2,1fr) !important;gap:12px !important;}
          .vp-card-thumb,.vp-card-thumb-placeholder{height:100px !important;}
          .vp-card-body{padding:12px !important;}
          .vp-card-title{font-size:14px !important;line-height:20px !important;}
          .vp-card-btn{height:30px !important;font-size:12px !important;padding:4px 12px !important;}
        }
      `}</style>

      <div className="vp-page">
        <div className="vp-main-content">

          {/* HEADER */}
          <div className="vp-header-section">
            <h1 className="vp-page-title">Khối Văn Phòng</h1>
            <p className="vp-page-desc">Nâng cao năng suất làm việc với các kỹ năng thiết yếu dành riêng cho Khối Văn Phòng tại GHN</p>
          </div>

          {/* SECTION 1: Chương trình Hội nhập */}
          <div className="vp-section">
            <div className="vp-section-border">
              <h2 className="vp-section-title">Chương trình Hội nhập</h2>
              <a className="vp-section-link" href="/newbie">Xem thêm</a>
            </div>
            <div className="vp-card-grid-4">

              {/* Card 1 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/newbie-bai1.png" alt="Bài 1: Chào bạn mới!" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-a" style={{display:'none'}}><span className="vp-thumb-badge">HỘI NHẬP</span><span className="vp-thumb-person">👋</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Bài 1: Chào bạn mới!</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>20 phút</span></div>
                  <a className="vp-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=69080351612f3364be3ed2a6" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/newbie-bai2.png" alt="Bài 2: An tâm làm việc" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-b" style={{display:'none'}}><span className="vp-thumb-badge">HỘI NHẬP</span><span className="vp-thumb-person">🛡️</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Bài 2: An tâm làm việc</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>20 phút</span></div>
                  <a className="vp-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=6899bb45b13c07557c397aa6" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/newbie-bai3.png" alt="Bài 3: Bật mí bí mật vận hành" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-c" style={{display:'none'}}><span className="vp-thumb-badge">HỘI NHẬP</span><span className="vp-thumb-person">🔑</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Bài 3: Bật mí bí mật vận hành GHN</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>20 phút</span></div>
                  <a className="vp-card-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=6848fc23e08b39b3a21dfbde" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 2: Nhân viên Chăm sóc Khách hàng */}
          <div className="vp-section">
            <div className="vp-section-border">
              <h2 className="vp-section-title">Nhân viên Chăm sóc Khách hàng</h2>
              <a className="vp-section-link" href="/cskh">Xem thêm</a>
            </div>
            <div className="vp-card-grid-4">

              {/* Card 1 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/cskh-quytrinhxulydon.png" alt="Quy trình xử lý đơn hàng" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-d" style={{display:'none'}}><span className="vp-thumb-badge">XỬ LÝ ĐƠN HÀNG</span><span className="vp-thumb-person">📦</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Quy trình xử lý đơn hàng</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>15 phút</span></div>
                  <a className="vp-card-btn" href="https://drive.google.com/file/d/1iApul0Bc6JOTPesodqZKmDdntXltX8FN/view" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/cskh-trangthaidon.png" alt="Trạng thái đơn hàng thường gặp" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-e" style={{display:'none'}}><span className="vp-thumb-badge">TRẠNG THÁI ĐH</span><span className="vp-thumb-person">🔄</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Trạng thái đơn hàng thường gặp</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>15 phút</span></div>
                  <a className="vp-card-btn" href="https://drive.google.com/file/d/1__DNopTv-Pq4sBuORsAblZu7bPcoH_kp/view" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/cskh-hethong.png" alt="Hệ thống Chăm sóc Khách hàng" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-f" style={{display:'none'}}><span className="vp-thumb-badge">CHĂM SÓC KH</span><span className="vp-thumb-person">🎧</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Hệ thống Chăm sóc Khách hàng</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>30 phút</span></div>
                  <a className="vp-card-btn" href="https://drive.google.com/file/d/1LPsR8cJed6KnzPVIvY7j2tBhvmsMcoEu/view" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/cskh-phieutuvan.png" alt="Xử lý Phiếu Tư vấn" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-g" style={{display:'none'}}><span className="vp-thumb-badge">TƯ VẤN</span><span className="vp-thumb-person">📋</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Xử lý Phiếu Tư vấn</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>10 phút</span></div>
                  <a className="vp-card-btn" href="https://drive.google.com/file/d/1JBJPMNL5RC6ph3z2euiJ6Stj6vGW2edQ/view" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 3: Nhân viên Field Sale */}
          <div className="vp-section">
            <div className="vp-section-border">
              <h2 className="vp-section-title">Nhân viên Field Sale</h2>
              <a className="vp-section-link" href="/fieldsale">Xem thêm</a>
            </div>
            <div className="vp-card-grid-4">

              {/* Card 1 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/FS-sanpham.png" alt="Sản phẩm Thị trường SME" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-h" style={{display:'none'}}><span className="vp-thumb-badge">SẢN PHẨM SME</span><span className="vp-thumb-person">🏬</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Sản phẩm Thị trường SME</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>15 phút</span></div>
                  <a className="vp-card-btn" href="https://drive.google.com/file/d/1lhavzeFcbgINbBQyKOxmaK6sKdXjQ5-j/view" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/FS-vanhanh.png" alt="Quy trình Vận hành GHN" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-i" style={{display:'none'}}><span className="vp-thumb-badge">VẬN HÀNH GHN</span><span className="vp-thumb-person">🚚</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Quy trình Vận hành GHN</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>15 phút</span></div>
                  <a className="vp-card-btn" href="https://drive.google.com/file/d/1feTRZ9VLwPvY5rxGMVfEYdGZlrmRPR98/view" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/FS-phanmem.png" alt="Phần mềm Quản lý bán hàng" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-j" style={{display:'none'}}><span className="vp-thumb-badge">CÔNG CỤ BÁN HÀNG</span><span className="vp-thumb-person">💻</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Công cụ &amp; Phần mềm Quản lý bán hàng</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>15 phút</span></div>
                  <a className="vp-card-btn" href="https://drive.google.com/file/d/1jd5IXJNwBwEYAJ0Wdn16LEDhbZfY_1V7/view" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="vp-card">
                <img className="vp-card-thumb" src="/FS-banhang.png" alt="Kỹ năng Bán hàng thực địa" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display='flex'; }} />
                <div className="vp-card-thumb-placeholder vp-thumb-k" style={{display:'none'}}><span className="vp-thumb-badge">KỸ NĂNG BÁN HÀNG</span><span className="vp-thumb-person">🎯</span></div>
                <div className="vp-card-body">
                  <div className="vp-card-title">Kỹ năng Bán hàng thực địa</div>
                  <div className="vp-card-meta"><span className="vp-clock"></span><span>15 phút</span></div>
                  <a className="vp-card-btn" href="https://drive.google.com/file/d/1eYSpkyoCJ2BhKnNsF469PjsOWeGInr3Y/view" target="_blank" rel="noopener noreferrer">Bắt đầu học</a>
                </div>
              </div>

            </div>
          </div>

        </div>{/* /main-content */}
      </div>{/* /page */}
    </>
  );
}
