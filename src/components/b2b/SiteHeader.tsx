"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SiteSwitcher from "@/components/ui/SiteSwitcher";

const BASE = "/b2b";
const operationRoutes = [`${BASE}/van-hanh`, `${BASE}/nvxl`, `${BASE}/nvgn`];

function isRouteActive(pathname: string, route: string) {
  if (route === BASE) return pathname === BASE;
  return pathname === route || pathname.startsWith(`${route}-`) || pathname.startsWith(`${route}/`);
}

function getScopeEl(): HTMLElement | null {
  if (typeof document === "undefined") return null;
  return document.querySelector<HTMLElement>(".b2b-scope");
}

function getInitialTheme(): "dark" | "light" {
  return getScopeEl()?.classList.contains("light-theme") ? "light" : "dark";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOperationsOpen, setMobileOperationsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);
  const operationsActive = operationRoutes.some((route) => isRouteActive(pathname, route));

  useEffect(() => {
    const saved = localStorage.getItem("ghn-b2b-theme") === "light" ? "light" : "dark";
    const el = getScopeEl();
    if (el) {
      el.classList.toggle("light-theme", saved === "light");
      el.style.colorScheme = saved;
    }
    const frame = requestAnimationFrame(() => setTheme(saved));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const apply = () => {
      setTheme(nextTheme);
      const el = getScopeEl();
      if (el) {
        el.classList.toggle("light-theme", nextTheme === "light");
        el.style.colorScheme = nextTheme;
      }
      localStorage.setItem("ghn-b2b-theme", nextTheme);
    };
    if (document.startViewTransition) document.startViewTransition(apply);
    else apply();
  };

  return (
    <>
      <header className="b2b-site-header">
        <nav className="b2b-site-header__nav" aria-label="Điều hướng chính">
          <div className="b2b-site-header__brand-wrap">
            <Link className="b2b-site-header__brand" href={BASE} aria-label="Giao Hàng Nặng B2B">
              <img src="/b2b/assets/logo-ghn.png" alt="GHN - Your Loads. Our Roads." />
            </Link>
            <SiteSwitcher compact />
          </div>

          <div className="b2b-site-header__links">
            <Link href={BASE} className={`b2b-site-header__link${pathname === BASE ? " active" : ""}`}>Trang chủ</Link>
            <div className="b2b-site-header__dropdown">
              <Link href={`${BASE}/van-hanh`} className={`b2b-site-header__dropdown-trigger${operationsActive ? " active" : ""}`}>
                Vận hành
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m2 4 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </Link>
              <div className="b2b-site-header__menu">
                <Link href={`${BASE}/nvxl`} className={isRouteActive(pathname, `${BASE}/nvxl`) ? "active" : ""}>Nhân viên Xử lý B2B</Link>
                <Link href={`${BASE}/nvgn`} className={isRouteActive(pathname, `${BASE}/nvgn`) ? "active" : ""}>Nhân viên Giao nhận B2B</Link>
              </div>
            </div>
            <Link href={`${BASE}/kinh-doanh`} className={`b2b-site-header__link${pathname === `${BASE}/kinh-doanh` ? " active" : ""}`}>Kinh doanh</Link>
          </div>

          <div className="b2b-site-header__actions">
            <button className="b2b-theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}>
              <svg className="b2b-theme-icon b2b-theme-icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              <svg className="b2b-theme-icon b2b-theme-icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
            </button>
            <button className="b2b-mobile-toggle" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label="Mở menu">
              {mobileOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>
      </header>

      <div className={`b2b-mobile-panel${mobileOpen ? " open" : ""}`}>
            <Link href={BASE} onClick={() => setMobileOpen(false)} className={pathname === BASE ? "active" : ""}>Trang chủ</Link>
        <button onClick={() => setMobileOperationsOpen((open) => !open)} aria-expanded={mobileOperationsOpen}>
          <span>Vận hành</span><span>{mobileOperationsOpen ? "−" : "+"}</span>
        </button>
        {mobileOperationsOpen && (
          <div className="b2b-mobile-submenu">
            <Link href={`${BASE}/van-hanh`} onClick={() => setMobileOpen(false)} className={pathname === `${BASE}/van-hanh` ? "active" : ""}>Tổng quan Vận hành</Link>
            <Link href={`${BASE}/nvxl`} onClick={() => setMobileOpen(false)} className={isRouteActive(pathname, `${BASE}/nvxl`) ? "active" : ""}>Nhân viên Xử lý B2B</Link>
            <Link href={`${BASE}/nvgn`} onClick={() => setMobileOpen(false)} className={isRouteActive(pathname, `${BASE}/nvgn`) ? "active" : ""}>Nhân viên Giao nhận B2B</Link>
          </div>
        )}
        <Link href={`${BASE}/kinh-doanh`} onClick={() => setMobileOpen(false)} className={pathname === `${BASE}/kinh-doanh` ? "active" : ""}>Kinh doanh</Link>
      </div>
    </>
  );
}
