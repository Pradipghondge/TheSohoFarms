import { SectionTitle } from "@/components/common/SectionTitle";

export function LocationSection() {
  return (
    <section 
      className="location-section-v2 section-bridge" 
      id="location"
      style={{ "--gradient-start": "var(--vw-white)", "--gradient-end": "var(--vw-forest)" } as React.CSSProperties}
    >
        <SectionTitle 
            eyebrow="Strategic Location"
            title="Next to Dubai's Greenest Community"
            align="center"
        />
        <div className="map-container" data-reveal>
            <iframe 
                src="https://maps.google.com/maps?q=Al%20Barari%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }} data-reveal data-delay="1">
            <a href="https://www.google.com/maps/place/Al+Barari" target="_blank" rel="noopener noreferrer" className="view-locations-btn">View Locations</a>
        </div>
    </section>
  );
}
