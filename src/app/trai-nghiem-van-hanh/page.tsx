'use client';

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

