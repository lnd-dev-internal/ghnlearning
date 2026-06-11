import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trải nghiệm vận hành – GHN L&D Portal',
  description: 'Chương trình trải nghiệm thực tế 5 vị trí vận hành tại Giao Hàng Nhanh (GHN). Trải nghiệm thật, công việc thật, áp lực thật.',
};

export default function TraiNghiemVanHanhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
