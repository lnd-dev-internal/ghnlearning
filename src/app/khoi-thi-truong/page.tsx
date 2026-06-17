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

export default function KhoiThiTruongPage() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeMobileRole, setActiveMobileRole] = useState<'nvxl' | 'nvpttt' | 'nvph' | 'am' | null>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    role: 'nvxl' | 'nvpttt' | 'nvph' | 'am' | null;
    x: number;
    y: number;
  }>({
    visible: false,
    role: null,
    x: 0,
    y: 0
  });

  const roleData = {
    nvxl: {
      name: 'Nhân viên Xử lý',
      image: '/NVXL 1.JPG',
      function: 'Tiếp nhận hàng hóa, rã tải hàng nhập bưu cục, phân loại tuyến giao, bàn giao cho NVPTTT và xử lý các sự cố đơn hàng.'
    },
    nvpttt: {
      name: 'Nhân viên Phát triển Thị trường',
      image: '/Ship 1.JPG',
      function: 'Tiếp nhận yêu cầu lấy hàng, giao đơn hàng nhanh chóng đến tay khách hàng và cập nhật trạng thái đơn hàng (POD) lên hệ thống.'
    },
    nvph: {
      name: 'Nhân viên Phân hàng',
      image: '/NVPH 1.jpeg',
      function: 'Vận hành hệ thống băng tải tự động tại các Kho Trung chuyển (TTTC), thực hiện rã tải Feeder, chia chọn đơn và đóng kiện xuất hàng đi.'
    },
    am: {
      name: 'Area Manager',
      image: '/AmDEMO2.jpeg',
      function: 'Quản lý toàn diện hoạt động bưu cục trong khu vực: điều phối vận hành, quản trị nhân sự, kiểm soát ngân sách và đảm bảo chất lượng dịch vụ.'
    }
  };

  const stages = [
    {
      title: 'Lấy hàng',
      shortLabel: 'Lấy hàng',
      subtitle: 'Chặng 1: Tiếp nhận yêu cầu & Lấy hàng',
      steps: [
        { num: 'Bước 1', title: 'Đối tác gửi yêu cầu', desc: 'Đối tác chuẩn bị hàng hóa và tạo đơn giao trên hệ thống.' },
        { num: 'Bước 2', title: 'NVPTTT đi lấy hàng', desc: 'Nhân viên Phát triển Thị trường nhận tuyến, đến kho đối tác nhận hàng và cập nhật hệ thống.' }
      ],
      roles: ['nvpttt'],
      svg: (
        <svg viewBox="0 0 320 180" className="vh-stage-svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <defs>
            <linearGradient id="svg-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 82, 0, 0.08)" />
              <stop offset="100%" stopColor="rgba(255, 178, 0, 0.03)" />
            </linearGradient>
          </defs>
          <rect width="320" height="180" rx="16" fill="url(#svg-grad-1)" />
          <g stroke="rgba(255, 82, 0, 0.1)" strokeWidth="1" fill="none">
            <circle cx="160" cy="90" r="60" />
            <circle cx="160" cy="90" r="40" />
            <line x1="160" y1="20" x2="160" y2="160" />
            <line x1="20" y1="90" x2="300" y2="90" />
          </g>
          
          {/* Package Icon */}
          <g transform="translate(80, 90)" stroke="#FF5200" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M -15,-10 L 0,-20 L 15,-10 L 15,15 L 0,25 L -15,15 Z" fill="rgba(255, 255, 255, 0.9)" />
            <path d="M -15,-10 L 0,0 L 15,-10" />
            <path d="M 0,-20 L 0,0" />
            <path d="M 0,0 L 0,25" />
            <circle cx="0" cy="-20" r="3" fill="#FF5200" stroke="none" />
          </g>
          
          {/* Transmitting wave effect */}
          <path d="M 120,90 Q 140,70 160,90 T 200,90" stroke="#FF5200" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.8">
            <animate attributeName="stroke-dashoffset" values="0;20" dur="1.2s" repeatCount="indefinite" />
          </path>
          
          {/* Motorbike Shifting */}
          <g transform="translate(210, 80)">
            <g stroke="#FF5200" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="-10" y="-12" width="12" height="12" rx="2" fill="#FF5200" stroke="none" />
              <path d="M -5,0 L 5,0 L 12,-10 L 22,-10 L 25,-4 L 18,8" />
              <path d="M 5,0 L 10,8" />
              <circle cx="-5" cy="8" r="7" stroke="#FF5200" strokeWidth="2.5" fill="#FFFFFF" />
              <circle cx="18" cy="8" r="7" stroke="#FF5200" strokeWidth="2.5" fill="#FFFFFF" />
            </g>
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="200,80; 210,80; 200,80" 
              dur="4s" 
              repeatCount="indefinite" 
            />
          </g>
        </svg>
      )
    },
    {
      title: 'Bưu cục Lấy',
      shortLabel: 'BC Lấy',
      subtitle: 'Chặng 2: Tập kết & Phân loại Bưu cục gửi',
      steps: [
        { num: 'Bước 3', title: 'Tập kết hàng hoá', desc: 'Các kiện hàng từ đối tác được gom về bưu cục lấy đầu gửi.' },
        { num: 'Bước 4', title: 'Rã tải & Phân tuyến', desc: 'Nhân viên Xử lý tiến hành mở bao, quét mã bắn kiểm và phân loại hàng theo từng cụm tỉnh thành.' }
      ],
      roles: ['nvxl'],
      svg: (
        <svg viewBox="0 0 320 180" className="vh-stage-svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <rect width="320" height="180" rx="16" fill="rgba(255, 82, 0, 0.08)" />
          <g stroke="rgba(255, 82, 0, 0.1)" strokeWidth="1" fill="none">
            <line x1="20" y1="120" x2="300" y2="120" strokeWidth="2" stroke="rgba(255, 82, 0, 0.2)" />
            <circle cx="60" cy="70" r="30" />
            <circle cx="260" cy="70" r="30" />
          </g>
          
          {/* Post Office Station Visual */}
          <g transform="translate(45, 60)" stroke="#FF5200" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 0,40 L 0,10 L 15,0 L 30,10 L 30,40 Z" fill="rgba(255, 255, 255, 0.9)" />
            <rect x="8" y="20" width="14" height="20" fill="#FF5200" stroke="none" />
            <circle cx="15" cy="-8" r="4" fill="#FF5200" stroke="none" />
          </g>
          
          {/* Sorting Scan Laser beam */}
          <g transform="translate(160, 50)">
            <path d="M -30,0 L 30,0" stroke="#FF5200" strokeWidth="2.5" />
            <polygon points="-25,0 25,0 40,65 -40,65" fill="rgba(255, 82, 0, 0.15)" stroke="none" />
            <line x1="0" y1="0" x2="0" y2="65" stroke="#FF5200" strokeWidth="1.5" strokeDasharray="3 3">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
            </line>
          </g>
          
          {/* Package on sorting belt */}
          <g transform="translate(160, 105)" stroke="#FF5200" strokeWidth="2" fill="none">
            <rect x="-16" y="-12" width="32" height="22" rx="3" fill="#FFFFFF" />
            <line x1="-8" y1="-1" x2="8" y2="-1" strokeWidth="1.5" />
            <line x1="-8" y1="3" x2="4" y2="3" strokeWidth="1.5" />
            <circle cx="10" cy="-6" r="2" fill="#FF5200" stroke="none">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      )
    },
    {
      title: 'TTTC & TC',
      shortLabel: 'TTTC',
      subtitle: 'Chặng 3: Vận chuyển Liên tỉnh & Phân loại tự động tại TTTC',
      steps: [
        { num: 'Trung chuyển', title: 'Xe tải trung chuyển', desc: 'Đóng bao tải và vận chuyển kiện hàng lớn kết nối bưu cục đi qua mạng lưới xe liên tỉnh.' },
        { num: 'Bước 5', title: 'Băng tải phân loại tự động', desc: 'Nhân viên Phân hàng vận hành hệ thống băng tải tự động tại TTTC, chia chọn đơn hàng chính xác tuyệt đối.' }
      ],
      roles: ['nvph'],
      svg: (
        <svg viewBox="0 0 320 180" className="vh-stage-svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <rect width="320" height="180" rx="16" fill="rgba(255, 82, 0, 0.08)" />
          <g stroke="rgba(255, 82, 0, 0.1)" strokeWidth="1" fill="none">
            <path d="M 20,135 Q 160,115 300,135" stroke="rgba(255, 82, 0, 0.2)" strokeWidth="2" />
            <circle cx="160" cy="50" r="30" />
          </g>
          
          {/* Cargo Truck Travelling */}
          <g transform="translate(40, 100)">
            <g stroke="#FF5200" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="-15" y="-18" width="35" height="24" rx="2" fill="#FFFFFF" />
              <path d="M 20,6 L 28,6 L 33,-2 L 33,-12 L 20,-12 Z" fill="rgba(255, 255, 255, 0.9)" />
              <rect x="23" y="-8" width="6" height="5" />
              <circle cx="-5" cy="11" r="5.5" stroke="#FF5200" strokeWidth="2" fill="#FFFFFF" />
              <circle cx="15" cy="11" r="5.5" stroke="#FF5200" strokeWidth="2" fill="#FFFFFF" />
              <circle cx="26" cy="11" r="5.5" stroke="#FF5200" strokeWidth="2" fill="#FFFFFF" />
            </g>
            <path d="M -24,-12 L -18,-12 M -28,-6 L -20,-6 M -26,0 L -18,0" stroke="#FF5200" strokeWidth="1.5" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" values="0;10" dur="0.8s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Warehouse Automated Hub Visual */}
          <g transform="translate(230, 45)" stroke="#FF5200" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="15" cy="15" r="22" strokeDasharray="6 6">
              <animateTransform attributeName="transform" type="rotate" from="0 15 15" to="360 15 15" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="15" cy="15" r="14" />
            <circle cx="15" cy="15" r="4" fill="#FF5200" stroke="none" />
          </g>
          
          <line x1="160" y1="110" x2="215" y2="70" stroke="#FF5200" strokeWidth="2" strokeDasharray="4 4" opacity="0.6">
            <animate attributeName="stroke-dashoffset" values="0;15" dur="1s" repeatCount="indefinite" />
          </line>
        </svg>
      )
    },
    {
      title: 'Bưu cục Giao',
      shortLabel: 'BC Giao',
      subtitle: 'Chặng 4: Nhận hàng tại đích & Phân tuyến giao',
      steps: [
        { num: 'Transit', title: 'Trung chuyển về đích', desc: 'Kiện hàng sau phân loại được vận chuyển về bưu cục giao đích.' },
        { num: 'Bước 6', title: 'Rã tải & Bàn giao', desc: 'Nhân viên Xử lý bưu cục nhận rã tải, phân chia đơn hàng theo tuyến đường cụ thể của từng NVPTTT.' }
      ],
      roles: ['nvxl'],
      svg: (
        <svg viewBox="0 0 320 180" className="vh-stage-svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <rect width="320" height="180" rx="16" fill="rgba(255, 82, 0, 0.08)" />
          <g stroke="rgba(255, 82, 0, 0.1)" strokeWidth="1" fill="none">
            <circle cx="160" cy="90" r="50" />
            <line x1="20" y1="90" x2="300" y2="90" strokeWidth="1.5" strokeDasharray="4 8" />
          </g>
          
          {/* Post office target station */}
          <g transform="translate(220, 60)" stroke="#FF5200" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 0,40 L 0,10 L 15,0 L 30,10 L 30,40 Z" fill="rgba(255, 255, 255, 0.9)" />
            <rect x="8" y="20" width="14" height="20" fill="#FF5200" stroke="none" />
            <path d="M 15,-12 C 11,-12 8,-9 8,-5 C 8,-1 15,4 15,4 C 15,4 22,-1 22,-5 C 22,-9 19,-12 15,-12 Z" fill="#FF5200" stroke="none" />
            <circle cx="15" cy="-5" r="2.5" fill="#FFFFFF" stroke="none" />
          </g>
          
          {/* Packages distribution */}
          <g transform="translate(70, 75)" stroke="#FF5200" strokeWidth="1.8" fill="none">
            <rect x="-10" y="-8" width="20" height="16" rx="2" fill="#FFFFFF" />
            <rect x="-24" y="6" width="16" height="14" rx="2" fill="#FFFFFF" />
            <rect x="14" y="6" width="16" height="14" rx="2" fill="#FFFFFF" />
            <path d="M -4,12 L -12,12" strokeWidth="1" strokeLinecap="round" />
            <path d="M 4,12 L 12,12" strokeWidth="1" strokeLinecap="round" />
          </g>
        </svg>
      )
    },
    {
      title: 'Giao hàng',
      shortLabel: 'Giao hàng',
      subtitle: 'Chặng 5: Giao hàng tận tay & Xác thực POD',
      steps: [
        { num: 'Bước 7', title: 'Giao tận nơi', desc: 'NVPTTT xếp hàng lên xe, giao tới địa chỉ người nhận đúng thời gian quy định.' },
        { num: 'Bước 8', title: 'Hoàn tất & Ký nhận', desc: 'Khách hàng kiểm hàng, ký xác nhận. NVPTTT chụp ảnh POD gửi lên hệ thống và hoàn thành đơn hàng.' }
      ],
      roles: ['nvpttt'],
      svg: (
        <svg viewBox="0 0 320 180" className="vh-stage-svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <rect width="320" height="180" rx="16" fill="rgba(255, 82, 0, 0.08)" />
          <g stroke="rgba(255, 82, 0, 0.1)" strokeWidth="1" fill="none">
            <circle cx="240" cy="90" r="45" />
            <circle cx="80" cy="90" r="35" />
          </g>
          
          {/* Shipper Moto */}
          <g transform="translate(60, 80)" stroke="#FF5200" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-8" y="-12" width="10" height="10" rx="1" fill="#FF5200" stroke="none" />
            <path d="M -4,0 L 5,0 L 10,-8 L 18,-8" />
            <circle cx="-4" cy="6" r="5" stroke="#FF5200" strokeWidth="2" fill="#FFFFFF" />
            <circle cx="14" cy="6" r="5" stroke="#FF5200" strokeWidth="2" fill="#FFFFFF" />
            <path d="M -16,4 Q -10,-2 -4,4" strokeWidth="1.5" strokeDasharray="3 3">
              <animate attributeName="stroke-dashoffset" values="0;10" dur="0.8s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Smart phone screen success */}
          <g transform="translate(230, 50)" stroke="#FF5200" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-14" y="-5" width="28" height="52" rx="4" fill="#FFFFFF" />
            <line x1="-4" y1="2" x2="4" y2="2" strokeWidth="1" />
            <circle cx="0" cy="24" r="7" fill="rgba(255, 82, 0, 0.1)" />
            <path d="M -3,24 L -1,26 L 3,21" strokeWidth="1.8" />
            <circle cx="0" cy="42" r="2.5" />
          </g>
        </svg>
      )
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip(prev => ({
      ...prev,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }));
  };

  const handleRoleClick = (e: React.MouseEvent, roleKey: 'nvxl' | 'nvpttt' | 'nvph' | 'am') => {
    if (window.innerWidth <= 968) {
      e.preventDefault();
      setActiveMobileRole(roleKey);
    }
  };

  const slides = [
    {
      image: '/KTC 1.jpeg',
      title: 'Hệ thống Xe tải Trung\u00A0chuyển',
      desc: 'Vận hành hàng ngàn xe tải liên tỉnh kết nối các Trung tâm phân loại lớn trên toàn quốc liên tục 24/7.',
      position: 'center'
    },
    {
      image: '/xetai1.jpeg',
      title: 'Kết nối mọi nẻo đường',
      desc: 'Mạng lưới giao vận rộng khắp 34 tỉnh thành, kết nối thông suốt mọi khoảng cách.',
      position: 'center'
    },
    {
      image: '/HYSC.jpeg',
      title: 'Trung tâm phân loại tự\u00A0động',
      desc: 'Hệ thống băng tải thông minh chia chọn hàng trăm ngàn đơn hàng mỗi giờ với độ chính xác tuyệt đối.',
      position: 'center'
    },
    {
      image: '/NVXL 1.JPG',
      title: 'Đội ngũ xử lý hàng hoá chuyên nghiệp',
      desc: 'Quy trình tiếp nhận, rã tải, đóng kiện chuẩn hóa kỹ lưỡng, đảm bảo an\u00A0toàn cho hàng hoá.',
      position: 'center'
    },
    {
      image: '/NVXL 2.JPG',
      title: 'Quy trình Xử lý Đạt\u00A0chuẩn',
      desc: 'Đảm bảo hàng hóa được tiếp nhận, phân loại và đóng kiện chuẩn nghiệp vụ.',
      position: 'center'
    },
    {
      image: '/Ship 1.JPG',
      title: 'Chiến binh Giao nhận NVPTTT',
      desc: 'Lực lượng NVPTTT thân thiện, tận tâm, nỗ lực giao gửi hàng hóa tới tay khách hàng.',
      position: 'center'
    },
    {
      image: '/ship 2.jpg',
      title: 'Giao hàng Tận nơi Nhanh\u00A0chóng',
      desc: 'Đáp ứng nhu cầu giao nhận hàng hóa của đối tác và khách hàng với độ bao phủ rộng khắp.',
      position: 'center 80%'
    },
    {
      image: '/KTC 2.jpeg',
      title: 'Trung tâm phân loại tự\u00A0động',
      desc: 'Đồng bộ hóa vận chuyển với tốc độ tối ưu và độ chính xác cao trên các chặng đường.',
      position: 'center'
    }
  ];

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap');

        /* Minimalist & High-End GHN Operations Hub Style Guide - Exo Font & Màu Cam #FF5200, Xanh #006FAD, Xám #3D3D3D Theme */
        .vh-page {
          background-color: #f7f7f7 !important;
          background-image: linear-gradient(rgba(247, 247, 247, 0.92), rgba(247, 247, 247, 0.92)), url('/paper-texture.png') !important;
          background-repeat: repeat !important;
          background-size: auto !important;
          color: #3D3D3D !important;
          font-family: 'Exo', 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, sans-serif !important;
          min-height: calc(100vh - 68px);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 120px;
          gap: 120px;
          overflow-x: hidden;
          position: relative;
        }

        /* Ambient drifting background grid */
        .vh-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 82, 0, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 82, 0, 0.02) 1px, transparent 1px);
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
          max-width: 1280px;
          width: 100%;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          gap: 120px;
          z-index: 1;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .vh-page.vh-mounted .vh-container {
          opacity: 1;
          transform: translateY(0);
        }

        /* Full-width Hero Banner - Immersive Premium Slider */
        .vh-hero-section {
          width: 100%;
          height: 80vh;
          min-height: 640px;
          position: relative;
          overflow: hidden;
          background-color: #111115 !important;
          border-bottom: 4px solid #FF5200;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .vh-page.vh-mounted .vh-hero-section {
          opacity: 1;
          transform: translateY(0);
        }

        /* Floating HUD Page Title Overlay - Stacked vertically */
        .vh-hero-hud-title {
          position: absolute;
          top: 108px;
          left: 6%;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          pointer-events: none;
        }
        .vh-hud-badge {
          background: #FFFFFF !important;
          border: 1px solid rgba(255, 82, 0, 0.45) !important;
          color: #FF5200 !important;
          padding: 6px 14px;
          border-radius: 30px;
          font-family: 'Exo', sans-serif !important;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .vh-hud-line {
          width: 60px;
          height: 1px;
          background: rgba(255, 255, 255, 0.25);
        }
        .vh-hud-main-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: clamp(2.2rem, 5vw, 3.8rem) !important;
          color: #FFFFFF !important;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 82, 0, 0.3) !important;
          margin: 0;
        }

        /* High-tech Slider / Carousel Styles */
        .vh-slider-container {
          position: absolute;
          inset: 0;
          background: #111115 !important;
          border: none !important;
          border-radius: 0 !important;
          overflow: hidden;
        }

        /* Slide item with left aligned glass content */
        .vh-slide-item {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 80px 6% 100px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), visibility 1.2s;
          z-index: 1;
          overflow: hidden;
        }
        .vh-slide-active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }

        /* Hardware accelerated Ken Burns background zoom */
        .vh-slide-bg {
          position: absolute;
          inset: 0;
          background-size: cover !important;
          background-repeat: no-repeat !important;
          z-index: 0;
          transition: transform 12s cubic-bezier(0.25, 1, 0.5, 1);
        }
        @keyframes kenBurns {
          from {
            transform: scale(1.02);
          }
          to {
            transform: scale(1.10);
          }
        }
        .vh-slide-active .vh-slide-bg {
          animation: kenBurns 12s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .vh-slide-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.35) 100%) !important; /* Subtle dark vignette overlay */
          z-index: 1;
          pointer-events: none;
        }

        /* Glassmorphism content card sliding up */
        .vh-slide-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 680px; /* Increased from 580px to prevent awkward wraps */
          background: rgba(17, 17, 21, 0.45) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 20px;
          padding: 40px;
          text-align: left;
          transform: translateY(30px);
          transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
        }
        .vh-slide-active .vh-slide-content {
          transform: translateY(0);
        }

        .vh-slider-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: clamp(1.5rem, 3.5vw, 2.4rem);
          color: #FFFFFF !important;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5) !important;
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 0.03em;
          line-height: 1.2;
        }
        .vh-slider-desc {
          font-size: 15px;
          font-weight: 500;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85) !important;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5) !important;
          margin: 0;
        }

        /* Slide Index/Counter */
        .vh-slider-counter {
          position: absolute;
          bottom: 40px;
          right: 6%;
          z-index: 10;
          font-family: 'Exo', sans-serif !important;
          font-weight: 800;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.35);
          display: flex;
          align-items: baseline;
          gap: 6px;
          pointer-events: none;
        }
        .vh-slider-counter-current {
          color: #FF5200;
          font-size: 30px;
          line-height: 1;
        }

        .vh-slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          color: #FFFFFF !important;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 22px;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        .vh-slider-btn:hover {
          background: #FF5200;
          color: #FFFFFF !important;
          border-color: #FF5200 !important;
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 0 20px rgba(255, 82, 0, 0.5);
        }
        .vh-slider-btn-prev {
          left: 40px;
        }
        .vh-slider-btn-next {
          right: 40px;
        }
        @media (max-width: 768px) {
          .vh-slider-btn-prev {
            left: 16px;
          }
          .vh-slider-btn-next {
            right: 16px;
          }
        }
        .vh-slider-dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        .vh-slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        .vh-slider-dot-active {
          width: 24px;
          border-radius: 4px;
          background: #FF5200;
          box-shadow: 0 0 8px rgba(255, 82, 0, 0.6);
        }

        .vh-hero-content {
          max-width: 840px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .vh-header-tag {
          font-family: 'Exo', sans-serif !important;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #FF5200;
        }

        .vh-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: clamp(2.5rem, 6vw, 4.8rem);
          line-height: 1;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #3D3D3D !important;
          margin: 0;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .vh-desc {
          font-size: 17px;
          line-height: 1.65;
          font-weight: 500;
          color: #3D3D3D !important;
          margin: 0;
        }

        .vh-divider {
          width: 80px;
          height: 3px;
          background-color: #FF5200;
          margin-top: 8px;
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
          font-family: 'Exo', sans-serif !important;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FF5200;
        }

        .vh-sec-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 800 !important;
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          color: #3D3D3D !important;
          text-transform: uppercase;
          margin: 0;
          letter-spacing: 0.02em;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        /* Technology Integration Network Overview (Orange-White High-End Style) */
        .vh-network-visual {
          width: 100%;
          background-color: #F6F6F6 !important;
          border: none !important;
          border-radius: 24px !important;
          padding: 32px 16px;
          box-shadow: 0 20px 40px rgba(255, 82, 0, 0.05) !important;
          overflow: visible;
          position: relative;
        }

        .vh-network-svg {
          width: 100%;
          height: auto;
          display: block;
          max-width: 100%;
          min-width: 0;
          align-self: stretch;
        }

        .vh-text-p {
          font-size: 16px;
          line-height: 1.7;
          color: #3D3D3D !important;
          margin: 0;
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
          border-color: #FF5200;
          transform: translateY(-4px);
        }

        .vh-stat-num {
          font-family: 'Exo', sans-serif !important;
          font-weight: 800 !important;
          font-size: clamp(2rem, 4.5vw, 3rem);
          background: linear-gradient(135deg, #FF5200, #F67700, #F8B200) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          line-height: 1;
        }

        .vh-stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #3D3D3D !important;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        /* Question Section */
        .vh-question-sec {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
          width: 100%;
        }

        .vh-question-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 800 !important;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          line-height: 1.2;
          text-transform: uppercase;
          color: #3D3D3D !important;
          text-align: center;
          letter-spacing: 0.02em;
          position: relative;
        }

        .vh-question-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 2px;
          background-color: #FF5200;
        }

        /* Premium Interactive Accordion Grid for Role Selection */
        .vh-accordion {
          display: flex;
          gap: 24px;
          width: 100%;
          height: 540px;
          margin-top: 16px;
        }

        .vh-accordion-item {
          flex: 1;
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          height: 100%;
          cursor: pointer;
          transition: flex 0.7s cubic-bezier(0.25, 1, 0.2, 1);
          background: #111115;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
        }

        .vh-accordion-item:hover {
          flex: 3;
          box-shadow: 0 24px 50px rgba(255, 82, 0, 0.12);
          border-color: rgba(255, 82, 0, 0.3);
        }

        .vh-accordion-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.2, 1);
          z-index: 0;
          opacity: 1 !important;
        }

        .vh-accordion-item:hover .vh-accordion-img {
          transform: scale(1.06);
          opacity: 1 !important;
        }

        .vh-accordion-img-zoomed {
          transform: scale(1.45) !important;
          transform-origin: center 40% !important;
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.2, 1) !important;
        }

        /* Mirror the image horizontally so the subject sits on the right,
           clear of the rotated badge pinned to the left edge. */
        .vh-accordion-img-flip {
          transform: scaleX(-1);
        }
        .vh-accordion-item:hover .vh-accordion-img-flip {
          transform: scaleX(-1) scale(1.06);
        }

        .vh-accordion-item:hover .vh-accordion-img-zoomed {
          transform: scale(1.55) !important;
          transform-origin: center 40% !important;
        }

        .vh-accordion-overlay {
          display: none !important;
        }

        /* Shared Header (Number + Title Capsule) */
        .vh-accordion-header {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          background: rgba(17, 17, 21, 0.75) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-radius: 30px;
          transition: all 0.7s cubic-bezier(0.25, 1, 0.2, 1);
          pointer-events: none;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
        }

        /* Collapsed Header State (Positioned at top-left, rotated vertically) */
        .vh-accordion-item .vh-accordion-header {
          top: 32px;
          left: 32px;
          transform: rotate(90deg);
          transform-origin: left bottom;
        }

        /* Expanded Header State (Slipped down, horizontal) */
        .vh-accordion-item:hover .vh-accordion-header {
          top: 288px;
          left: 32px;
          transform: rotate(0deg);
          transform-origin: left bottom;
        }

        .vh-accordion-num {
          font-family: 'Exo', sans-serif !important;
          font-weight: 800;
          font-size: 13px;
          color: #FF5200;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .vh-accordion-divider {
          width: 1px;
          height: 14px;
          background: rgba(255, 255, 255, 0.3);
        }

        .vh-accordion-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: 15px;
          color: #FFFFFF !important;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
          margin: 0;
          transition: font-size 0.7s cubic-bezier(0.25, 1, 0.2, 1);
        }

        .vh-accordion-item:hover .vh-accordion-title {
          font-size: 20px;
        }

        /* Shared Body Content Card */
        .vh-accordion-body {
          position: absolute;
          bottom: 32px;
          left: 32px;
          right: 32px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 16px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
          
          /* Glassmorphic card styling */
          background: rgba(17, 17, 21, 0.75) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .vh-accordion-item:hover .vh-accordion-body {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
          transition-delay: 0.15s;
        }

        .vh-accordion-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9) !important;
          max-width: 540px;
          margin: 0;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
        }

        .vh-expanded-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 48px;
          padding: 0 28px;
          border-radius: 24px;
          background: #FF5200;
          color: #FFFFFF !important;
          font-family: 'Exo', sans-serif !important;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none !important;
          align-self: flex-start;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 20px rgba(255, 82, 0, 0.3);
          border: none;
          cursor: pointer;
        }

        .vh-expanded-btn:hover {
          background: #FFFFFF;
          color: #FF5200 !important;
          box-shadow: 0 10px 24px rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }


        /* Scrollable container for mobile to keep SVG readable */
        .vh-network-scroll-wrapper {
          width: 100%;
          overflow: visible;
        }

        /* Visibility helpers */
        .desktop-only {
          display: block;
        }
        .mobile-only {
          display: none;
        }

        /* Responsive overrides */
        @media (max-width: 968px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }

          .vh-hero-section {
            height: 45vh;
            min-height: 320px;
          }
          .vh-hero-hud-title {
            top: 80px;
            left: 20px;
          }
          .vh-hud-line {
            display: none;
          }
          .vh-hud-main-title {
            font-size: 22px !important;
          }
          .vh-hud-badge {
            padding: 4px 10px;
            font-size: 9px;
          }
          .vh-slide-item {
            padding: 30px 12px 50px;
          }
          .vh-slide-content {
            padding: 16px;
            max-width: calc(100% - 24px);
            margin: 0 12px 12px;
            border-radius: 16px;
          }
          .vh-slider-title {
            font-size: 1.25rem;
            margin-bottom: 6px;
          }
          .vh-slider-desc {
            font-size: 12.5px;
          }
          .vh-slider-counter {
            display: none;
          }
          .vh-slider-dots {
            bottom: 18px;
          }
          .vh-slider-btn {
            display: none;
          }
          
          /* Stats Grid */
          .vh-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .vh-stat-card {
            padding: 20px 16px !important;
            gap: 6px !important;
          }
          .vh-stat-num {
            font-size: 26px !important;
          }
          .vh-stat-label {
            font-size: 11px !important;
          }

          /* Mobile responsive fit visual */
          .vh-network-scroll-wrapper {
            width: 100%;
            overflow: visible;
          }
          .vh-network-visual {
            width: 100% !important;
            padding: 16px 8px !important;
            border-radius: 16px !important;
            min-width: 0 !important;
          }
          .vh-network-svg {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-width: 0 !important;
            align-self: stretch !important;
          }

          .vh-page {
            padding: 0 0 80px;
            gap: 80px;
          }
          .vh-sec-title {
            font-size: clamp(1.5rem, 6vw, 2rem) !important;
          }
          .vh-title {
            font-size: clamp(1.8rem, 7vw, 2.5rem) !important;
          }
        }

        /* Mobile-only workflow timeline styles */
        .vh-mobile-timeline {
          display: flex;
          flex-direction: column;
          gap: 0px;
          padding: 8px 0;
          width: 100%;
        }

        .vh-timeline-item {
          display: flex;
          gap: 20px;
          position: relative;
        }

        .vh-timeline-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 48px;
          flex-shrink: 0;
        }

        .vh-timeline-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1.5px solid #FF5200;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 12px rgba(255, 82, 0, 0.1);
          z-index: 2;
          transition: all 0.2s ease;
        }

        .vh-timeline-role-icon {
          cursor: pointer;
          background: #FFF7F5;
        }

        .vh-timeline-role-icon:active {
          transform: scale(0.92);
          background: #FF5200;
          color: #FFF;
        }

        .vh-timeline-line {
          width: 2px;
          flex-grow: 1;
          background: rgba(255, 82, 0, 0.15);
          margin: 4px 0;
          z-index: 1;
        }

        .vh-timeline-content {
          padding-bottom: 32px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .vh-timeline-tag {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #FF5200;
          margin-bottom: 4px;
          text-transform: uppercase;
        }

        .vh-timeline-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 800 !important;
          font-size: 17px;
          color: #3D3D3D !important;
          margin: 0 0 6px;
        }

        .vh-timeline-desc {
          font-size: 13px;
          line-height: 1.5;
          color: #666666 !important;
          margin: 0 0 12px;
        }

        .vh-timeline-role-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          border: 1px solid #FF5200;
          color: #FF5200 !important;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(255, 82, 0, 0.05);
        }

        .vh-timeline-role-btn:active {
          background: #FF5200;
          color: #FFFFFF !important;
          transform: scale(0.97);
        }

        .vh-timeline-role-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .vh-timeline-transit .vh-timeline-icon {
          border-color: #006FAD;
          box-shadow: 0 4px 12px rgba(0, 111, 173, 0.1);
        }

        .vh-timeline-transit .vh-timeline-line {
          background: rgba(0, 111, 173, 0.15);
        }

        .vh-timeline-transit .vh-timeline-tag {
          color: #006FAD;
        }

        /* Mobile Slide-up Drawer/Modal Styles */
        .vh-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: flex-end;
        }

        .vh-drawer-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .vh-mobile-drawer {
          width: 100%;
          background: #FFFFFF;
          border-radius: 24px 24px 0 0;
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.15);
          transform: translateY(100%);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .vh-mobile-drawer.active {
          transform: translateY(0);
        }

        .vh-drawer-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px 16px 8px;
          position: relative;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .vh-drawer-bar {
          width: 40px;
          height: 4px;
          background: #E0E0E0;
          border-radius: 2px;
          margin-bottom: 8px;
        }

        .vh-drawer-close {
          position: absolute;
          right: 16px;
          top: 10px;
          background: #F0F0F0;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
        }

        .vh-drawer-body {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .vh-drawer-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1.5px solid rgba(255, 82, 0, 0.1);
        }

        .vh-drawer-content-area {
          padding: 24px 20px 40px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .vh-drawer-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: 20px;
          color: #FF5200 !important;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .vh-drawer-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #4A4A4A !important;
          margin: 0;
        }

        .vh-drawer-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 48px;
          border-radius: 24px;
          background: #FF5200;
          color: #FFFFFF !important;
          font-family: 'Exo', sans-serif !important;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none !important;
          margin-top: 12px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(255, 82, 0, 0.2);
          border: none;
        }

        .vh-drawer-action-btn:active {
          background: #E04800;
          transform: scale(0.98);
        }

        /* Mobile Role Card list styles */
        .vh-mobile-roles-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          margin-top: 16px;
        }

        .vh-mobile-role-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .vh-mobile-role-img-container {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
        }

        .vh-mobile-role-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .vh-mobile-role-num-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(17, 17, 21, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FF5200;
          font-family: 'Exo', sans-serif !important;
          font-weight: 800;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 12px;
          letter-spacing: 0.1em;
        }

        .vh-mobile-role-info {
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 8px;
        }

        .vh-mobile-role-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: 18px;
          color: #3D3D3D !important;
          margin: 0;
          text-transform: uppercase;
        }

        .vh-mobile-role-desc {
          font-size: 13px;
          line-height: 1.55;
          color: #666666 !important;
          margin: 0;
        }

        .vh-mobile-role-btn-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 40px;
          padding: 0 20px;
          border-radius: 20px;
          background: #FF5200;
          color: #FFFFFF !important;
          font-family: 'Exo', sans-serif !important;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-decoration: none !important;
          margin-top: 12px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(255, 82, 0, 0.15);
        }

        .vh-mobile-role-btn-cta:active {
          background: #E04800;
          transform: scale(0.97);
        }

        /* Tooltip styles */
        .vh-diagram-tooltip {
          pointer-events: none;
          z-index: 1000;
          background: rgba(20, 20, 25, 0.94) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 82, 0, 0.5) !important;
          border-radius: 16px;
          padding: 0;
          width: 360px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 82, 0, 0.25);
          animation: tooltipFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          color: #FFFFFF !important;
          overflow: hidden;
        }

        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .vh-tooltip-content {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          text-align: left;
        }

        .vh-tooltip-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-bottom: 1.5px solid rgba(255, 82, 0, 0.3);
          flex-shrink: 0;
        }

        .vh-tooltip-text {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px;
        }

        .vh-tooltip-title {
          font-family: 'Exo', sans-serif !important;
          font-weight: 900 !important;
          font-size: 16px;
          color: #FF5200 !important;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .vh-tooltip-desc {
          font-family: 'Exo', sans-serif !important;
          font-size: 13.5px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9) !important;
          margin: 0;
        }
      `}</style>

      <div className={`vh-page${mounted ? ' vh-mounted' : ''}`}>
        <div className="vh-bg-grid" />
        
        {/* Section 1: Full-width Immersive Hero Slider */}
        <section className="vh-hero-section">
          {/* Floating HUD Badge / Page Title */}
          <div className="vh-hero-hud-title">
            <h1 className="vh-hud-main-title">Khối thị trường</h1>
            <span className="vh-hud-badge">Vận hành</span>
          </div>

          {/* Active High-tech Hero Slider */}
          <div className="vh-slider-container">
            {/* Prev Button */}
            <button 
              className="vh-slider-btn vh-slider-btn-prev" 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              aria-label="Previous slide"
            >
              ‹
            </button>

            {/* Slides */}
            {slides.map((slide, idx) => (
              <div 
                key={idx} 
                className={`vh-slide-item ${idx === currentSlide ? 'vh-slide-active' : ''}`}
              >
                <div 
                  className="vh-slide-bg"
                  style={{ 
                    backgroundImage: `url('${slide.image}')`,
                    backgroundPosition: slide.position || 'center'
                  }}
                />
                <div className="vh-slide-overlay" />
                <div className="vh-slide-content">
                  <h3 className="vh-slider-title">{slide.title}</h3>
                  <p className="vh-slider-desc">{slide.desc}</p>
                </div>
              </div>
            ))}

            {/* Next Button */}
            <button 
              className="vh-slider-btn vh-slider-btn-next" 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              aria-label="Next slide"
            >
              ›
            </button>

            {/* Slide Index / Counter */}
            <div className="vh-slider-counter">
              <span className="vh-slider-counter-current">{(currentSlide + 1).toString().padStart(2, '0')}</span>
              <span>/</span>
              <span>{slides.length.toString().padStart(2, '0')}</span>
            </div>

            {/* Navigation Dots */}
            <div className="vh-slider-dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`vh-slider-dot ${idx === currentSlide ? 'vh-slider-dot-active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="vh-container">
            {/* Section 2: Quy trình vận hành & Sơ đồ */}
          <section className="vh-sec">
            <div className="vh-sec-title-area">
              <h2 className="vh-sec-title">Quy trình vận hành</h2>
              <div className="vh-divider" />
            </div>
            <div style={{ width: '100%' }}>
              <div className="vh-network-scroll-wrapper">
                <div 
                  className="vh-network-visual" 
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', position: 'relative' }}
                  onMouseMove={handleMouseMove}
                >
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontFamily: 'Exo', fontWeight: 800, fontSize: '20px', color: '#FF5200', textTransform: 'uppercase', margin: 0 }}>Tích hợp công nghệ mạnh mẽ</h3>
                    <p style={{ fontFamily: 'Exo', fontWeight: 600, fontSize: '13px', color: '#3D3D3D', opacity: 0.85, margin: '4px 0 0' }}>Tối ưu hóa quá trình giao nhận, nâng cao hiệu quả kinh doanh</p>
                  </div>
                  <svg className="vh-network-svg" viewBox="0 100 1000 260" style={{ overflow: 'visible' }}>
                    <defs>
                      {/* Glowing Core Filter */}
                      <filter id="core-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>

                      {/* Core Orange-Yellow Gradient for TTTC and Headers */}
                      <linearGradient id="warm-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF5200" />
                        <stop offset="50%" stopColor="#F67700" />
                        <stop offset="100%" stopColor="#F8B200" />
                      </linearGradient>

                      {/* Card Gradient Fill */}
                      <linearGradient id="glass-card-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.85)" />
                      </linearGradient>
                    </defs>

                    {/* --- Circuit Board Background Tracers (Orange Tracers adjusted to viewBox) --- */}
                    <g stroke="rgba(255, 82, 0, 0.08)" strokeWidth="1" fill="none">
                      <path d="M 50,120 L 150,120 L 170,135" />
                      <path d="M 120,350 L 220,350 L 240,335" />
                      <path d="M 850,110 L 930,110 L 950,125" />
                      <path d="M 400,120 L 500,105 L 600,120" />
                      <circle cx="50" cy="120" r="2" fill="rgba(255, 82, 0, 0.15)" />
                      <circle cx="170" cy="135" r="2" fill="rgba(255, 82, 0, 0.15)" />
                      <circle cx="950" cy="125" r="2" fill="rgba(255, 82, 0, 0.15)" />
                    </g>

                    {/* Flowing background tracer pulses */}
                    <path d="M 50,120 L 150,120 L 170,135" stroke="#FF5200" strokeWidth="1.2" strokeDasharray="10 50" fill="none" opacity="0.4">
                      <animate attributeName="stroke-dashoffset" values="60;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path d="M 850,110 L 930,110 L 950,125" stroke="#FF5200" strokeWidth="1.2" strokeDasharray="10 50" fill="none" opacity="0.4">
                      <animate attributeName="stroke-dashoffset" values="60;0" dur="2s" repeatCount="indefinite" />
                    </path>

                    {/* --- Node Connections & Flowing Pulses (Premium dual trace) --- */}
                    <path d="M 15,235 L 985,235" stroke="rgba(255, 82, 0, 0.12)" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 15,235 L 985,235" stroke="url(#warm-gradient)" strokeWidth="1.2" strokeDasharray="8 12" opacity="0.6" fill="none" strokeLinecap="round" />

                    {/* Fast-flowing speed line streams */}
                    <path d="M 15,235 L 985,235" stroke="#FF5200" strokeWidth="1.8" strokeDasharray="40 180" fill="none" opacity="0.8">
                      <animate attributeName="stroke-dashoffset" values="440;0" dur="1.5s" repeatCount="indefinite" />
                    </path>
                    <path d="M 15,235 L 985,235" stroke="#F8B200" strokeWidth="1.2" strokeDasharray="30 150" fill="none" opacity="0.6">
                      <animate attributeName="stroke-dashoffset" values="0;360" dur="1.2s" repeatCount="indefinite" />
                    </path>

                    {/* Moving Data Particles on LTL Paths (Orange to Yellow transition) */}
                    <circle r="4" fill="#F67700">
                      <animateMotion dur="2.2s" repeatCount="indefinite" path="M 15,235 L 985,235" />
                    </circle>
                    <circle r="3" fill="#F8B200" opacity="0.8">
                      <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite" path="M 15,235 L 985,235" />
                    </circle>

                    {/* --- Tech Sockets / Docking Pulse Nodes --- */}
                    {/* Bưu cục Lấy Entry */}
                    <circle cx="220" cy="235" r="4" fill="#FF5200" />
                    <circle cx="220" cy="235" r="4" fill="none" stroke="#FF5200" strokeWidth="1">
                      <animate attributeName="r" values="4;12" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Bưu cục Lấy Exit */}
                    <circle cx="360" cy="235" r="4" fill="#FF5200" />
                    <circle cx="360" cy="235" r="4" fill="none" stroke="#FF5200" strokeWidth="1">
                      <animate attributeName="r" values="4;12" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Bưu cục Giao Entry */}
                    <circle cx="640" cy="235" r="4" fill="#FF5200" />
                    <circle cx="640" cy="235" r="4" fill="none" stroke="#FF5200" strokeWidth="1">
                      <animate attributeName="r" values="4;12" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Bưu cục Giao Exit */}
                    <circle cx="780" cy="235" r="4" fill="#FF5200" />
                    <circle cx="780" cy="235" r="4" fill="none" stroke="#FF5200" strokeWidth="1">
                      <animate attributeName="r" values="4;12" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                    {/* --- 1. Left Card: Đối tác / Người gửi (Orange and White) --- */}
                    <g transform="translate(0, 0)">
                      {/* Glass Card Frame */}
                      <rect x="15" y="140" width="110" height="190" rx="16" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" />
                      
                      {/* Single large partner circle icon */}
                      <circle cx="70" cy="205" r="24" fill="none" stroke="#FF5200" strokeWidth="1.2" />
                      
                      {/* Handshake/Partner Solid Orange Vector Icon */}
                      <g transform="translate(70, 205)" stroke="#FF5200" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="0" cy="-5" r="5" />
                        <path d="M -12,11 C -12,5 -7,3 0,3 C 7,3 12,5 12,11" />
                      </g>

                      {/* Labels */}
                      <text x="70" y="282" fontSize="12" fontWeight="800" fill="#3D3D3D" textAnchor="middle" fontFamily="Exo" letterSpacing="0.03em">ĐỐI TÁC</text>
                      <text x="70" y="296" fontSize="12" fontWeight="800" fill="#3D3D3D" textAnchor="middle" fontFamily="Exo" letterSpacing="0.03em">/ NGƯỜI GỬI</text>
                    </g>

                    {/* --- 2. Bưu cục Lấy Card (Orange and White, width=140 - Gap Shrunken) --- */}
                    <g transform="translate(220, 140)">
                      {/* Card Frame */}
                      <rect x="0" y="0" width="140" height="190" rx="16" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" />
                      
                      {/* Card Header with Top-Only Rounded Corners using Sunset Gradient */}
                      <path d="M 0,16 A 16,16 0 0,1 16,0 L 124,0 A 16,16 0 0,1 140,16 L 140,36 L 0,36 Z" fill="url(#warm-gradient)" />
                      <text x="70" y="18" dominantBaseline="central" fontSize="13" fontWeight="800" textAnchor="middle" fill="#FFFFFF" fontFamily="Exo" letterSpacing="0.05em">Bưu cục Lấy</text>

                      {/* Tiếp nhận capsule */}
                      <g transform="translate(10, 50)">
                         <rect x="0" y="0" width="120" height="36" rx="6" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" />
                         <text x="60" y="18" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#FF5200" textAnchor="middle" fontFamily="Exo">Tiếp nhận</text>
                      </g>

                      {/* Quản lý Khu vực (AM) capsule */}
                      <g
                        transform="translate(10, 98)"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setTooltip(prev => ({ ...prev, visible: true, role: 'am' }))}
                        onMouseLeave={() => setTooltip(prev => ({ ...prev, visible: false, role: null }))}
                        onClick={(e) => handleRoleClick(e, 'am')}
                      >
                        <rect x="0" y="0" width="120" height="30" rx="6" fill="#FF5200" stroke="#FF5200" />
                        <text x="60" y="15" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Exo">Quản lý (AM)</text>
                      </g>

                      {/* Nhân viên xử lý capsule */}
                      <g
                        transform="translate(10, 140)"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setTooltip(prev => ({ ...prev, visible: true, role: 'nvxl' }))}
                        onMouseLeave={() => setTooltip(prev => ({ ...prev, visible: false, role: null }))}
                        onClick={(e) => handleRoleClick(e, 'nvxl')}
                      >
                        <rect x="0" y="0" width="120" height="30" rx="6" fill="#FF5200" stroke="#FF5200" />
                        <text x="60" y="15" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Exo">Nhân viên xử lý</text>
                      </g>
                    </g>

                    {/* --- 3. Trung tâm phân loại Core (Sunset Gradient Theme) --- */}
                    <g transform="translate(500, 235)">
                      {/* Glowing background */}
                      <circle cx="0" cy="0" r="80" fill="rgba(255, 82, 0, 0.04)" filter="url(#core-glow)" />
                      
                      {/* Concentric rotating dash ring 1 */}
                      <circle cx="0" cy="0" r="100" fill="none" stroke="rgba(255, 82, 0, 0.08)" strokeWidth="1" strokeDasharray="3 6" />
                      
                      {/* Concentric rotating dash ring 2 (faster rotation) */}
                      <circle cx="0" cy="0" r="88" fill="none" stroke="#FF5200" strokeWidth="2.2" strokeDasharray="20 40 10 20 40 10" opacity="0.8">
                        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Concentric rotating dash ring 3 (opposite direction - faster rotation) */}
                      <circle cx="0" cy="0" r="76" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeDasharray="8 8">
                        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="5s" repeatCount="indefinite" />
                      </circle>

                      {/* High-tech pulsing waves radiating from the core */}
                      <circle cx="0" cy="0" r="66" fill="none" stroke="#FF5200" strokeWidth="1.5">
                        <animate attributeName="r" values="66;95" dur="1.8s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="66" fill="none" stroke="#F8B200" strokeWidth="1">
                        <animate attributeName="r" values="66;120" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
                      </circle>

                      {/* Solid inner core using Orange-Yellow Gradient */}
                      <circle cx="0" cy="0" r="66" fill="url(#warm-gradient)" stroke="#FFFFFF" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="66" fill="none" stroke="#FF5200" strokeWidth="2.5" className="vh-node-pulse" />

                      {/* Core Text Label (TRUNG TÂM TRUNG CHUYỂN at the top) */}
                      <text x="0" y="-22" fontSize="12" fontWeight="800" textAnchor="middle" fill="#FFFFFF" fontFamily="Exo" letterSpacing="0.1em" opacity="0.9">TRUNG TÂM</text>
                      <text x="0" y="-5" fontSize="14" fontWeight="900" textAnchor="middle" fill="#FFFFFF" fontFamily="Exo" fontStyle="italic" letterSpacing="0.05em">TRUNG CHUYỂN</text>

                      {/* Nhân viên Phân hàng section */}
                      <g
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setTooltip(prev => ({ ...prev, visible: true, role: 'nvph' }))}
                        onMouseLeave={() => setTooltip(prev => ({ ...prev, visible: false, role: null }))}
                        onClick={(e) => handleRoleClick(e, 'nvph')}
                      >
                        {/* Nhân viên Phân hàng Icon (shifted to center/bottom) */}
                        <g transform="translate(0, 14)" stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
                          {/* Head / Helmet */}
                          <circle cx="0" cy="-5" r="4.5" />
                          <path d="M -4.5,-5 C -4.5,-8 4.5,-8 4.5,-5" fill="#F8B200" stroke="none" />
                          <path d="M -6,-5 L 6,-5" strokeWidth="1" />
                          {/* Shoulders */}
                          <path d="M -9,6 C -9,2 -6,0.5 0,0.5 C 6,0.5 9,2 9,6" />
                          {/* Package being sorted */}
                          <rect x="-5" y="6" width="10" height="8" rx="1" stroke="#FFFFFF" strokeWidth="1" fill="#FF5200" />
                          <path d="M -2.5,10 L 2.5,10" stroke="#FFFFFF" strokeWidth="0.8" />
                        </g>

                        {/* Caption Label for the worker */}
                        <text x="0" y="42" fontSize="10" fontWeight="700" textAnchor="middle" fill="#FFFFFF" fontFamily="Exo" letterSpacing="0.05em">Nhân viên Phân hàng</text>
                      </g>
                    </g>

                    {/* --- 4. Phát hàng Card (Bưu cục Giao - Orange and White, width=140 - Gap Shrunken) --- */}
                    <g transform="translate(640, 140)">
                      {/* Card Frame */}
                      <rect x="0" y="0" width="140" height="190" rx="16" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" />
                      
                      {/* Card Header with Top-Only Rounded Corners using Sunset Gradient */}
                      <path d="M 0,16 A 16,16 0 0,1 16,0 L 124,0 A 16,16 0 0,1 140,16 L 140,36 L 0,36 Z" fill="url(#warm-gradient)" />
                      <text x="70" y="18" dominantBaseline="central" fontSize="13" fontWeight="800" textAnchor="middle" fill="#FFFFFF" fontFamily="Exo" letterSpacing="0.05em">Bưu cục Giao</text>

                      {/* Giao hàng capsule */}
                      <g transform="translate(10, 50)">
                        <rect x="0" y="0" width="120" height="36" rx="6" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" />
                        <text x="60" y="18" dominantBaseline="central" fontSize="12" fontWeight="800" fill="#FF5200" textAnchor="middle" fontFamily="Exo">Giao hàng</text>
                      </g>

                      {/* Quản lý Khu vực capsule */}
                      <g
                        transform="translate(10, 98)"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setTooltip(prev => ({ ...prev, visible: true, role: 'am' }))}
                        onMouseLeave={() => setTooltip(prev => ({ ...prev, visible: false, role: null }))}
                        onClick={(e) => handleRoleClick(e, 'am')}
                      >
                        <rect x="0" y="0" width="120" height="30" rx="6" fill="#FF5200" stroke="#FF5200" />
                        <text x="60" y="15" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Exo">Quản lý (AM)</text>
                      </g>

                      {/* Nhân viên xử lý capsule */}
                      <g 
                        transform="translate(10, 140)"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setTooltip(prev => ({ ...prev, visible: true, role: 'nvxl' }))}
                        onMouseLeave={() => setTooltip(prev => ({ ...prev, visible: false, role: null }))}
                        onClick={(e) => handleRoleClick(e, 'nvxl')}
                      >
                        <rect x="0" y="0" width="120" height="30" rx="6" fill="#FF5200" stroke="#FF5200" />
                        <text x="60" y="15" dominantBaseline="central" fontSize="11" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Exo">Nhân viên xử lý</text>
                      </g>
                    </g>

                    {/* --- 5. Right Card: Điểm nhận hàng (Orange and White) --- */}
                    <g transform="translate(875, 0)">
                      {/* Card Frame */}
                      <rect x="15" y="140" width="110" height="190" rx="16" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" />

                      {/* Single circle icon for Destination */}
                      <circle cx="70" cy="205" r="24" fill="none" stroke="#FF5200" strokeWidth="1.2" />
                      
                      {/* Building Solid Orange Vector Icon */}
                      <g transform="translate(70, 205)" stroke="#FF5200" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M -12,1 L 0,-9 L 12,1" />
                        <path d="M -9,1 L -9,10 L 9,10 L 9,1" />
                        <rect x="-3" y="5" width="6" height="5" fill="#FF5200" stroke="none" />
                      </g>

                      {/* Labels */}
                      <text x="70" y="282" fontSize="12" fontWeight="800" fill="#3D3D3D" textAnchor="middle" fontFamily="Exo" letterSpacing="0.05em">KHÁCH HÀNG</text>
                      <text x="70" y="296" fontSize="12" fontWeight="800" fill="#3D3D3D" textAnchor="middle" fontFamily="Exo" letterSpacing="0.05em">/ NGƯỜI NHẬN</text>
                    </g>

                    {/* --- 6. Floating Motorbike Widget 1 (between Partner and Bưu cục Lấy - Orange) --- */}
                    <g 
                      transform="translate(160, 210)"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setTooltip(prev => ({ ...prev, visible: true, role: 'nvpttt' }))}
                      onMouseLeave={() => setTooltip(prev => ({ ...prev, visible: false, role: null }))}
                      onClick={(e) => handleRoleClick(e, 'nvpttt')}
                    >
                      {/* Speed trails behind the widget circle */}
                      <path d="M -16,12 L -6,12 M -12,6 L -4,6 M -10,18 L -4,18" stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
                      <circle cx="12" cy="12" r="14" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" style={{ filter: 'drop-shadow(0px 2px 6px rgba(255, 82, 0, 0.15))' }} />
                      {/* Motorbike vector icon */}
                      <g transform="translate(12, 12)" stroke="#FF5200" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        {/* Rear cargo/delivery box */}
                        <rect x="-9" y="-3.5" width="5.5" height="5.5" rx="1.2" fill="#FF5200" stroke="none" />
                        <line x1="-8" y1="-1" x2="-4.5" y2="-1" stroke="#FFFFFF" strokeWidth="0.8" />
                        {/* Main Chassis / Body (Futuristic scooter design) */}
                        <path d="M -6.5,2 L -3.5,2 Q 0,2 1.5,-1.5 L 4.5,-2 L 5.5,1 L 3.5,5" stroke="#FF5200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        {/* Windshield / Front fairing */}
                        <path d="M 2,-1.5 L 4.5,-5.5 L 2.5,-5.5" stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        {/* Seat line */}
                        <path d="M -3.5,0.5 L 0,0.5" stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round" />
                        {/* Front Wheel */}
                        <circle cx="5" cy="5.2" r="2.8" stroke="#FF5200" strokeWidth="1.5" fill="#FFFFFF" />
                        <circle cx="5" cy="5.2" r="0.8" fill="#FF5200" stroke="none" />
                        {/* Rear Wheel */}
                        <circle cx="-5" cy="5.2" r="2.8" stroke="#FF5200" strokeWidth="1.5" fill="#FFFFFF" />
                        <circle cx="-5" cy="5.2" r="0.8" fill="#FF5200" stroke="none" />
                      </g>
                      
                      {/* Pointer text "NVPTTT" (1 Line, Width = 56, x = -16, rx = 8) */}
                      <rect x="-16" y="32" width="56" height="16" rx="8" fill="#FF5200" />
                      <text x="12" y="40" dominantBaseline="central" fontSize="8.5" fontWeight="800" fill="#FFFFFF" textAnchor="middle" fontFamily="Exo">NVPTTT</text>
                    </g>

                    {/* --- 7. Floating Truck Widget 2 (between Bưu cục Lấy and TTTC - Orange Accent) --- */}
                    <g transform="translate(382, 210)">
                      {/* Speed trails behind the widget circle */}
                      <path d="M -16,12 L -6,12 M -12,6 L -4,6 M -10,18 L -4,18" stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
                      <circle cx="12" cy="12" r="14" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" style={{ filter: 'drop-shadow(0px 2px 6px rgba(255, 82, 0, 0.15))' }} />
                      {/* Truck vector icon in orange */}
                      <g transform="translate(12, 12)" stroke="#FF5200" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M 2,-3 L 5,-3 L 7,-0.5 L 7,3 L 2,3 Z" />
                        <rect x="-7" y="-4" width="8.5" height="7" rx="0.5" fill="#FF5200" stroke="none" />
                        <circle cx="-4.5" cy="4" r="1.5" fill="#FF5200" stroke="none" />
                        <circle cx="4.5" cy="4" r="1.5" fill="#FF5200" stroke="none" />
                      </g>
                    </g>

                    {/* --- 8. Floating Truck Widget 3 (between TTTC and Bưu cục Giao - Orange Accent) --- */}
                    <g transform="translate(594, 210)">
                      {/* Speed trails behind the widget circle */}
                      <path d="M -16,12 L -6,12 M -12,6 L -4,6 M -10,18 L -4,18" stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
                      <circle cx="12" cy="12" r="14" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" style={{ filter: 'drop-shadow(0px 2px 6px rgba(255, 82, 0, 0.15))' }} />
                      {/* Truck vector icon in orange */}
                      <g transform="translate(12, 12)" stroke="#FF5200" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M 2,-3 L 5,-3 L 7,-0.5 L 7,3 L 2,3 Z" />
                        <rect x="-7" y="-4" width="8.5" height="7" rx="0.5" fill="#FF5200" stroke="none" />
                        <circle cx="-4.5" cy="4" r="1.5" fill="#FF5200" stroke="none" />
                        <circle cx="4.5" cy="4" r="1.5" fill="#FF5200" stroke="none" />
                      </g>
                    </g>

                    {/* --- 9. Floating Motorbike Widget 4 (between Bưu cục Giao and Recipient - Orange) --- */}
                    <g 
                      transform="translate(823, 210)"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setTooltip(prev => ({ ...prev, visible: true, role: 'nvpttt' }))}
                      onMouseLeave={() => setTooltip(prev => ({ ...prev, visible: false, role: null }))}
                      onClick={(e) => handleRoleClick(e, 'nvpttt')}
                    >
                      {/* Speed trails behind the widget circle */}
                      <path d="M -16,12 L -6,12 M -12,6 L -4,6 M -10,18 L -4,18" stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
                      <circle cx="12" cy="12" r="14" fill="#FFFFFF" stroke="#FF5200" strokeWidth="1.2" style={{ filter: 'drop-shadow(0px 2px 6px rgba(255, 82, 0, 0.15))' }} />
                      {/* Motorbike vector icon */}
                      <g transform="translate(12, 12)" stroke="#FF5200" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        {/* Rear cargo/delivery box */}
                        <rect x="-9" y="-3.5" width="5.5" height="5.5" rx="1.2" fill="#FF5200" stroke="none" />
                        <line x1="-8" y1="-1" x2="-4.5" y2="-1" stroke="#FFFFFF" strokeWidth="0.8" />
                        {/* Main Chassis / Body (Futuristic scooter design) */}
                        <path d="M -6.5,2 L -3.5,2 Q 0,2 1.5,-1.5 L 4.5,-2 L 5.5,1 L 3.5,5" stroke="#FF5200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        {/* Windshield / Front fairing */}
                        <path d="M 2,-1.5 L 4.5,-5.5 L 2.5,-5.5" stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        {/* Seat line */}
                        <path d="M -3.5,0.5 L 0,0.5" stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round" />
                        {/* Front Wheel */}
                        <circle cx="5" cy="5.2" r="2.8" stroke="#FF5200" strokeWidth="1.5" fill="#FFFFFF" />
                        <circle cx="5" cy="5.2" r="0.8" fill="#FF5200" stroke="none" />
                        {/* Rear Wheel */}
                        <circle cx="-5" cy="5.2" r="2.8" stroke="#FF5200" strokeWidth="1.5" fill="#FFFFFF" />
                        <circle cx="-5" cy="5.2" r="0.8" fill="#FF5200" stroke="none" />
                      </g>
                      
                      {/* Pointer text "NVPTTT" (1 Line, Width = 56, x = -16, rx = 8) */}
                      <rect x="-16" y="32" width="56" height="16" rx="8" fill="#FF5200" />
                      <text x="12" y="40" dominantBaseline="central" fontSize="8.5" fontWeight="800" fill="#FFFFFF" textAnchor="middle" fontFamily="Exo">NVPTTT</text>
                    </g>
                  </svg>

                  {/* High-end floating details tooltip */}
                  {tooltip.visible && tooltip.role && (
                    <div 
                      className="vh-diagram-tooltip"
                      style={{
                        position: 'absolute',
                        left: `${tooltip.x > 620 ? tooltip.x - 380 : tooltip.x + 20}px`,
                        top: `${tooltip.y + 20}px`,
                        pointerEvents: 'none',
                        zIndex: 100,
                      }}
                    >
                      <div className="vh-tooltip-content">
                        <img 
                          src={roleData[tooltip.role].image} 
                          alt={roleData[tooltip.role].name} 
                          className="vh-tooltip-img" 
                        />
                        <div className="vh-tooltip-text">
                          <h4 className="vh-tooltip-title">{roleData[tooltip.role].name}</h4>
                          <p className="vh-tooltip-desc">{roleData[tooltip.role].function}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Operations Scale & Numbers */}
          <section className="vh-sec">
            <div className="vh-sec-title-area">
              <h2 className="vh-sec-title">Quy mô & Những con số</h2>
            </div>
            
            <div className="vh-stats-grid">
              <StatItem value={5000000} suffix="+" label="Đơn hàng xử lý mỗi ngày" />
              <StatItem value={20000} suffix="+" label="Nhân viên" />
              <StatItem value={1100} suffix="+" label="Xe tải vận hành liên tục" />
              <StatItem value={34} suffix="/34" label="Phủ sóng tỉnh thành" />
            </div>
          </section>

          {/* Section 4: Interactive Role Selection */}
          <section className="vh-question-sec">
            <h2 className="vh-question-title">Bạn là ai trong Khối Thị trường GHN?</h2>
            
            <div className="desktop-only" style={{ width: '100%' }}>
              <div className="vh-accordion">
                {/* Card 1: Area Manager */}
                <div className="vh-accordion-item">
                  <div
                    className="vh-accordion-img vh-accordion-img-flip"
                    style={{ backgroundImage: "url('/AmDEMO2.jpeg')", backgroundPosition: '28% center' }}
                  />
                  <div className="vh-accordion-overlay" />

                  <div className="vh-accordion-header">
                    <span className="vh-accordion-num">R—01</span>
                    <div className="vh-accordion-divider" />
                    <h3 className="vh-accordion-title">Area Manager</h3>
                  </div>

                  <div className="vh-accordion-body">
                    <p className="vh-accordion-desc">
                      Người quản lý khu vực điều phối toàn bộ hoạt động bưu cục. Đảm nhận quản trị vận hành, tuyển dụng & phát triển đội ngũ, kiểm soát ngân sách và giám sát chất lượng dịch vụ.
                    </p>
                    <Link href="/am" className="vh-expanded-btn">
                      <span>Xem quy trình</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Card 2: Nhân viên Xử lý */}
                <div className="vh-accordion-item">
                  <div
                    className="vh-accordion-img"
                    style={{ backgroundImage: "url('/NVXL 1.JPG')" }}
                  />
                  <div className="vh-accordion-overlay" />

                  <div className="vh-accordion-header">
                    <span className="vh-accordion-num">R—02</span>
                    <div className="vh-accordion-divider" />
                    <h3 className="vh-accordion-title">Nhân viên Xử lý</h3>
                  </div>

                  <div className="vh-accordion-body">
                    <p className="vh-accordion-desc">
                      Chuyên gia quy trình phân loại và xử lý tại bưu cục. Đảm nhận nghiệp vụ tiếp nhận hàng, rã kiện, gán đơn giao, bắn kiểm và bàn giao hàng hóa chính xác.
                    </p>
                    <Link href="/nvxl" className="vh-expanded-btn">
                      <span>Xem quy trình</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Card 3: Nhân viên Phát triển Thị trường */}
                <div className="vh-accordion-item">
                  <div
                    className="vh-accordion-img"
                    style={{ backgroundImage: "url('/Ship 1.JPG')", backgroundPosition: '80% center' }}
                  />
                  <div className="vh-accordion-overlay" />

                  <div className="vh-accordion-header">
                    <span className="vh-accordion-num">R—03</span>
                    <div className="vh-accordion-divider" />
                    <h3 className="vh-accordion-title">Nhân viên Phát triển Thị trường</h3>
                  </div>

                  <div className="vh-accordion-body">
                    <p className="vh-accordion-desc">
                      Lực lượng giao nhận tuyến đầu trực tiếp tương tác khách hàng. Đảm nhận quy trình giao hàng, lấy hàng, nộp COD và lưu trữ chứng từ số POD chuẩn chỉnh.
                    </p>
                    <Link href="/nvpttt" className="vh-expanded-btn">
                      <span>Xem quy trình</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Card 4: Nhân viên Phân hàng */}
                <div className="vh-accordion-item">
                  <div
                    className="vh-accordion-img vh-accordion-img-zoomed"
                    style={{ backgroundImage: "url('/NVPH.jpg')" }}
                  />
                  <div className="vh-accordion-overlay" />

                  <div className="vh-accordion-header">
                    <span className="vh-accordion-num">R—04</span>
                    <div className="vh-accordion-divider" />
                    <h3 className="vh-accordion-title">Nhân viên Phân hàng</h3>
                  </div>

                  <div className="vh-accordion-body">
                    <p className="vh-accordion-desc">
                      Chuyên gia chia chọn tại các Trung tâm trung chuyển lớn. Vận hành hệ thống băng tải tự động hóa, thực hiện rã tải, cấp hàng Feeder và đóng kiện xuất hàng liên tỉnh.
                    </p>
                    <Link href="/nvph" className="vh-expanded-btn">
                      <span>Xem quy trình</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-only" style={{ width: '100%' }}>
              <div className="vh-mobile-roles-list">
                {/* Mobile Card 1: Area Manager */}
                <div className="vh-mobile-role-card">
                  <div className="vh-mobile-role-img-container">
                    <img
                      src="/AmDEMO2.jpeg"
                      alt="Area Manager"
                      className="vh-mobile-role-img"
                      style={{ objectPosition: 'center 35%' }}
                    />
                    <span className="vh-mobile-role-num-badge">R—01</span>
                  </div>
                  <div className="vh-mobile-role-info">
                    <h3 className="vh-mobile-role-title">Area Manager</h3>
                    <p className="vh-mobile-role-desc">
                      Người quản lý khu vực điều phối toàn bộ hoạt động bưu cục. Đảm nhận quản trị vận hành, tuyển dụng & phát triển đội ngũ, kiểm soát ngân sách và giám sát chất lượng dịch vụ.
                    </p>
                    <Link href="/am" className="vh-mobile-role-btn-cta">
                      <span>Xem quy trình</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Mobile Card 2: Nhân viên Xử lý */}
                <div className="vh-mobile-role-card">
                  <div className="vh-mobile-role-img-container">
                    <img src="/NVXL 1.JPG" alt="Nhân viên Xử lý" className="vh-mobile-role-img" />
                    <span className="vh-mobile-role-num-badge">R—02</span>
                  </div>
                  <div className="vh-mobile-role-info">
                    <h3 className="vh-mobile-role-title">Nhân viên Xử lý</h3>
                    <p className="vh-mobile-role-desc">
                      Chuyên gia quy trình phân loại và xử lý tại bưu cục. Đảm nhận nghiệp vụ tiếp nhận hàng, rã kiện, gán đơn giao, bắn kiểm và bàn giao hàng hóa chính xác.
                    </p>
                    <Link href="/nvxl" className="vh-mobile-role-btn-cta">
                      <span>Xem quy trình</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Mobile Card 3: Nhân viên Phát triển Thị trường */}
                <div className="vh-mobile-role-card">
                  <div className="vh-mobile-role-img-container">
                    <img
                      src="/Ship 1.JPG"
                      alt="Nhân viên Phát triển Thị trường"
                      className="vh-mobile-role-img"
                      style={{ objectPosition: 'center 15%' }}
                    />
                    <span className="vh-mobile-role-num-badge">R—03</span>
                  </div>
                  <div className="vh-mobile-role-info">
                    <h3 className="vh-mobile-role-title">Nhân viên Phát triển Thị trường</h3>
                    <p className="vh-mobile-role-desc">
                      Lực lượng giao nhận tuyến đầu trực tiếp tương tác khách hàng. Đảm nhận quy trình giao hàng, lấy hàng, nộp COD và lưu trữ chứng từ số POD chuẩn chỉnh.
                    </p>
                    <Link href="/nvpttt" className="vh-mobile-role-btn-cta">
                      <span>Xem quy trình</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Mobile Card 4: Nhân viên Phân hàng */}
                <div className="vh-mobile-role-card">
                  <div className="vh-mobile-role-img-container">
                    <img src="/NVPH.jpg" alt="Nhân viên Phân hàng" className="vh-mobile-role-img" />
                    <span className="vh-mobile-role-num-badge">R—04</span>
                  </div>
                  <div className="vh-mobile-role-info">
                    <h3 className="vh-mobile-role-title">Nhân viên Phân hàng</h3>
                    <p className="vh-mobile-role-desc">
                      Chuyên gia chia chọn tại các Trung tâm trung chuyển lớn. Vận hành hệ thống băng tải tự động hóa, thực hiện rã tải, cấp hàng Feeder và đóng kiện xuất hàng liên tỉnh.
                    </p>
                    <Link href="/nvph" className="vh-mobile-role-btn-cta">
                      <span>Xem quy trình</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Mobile bottom drawer details for roles */}
        {activeMobileRole && (
          <div className="vh-drawer-overlay active" onClick={() => setActiveMobileRole(null)}>
            <div className="vh-mobile-drawer active" onClick={(e) => e.stopPropagation()}>
              <div className="vh-drawer-header">
                <div className="vh-drawer-bar" />
                <button className="vh-drawer-close" onClick={() => setActiveMobileRole(null)}>×</button>
              </div>
              <div className="vh-drawer-body">
                <img 
                  src={roleData[activeMobileRole].image} 
                  alt={roleData[activeMobileRole].name} 
                  className="vh-drawer-img" 
                  style={activeMobileRole === 'nvpttt' ? { objectPosition: 'center 15%' } : activeMobileRole === 'am' ? { objectPosition: 'center 35%' } : undefined}
                />
                <div className="vh-drawer-content-area">
                  <h3 className="vh-drawer-title">{roleData[activeMobileRole].name}</h3>
                  <p className="vh-drawer-desc">{roleData[activeMobileRole].function}</p>
                  <Link 
                    href={`/${activeMobileRole}`} 
                    className="vh-drawer-action-btn"
                    onClick={() => setActiveMobileRole(null)}
                  >
                    <span>Xem quy trình làm việc</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
