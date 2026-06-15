export function AboutSection() {
  return (
    <section 
      className="about-section section-bridge" 
      id="about"
      style={{ "--gradient-start": "var(--vw-cream)", "--gradient-end": "var(--vw-cream-dark)" } as React.CSSProperties}
    >
      <div className="about-grid">
        <div className="about-content" data-reveal>
          <img src="/logo_shoho.png" alt="Vincitore Crest" className="about-logo-image" data-reveal data-delay="1"/>
          <p data-reveal data-delay="2">
            A rare opportunity to own premium hilltop agricultural land amidst the
            breathtaking Sahyadri mountain ranges, dense greenery and open skies.
          </p>
          <p data-reveal data-delay="3">
            Spread across 100 acres, The Soho Farms brings together nature,
            infrastructure, recreation and long-term investment potential. More
            than land ownership, it is an opportunity to own a peaceful weekend
            destination that feels close to Mahabaleshwar, Lonavala and the
            Alibaug coastal belt.
          </p>
        </div>
        <div className="downloads-list" data-reveal>
          <div className="download-item" data-reveal data-delay="1">
            <span>Project Brochure</span>
            <a href="#" className="button-ghost">Download</a>
          </div>
          <div className="download-item" data-reveal data-delay="2">
            <span>Payment Plans</span>
            <a href="#" className="button-ghost">Download</a>
          </div>
          <div className="download-item" data-reveal data-delay="3">
            <span>Unit Layouts</span>
            <a href="#" className="button-ghost">Download</a>
          </div>
        </div>
      </div>
    </section>
  );
}
