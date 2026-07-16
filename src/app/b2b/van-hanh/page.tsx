'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Helper hook for counting up animation when scrolled into view
function useCountUp(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldStart(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const end = target;
    const totalMiliseconds = duration;
    const stepTime = 20;
    const totalSteps = totalMiliseconds / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [shouldStart, target, duration]);

  return { count, elementRef };
}

// Stats component to wrap count up behavior
function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, elementRef } = useCountUp(value);
  return (
    <div className="vh-stat-card" ref={elementRef}>
      <div className="vh-stat-num">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="vh-stat-label">{label}</div>
    </div>
  );
}

// Slides for the Hero Background Slider
const slides = [
  {
    title: 'VẬN CHUYỂN HÀNG NẶNG B2B',
    desc: 'Giao hàng nặng chặng cuối an toàn, đáp ứng nhu cầu lưu thông hàng hóa lớn của doanh nghiệp.',
    img: '/b2b_warehouse_hero.png'
  },
  {
    title: 'GIAO THẲNG NGUYÊN CHUYẾN (FTL)',
    desc: 'Tối ưu lộ trình vận chuyển thẳng từ kho gửi đến kho nhận, rút ngắn thời gian và đảm bảo an toàn tuyệt đối.',
    img: '/2.jpg'
  },
  {
    title: 'VẬN CHUYỂN HÀNG LẺ (LTL)',
    desc: 'Gom ghép hàng cồng kềnh linh hoạt, tiết kiệm chi phí vận chuyển tối đa cho các lô hàng vừa và nhỏ.',
    img: '/3.jpg'
  },
  {
    title: 'HỆ THỐNG XỬ LÝ TỰ ĐỘNG',
    desc: 'Tốc độ phân loại vượt trội, tự động hóa quy trình nhận tải, bắn kiểm và quản lý rủi ro chặng giữa.',
    img: '/5.jpg'
  }
];

// Roles for the Accordion Selector
const roles = [
  {
    index: '01',
    badge: 'R-01 | OPERATION TEAM LEADER',
    title: 'Operation Team Leader',
    desc: 'Vai trò trưởng nhóm vận hành và giám sát. Quản lý, điều phối hoạt động tại kho bãi, theo dõi hiệu suất xử lý, xử lý rủi ro và điều hành nhân sự.',
    btnText: 'Trang quản lý',
    href: '/am-kynang-chuyenmon'
  },
  {
    index: '02',
    badge: 'R-02 | NHÂN VIÊN XỬ LÝ B2B',
    title: 'Nhân viên Xử lý B2B',
    desc: 'Chuyên gia quy trình phân loại và xử lý tại kho. Đảm nhận tiếp nhận hàng lấy, đóng gói, bắn kiểm, luân chuyển hàng nặng và giao tiếp nghiệp vụ.',
    btnText: 'Quy trình xử lý',
    href: '/nvxl'
  },
  {
    index: '03',
    badge: 'R-03 | NHÂN VIÊN GIAO NHẬN B2B',
    title: 'Nhân viên Giao nhận B2B',
    desc: 'Chuyên gia tiếp nhận và giao hàng thực địa. Đảm nhận quy trình giao hàng, lấy hàng nặng, kiểm soát chứng từ POD, check-in bến bãi và giải trình chênh lệch.',
    btnText: 'Quy trình giao nhận',
    href: '/nvgn'
  }
];

