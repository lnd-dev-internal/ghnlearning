'use client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GHN Learning - Homepage',
  description: 'Trang chủ GHN Learning & Development Portal',
};

export default function HomepagePage() {
  return (
    <>
      <style>{`
        :root{
          --orange:#FF5200;
          --orange-soft:#FF8A00;
          --yellow:#FBB000;
          --blue:#0099CC;
          --blue-strong:#00AEEF;
          --ink:#1E293B;
          --muted:#64748B;
          --line:#E2E8F0;
          --panel:#F6FAFE;
          --bg:#FFFFFF;
        }
        .hp-hero{position:relative;overflow:hidden;max-width:1920px;width:100%;min-height:710px;margin:0 auto;background:linear-gradient(135deg,#A5E3FB 0%, #0099CC 100%)}
        .hp-hero-grid{position:absolute;top:16px;left:590px;display:grid;grid-template-columns:repeat(10,104px);grid-auto-rows:104px;gap:54px 18px;opacity:.2;pointer-events:none}
        .hp-hero-grid span{border:1px solid #fff;border-radius:8px}
        .hp-hero-grid span:nth-child(4),.hp-hero-grid span:nth-child(24){background:#fff;opacity:.36}
        .hp-hero-inner{position:relative;z-index:1;max-width:1920px;width:100%;min-height:710px;margin:0 auto;padding:48px 48px;display:flex;align-items:center}
        .hp-hero-copy{max-width:1820px;padding:0 0 0 26px;transform:translateY(-6px)}
        .hp-badge{display:inline-flex;align-items:center;min-height:37px;padding:6px 22px;border-radius:9999px;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.3);backdrop-filter:blur(6px);font-size:14px;line-height:18px;letter-spacing:.3px;font-weight:600;color:#006699;text-transform:uppercase}
        .hp-hero-title{max-width:1780px;margin-top:34px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:118px;line-height:.96;color:#fff;letter-spacing:-3px}
        .hp-hero-title .accent{color:var(--orange)}
        .hp-hero-desc{margin-top:30px;max-width:1560px;font-size:28px;line-height:1.5;font-weight:500;color:#006699}
        .hp-section{max-width:1920px;width:100%;margin:0 auto;padding:96px 0;background:#fff}
        .hp-section.alt{background:var(--panel)}
        .hp-container{max-width:1920px;width:100%;margin:0 auto;padding:0 48px}
        .hp-eyebrow{font-size:14px;line-height:18px;font-weight:600;letter-spacing:2.8px;text-transform:uppercase;color:var(--blue);margin-bottom:10px}
        .hp-section-title{font-family:'Montserrat',sans-serif;font-size:54px;line-height:58px;font-weight:800;color:var(--ink)}
        .hp-section-title .highlight{color:var(--orange)}
        .hp-manifesto{width:100%;margin-top:56px;background:var(--panel);border-radius:16px;padding:52px}
        .hp-manifesto-inner{border-left:4px solid var(--blue);padding-left:32px}
        .hp-manifesto p{font-size:30px;line-height:42px;font-style:italic;color:#334155}
        .hp-manifesto em{font-style:italic;color:var(--blue);text-decoration:underline}
        .hp-manifesto strong{color:var(--orange)}
        .hp-feature-grid{width:100%;margin-top:48px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
        .hp-feature-card{background:#fff;border:1px solid #F1F5F9;border-radius:16px;overflow:hidden;box-shadow:0 1px 2px rgba(0,0,0,.05)}
        .hp-feature-media{height:320px;overflow:hidden}
        .hp-feature-media img{width:100%;height:100%;object-fit:cover}
        .hp-feature-media.placeholder{background:var(--orange-soft);display:flex;align-items:center;justify-content:center}
        .hp-feature-media.placeholder span{font-size:22px;line-height:30px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:rgba(255,255,255,.6)}
        .hp-feature-body{padding:40px;display:flex;flex-direction:column;gap:18px}
        .hp-feature-kicker{font-size:24px;line-height:32px;font-weight:600;text-transform:uppercase;color:var(--blue)}
        .hp-feature-lead{font-size:30px;line-height:42px;font-weight:600;color:var(--ink)}
        .hp-feature-note{font-size:18px;line-height:30px;font-style:italic;color:var(--muted)}
        .hp-program-head{width:100%;margin-bottom:56px}
        .hp-program-rule{width:128px;height:4px;background:var(--blue);margin-top:8px}
        .hp-program-grid{width:100%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
        .hp-program-card{background:#fff;border:1px solid #F1F5F9;border-radius:16px;overflow:hidden;box-shadow:0 1px 2px rgba(0,0,0,.05)}
        .hp-program-top{height:108px;padding:28px 32px;display:flex;align-items:center;justify-content:space-between;color:#fff}
        .hp-program-top.orange{background:var(--orange-soft)}
        .hp-program-top.yellow{background:var(--yellow)}
        .hp-program-top.blue{background:var(--blue)}
        .hp-program-top.cyan{background:var(--blue-strong)}
        .hp-program-no{font-family:'Montserrat',sans-serif;font-size:42px;line-height:48px;font-weight:900;opacity:.4}
        .hp-program-name{font-family:'Montserrat',sans-serif;font-size:22px;line-height:28px;font-weight:700;letter-spacing:1px;text-transform:uppercase;text-align:right}
        .hp-program-body{padding:36px 40px 40px}
        .hp-program-list{list-style:none;display:flex;flex-direction:column;gap:20px}
        .hp-program-list li{position:relative;padding-left:22px;font-size:18px;line-height:30px;color:#475569}
        .hp-program-list li::before{content:"\\2022";position:absolute;left:0;top:0;color:var(--orange-soft)}
        .hp-program-list strong{font-weight:600;color:var(--ink)}
        @media (max-width: 960px){
          .hp-hero-grid{display:none}
          .hp-hero-inner{min-height:auto;padding:40px 20px 48px}
          .hp-hero-title{font-size:52px;line-height:52px}
          .hp-container{padding:0 20px}
          .hp-feature-grid,.hp-program-grid{grid-template-columns:1fr}
        }
        @media (max-width: 640px){
          .hp-hero-title{font-size:40px;line-height:42px}
          .hp-hero-desc{font-size:15px;line-height:24px}
          .hp-section{padding:72px 0}
          .hp-manifesto{padding:24px}
          .hp-manifesto p{font-size:18px;line-height:28px}
          .hp-feature-body,.hp-program-body{padding:24px}
        }
      `}</style>

      <main>
        <section className="hp-hero" style={{background: 'none', minHeight: 'auto', padding: '0'}}>
          <img src="/header-bg.jpg" alt="GHN Learning Banner" style={{width: '100%', display: 'block', objectFit: 'cover'}} />
        </section>

        <section className="hp-section">
          <div className="hp-container">
            <div className="hp-eyebrow">Giá trị cốt lõi</div>
            <h2 className="hp-section-title">Tuyên Ngôn &amp; <span className="highlight">Sứ Mệnh</span></h2>

            <div className="hp-manifesto">
              <div className="hp-manifesto-inner">
                <p>&ldquo;Một tổ chức chỉ thực sự <strong>phát triển bền vững</strong> khi mỗi cá nhân được <strong>trao quyền</strong>, được <strong>ghi nhận</strong> xứng đáng và có cơ hội <strong>phát triển</strong> tối đa tiềm năng của mình. Đây chính là nền tảng của nguyên tắc <em>High Performing Organization</em> mà chúng ta không ngừng hoàn thiện.&rdquo;</p>
              </div>
            </div>

            <div className="hp-feature-grid">
              <article className="hp-feature-card">
                <div className="hp-feature-media">
                  <img src="/home-sumenh.jpg" alt="Su menh GHN Learning" />
                </div>
                <div className="hp-feature-body">
                  <div className="hp-feature-kicker">Sứ mệnh</div>
                  <div className="hp-feature-lead">Nâng cao năng lực đội ngũ để thích ứng với sự thay đổi của ngành logistics và hỗ trợ mở rộng thị trường</div>
                  <div className="hp-feature-note">L&amp;D đóng vai trò tiên phong trong việc trang bị kỹ năng mới, tư duy đổi mới cho nhân viên để họ tự tin đối mặt với thách thức trong môi trường logistics đầy biến động.</div>
                </div>
              </article>

              <article className="hp-feature-card">
                <div className="hp-feature-media">
                  <img src="/home-muctieu.jpg" alt="Muc tieu chien luoc GHN Learning" />
                </div>
                <div className="hp-feature-body">
                  <div className="hp-feature-kicker">Mục tiêu chiến lược</div>
                  <div className="hp-feature-lead">Xây dựng văn hóa học tập liên tục và tối ưu hóa hiệu suất vận hành thông qua đào tạo chuẩn quy trình</div>
                  <div className="hp-feature-note">Tạo ra môi trường nơi mỗi nhân viên đều có cơ hội học hỏi và phát triển, từ đó nâng cao chất lượng dịch vụ và hiệu quả hoạt động của toàn hệ thống GHN.</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="hp-section alt">
          <div className="hp-container">
            <div className="hp-program-head">
              <div className="hp-eyebrow">Dự án &amp; Sản phẩm</div>
              <h2 className="hp-section-title">4 Yếu tố cốt lõi</h2>
              <div className="hp-program-rule"></div>
            </div>

            <div className="hp-program-grid">
              <article className="hp-program-card">
                <div className="hp-program-top orange">
                  <div className="hp-program-no">01</div>
                  <div className="hp-program-name">AI Literacy</div>
                </div>
                <div className="hp-program-body">
                  <ul className="hp-program-list">
                    <li>Tổ chức chương trình, workshop đào tạo lan tỏa, khai mở - ứng dụng AI trở thành &quot;trợ lý đắc lực&quot; trong toàn Công ty.</li>
                  </ul>
                </div>
              </article>

              <article className="hp-program-card">
                <div className="hp-program-top yellow">
                  <div className="hp-program-no">02</div>
                  <div className="hp-program-name">Automating Onboarding</div>
                </div>
                <div className="hp-program-body">
                  <ul className="hp-program-list">
                    <li><strong>Hệ thống Tân Thủ</strong> - lộ trình bài học từng ngày, hiển thị trực tiếp trên App Tài xế giúp NV mới nắm vững quy trình.</li>
                    <li><strong>Trợ lý Vận hành 24/7</strong> (Botchat): cung cấp giải pháp tức thời cho câu hỏi về quy trình làm việc.</li>
                  </ul>
                </div>
              </article>

              <article className="hp-program-card">
                <div className="hp-program-top blue">
                  <div className="hp-program-no">03</div>
                  <div className="hp-program-name">Technical Skills</div>
                </div>
                <div className="hp-program-body">
                  <ul className="hp-program-list">
                    <li>Xây dựng khung chương trình đào tạo cho AM, hệ thống hóa kiến thức &amp; nâng cao năng lực vận hành.</li>
                    <li>Chương trình đào tạo cho Field Sale, Telesale... góp phần tăng trưởng doanh thu GHN.</li>
                    <li>Các chương trình on-demands theo yêu cầu từ các Khối/Phòng ban.</li>
                  </ul>
                </div>
              </article>

              <article className="hp-program-card">
                <div className="hp-program-top cyan">
                  <div className="hp-program-no">04</div>
                  <div className="hp-program-name">Managerial Skills</div>
                </div>
                <div className="hp-program-body">
                  <ul className="hp-program-list">
                    <li>Làm mới năng lực - Nâng tầm kỹ năng cho 100% Quản lý mỗi năm, như Quản lý Hiệu quả công việc, Tuyển dụng - Giữ chân Nhân viên...</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
