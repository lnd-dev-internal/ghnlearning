'use client';

export default function GHNFooter() {
  return (
    <>
      <style>{`
        .footer {
          border-top: 1px solid #E2E8F0;
          padding: 40px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #F8FAFC;
          max-width: 1920px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .footer-brand {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #0F172A;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-brand .brand-dot {
          width: 5px;
          height: 5px;
          background: #FF5200;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .footer-dept {
          font-family: 'Be Vietnam Pro', sans-serif;
          font-weight: 400;
          font-size: 0.6rem;
          letter-spacing: 0.05em;
          text-transform: none;
          color: #64748B;
        }
        .footer-email {
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 0.75rem;
          color: #64748B;
          text-decoration: none;
          margin-top: 6px;
          display: inline-block;
          transition: color 0.3s ease;
        }
        .footer-email:hover {
          color: #FF5200;
        }
        .footer-right {
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 0.7rem;
          color: #94A3B8;
        }
        @media (max-width: 960px) {
          .footer {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            padding: 24px 20px;
            gap: 8px;
          }
          .footer-brand {
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
          }
          .footer-brand .brand-dot {
            display: none;
          }
          .footer-dept {
            font-size: 0.55rem;
          }
          .footer-email {
            font-size: 0.7rem;
            margin-top: 4px;
          }
          .footer-right {
            font-size: 0.6rem;
            text-align: right;
            align-self: flex-start;
          }
        }
      `}</style>
      <footer className="footer">
        <div>
          <div className="footer-brand">
            <span>Giao Hàng Nhanh</span>
            <span className="brand-dot"></span>
            <span className="footer-dept">Bộ phận Học tập và Phát triển</span>
          </div>
          <a className="footer-email" href="mailto:lnd@scommerce.asia">📩 lnd@scommerce.asia</a>
        </div>
        <div className="footer-right">© 2026 GHN Learning &amp; Development</div>
      </footer>
    </>
  );
}

