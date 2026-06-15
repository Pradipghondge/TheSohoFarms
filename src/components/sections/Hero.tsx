import { NotchedCardForm } from "@/components/ui/NotchedCardForm";

export function Hero() {
  return (
    <section 
      className="hero-v2 section-bridge" 
      id="top"
      style={{ "--gradient-start": "var(--vw-forest)", "--gradient-end": "var(--vw-cream)" } as React.CSSProperties}
    >
      <img src="/logo_shoho.png" alt="Soho Farm Logo" className="hero-logo" />
      <div className="hero-background">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/creatives/hero-drone-fallback.jpg"
        >
          <source src="/creatives/hero-drone-roha-valley.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-bg-texture">
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>N</span>
            <span>E</span>
            <span>S</span>
            <span>S</span>
        </div>
      </div>

      <div className="hero-grid">
        <div className="hero-content-left">
          <span className="hero-label" data-reveal>THE WORLD'S</span>
          <h1 data-reveal data-delay="1">LARGEST DESIGNER WELLNESS</h1>
          <div className="hero-badge" data-reveal data-delay="2">RESIDENTIAL TOWER</div>
          <h2 data-reveal data-delay="3">CRAFTED BY VINCITORE</h2>
        </div>
        <div className="hero-content-right">
          <NotchedCardForm title="Register Your Interest" type="enquiry" />
        </div>
      </div>
       <img src="/creatives/bottom-flower.webp" alt="Statue with flowers" className="statue-img" data-reveal/>
    </section>
  );
}
