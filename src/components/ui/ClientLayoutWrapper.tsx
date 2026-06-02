'use client';

import { usePathname } from 'next/navigation';
import GHNNavbar from './GHNNavbar';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <GHNNavbar />
      {children}
    </>
  );
}

