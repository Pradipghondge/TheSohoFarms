import { SectionTitle } from "@/components/common/SectionTitle";
import { MediaBlock } from "@/components/common/MediaBlock";

export function BrandStory() {
  return (
    <section 
      className="brand-story-v2 section-bridge"
      style={{ "--gradient-start": "var(--vw-cream-dark)", "--gradient-end": "var(--vw-white)" } as React.CSSProperties}
    >
        <div className="brand-story-grid">
            <MediaBlock
                src="/creatives/brand-story-luxury-farm.jpg"
                alt="Luxury farm lifestyle"
            />
            <div data-reveal>
                <SectionTitle eyebrow="Why The Soho Farms?" title="Where Luxury Meets Nature" />
                <p data-reveal data-delay="1">
                Soho represents sophistication, exclusivity and premium living. Farm
                represents freedom, fresh air, nature and true ownership.
                </p>
                <p data-reveal data-delay="2">
                Together, The Soho Farms creates a destination where investment meets a
                pollution-free nature retreat lifestyle.
                </p>
                <strong data-reveal data-delay="3">Above The Ordinary.</strong>
            </div>
        </div>
    </section>
  );
}
