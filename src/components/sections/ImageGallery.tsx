import { SectionTitle } from "@/components/common/SectionTitle";
import { MediaBlock } from "@/components/common/MediaBlock";

export function ImageGallery() {
  return (
    <section 
      className="image-gallery-section section-bridge"
      style={{ "--gradient-start": "var(--vw-cream)", "--gradient-end": "var(--vw-white)" } as React.CSSProperties}
    >
      <SectionTitle eyebrow="Visual Showcase" title="Explore The Estate" align="center" />
      <div className="image-gallery-grid">
          <MediaBlock src="/creatives/experience-panoramic-view.jpg" alt="Panoramic mountain view" />
          <MediaBlock src="/creatives/helicopter-site-visit.jpg" alt="Helicopter site visit" />
          <MediaBlock src="/creatives/layout-plan.jpg" alt="Layout plan" contain />
          <MediaBlock src="/creatives/welcome-hilltop.jpg" alt="Welcome to the hilltop" />
      </div>
    </section>
  );
}
