import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trải nghiệm vận hành – GHN L&D Portal',
  description: 'Chương trình trải nghiệm thực tế 5 vị trí vận hành tại Giao Hàng Nhanh (GHN). Trải nghiệm thật, công việc thật, áp lực thật.',
};

export default function TraiNghiemVanHanhPage() {
  return (
    <>
      <style>{`
        .tnvh-wrapper {
          width: 100%;
          height: calc(100vh - 64px);
          overflow: hidden;
          position: relative;
        }
        .tnvh-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
      `}</style>

      <div className="tnvh-wrapper">
        <iframe
          src="/tnvh/index.html"
          title="Trải nghiệm vận hành tại GHN"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </>
  );
}
