"use client";

import { useState, useEffect } from "react";

/**
 * Hero carousel đầu trang SCommerce — full-bleed (tràn sát mép), có dots chỉ vị trí.
 *
 * 👉 THÊM ẢNH: thả file vào /public/scommerce/hero/ rồi điền đường dẫn vào mảng
 *    SLIDES bên dưới, ví dụ:
 *      const SLIDES = ["/scommerce/hero/1.jpg", "/scommerce/hero/2.jpg"];
 *    Khi SLIDES còn rỗng sẽ hiển thị các slot placeholder để thấy trước bố cục.
 */
// pos = background-position để căn frame (giữ đầu người / chữ khi ảnh bị crop)
const SLIDES: Array<{ src: string; pos?: string }> = [
  { src: "/scommerce/hero/ghn-1.jpeg", pos: "center 20%" },
  { src: "/scommerce/hero/b2b-1.jpeg", pos: "center 42%" },
  { src: "/scommerce/hero/aha-1.jpeg", pos: "center 10%" },
  { src: "/scommerce/hero/ghn-2.jpeg", pos: "center 20%" },
  { src: "/scommerce/hero/b2b-2.jpeg", pos: "center 70%" },
  { src: "/scommerce/hero/aha-2.jpeg", pos: "center 12%" },
  { src: "/scommerce/hero/ghn-3.jpg", pos: "center 35%" },
  { src: "/scommerce/hero/aha-3.png", pos: "center 56%" },
];

const PLACEHOLDER_COUNT = 3; // số slot hiển thị khi chưa có ảnh

export default function ScomHeroCarousel() {
  const slides = SLIDES.length ? SLIDES : Array.from({ length: PLACEHOLDER_COUNT }, () => ({ src: "", pos: "center" }));
  const count = slides.length;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);

  return (
    <section className="scom-hcar" aria-label="Ảnh giới thiệu SCommerce" aria-roledescription="carousel">
      <style>{`
        .scom-hcar {
          position: relative; width: 100%;
          height: clamp(300px, calc(100vh - 340px), 760px);   /* luôn chừa ~340px để thấy SCOMMERCE khi vừa vào */
          overflow: hidden; background: #0b0d10;
        }
        .scom-hcar__slide {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0; transition: opacity .8s ease;
          display: flex; align-items: center; justify-content: center;
        }
        .scom-hcar__slide.active { opacity: 1; }
        /* Placeholder khi chưa có ảnh — mỗi slot 1 tông để thấy carousel đổi slide */
        .scom-hcar__slide.ph1 { background: linear-gradient(120deg, #1a1d24, #2a1c12); }
        .scom-hcar__slide.ph2 { background: linear-gradient(120deg, #14181f, #10262a); }
        .scom-hcar__slide.ph3 { background: linear-gradient(120deg, #1a1620, #221a12); }
        .scom-hcar__ph {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 15px;
          letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.35);
          border: 1px dashed rgba(255,255,255,0.22); border-radius: 12px; padding: 14px 22px;
        }
        .scom-hcar__dots {
          position: absolute; left: 0; right: 0; bottom: 22px; z-index: 3;
          display: flex; justify-content: center; gap: 10px;
        }
        .scom-hcar__dot {
          width: 9px; height: 9px; border-radius: 999px; border: none; cursor: pointer;
          background: rgba(255,255,255,0.45); padding: 0;
          transition: width .3s ease, background .3s ease;
        }
        .scom-hcar__dot.active { width: 30px; background: #FF5200; }
      `}</style>

      <div className="scom-hcar__track">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`scom-hcar__slide${SLIDES.length ? "" : ` ph${(i % 3) + 1}`}${i === idx ? " active" : ""}`}
            style={s.src ? { backgroundImage: `url('${s.src}')`, backgroundPosition: s.pos || "center" } : undefined}
            aria-hidden={i !== idx}
          >
            {!s.src && <span className="scom-hcar__ph">Ảnh Hero SCommerce {i + 1}</span>}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="scom-hcar__dots" role="tablist">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`scom-hcar__dot${i === idx ? " active" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Chuyển tới ảnh ${i + 1}`}
              aria-selected={i === idx}
            />
          ))}
        </div>
      )}
    </section>
  );
}
