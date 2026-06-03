"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useArticles } from "@/lib/articleStore";
import type { Article } from "@/lib/articleStore";
import styles from "./Section5Featured.module.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ── Parse CTA from article content HTML ─────────────────────────────────
   Looks for the first <a> tag that has background:#FF5200 (CTA button style
   inserted by the RichTextEditor toolbar). Returns { label, url } or null.
──────────────────────────────────────────────────────────────────────────── */
function extractCta(html: string): { label: string; url: string } | null {
  if (!html) return null;
  // We run this only client-side (no DOMParser on server)
  if (typeof window === "undefined") return null;
  const doc = new DOMParser().parseFromString(html, "text/html");
  const anchors = doc.querySelectorAll("a");
  for (const a of anchors) {
    const bg = a.style.background || a.style.backgroundColor || "";
    if (bg.toLowerCase().includes("ff5200") || bg.toLowerCase().includes("255, 82, 0")) {
      const label = a.textContent?.trim() || "Đăng ký ngay";
      const url = a.getAttribute("href") || "";
      if (url) return { label, url };
    }
  }
  return null;
}

/* ── Article Detail Modal ─────────────────────────────────────────────── */
function ArticleModal({
  article,
  onClose,
}: {
  article: Article;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
    gsap.fromTo(panelRef.current,
      { y: 40, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
    );
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = () => {
    gsap.to(panelRef.current, { y: 20, opacity: 0, scale: 0.97, duration: 0.22, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in", onComplete: onClose });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div ref={overlayRef} className={styles.modalOverlay} onClick={handleClose} role="dialog" aria-modal="true" aria-label="Bài viết">
      <div ref={panelRef} className={styles.modalPanel} onClick={e => e.stopPropagation()}>

        {/* Cover */}
        <div className={styles.modalCover}>
          <div className={styles.modalCoverBg}>
            <Image
              src={article.coverImage || "/Wst5.png"}
              alt={article.title}
              fill
              className={styles.modalCoverImg}
              quality={85}
              sizes="640px"
            />
          </div>
          <div className={styles.modalCoverOverlay} />
          <button className={styles.modalClose} onClick={handleClose} aria-label="Đóng">✕</button>
        </div>

        {/* Article body — full content HTML (CTA button will show inside as part of content) */}
        <div className={styles.modalBody}>
          <div className={styles.modalMeta}>
            <span className={styles.modalBadge}>{article.category}</span>
            <span className={styles.modalAuthor}>{article.author}</span>
          </div>

          <h2 className={styles.modalTitle}>{article.title}</h2>
          <p className={styles.modalLead}>{article.excerpt}</p>

          {article.content && (
            <div
              className={styles.modalParagraph}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Featured card ────────────────────────────────────────────────────── */
export default function Section5Featured() {
  const allArticles = useArticles();
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Lấy bài được ghim đầu tiên (published)
  const pinnedArticle = allArticles
    .filter(a => a.pinned && a.status === "published")
    .sort((a, b) => a.order - b.order)[0] ?? null;

  // Extract CTA từ nội dung bài (nút CTA admin chèn bằng toolbar)
  const cta = pinnedArticle ? extractCta(pinnedArticle.content) : null;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Snap scroll khi cuộn vào section
    let isSnapping = false;
    ScrollTrigger.create({
      trigger: section,
      start: "top 55%",
      onEnter: () => {
        if (isSnapping) return;
        isSnapping = true;
        gsap.to(window, {
          scrollTo: { y: section, offsetY: 0 },
          duration: 0.55,
          ease: "power3.inOut",
          onComplete: () => { isSnapping = false; },
        });
      },
    });
  }, []);

  // Chưa load xong hoặc không có bài ghim → ẩn section
  if (allArticles.length === 0 || !pinnedArticle) return null;

  return (
    <>
      <section ref={sectionRef} id="section-5" className={styles.section} aria-label="Sự kiện nổi bật">

        {/* Heading */}
        <div style={{
          width: "100%",
          maxWidth: "1140px",
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
          fontWeight: "400",
          color: "#3d3d3d",
          letterSpacing: "0.03em",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
          visibility: "visible",
          opacity: 1,
          position: "relative",
          zIndex: 5,
          textAlign: "center",
        }}>
          Sự kiện{" "}
          <span style={{
            background: "#FF5200",
            color: "#ffffff",
            padding: "0.08em 0.28em 0.12em",
            borderRadius: "6px",
            display: "inline-block",
            lineHeight: "1.1",
            verticalAlign: "baseline",
            position: "relative",
            top: "-0.03em",
          }}>nổi bật</span>
        </div>

        <div className={styles.container}>

          {/* Featured card */}
          <div className={styles.card} id="featured-episode-card">

            {/* Top accent */}
            <div className={styles.cardTopAccent} aria-hidden="true" />

            {/* Left: poster */}
            <div className={styles.poster} aria-hidden="true">
              <div className={styles.posterBg}>
                <Image
                  src={pinnedArticle.coverImage || "/Wst5.png"}
                  alt={pinnedArticle.title}
                  fill
                  className={styles.posterImg}
                  quality={85}
                  sizes="50vw"
                  priority
                />
              </div>
            </div>

            {/* Right: content */}
            <div className={styles.content}>
              {/* Meta */}
              <div className={styles.contentMeta}>
                <span className={styles.badge}>{pinnedArticle.category}</span>
                <span className={styles.readTime}>⏱ {pinnedArticle.date}</span>
              </div>

              <h2 className={styles.title}>{pinnedArticle.title}</h2>
              <p className={styles.excerpt}>{pinnedArticle.excerpt}</p>

              <div className={styles.divider} aria-hidden="true" />

              <p className={styles.author}>— {pinnedArticle.author}</p>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center", marginTop: "0.5rem" }}>

                {/* "Đọc bài viết" — mở modal nội dung đầy đủ */}
                <button
                  className={styles.readMore}
                  onClick={() => setModalOpen(true)}
                  id="featured-read-more"
                  style={{ marginTop: 0, alignSelf: "center" }}
                >
                  Đọc bài viết
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* CTA bên ngoài — lấy từ nút CTA admin chèn vào nội dung bài */}
                {cta && (
                  <a
                    href={cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="featured-register-cta"
                    className={styles.registerBtn}
                    style={{ alignSelf: "center" }}
                  >
                    {cta.label}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal — toàn bộ nội dung bài (có cả nút CTA bên trong nếu admin chèn) */}
      {modalOpen && <ArticleModal article={pinnedArticle} onClose={() => setModalOpen(false)} />}
    </>
  );
}
