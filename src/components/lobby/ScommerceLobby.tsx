import Link from "next/link";
import ScomHeroCarousel from "./ScomHeroCarousel";
import ScomReveal from "./ScomReveal";

/**
 * Trang "sảnh" (hàng ba) — cổng chào đứng trước GHN Learning và B2B.
 * Bố cục cuộn dọc:
 *   1. Hero: SCommerce (công ty mẹ) lớn + giới thiệu.
 *   2. Dải logo các thương hiệu thành viên (hover → logo nổi lên, to hơn, ăn màu).
 *   3. Hai panel giới thiệu tổng quan Giao Hàng Nhanh (/onboarding) và Giao Hàng
 *      Nặng (/b2b) — motion kiểu "Tầm nhìn & Sứ mệnh": hover thì panel nở rộng,
 *      tiêu đề dọc mờ đi, thẻ nội dung trượt lên.
 *
 * Logo brand con: brand nào có file thì dùng ảnh, chưa có thì hiện wordmark chữ.
 * Thả file logo thật vào /public/scommerce/logos/ rồi đổi `img` tương ứng.
 */
const BRANDS: Array<{ name: string; img?: string; text?: string }> = [
  { name: "Giao Hàng Nhanh", img: "/scommerce/logos/ghn-logo.png" },
  { name: "Ahamove", img: "/scommerce/logos/ahamove.png" },
  { name: "Giao Hàng Nặng", img: "/b2b/assets/logo-ghn.png" },
  { name: "AhaFood", img: "/scommerce/logos/ahafood.png" },
  { name: "AHAFAST", img: "/scommerce/logos/ahafast.png" },
  { name: "AHAFRESH", img: "/scommerce/logos/ahafresh.png" },
  { name: "GHN Logistics", text: "GHN Logistics" },
  { name: "gido", img: "/scommerce/logos/gido.png" },
  { name: "pudo", img: "/scommerce/logos/pudo.png" },
  { name: "lala", img: "/scommerce/logos/lala.png" },
];

