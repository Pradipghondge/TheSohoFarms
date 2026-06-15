import { SectionTitle } from "@/components/common/SectionTitle";

export function TowerShowcaseSection() {
    return (
        <section className="tower-showcase-section">
            <div 
                className="tower-image-placeholder" 
                style={{ backgroundImage: `url('/creatives/brand-story-luxury-farm.jpg')` }}
                data-reveal
            />
            <div className="tower-content" data-reveal>
                <SectionTitle 
                    eyebrow="The Crown Jewel"
                    title="A New Benchmark In Luxury"
                />
                 <hr className="gold-rule" data-reveal data-delay="1"/>
                 <p data-reveal data-delay="2">Embodying the pinnacle of nature-inspired luxury, this is the signature experience at The Soho Farms.</p>
                 <a href="#forms" className="explore-more-btn" data-reveal data-delay="3">Explore More</a>
            </div>
        </section>
    );
}
