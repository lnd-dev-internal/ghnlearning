'use client';

import { useState } from 'react';
import Link from 'next/link';

// Navigation tabs matching Delivery role
const navTabs = [
  {
    label: 'Quy trình làm việc',
    href: '/nvgn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    label: 'Kỹ năng Kinh doanh',
    href: '/nvgn-kinhdoanh',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
];

export default function NvgnKinhDoanhPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <>
      <style>{`
        /* Editorial Minimalist UI Design System matching /hangnang */
        .gn-page {
          background-color: #FFFFFF !important;
          color: #111111 !important;
          font-family: 'Space Grotesk', 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: calc(100vh - 72px);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 24px 120px;
          padding-left: 96px !important; /* space for collapsible left sidebar */
          transition: padding-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gn-page.gn-sidebar-expanded {
          padding-left: 304px !important; /* space for expanded sidebar */
        }

        /* Breadcrumbs style matching the minimal theme */
        .gn-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: -40px;
          align-self: flex-start;
          font-family: 'Space Grotesk', 'Be Vietnam Pro', sans-serif;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .gn-breadcrumb a {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .gn-breadcrumb a:hover {
          color: #FF5200;
        }
        .gn-breadcrumb-sep {
          color: #D1D5DB;
        }
        .gn-breadcrumb-cur {
          color: #FF5200;
          font-weight: 700;
        }

        /* Collapsible left sidebar */
        .gn-sidebar {
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

        .gn-sidebar.gn-expanded {
          width: 280px;
          align-items: flex-start;
          padding: 24px 16px;
        }

        /* Sidebar Toggle Button at the top of the sidebar */
        .gn-sidebar-toggle-btn {
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
        .gn-sidebar.gn-expanded .gn-sidebar-toggle-btn {
          align-self: flex-end;
          margin-right: 4px;
        }
        .gn-sidebar-toggle-btn:hover {
          background-color: #111111;
          color: #FFFFFF;
          border-color: #111111;
          transform: scale(1.05);
        }

        /* Group title shown only when expanded */
        .gn-sidebar-group-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #888888;
          margin: 0 0 16px 12px;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s ease;
          width: 100%;
        }
        .gn-sidebar.gn-expanded .gn-sidebar-group-title {
          opacity: 1;
        }

        /* Navigation List */
        .gn-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }

        /* Sidebar item styling */
        .gn-sidebar-item {
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

        .gn-sidebar.gn-expanded .gn-sidebar-item {
          padding: 0 20px;
          border-radius: 12px;
        }

        .gn-sidebar-item:hover {
          background-color: rgba(255, 82, 0, 0.05);
          color: #FF5200;
        }

        .gn-sidebar-item.gn-active {
          background-color: rgba(255, 82, 0, 0.08);
          color: #FF5200;
          font-weight: 600;
        }

        .gn-sidebar-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .gn-sidebar-item-text {
          font-size: 14px;
          font-weight: 500;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .gn-sidebar.gn-expanded .gn-sidebar-item-text {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }

        /* Tooltips for collapsed state */
        .gn-sidebar-tooltip {
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

        .gn-sidebar-item:hover .gn-sidebar-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        .gn-sidebar.gn-expanded .gn-sidebar-tooltip {
          display: none !important;
        }

        /* Mobile Responsive triggers and drawer */
        .gn-mobile-menu-trigger {
          display: none;
          position: fixed;
          bottom: 24px;
          left: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #FF5200;
          color: #FFFFFF;
          border: none;
          box-shadow: 0 4px 16px rgba(255, 82, 0, 0.3);
          z-index: 95;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .gn-mobile-menu-trigger:hover {
          transform: scale(1.05);
        }

        .gn-mobile-drawer-overlay {
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

        .gn-mobile-drawer-overlay.gn-open {
          opacity: 1;
          pointer-events: auto;
        }

        .gn-mobile-drawer {
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

        .gn-mobile-drawer.gn-open {
          transform: translateY(0);
        }

        .gn-mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          border-bottom: 1px solid #F3F4F6;
          padding-bottom: 16px;
        }

        .gn-mobile-drawer-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .gn-mobile-drawer-close-btn {
          border: none;
          background: none;
          font-size: 18px;
          cursor: pointer;
          color: #6B7280;
        }

        /* Central content container */
        .gn-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 100px;
          animation: gnMountedAnim 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes gnMountedAnim {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Header typography & styling */
        .gn-header {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gn-header-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #FF5200;
        }

        .gn-page-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 48px;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #111111;
          margin: 0;
        }

        .gn-page-desc {
          font-size: 18px;
          line-height: 1.6;
          font-weight: 400;
          color: #4B5563;
          max-width: 760px;
          margin: 0;
        }

        .gn-header-divider {
          width: 100%;
          height: 1px;
          background-color: #E5E7EB;
          margin-top: 16px;
        }

        /* Alternating layout rows */
        .gn-row {
          display: flex;
          align-items: center;
          gap: 64px;
          width: 100%;
        }

        .gn-img-wrap {
          flex: 1;
          aspect-ratio: 4 / 3;
          border-radius: 20px;
          overflow: hidden;
          background-color: #F9FAFB;
          border: 1px solid rgba(0, 0, 0, 0.04);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.02);
          position: relative;
        }

        .gn-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gn-row:hover .gn-img-wrap img {
          transform: scale(1.03);
        }

        .gn-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .gn-row-index {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 48px;
          font-weight: 300;
          line-height: 1;
          color: #E5E7EB;
          letter-spacing: -0.02em;
        }

        .gn-row-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FF5200;
        }

        .gn-row-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 28px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #111111;
          margin: 0;
        }

        .gn-row-desc {
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
          color: #4B5563;
          margin: 0;
        }

        .gn-row-meta {
          font-family: monospace;
          font-size: 12px;
          letter-spacing: 0.05em;
          color: #9CA3AF;
          text-transform: uppercase;
          border-left: 2px solid #E5E7EB;
          padding-left: 12px;
        }

        /* Pill CTA Button matching hangnang theme colors */
        .gn-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 32px;
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
        }

        .gn-btn:hover {
          background-color: #111111;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .gn-btn-arrow {
          font-size: 16px;
          transition: transform 0.25s ease;
        }

        .gn-btn:hover .gn-btn-arrow {
          transform: translateX(4px);
        }

        /* Row Alternating Order */
        .gn-row.gn-reverse {
          flex-direction: row-reverse;
        }

        /* Responsive design */
        @media (max-width: 972px) {
          .gn-row {
            flex-direction: column !important;
            gap: 32px;
          }
          .gn-img-wrap {
            aspect-ratio: 16 / 9;
            width: 100%;
          }
          .gn-info {
            width: 100%;
            gap: 16px;
          }
          .gn-container {
            gap: 80px;
          }
          .gn-page {
            padding: 60px 20px 80px;
            padding-left: 20px !important; /* Reset on mobile */
          }
          .gn-sidebar {
            display: none !important;
          }
          .gn-mobile-menu-trigger {
            display: flex;
          }
        }

        /* Operational Hero Gallery Placeholder */
        .gn-hero-gallery {
          width: 100%;
          margin-top: 10px;
          margin-bottom: 20px;
          animation: gnFadeInUp 0.8s ease-out;
        }

        .gn-gallery-container.placeholder {
          width: 100%;
          height: 380px;
          border-radius: 20px;
          background: rgba(0, 161, 154, 0.02);
          border: 2px dashed rgba(0, 161, 154, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00a19a;
          box-shadow: inset 0 2px 8px rgba(0, 161, 154, 0.01);
          transition: all 0.3s ease;
          position: relative;
        }

        .gn-gallery-container.placeholder:hover {
          background: rgba(0, 161, 154, 0.04);
          border-color: #00a19a;
        }

        @keyframes gnFadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 772px) {
          .gn-gallery-container.placeholder {
            height: 250px;
          }
        }

        .gn-placeholder-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          padding: 24px;
        }

        .gn-placeholder-icon {
          color: #00a19a;
          opacity: 0.85;
          animation: gnBounceFloat 3s ease-in-out infinite;
        }

        @keyframes gnBounceFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .gn-placeholder-text {
          font-family: 'Space Grotesk', 'Be Vietnam Pro', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #00a19a;
        }

        .gn-placeholder-desc {
          font-size: 13px;
          color: #6B7280;
          max-width: 380px;
          line-height: 1.5;
        }

        body:not(.light-theme) .gn-page {
          background-color: #080d0f !important;
          background-image:
            radial-gradient(circle at top right, rgba(255, 82, 0, 0.1), transparent 34%),
            radial-gradient(circle at bottom left, rgba(0, 161, 154, 0.1), transparent 38%),
            linear-gradient(180deg, #091112 0%, #050708 100%);
          color: #f7fbfb !important;
        }

        body:not(.light-theme) .gn-sidebar,
        body:not(.light-theme) .gn-mobile-drawer {
          background: rgba(10, 16, 18, 0.94);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 8px 0 34px rgba(0, 0, 0, 0.28);
        }

        body:not(.light-theme) .gn-mobile-drawer {
          box-shadow: 0 -14px 40px rgba(0, 0, 0, 0.35);
        }

        body:not(.light-theme) .gn-mobile-drawer-overlay {
          background: rgba(0, 0, 0, 0.58);
        }

        body:not(.light-theme) .gn-sidebar-toggle-btn {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.12);
          color: #f7fbfb;
          box-shadow: none;
        }

        body:not(.light-theme) .gn-sidebar-toggle-btn:hover,
        body:not(.light-theme) .gn-btn:hover {
          background-color: #f7fbfb;
          color: #0b1213;
          border-color: #f7fbfb;
          box-shadow: 0 10px 25px rgba(255, 82, 0, 0.2);
        }

        body:not(.light-theme) .gn-sidebar-group-title,
        body:not(.light-theme) .gn-mobile-drawer-close-btn,
        body:not(.light-theme) .gn-breadcrumb a,
        body:not(.light-theme) .gn-breadcrumb-sep {
          color: rgba(236, 248, 248, 0.58);
        }

        body:not(.light-theme) .gn-sidebar-item {
          color: rgba(236, 248, 248, 0.72);
        }

        body:not(.light-theme) .gn-sidebar-item:hover {
          background-color: rgba(255, 82, 0, 0.13);
          color: #ff7d3d;
        }

        body:not(.light-theme) .gn-sidebar-item.gn-active {
          background-color: rgba(255, 82, 0, 0.16);
          color: #ff7d3d;
        }

        body:not(.light-theme) .gn-sidebar-tooltip {
          background-color: #f7fbfb;
          color: #0b1213;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.26);
        }

        body:not(.light-theme) .gn-mobile-drawer-header {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        body:not(.light-theme) .gn-header-divider {
          background-color: rgba(255, 255, 255, 0.1);
        }

        body:not(.light-theme) .gn-page-title,
        body:not(.light-theme) .gn-row-title,
        body:not(.light-theme) .gn-mobile-drawer-title {
          color: #f7fbfb;
        }

        body:not(.light-theme) .gn-page-desc,
        body:not(.light-theme) .gn-row-desc,
        body:not(.light-theme) .gn-placeholder-desc {
          color: rgba(236, 248, 248, 0.72);
        }

        body:not(.light-theme) .gn-img-wrap,
        body:not(.light-theme) .gn-gallery-container.placeholder {
          background-color: rgba(255, 255, 255, 0.055);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 16px 44px rgba(0, 0, 0, 0.22);
        }

        body:not(.light-theme) .gn-row-index {
          color: rgba(236, 248, 248, 0.12);
        }

        body:not(.light-theme) .gn-row-meta {
          color: rgba(236, 248, 248, 0.58);
          border-left-color: rgba(255, 255, 255, 0.14);
        }

        body:not(.light-theme) .gn-gallery-container.placeholder:hover {
          background: rgba(255, 82, 0, 0.08);
          border-color: #ff7d3d;
        }
      `}</style>

      <div className={`gn-page gn-mounted${!sidebarCollapsed ? ' gn-sidebar-expanded' : ''}`}>
        <div className="gn-container">
          {/* Breadcrumbs */}
          <nav className="gn-breadcrumb">
            <Link href="/b2b/van-hanh">Vận hành</Link>
            <span className="gn-breadcrumb-sep">›</span>
            <Link href="/b2b/nvgn">Nhân viên Giao nhận B2B</Link>
            <span className="gn-breadcrumb-sep">›</span>
            <span className="gn-breadcrumb-cur">Kỹ năng Kinh doanh</span>
          </nav>

          {/* Header */}
          <header className="gn-header">
            <span className="gn-header-tag">[ Hệ thống đào tạo vận hành ]</span>
            <h1 className="gn-page-title">Kỹ năng Kinh doanh</h1>
            <p className="gn-page-desc">
              Chương trình đào tạo kỹ năng mềm, kỹ năng bán hàng và tư duy chăm sóc khách hàng chuyên nghiệp dành riêng cho Nhân viên Giao nhận B2B.
            </p>
            <div className="gn-header-divider" />
          </header>

          {/* Related Images Section (Hero Banner Format) */}
          <section className="gn-hero-gallery">
            <div className="gn-gallery-container placeholder">
              <div className="gn-placeholder-content">
                <svg className="gn-placeholder-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="gn-placeholder-text">Khu vực chèn ảnh nghiệp vụ</span>
                <span className="gn-placeholder-desc">Khung ảnh kích thước lớn dạng Hero Banner. Thêm ảnh nghiệp vụ tại đây.</span>
              </div>
            </div>
          </section>

          {/* Module 1: CSKH */}
          <section className="gn-row">
            <div className="gn-img-wrap">
              <img src="/b2b/kd-cskh.png" alt="Chăm sóc Khách hàng" />
            </div>
            <div className="gn-info">
              <span className="gn-row-index">01</span>
              <span className="gn-row-tag">[ Kỹ năng // Chăm sóc khách hàng ]</span>
              <h2 className="gn-row-title">Chăm sóc Khách hàng</h2>
              <p className="gn-row-desc">
                Hệ thống kỹ năng chăm sóc và giao tiếp chuyên nghiệp với khách hàng gửi và nhận của GHN.
              </p>
              <div className="gn-row-meta">
                Thời lượng: 10 phút // Cấp độ: Cơ bản
              </div>
              <a className="gn-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=692ebc93c025d3f2a964a1ed" target="_blank" rel="noopener noreferrer">
                <span>Bắt đầu học</span>
                <span className="gn-btn-arrow">→</span>
              </a>
            </div>
          </section>

          {/* Module 2: CSKH lớn */}
          <section className="gn-row gn-reverse">
            <div className="gn-img-wrap">
              <img src="/b2b/kd-cskhlon.png" alt="Chăm sóc Khách hàng lớn" />
            </div>
            <div className="gn-info">
              <span className="gn-row-index">02</span>
              <span className="gn-row-tag">[ Kỹ năng // Chăm sóc khách hàng lớn ]</span>
              <h2 className="gn-row-title">Chăm sóc Khách hàng lớn</h2>
              <p className="gn-row-desc">
                Các tiêu chuẩn nghiệp vụ và quy trình đặc thù khi phục vụ và chăm sóc các đối tác kinh doanh lớn (Key Accounts) của GHN.
              </p>
              <div className="gn-row-meta">
                Thời lượng: 10 phút // Cấp độ: Nâng cao
              </div>
              <a className="gn-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=692eb91c4a325027d16826d1" target="_blank" rel="noopener noreferrer">
                <span>Bắt đầu học</span>
                <span className="gn-btn-arrow">→</span>
              </a>
            </div>
          </section>

          {/* Module 3: Kỹ năng bán hàng */}
          <section className="gn-row">
            <div className="gn-img-wrap">
              <img src="/b2b/kd-banhang.png" alt="Kỹ năng bán hàng" />
            </div>
            <div className="gn-info">
              <span className="gn-row-index">03</span>
              <span className="gn-row-tag">[ Kỹ năng // Phát triển kinh doanh ]</span>
              <h2 className="gn-row-title">Kỹ năng bán hàng</h2>
              <p className="gn-row-desc">
                Kỹ năng thuyết phục khách hàng mới sử dụng dịch vụ, giới thiệu sản phẩm và tăng trưởng doanh thu gửi hàng nặng.
              </p>
              <div className="gn-row-meta">
                Thời lượng: 10 phút // Cấp độ: Nghiệp vụ
              </div>
              <a className="gn-btn" href="https://app-driver-web.ghn.vn/survey-detail?surveyId=692eb8644a325027d16826cf" target="_blank" rel="noopener noreferrer">
                <span>Bắt đầu học</span>
                <span className="gn-btn-arrow">→</span>
              </a>
            </div>
          </section>
        </div>

        {/* Desktop Collapsible Left Sidebar */}
        <aside className={`gn-sidebar${!sidebarCollapsed ? ' gn-expanded' : ''}`}>
          <button 
            className="gn-sidebar-toggle-btn"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label={sidebarCollapsed ? "Mở rộng menu" : "Thu gọn menu"}
          >
            {sidebarCollapsed ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            )}
          </button>

          <span className="gn-sidebar-group-title">Nội dung đào tạo</span>

          <nav className="gn-sidebar-nav">
            {navTabs.map((tab, idx) => (
              <a key={idx} href={tab.href} className={`gn-sidebar-item${idx === 1 ? ' gn-active' : ''}`}>
                <span className="gn-sidebar-item-icon">{tab.icon}</span>
                <span className="gn-sidebar-item-text">{tab.label}</span>
                <span className="gn-sidebar-tooltip">{tab.label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Mobile Floating Menu Trigger */}
        <button 
          className="gn-mobile-menu-trigger"
          onClick={() => setMobileDrawerOpen(true)}
          aria-label="Mở menu điều hướng"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile Drawer Overlay */}
        <div 
          className={`gn-mobile-drawer-overlay${mobileDrawerOpen ? ' gn-open' : ''}`}
          onClick={() => setMobileDrawerOpen(false)}
        />

        {/* Mobile Drawer */}
        <div className={`gn-mobile-drawer${mobileDrawerOpen ? ' gn-open' : ''}`}>
          <div className="gn-mobile-drawer-header">
            <span className="gn-mobile-drawer-title">Nhân viên Giao nhận B2B</span>
            <button 
              className="gn-mobile-drawer-close-btn"
              onClick={() => setMobileDrawerOpen(false)}
              aria-label="Đóng menu"
            >
              ✕
            </button>
          </div>

          <nav className="gn-sidebar-nav">
            {navTabs.map((tab, idx) => (
              <a key={idx} href={tab.href} className={`gn-sidebar-item${idx === 1 ? ' gn-active' : ''}`} onClick={() => setMobileDrawerOpen(false)}>
                <span className="gn-sidebar-item-icon">{tab.icon}</span>
                <span className="gn-sidebar-item-text" style={{ opacity: 1, transform: 'none' }}>{tab.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
