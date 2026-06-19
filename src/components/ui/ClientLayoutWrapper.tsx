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
  const hideFooter = ['/onboarding', '/leaders-talk', '/trai-nghiem-van-hanh'].includes(pathname);
  const hideNavSpacer = pathname === '/leaders-talk';

  return (
    <>
      <GHNNavbar />
      {!hideNavSpacer && <div style={{ height: '68px' }} />}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: hideNavSpacer ? '100vh' : 'calc(100vh - 68px)' }}>
        <div style={{ flex: '1 0 auto' }}>
          {children}
        </div>
        {!hideFooter && <GHNFooter />}
      </div>
    </>
  );
}

