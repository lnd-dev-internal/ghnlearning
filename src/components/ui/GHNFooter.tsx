'use client';

export default function GHNFooter() {
  return (
    <>
      <style>{`
        .footer-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 24px 0 0;
          max-width: 1920px;
          width: 100%;
          margin: 0 auto;
        }
        .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 96px;
          max-width: 1920px;
          width: 100%;
          height: 125px;
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          box-sizing: border-box;
        }
        .footer-brand {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #0F172A;
          margin-bottom: 8px;
        }
        .footer-info {
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 12px;
          line-height: 20px;
          color: #64748B;
        }
        .footer-right {
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 12px;
          color: #94A3B8;
        }
        @media(max-width: 960px) {
          .footer-wrap {
            width: 100% !important;
            padding: 16px 24px !important;
            margin-top: 40px !important;
            border-top: 1px solid #EBEEF0 !important;
            background: #fff !important;
          }
          .footer {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px 0 !important;
            gap: 16px !important;
            background: transparent !important;
            border-top: none !important;
          }
          .footer > div:first-child {
            display: flex;
            flex-direction: column;
            gap: 8px;
            border-top: 1px solid #F1F5F9;
            padding-top: 24px;
            width: 100%;
          }
          .footer-brand {
            font-size: 14px !important;
          }
          .footer-info {
            font-size: 11px !important;
            line-height: 16px !important;
          }
          .footer-right {
            font-size: 11px !important;
            margin-top: 16px;
            align-self: center;
            text-align: center;
          }
        }
      `}</style>
      <div className="footer-wrap">
        <footer className="footer">
          <div>
            <div className="footer-brand">Giao Hàng Nhanh</div>
            <div className="footer-info">Bộ phận Học tập và Phát triển</div>
            <div className="footer-info">📩 Liên hệ: lnd@scommerce.asia</div>
          </div>
          <div className="footer-right">© 2026 GHN Learning &amp; Development</div>
        </footer>
      </div>
    </>
  );
}
