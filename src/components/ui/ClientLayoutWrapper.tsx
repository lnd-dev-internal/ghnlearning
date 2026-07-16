'use client';

import { usePathname } from 'next/navigation';
import GHNNavbar from './GHNNavbar';
import GHNFooter from './GHNFooter';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Trang sảnh SCommerce (/) và site b2b (/b2b/*) dùng chrome riêng — bỏ hẳn
  // navbar/footer của GHN Land.
  const isB2B = pathname === '/b2b' || pathname.startsWith('/b2b/');
  const isLobby = pathname === '/';
  if (isB2B || isLobby) {
    return <>{children}</>;
  }

  const hideFooter = ['/onboarding', '/leaders-talk', '/trai-nghiem-van-hanh'].includes(pathname);

  return (
    <>
      <GHNNavbar />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 68px)' }}>
        <div style={{ flex: '1 0 auto' }}>
          {children}
        </div>
        {!hideFooter && <GHNFooter />}
      </div>
    </>
  );
}

