'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Navigation tabs with icons
const navTabs = [
  {
    label: 'Quy trình xử lý hàng giao',
    href: '/nvxl',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
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
        <polyline points="17 10 12 15 7 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
        <path d="M20 17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" />
      </svg>
    )
  },
  {
    label: 'Quy trình xử lý hàng trả',
    href: '/nvxl-tra',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 14 4 9l5-5" />
        <path d="M4 9h12.5a5.5 5.5 0 0 1 5.5 5.5v.5" />
      </svg>
    )
  },
  {
    label: 'Quy trình xử lý luân chuyển',
    href: '/nvxl-luanchuyen',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
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
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    label: 'Botchat Vận hành',
    href: '/nvxl-botchat',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  }
];

const modules = [
  {
    index: '01',
    tag: 'Quy trình // Phân loại đơn hàng',
    title: 'Phân loại đơn hàng',
    desc: 'Quy trình tiếp nhận hàng trả từ NVPTTT bàn giao về bưu cục và thực hiện phân loại theo tình trạng thực tế.',
    image: '/nvxl-phanloai.png',
    fallbackText: 'QUY TRÌNH XỬ LÝ HÀNG TRẢ // PHÂN LOẠI ĐƠN HÀNG TRẢ',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9ea25ae66b795814a5696'
  },
  {
    index: '02',
    tag: 'Quy trình // In mã đơn',
    title: 'In mã đơn',
    desc: 'Hướng dẫn in nhãn, dán mã vạch kiểm soát hàng hoàn trả nhằm chuẩn bị xuất trả cho nhà bán hàng.',
    image: '/nvxl-inma.png',
    fallbackText: 'QUY TRÌNH XỬ LÝ HÀNG TRẢ // IN MÃ ĐƠN TRẢ',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9eaa1c1dc6bbe38aa1be8'
  },
  {
    index: '03',
    tag: 'Quy trình // Tổng hợp',
    title: 'Tổng hợp quy trình xử lý hàng trả',
    desc: 'Hệ thống lại các bài học nghiệp vụ xử lý hàng hoàn trả, các tình huống phát sinh và cách giải quyết.',
    image: '/nvxl-tra.png',
    fallbackText: 'QUY TRÌNH XỬ LÝ HÀNG TRẢ // TỔNG HỢP',
    meta: 'Thời lượng: 20 phút // Cấp độ: Đánh giá',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=68e9ecfeae66b795814a569f'
  }
];

