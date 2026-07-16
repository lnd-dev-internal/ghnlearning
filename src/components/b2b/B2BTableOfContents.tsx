"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Mục lục trượt cho site B2B — song hành với mục lục của GHN Learning.
 * Tự dựng danh sách từ các section thực sự có trên trang (bỏ qua bản trùng ở
 * legacy HTML), có scroll-spy làm nổi mục đang xem, và một nút kín đáo
 * "Về SCommerce" ở cuối để quay lại sảnh chung (/).
 */

// Danh sách id "canonical" của trang chủ B2B + nhãn thân thiện. Chỉ những mục
// thực sự tồn tại trong DOM mới được render, nên các trang con (van-hanh, nvxl…)
// tự thu gọn mà không cần cấu hình riêng.
const SECTIONS: Array<{ id: string; label: string }> = [
  { id: "scommerce", label: "Hệ sinh thái SCommerce" },
  { id: "hanh-trinh", label: "Hành trình kiến tạo" },
  { id: "video-ghn", label: "Giao Hàng Nặng B2B" },
  { id: "dich-vu", label: "Mô hình vận chuyển" },
  { id: "khach-hang", label: "Nhóm khách hàng" },
  { id: "co-cau", label: "Cơ cấu tổ chức" },
  { id: "cong-cu", label: "Bộ công cụ nội bộ" },
  { id: "van-hoa-quy-dinh", label: "Văn hoá & Chuẩn mực" },
  { id: "ban-giam-doc", label: "Đội ngũ lãnh đạo" },
  { id: "lien-he", label: "Liên hệ" },
];