export default function VanHanhPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeRole, setActiveRole] = useState(1); // Default is middle card (Nhân viên Xử lý B2B)

  // Slide autoplay effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <style>{`
        /* Minimalist & High-End B2B Operations Hub Style Guide - Xanh Teal #00a19a Theme */
        .vh-page {
          background-color: #f7f7f7 !important;
          background-image:
            linear-gradient(rgba(247, 247, 247, 0.94), rgba(247, 247, 247, 0.94)),
            repeating-linear-gradient(0deg, rgba(0, 64, 60, 0.018) 0, rgba(0, 64, 60, 0.018) 1px, transparent 1px, transparent 4px) !important;
          background-repeat: repeat !important;
          background-size: auto !important;
          color: #111111 !important;
          font-family: 'Space Grotesk', 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: calc(100vh - 72px);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 120px 0 !important; /* No top/left/right padding to allow full-width Hero */
          overflow-x: hidden;
          position: relative;
        }

        /* Ambient drifting background grid */
        .vh-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0, 161, 154, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 161, 154, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          background-position: center;
          opacity: 0.8;
          pointer-events: none;
          z-index: 0;
          animation: gridDrift 40s linear infinite;
        }

        @keyframes gridDrift {
          from { background-position: 0 0; }
          to { background-position: 120px 240px; }
        }

        .vh-container {
          max-width: 1140px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 120px;
          z-index: 1;
          padding: 80px 24px 0 !important; /* Spacing for the centered page content */
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .vh-page.vh-mounted .vh-container {
          opacity: 1;
          transform: translateY(0);
        }

        /* Premium Background Hero Slider Carousel (Image 5 style - Full screen width edge-to-edge) */
        .vh-slider-container {
          width: 100%;
          height: 520px; /* Taller, spacious */
          position: relative;
          border-radius: 0 !important; /* Edge to edge, no framing */
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
        }

        .vh-slides-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .vh-slide-item {
          position: absolute;
          inset: 0;
          opacity: 0;
          z-index: 0;
          background-size: cover;
          background-position: center;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .vh-slide-item.vh-active {
          opacity: 1;
          z-index: 1;
        }

        /* Ambient dark vignette gradient */
        .vh-slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%),
                      linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 70%);
          z-index: 2;
        }

        /* Top-left metadata overlay */
        .vh-slider-badge-area {
          position: absolute;
          top: 36px;
          left: 48px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vh-slider-badge-title {
          font-family: 'Anton', sans-serif !important;
          font-size: 22px;
          color: #FFFFFF;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .vh-slider-badge-tag {
          padding: 3px 10px;
          background-color: #00a19a;
          color: #FFFFFF;
          font-family: monospace;
          font-size: 10px;
          font-weight: 700;
          border-radius: 4px;
          text-transform: uppercase;
          width: fit-content;
          letter-spacing: 0.05em;
        }

        /* Glassmorphism description card at bottom left */
        .vh-slider-card {
          position: absolute;
          bottom: 48px;
          left: 48px;
          z-index: 3;
          background: rgba(18, 20, 22, 0.75) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border-left: 4px solid #00a19a !important;
          border-radius: 16px !important;
          padding: 32px !important;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        .vh-slider-title {
          font-family: 'Anton', sans-serif !important;
          font-size: 28px;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 0.03em;
        }

        .vh-slider-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #E5E7EB;
          margin: 0;
        }

        /* Slider Left/Right Arrows */
        .vh-slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 3;
          transition: all 0.25s ease;
        }

        .vh-slider-arrow:hover {
          background: #00a19a;
          border-color: #00a19a;
          transform: translateY(-50%) scale(1.08);
        }

        .vh-slider-arrow.vh-left {
          left: 24px;
        }

        .vh-slider-arrow.vh-right {
          right: 24px;
        }

        /* Dot Indicators */
        .vh-slider-dots {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 3;
        }

        .vh-slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .vh-slider-dot.vh-active {
          background: #00a19a;
          width: 24px;
          border-radius: 4px;
        }

        /* Counter at bottom right */
        .vh-slider-counter {
          position: absolute;
          bottom: 32px;
          right: 48px;
          z-index: 3;
          font-family: 'Anton', sans-serif !important;
          font-size: 22px;
          color: #FFFFFF;
          letter-spacing: 0.05em;
        }

        .vh-slider-counter-cur {
          color: #00a19a;
        }

        /* Section Layouts */
        .vh-sec {
          display: flex;
          flex-direction: column;
          gap: 48px;
          width: 100%;
        }

        .vh-sec-title-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .vh-sec-tag {
          font-family: monospace;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00a19a;
        }

        .vh-sec-title {
          font-family: 'Anton', sans-serif !important;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          color: #111111;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: 0.06em;
        }

        /* Technology Integration Network Overview */
        .vh-network-visual {
          width: 100%;
          background: linear-gradient(135deg, #003833 0%, #005A54 50%, #008980 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 48px 20px;
          box-shadow: 0 20px 40px rgba(0, 56, 51, 0.18);
          overflow: visible;
          position: relative;
        }

        .vh-text-p {
          font-size: 16px;
          line-height: 1.7;
          color: #4B5563;
          margin: 0;
        }

        /* Interactive Models Section */
        .vh-models-container {
          background-color: #F9FAFB;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 20px;
          padding: 40px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .vh-tab-btn {
          border: none;
          background: none;
          padding: 12px 24px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 13px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #4B5563;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .vh-tab-btn.vh-active {
          background: #00a19a;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(0, 161, 154, 0.25);
        }

        .vh-tab-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 48px;
        }

        .vh-tab-desc-side {
          flex: 0.8;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .vh-tab-svg-side {
          flex: 1.2;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 12px;
          padding: 32px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
          overflow: visible;
        }

        /* Stats Grid */
        .vh-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
        }

        .vh-stat-card {
          background-color: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: border-color 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
        }

        .vh-stat-card:hover {
          border-color: #00a19a;
          transform: translateY(-4px);
        }

        .vh-stat-num {
          font-family: 'Anton', sans-serif !important;
          font-size: clamp(2rem, 4.5vw, 3rem);
          color: #00a19a;
          line-height: 1;
        }

        .vh-stat-label {
          font-size: 13px;
          font-weight: 500;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        /* Question Section / Roles Accordion Grid */
        .vh-question-sec {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
          width: 100%;
        }

        .vh-question-title {
          font-family: 'Anton', sans-serif !important;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.2;
          text-transform: uppercase;
          color: #111111;
          text-align: center;
          letter-spacing: 0.06em;
          position: relative;
        }

        .vh-question-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 2.5px;
          background-color: #00a19a;
        }

        /* Premium CSS Accordion Selector (Image 2 & 3 style) */
        .vh-accordion-container {
          display: flex;
          gap: 24px;
          width: 100%;
          height: 480px;
        }

        .vh-accordion-panel {
          flex: 1;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #002d29 0%, #004d46 50%, #006b61 100%);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
          box-sizing: border-box;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 45, 41, 0.1);
        }

        /* Drifting grid on panel backgrounds */
        .vh-panel-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 30px 30px;
          background-position: center;
          opacity: 0.7;
          pointer-events: none;
          z-index: 0;
        }

        .vh-accordion-panel.vh-active {
          flex: 3; /* Expands active card */
          background: linear-gradient(135deg, #003833 0%, #005E56 100%);
          border-color: rgba(0, 161, 154, 0.35);
          box-shadow: 0 20px 40px rgba(0, 56, 51, 0.25);
        }

        /* Collapsed Rotated vertical badge on left side */
        .vh-panel-vertical-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-90deg);
          transform-origin: center center;
          white-space: nowrap;
          font-family: 'Space Grotesk', monospace;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.15em;
          color: rgba(255, 255, 255, 0.35);
          z-index: 2;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .vh-accordion-panel.vh-active .vh-panel-vertical-badge {
          opacity: 0;
          transform: translate(-50%, -50%) rotate(-90deg) scale(0.9);
        }

        /* Active Expanded Content styling */
        .vh-panel-content-active {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          z-index: 2;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .vh-accordion-panel.vh-active .vh-panel-content-active {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.4s ease 0.2s;
        }

        .vh-panel-badge-top {
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #00bfa5;
          text-transform: uppercase;
        }

        /* Large Index Number on top right of active card */
        .vh-panel-index-top {
          position: absolute;
          top: 24px;
          right: 32px;
          font-family: 'Anton', sans-serif !important;
          font-size: 72px;
          line-height: 1;
          color: rgba(255, 255, 255, 0.05);
          pointer-events: none;
        }

        /* Bottom glassmorphism card inside expanded panel */
        .vh-panel-card-overlay {
          background: rgba(18, 20, 22, 0.72) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border-left: 4px solid #00a19a !important;
          border-radius: 14px !important;
          padding: 24px 28px !important;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          width: 100%;
          max-width: 560px;
          margin-top: auto;
        }

        .vh-panel-card-title {
          font-family: 'Anton', sans-serif !important;
          font-size: 24px;
          font-weight: normal !important;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .vh-panel-card-desc {
          font-size: 14px;
          line-height: 1.55;
          color: #D1D5DB;
          margin: 0;
        }

        /* CTA Button inside expanded role card */
        .vh-panel-card-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 9999px;
          background-color: #00a19a;
          color: #FFFFFF;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(0, 161, 154, 0.15);
        }

        .vh-panel-card-btn:hover {
          background-color: #FFFFFF;
          color: #00a19a;
          transform: translateY(-1px);
        }

        /* Responsive overrides */
        @media (max-width: 972px) {
          .vh-slider-container {
            height: 380px;
          }
          .vh-slider-card {
            padding: 20px !important;
            max-width: 80%;
            left: 24px;
            bottom: 24px;
          }
          .vh-slider-badge-area {
            left: 24px;
            top: 24px;
          }
          .vh-slider-counter {
            right: 24px;
            bottom: 24px;
            font-size: 18px;
          }
          .vh-tab-content {
            flex-direction: column !important;
            gap: 32px;
          }
          .vh-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .vh-accordion-container {
            flex-direction: column;
            height: auto;
            gap: 16px;
          }
          .vh-accordion-panel {
            flex: none !important;
            width: 100%;
            height: 180px;
            padding: 20px;
          }
          .vh-accordion-panel.vh-active {
            height: 300px;
          }
          .vh-panel-vertical-badge {
            transform: translate(-50%, -50%) rotate(0deg);
            font-size: 14px;
          }
          .vh-panel-card-overlay {
            max-width: 100%;
            padding: 16px !important;
          }
          .vh-panel-index-top {
            font-size: 48px;
            top: 12px;
            right: 20px;
          }
          .vh-page {
            padding: 0 0 80px 0 !important;
          }
          .vh-container {
            padding: 60px 24px 0 !important;
          }
          .vh-models-container {
            padding: 24px 16px;
          }
        }

        body:not(.light-theme) .vh-page {
          background-color: #061312 !important;
          background-image:
            radial-gradient(circle at top right, rgba(0, 161, 154, 0.14), transparent 38%),
            linear-gradient(rgba(6, 19, 18, 0.94), rgba(6, 19, 18, 0.94)),
            repeating-linear-gradient(0deg, rgba(0, 161, 154, 0.04) 0, rgba(0, 161, 154, 0.04) 1px, transparent 1px, transparent 4px) !important;
          color: #f2fffd !important;
        }

        body:not(.light-theme) .vh-bg-grid {
          opacity: 0.55;
          background-image:
            linear-gradient(rgba(0, 161, 154, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 161, 154, 0.05) 1px, transparent 1px);
        }

        body:not(.light-theme) .vh-sec-title,
        body:not(.light-theme) .vh-question-title {
          color: #f2fffd;
        }

        body:not(.light-theme) .vh-text-p,
        body:not(.light-theme) .vh-stat-label,
        body:not(.light-theme) .vh-tab-btn {
          color: rgba(232, 255, 252, 0.72);
        }

        body:not(.light-theme) .vh-models-container,
        body:not(.light-theme) .vh-stat-card {
          background-color: rgba(8, 28, 27, 0.86);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
        }

        body:not(.light-theme) .vh-tab-svg-side {
          background: rgba(255, 255, 255, 0.055);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        body:not(.light-theme) .vh-slider-container,
        body:not(.light-theme) .vh-network-visual,
        body:not(.light-theme) .vh-accordion-panel {
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
        }

        body:not(.light-theme) .vh-panel-card-btn:hover {
          background-color: #f2fffd;
          color: #007f79;
        }
      `}</style>

      <div className="vh-page vh-mounted">
        <div className="vh-bg-grid" />

        {/* Section 1: Hero Section Slider (Full-width edge-to-edge, outside vh-container) */}
        <section className="vh-slider-container">
          {/* Left and Right navigation arrows */}
          <button className="vh-slider-arrow vh-left" onClick={handlePrevSlide} aria-label="Slide trước">
            ‹
          </button>
          <button className="vh-slider-arrow vh-right" onClick={handleNextSlide} aria-label="Slide tiếp theo">
            ›
          </button>

          {/* Indicator dots */}
          <div className="vh-slider-dots">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`vh-slider-dot${activeSlide === idx ? ' vh-active' : ''}`}
                onClick={() => setActiveSlide(idx)}
              />
            ))}
          </div>

          {/* Top-left branding overlay */}
          <div className="vh-slider-badge-area">
            <span className="vh-slider-badge-title">VẬN HÀNH B2B</span>
            <span className="vh-slider-badge-tag">Technical Skills</span>
          </div>

          {/* Slide Counter */}
          <div className="vh-slider-counter">
            <span className="vh-slider-counter-cur">0{activeSlide + 1}</span> / 0{slides.length}
          </div>

          {/* Slides list */}
          <div className="vh-slides-wrapper">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`vh-slide-item${activeSlide === idx ? ' vh-active' : ''}`}
                style={{ backgroundImage: `url('${slide.img}')` }}
              >
                <div className="vh-slide-overlay" />
              </div>
            ))}
          </div>

          {/* Bottom-left glassmorphism card containing current slide details */}
          <div className="vh-slider-card">
            <h1 className="vh-slider-title">{slides[activeSlide].title}</h1>
            <p className="vh-slider-desc">{slides[activeSlide].desc}</p>
          </div>
        </section>

        <div className="vh-container">
          {/* Section 2: Technology Integration Network */}
          <section className="vh-sec">
            <div className="vh-sec-title-area">
              <span className="vh-sec-tag">{"// Mạng lưới tích hợp"}</span>
              <h2 className="vh-sec-title">Tổng quan Hệ thống Công nghệ B2B</h2>
            </div>

            <div className="vh-network-visual">
              <svg viewBox="0 0 1000 480" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
                <defs>
                  {/* Glowing Core Filter */}
                  <filter id="core-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Core Teal Gradient */}
                  <linearGradient id="teal-core-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00bfa5" />
                    <stop offset="100%" stopColor="#00796b" />
                  </linearGradient>

                  {/* Card Gradient Fill */}
                  <linearGradient id="glass-card-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
                  </linearGradient>

                  {/* Capsule Gradient Fill */}
                  <linearGradient id="capsule-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.85)" />
                  </linearGradient>

                  {/* FTL Path Definition */}
                  <path id="flow-ftl-solid" d="M 80,330 L 80,395 A 15,15 0 0 0 95,410 L 915,410 A 15,15 0 0 0 930,395 L 930,330" fill="none" />
                </defs>

                {/* Circuit Board Background Tracers */}
                <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" fill="none">
                  <path d="M 50,110 L 150,110 L 170,130" />
                  <path d="M 120,380 L 220,380 L 240,360" />
                  <path d="M 850,90 L 930,90 L 950,110" />
                  <path d="M 400,80 L 500,40 L 600,80" />
                  <circle cx="50" cy="110" r="2" fill="rgba(255, 255, 255, 0.15)" />
                  <circle cx="170" cy="130" r="2" fill="rgba(255, 255, 255, 0.15)" />
                  <circle cx="950" cy="110" r="2" fill="rgba(255, 255, 255, 0.15)" />
                </g>

                <text x="500" y="52" fontFamily="'Montserrat', 'Be Vietnam Pro', sans-serif" fontWeight="800" fontSize="24" fill="#FFFFFF" textAnchor="middle" letterSpacing="1px">Tích hợp công nghệ mạnh mẽ</text>
                <text x="500" y="82" fontFamily="'Be Vietnam Pro', sans-serif" fontWeight="500" fontSize="13" fill="#B2DFDB" textAnchor="middle" opacity="0.85">Tối ưu hóa quá trình giao nhận, nâng cao hiệu quả kinh doanh</text>

                {/* Node Connections & Flowing Pulses */}
                <path d="M 140,235 L 870,235" stroke="rgba(0, 191, 165, 0.25)" strokeWidth="2.5" fill="none" />

                {/* FTL: Bottom Bypass Conduit */}
                <path d="M 80,330 L 80,395 A 15,15 0 0 0 95,410 L 915,410 A 15,15 0 0 0 930,395 L 930,330" fill="none" stroke="rgba(0, 191, 165, 0.08)" strokeWidth="8" strokeLinecap="round" />
                <path d="M 80,330 L 80,395 A 15,15 0 0 0 95,410 L 915,410 A 15,15 0 0 0 930,395 L 930,330" fill="none" stroke="#00bfa5" strokeWidth="3" />

                {/* Moving Data Particles */}
                <circle r="4" fill="#FFFFFF">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M 140,235 L 870,235" />
                </circle>
                <circle r="4" fill="#00bfa5">
                  <animateMotion dur="2.8s" begin="1.4s" repeatCount="indefinite" path="M 140,235 L 870,235" />
                </circle>

                {/* FTL Vector Truck */}
                <g>
                  <g strokeLinecap="round" strokeLinejoin="round">
                    <rect x="-10" y="-7" width="12" height="9" fill="#FFFFFF" rx="1.5" />
                    <path d="M 2,-7 L 6,-7 L 9,-3 L 9,2 L 2,2 Z" fill="#FFFFFF" />
                    <path d="M 3,-5 L 5.5,-5 L 7,-3 L 7,-1 L 3,-1 Z" fill="#003833" />
                    <circle cx="-6" cy="4.5" r="2.2" fill="#003833" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="5" cy="4.5" r="2.2" fill="#003833" stroke="#FFFFFF" strokeWidth="1" />
                  </g>
                  <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#flow-ftl-solid" />
                  </animateMotion>
                </g>

                {/* Left Card: Đối tác / Người gửi */}
                <g transform="translate(10, 0)">
                  <rect x="10" y="140" width="120" height="190" rx="16" fill="url(#glass-card-fill)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
                  <circle cx="70" cy="210" r="28" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
                  <g transform="translate(70, 210)" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M-12,2 C-12,2 -7,-6 0,-6 C 7,-6 12,2 12,2" />
                    <circle cx="0" cy="-12" r="4" />
                    <path d="M-9,7 L-3,1.5 L3,1.5 L9,7" />
                    <path d="M-5,1.5 L-5,11 M5,1.5 L5,11" />
                  </g>
                  <text x="70" y="285" fontSize="10.5" fontWeight="800" fill="#FFFFFF" textAnchor="middle" fontFamily="Space Grotesk" letterSpacing="0.03em">ĐỐI TÁC</text>
                  <text x="70" y="299" fontSize="10.5" fontWeight="800" fill="#FFFFFF" textAnchor="middle" fontFamily="Space Grotesk" letterSpacing="0.03em">/ NGƯỜI GỬI</text>
                </g>

                {/* Tiếp nhận Card */}
                <g transform="translate(245, 140)">
                  <rect x="0" y="0" width="170" height="190" rx="16" fill="url(#glass-card-fill)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
                  <rect x="0" y="0" width="170" height="36" rx="16" fill="rgba(0, 191, 165, 0.15)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                  <text x="85" y="22" fontSize="11" fontWeight="800" textAnchor="middle" fill="#FFFFFF" fontFamily="Space Grotesk" letterSpacing="0.05em">Tiếp nhận</text>
                  <g transform="translate(10, 50)">
                    <rect x="0" y="0" width="150" height="36" rx="6" fill="url(#capsule-fill)" stroke="rgba(0, 161, 154, 0.15)" strokeWidth="1" />
                    <text x="75" y="22" fontSize="10.5" fontWeight="800" fill="#004D40" textAnchor="middle" fontFamily="Space Grotesk">Kho nhận hàng</text>
                  </g>
                  <g transform="translate(10, 98)">
                    <rect x="0" y="0" width="150" height="30" rx="6" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(0, 191, 165, 0.45)" strokeWidth="1.2" />
                    <text x="75" y="19" fontSize="9.5" fontWeight="700" fill="#E0F2F1" textAnchor="middle" fontFamily="Space Grotesk">Operation Team Leader</text>
                  </g>
                  <g transform="translate(10, 140)">
                    <rect x="0" y="0" width="150" height="30" rx="6" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(0, 191, 165, 0.45)" strokeWidth="1.2" />
                    <text x="75" y="19" fontSize="9.5" fontWeight="700" fill="#E0F2F1" textAnchor="middle" fontFamily="Space Grotesk">Nhân viên xử lý</text>
                  </g>
                </g>

                {/* Trung tâm phân loại Core */}
                <g transform="translate(500, 235)">
                  <circle cx="0" cy="0" r="80" fill="rgba(0, 191, 165, 0.04)" filter="url(#core-glow)" />
                  <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="3 6" />
                  <circle cx="0" cy="0" r="88" fill="none" stroke="#00bfa5" strokeWidth="2.2" strokeDasharray="20 40 10 20 40 10" opacity="0.8">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="16s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="76" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeDasharray="8 8">
                    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="10s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="66" fill="url(#teal-core-gradient)" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="66" fill="none" stroke="#00bfa5" strokeWidth="2.5" />
                  <text x="0" y="-8" fontSize="10.5" fontWeight="800" textAnchor="middle" fill="#FFFFFF" fontFamily="Space Grotesk" letterSpacing="0.1em" opacity="0.9">TRUNG TÂM</text>
                  <text x="0" y="14" fontSize="13.5" fontWeight="900" textAnchor="middle" fill="#FFFFFF" fontFamily="Montserrat" fontStyle="italic" letterSpacing="0.05em">PHÂN LOẠI</text>
                </g>

                {/* Kho Giao Card */}
                <g transform="translate(585, 140)">
                  <rect x="0" y="0" width="170" height="190" rx="16" fill="url(#glass-card-fill)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
                  <rect x="0" y="0" width="170" height="36" rx="16" fill="rgba(0, 191, 165, 0.15)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                  <text x="85" y="22" fontSize="11" fontWeight="800" textAnchor="middle" fill="#FFFFFF" fontFamily="Space Grotesk" letterSpacing="0.05em">Kho Giao</text>
                  <g transform="translate(10, 50)">
                    <rect x="0" y="0" width="150" height="36" rx="6" fill="url(#capsule-fill)" stroke="rgba(0, 161, 154, 0.15)" strokeWidth="1" />
                    <text x="75" y="22" fontSize="10.5" fontWeight="800" fill="#004D40" textAnchor="middle" fontFamily="Space Grotesk">Kho giao nhận</text>
                  </g>
                  <g transform="translate(10, 98)">
                    <rect x="0" y="0" width="150" height="30" rx="6" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(0, 191, 165, 0.45)" strokeWidth="1.2" />
                    <text x="75" y="19" fontSize="9.5" fontWeight="700" fill="#E0F2F1" textAnchor="middle" fontFamily="Space Grotesk">Operation Team Leader</text>
                  </g>
                  <g transform="translate(10, 140)">
                    <rect x="0" y="0" width="150" height="30" rx="6" fill="rgba(255, 255, 255, 0.12)" stroke="rgba(0, 191, 165, 0.45)" strokeWidth="1.2" />
                    <text x="75" y="19" fontSize="9.5" fontWeight="700" fill="#E0F2F1" textAnchor="middle" fontFamily="Space Grotesk">Nhân viên xử lý</text>
                  </g>
                </g>

                {/* Right Card: Điểm nhận hàng */}
                <g transform="translate(860, 0)">
                  <rect x="10" y="140" width="120" height="190" rx="16" fill="url(#glass-card-fill)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
                  <circle cx="70" cy="210" r="28" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
                  <g transform="translate(70, 210)" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M-10,6 L-10,-4 L 10,-4 L 10,6 Z" />
                    <path d="M-12,-4 L-7,-10 L 7,-10 L 12,-4 Z" />
                    <rect x="-3" y="1" width="6" height="5" />
                  </g>
                  <text x="70" y="285" fontSize="10.5" fontWeight="800" fill="#B2DFDB" textAnchor="middle" fontFamily="Space Grotesk" letterSpacing="0.05em">KHÁCH HÀNG</text>
                  <text x="70" y="299" fontSize="9.5" fontWeight="500" fill="rgba(255,255,255,0.5)" textAnchor="middle" fontFamily="sans-serif">/ KHO ĐỐI TÁC</text>
                </g>

                {/* Floating Pickup Agent Widget */}
                <g transform="translate(180, 210)">
                  <circle cx="12" cy="12" r="14" fill="#FFFFFF" stroke="#00a19a" strokeWidth="1.5" style={{ filter: 'drop-shadow(0px 2px 6px rgba(0,0,0,0.15))' }} />
                  <g transform="translate(12, 12) scale(0.75)" stroke="#00a19a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="-8" y="-5" width="10" height="8" rx="1" />
                    <path d="M 2,-5 L 5,-5 L 7,-2 L 7,3 L 2,3 Z" />
                    <circle cx="-4" cy="5" r="1.5" fill="#00a19a" />
                    <circle cx="4" cy="5" r="1.5" fill="#00a19a" />
                  </g>
                  <rect x="-38" y="32" width="100" height="14" rx="4" fill="rgba(0, 191, 165, 0.9)" />
                  <text x="12" y="42" fontSize="7" fontWeight="800" fill="#FFFFFF" textAnchor="middle" fontFamily="Space Grotesk">NHÂN VIÊN GIAO NHẬN</text>
                </g>

                {/* Floating Delivery Agent Widget */}
                <g transform="translate(800, 210)">
                  <circle cx="12" cy="12" r="14" fill="#FFFFFF" stroke="#00a19a" strokeWidth="1.5" style={{ filter: 'drop-shadow(0px 2px 6px rgba(0,0,0,0.15))' }} />
                  <g transform="translate(12, 12) scale(0.75)" stroke="#00a19a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="-8" y="-5" width="10" height="8" rx="1" />
                    <path d="M 2,-5 L 5,-5 L 7,-2 L 7,3 L 2,3 Z" />
                    <circle cx="-4" cy="5" r="1.5" fill="#00a19a" />
                    <circle cx="4" cy="5" r="1.5" fill="#00a19a" />
                  </g>
                  <rect x="-38" y="32" width="100" height="14" rx="4" fill="rgba(0, 191, 165, 0.9)" />
                  <text x="12" y="42" fontSize="7" fontWeight="800" fill="#FFFFFF" textAnchor="middle" fontFamily="Space Grotesk">NHÂN VIÊN GIAO NHẬN</text>
                </g>

                <g transform="translate(500, 115)" textAnchor="middle">
                  <text x="0" y="0" fontSize="14" fontWeight="900" fill="#FFFFFF" fontFamily="Montserrat">LTL</text>
                  <text x="0" y="14" fontSize="9" fontWeight="800" fill="#B2DFDB" fontFamily="Space Grotesk" letterSpacing="1px">VẬN CHUYỂN HÀNG LẺ</text>
                </g>

                <g transform="translate(500, 448)">
                  <text x="0" y="0" fontSize="15" fontWeight="900" fill="#FFFFFF" textAnchor="middle" fontFamily="Montserrat">FTL</text>
                  <text x="0" y="15" fontSize="10.5" fontWeight="800" fill="#B2DFDB" textAnchor="middle" fontFamily="Space Grotesk" letterSpacing="1px">GIAO TRỰC TIẾP</text>
                </g>
              </svg>
            </div>
          </section>

          {/* Section 3: Operations Scale & Numbers */}
          <section className="vh-sec">
            <div className="vh-sec-title-area">
              <span className="vh-sec-tag">{"// Năng suất"}</span>
              <h2 className="vh-sec-title">Quy mô & Những con số</h2>
            </div>

            <div className="vh-stats-grid">
              <StatItem value={100000} suffix="+" label="Đơn hàng xử lý / ngày" />
              <StatItem value={500} suffix="+" label="Xe tải liên tỉnh" />
              <StatItem value={99} suffix=".8%" label="Tỷ lệ giao đúng SLA" />
              <StatItem value={63} suffix="/63" label="Tỉnh thành phủ sóng" />
            </div>
          </section>

          {/* Section 5: Interactive Roles Accordion Gallery */}
          <section className="vh-question-sec">
            <h2 className="vh-question-title">Bạn là ai trong chuỗi vận hành B2B?</h2>

            <div className="vh-accordion-container">
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className={`vh-accordion-panel${activeRole === idx ? ' vh-active' : ''}`}
                  onMouseEnter={() => setActiveRole(idx)}
                >
                  <div className="vh-panel-grid" />

                  {/* Collapsed Rotated Badge */}
                  <div className="vh-panel-vertical-badge">
                    {role.badge}
                  </div>

                  {/* Active Card Content */}
                  <div className="vh-panel-content-active">
                    <span className="vh-panel-badge-top">{role.badge}</span>
                    <span className="vh-panel-index-top">{role.index}</span>

                    <div className="vh-panel-card-overlay">
                      <h3 className="vh-panel-card-title">{role.title}</h3>
                      <p className="vh-panel-card-desc">{role.desc}</p>

                      <Link href={role.href} className="vh-panel-card-btn">
                        <span>{role.btnText}</span>
                        <span style={{ fontSize: '14px', marginLeft: '4px' }}>➔</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
