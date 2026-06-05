'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

// --- Main nav items (default view) ---
const mainNavItems = [
  { label: 'Trang chủ', href: '/homepage' },
  { label: 'Leaders Talk', href: '/leaders-talk' },
  { label: 'Trải nghiệm vận hành', href: '/trai-nghiem-van-hanh' },
];

// --- Technical Skills nav items (secondary view) ---
const technicalNavItems = [
  {
    label: 'Khối Văn Phòng',
    defaultHref: '/newbie',
    children: [
      { label: 'Lộ trình nhân viên mới', href: '/newbie' },
      { label: 'CSKH', href: '/cskh' },
      { label: 'Field Sale', href: '/fieldsale' },
    ],
  },
  {
    label: 'Khối Thị Trường',
    defaultHref: '/nvxl',
    children: [
      { label: 'Nhân viên xử lý', href: '/nvxl' },
      { label: 'Nhân viên Phát triển thị trường', href: '/nvpttt' },
      { label: 'Nhân viên Phân hàng', href: '/nvph' },
    ],
  },
];

// All technical hrefs for auto-detection
const technicalHrefs = technicalNavItems.flatMap((g) => g.children.map((c) => c.href));

export default function GHNNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  // Auto-switch mode based on current page
  const isTechnicalPage = technicalHrefs.some(
    (href) => pathname === href || pathname.startsWith(href + '/')
  );
  const [navMode, setNavMode] = useState<'main' | 'technical'>(
    isTechnicalPage ? 'technical' : 'main'
  );

  // Sync mode when navigating between pages
  useEffect(() => {
    if (isTechnicalPage) setNavMode('technical');
    else setNavMode('main');
  }, [pathname, isTechnicalPage]);

  // Toggle mode + navigate to default page of that side
  const handleModeSwitch = (mode: 'main' | 'technical') => {
    setNavMode(mode);
    if (mode === 'technical') {
      router.push('/newbie');
    } else {
      router.push('/homepage');
    }
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === '/homepage') return pathname === '/homepage' || pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const isDropdownActive = (children?: { href: string }[]) => {
    if (!children) return false;
    return children.some((c) => pathname === c.href || pathname.startsWith(c.href + '/'));
  };

  return (
    <>
      <style>{`
        .ghn-navbar {
          position: sticky !important;
          top: 0 !important;
          z-index: 100 !important;
          display: flex !important;
          flex-direction: row !important;
          justify-content: space-between !important;
          align-items: center !important;
          padding: 0 40px !important;
          width: 100% !important;
          height: 68px !important;
          background: #ffffff !important;
          border-bottom: 1px solid rgba(0,0,0,0.08) !important;
          box-shadow: none !important;
          overflow: visible !important;
        }
        .ghn-logo {
          font-family: 'Inter', sans-serif !important;
          font-weight: 700 !important;
          font-size: 15px !important;
          color: #1A1A1A !important;
          letter-spacing: 0.12em !important;
          text-transform: uppercase !important;
          text-decoration: none !important;
          flex-shrink: 0 !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
        .ghn-logo img {
          height: 180px !important;
          width: auto !important;
          display: block !important;
          object-fit: contain !important;
        }

        /* Center nav */
        .ghn-nav-links {
          display: flex !important;
          flex-direction: row !important;
          align-items: stretch !important;
          gap: 8px !important;
          position: absolute !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          height: 68px !important;
        }
        @keyframes navFadeIn {
          from { opacity: 0; transform: translateX(calc(-50% + 8px)); }
          to   { opacity: 1; transform: translateX(-50%); }
        }
        .ghn-nav-links { animation: navFadeIn 0.18s ease; }

        /* Plain link */
        .ghn-nav-link {
          font-family: 'Inter', sans-serif !important;
          font-weight: 600 !important;
          font-size: 15px !important;
          letter-spacing: 0.01em !important;
          color: #3D3D3D !important;
          text-decoration: none !important;
          cursor: pointer !important;
          white-space: nowrap !important;
          transition: color 0.2s !important;
          display: flex !important;
          align-items: center !important;
          padding: 0 12px !important;
          border-bottom: 2px solid transparent !important;
        }
        .ghn-nav-link:hover {
          color: #FF5200 !important;
        }
        .ghn-nav-link.active {
          color: #FF5200 !important;
          border-bottom: 2px solid #FF5200 !important;
        }

        /* Dropdown item wrapper */
        .ghn-nav-item {
          position: relative;
          display: flex;
          align-items: stretch;
        }
        .ghn-nav-item > .ghn-nav-link {
          padding: 0 12px !important;
        }
        .ghn-nav-caret {
          width: 10px;
          height: 10px;
          margin-left: 5px;
          transition: transform .2s;
          opacity: 0.5;
          flex-shrink: 0;
        }
        .ghn-nav-item:hover .ghn-nav-caret {
          transform: rotate(180deg);
          opacity: 1;
        }

        /* Dropdown — bridged with padding so hover doesn't break */
        .ghn-nav-menu {
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding-top: 8px; /* bridge gap */
          z-index: 200;
          transition: opacity 0.15s, visibility 0.15s;
          min-width: 240px;
        }
        .ghn-nav-menu-inner {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,.1);
          padding: 6px 0;
          overflow: hidden;
        }
        .ghn-nav-item:hover .ghn-nav-menu {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }
        .ghn-nav-menu a {
          display: block !important;
          padding: 10px 20px !important;
          font-family: 'Inter', sans-serif !important;
          font-weight: 500 !important;
          font-size: 14px !important;
          color: #3D3D3D !important;
          text-decoration: none !important;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .ghn-nav-menu a:hover {
          background: rgba(255,82,0,0.05) !important;
          color: #FF5200 !important;
        }
        .ghn-nav-menu a.active {
          color: #FF5200 !important;
          font-weight: 600 !important;
          background: rgba(255,82,0,0.06) !important;
        }

        /* Right actions */
        .ghn-right-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        /* Technical Skills button */
        .ghn-tech-btn {
          font-family: 'Inter', sans-serif !important;
          font-weight: 600 !important;
          font-size: 13px !important;
          cursor: pointer !important;
          border: 1.5px solid #E0E0E0 !important;
          border-radius: 6px !important;
          padding: 7px 14px !important;
          background: #fff !important;
          color: #3D3D3D !important;
          transition: all 0.2s ease !important;
          white-space: nowrap !important;
          display: flex !important;
          align-items: center !important;
          gap: 6px !important;
        }
        .ghn-tech-btn:hover {
          border-color: #FF5200 !important;
          color: #FF5200 !important;
        }
        .ghn-tech-btn.active {
          background: #FF5200 !important;
          border-color: #FF5200 !important;
          color: #fff !important;
        }

        /* Search */
        .ghn-search-box {
          display: flex;
          align-items: center;
          position: relative;
        }
        .ghn-search-icon {
          position: absolute;
          left: 10px;
          color: rgba(0,0,0,0.35);
          pointer-events: none;
        }
        .ghn-search-box input {
          width: 180px !important;
          height: 34px !important;
          background: #F5F5F5 !important;
          border: 1px solid rgba(0,0,0,0.1) !important;
          border-radius: 6px !important;
          padding: 6px 14px 6px 34px !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 13px !important;
          color: #3D3D3D !important;
          outline: none !important;
          transition: border-color 0.2s, background 0.2s;
        }
        .ghn-search-box input::placeholder { color: rgba(0,0,0,0.3) !important; }
        .ghn-search-box input:focus {
          border-color: #FF5200 !important;
          background: #fff !important;
        }

        /* ── Mobile ── */
        .ghn-mobile-header {
          display: none;
          position: sticky;
          top: 0;
          z-index: 100;
          height: 56px;
          background: #ffffff !important;
          border-bottom: 1px solid rgba(0,0,0,0.08) !important;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          box-sizing: border-box;
        }
        .ghn-hamburger {
          background: none !important;
          border: none !important;
          cursor: pointer;
          padding: 8px;
          color: #3D3D3D !important;
        }
        .ghn-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.4);
          z-index: 199;
        }
        .ghn-overlay.open { display: block; }
        .ghn-drawer {
          position: fixed;
          top: 0; left: -280px;
          width: 280px; height: 100vh;
          background: #ffffff !important;
          z-index: 200;
          transition: left .3s ease;
          overflow-y: auto;
          box-shadow: 4px 0 24px rgba(0,0,0,.12);
          display: flex;
          flex-direction: column;
        }
        .ghn-drawer.open { left: 0; }
        .ghn-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .ghn-drawer-close {
          background: none !important;
          border: none !important;
          cursor: pointer;
          padding: 4px;
          color: #3D3D3D !important;
          font-size: 20px;
          line-height: 1;
        }
        .ghn-drawer-mode-toggle {
          display: flex;
          margin: 12px 16px;
          background: #F5F5F5;
          border-radius: 8px;
          padding: 3px;
          gap: 2px;
        }
        .ghn-drawer-mode-btn {
          flex: 1;
          padding: 8px 10px;
          font-family: 'Inter', sans-serif !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          border: none !important;
          border-radius: 6px !important;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent !important;
          color: #888 !important;
        }
        .ghn-drawer-mode-btn.active {
          background: #fff !important;
          color: #FF5200 !important;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }
        .ghn-drawer-nav { padding: 8px 0; }
        .ghn-drawer-link {
          display: block !important;
          padding: 13px 20px !important;
          font-family: 'Inter', sans-serif !important;
          font-weight: 600 !important;
          font-size: 15px !important;
          color: #3D3D3D !important;
          text-decoration: none !important;
          cursor: pointer;
          transition: color 0.2s;
          border-left: 3px solid transparent !important;
        }
        .ghn-drawer-link:hover { color: #FF5200 !important; }
        .ghn-drawer-link.active {
          color: #FF5200 !important;
          border-left-color: #FF5200 !important;
          background: rgba(255,82,0,0.04) !important;
        }
        .ghn-drawer-group-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 20px;
          font-family: 'Inter', sans-serif !important;
          font-weight: 600 !important;
          font-size: 15px !important;
          color: #3D3D3D !important;
          cursor: pointer;
          user-select: none;
          transition: color 0.2s;
          border-left: 3px solid transparent;
        }
        .ghn-drawer-group-toggle:hover { color: #FF5200 !important; }
        .ghn-drawer-group-toggle.active {
          color: #FF5200 !important;
          border-left-color: #FF5200;
        }
        .ghn-drawer-submenu {
          background: rgba(0,0,0,0.02);
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .ghn-drawer-submenu a {
          display: block !important;
          padding: 10px 20px 10px 32px !important;
          font-family: 'Inter', sans-serif !important;
          font-weight: 500 !important;
          font-size: 13px !important;
          color: #5A5A5A !important;
          text-decoration: none !important;
          transition: color 0.2s;
        }
        .ghn-drawer-submenu a:hover { color: #FF5200 !important; }
        .ghn-drawer-submenu a.active {
          color: #FF5200 !important;
          font-weight: 600 !important;
        }
        .ghn-drawer-search {
          padding: 16px;
          border-top: 1px solid rgba(0,0,0,0.07);
          margin-top: auto;
        }
        .ghn-drawer-search input {
          width: 100% !important;
          height: 40px !important;
          background: #F5F5F5 !important;
          border: 1px solid rgba(0,0,0,0.1) !important;
          border-radius: 6px !important;
          padding: 10px 16px !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 13px !important;
          color: #3D3D3D !important;
          outline: none !important;
          box-sizing: border-box !important;
        }
        .ghn-drawer-search input::placeholder { color: rgba(0,0,0,0.3) !important; }

        @media (max-width: 1024px) {
          .ghn-navbar { display: none !important; }
          .ghn-mobile-header { display: flex !important; }
        }
      `}</style>

      {/* ── Desktop Navbar ── */}
      <nav className="ghn-navbar">
        <Link href="/homepage" className="ghn-logo">
          <img src="/ghn-learning-logo.png" alt="GHN Learning" />
        </Link>

        {/* Center — animated swap */}
        <div className="ghn-nav-links" key={navMode}>
          {navMode === 'main'
            ? mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`ghn-nav-link${isActive(item.href) ? ' active' : ''}`}
                >
                  {item.label}
                </Link>
              ))
            : technicalNavItems.map((item) => (
                <div key={item.label} className="ghn-nav-item">
                  <span className={`ghn-nav-link${isDropdownActive(item.children) ? ' active' : ''}`}>
                    {item.label}
                    <svg
                      className="ghn-nav-caret"
                      viewBox="0 0 10 10" fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: 'inline-block' }}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div className="ghn-nav-menu">
                    <div className="ghn-nav-menu-inner">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={isActive(child.href) ? 'active' : ''}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Right: Search + Toggle button */}
        <div className="ghn-right-actions">
          <div className="ghn-search-box">
            <svg className="ghn-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Tìm kiếm..." />
          </div>

          <button
            className={`ghn-tech-btn${navMode === 'technical' ? ' active' : ''}`}
            onClick={() => handleModeSwitch(navMode === 'main' ? 'technical' : 'main')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            {navMode === 'main' ? 'Technical Skills' : 'Onboarding'}
          </button>
        </div>
      </nav>

      {/* ── Mobile Header ── */}
      <div className="ghn-mobile-header">
        <button className="ghn-hamburger" onClick={() => setDrawerOpen(true)} aria-label="Mở menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <Link href="/homepage" className="ghn-logo">
          <img src="/ghn-learning-logo.png" alt="GHN Learning" style={{ height: 120, width: "auto" }} />
        </Link>
        <div style={{ width: 40 }} />
      </div>

      {/* ── Mobile Overlay ── */}
      <div className={`ghn-overlay${drawerOpen ? ' open' : ''}`} onClick={() => setDrawerOpen(false)} />

      {/* ── Mobile Drawer ── */}
      <div className={`ghn-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="ghn-drawer-header">
          <Link href="/homepage" className="ghn-logo" onClick={() => setDrawerOpen(false)}>
            <img src="/ghn-learning-logo.png" alt="GHN Learning" style={{ height: 120, width: "auto" }} />
          </Link>
          <button className="ghn-drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Đóng menu">✕</button>
        </div>

        <div className="ghn-drawer-mode-toggle">
          <button
            className={`ghn-drawer-mode-btn${navMode === 'main' ? ' active' : ''}`}
            onClick={() => { handleModeSwitch('main'); setDrawerOpen(false); }}
          >
            Tổng quát
          </button>
          <button
            className={`ghn-drawer-mode-btn${navMode === 'technical' ? ' active' : ''}`}
            onClick={() => { handleModeSwitch('technical'); setDrawerOpen(false); }}
          >
            Technical Skills
          </button>
        </div>

        <nav className="ghn-drawer-nav">
          {navMode === 'main'
            ? mainNavItems.map((item) => (
                <Link key={item.href} href={item.href}
                  className={`ghn-drawer-link${isActive(item.href) ? ' active' : ''}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label}
                </Link>
              ))
            : technicalNavItems.map((item) => (
                <div key={item.label}>
                  <div
                    className={`ghn-drawer-group-toggle${isDropdownActive(item.children) ? ' active' : ''}`}
                    onClick={() => setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      style={{ transform: openMobileMenu === item.label ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                  {openMobileMenu === item.label && (
                    <div className="ghn-drawer-submenu">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}
                          className={isActive(child.href) ? 'active' : ''}
                          onClick={() => setDrawerOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
        </nav>

        <div className="ghn-drawer-search">
          <input type="text" placeholder="Tìm kiếm khóa học..." />
        </div>
      </div>
    </>
  );
}
