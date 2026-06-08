'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Navigation tabs with icons for NVPH representing the 4 KTC sites
const navTabs = [
  {
    label: 'KTC Xuyên Á',
    href: '/nvph',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    label: 'KTC Hưng Yên',
    href: '/nvph/hung-yen',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    label: 'KTC M12',
    href: '/nvph/m12',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    label: 'KTC Đài Tư',
    href: '/nvph/dai-tu',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
];

// Flow Steps for flowchart (combined step 1 & 2 into step 1)
const flowSteps = [
  { step: '01', title: 'Nhập & Xử lý', desc: 'Tiếp nhận và quét mã phân loại hàng', href: '#module-01' },
  { step: '02', title: 'Đổ tải', desc: 'Tháo dỡ niêm phong các bao lớn', href: '#module-02' },
  { step: '03', title: 'Rã hàng Feeder', desc: 'Đưa hàng lên băng chuyền phân loại', href: '#module-03' },
  { step: '04', title: 'Đóng kiện Chute', desc: 'Gom hàng đóng kiện tại máng trượt', href: '#module-04' },
  { step: '05', title: 'Xuất kiện', desc: 'Niêm phong xuất đi bưu cục đích', href: '#module-05' }
];

const modules = [
  {
    index: '01',
    tag: 'Quy trình // Nhập & Xử lý',
    title: 'Nhập & Xử lý hàng nhập',
    desc: 'Quy trình tiếp nhận bàn giao hàng hóa từ xe trung chuyển, kiểm tra tình trạng niêm phong, quét mã vạch phân loại kiện hàng theo các tuyến giao và cập nhật trạng thái nhận hàng chính xác trên hệ thống.',
    image: '/nvph-nhanhang.png',
    fallbackText: 'NHẬP & XỬ LÝ HÀNG NHẬP // NVPH',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=68e6a0020175b1e9c535e377'
  },
  {
    index: '02',
    tag: 'Quy trình // Đổ tải',
    title: 'Quy trình Đổ tải',
    desc: 'Thao tác tháo dỡ các bao hàng lớn chuyển từ kho trung chuyển về, kiểm tra tem niêm phong và chuẩn bị phân loại chi tiết.',
    image: '/nvph-dotai.png',
    fallbackText: 'QUY TRÌNH ĐỔ TẢI // NVPH',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=68d8fcbde3e2281132a415f5'
  },
  {
    index: '03',
    tag: 'Quy trình // Feeder',
    title: 'Rã hàng/Cấp hàng tại Feeder',
    desc: 'Quy chuẩn vận hành rã kiện hàng từ khu vực đổ tải đưa lên băng chuyền phân loại tự động hoặc thủ công một cách khoa học.',
    image: '/nvph-feeder.png',
    fallbackText: 'CẤP HÀNG FEEDER // NVPH',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=68d8fd20e3e2281132a415f8'
  },
  {
    index: '04',
    tag: 'Quy trình // Chute',
    title: 'Đóng kiện tại Chute',
    desc: 'Phương pháp gom hàng tại các máng trượt (Chute), kiểm tra địa chỉ tuyến, đóng bao/đóng kiện gọn gàng và đảm bảo an toàn hàng hóa.',
    image: '/nvph-dongkien.png',
    fallbackText: 'ĐÔNG KIỆN CHUTE // NVPH',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=68d9013c24fe9c232415a741'
  },
  {
    index: '05',
    tag: 'Quy trình // Xuất kiện',
    title: 'Quy trình Xuất kiện',
    desc: 'Thao tác đóng niêm phong bao hàng, in tem dán mã vạch kiểm soát và xếp hàng lên xe tải trung chuyển để luân chuyển đi các bưu cục đích.',
    image: '/nvph-xuatkien.png',
    fallbackText: 'QUY TRÌNH XUẤT KIỆN // NVPH',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: 'https://app-driver-web.ghn.vn/survey-detail?surveyId=68e6a1469653b7435d007932'
  },
  {
    index: '06',
    tag: 'Quy trình // Nội quy',
    title: 'Nội quy làm việc',
    desc: 'Các quy định chuẩn mực về tác phong, đồng phục, thời gian làm việc và quy tắc ứng xử dành riêng cho Nhân viên Phân hàng tại bưu cục.',
    image: '/nvph-noiquy.png',
    fallbackText: 'NỘI QUY LÀM VIỆC // NVPH',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: '#'
  },
  {
    index: '07',
    tag: 'Quy trình // ATLĐ',
    title: 'An toàn lao động',
    desc: 'Các quy tắc về an toàn vận hành thiết bị, an toàn phòng cháy chữa cháy và tư thế bốc xếp hàng hóa đúng chuẩn để tránh chấn thương.',
    image: '/nvph-atld.png',
    fallbackText: 'AN TOÀN LAO ĐỘNG // NVPH',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: '#'
  },
  {
    index: '08',
    tag: 'Quy trình // Sự cố',
    title: 'Các lỗi/ Sự cố thường gặp',
    desc: 'Nhận diện các tình huống hàng hóa móp méo, rách vỡ, sai mã vạch, thất lạc kiện hàng và quy trình xử lý báo cáo sự cố chuẩn.',
    image: '/nvph-suco.png',
    fallbackText: 'XỬ LÝ SỰ CỐ // NVPH',
    meta: 'Thời lượng: 10 phút // Cấp độ: Cơ bản',
    href: '#'
  }
];

export default function NvphPage() {
  const [mounted, setMounted] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap');

        html {
          scroll-behavior: smooth;
        }

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
          font-size: 18px;
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
          background-image: url('/NVPH 1.jpeg');
          background-size: cover;
          background-position: 55% 70%;
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
          max-width: 900px;
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
          font-size: clamp(1.6rem, 3.8vw, 2.5rem) !important;
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

        .hn-flow-warehouse-name {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: clamp(2rem, 5vw, 3.2rem) !important;
          color: #FF5200 !important;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          margin-bottom: 8px;
          display: block;
          text-align: center;
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

        /* Operation Flowchart Style */
        .hn-flow-section {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 82, 0, 0.1);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(255, 82, 0, 0.02);
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 32px;
          box-sizing: border-box;
          margin-top: 10px;
        }

        .hn-flow-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hn-flow-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 800 !important;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem) !important;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #3D3D3D !important;
          margin: 0;
        }

        .hn-flow-subtitle {
          font-size: 14px;
          color: #6B7280;
          font-weight: 500;
        }

        .hn-flow-track {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          width: 100%;
          gap: 16px;
          padding: 20px 0;
        }

        /* Connecting line in background */
        .hn-flow-track::before {
          content: '';
          position: absolute;
          top: 52px;
          left: 60px;
          right: 60px;
          height: 3px;
          background: linear-gradient(90deg, #FF5200, #F8B200);
          z-index: 1;
          opacity: 0.25;
        }

        .hn-flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          position: relative;
          z-index: 2;
          cursor: pointer;
          transition: transform 0.3s ease;
          text-decoration: none !important;
        }

        .hn-flow-step:hover {
          transform: translateY(-5px);
        }

        .hn-flow-node {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 3px solid #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-family: 'Exo', sans-serif !important;
          font-size: 18px;
          color: #9CA3AF;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          background-clip: padding-box;
        }

        .hn-flow-step:hover .hn-flow-node {
          border-color: #FF5200;
          color: #FF5200;
          box-shadow: 0 0 15px rgba(255, 82, 0, 0.25);
          transform: scale(1.08);
        }

        .hn-flow-info {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hn-flow-step-num {
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          color: #FF5200;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .hn-flow-step-name {
          font-family: 'Exo', sans-serif !important;
          font-weight: 800 !important;
          font-size: 15px;
          color: #3D3D3D;
          margin: 0;
          transition: color 0.2s ease;
        }

        .hn-flow-step:hover .hn-flow-step-name {
          color: #FF5200;
        }

        .hn-flow-step-desc {
          font-size: 12px;
          color: #6B7280;
          line-height: 1.4;
          max-width: 160px;
        }

        /* Alternating Content Rows */
        .hn-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 64px;
          width: 100%;
          scroll-margin-top: 100px; /* Offset for smooth scroll under sticky navbar */
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
            gap: 32px;
          }
          .hn-img-wrap {
            aspect-ratio: 16 / 9;
            width: 100%;
          }
          .hn-info {
            width: 100%;
            gap: 16px;
          }
          .hn-container {
            gap: 80px;
            padding: 40px 20px 0;
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
          .hn-hero-content {
            padding: 24px;
            border-radius: 12px;
          }
          .hn-hero-title {
            white-space: normal !important;
          }

          /* Mobile vertical flow list */
          .hn-flow-section {
            padding: 24px 16px;
            border-radius: 16px;
            gap: 24px;
          }
          .hn-flow-track {
            flex-direction: column;
            gap: 28px;
            padding: 10px 0;
          }
          .hn-flow-track::before {
            top: 20px;
            bottom: 20px;
            left: 24px;
            width: 3px;
            height: auto;
            right: auto;
            background: linear-gradient(180deg, #FF5200, #F8B200);
          }
          .hn-flow-step {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
            gap: 20px;
            width: 100%;
          }
          .hn-flow-node {
            width: 48px;
            height: 48px;
            font-size: 15px;
            flex-shrink: 0;
          }
          .hn-flow-info {
            margin-top: 0;
            gap: 4px;
          }
          .hn-flow-step-desc {
            max-width: 100%;
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
              <span className="hn-hero-breadcrumb-cur">Nhân viên Phân hàng</span>
            </nav>
            <span className="hn-hero-tag">[ Hệ thống đào tạo vận hành ]</span>
            <h1 className="hn-hero-title">Nhân viên Phân hàng</h1>
            <p className="hn-hero-desc">
              Chương trình đào tạo chuẩn hoá quy trình xử lý hàng hoá tại các Kho Trung Chuyển dành cho Nhân viên Phân hàng
            </p>
          </div>
        </section>

        <div className="hn-container">
          {/* Visual Operation Flowchart Section */}
          <section className="hn-flow-section">
            <div className="hn-flow-header">
              <span className="hn-flow-warehouse-name">Kho Trung Chuyển M12</span>
              <h2 className="hn-flow-title">Quy trình vận hành tại Kho Trung Chuyển</h2>
              <span className="hn-flow-subtitle">Luồng hàng từ lúc nhập hàng đến khi xuất hàng</span>
            </div>
            <div className="hn-flow-track">
              {flowSteps.map((fs, idx) => (
                <a key={idx} href={fs.href} className="hn-flow-step">
                  <div className="hn-flow-node">{fs.step}</div>
                  <div className="hn-flow-info">
                    <span className="hn-flow-step-num">Bước {fs.step}</span>
                    <h3 className="hn-flow-step-name">{fs.title}</h3>
                    <p className="hn-flow-step-desc">{fs.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Alternating Modules list */}
          {modules.map((mod, idx) => (
            <section key={idx} id={`module-${mod.index}`} className={`hn-row${idx % 2 !== 0 ? ' hn-reverse' : ''}`}>
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

          <span className="hn-sidebar-group-title">Nội dung đào tạo</span>

          <nav className="hn-sidebar-nav">
            {navTabs.map((tab, idx) => {
              const isActive = pathname === tab.href;
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
            <span className="hn-mobile-drawer-title">NV Phân hàng</span>
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
              const isActive = pathname === tab.href;
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