export default function ScommerceLobby() {
  return (
    <main className="scom">
      <style>{`
        .scom {
          --orange: #FF5200;
          --scom-orange: #F5821F;
          --navy: #16233a;
          --teal: #00a19a;
          --ink: #14181f;
          --muted: #5b6472;
          min-height: 100vh;
          background:
            radial-gradient(900px 460px at 50% -14%, rgba(255,82,0,0.07), transparent 62%),
            #ffffff;
          color: var(--ink);
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        .scom-wrap { max-width: 1160px; margin: 0 auto; padding: 0 32px; }

        /* Reveal khi cuộn vào khung nhìn */
        .scom-reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1); will-change: opacity, transform; }
        .scom-reveal.in { opacity: 1; transform: none; }
        .scom-reveal--word { transform: translateY(36px) scale(0.96); }
        .scom-reveal--word.in { transform: none; }
        @media (prefers-reduced-motion: reduce) { .scom-reveal { opacity: 1 !important; transform: none !important; transition: none; } }

        /* ── Hero ── */
        .scom-hero { text-align: center; padding: 88px 0 30px; }
        .scom-hero__eyebrow {
          display: inline-block; font-size: 12px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--orange);
          padding: 8px 18px; border-radius: 999px;
          background: rgba(255,82,0,0.08); border: 1px solid rgba(255,82,0,0.18);
        }
        .scom-wordmark {
          font-family: 'Montserrat', sans-serif; font-weight: 900; letter-spacing: -0.03em;
          font-size: clamp(56px, 12vw, 138px); line-height: 0.95; margin: 26px 0 0;
        }
        .scom-wordmark .s { color: var(--orange); }
        .scom-wordmark .rest { color: #1a1a1a; }
        .scom-hero__lead {
          margin: 30px auto 0; max-width: 74ch;
          font-size: clamp(15px, 1.6vw, 17.5px); line-height: 1.75; color: var(--muted);
        }
        .scom-hero__stats {
          display: inline-flex; justify-content: center; gap: 0; margin: 44px 0 0;
          background: linear-gradient(135deg, #1c2230 0%, #0e1218 100%);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 22px; padding: 26px 14px;
          box-shadow: 0 20px 46px rgba(20,24,31,0.30);
        }
        .scom-stat { padding: 0 42px; border-right: 1px solid rgba(255,255,255,0.1); }
        .scom-stat:last-child { border-right: none; }
        .scom-stat__num {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 36px; line-height: 1;
          background: linear-gradient(120deg, #FF8A3D 0%, #FF5200 55%, #FFC061 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }
        .scom-stat__num span { -webkit-text-fill-color: transparent; color: transparent; }
        .scom-stat__lbl {
          font-size: 13px; margin-top: 9px;
          background: linear-gradient(120deg, rgba(255,255,255,0.92), rgba(255,255,255,0.55));
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }

        /* ── Ecosystem logo strip (không kẻ ô) ── */
        .scom-eco { padding: 66px 0 24px; }
        .scom-sec-head { text-align: center; margin-bottom: 34px; }
        .scom-sec-head .kick { font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #98a1ae; }
        .scom-sec-head h2 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 900; letter-spacing: 0.01em; text-transform: uppercase; font-size: clamp(24px, 3vw, 34px); margin: 12px 0 0; color: var(--ink); }
        .scom-logos {
          display: flex; flex-wrap: wrap; justify-content: center; align-items: center;
          row-gap: 30px;
        }
        .scom-logo {
          flex: 0 0 20%; display: flex; align-items: center; justify-content: center;
          height: 74px; padding: 8px 12px;
          transition: transform .3s cubic-bezier(.2,.7,.2,1);
        }
        .scom-logo:hover { transform: scale(1.16); }
        .scom-logo img {
          max-height: 46px; max-width: 100%; width: auto; object-fit: contain; display: block;
          opacity: 0.88; transition: opacity .3s ease;
        }
        .scom-logo:hover img { opacity: 1; }
        .scom-logo__wm {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 20px; letter-spacing: 0.01em;
          color: #2f3d55; opacity: 0.85; white-space: nowrap; transition: opacity .3s ease;
        }
        .scom-logo:hover .scom-logo__wm { opacity: 1; }

        /* ── Gateway: motion kiểu Tầm nhìn & Sứ mệnh ── */
        .scom-gate { padding: 60px 0 88px; }
        .scom-panels {
          display: flex; height: 520px; overflow: hidden;
          width: 100vw; position: relative; left: 50%; transform: translateX(-50%);
          box-shadow: 0 18px 50px rgba(20,24,31,0.14);
        }
        .scom-panel {
          flex: 1 1 0; position: relative; overflow: hidden; cursor: pointer;
          text-decoration: none; color: #fff;
          transition: flex-grow .6s cubic-bezier(.25,1,.5,1);
        }
        .scom-panel:hover { flex-grow: 2.4; }
        .scom-panel + .scom-panel { border-left: 1px solid rgba(255,255,255,0.14); }
        .scom-panel__bg {
          position: absolute; inset: 0; z-index: 0; background-size: cover; background-position: center;
          transition: transform .8s cubic-bezier(.25,1,.5,1), filter .5s ease;
        }
        .scom-panel:hover .scom-panel__bg { transform: scale(1.05); }
        .scom-panel__bg::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(8,10,14,0.15) 0%, rgba(8,10,14,0.35) 45%, rgba(8,10,14,0.9) 100%);
        }
        /* Lớp phủ tối + logo brand ở giữa — mặc định hiện, hover thì mờ đi */
        .scom-panel__center {
          position: absolute; inset: 0; z-index: 2; display: flex; align-items: center; justify-content: center;
          padding: 40px; background: rgba(8,10,14,0.5);
          transition: opacity .5s ease;
        }
        .scom-panel:hover .scom-panel__center { opacity: 0; pointer-events: none; }
        .scom-panel__logo {
          max-width: 82%; max-height: 56%; width: auto; height: auto; object-fit: contain;
          filter: drop-shadow(0 6px 22px rgba(0,0,0,0.45));
          transition: transform .5s cubic-bezier(.25,1,.5,1);
        }
        /* logo GHN "Your Loads" là chữ tối → hoá trắng âm bản cho nổi trên nền tối; để nhỏ hơn */
        .scom-panel--nang .scom-panel__logo {
          max-width: 42%; max-height: 30%;
          filter: brightness(0) invert(1) drop-shadow(0 6px 22px rgba(0,0,0,0.45));
        }
        .scom-panel:hover .scom-panel__logo { transform: scale(0.92); }
        /* Thẻ nội dung — trượt lên khi hover */
        .scom-panel__card {
          position: absolute; left: 0; right: 0; bottom: 0; z-index: 3; margin: 0 28px 28px;
          background: rgba(22,26,33,0.55); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.16); border-radius: 18px; padding: 26px 30px;
          opacity: 0; transform: translateY(28px);
          transition: opacity .55s cubic-bezier(.25,1,.5,1), transform .55s cubic-bezier(.25,1,.5,1);
        }
        .scom-panel:hover .scom-panel__card { opacity: 1; transform: translateY(0); transition-delay: .08s; }
        .scom-panel__kicker { font-size: 12px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; }
        .scom-panel--ghn .scom-panel__kicker { color: #ffc7ac; }
        .scom-panel--nang .scom-panel__kicker { color: #8fe6e0; }
        .scom-panel__title {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 900; letter-spacing: -0.01em;
          font-size: clamp(24px, 2.6vw, 32px); line-height: 1.1; margin: 8px 0 10px;
        }
        /* Font riêng cho tên 2 công ty chủ lực */
        .scom-panel--ghn .scom-panel__title { font-family: 'Montserrat', sans-serif; font-weight: 800; }
        .scom-panel--nang .scom-panel__title { font-family: 'Anton', sans-serif; font-weight: 400; letter-spacing: 0.01em; }
        .scom-panel__desc { font-size: 14.5px; line-height: 1.6; color: rgba(255,255,255,0.88); max-width: 46ch; }
        .scom-panel__cta {
          display: inline-flex; align-items: center; gap: 9px; margin-top: 18px; font-weight: 700; font-size: 14.5px;
          padding: 11px 20px; border-radius: 999px; border: 1.5px solid rgba(255,255,255,0.35); background: rgba(255,255,255,0.1);
          transition: background .28s ease, border-color .28s ease, gap .28s ease;
        }
        .scom-panel--ghn:hover .scom-panel__cta { background: var(--orange); border-color: var(--orange); }
        .scom-panel--nang:hover .scom-panel__cta { background: var(--teal); border-color: var(--teal); }
        .scom-panel__cta svg { width: 16px; height: 16px; }

        .scom-foot { text-align: center; padding: 22px 0 44px; font-size: 13px; color: #98a1ae; border-top: 1px solid rgba(20,24,31,0.06); }

        @media (max-width: 900px) { .scom-logo { flex: 0 0 33.333%; } }
        @media (max-width: 820px) {
          .scom-hero { padding: 60px 0 20px; }
          .scom-panels { flex-direction: column; height: auto; }
          .scom-panel { min-height: 300px; }
          .scom-panel:hover { flex-grow: 1; }
          .scom-panel + .scom-panel { border-left: none; border-top: 1px solid rgba(255,255,255,0.14); }
          .scom-panel__vtitle { display: none; }
          .scom-panel__card { opacity: 1; transform: none; position: static; margin: auto 20px 20px; }
          .scom-panel { display: flex; align-items: flex-end; }
        }
        @media (max-width: 560px) {
          .scom-wrap { padding: 0 18px; }
          .scom-wordmark { font-size: clamp(38px, 13vw, 58px); }
          .scom-hero { padding: 44px 0 16px; }
          /* Stats: gom 1 cụm 3 cột nhỏ gọn, không rớt hàng */
          .scom-hero__stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; width: 100%; }
          .scom-stat { padding: 0 6px; }
          .scom-stat__num { font-size: 22px; }
          .scom-stat__lbl { font-size: 10px; line-height: 1.3; margin-top: 6px; }
          /* Logo con: flex 3 cột, hàng lẻ cuối tự căn giữa */
          .scom-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 22px 0; }
          .scom-logo { flex: 0 0 33.333%; width: auto; height: 52px; padding: 4px; }
          .scom-logo img { max-height: 30px; }
          .scom-logo__wm { font-size: 12px; white-space: normal; text-align: center; }
        }
      `}</style>

      {/* Hero carousel đầu trang (full-bleed, có dots) — thêm ảnh trong ScomHeroCarousel */}
      <ScomHeroCarousel />

      <div className="scom-wrap">
        {/* Hero */}
        <section className="scom-hero">
          <ScomReveal><span className="scom-hero__eyebrow">Hệ sinh thái</span></ScomReveal>
          <ScomReveal delay={100} className="scom-reveal--word">
            <h1 className="scom-wordmark"><span className="s">S</span><span className="rest">COMMERCE</span></h1>
          </ScomReveal>
          <ScomReveal delay={200}>
            <p className="scom-hero__lead">
              Được thành lập từ năm 2014, SCommerce đã chuyển mình mạnh mẽ từ một đơn vị giao nhận đơn lẻ
              trở thành Hệ sinh thái Logistics tích hợp toàn diện hàng đầu. Chúng tôi tự hào nắm giữ Top 2
              thị phần e-logistics và khẳng định vị thế Số 1 nội địa về hiệu quả vận hành.
            </p>
          </ScomReveal>
          <ScomReveal delay={300}>
            <div className="scom-hero__stats">
              <div className="scom-stat"><div className="scom-stat__num"><span>Top 2</span></div><div className="scom-stat__lbl">Thị phần e-logistics</div></div>
              <div className="scom-stat"><div className="scom-stat__num"><span>#1</span></div><div className="scom-stat__lbl">Hiệu quả vận hành nội địa</div></div>
              <div className="scom-stat"><div className="scom-stat__num">2014</div><div className="scom-stat__lbl">Năm thành lập</div></div>
            </div>
          </ScomReveal>
        </section>

        {/* Ecosystem logos (không kẻ ô) */}
        <section className="scom-eco">
          <div className="scom-sec-head">
            <h2>Hệ sinh thái</h2>
          </div>
          <div className="scom-logos">
            {BRANDS.map((b) => (
              <div className="scom-logo" key={b.name} title={b.name}>
                {b.img ? <img src={b.img} alt={b.name} /> : <span className="scom-logo__wm">{b.text}</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Gateway — giới thiệu tổng quan 2 công ty, motion Tầm nhìn & Sứ mệnh */}
        <section className="scom-gate">
          <div className="scom-sec-head">
            <div className="kick">Khám phá</div>
            <h2 style={{ color: "#FF5200" }}>CÁC CÔNG TY CHỦ LỰC</h2>
          </div>
          <div className="scom-panels">
            <Link href="/onboarding" className="scom-panel scom-panel--ghn">
              <div className="scom-panel__bg" style={{ backgroundImage: "url('/onboarding-static/Hero.jpeg')" }} />
              <div className="scom-panel__center"><img className="scom-panel__logo" src="/scommerce/logos/ghn-white.png" alt="Giao Hàng Nhanh" /></div>
              <div className="scom-panel__card">
                <div className="scom-panel__kicker">Công ty</div>
                <div className="scom-panel__title">Giao Hàng Nhanh</div>
                <p className="scom-panel__desc">Thương hiệu giao vận nhanh cho thương mại điện tử &amp; bán lẻ, dẫn đầu sản lượng bưu kiện nội địa với mạng lưới phủ khắp cả nước.</p>
                <span className="scom-panel__cta">Tìm hiểu
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </Link>

            <Link href="/b2b" className="scom-panel scom-panel--nang">
              <div className="scom-panel__bg" style={{ backgroundImage: "url('/scommerce/b2bscence.jpeg')" }} />
              <div className="scom-panel__center"><img className="scom-panel__logo" src="/b2b/assets/logo-ghn.png" alt="Giao Hàng Nặng" /></div>
              <div className="scom-panel__card">
                <div className="scom-panel__kicker">Công ty</div>
                <div className="scom-panel__title">Giao Hàng Nặng</div>
                <p className="scom-panel__desc">Giải pháp vận chuyển hàng nặng, cồng kềnh cho doanh nghiệp B2B theo chuẩn quốc tế — an toàn, tối ưu chi phí.</p>
                <span className="scom-panel__cta">Tìm hiểu
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </Link>
          </div>
        </section>

        <footer className="scom-foot">© SCommerce — Giao Hàng Nhanh · Giao Hàng Nặng · Ahamove</footer>
      </div>
    </main>
  );
}
