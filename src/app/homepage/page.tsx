'use client';

export default function HomepagePage() {
  return (
    <>
      <style>{`
        :root {
          --orange: #FF5200;
          --orange-soft: #FF8A00;
          --yellow: #FBB000;
          --blue: #0099CC;
          --blue-strong: #00AEEF;
          --ink: #1E293B;
          --muted: #64748B;
          --line: #E2E8F0;
          --panel: #F6FAFE;
          --bg: #FFFFFF;
        }

        /* ── Desktop View Styles ── */
        .desktop-view {
          display: block;
        }
        .mobile-view {
          display: none;
        }

        .hp-hero {
          position: relative;
          overflow: hidden;
          max-width: 1920px;
          width: 100%;
          min-height: 710px;
          margin: 0 auto;
          background: linear-gradient(135deg, #A5E3FB 0%, #0099CC 100%);
        }
        .hp-hero-grid {
          position: absolute;
          top: 16px;
          left: 590px;
          display: grid;
          grid-template-columns: repeat(10, 104px);
          grid-auto-rows: 104px;
          gap: 54px 18px;
          opacity: .2;
          pointer-events: none;
        }
        .hp-hero-grid span {
          border: 1px solid #fff;
          border-radius: 8px;
        }
        .hp-hero-grid span:nth-child(4),
        .hp-hero-grid span:nth-child(24) {
          background: #fff;
          opacity: .36;
        }
        .hp-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1920px;
          width: 100%;
          min-height: 710px;
          margin: 0 auto;
          padding: 48px 48px;
          display: flex;
          align-items: center;
        }
        .hp-hero-copy {
          max-width: 1820px;
          padding: 0 0 0 26px;
          transform: translateY(-6px);
        }
        .hp-badge {
          display: inline-flex;
          align-items: center;
          min-height: 37px;
          padding: 6px 22px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, .2);
          border: 1px solid rgba(255, 255, 255, .3);
          backdrop-filter: blur(6px);
          font-size: 14px;
          line-height: 18px;
          letter-spacing: .3px;
          font-weight: 600;
          color: #006699;
          text-transform: uppercase;
        }
        .hp-hero-title {
          max-width: 1780px;
          margin-top: 34px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 118px;
          line-height: .96;
          color: #fff;
          letter-spacing: -3px;
        }
        .hp-hero-title .accent {
          color: var(--orange);
        }
        .hp-hero-desc {
          margin-top: 30px;
          max-width: 1560px;
          font-size: 28px;
          line-height: 1.5;
          font-weight: 500;
          color: #006699;
        }
        .hp-section {
          max-width: 1920px;
          width: 100%;
          margin: 0 auto;
          padding: 96px 0;
          background: #fff;
        }
        .hp-section.alt {
          background: var(--panel);
        }
        .hp-container {
          max-width: 1920px;
          width: 100%;
          margin: 0 auto;
          padding: 0 48px;
        }
        .hp-eyebrow {
          font-size: 14px;
          line-height: 18px;
          font-weight: 600;
          letter-spacing: 2.8px;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 10px;
        }
        .hp-section-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 54px;
          line-height: 58px;
          font-weight: 800;
          color: var(--ink);
        }
        .hp-section-title .highlight {
          color: var(--orange);
        }
        .hp-manifesto {
          width: 100%;
          margin-top: 56px;
          background: var(--panel);
          border-radius: 16px;
          padding: 52px;
        }
        .hp-manifesto-inner {
          border-left: 4px solid var(--blue);
          padding-left: 32px;
        }
        .hp-manifesto p {
          font-size: 30px;
          line-height: 42px;
          font-style: italic;
          color: #334155;
        }
        .hp-manifesto em {
          font-style: italic;
          color: var(--blue);
          text-decoration: underline;
        }
        .hp-manifesto strong {
          color: var(--orange);
        }
        .hp-feature-grid {
          width: 100%;
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        .hp-feature-card {
          background: #fff;
          border: 1px solid #F1F5F9;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
        }
        .hp-feature-media {
          height: 320px;
          overflow: hidden;
        }
        .hp-feature-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hp-feature-body {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .hp-feature-kicker {
          font-size: 24px;
          line-height: 32px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--blue);
        }
        .hp-feature-lead {
          font-size: 30px;
          line-height: 42px;
          font-weight: 600;
          color: var(--ink);
        }
        .hp-feature-note {
          font-size: 18px;
          line-height: 30px;
          font-style: italic;
          color: var(--muted);
        }
        .hp-program-head {
          width: 100%;
          margin-bottom: 56px;
        }
        .hp-program-rule {
          width: 128px;
          height: 4px;
          background: var(--blue);
          margin-top: 8px;
        }
        .hp-program-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        .hp-program-card {
          background: #fff;
          border: 1px solid #F1F5F9;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
        }
        .hp-program-top {
          height: 108px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fff;
        }
        .hp-program-top.orange {
          background: var(--orange-soft);
        }
        .hp-program-top.yellow {
          background: var(--yellow);
        }
        .hp-program-top.blue {
          background: var(--blue);
        }
        .hp-program-top.cyan {
          background: var(--blue-strong);
        }
        .hp-program-no {
          font-family: 'Montserrat', sans-serif;
          font-size: 42px;
          line-height: 48px;
          font-weight: 900;
          opacity: .4;
        }
        .hp-program-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 22px;
          line-height: 28px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: right;
        }
        .hp-program-body {
          padding: 36px 40px 40px;
        }
        .hp-program-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .hp-program-list li {
          position: relative;
          padding-left: 22px;
          font-size: 18px;
          line-height: 30px;
          color: #475569;
        }
        .hp-program-list li::before {
          content: "\\2022";
          position: absolute;
          left: 0;
          top: 0;
          color: var(--orange-soft);
        }
        .hp-program-list strong {
          font-weight: 600;
          color: var(--ink);
        }

        /* ── Mobile View Styles (Active under 1024px to match Navbar breakpoint) ── */
        @media (max-width: 1024px) {
          .desktop-view {
            display: none !important;
          }
          .mobile-view {
            display: block !important;
          }

          .mobile-view-body {
            margin: 0;
            padding: 0;
            width: 100%;
            background: #F7FAFC;
            font-family: 'Exo 2', sans-serif;
            overflow-x: hidden;
          }

          .mobile-view .main {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            width: 100%;
          }

          .mobile-view .hero {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            width: 100%;
            box-sizing: border-box;
            background: linear-gradient(135.97deg, #00A9E0 0%, #0077C8 100%);
          }

          .mobile-view .stats-grid {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 40px 20px;
            width: 100%;
            background: #FFFFFF;
            box-sizing: border-box;
          }

          .mobile-view .eyebrow {
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 10px;
            line-height: 15px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: rgba(0, 155, 224, 0.88);
            margin-bottom: 4px;
          }

          .mobile-view .section-h2 {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 26px;
            line-height: 35px;
            color: #181C1E;
            margin-bottom: 24px;
            margin-top: 0;
          }
          .mobile-view .section-h2 span {
            color: #FF5200;
          }

          .mobile-view .mission-block {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 16px;
            width: 100%;
            background: #EBF8FF;
            border-left: 4px solid #006493;
            border-radius: 0px 8px 8px 0px;
            margin-bottom: 24px;
          }

          .mobile-view .mission-text {
            font-family: 'Exo 2', sans-serif;
            font-style: italic;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #181C1E;
          }
          .mobile-view .mission-text strong {
            color: #FF5200;
          }
          .mobile-view .mission-text span.blue {
            color: #009BE0;
            text-decoration: underline;
          }

          .mobile-view .card-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
          }

          .mobile-view .card {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 16px;
            gap: 8px;
            width: 100%;
            background: #F1F4F6;
            border: 1px solid #E5BEB2;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          }

          .mobile-view .card-header {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
          }

          .mobile-view .card-icon {
            width: 20px;
            height: 20px;
            fill: #009BE0;
          }

          .mobile-view .card-title {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 28px;
            color: #009BE0;
          }

          .mobile-view .card-desc {
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            color: #5C4037;
          }

          .mobile-view .core-values {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 40px 20px;
            gap: 24px;
            width: 100%;
            background: #F7FAFC;
            box-sizing: border-box;
          }

          .mobile-view .cv-card {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px 0px 16px;
            gap: 16px;
            width: 100%;
            background: #FFFFFF;
            border: 1px solid #E5BEB2;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            overflow: hidden;
          }

          .mobile-view .cv-header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 14px;
            width: 100%;
            box-sizing: border-box;
          }

          .mobile-view .cv-header.c1 { background: #D24200; }
          .mobile-view .cv-header.c2 { background: #FDB022; }
          .mobile-view .cv-header.c3 { background: #006493; }
          .mobile-view .cv-header.c4 { background: #41B7FE; }

          .mobile-view .cv-no {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
            color: #FFFFFF;
            opacity: 0.5;
          }

          .mobile-view .cv-title {
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            color: #FFFFFF;
          }

          .mobile-view .cv-list {
            display: flex;
            flex-direction: column;
            padding: 0 16px;
            gap: 16px;
            width: 100%;
            box-sizing: border-box;
          }

          .mobile-view .cv-item {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 8px;
          }

          .mobile-view .cv-bullet {
            margin-top: 8px;
            width: 6px;
            height: 6px;
            border-radius: 12px;
            flex-shrink: 0;
          }
          .mobile-view .cv-bullet.c1 { background: #D24200; }
          .mobile-view .cv-bullet.c2 { background: #FDB022; }
          .mobile-view .cv-bullet.c3 { background: #006493; }
          .mobile-view .cv-bullet.c4 { background: #41B7FE; }

          .mobile-view .cv-text {
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #181C1E;
          }
          .mobile-view .cv-text strong {
            font-weight: 700;
          }

          .mobile-view .footer {
            box-sizing: border-box;
            width: 100%;
            background: #FFFFFF;
            border-top: 1px solid #EBEEF0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 24px 20px;
            gap: 12px;
          }

          .mobile-view .footer-title {
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            color: #181C1E;
          }

          .mobile-view .footer-info {
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 16px;
            color: #64748B;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .mobile-view .footer-copy {
            width: 100%;
            text-align: center;
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 16px;
            color: #64748B;
            opacity: 0.6;
            margin-top: 16px;
          }
        }
      `}</style>

      {/* ── Desktop View ── */}
      <div className="desktop-view">
        <main>
          <section className="hp-hero" style={{ background: 'none', minHeight: 'auto', padding: '0' }}>
            <img src="/header-bg.jpg" alt="GHN Learning Banner" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
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
      </div>

      {/* ── Mobile View ── */}
      <div className="mobile-view mobile-view-body">
        <main className="main">
          <section className="hero" style={{ background: 'none', minHeight: 'auto', padding: '0' }}>
            <img src="/header-bg.jpg" alt="GHN Learning Banner" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
          </section>

          <section className="stats-grid">
            <div className="eyebrow">Giá trị cốt lõi</div>
            <h2 className="section-h2">Tuyên Ngôn &amp; <span>Sứ Mệnh</span></h2>

            <div className="mission-block">
              <div className="mission-text">
                &ldquo;Một tổ chức chỉ thực sự <strong>phát triển bền vững</strong> khi mỗi cá nhân được <strong>trao quyền</strong>, được <strong>ghi nhận</strong> xứng đáng và có cơ hội <strong>phát triển</strong> tối đa tiềm năng của mình. Đây chính là nền tảng của nguyên tắc <span className="blue">High Performing Organization</span> mà chúng ta không ngừng hoàn thiện.&rdquo;
              </div>
            </div>

            <div className="card-container">
              <div className="card">
                <div className="card-header">
                  <svg className="card-icon" viewBox="0 0 24 24">
                    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
                  </svg>
                  <div className="card-title">Sứ Mệnh</div>
                </div>
                <div className="card-desc">Nâng cao năng lực đội ngũ để thích ứng với sự thay đổi của ngành logistics và hỗ trợ mở rộng thị trường L&amp;D đóng vai trò tiên phong trong việc trang bị kỹ năng mới, tư duy đổi mới cho nhân viên để họ tự tin đối mặt với thách thức trong môi trường logistics đầy biến động.</div>
              </div>

              <div className="card">
                <div className="card-header">
                  <svg className="card-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  <div className="card-title">Mục Tiêu Chiến Lược</div>
                </div>
                <div className="card-desc">Xây dựng văn hóa học tập liên tục và tối ưu hóa hiệu suất vận hành thông qua đào tạo chuẩn quy trình Tạo ra môi trường nơi mỗi nhân viên đều có cơ hội học hỏi và phát triển, từ đó nâng cao chất lượng dịch vụ và hiệu quả hoạt động của toàn hệ thống GHN.</div>
              </div>
            </div>
          </section>

          <section className="core-values">
            <div>
              <div className="eyebrow">DỰ ÁN &amp; SẢN PHẨM</div>
              <h2 className="section-h2" style={{ fontSize: '28px', marginBottom: 0 }}>4 Yếu tố cốt lõi</h2>
            </div>

            <div className="cv-card">
              <div className="cv-header c1">
                <div className="cv-no">01</div>
                <div className="cv-title">AI LITERACY</div>
              </div>
              <div className="cv-list">
                <div className="cv-item">
                  <div className="cv-bullet c1"></div>
                  <div className="cv-text">Tổ chức chương trình, workshop đào tạo lan tỏa, khai mở ứng dụng AI trở thành <strong>&quot;trợ lý đắc lực&quot;</strong> trong toàn Công ty.</div>
                </div>
              </div>
            </div>

            <div className="cv-card">
              <div className="cv-header c2">
                <div className="cv-no">02</div>
                <div className="cv-title">AUTOMATING ONBOARDING</div>
              </div>
              <div className="cv-list">
                <div className="cv-item">
                  <div className="cv-bullet c2"></div>
                  <div className="cv-text"><strong>Hệ thống Tân Thủ:</strong> Lộ trình bài học từng ngày trên App giúp nhân viên mới nắm vững quy trình.</div>
                </div>
                <div className="cv-item">
                  <div className="cv-bullet c2"></div>
                  <div className="cv-text"><strong>Trợ lý Vận hành 24/7:</strong> Cung cấp giải pháp tức thời cho mọi câu hỏi về vận hành.</div>
                </div>
              </div>
            </div>

            <div className="cv-card">
              <div className="cv-header c3">
                <div className="cv-no">03</div>
                <div className="cv-title">TECHNICAL SKILLS</div>
              </div>
              <div className="cv-list">
                <div className="cv-item">
                  <div className="cv-bullet c3"></div>
                  <div className="cv-text">Xây dựng Khung chương trình đào tạo cho AM, hệ thống hóa kiến thức &amp; nâng cao năng lực vận hành.</div>
                </div>
                <div className="cv-item">
                  <div className="cv-bullet c3"></div>
                  <div className="cv-text">Chương trình đào tạo cho Field Sale, Telesale... góp phần tăng trưởng doanh thu GHN.</div>
                </div>
              </div>
            </div>

            <div className="cv-card">
              <div className="cv-header c4">
                <div className="cv-no">04</div>
                <div className="cv-title">MANAGERIAL SKILLS</div>
              </div>
              <div className="cv-list">
                <div className="cv-item">
                  <div className="cv-bullet c4"></div>
                  <div className="cv-text">Làm mới năng lực - Nâng tầm kỹ năng cho <strong>100% Quản lý mỗi năm</strong>, như Quản lý Hiệu quả công việc, Tuyển dụng - Giữ chân Nhân viên...</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
