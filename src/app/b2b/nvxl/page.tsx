'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sidebar tabs matching B2B Processing Staff
const navTabs = [
  {
    label: 'Quy trình xử lý hàng giao',
    href: '/nvxl',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  },
  {
    label: 'Quy trình xử lý hàng lấy',
    href: '/nvxl-lay',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    )
  },
  {
    label: 'Quy trình xử lý hàng trả',
    href: '/nvxl-tra',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 14L4 9l5-5" />
        <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
      </svg>
    )
  },
  {
    label: 'Quy trình xử lý luân chuyển',
    href: '/nvxl-luanchuyen',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    )
  },
  {
    label: 'Quy trình khác',
    href: '/nvxl-khac',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  },
  {
    label: 'Kỹ năng Kinh doanh',
    href: '/nvxl-kinhdoanh',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    label: 'Botchat Vận hành',
    href: '/nvxl-botchat',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  }
];

// Modules list matching B2B nvxl
const modules = [
  {
    index: '01',
    tag: 'Quy trình // Nhận tải',
    title: 'Nhận tải',
    desc: 'Quy trình tiếp nhận xe tải, kiểm tra niêm phong khóa chì bảo mật, kiểm soát số lượng kiện hàng thực tế bàn giao từ tài xế.',
    duration: '10 phút',
    level: 'Cơ bản',
    img: '/freight-nhantai.png',
    surveyUrl: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=692fe73a725cb782e40f503c'
  },
  {
    index: '02',
    tag: 'Quy trình // Gán đơn',
    title: 'Gán đơn',
    desc: 'Quy trình phân phối và gán đơn giao cho nhân viên giao nhận phù hợp theo tuyến đường và tải trọng hàng hóa.',
    duration: '10 phút',
    level: 'Cơ bản',
    img: '/freight-gangiao.png',
    surveyUrl: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=692fec36725cb782e40f504d'
  },
  {
    index: '03',
    tag: 'Quy trình // Bắn kiểm',
    title: 'Bắn kiểm',
    desc: 'Thao tác quét mã vạch kiểm tra thông tin đơn hàng, đối soát trạng thái và vị trí lưu kho của hàng nặng B2B.',
    duration: '10 phút',
    level: 'Cơ bản',
    img: '/freight-bankiemgiao.png',
    surveyUrl: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=692ff19c725cb782e40f5050'
  },
  {
    index: '04',
    tag: 'Quy trình // Thu tiền & Tạo phiếu',
    title: 'Thu tiền & Tạo phiếu',
    desc: 'Nghiệp vụ thu tiền COD, đối soát chứng từ, tạo biên nhận và in phiếu giao nhận hàng hóa B2B.',
    duration: '10 phút',
    level: 'Cơ bản',
    img: '/freight-thutien.png',
    surveyUrl: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=692ff2bbc025d3f2a964ab84'
  },
  {
    index: '05',
    tag: 'Tổng hợp // Quy trình xử lý hàng giao',
    title: 'Tổng hợp quy trình xử lý hàng giao',
    desc: 'Toàn trình các bước phối hợp xử lý, luân chuyển và kiểm soát chất lượng từ khâu nhập kho đến khi bàn giao hàng giao.',
    duration: '20 phút',
    level: 'Cơ bản',
    img: '/freight-giao.png',
    surveyUrl: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=692ff4db725cb782e40f505b'
  }
];

