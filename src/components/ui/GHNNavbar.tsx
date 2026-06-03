'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Trang chủ', href: '/homepage' },
  {
    label: 'Khối Văn Phòng',
    children: [
      { label: 'Newbie', href: '/newbie' },
      { label: 'CSKH', href: '/cskh' },
      { label: 'Field Sale', href: '/fieldsale' },
    ],
  },
  {
    label: 'Khối Thị Trường',
    children: [
      { label: 'NVXL', href: '/nvxl' },
      { label: 'NVPTTT', href: '/nvpttt' },
      { label: 'NVPH', href: '/nvph' },
    ],
  },
  {
    label: 'B2B',
    children: [
      { label: 'Hàng nặng', href: '/hangnang' },
    ],
  },
  { label: 'Leaders Talk', href: '/leaders-talk' },
  { label: 'Trải nghiệm vận hành', href: '/trai-nghiem-van-hanh' },
];

export default function GHNNavbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

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
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0 32px;
          width: 100%;
          height: 64px;
          background: #fff;
          border-bottom: 1px solid #E5F1F7;
          box-shadow: 0 1px 2px rgba(0,0,0,.05);
          box-sizing: border-box;
        }
        .ghn-logo {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 24px;
          color: #FF5200;
          letter-spacing: -0.5px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .ghn-logo span {
          color: #009BE0;
        }
        .ghn-nav-links {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 24px;
        }
        .ghn-nav-link {
          font-family: 'Be Vietnam Pro', sans-serif;
          font-weight: 500;
          font-size: 16px;
          color: #475569;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
        }
        .ghn-nav-link.active {
          font-weight: 600;
          color: #FF5200;
          border-bottom: 2px solid #FF5200;
          padding-bottom: 4px;
        }
        .ghn-nav-item {
          position: relative;
          display: flex;
          align-items: center;
        }
        .ghn-nav-caret {
          width: 10px;
          height: 10px;
          margin-left: 4px;
          transition: transform .2s;
        }
        .ghn-nav-item:hover .ghn-nav-caret {
          transform: rotate(180deg);
        }
        .ghn-nav-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border: 1px solid #e5f1f7;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,.1);
          padding: 8px 0;
          min-width: 200px;
          z-index: 200;
        }
        .ghn-nav-item:hover .ghn-nav-menu {
          display: block;
        }
        .ghn-nav-menu a {
          display: block;
          padding: 8px 16px;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 14px;
          color: #475569;
          text-decoration: none;
        }
        .ghn-nav-menu a:hover {
          background: #f0f8ff;
          color: #ff5200;
        }
        .ghn-nav-menu a.active {
          color: #ff5200;
          font-weight: 600;
          background: #fff5f0;
        }
        .ghn-search-box {
          display: flex;
          align-items: center;
          position: relative;
          flex-shrink: 0;
        }
        .ghn-search-icon {
          position: absolute;
          left: 12px;
          color: #9CA3AF;
          pointer-events: none;
        }
        .ghn-search-box input {
          width: 221px;
          height: 42px;
          background: #F3F3F6;
          border: 1px solid #E5BEB2;
          border-radius: 8px;
          padding: 10px 16px 10px 40px;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 16px;
          color: #6B7280;
          outline: none;
        }
        .ghn-search-box input:focus {
          border-color: #FF5200;
        }
        /* Mobile */
        .ghn-mobile-header {
          display: none;
          position: sticky;
          top: 0;
          z-index: 100;
          height: 56px;
          background: #fff;
          border-bottom: 1px solid #E5F1F7;
          box-shadow: 0 1px 2px rgba(0,0,0,.05);
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .ghn-hamburger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: #475569;
        }
        .ghn-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.4);
          z-index: 199;
        }
        .ghn-overlay.open {
          display: block;
        }
        .ghn-drawer {
          position: fixed;
          top: 0;
          left: -280px;
          width: 280px;
          height: 100vh;
          background: #fff;
          z-index: 200;
          transition: left .3s ease;
          overflow-y: auto;
          box-shadow: 4px 0 16px rgba(0,0,0,.1);
          display: flex;
          flex-direction: column;
        }
        .ghn-drawer.open {
          left: 0;
        }
        .ghn-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid #E5F1F7;
        }
        .ghn-drawer-close {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #475569;
          font-size: 20px;
          line-height: 1;
        }
        .ghn-drawer-nav {
          padding: 8px 0;
        }
        .ghn-drawer-link {
          display: block;
          padding: 12px 20px;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #475569;
          text-decoration: none;
          cursor: pointer;
        }
        .ghn-drawer-link.active {
          color: #FF5200;
          font-weight: 600;
          background: #fff5f0;
        }
        .ghn-drawer-group-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #475569;
          cursor: pointer;
          user-select: none;
        }
        .ghn-drawer-group-toggle.active {
          color: #FF5200;
          font-weight: 600;
        }
        .ghn-drawer-submenu {
          background: #f8fafc;
          border-top: 1px solid #E5F1F7;
          border-bottom: 1px solid #E5F1F7;
        }
        .ghn-drawer-submenu a {
          display: block;
          padding: 10px 20px 10px 32px;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 14px;
          color: #64748b;
          text-decoration: none;
        }
        .ghn-drawer-submenu a.active {
          color: #FF5200;
          font-weight: 600;
        }
        .ghn-drawer-search {
          padding: 16px;
          border-top: 1px solid #E5F1F7;
          margin-top: auto;
        }
        .ghn-drawer-search input {
          width: 100%;
          height: 40px;
          background: #F3F3F6;
          border: 1px solid #E5BEB2;
          border-radius: 8px;
          padding: 10px 16px;
          font-family: 'Be Vietnam Pro', sans-serif;
          font-size: 15px;
          color: #6B7280;
          outline: none;
          box-sizing: border-box;
        }
        @media (max-width: 1024px) {
          .ghn-navbar {
            display: none;
          }
          .ghn-mobile-header {
            display: flex;
          }
        }
      `}</style>

      {/* Desktop Navbar */}
      <nav className="ghn-navbar">
        <Link href="/homepage" className="ghn-logo">
          GHN <span>Learning</span>
        </Link>

        <div className="ghn-nav-links">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="ghn-nav-item">
                <span
                  className={`ghn-nav-link${isDropdownActive(item.children) ? ' active' : ''}`}
                >
                  {item.label}
                  <svg
                    className="ghn-nav-caret"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'inline-block', marginLeft: 4 }}
                  >
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="ghn-nav-menu">
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
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`ghn-nav-link${isActive(item.href) ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="ghn-search-box">
          <svg
            className="ghn-search-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Tìm kiếm khóa học..." />
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="ghn-mobile-header">
        <button
          className="ghn-hamburger"
          onClick={() => setDrawerOpen(true)}
          aria-label="Mở menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <Link href="/homepage" className="ghn-logo" style={{ fontSize: 20 }}>
          GHN <span>Learning</span>
        </Link>

        <div style={{ width: 40 }} />
      </div>

      {/* Mobile Overlay */}
      <div
        className={`ghn-overlay${drawerOpen ? ' open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`ghn-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="ghn-drawer-header">
          <Link
            href="/homepage"
            className="ghn-logo"
            style={{ fontSize: 20 }}
            onClick={() => setDrawerOpen(false)}
          >
            GHN <span>Learning</span>
          </Link>
          <button
            className="ghn-drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Đóng menu"
          >
            ✕
          </button>
        </div>

        <nav className="ghn-drawer-nav">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <div
                  className={`ghn-drawer-group-toggle${isDropdownActive(item.children) ? ' active' : ''}`}
                  onClick={() =>
                    setOpenMobileMenu(
                      openMobileMenu === item.label ? null : item.label
                    )
                  }
                >
                  <span>{item.label}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform:
                        openMobileMenu === item.label
                          ? 'rotate(180deg)'
                          : 'none',
                      transition: 'transform .2s',
                    }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                {openMobileMenu === item.label && (
                  <div className="ghn-drawer-submenu">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={isActive(child.href) ? 'active' : ''}
                        onClick={() => setDrawerOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`ghn-drawer-link${isActive(item.href) ? ' active' : ''}`}
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="ghn-drawer-search">
          <input type="text" placeholder="Tìm kiếm khóa học..." />
        </div>
      </div>
    </>
  );
}
