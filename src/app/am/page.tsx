'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Navigation tabs — anchor links to each competency module on this page
const navTabs = [
  {
    label: 'Quy trình làm việc NVXL',
    href: '#am-01',
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
    label: 'Quy trình làm việc NVPTTT',
    href: '#am-02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    )
  },
  {
    label: 'Tuyển dụng & Giữ chân NV',
    href: '#am-03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    )
  },
  {
    label: 'Quản lý Hiệu quả Công việc',
    href: '#am-04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  },
  {
    label: 'Quản lý Nghỉ phép',
    href: '#am-05',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  },
  {
    label: 'Nội quy Lao động',
    href: '#am-06',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    )
  },
  {
    label: 'Quản lý Ngân sách',
    href: '#am-07',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    label: 'Quy trình Mở mới Bưu cục',
    href: '#am-08',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    )
  },
  {
    label: 'Quy định về Camera',
    href: '#am-09',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    )
  },
  {
    label: 'Kỹ năng chăm sóc Khách hàng',
    href: '#am-10',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    )
  }
];

const modules = [
  {
    index: '01',
    tag: 'Vận hành // NVXL',
    title: 'Quy trình làm việc NVXL',
    desc: 'Hiểu sâu toàn bộ nghiệp vụ của Nhân viên Xử lý — nhận tải, rã kiện, gán đơn, bắn kiểm — để giám sát chất lượng và xử lý sự cố tại bưu cục.',
    image: '/am-quytrinhnvxl.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // QUY TRÌNH NVXL',
    meta: 'Thời lượng: 15 phút // Cấp độ: Quản lý',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=693641e1a0840ad458c460e0'
  },
  {
    index: '02',
    tag: 'Vận hành // NVPTTT',
    title: 'Quy trình làm việc NVPTTT',
    desc: 'Hiểu rõ quy trình giao - lấy hàng, nộp COD và cập nhật POD của Nhân viên Phát triển Thị trường để điều phối tuyến và nâng cao năng suất đội ngũ.',
    image: '/am-quytrinhnvpttt.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // QUY TRÌNH NVPTTT',
    meta: 'Thời lượng: 15 phút // Cấp độ: Quản lý',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=6939537e287afe5ae547e753'
  },
  {
    index: '03',
    tag: 'Nhân sự // Tuyển dụng',
    title: 'Tuyển dụng & Giữ chân Nhân viên',
    desc: 'Quy trình hoạch định nhân sự, đăng tuyển, phỏng vấn, hội nhập và các chính sách giữ chân nhân viên để đảm bảo đủ lực lượng vận hành khu vực.',
    image: '/am-hiring.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // TUYỂN DỤNG',
    meta: 'Thời lượng: 15 phút // Cấp độ: Nhân sự',
    href: '#'
  },
  {
    index: '04',
    tag: 'Nhân sự // Hiệu quả',
    title: 'Quản lý Hiệu quả Công việc',
    desc: 'Phương pháp thiết lập chỉ tiêu, theo dõi KPI và đánh giá hiệu quả công việc của đội ngũ bưu cục theo chu kỳ.',
    image: '/am-pm.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // HIỆU QUẢ CÔNG VIỆC',
    meta: 'Thời lượng: 15 phút // Cấp độ: Nhân sự',
    href: '#'
  },
  {
    index: '05',
    tag: 'Nhân sự // Nghỉ phép',
    title: 'Quản lý Nghỉ phép',
    desc: 'Quy định và thao tác phê duyệt nghỉ phép, sắp xếp ca trực đảm bảo vận hành liên tục, không gián đoạn.',
    image: '/am-nghiphep.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // NGHỈ PHÉP',
    meta: 'Thời lượng: 10 phút // Cấp độ: Nhân sự',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=692d85a7be01e485ec6b82d4'
  },
  {
    index: '06',
    tag: 'Nhân sự // Nội quy',
    title: 'Nội quy Lao động',
    desc: 'Nắm vững nội quy lao động, quy trình xử lý vi phạm và áp dụng kỷ luật công bằng, đúng quy định để duy trì văn hóa và kỷ cương khu vực.',
    image: '/am-noiquy.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // NỘI QUY',
    meta: 'Thời lượng: 10 phút // Cấp độ: Nhân sự',
    href: '#'
  },
  {
    index: '07',
    tag: 'Tài chính // Ngân sách',
    title: 'Quản lý Ngân sách',
    desc: 'Lập kế hoạch, theo dõi và kiểm soát chi phí vận hành bưu cục — tối ưu nguồn lực và đảm bảo hiệu quả tài chính của khu vực.',
    image: '/am-ngansach.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // NGÂN SÁCH',
    meta: 'Thời lượng: 15 phút // Cấp độ: Tài chính',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=692eadc6c025d3f2a964a1bb'
  },
  {
    index: '08',
    tag: 'Vận hành // Mở mới',
    title: 'Quy trình Mở mới Bưu cục',
    desc: 'Hướng dẫn các bước khảo sát, thiết lập và đưa vào vận hành một bưu cục mới trong khu vực phụ trách đúng tiêu chuẩn GHN.',
    image: '/am-momoibc.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // MỞ MỚI BƯU CỤC',
    meta: 'Thời lượng: 15 phút // Cấp độ: Vận hành',
    href: '#'
  },
  {
    index: '09',
    tag: 'Vận hành // Camera',
    title: 'Quy định về Camera',
    desc: 'Quy định lắp đặt, vận hành và sử dụng hệ thống camera giám sát; kiểm soát an ninh hàng hóa và xử lý tình huống bất thường tại bưu cục.',
    image: '/am-camera.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // QUY ĐỊNH CAMERA',
    meta: 'Thời lượng: 10 phút // Cấp độ: Vận hành',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=6952346a9214afa9be91ecca'
  },
  {
    index: '10',
    tag: 'Chất lượng // CSKH',
    title: 'Kỹ năng chăm sóc Khách hàng',
    desc: 'Kỹ năng tiếp nhận, xử lý phản ánh và khiếu nại của khách hàng tại bưu cục — giao tiếp chuyên nghiệp, giải quyết tình huống và nâng cao trải nghiệm dịch vụ trong khu vực phụ trách.',
    image: '/kd-cskh.png',
    fallbackText: 'NĂNG LỰC QUẢN LÝ // CHĂM SÓC KHÁCH HÀNG',
    meta: 'Thời lượng: 15 phút // Cấp độ: Chất lượng',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=692ebc93c025d3f2a964a1ed'
  }
];

