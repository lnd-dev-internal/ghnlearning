"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import styles from "./Section5Featured.module.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ── Placeholder episode data ─────────────────────────────────────────── */
const EPISODE = {
  issue:   "SỐ 106",
  badge:   "LEADERS TALK",
  author:  "Nguyễn Thị Huỳnh Như",
  title:   'Đằng sau làn sóng "Gõ Prompt Dạo": Khi AI không thể thay thế tư duy hệ thống của doanh nghiệp',
  excerpt: 'Hầu hết nhân sự hiện nay đang đối thoại với Trí tuệ nhân tạo (AI) theo phương thức "giao tiếp tối giản". Tuy nhiên, cách tiếp cận này đang vô tình biến các mô hình ngôn ngữ lớn trở nên "rời rạc"...',
  body: [
    'Hầu hết nhân sự hiện nay đang đối thoại với Trí tuệ nhân tạo (AI) theo phương thức "giao tiếp tối giản": yêu cầu viết một email, tóm tắt một văn bản hay dịch một đoạn hội thoại. Tuy nhiên, cách tiếp cận mang tính bản năng này đang vô tình biến các mô hình ngôn ngữ lớn trở nên "rời rạc", đồng thời đẩy người dùng vào vòng lặp chỉnh sửa thủ công tốn thời gian.',
    'Thực tế định hình một nghịch lý công nghệ: AI không thay thế tư duy của con người — nó chỉ khuếch đại những gì doanh nghiệp đã sở hữu. Sự kém hiệu quả trong vận hành không đến từ việc thiếu AI, mà đến từ việc thiếu một tư duy hệ thống đủ mạnh để điều phối AI.',
    'Workshop lần này đặt ra một câu hỏi trọng tâm: Làm thế nào để xây dựng một "hệ sinh thái AI" thực sự phục vụ doanh nghiệp — thay vì chỉ là tập hợp rời rạc của các công cụ tự động hóa?',
  ],
  sections: [
    {
      heading: 'Trải nghiệm thực chiến: Giải quyết "bài toán thật"',
      body:    'Điểm khác biệt của Workshop lần này nằm ở tính thực tiễn cao. Khán thính giả tham gia không chỉ dừng lại ở việc lắng nghe lý thuyết đơn thuần, mà trực tiếp mang theo các đầu việc lặp đi lặp lại hàng tuần của phòng ban mình lên lớp để phân tích và tối ưu.',
      bullets: [
        { bold: "Thiết lập bản đồ hybrid (Người và Máy):", text: " Vẽ sơ đồ quy trình, phân định rõ ràng các phân khúc tác vụ nào nên chuyển giao cho AI và những bước nào bắt buộc phải giữ lại yếu tố quản trị tối cao của con người." },
        { bold: "Chuẩn hóa chuỗi tự động (Flow Automation):", text: " Kết nối các kỹ năng đơn lẻ thành một chuỗi vận hành tự động liên tục, giúp giải phóng áp lực thời gian cho nhân sự." },
      ],
      quote: '"Học quy hoạch hệ thống prompt một lần — Thụ hưởng mãi mãi."',
    },
    {
      heading: "Công tác chuẩn bị trước giờ G",
      body:    "Chương trình sẽ chính thức diễn ra vào cuối tuần này. Nhằm bảo đảm tính đồng bộ và chất lượng thực hành, Ban tổ chức khuyến nghị các thành viên tham gia hoàn thiện các bước chuẩn bị kỹ thuật trước khi tham gia.",
      bullets: [
        { bold: "Tải và cài đặt ứng dụng chuyên dụng Antigravity", text: " bằng email cá nhân." },
        { bold: "Nghiên cứu kỹ lưỡng các tài liệu hướng dẫn", text: " đã được gửi kèm đến hộp thư hàng tuần." },
        { bold: "Chuẩn bị máy tính cá nhân", text: " ở trạng thái sẵn sàng và sạc đầy năng lượng." },
      ],
    },
  ],
  event: {
    time:     "10:00 – 12:00 | Ngày 29/05/2026 (Thứ Sáu)",
    location: "Trực tiếp tại Learning Center hoặc Trực tuyến qua Google Meet",
    speaker:  "Đinh Hồ Nho Thông",
  },
  ctaLabel: "Đăng ký ngay",
  ctaUrl:   "https://docs.google.com/forms/d/e/1FAIpQLScPjDVT0jC-C4M92A9WTxwXXRVphKEsqRdKlIGUII__rbeljA/viewform?usp=dialog",
};