export default function NvxlPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <>
      <style>{`
        /* Editorial Minimalist UI Design System matching B2B Teal #00a19a Theme */
        .xl-page {
          background-color: #FFFFFF !important;
          color: #111111 !important;
          font-family: 'Space Grotesk', 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: calc(100vh - 72px);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 120px 0 !important; /* No top/right padding to allow full-width Hero */
          padding-left: 72px !important; /* space for collapsible left sidebar when collapsed */
          transition: padding-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-x: hidden;
        }

        .xl-page.xl-sidebar-expanded {
          padding-left: 280px !important; /* space for expanded sidebar */
        }

        /* Breadcrumbs style matching the minimal theme */
        .xl-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0px !important; /* Reset negative margin since it is below Hero */
          align-self: flex-start;
          font-family: 'Space Grotesk', 'Be Vietnam Pro', sans-serif;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .xl-breadcrumb a {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .xl-breadcrumb a:hover {
          color: #00a19a;
        }
        .xl-breadcrumb-sep {
          color: #D1D5DB;
        }
        .xl-breadcrumb-cur {
          color: #00a19a;
          font-weight: 700;
        }

        /* Collapsible left sidebar */
        .xl-sidebar {
          position: fixed;
          left: 0;
          top: 72px; /* height of the global navbar */
          height: calc(100vh - 72px);
          width: 72px; /* collapsed by default */
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-right: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 0;
          z-index: 90;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s;
          overflow-x: hidden;
          box-shadow: 4px 0 24px rgba(0, 0, 0, 0.02);
        }

        .xl-sidebar.xl-expanded {
          width: 280px;
          align-items: flex-start;
          padding: 24px 0; /* Align items nicely */
        }

        /* Sidebar Toggle Button at the top of the sidebar */
        .xl-sidebar-toggle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #111111;
          margin-bottom: 32px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          align-self: center;
          flex-shrink: 0;
        }
        .xl-sidebar.xl-expanded .xl-sidebar-toggle-btn {
          align-self: flex-end;
          margin-right: 16px;
        }
        .xl-sidebar-toggle-btn:hover {
          background-color: #00a19a;
          color: #FFFFFF;
          border-color: #00a19a;
          transform: scale(1.05);
        }

        /* Group title shown only when expanded */
        .xl-sidebar-group-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #9CA3AF;
          margin: 0 0 16px 20px;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s ease;
          width: 100%;
        }
        .xl-sidebar.xl-expanded .xl-sidebar-group-title {
          opacity: 1;
        }

        /* Navigation List */
        .xl-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 100%;
        }

        /* Sidebar item styling */
        .xl-sidebar-item {
          display: flex;
          align-items: center;
          width: 100%;
          height: 48px;
          padding: 0 14px;
          border-radius: 24px;
          color: #4B5563;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          white-space: nowrap;
          gap: 16px;
        }

        .xl-sidebar.xl-expanded .xl-sidebar-item {
          padding: 0 20px;
          border-radius: 0 24px 24px 0; /* clean look matching image 3 */
          border-left: 4px solid transparent;
        }

        .xl-sidebar-item:hover {
          background-color: rgba(0, 161, 154, 0.05);
          color: #00a19a;
        }

        .xl-sidebar-item.xl-active {
          background-color: rgba(0, 161, 154, 0.08) !important;
          color: #00a19a !important;
          font-weight: 600;
          border-left: 4px solid #00a19a !important;
          padding-left: 16px !important;
        }

        .xl-sidebar-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .xl-sidebar-item-text {
          font-size: 14px;
          font-weight: 500;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .xl-sidebar.xl-expanded .xl-sidebar-item-text {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }

        /* Tooltips for collapsed state */
        .xl-sidebar-tooltip {
          position: absolute;
          left: 80px;
          background-color: #111111;
          color: #FFFFFF;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(5px);
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 100;
        }

        .xl-sidebar-item:hover .xl-sidebar-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        .xl-sidebar.xl-expanded .xl-sidebar-tooltip {
          display: none !important;
        }

        /* Mobile Responsive triggers and drawer */
        .xl-mobile-menu-trigger {
          display: none;
          position: fixed;
          bottom: 24px;
          left: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #00a19a;
          color: #FFFFFF;
          border: none;
          box-shadow: 0 4px 16px rgba(0, 161, 154, 0.3);
          z-index: 95;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .xl-mobile-menu-trigger:hover {
          transform: scale(1.05);
        }

        .xl-mobile-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.3);
          z-index: 98;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .xl-mobile-drawer-overlay.xl-open {
          opacity: 1;
          pointer-events: auto;
        }

        .xl-mobile-drawer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #FFFFFF;
          border-radius: 24px 24px 0 0;
          padding: 32px 20px 48px;
          z-index: 99;
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.08);
        }

        .xl-mobile-drawer.xl-open {
          transform: translateY(0);
        }

        .xl-mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          border-bottom: 1px solid #F3F4F6;
          padding-bottom: 16px;
        }

        .xl-mobile-drawer-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .xl-mobile-drawer-close-btn {
          border: none;
          background: none;
          font-size: 18px;
          cursor: pointer;
          color: #6B7280;
        }

        /* Central content container */
        .xl-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 60px;
          padding: 60px 24px 0 !important; /* Add padding for content spacing */
          animation: xlMountedAnim 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes xlMountedAnim {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Premium Top Hero Banner (Larger size, text on left card, no text on image) */
        .xl-hero-banner {
          margin-top: 0 !important;
          position: relative;
          width: 100%;
          height: 520px; /* Bigger height: 520px like vanhanh */
          border-radius: 0 !important; /* Edge to edge, no framing */
          overflow: hidden;
          background-image: url('/b2b_warehouse_hero.png');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          padding: 48px 64px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          border: none !important;
        }

        .xl-hero-card {
          background: rgba(18, 20, 22, 0.82) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border-left: 4px solid #00a19a !important;
          border-radius: 16px !important;
          padding: 36px 40px !important;
          max-width: 580px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 2;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .xl-hero-subtitle {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #00a19a; /* Teal theme color */
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .xl-hero-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #9CA3AF;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .xl-hero-title {
          font-family: 'Anton', sans-serif !important;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: normal !important;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 0.03em !important;
          line-height: 1.15;
          text-transform: uppercase;
        }

        .xl-hero-desc {
          font-size: 15px;
          line-height: 1.65;
          color: #E5E7EB;
          margin: 0;
        }

        /* Split layout rows matching B2B Design */
        .xl-row {
          display: flex;
          align-items: center;
          gap: 48px;
          width: 100%;
          transition: all 0.3s ease;
        }

        /* Shrink Slide Frame card */
        .xl-img-wrap {
          flex: 0.8 !important; /* Shrunk image frame relative to text (40:60 split) */
          max-width: 480px !important;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          background-color: #FFFFFF !important;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
          position: relative;
          padding: 12px; /* Breathing room inside frame */
        }

        .xl-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain !important; /* Contain fits slides perfectly with no text cropping */
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .xl-row:hover .xl-img-wrap img {
          transform: scale(1.03);
        }

        .xl-info {
          flex: 1.2 !important; /* Expanded info layout */
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Interactive Index Hover animation */
        .xl-row-index {
          font-family: 'Anton', sans-serif !important;
          font-size: 56px;
          font-weight: normal !important;
          line-height: 1;
          color: #E5E7EB;
          letter-spacing: 0.02em;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          width: fit-content;
        }

        .xl-row:hover .xl-row-index {
          color: #00a19a !important;
          transform: scale(1.15) translateY(-4px) !important;
        }

        .xl-row-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00a19a; /* Teal Theme */
        }

        .xl-row-title {
          font-family: 'Anton', sans-serif !important;
          font-size: 32px;
          font-weight: normal !important;
          line-height: 1.15;
          letter-spacing: 0.03em !important;
          text-transform: uppercase !important;
          color: #111111;
          margin: 0;
        }

        .xl-row-desc {
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
          color: #4B5563;
          margin: 0;
        }

        .xl-row-meta {
          font-family: monospace !important;
          font-size: 13px !important;
          letter-spacing: 0.05em;
          color: #6B7280 !important;
          text-transform: uppercase;
          border-left: 2px solid #E5E7EB;
          padding-left: 12px;
        }

        /* Pill CTA Button matching Teal theme colors */
        .xl-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 28px;
          background-color: #00a19a;
          color: #FFFFFF;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 13px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
          width: fit-content;
          box-shadow: 0 4px 12px rgba(0, 161, 154, 0.15);
          cursor: pointer;
        }

        .xl-btn:hover {
          background-color: #111111;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .xl-btn-arrow {
          font-size: 16px;
          transition: transform 0.25s ease;
        }

        .xl-btn:hover .xl-btn-arrow {
          transform: translateX(4px);
        }

        /* Row Alternating Order */
        .xl-row.xl-reverse {
          flex-direction: row-reverse;
        }

        /* Responsive design */
        @media (max-width: 972px) {
          .xl-row {
            flex-direction: column !important;
            gap: 32px;
          }
          .xl-img-wrap {
            aspect-ratio: 16 / 9;
            width: 100%;
            max-width: 100% !important;
            flex: none !important;
          }
          .xl-info {
            width: 100%;
            gap: 16px;
            flex: none !important;
          }
          .xl-container {
            gap: 60px;
            padding: 40px 20px 0 !important;
          }
          .xl-page {
            padding: 0 0 80px 0 !important;
            padding-left: 0 !important; /* Reset on mobile */
          }
          .xl-sidebar {
            display: none !important;
          }
          .xl-mobile-menu-trigger {
            display: flex;
          }
          .xl-hero-banner {
            padding: 32px 20px;
            height: auto;
            min-height: 320px;
          }
          .xl-hero-card {
            padding: 24px !important;
          }
        }

        body:not(.light-theme) .xl-page {
          background-color: #061312 !important;
          background-image:
            radial-gradient(circle at top right, rgba(0, 161, 154, 0.13), transparent 36%),
            linear-gradient(180deg, #071716 0%, #050b0b 100%);
          color: #f2fffd !important;
        }

        body:not(.light-theme) .xl-sidebar,
        body:not(.light-theme) .xl-mobile-drawer {
          background: rgba(7, 22, 21, 0.94);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 8px 0 34px rgba(0, 0, 0, 0.28);
        }

        body:not(.light-theme) .xl-mobile-drawer {
          box-shadow: 0 -14px 40px rgba(0, 0, 0, 0.35);
        }

        body:not(.light-theme) .xl-mobile-drawer-overlay {
          background: rgba(0, 0, 0, 0.58);
        }

        body:not(.light-theme) .xl-sidebar-toggle-btn {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.12);
          color: #f2fffd;
          box-shadow: none;
        }

        body:not(.light-theme) .xl-sidebar-group-title,
        body:not(.light-theme) .xl-mobile-drawer-close-btn,
        body:not(.light-theme) .xl-breadcrumb a,
        body:not(.light-theme) .xl-breadcrumb-sep {
          color: rgba(232, 255, 252, 0.58);
        }

        body:not(.light-theme) .xl-sidebar-item {
          color: rgba(232, 255, 252, 0.72);
        }

        body:not(.light-theme) .xl-sidebar-item:hover {
          background-color: rgba(0, 161, 154, 0.14);
          color: #19d4ca;
        }

        body:not(.light-theme) .xl-sidebar-tooltip {
          background-color: #f2fffd;
          color: #061312;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.26);
        }

        body:not(.light-theme) .xl-mobile-drawer-header {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        body:not(.light-theme) .xl-img-wrap {
          background-color: rgba(255, 255, 255, 0.055) !important;
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.22);
        }

        body:not(.light-theme) .xl-row-title {
          color: #f2fffd;
        }

        body:not(.light-theme) .xl-row-desc {
          color: rgba(232, 255, 252, 0.72);
        }

        body:not(.light-theme) .xl-row-index {
          color: rgba(232, 255, 252, 0.12);
        }

        body:not(.light-theme) .xl-row-meta {
          color: rgba(232, 255, 252, 0.58) !important;
          border-left-color: rgba(255, 255, 255, 0.14);
        }

        body:not(.light-theme) .xl-btn:hover {
          background-color: #f2fffd;
          color: #007f79;
          box-shadow: 0 10px 25px rgba(0, 161, 154, 0.2);
        }
      `}</style>

      {/* Mobile Menu Trigger */}
      <button className="xl-mobile-menu-trigger" onClick={() => setMobileDrawerOpen(true)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Mobile Drawer Overlay */}
      <div className={`xl-mobile-drawer-overlay${mobileDrawerOpen ? ' xl-open' : ''}`} onClick={() => setMobileDrawerOpen(false)} />

      {/* Mobile Drawer */}
      <div className={`xl-mobile-drawer${mobileDrawerOpen ? ' xl-open' : ''}`}>
        <div className="xl-mobile-drawer-header">
          <span className="xl-mobile-drawer-title">Nội dung đào tạo</span>
          <button className="xl-mobile-drawer-close-btn" onClick={() => setMobileDrawerOpen(false)}>✕</button>
        </div>
        <nav className="xl-sidebar-nav">
          {navTabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`xl-sidebar-item${tab.href === '/nvxl' ? ' xl-active' : ''}`}
              onClick={() => setMobileDrawerOpen(false)}
            >
              <span className="xl-sidebar-item-icon">{tab.icon}</span>
              <span className="xl-sidebar-item-text" style={{ opacity: 1, transform: 'none' }}>{tab.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Collapsible Left Sidebar */}
      <aside className={`xl-sidebar${!sidebarCollapsed ? ' xl-expanded' : ''}`}>
        {/* Toggle arrow button */}
        <button className="xl-sidebar-toggle-btn" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            style={{ transform: sidebarCollapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <span className="xl-sidebar-group-title">Nội dung đào tạo</span>

        <nav className="xl-sidebar-nav">
          {navTabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`xl-sidebar-item${tab.href === '/nvxl' ? ' xl-active' : ''}`}
            >
              <span className="xl-sidebar-item-icon">
                {tab.icon}
                {sidebarCollapsed && <span className="xl-sidebar-tooltip">{tab.label}</span>}
              </span>
              <span className="xl-sidebar-item-text">{tab.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <div className={`xl-page${!sidebarCollapsed ? ' xl-sidebar-expanded' : ''}`}>
        {/* Hero Banner with Dark Card Overlay (Full width, outside container) */}
        <section className="xl-hero-banner">
          <div className="xl-hero-card">
            <span className="xl-hero-subtitle">Vận hành &gt; Quy trình xử lý hàng giao</span>
            <span className="xl-hero-tag">[ Hệ thống đào tạo vận hành ]</span>
            <h1 className="xl-hero-title">Quy trình xử lý hàng giao</h1>
            <p className="xl-hero-desc">
              Chương trình đào tạo chuẩn hóa quy trình nhận kiện, xử lý và bàn giao hàng hóa dành riêng cho Nhân viên Xử lý B2B tại bưu cục.
            </p>
          </div>
        </section>

        <div className="xl-container">
          {/* Breadcrumb */}
          <nav className="xl-breadcrumb">
            <Link href="/b2b/van-hanh">Vận hành</Link>
            <span className="xl-breadcrumb-sep">›</span>
            <Link href="/b2b/nvxl">Nhân viên Xử lý B2B</Link>
            <span className="xl-breadcrumb-sep">›</span>
            <span className="xl-breadcrumb-cur">Quy trình xử lý hàng giao</span>
          </nav>

          {/* Alternating Modules List */}
          {modules.map((mod, index) => (
            <section key={mod.index} className={`xl-row${index % 2 === 1 ? ' xl-reverse' : ''}`}>
              <div className="xl-img-wrap">
                <img src={mod.img} alt={mod.title} />
              </div>
              <div className="xl-info">
                <span className="xl-row-index">{mod.index}</span>
                <span className="xl-row-tag">[ {mod.tag.toUpperCase()} ]</span>
                <h2 className="xl-row-title">{mod.title}</h2>
                <p className="xl-row-desc">{mod.desc}</p>
                <div className="xl-row-meta">{`| THỜI LƯỢNG: ${mod.duration.toUpperCase()} // CẤP ĐỘ: ${mod.level.toUpperCase()}`}</div>
                <a className="xl-btn" href={mod.surveyUrl} target="_blank" rel="noopener noreferrer">
                  <span>BẮT ĐẦU HỌC</span>
                  <span className="xl-btn-arrow">➔</span>
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
