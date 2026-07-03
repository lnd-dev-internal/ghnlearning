'use client';

import { useState, useEffect, useRef } from 'react';

/* ------------------------------------------------------------------ *
 *  HỌC VIỆN NĂNG LỰC — showcase site for cross-cutting skill courses
 *  (Leadership / Performance management / AI) that link out to the LMS.
 *
 *  Hero = a TOONHUB-style rotating carousel: 3 competency "shapes" stand
 *  front-to-back over a giant "NĂNG LỰC GHN" backdrop word. Selecting a
 *  shape crossfades the whole scene to that colour and swaps the course
 *  grid below to that competency.
 *
 *  ⚠️ SAMPLE DATA: courses are placeholders. Swap `COURSES` for the real
 *  list + LMS links (set each `href`). To use real 3D figurine art per
 *  competency, add an `image` path to that TRACK — it renders instead of
 *  the generated emblem, exactly like the reference.
 * ------------------------------------------------------------------ */

type TrackKey = 'lanh-dao' | 'hieu-suat' | 'ai';

const TRACKS: {
  key: TrackKey;
  name: string;
  color: string;
  tag: string;
  desc: string;
  image?: string; // optional 3D figurine art (falls back to generated emblem)
  icon: React.ReactNode;
}[] = [
  {
    key: 'lanh-dao',
    name: 'Lãnh đạo',
    color: '#FF5200',
    tag: 'Leadership',
    desc: 'Tư duy, giao tiếp và năng lực dẫn dắt đội ngũ — nền tảng của người quản lý bản lĩnh.',
    image: '/nl-lanh-dao.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z" />
      </svg>
    )
  },
  {
    key: 'hieu-suat',
    name: 'Quản trị hiệu suất',
    color: '#006FAD',
    tag: 'Performance',
    desc: 'Mục tiêu, đo lường và tối ưu hiệu suất đội ngũ theo từng chu kỳ vận hành.',
    image: '/nl-hieu-suat.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </svg>
    )
  },
  {
    key: 'ai',
    name: 'AI & Công nghệ',
    color: '#F8B200',
    tag: 'Artificial Intelligence',
    desc: 'Ứng dụng AI để làm việc nhanh hơn, thông minh hơn và tự động hoá công việc lặp lại.',
    image: '/nl-ai.png',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="14" height="12" rx="3" />
        <path d="M12 7V3M9 3h6M9 13h.01M15 13h.01M9 19v2M15 19v2" />
      </svg>
    )
  }
];

type Course = {
  id: string;
  track: TrackKey;
  title: string;
  short: string;
  level: 'Cơ bản' | 'Nâng cao' | 'Chuyên gia';
  duration: string;
  desc: string;
  href: string; // ← LMS URL (placeholder '#' for now)
  cover?: string; // ← 16:9 thumbnail (a normal photo; the 3D look comes from the card frame). Swap for the real per-lesson image.
};

// temporary placeholder covers (cycle through the 3 sample images) — replace per course with the real photo
const SAMPLE_COVERS = ['/nl-bai-1.jpg', '/nl-bai-2.jpg', '/nl-bai-3.jpg'];

// generic "what you'll get" bullets for the detail panel (sample content)
const DETAIL_POINTS = [
  'Kiến thức nền tảng kèm ví dụ thực tế áp dụng được ngay.',
  'Bài tập & tình huống theo đúng bối cảnh vận hành GHN.',
  'Chứng nhận hoàn thành ghi nhận trên hệ thống LMS.'
];

const COURSES: Course[] = [
  // ── Lãnh đạo ──
  { id: 'ld1', track: 'lanh-dao', title: 'Tư duy Lãnh đạo', short: 'Tư duy LĐ', level: 'Cơ bản', duration: '60 phút', desc: 'Nền tảng tư duy của người lãnh đạo: tầm nhìn, trách nhiệm và làm gương.', href: '#' },
  { id: 'ld2', track: 'lanh-dao', title: 'Giao tiếp & Truyền cảm hứng', short: 'Giao tiếp', level: 'Cơ bản', duration: '45 phút', desc: 'Kỹ năng truyền đạt thông điệp, lắng nghe và tạo động lực cho đội ngũ.', href: '#' },
  { id: 'ld3', track: 'lanh-dao', title: 'Ra quyết định & Giải quyết vấn đề', short: 'Ra quyết định', level: 'Nâng cao', duration: '90 phút', desc: 'Khung tư duy phân tích tình huống và ra quyết định dưới áp lực.', href: '#' },
  { id: 'ld4', track: 'lanh-dao', title: 'Coaching & Phát triển đội ngũ', short: 'Coaching', level: 'Nâng cao', duration: '75 phút', desc: 'Kèm cặp, phản hồi và phát triển năng lực cho từng thành viên.', href: '#' },

  // ── Quản trị hiệu suất ──
  { id: 'hs1', track: 'hieu-suat', title: 'Thiết lập mục tiêu OKR / KPI', short: 'OKR / KPI', level: 'Cơ bản', duration: '50 phút', desc: 'Xây dựng mục tiêu rõ ràng, đo lường được và gắn với chiến lược.', href: '#' },
  { id: 'hs2', track: 'hieu-suat', title: 'Quản trị hiệu suất đội ngũ', short: 'Hiệu suất', level: 'Nâng cao', duration: '80 phút', desc: 'Theo dõi, phân tích và cải thiện hiệu suất công việc theo chu kỳ.', href: '#' },
  { id: 'hs3', track: 'hieu-suat', title: 'Phản hồi & Đánh giá nhân sự', short: 'Đánh giá', level: 'Cơ bản', duration: '45 phút', desc: 'Nghệ thuật phản hồi mang tính xây dựng và đánh giá công bằng.', href: '#' },
  { id: 'hs4', track: 'hieu-suat', title: 'Quản lý thời gian & Ưu tiên', short: 'Ưu tiên', level: 'Cơ bản', duration: '40 phút', desc: 'Sắp xếp công việc theo mức độ quan trọng và khẩn cấp.', href: '#' },

  // ── AI & Công nghệ ──
  { id: 'ai1', track: 'ai', title: 'Nhập môn AI cho người đi làm', short: 'Nhập môn AI', level: 'Cơ bản', duration: '60 phút', desc: 'Hiểu AI là gì và có thể giúp gì cho công việc hằng ngày.', href: '#' },
  { id: 'ai2', track: 'ai', title: 'Ứng dụng ChatGPT trong công việc', short: 'ChatGPT', level: 'Cơ bản', duration: '55 phút', desc: 'Viết prompt hiệu quả để soạn thảo, tổng hợp và phân tích nhanh.', href: '#' },
  { id: 'ai3', track: 'ai', title: 'Phân tích dữ liệu với AI', short: 'Data + AI', level: 'Nâng cao', duration: '90 phút', desc: 'Dùng công cụ AI để làm sạch, phân tích và trực quan hoá dữ liệu.', href: '#' },
  { id: 'ai4', track: 'ai', title: 'Tự động hoá quy trình với AI', short: 'Tự động hoá', level: 'Chuyên gia', duration: '120 phút', desc: 'Thiết kế luồng tự động hoá công việc lặp lại bằng AI & no-code.', href: '#' }
];

