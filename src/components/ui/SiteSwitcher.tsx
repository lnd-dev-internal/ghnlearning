'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Pill segmented control để chuyển giữa 2 site chạy song song:
 *  - GHN Learning  → /onboarding
 *  - B2B Learning  → /b2b
 * Dùng chung cho GHNNavbar (light) và SiteHeader của b2b (dark) nên style tự
 * chủ, không phụ thuộc theme của từng bên.
 */
export default function SiteSwitcher({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname() ?? '';
  const isB2B = pathname === '/b2b' || pathname.startsWith('/b2b/');

  return (
    <div className={`site-switcher${compact ? ' site-switcher--compact' : ''}`} role="group" aria-label="Chuyển đổi nền tảng">
      <style>{`
        .site-switcher {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          padding: 3px;
          border-radius: 999px;
          background: rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.08);
          flex-shrink: 0;
        }
        .b2b-scope .site-switcher {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.14);
        }
        .site-switcher a {
          font-family: 'Inter', 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 700 !important;
          font-size: 12.5px !important;
          letter-spacing: 0.01em !important;
          line-height: 1 !important;
          text-decoration: none !important;
          padding: 7px 14px !important;
          border-radius: 999px !important;
          color: #6b6b6b !important;
          white-space: nowrap !important;
          transition: color .18s ease, background .18s ease !important;
        }
        .b2b-scope .site-switcher a { color: rgba(255,255,255,0.62) !important; }
        .site-switcher a:hover { color: #FF5200 !important; }
        .site-switcher a[data-active="true"] {
          background: #FF5200 !important;
          color: #ffffff !important;
          box-shadow: 0 1px 4px rgba(255,82,0,0.35) !important;
        }
        /* Trên site B2B: dùng màu brand teal cho segment đang active */
        .b2b-scope .site-switcher a:hover { color: #00a19a !important; }
        .b2b-scope .site-switcher a[data-active="true"] {
          background: #00a19a !important;
          color: #ffffff !important;
          box-shadow: 0 1px 4px rgba(0,161,154,0.35) !important;
        }
        .site-switcher--compact a { padding: 6px 11px !important; font-size: 11.5px !important; }
      `}</style>
      <Link href="/onboarding" data-active={!isB2B} aria-current={!isB2B ? 'page' : undefined}>
        GHN
      </Link>
      <Link href="/b2b" data-active={isB2B} aria-current={isB2B ? 'page' : undefined}>
        B2B
      </Link>
    </div>
  );
}