export default function NvxlTraPage() {
  const [mounted, setMounted] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap');

        /* Editorial Minimalist UI Design System - Exo font, Orange (#FF5200) to Yellow (#F8B200) Theme */
        .hn-page {
          background-color: #FFFFFF !important;
          color: #3D3D3D !important;
          font-family: 'Exo', 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif !important;
          min-height: calc(100vh - 68px);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 120px;
          padding-left: 72px !important; /* space for collapsed left sidebar */
          transition: padding-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-x: hidden;
        }

        .hn-page.hn-sidebar-expanded {
          padding-left: 280px !important; /* space for expanded sidebar */
        }

        /* Collapsible left sidebar */
        .hn-sidebar {
          position: fixed;
          left: 0;
          top: 68px; /* height of the global navbar */
          height: calc(100vh - 68px);
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

        .hn-sidebar.hn-expanded {
          width: 280px;
          align-items: flex-start;
          padding: 24px 16px;
        }

        /* Sidebar Toggle Button at the top of the sidebar */
        .hn-sidebar-toggle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #3D3D3D;
          margin-bottom: 32px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          align-self: center;
          flex-shrink: 0;
        }
        .hn-sidebar.hn-expanded .hn-sidebar-toggle-btn {
          align-self: flex-end;
          margin-right: 4px;
        }
        .hn-sidebar-toggle-btn:hover {
          background-color: #FF5200;
          color: #FFFFFF;
          border-color: #FF5200;
          transform: scale(1.05);
        }

        /* Group title shown only when expanded */
        .hn-sidebar-group-title {
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
        .hn-sidebar.hn-expanded .hn-sidebar-group-title {
          opacity: 1;
        }

        /* Navigation List */
        .hn-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }

        /* Sidebar item styling */
        .hn-sidebar-item {
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

        .hn-sidebar.hn-expanded .hn-sidebar-item {
          padding: 0 20px;
          border-radius: 12px;
        }

        .hn-sidebar-item:hover {
          background-color: rgba(255, 82, 0, 0.05);
          color: #FF5200;
        }

        .hn-sidebar-item.active {
          background-color: rgba(255, 82, 0, 0.08);
          color: #FF5200;
          font-weight: 700;
          border-left: 4px solid #FF5200;
          border-radius: 0 24px 24px 0;
          padding-left: 10px;
        }
        
        .hn-sidebar.hn-expanded .hn-sidebar-item.active {
          border-radius: 0 12px 12px 0;
          padding-left: 16px;
        }

        .hn-sidebar-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .hn-sidebar-item-text {
          font-size: 14px;
          font-weight: 500;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .hn-sidebar.hn-expanded .hn-sidebar-item-text {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }

        /* Tooltips for collapsed state */
        .hn-sidebar-tooltip {
          position: absolute;
          left: 80px;
          background-color: #111115;
          color: #FFFFFF;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(5px);
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 100;
        }

        .hn-sidebar-item:hover .hn-sidebar-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        .hn-sidebar.hn-expanded .hn-sidebar-tooltip {
          display: none !important;
        }

        /* Mobile Responsive triggers and drawer */
        .hn-mobile-menu-trigger {
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
          transition: transform 0.2s ease, background-color 0.2s;
        }
        .hn-mobile-menu-trigger:hover {
          background-color: #e04600;
          transform: scale(1.05);
        }

        /* Mobile Drawer Styling */
        .hn-mobile-drawer {
          position: fixed;
          top: 0;
          left: -300px;
          width: 280px;
          height: 100vh;
          background-color: #FFFFFF;
          z-index: 110;
          box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          padding: 24px;
          transition: left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hn-mobile-drawer.hn-open {
          left: 0;
        }

        .hn-mobile-drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          flex-shrink: 0;
        }

        .hn-mobile-drawer-title {
          font-family: 'Exo', sans-serif !important;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #FF5200;
        }

        .hn-mobile-drawer-close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #4B5563;
        }

        .hn-mobile-drawer-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 105;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .hn-mobile-drawer-overlay.hn-open {
          opacity: 1;
          pointer-events: auto;
        }

        /* Container Limit */
        .hn-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 100px;
          padding: 80px 24px 0;
          box-sizing: border-box;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hn-page.hn-mounted .hn-container {
          opacity: 1;
          transform: translateY(0);
        }

        /* Merged Hero Banner style */
        .hn-hero-banner {
          width: 100%;
          height: 440px;
          position: relative;
          overflow: hidden;
          background-image: url('/NVXL 1.JPG');
          background-size: 130% auto;
          background-position: left center;
          border-bottom: 4px solid #FF5200;
          display: flex;
          align-items: center;
          padding: 0 48px;
          box-sizing: border-box;
          z-index: 5;
        }

        .hn-hero-overlay {
          display: none !important;
        }

        /* Glassmorphic content overlay floating on top */
        .hn-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 680px;
          background: rgba(20, 20, 25, 0.65) !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-left: 4px solid #FF5200 !important;
          border-radius: 16px;
          padding: 32px 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          text-align: left;
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hn-page.hn-mounted .hn-hero-content {
          transform: translateY(0);
          opacity: 1;
        }

        .hn-hero-tag {
          font-family: 'Exo', sans-serif !important;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #FF5200;
          display: block;
          margin-bottom: 8px;
        }

        .hn-hero-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: clamp(1.8rem, 3.8vw, 2.4rem) !important;
          line-height: 1.15;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #FFFFFF !important;
          margin: 0 0 12px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
        }

        .hn-hero-desc {
          font-size: 15px;
          line-height: 1.6;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85) !important;
          margin: 0;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        /* Hero breadcrumbs styling */
        .hn-hero-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-family: 'Exo', sans-serif !important;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hn-hero-breadcrumb a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .hn-hero-breadcrumb a:hover {
          color: #FF5200;
        }

        .hn-hero-breadcrumb-sep {
          color: rgba(255, 255, 255, 0.3);
        }

        .hn-hero-breadcrumb-cur {
          color: #FF5200;
          font-weight: 800;
        }

        /* Alternating Content Rows */
        .hn-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 64px;
          width: 100%;
        }

        /* Image Wrapper with scaling effect - contained to prevent crop */
        .hn-img-wrap {
          flex: 1.1;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 20px;
          overflow: hidden;
          background-color: #F9FAFB;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.02);
          position: relative;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hn-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Image Fallback overlay style */
        .hn-thumb-fallback {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #fff 0%, #fff5ef 38%, #ffd6bf 100%);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 30px;
          border-radius: 20px;
        }
        .hn-thumb-text {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900;
          font-size: 20px;
          line-height: 1.2;
          color: #006FAD;
          text-transform: uppercase;
          max-width: 200px;
        }
        .hn-thumb-text .tag {
          display: inline-block;
          background: #FF5200;
          color: #fff;
          padding: 3px 8px;
          margin-top: 8px;
          font-size: 13px;
          border-radius: 4px;
        }
        .hn-thumb-figure {
          width: 88px;
          height: 118px;
          border-radius: 12px 12px 0 0;
          background: radial-gradient(circle at 50% 18%, #f6c7ad 0 14%, transparent 15%), linear-gradient(180deg,#ffb14d 0 34%, #ff6a21 35% 74%, #2d2230 75% 100%);
          position: relative;
          box-shadow: 0 10px 24px rgba(0,0,0,.12);
        }
        .hn-thumb-figure:before {
          content:'';
          position:absolute;
          right:-8px;
          top:18px;
          width:34px;
          height:70px;
          border-radius:16px;
          background:#fff2ef;
          transform:rotate(8deg);
        }
        .hn-thumb-divider {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background: #FF5200;
        }

        .hn-row:hover .hn-img-wrap img {
          transform: scale(1.03);
        }

        /* Content Info Block */
        .hn-info {
          flex: 0.9;
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;
        }

        /* Big Exo index with warm gradient */
        .hn-row-index {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: 56px;
          line-height: 1;
          color: rgba(255, 82, 0, 0.12);
          margin: 0;
          transition: color 0.3s ease;
        }

        .hn-row:hover .hn-row-index {
          color: #FF5200;
        }

        .hn-row-tag {
          font-family: monospace;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FF5200;
        }

        .hn-row-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          line-height: 1.15;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #3D3D3D;
          margin: 0;
        }

        .hn-row-desc {
          font-size: 15px;
          line-height: 1.65;
          font-weight: 500;
          color: #4B5563;
          margin: 0;
        }

        .hn-row-meta {
          font-family: monospace;
          font-size: 12px;
          letter-spacing: 0.05em;
          color: #9CA3AF;
          text-transform: uppercase;
          border-left: 2px solid #E5E7EB;
          padding-left: 12px;
        }

        /* Pill CTA Button (Orange to Yellow Gradient) */
        .hn-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #FF5200, #F8B200) !important;
          color: #FFFFFF !important;
          font-family: 'Exo', sans-serif !important;
          font-weight: 700;
          font-size: 13px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
          width: fit-content;
          box-shadow: 0 4px 14px rgba(255, 82, 0, 0.25);
        }

        .hn-btn:hover {
          background: #111115 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .hn-btn-arrow {
          font-size: 16px;
          transition: transform 0.25s ease;
        }

        .hn-btn:hover .hn-btn-arrow {
          transform: translateX(4px);
        }

        /* Row Alternating Order */
        .hn-row.hn-reverse {
          flex-direction: row-reverse;
        }

        /* Responsive design */
        @media (max-width: 968px) {
          .hn-row {
            flex-direction: column !important;
            gap: 20px !important;
            background: #FFFFFF !important;
            border: 1px solid rgba(0, 0, 0, 0.08) !important;
            border-radius: 16px !important;
            padding: 16px !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02) !important;
            box-sizing: border-box !important;
          }
          .hn-img-wrap {
            aspect-ratio: 16 / 10 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 10px !important;
          }
          .hn-info {
            width: 100% !important;
            gap: 12px !important;
            padding: 4px 8px !important;
          }
          .hn-container {
            gap: 24px !important;
            padding: 24px 16px 0 !important;
          }
          .hn-page {
            padding: 0 0 80px !important;
            padding-left: 0 !important; /* Reset on mobile */
          }
          .hn-sidebar {
            display: none !important;
          }
          .hn-mobile-menu-trigger {
            display: flex;
          }
          .hn-hero-banner {
            height: 300px;
            padding: 0 24px;
            background-size: cover;
            background-position: right center;
          }
          .hn-hero-content {
            padding: 24px;
            border-radius: 12px;
          }
          .hn-hero-title {
            white-space: normal !important;
          }
        }
      `}</style>

      <div className={`hn-page${mounted ? ' hn-mounted' : ''}${!sidebarCollapsed ? ' hn-sidebar-expanded' : ''}`}>
        {/* Merged Hero Section */}
        <section className="hn-hero-banner">
          <div className="hn-hero-overlay" />
          <div className="hn-hero-content">
            {/* Breadcrumbs inside Hero Banner */}
            <nav className="hn-hero-breadcrumb">
              <Link href="/khoi-thi-truong">Khối Thị Trường</Link>
              <span className="hn-hero-breadcrumb-sep">›</span>
              <Link href="/nvxl">Quy trình xử lý hàng giao</Link>
              <span className="hn-hero-breadcrumb-sep">›</span>
              <span className="hn-hero-breadcrumb-cur">Quy trình xử lý hàng trả</span>
            </nav>
            <span className="hn-hero-tag">[ Hệ thống đào tạo vận hành ]</span>
            <h1 className="hn-hero-title">Quy trình xử lý hàng trả</h1>
            <p className="hn-hero-desc">
              Quy trình tiếp nhận hàng trả từ NVPTTT bàn giao về bưu cục, phân loại và in mã xác nhận hoàn trả khách hàng.
            </p>
          </div>
        </section>

        <div className="hn-container">
          {/* Alternating Modules list */}
          {modules.map((mod, idx) => (
            <section key={idx} className={`hn-row${idx % 2 !== 0 ? ' hn-reverse' : ''}`}>
              <div className="hn-img-wrap">
                <img 
                  src={mod.image} 
                  alt={mod.title} 
                  onError={(e) => { 
                    (e.target as HTMLImageElement).style.display = 'none'; 
                    if ((e.target as HTMLImageElement).nextElementSibling) {
                      ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex'; 
                    }
                  }} 
                />
                <div className="hn-thumb-fallback" style={{ display: 'none' }}>
                  <div className="hn-thumb-text">
                    {mod.fallbackText.split(' // ')[0]}
                    <div className="tag">{mod.fallbackText.split(' // ')[1]}</div>
                  </div>
                  <div className="hn-thumb-figure"></div>
                  <div className="hn-thumb-divider"></div>
                </div>
              </div>
              <div className="hn-info">
                <span className="hn-row-index">{mod.index}</span>
                <span className="hn-row-tag">[{mod.tag}]</span>
                <h2 className="hn-row-title">{mod.title}</h2>
                <p className="hn-row-desc">{mod.desc}</p>
                <div className="hn-row-meta">{mod.meta}</div>
                <a className="hn-btn" href={mod.href} target="_blank" rel="noopener noreferrer">
                  <span>Bắt đầu học</span>
                  <span className="hn-btn-arrow">→</span>
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* Desktop Collapsible Left Sidebar */}
        <aside className={`hn-sidebar${!sidebarCollapsed ? ' hn-expanded' : ''}`}>
          <button 
            className="hn-sidebar-toggle-btn"
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

          <span className="hn-sidebar-group-title">Nội dung đào tạo</span>

          <nav className="hn-sidebar-nav">
            {navTabs.map((tab, idx) => {
              const isActive = tab.href === '/nvxl-tra';
              return (
                <a key={idx} href={tab.href} className={`hn-sidebar-item${isActive ? ' active' : ''}`}>
                  <span className="hn-sidebar-item-icon">{tab.icon}</span>
                  <span className="hn-sidebar-item-text">{tab.label}</span>
                  <span className="hn-sidebar-tooltip">{tab.label}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Floating Menu Trigger */}
        <button 
          className="hn-mobile-menu-trigger"
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
          className={`hn-mobile-drawer-overlay${mobileDrawerOpen ? ' hn-open' : ''}`}
          onClick={() => setMobileDrawerOpen(false)}
        />

        {/* Mobile Drawer */}
        <div className={`hn-mobile-drawer${mobileDrawerOpen ? ' hn-open' : ''}`}>
          <div className="hn-mobile-drawer-header">
            <span className="hn-mobile-drawer-title">Quy trình xử lý hàng giao</span>
            <button 
              className="hn-mobile-drawer-close-btn"
              onClick={() => setMobileDrawerOpen(false)}
              aria-label="Đóng menu"
            >
              ✕
            </button>
          </div>

          <nav className="hn-sidebar-nav">
            {navTabs.map((tab, idx) => {
              const isActive = tab.href === '/nvxl-tra';
              return (
                <a 
                  key={idx} 
                  href={tab.href} 
                  className={`hn-sidebar-item${isActive ? ' active' : ''}`} 
                  onClick={() => setMobileDrawerOpen(false)}
                >
                  <span className="hn-sidebar-item-icon">{tab.icon}</span>
                  <span className="hn-sidebar-item-text" style={{ opacity: 1, transform: 'none' }}>{tab.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