export default function B2BTableOfContents() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Array<{ id: string; label: string }>>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Dựng lại danh sách mỗi khi đổi route. Nội dung legacy có thể được inject trễ
  // so với lúc component mount, nên vừa quét ngay, vừa theo dõi DOM thay đổi để
  // bắt các section tới muộn.
  useEffect(() => {
    const build = () => {
      const found = SECTIONS.filter((s) => document.getElementById(s.id));
      setItems((prev) =>
        prev.length === found.length && prev.every((p, i) => p.id === found[i]?.id) ? prev : found
      );
      if (found.length) setActiveId((cur) => cur ?? found[0].id);
      return found.length;
    };

    build();
    const observer = new MutationObserver(() => build());
    observer.observe(document.body, { childList: true, subtree: true });
    // Ngừng theo dõi sau khi trang ổn định để tránh chạy vô hạn.
    const stop = setTimeout(() => observer.disconnect(), 4000);
    return () => {
      observer.disconnect();
      clearTimeout(stop);
    };
  }, [pathname]);

  // Khoá cuộn nền khi mở panel trên mobile.
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);

  // Scroll-spy: làm nổi mục có section đang trong khung nhìn.
  useEffect(() => {
    if (!items.length) return;
    const targets = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!("IntersectionObserver" in window) || !targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [items]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.innerWidth <= 860) setOpen(false);
  };

  return (
    <>
      <style>{`
        .b2b-toc-toggle {
          position: fixed; bottom: 22px; left: 0; z-index: 1001;
          display: flex; align-items: center; gap: 6px;
          padding: 7px 11px;
          background: var(--b2b-teal, #00a19a); color: #fff;
          border: none; border-radius: 0 10px 10px 0;
          box-shadow: 0 6px 18px rgba(0,0,0,0.35);
          font-family: 'Inter','Be Vietnam Pro',sans-serif;
          font-weight: 700; font-size: 0.68rem;
          letter-spacing: 0.04em; text-transform: uppercase; cursor: pointer;
          transition: left 0.42s cubic-bezier(0.4,0,0.2,1), background 0.25s ease;
        }
        .b2b-toc-toggle:hover { background: #00b3ab; }
        .b2b-toc-toggle svg { width: 15px; height: 15px; flex: none; transition: transform 0.42s ease; }
        .b2b-toc-toggle .b2b-toc-toggle-label { white-space: nowrap; }
        .b2b-toc-open .b2b-toc-toggle { left: 280px; }
        .b2b-toc-open .b2b-toc-toggle svg { transform: rotate(180deg); }

        .b2b-toc-panel {
          position: fixed; top: 0; left: 0; width: 280px; height: 100%;
          z-index: 1000;
          background: linear-gradient(180deg, #0c1417 0%, #14201f 100%);
          border-right: 1px solid rgba(255,255,255,0.08);
          box-shadow: 14px 0 40px rgba(0,0,0,0.45);
          transform: translateX(-100%);
          transition: transform 0.42s cubic-bezier(0.4,0,0.2,1);
          display: flex; flex-direction: column; padding: 26px 0; overflow-y: auto;
        }
        .b2b-scope.light-theme .b2b-toc-panel {
          background: linear-gradient(180deg, #ffffff 0%, #f4f2ee 100%);
          border-right-color: rgba(0,0,0,0.1);
        }
        .b2b-toc-open .b2b-toc-panel { transform: translateX(0); }

        .b2b-toc-head { padding: 0 26px 18px; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .b2b-scope.light-theme .b2b-toc-head { border-bottom-color: rgba(0,0,0,0.08); }
        .b2b-toc-kicker { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--b2b-teal, #00a19a); }
        .b2b-toc-title { font-family: 'Inter','Be Vietnam Pro',sans-serif; font-weight: 800; font-size: 1.15rem; color: #fff; margin-top: 6px; }
        .b2b-scope.light-theme .b2b-toc-title { color: #171717; }

        .b2b-toc-list { list-style: none; padding: 14px 14px; margin: 0; }
        .b2b-toc-link {
          display: flex; align-items: center; gap: 12px; padding: 11px 14px;
          border-radius: 10px; color: #b9c2c1; font-size: 0.92rem; font-weight: 500;
          cursor: pointer; border: none; background: none; width: 100%; text-align: left;
          font-family: 'Inter','Be Vietnam Pro',sans-serif;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .b2b-scope.light-theme .b2b-toc-link { color: #4a4a4a; }
        .b2b-toc-num { font-family: 'Inter',sans-serif; font-weight: 700; font-size: 0.78rem; color: #6f7877; min-width: 20px; transition: color 0.2s ease; }
        .b2b-toc-link:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .b2b-scope.light-theme .b2b-toc-link:hover { background: rgba(0,0,0,0.05); color: #111; }
        .b2b-toc-link.active { background: rgba(0,161,154,0.16); color: #fff; }
        .b2b-scope.light-theme .b2b-toc-link.active { color: #0b6e69; }
        .b2b-toc-link.active .b2b-toc-num { color: var(--b2b-teal, #00a19a); }

        .b2b-toc-foot { margin-top: auto; padding: 14px 20px 2px; border-top: 1px solid rgba(255,255,255,0.08); }
        .b2b-scope.light-theme .b2b-toc-foot { border-top-color: rgba(0,0,0,0.08); }
        .b2b-toc-back {
          display: flex; align-items: center; gap: 8px; padding: 9px 12px; border-radius: 10px;
          color: #7f8a89; font-size: 0.82rem; font-weight: 500; text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .b2b-toc-back svg { width: 14px; height: 14px; flex: none; }
        .b2b-toc-back:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .b2b-scope.light-theme .b2b-toc-back { color: #6a6a6a; }
        .b2b-scope.light-theme .b2b-toc-back:hover { background: rgba(0,0,0,0.05); color: #111; }

        .b2b-toc-overlay { position: fixed; inset: 0; z-index: 999; background: rgba(0,0,0,0.4); }

        @media (max-width: 860px) {
          .b2b-toc-panel { width: 76vw; max-width: 300px; }
          .b2b-toc-open .b2b-toc-toggle { left: min(76vw, 300px); }
          .b2b-toc-toggle .b2b-toc-toggle-label { display: none; }
        }
        @media print { .b2b-toc-toggle, .b2b-toc-panel, .b2b-toc-overlay { display: none; } }
      `}</style>

      <div className={open ? "b2b-toc-open" : undefined}>
        <button
          className="b2b-toc-toggle"
          aria-label={open ? "Đóng mục lục" : "Mở mục lục"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
          <span className="b2b-toc-toggle-label">Mục lục</span>
        </button>

        <nav className="b2b-toc-panel" aria-label="Mục lục các phần">
          <div className="b2b-toc-head">
            <div className="b2b-toc-kicker">Giao Hàng Nặng B2B</div>
            <div className="b2b-toc-title">Mục lục</div>
          </div>
          {items.length > 0 && (
            <ul className="b2b-toc-list">
              {items.map((it, i) => (
                <li key={it.id}>
                  <button
                    className={`b2b-toc-link${activeId === it.id ? " active" : ""}`}
                    onClick={() => goTo(it.id)}
                  >
                    <span className="b2b-toc-num">{String(i + 1).padStart(2, "0")}</span>
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="b2b-toc-foot">
            <Link className="b2b-toc-back" href="/" aria-label="Quay về sảnh SCommerce">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              Về SCommerce
            </Link>
          </div>
        </nav>

        {open && <div className="b2b-toc-overlay" onClick={() => setOpen(false)} />}
      </div>
    </>
  );
}