// role → slot placement for the 3 shapes (front/back layering)
const SLOTS: Record<'center' | 'left' | 'right', React.CSSProperties> = {
  center: { left: '50%', width: '56%', bottom: '-2%', zIndex: 40, opacity: 1, filter: 'none', transform: 'translateX(-50%)' },
  left: { left: '17%', width: '27%', bottom: '13%', zIndex: 20, opacity: 0.72, filter: 'blur(1px)', transform: 'translateX(-50%)' },
  right: { left: '83%', width: '29%', bottom: '11%', zIndex: 25, opacity: 0.78, filter: 'blur(0.5px)', transform: 'translateX(-50%)' }
};

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function NangLucPage() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0); // index into TRACKS
  const [lessonIdx, setLessonIdx] = useState(0); // active card in the coverflow
  const [expanded, setExpanded] = useState(false); // detail panel open
  const gridRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  // reset the coverflow whenever the topic changes
  useEffect(() => {
    setLessonIdx(0);
    setExpanded(false);
  }, [active]);

  const activeTrack = TRACKS[active];
  const visibleCourses = COURSES.filter((c) => c.track === activeTrack.key);
  const activeCourse = visibleCourses[lessonIdx] ?? visibleCourses[0];
  const trackOf = (key: TrackKey) => TRACKS.find((t) => t.key === key)!;

  const navigate = (dir: 'prev' | 'next') =>
    setActive((a) => (a + (dir === 'next' ? 1 : TRACKS.length - 1)) % TRACKS.length);

  const roleOf = (i: number): 'center' | 'left' | 'right' =>
    i === active ? 'center' : i === (active + 1) % TRACKS.length ? 'right' : 'left';

  const scrollToGrid = () => gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap');

        .nl-page {
          background-color: #ffffff;
          color: #3D3D3D;
          font-family: 'Exo','Be Vietnam Pro',-apple-system,BlinkMacSystemFont,sans-serif;
          min-height: calc(100vh - 68px);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 48px;
          overflow-x: hidden;
          position: relative;
        }

        /* ── HERO / rotating shape stage — a rounded panel matted in white ── */
        .nl-stage {
          position: relative;
          width: calc(100% - 20px);
          height: clamp(600px, 90vh, 1000px);
          margin: 10px auto 0;
          border-radius: 34px;
          overflow: hidden;
          background-color: var(--accent);
          box-shadow: 0 0 0 5px #fff, 0 40px 80px -48px rgba(0,0,0,.4);
          transition: background-color .65s cubic-bezier(.4,0,.2,1);
          opacity: 0;
        }

        /* Background video (3D tile floor) recoloured to the topic colour.
           grayscale first (kills the source blue), then multiply the accent → clean single-hue tiles. */
        .nl-bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; user-select: none; }
        .nl-bg-video {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transform: scale(1.05);
          filter: grayscale(1) brightness(1.06) contrast(1.4);
        }
        .nl-bg-tint {
          position: absolute; inset: 0;
          background: var(--accent);
          mix-blend-mode: multiply;
          opacity: .82;
          transition: background-color .65s cubic-bezier(.4,0,.2,1);
        }
        .nl-page.nl-mounted .nl-stage { opacity: 1; transition: background-color .65s cubic-bezier(.4,0,.2,1), opacity .8s ease; }
        /* top gloss + bottom vignette (constant, so base colour can crossfade) */
        .nl-stage::before {
          content: ''; position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(circle at 50% 26%, rgba(255,255,255,.22), transparent 58%);
        }
        .nl-stage::after {
          content: ''; position: absolute; inset: 0; z-index: 50; pointer-events: none;
          background: linear-gradient(to top, rgba(0,0,0,.34), transparent 38%);
        }

        /* Top-left brand tag */
        .nl-brand {
          position: absolute; top: 24px; left: 24px; z-index: 60;
          display: flex; align-items: center; gap: 10px;
          color: #fff; opacity: .95;
        }
        .nl-brand-dot {
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.35);
          display: flex; align-items: center; justify-content: center;
        }
        .nl-brand-dot svg { width: 18px; height: 18px; color: #fff; }
        .nl-brand-text { font-size: 11px; font-weight: 800; letter-spacing: .22em; text-transform: uppercase; text-shadow: 0 1px 6px rgba(0,0,0,.3); }

        /* Giant backdrop word */
        .nl-giant {
          position: absolute; top: 22%; left: 50%; transform: translate(-50%,-50%);
          z-index: 5; margin: 0;
          font-family: 'Anton', 'Exo', sans-serif;
          font-weight: 400;
          font-size: clamp(2.6rem, 13vw, 11rem);
          line-height: .9;
          letter-spacing: .01em;
          color: #fff;
          white-space: nowrap;
          text-transform: uppercase;
          text-shadow: 0 6px 40px rgba(0,0,0,.28);
          pointer-events: none;
          user-select: none;
        }

        /* Shapes layer */
        .nl-shapes { position: absolute; inset: 0; z-index: 10; }
        .nl-shape {
          position: absolute;
          bottom: 0;
          transform-origin: bottom center;
          display: flex; flex-direction: column; align-items: center;
          cursor: pointer;
          border: none; background: none; padding: 0;
          transition: left .65s cubic-bezier(.4,0,.2,1),
                      width .65s cubic-bezier(.4,0,.2,1),
                      bottom .65s cubic-bezier(.4,0,.2,1),
                      opacity .65s cubic-bezier(.4,0,.2,1),
                      filter .65s cubic-bezier(.4,0,.2,1),
                      transform .65s cubic-bezier(.4,0,.2,1);
        }

        .nl-emblem {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 30%;
          background: linear-gradient(155deg,
            color-mix(in srgb, var(--sc) 12%, #fff) 0%,
            var(--sc) 52%,
            color-mix(in srgb, var(--sc) 58%, #000) 100%);
          box-shadow:
            0 32px 60px rgba(0,0,0,.30),
            inset 0 4px 0 rgba(255,255,255,.45),
            inset 0 -24px 46px color-mix(in srgb, var(--sc) 62%, #000);
          display: flex; align-items: center; justify-content: center;
          position: relative;
          animation: nlBob 5.5s ease-in-out infinite;
          animation-delay: var(--bd, 0s);
        }
        /* glossy highlight — makes it read as a soft 3D sticker */
        .nl-emblem::before {
          content: '';
          position: absolute; top: 7%; left: 12%; width: 55%; height: 32%;
          border-radius: 50%;
          background: radial-gradient(ellipse at 45% 40%, rgba(255,255,255,.65), transparent 72%);
          filter: blur(3px);
          pointer-events: none;
        }
        .nl-emblem-icon { width: 44%; height: 44%; color: #fff; margin-bottom: 10%; filter: drop-shadow(0 4px 10px rgba(0,0,0,.28)); }
        .nl-emblem-icon svg { width: 100%; height: 100%; }
        .nl-emblem-tag {
          position: absolute; bottom: 15%; left: 0; right: 0; text-align: center;
          font-family: 'Anton','Exo',sans-serif; font-weight: 400;
          font-size: clamp(11px, 1.5vw, 24px);
          color: #fff; letter-spacing: .05em; text-transform: uppercase;
          text-shadow: 0 2px 10px rgba(0,0,0,.35);
        }
        .nl-shape-img {
          position: relative; z-index: 1;
          width: 100%; height: auto; display: block;
          margin-bottom: 9%; /* lift so feet rest on the podium top face */
          filter: drop-shadow(0 26px 40px rgba(0,0,0,.4));
          animation: nlBob 5.5s ease-in-out infinite;
          animation-delay: var(--bd, 0s);
        }
        @keyframes nlBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2%); } }

        /* 3D cylinder podium — top face (character stands on) + front face (engraved title) */
        .nl-pedestal {
          position: absolute; bottom: 1%; left: 50%; transform: translateX(-50%);
          width: 56%; aspect-ratio: 2.9 / 1;
          z-index: 0;
        }
        /* top face — behind the character so they stand ON it */
        .nl-ped-top {
          position: absolute; left: 0; right: 0; top: 0; height: 50%;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 36%, #ffffff 0%, #f2f2f2 55%, #d8d8d8 100%);
          box-shadow: inset 0 6px 12px rgba(255,255,255,.95), inset 0 -8px 14px rgba(0,0,0,.10), 0 4px 8px rgba(0,0,0,.12);
          z-index: 0;
        }
        /* front face — in front of the character's feet, carries the title */
        .nl-ped-front {
          position: absolute; left: 8%; right: 8%; top: 25%; bottom: 3%;
          border-radius: 8% 8% 50% 50% / 10% 10% 90% 90%;
          background: linear-gradient(to bottom, #d2d2d2 0%, #c6c6c6 45%, #a6a6a6 100%);
          box-shadow: 0 18px 28px rgba(0,0,0,.34), inset 0 4px 7px rgba(255,255,255,.55), inset 0 -7px 12px rgba(0,0,0,.16);
          z-index: 2;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        /* subtle stone texture on the front face */
        .nl-ped-front::after {
          content: ''; position: absolute; inset: 0;
          background: url('/paper-texture.png'); background-size: 170px auto;
          mix-blend-mode: soft-light; opacity: .5;
        }
        /* engraved / carved-in-stone title on the front face */
        .nl-pedestal-name {
          position: relative; z-index: 1; padding-top: 5%;
          font-family: 'Anton','Exo',sans-serif; font-weight: 400;
          font-size: clamp(9px, 1.35vw, 20px);
          letter-spacing: .14em; text-transform: uppercase;
          color: #6d6d6d;
          text-shadow: 0 -1px 0 rgba(0,0,0,.38), 0 1px 0 rgba(255,255,255,.65);
          white-space: nowrap;
        }

        /* Bottom-left glass info panel */
        .nl-info {
          position: absolute; bottom: 36px; left: 36px; z-index: 60;
          max-width: 370px; color: #fff;
          background: rgba(255,255,255,.10);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 22px;
          padding: 22px 24px 24px;
          box-shadow: 0 24px 60px rgba(0,0,0,.28);
        }
        .nl-info-tag { font-size: 11px; font-weight: 800; letter-spacing: .2em; text-transform: uppercase; opacity: .9; margin: 0 0 6px; }
        .nl-info-title {
          font-family: 'Anton','Exo',sans-serif; font-weight: 400;
          font-size: clamp(24px, 3.4vw, 40px); line-height: 1.05;
          text-transform: uppercase; letter-spacing: .01em; margin: 0 0 10px;
          text-shadow: 0 3px 16px rgba(0,0,0,.35);
        }
        .nl-info-desc { font-size: 13.5px; line-height: 1.55; opacity: .88; margin: 0 0 18px; }
        .nl-nav { display: flex; gap: 14px; }
        .nl-navbtn {
          width: 60px; height: 60px; border-radius: 50%;
          background: transparent; border: 2px solid rgba(255,255,255,.85);
          color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: transform .15s ease, background-color .15s ease;
        }
        .nl-navbtn svg { width: 24px; height: 24px; }
        .nl-navbtn:hover { transform: scale(1.08); background: rgba(255,255,255,.12); }

        /* Bottom-right CTA */
        .nl-discover {
          position: absolute; bottom: 44px; right: 44px; z-index: 60;
          display: inline-flex; align-items: center; gap: 12px;
          background: none; border: none; cursor: pointer;
          font-family: 'Anton','Exo',sans-serif; font-weight: 400;
          font-size: clamp(20px, 4vw, 52px);
          color: #fff; opacity: .95; letter-spacing: -0.02em; line-height: 1;
          text-transform: uppercase;
          transition: opacity .2s ease;
        }
        .nl-discover:hover { opacity: 1; }
        .nl-discover svg { width: 30px; height: 30px; }

        /* ── LESSONS SECTION ── */
        .nl-lessons {
          width: 100%;
          max-width: 1280px;
          padding: 0 24px;
          margin-top: 76px;
          scroll-margin-top: 90px;
          position: relative;
        }

        /* Header zone — plain: bubble selector + title */
        .nl-lessons-head {
          position: relative;
          padding: 8px 0 0;
          display: flex; flex-direction: column; align-items: center;
        }

        /* Floating 3D decorations inside the hero — each drifts on its own gentle path */
        .nl-deco { position: absolute; z-index: 6; pointer-events: none; }
        .nl-deco-a {
          width: clamp(52px, 6vw, 94px); aspect-ratio: 1; border-radius: 50%;
          background: radial-gradient(circle at 34% 28%, #fff 0%, color-mix(in srgb, var(--accent) 35%, #fff) 40%, color-mix(in srgb, var(--accent) 78%, #000) 100%);
          box-shadow: 0 26px 42px -16px rgba(0,0,0,.45), inset 0 -10px 18px rgba(0,0,0,.24);
          top: 11%; left: 5%;
          animation: nlDriftA 8s ease-in-out infinite;
        }
        .nl-deco-b {
          width: clamp(42px, 5vw, 78px); aspect-ratio: 1; border-radius: 28%;
          background: linear-gradient(150deg, #fff 0%, color-mix(in srgb, var(--accent) 28%, #fff) 45%, color-mix(in srgb, var(--accent) 72%, #000) 100%);
          box-shadow: 0 22px 36px -16px rgba(0,0,0,.45), inset 0 3px 0 rgba(255,255,255,.75), inset 0 -8px 14px rgba(0,0,0,.26);
          top: 13%; right: 6%;
          animation: nlDriftB 10s ease-in-out infinite; animation-delay: .6s;
        }
        .nl-deco-c {
          width: clamp(46px, 5.5vw, 84px); aspect-ratio: 1; border-radius: 50%;
          border: clamp(9px, 1.1vw, 15px) solid transparent;
          background-image: linear-gradient(var(--accent), var(--accent)), conic-gradient(from 210deg, #fff, color-mix(in srgb, var(--accent) 70%, #000), #fff);
          background-origin: border-box; background-clip: content-box, border-box;
          box-shadow: 0 18px 30px -16px rgba(0,0,0,.4);
          top: 48%; right: 3.5%;
          animation: nlDriftC 12s ease-in-out infinite;
        }
        .nl-deco-d {
          width: clamp(34px, 4vw, 60px); aspect-ratio: 1; border-radius: 50%;
          background: radial-gradient(circle at 36% 30%, #fff 0%, color-mix(in srgb, var(--accent) 45%, #fff) 45%, color-mix(in srgb, var(--accent) 75%, #000) 100%);
          box-shadow: 0 18px 28px -14px rgba(0,0,0,.4), inset 0 -6px 12px rgba(0,0,0,.22);
          top: 32%; left: 3%;
          animation: nlDriftD 7s ease-in-out infinite; animation-delay: 1.2s;
        }
        @keyframes nlDriftA { 0%,100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(10px,-18px) rotate(8deg); } }
        @keyframes nlDriftB { 0%,100% { transform: translate(0,0) rotate(-10deg); } 50% { transform: translate(-12px,-12px) rotate(2deg); } }
        @keyframes nlDriftC { 0%,100% { transform: translate(0,0) rotate(0deg); } 30% { transform: translate(-8px,10px) rotate(-6deg); } 65% { transform: translate(8px,-12px) rotate(6deg); } }
        @keyframes nlDriftD { 0%,100% { transform: translate(0,0); } 50% { transform: translate(14px,8px); } }

        /* Acrylic bubble topic selector */
        .nl-bubbles { position: relative; z-index: 3; display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .nl-bubble {
          position: relative; overflow: hidden;
          font-family: inherit; font-size: 14px; font-weight: 800;
          color: #3D3D3D;
          padding: 13px 26px;
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,.85);
          background: rgba(255,255,255,.42);
          backdrop-filter: blur(15px) saturate(160%);
          -webkit-backdrop-filter: blur(15px) saturate(160%);
          box-shadow: 0 12px 26px -10px rgba(0,0,0,.30), inset 0 2px 6px rgba(255,255,255,.9), inset 0 -6px 12px rgba(0,0,0,.06);
          cursor: pointer;
          display: inline-flex; align-items: center; gap: 10px;
          transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease, color .3s ease, background .3s ease;
        }
        .nl-bubble::before {
          content: ''; position: absolute; top: 3px; left: 15%; width: 46%; height: 42%;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 40%, rgba(255,255,255,.95), transparent 74%);
          pointer-events: none;
        }
        .nl-bubble:hover { transform: translateY(-3px) scale(1.04); }
        .nl-bubble.active {
          color: #fff;
          background: linear-gradient(160deg, color-mix(in srgb, var(--c) 80%, #fff) 0%, var(--c) 54%, color-mix(in srgb, var(--c) 62%, #000) 100%);
          border-color: rgba(255,255,255,.6);
          box-shadow: 0 16px 34px -10px color-mix(in srgb, var(--c) 72%, #000), inset 0 2px 6px rgba(255,255,255,.55), inset 0 -9px 16px rgba(0,0,0,.2);
          transform: translateY(-2px) scale(1.06);
        }
        .nl-bubble-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--c); box-shadow: inset 0 1px 2px rgba(255,255,255,.7), 0 0 8px color-mix(in srgb, var(--c) 60%, transparent); }
        .nl-bubble.active .nl-bubble-dot { background: #fff; box-shadow: 0 0 10px rgba(255,255,255,.9); }

        /* Title BELOW the selector */
        .nl-lessons-titlewrap { position: relative; z-index: 3; text-align: center; margin-top: 30px; padding-bottom: 40px; max-width: 62%; }
        .nl-lessons-tag { font-size: 12px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; color: var(--accent); transition: color .5s ease; margin: 0 0 8px; }
        .nl-lessons-title {
          font-family: 'Anton','Exo',sans-serif; font-weight: 400;
          font-size: clamp(1.9rem, 4.8vw, 3.3rem); line-height: 1.02;
          text-transform: uppercase; letter-spacing: .01em;
          color: #2b2b2b; margin: 0;
        }

        /* ── LESSONS: 3D coverflow (stacked cards, active in the centre) ── */
        .nl-flow {
          position: relative;
          width: 100%; max-width: 1120px;
          height: 500px;
          margin: 44px auto 0;
          perspective: 1800px;
        }

        .nl-flowcard {
          position: absolute; left: 50%; top: 10px;
          width: clamp(300px, 33vw, 400px); height: 468px;
          border-radius: 28px; overflow: hidden;
          background: #fff;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 30px 60px -26px color-mix(in srgb, var(--accent) 45%, #000);
          display: flex; flex-direction: column;
          cursor: pointer; user-select: none;
          transition: transform .55s cubic-bezier(.22,1,.36,1), opacity .55s ease, filter .55s ease, box-shadow .4s ease, border-color .3s ease, border-radius .4s ease;
          will-change: transform, opacity;
        }
        .nl-flowcard.is-active { cursor: default; border-color: color-mix(in srgb, var(--accent) 45%, #fff); }
        /* expanded: active card squares its right edge & joins the detail panel; buttons hidden */
        .nl-flow--expanded .nl-flowcard.is-active { border-radius: 28px 0 0 28px; z-index: 42; }
        .nl-flow--expanded .nl-flowcard.is-active .nl-fc-actions { display: none; }

        /* image on top of the card */
        .nl-fc-img { position: relative; height: 210px; flex-shrink: 0; overflow: hidden; background: #dcdcdc; }
        .nl-fc-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .nl-fc-img::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.35), transparent 55%); }
        .nl-fc-badge {
          position: absolute; top: 14px; left: 14px; z-index: 2;
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .12em;
          color: #fff; background: color-mix(in srgb, var(--accent) 78%, #000);
          padding: 5px 11px; border-radius: 20px;
        }
        .nl-fc-badge svg { width: 12px; height: 12px; }

        .nl-fc-body { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .nl-fc-label { font-size: 11px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; color: var(--accent); margin: 0; }
        .nl-fc-title { font-family: 'Anton','Exo',sans-serif; font-weight: 400; font-size: 22px; line-height: 1.14; text-transform: uppercase; color: #2b2b2b; margin: 0; }
        .nl-fc-meta { font-size: 12px; font-weight: 600; color: #8a8a8a; display: inline-flex; align-items: center; gap: 6px; }
        .nl-fc-meta svg { width: 13px; height: 13px; }

        /* actions appear only on the active card */
        .nl-fc-actions { margin-top: auto; display: flex; gap: 10px; opacity: 0; transform: translateY(8px); pointer-events: none; transition: opacity .4s ease .12s, transform .4s ease .12s; }
        .nl-flowcard.is-active .nl-fc-actions { opacity: 1; transform: none; pointer-events: auto; }
        .nl-fc-primary {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .03em;
          color: #fff; background: var(--accent); border: none; text-decoration: none;
          padding: 11px 12px; border-radius: 30px; cursor: pointer;
          box-shadow: 0 8px 18px -6px color-mix(in srgb, var(--accent) 70%, #000);
          transition: filter .2s ease, transform .2s ease;
        }
        .nl-fc-primary:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .nl-fc-primary svg { width: 14px; height: 14px; }
        .nl-fc-more {
          display: inline-flex; align-items: center; justify-content: center; gap: 5px;
          font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .03em;
          color: var(--accent); background: #fff; cursor: pointer;
          padding: 11px 15px; border-radius: 30px;
          border: 1.5px solid color-mix(in srgb, var(--accent) 40%, #fff);
          transition: background .2s ease;
        }
        .nl-fc-more:hover { background: color-mix(in srgb, var(--accent) 10%, #fff); }

        /* detail panel — bigger, joined to the active card's right edge */
        .nl-detail {
          position: absolute; top: 10px; left: 50%; right: 0; height: 468px;
          border-radius: 0 28px 28px 0;
          background: #fff; border: 1px solid rgba(0,0,0,.07); border-left: none;
          box-shadow: 20px 40px 70px -34px color-mix(in srgb, var(--accent) 45%, #000);
          padding: 42px 48px; display: flex; flex-direction: column;
          opacity: 0; transform: translateX(24px); pointer-events: none;
          transition: opacity .5s ease, transform .55s cubic-bezier(.22,1,.36,1);
          z-index: 40;
        }
        .nl-flow--expanded .nl-detail { opacity: 1; transform: none; pointer-events: auto; }
        .nl-detail-close {
          position: absolute; top: 18px; right: 18px;
          width: 36px; height: 36px; border-radius: 50%;
          background: #f2f2f2; border: none; cursor: pointer; color: #555;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s ease;
        }
        .nl-detail-close:hover { background: #e6e6e6; }
        .nl-detail-close svg { width: 18px; height: 18px; }
        .nl-detail-label { font-size: 11px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; color: var(--accent); margin: 0 0 8px; }
        .nl-detail-title { font-family: 'Anton','Exo',sans-serif; font-weight: 400; font-size: clamp(24px, 2.6vw, 34px); line-height: 1.06; text-transform: uppercase; color: #2b2b2b; margin: 0 0 14px; padding-right: 40px; }
        .nl-detail-meta { display: flex; gap: 18px; margin: 0 0 18px; }
        .nl-detail-meta span { font-size: 12.5px; font-weight: 700; color: #6a6a6a; display: inline-flex; align-items: center; gap: 6px; }
        .nl-detail-meta svg { width: 14px; height: 14px; color: var(--accent); }
        .nl-detail-desc { font-size: 14.5px; line-height: 1.7; color: #4a4a4a; margin: 0 0 18px; }
        .nl-detail-list { list-style: none; margin: 0 0 auto; padding: 0; display: flex; flex-direction: column; gap: 11px; }
        .nl-detail-list li { font-size: 13.5px; color: #4a4a4a; display: flex; gap: 10px; align-items: flex-start; }
        .nl-detail-list li svg { width: 16px; height: 16px; color: var(--accent); flex-shrink: 0; margin-top: 1px; }
        .nl-detail-cta {
          margin-top: 24px; align-self: flex-start;
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 13.5px; font-weight: 800; text-transform: uppercase; letter-spacing: .03em;
          color: #fff; background: var(--accent); text-decoration: none;
          padding: 13px 28px; border-radius: 30px;
          box-shadow: 0 10px 22px -6px color-mix(in srgb, var(--accent) 70%, #000);
          transition: filter .2s ease, transform .2s ease, gap .2s ease;
        }
        .nl-detail-cta:hover { filter: brightness(1.08); transform: translateY(-1px); gap: 11px; }
        .nl-detail-cta svg { width: 16px; height: 16px; }

        /* pagination dots */
        .nl-dots { display: flex; justify-content: center; gap: 9px; margin-top: 30px; }
        .nl-dot { width: 9px; height: 9px; border-radius: 50%; border: none; padding: 0; cursor: pointer; background: color-mix(in srgb, var(--accent) 22%, #ccc); transition: all .3s ease; }
        .nl-dot.active { width: 30px; border-radius: 6px; background: var(--accent); }

        .nl-note {
          max-width: 1280px; width: 100%;
          margin: 44px auto 0; padding: 0 24px;
          font-size: 12.5px; color: #9a9a9a; text-align: center; font-style: italic;
        }

        @media (prefers-reduced-motion: reduce) {
          .nl-emblem, .nl-shape-img, .nl-deco { animation: none !important; }
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .nl-flow { max-width: 900px; }
        }
        @media (max-width: 900px) {
          .nl-flow { height: 480px; }
          .nl-flowcard { width: clamp(230px, 82vw, 330px); height: 450px; }
          .nl-fc-img { height: 185px; }
          /* on mobile the detail panel is a full-width overlay; the card hides behind it */
          .nl-detail { left: 2%; right: 2%; top: 6px; height: auto; bottom: 6px; padding: 28px 24px; border-radius: 26px; border-left: 1px solid rgba(0,0,0,.07); z-index: 50; }
          .nl-flow--expanded .nl-flowcard.is-active { opacity: 0; pointer-events: none; border-radius: 28px; }
          .nl-lessons-head { padding: 24px 6px 0; }
          .nl-lessons-titlewrap { max-width: 100%; padding-bottom: 32px; }
          .nl-deco { display: none; }
          .nl-stage {
            height: clamp(460px, 82vh, 720px);
            width: calc(100% - 14px);
            margin-top: 7px;
            border-radius: 24px;
            box-shadow: 0 0 0 4px #fff, 0 26px 50px -34px rgba(0,0,0,.4);
          }
          .nl-shape.nl-shape-side { display: none; }
          .nl-shape.nl-shape-center { width: 92% !important; }
          .nl-giant { font-size: clamp(2rem, 17vw, 5rem); top: 20%; }
          .nl-info { left: 20px; bottom: 24px; max-width: 60%; }
          .nl-info-desc { display: none; }
          .nl-navbtn { width: 48px; height: 48px; }
          .nl-navbtn svg { width: 20px; height: 20px; }
          .nl-discover { right: 18px; bottom: 26px; }
          .nl-discover svg { width: 20px; height: 20px; }
          .nl-brand { top: 16px; left: 16px; }
        }
      `}</style>

      <div className={`nl-page${mounted ? ' nl-mounted' : ''}`} style={{ ['--accent' as string]: activeTrack.color }}>
        {/* ── HERO STAGE ── */}
        <section className="nl-stage">
          {/* Background: 3D tile-floor video, tinted to the active topic colour */}
          <div className="nl-bg" aria-hidden="true">
            <video
              className="nl-bg-video"
              autoPlay
              loop
              muted
              playsInline
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
            />
            <span className="nl-bg-tint" />
          </div>

          <div className="nl-brand">
            <span className="nl-brand-dot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" />
              </svg>
            </span>
            <span className="nl-brand-text">Học viện Năng lực</span>
          </div>

          {/* Giant backdrop word the shapes are anchored to */}
          <h1 className="nl-giant">NĂNG LỰC GHN</h1>

          {/* Floating 3D decorations */}
          <span className="nl-deco nl-deco-a" />
          <span className="nl-deco nl-deco-b" />
          <span className="nl-deco nl-deco-c" />
          <span className="nl-deco nl-deco-d" />

          {/* The 3 competency shapes, front-to-back */}
          <div className="nl-shapes">
            {TRACKS.map((track, i) => {
              const role = roleOf(i);
              return (
                <button
                  key={track.key}
                  type="button"
                  className={`nl-shape ${role === 'center' ? 'nl-shape-center' : 'nl-shape-side'}`}
                  onClick={() => setActive(i)}
                  title={track.name}
                  aria-label={`Chọn ${track.name}`}
                  style={{ ...SLOTS[role], ['--sc' as string]: track.color, ['--bd' as string]: `${i * 0.7}s` }}
                >
                  <span className="nl-pedestal">
                    <span className="nl-ped-top" />
                    <span className="nl-ped-front">
                      <span className="nl-pedestal-name">{track.name}</span>
                    </span>
                  </span>
                  {track.image ? (
                    <img className="nl-shape-img" src={track.image} alt={track.name} />
                  ) : (
                    <span className="nl-emblem">
                      <span className="nl-emblem-icon">{track.icon}</span>
                      <span className="nl-emblem-tag">{track.name}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom-left info + prev/next */}
          <div className="nl-info">
            <p className="nl-info-tag">{activeTrack.tag}</p>
            <h2 className="nl-info-title">{activeTrack.name}</h2>
            <p className="nl-info-desc">{activeTrack.desc}</p>
            <div className="nl-nav">
              <button type="button" className="nl-navbtn" onClick={() => navigate('prev')} aria-label="Khía cạnh trước">
                <ArrowLeft />
              </button>
              <button type="button" className="nl-navbtn" onClick={() => navigate('next')} aria-label="Khía cạnh kế tiếp">
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Bottom-right CTA → scroll to courses */}
          <button type="button" className="nl-discover" onClick={scrollToGrid}>
            Xem khoá học <ArrowRight />
          </button>
        </section>

        {/* ── LESSONS (follow the active shape) ── */}
        <section className="nl-lessons" ref={gridRef}>
          {/* Header: acrylic bubble selector → title */}
          <div className="nl-lessons-head">
            {/* Acrylic bubble topic selector */}
            <div className="nl-bubbles">
              {TRACKS.map((t, i) => (
                <button
                  key={t.key}
                  className={`nl-bubble${active === i ? ' active' : ''}`}
                  style={{ ['--c' as string]: t.color }}
                  onClick={() => setActive(i)}
                >
                  <span className="nl-bubble-dot" />
                  {t.name}
                </button>
              ))}
            </div>

            {/* Title below the selector */}
            <div className="nl-lessons-titlewrap">
              <p className="nl-lessons-tag">{activeTrack.tag} · {visibleCourses.length} khoá học</p>
              <h2 className="nl-lessons-title">Khoá học {activeTrack.name}</h2>
            </div>
          </div>

          {/* Coverflow: stacked cards, active in the centre */}
          <div className={`nl-flow${expanded ? ' nl-flow--expanded' : ''}`}>
            {visibleCourses.map((c, i) => {
              const t = trackOf(c.track);
              const cover = c.cover ?? SAMPLE_COVERS[i % SAMPLE_COVERS.length];
              const N = visibleCourses.length;
              // circular offset (shortest signed distance around the ring) → always stacked both sides
              const rel = ((i - lessonIdx) % N + N) % N;
              const offset = rel > N / 2 ? rel - N : rel;
              const isActive = offset === 0;
              const abs = Math.abs(offset);
              const dir = offset === 0 ? 0 : offset > 0 ? 1 : -1;
              const maxSide = Math.floor((N - 1) / 2); // farthest card tucks behind the centre
              let style: React.CSSProperties;
              if (expanded) {
                style = isActive
                  ? { transform: 'translateX(-100%) scale(1)', opacity: 1, zIndex: 42, filter: 'none' }
                  : { transform: `translateX(calc(-50% + ${dir * 150}%)) scale(0.6)`, opacity: 0, zIndex: 0, pointerEvents: 'none', filter: 'blur(4px)' };
              } else if (abs === 0) {
                style = { transform: 'translateX(-50%) scale(1)', opacity: 1, filter: 'none', zIndex: 30 };
              } else if (abs <= maxSide) {
                const tx = dir * (58 + (abs - 1) * 46);
                style = {
                  transform: `translateX(calc(-50% + ${tx}%)) scale(${1 - abs * 0.15})`,
                  opacity: abs === 1 ? 0.6 : 0.35,
                  filter: `blur(${abs === 1 ? 2 : 3.5}px)`,
                  zIndex: 30 - abs * 10
                };
              } else {
                // farthest card sits behind the centre as the "next in the loop"
                style = { transform: `translateX(calc(-50% + ${dir * 6}%)) scale(0.62)`, opacity: 0.16, filter: 'blur(5px)', zIndex: 1, pointerEvents: 'none' };
              }
              return (
                <div
                  key={c.id}
                  className={`nl-flowcard${isActive ? ' is-active' : ''}`}
                  style={{ ...style, ['--accent' as string]: t.color }}
                  onClick={() => { if (!isActive) { setLessonIdx(i); setExpanded(false); } }}
                >
                  <div className="nl-fc-img">
                    <img src={cover} alt={c.title} loading="lazy" />
                    <span className="nl-fc-badge">{t.icon} Bài học {String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="nl-fc-body">
                    <p className="nl-fc-label">{t.name}</p>
                    <h3 className="nl-fc-title">{c.title}</h3>
                    <span className="nl-fc-meta">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                      </svg>
                      {c.duration} · {c.level}
                    </span>
                    <div className="nl-fc-actions">
                      <a
                        className="nl-fc-primary"
                        href={c.href}
                        onClick={(e) => e.stopPropagation()}
                        {...(c.href !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        Học ngay <ArrowRight />
                      </a>
                      <button className="nl-fc-more" type="button" onClick={(e) => { e.stopPropagation(); setExpanded(true); }}>
                        Xem thêm
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Detail panel — slides in on the right when "Xem thêm" is clicked */}
            {activeCourse && (
              <div className="nl-detail" style={{ ['--accent' as string]: activeTrack.color }}>
                <button className="nl-detail-close" type="button" onClick={() => setExpanded(false)} aria-label="Đóng">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
                <p className="nl-detail-label">Bài học {String(lessonIdx + 1).padStart(2, '0')} · {activeTrack.name}</p>
                <h3 className="nl-detail-title">{activeCourse.title}</h3>
                <div className="nl-detail-meta">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                    </svg>
                    {activeCourse.duration}
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 20h4V10H3zM10 20h4V4h-4zM17 20h4v-7h-4z" />
                    </svg>
                    {activeCourse.level}
                  </span>
                </div>
                <p className="nl-detail-desc">{activeCourse.desc}</p>
                <ul className="nl-detail-list">
                  {DETAIL_POINTS.map((p) => (
                    <li key={p}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  className="nl-detail-cta"
                  href={activeCourse.href}
                  {...(activeCourse.href !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  Học ngay <ArrowRight />
                </a>
              </div>
            )}
          </div>

          {/* Pagination dots */}
          <div className="nl-dots">
            {visibleCourses.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`nl-dot${i === lessonIdx ? ' active' : ''}`}
                style={{ ['--accent' as string]: activeTrack.color }}
                onClick={() => { setLessonIdx(i); setExpanded(false); }}
                aria-label={`Bài học ${i + 1}`}
              />
            ))}
          </div>

        </section>
      </div>
    </>
  );
}