export default function AmPage() {
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
          border-bottom: 4px solid #FF5200;
          display: flex;
          align-items: center;
          padding: 0 48px;
          box-sizing: border-box;
          z-index: 5;
        }

        /* Blurred, zoomed copy used purely to fill the wide banner behind the
           subject so there are no empty side gaps. */
        .hn-hero-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/AmDEMO2.jpeg');
          background-size: cover;
          background-position: center 30%;
          filter: blur(28px) brightness(0.82);
          transform: scaleX(-1) scale(1.12);
          z-index: 0;
        }

        /* Sharp, fully-visible subject sized to fit the banner height and
           anchored to the right (away from the text box). Flipped so the
           character faces inward. */
        .hn-hero-banner::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/AmDEMO2.jpeg');
          background-size: contain;
          background-position: left center;
          background-repeat: no-repeat;
          transform: scaleX(-1);
          z-index: 1;
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
          scroll-margin-top: 90px;
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
          }
          .hn-hero-banner::before {
            background-position: center;
            filter: none;
            transform: scaleX(-1);
          }
          .hn-hero-banner::after {
            display: none;
          }
          .hn-hero-content {
            padding: 24px;
            border-radius: 12px;
          }
          .hn-hero-title {
            font-size: 1.25rem !important;
            line-height: 1.25 !important;
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
              <span className="hn-hero-breadcrumb-cur">Area Manager</span>
            </nav>
            <span className="hn-hero-tag">[ Lộ trình phát triển Area Manager ]</span>
            <h1 className="hn-hero-title">Năng lực Quản lý Khu vực</h1>
            <p className="hn-hero-desc">
              Bộ năng lực toàn diện dành cho Area Manager — từ am hiểu vận hành tuyến đầu, quản trị nhân sự, kiểm soát tài chính đến giám sát chất lượng và an ninh bưu cục trong khu vực phụ trách.
            </p>
          </div>
        </section>

        <div className="hn-container">
          {/* Alternating Modules list */}
          {modules.map((mod, idx) => (
            <section key={idx} id={`am-${mod.index}`} className={`hn-row${idx % 2 !== 0 ? ' hn-reverse' : ''}`}>
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
                {mod.href && mod.href !== '#' ? (
                  <a className="hn-btn" href={mod.href} target="_blank" rel="noopener noreferrer">
                    <span>Bắt đầu học</span>
                    <span className="hn-btn-arrow">→</span>
                  </a>
                ) : (
                  <button className="hn-btn" style={{ opacity: 0.6, cursor: 'not-allowed' }} disabled>
                    <span>Sắp ra mắt</span>
                  </button>
                )}
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

          <span className="hn-sidebar-group-title">Năng lực Quản lý</span>

          <nav className="hn-sidebar-nav">
            {navTabs.map((tab, idx) => (
              <a key={idx} href={tab.href} className="hn-sidebar-item">
                <span className="hn-sidebar-item-icon">{tab.icon}</span>
                <span className="hn-sidebar-item-text">{tab.label}</span>
                <span className="hn-sidebar-tooltip">{tab.label}</span>
              </a>
            ))}
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
            <span className="hn-mobile-drawer-title">Năng lực Quản lý</span>
            <button
              className="hn-mobile-drawer-close-btn"
              onClick={() => setMobileDrawerOpen(false)}
              aria-label="Đóng menu"
            >
              ✕
            </button>
          </div>

          <nav className="hn-sidebar-nav">
            {navTabs.map((tab, idx) => (
              <a
                key={idx}
                href={tab.href}
                className="hn-sidebar-item"
                onClick={() => setMobileDrawerOpen(false)}
              >
                <span className="hn-sidebar-item-icon">{tab.icon}</span>
                <span className="hn-sidebar-item-text" style={{ opacity: 1, transform: 'none' }}>{tab.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
