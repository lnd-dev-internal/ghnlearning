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

  return (
    <>
      <GHNNavbar />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 68px)' }}>
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <GHNFooter />
      </div>
    </>
  );
}


