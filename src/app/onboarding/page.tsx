export default function OnboardingPage() {
  return (
    <div style={{ margin: '0 -0px', padding: 0, overflow: 'hidden' }}>
      <iframe
        src="/onboarding-static/index.html"
        allow="autoplay"
        style={{
          width: '100%',
          height: 'calc(100vh - 68px)',
          border: 'none',
          display: 'block',
          margin: 0,
          padding: 0,
          verticalAlign: 'top',
        }}
        title="Onboarding - Giao Hàng Nhanh"
      />
    </div>
  );
}