/* ── Article Modal ────────────────────────────────────────────────────── */
function ArticleModal({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef   = useRef<HTMLDivElement>(null);

  // Mount animation
  useEffect(() => {
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power2.out" }
    );
    gsap.fromTo(panelRef.current,
      { y: 40, opacity: 0, scale: 0.97 },
      { y: 0,  opacity: 1, scale: 1, duration: 0.40, ease: "power3.out" }
    );

    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = () => {
    gsap.to(panelRef.current, { y: 20, opacity: 0, scale: 0.97, duration: 0.22, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in", onComplete: onClose });
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div ref={overlayRef} className={styles.modalOverlay} onClick={handleClose} role="dialog" aria-modal="true" aria-label="Bài viết">
      <div ref={panelRef} className={styles.modalPanel} onClick={e => e.stopPropagation()}>

        {/* Close button */}
        <button className={styles.modalClose} onClick={handleClose} aria-label="Đóng">✕</button>

        {/* Cover poster — image only, no text overlay */}
        <div className={styles.modalCover} aria-hidden="true">
          <div className={styles.modalCoverBg}>
            <Image
              src="/Wst5.png"
              alt="Leaders Talk — Workshop cover"
              fill
              className={styles.modalCoverImg}
              quality={85}
              sizes="640px"
            />
          </div>
          <div className={styles.modalCoverOverlay} />
        </div>

        {/* Article body */}
        <div className={styles.modalBody}>
          {/* Meta */}
          <div className={styles.modalMeta}>
            <span className={styles.modalBadge}>{EPISODE.badge}</span>
            <span className={styles.modalAuthor}>{EPISODE.author}</span>
          </div>

          {/* Title */}
          <h2 className={styles.modalTitle}>{EPISODE.title}</h2>

          {/* Intro paragraphs */}
          {EPISODE.body.map((p, i) => (
            <p key={i} className={i === 0 ? styles.modalLead : styles.modalParagraph}>{p}</p>
          ))}

          {/* Sections */}
          {EPISODE.sections.map((sec, si) => (
            <div key={si} className={styles.modalSection}>
              <h3 className={styles.modalSectionHeading}>{sec.heading}</h3>
              <p className={styles.modalParagraph}>{sec.body}</p>
              {sec.bullets && (
                <ul className={styles.modalList}>
                  {sec.bullets.map((b, bi) => (
                    <li key={bi}><strong>{b.bold}</strong>{b.text}</li>
                  ))}
                </ul>
              )}
              {sec.quote && (
                <blockquote className={styles.modalQuote}>{sec.quote}</blockquote>
              )}
            </div>
          ))}

          {/* Event details */}
          <div className={styles.modalEventBox}>
            <h3 className={styles.modalEventTitle}>Thông tin chi tiết về sự kiện:</h3>
            <p>🕙 <strong>Thời gian:</strong> {EPISODE.event.time}</p>
            <p>📍 <strong>Địa điểm:</strong> {EPISODE.event.location}</p>
            <p>🎤 <strong>Diễn giả:</strong> {EPISODE.event.speaker}</p>
          </div>

          {/* CTA */}
          <a href={EPISODE.ctaUrl} className={styles.modalCta} id="modal-register-cta">
            {EPISODE.ctaLabel}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Featured card ────────────────────────────────────────────────────── */
export default function Section5Featured() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal card on scroll into view
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1.0, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Điểm neo (snap point): khi cuộn gần section-5 thì khóa vào nó
    let isSnapping = false;
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 55%",     // khi phần trên section-5 đi qua 55% viewport
      onEnter: () => {
        if (isSnapping) return;
        isSnapping = true;
        gsap.to(window, {
          scrollTo: { y: sectionRef.current!, offsetY: 0 },
          duration: 0.55,
          ease: "power3.inOut",
          onComplete: () => { isSnapping = false; },
        });
      },
    });
  }, []);

  return (
    <>
      <section ref={sectionRef} id="section-5" className={styles.section} aria-label="Sự kiện nổi bật">

        {/* ── Heading: direct child of section, NOT inside container ── */}
        <div style={{
          width: '100%',
          maxWidth: '1140px',
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
          fontWeight: '400',
          color: '#3d3d3d',
          letterSpacing: '0.03em',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          visibility: 'visible',
          opacity: 1,
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
        }}>
          Sự kiện{' '}
          <span style={{
            background: '#FF5200',
            color: '#ffffff',
            padding: '0.04em 0.22em',
            borderRadius: '5px',
            display: 'inline-block',
            verticalAlign: 'middle',
          }}>nổi bật</span>
        </div>

        <div className={styles.container}>

          {/* Featured card */}
          <div ref={cardRef} className={styles.card} id="featured-episode-card">

            {/* Top accent progress bar */}
            <div className={styles.cardTopAccent} aria-hidden="true" />

            {/* Left: poster — clean, no overlay */}
            <div className={styles.poster} aria-hidden="true">
              <div className={styles.posterBg}>
                <Image
                  src="/Wst5.png"
                  alt="Leaders Talk Workshop"
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
              {/* Meta row: badge + reading time */}
              <div className={styles.contentMeta}>
                <span className={styles.badge}>{EPISODE.badge}</span>
                <span className={styles.readTime}>⏱ 4 phút đọc</span>
              </div>

              <h2 className={styles.title}>{EPISODE.title}</h2>
              <p className={styles.excerpt}>{EPISODE.excerpt}</p>

              {/* Divider */}
              <div className={styles.divider} aria-hidden="true" />

              {/* Event badge */}
              <div className={styles.eventBadge}>
                <span className={styles.eventIcon}>📅</span>
                <div className={styles.eventInfo}>
                  <span className={styles.eventLabel}>Sự kiện diễn ra</span>
                  <span className={styles.eventDate}>{EPISODE.event.time}</span>
                </div>
              </div>

              <p className={styles.author}>— {EPISODE.author}</p>

              {/* Action buttons row */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.5rem' }}>
                <button
                  className={styles.readMore}
                  onClick={() => setModalOpen(true)}
                  id="featured-read-more"
                  style={{ marginTop: 0, alignSelf: 'center' }}
                >
                  Đọc bài viết
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScPjDVT0jC-C4M92A9WTxwXXRVphKEsqRdKlIGUII__rbeljA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="featured-register-cta"
                  className={styles.registerBtn}
                  style={{ alignSelf: 'center' }}
                >
                  Đăng ký ngay
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && <ArticleModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
