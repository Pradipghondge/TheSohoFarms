import { attractions, projectStats } from "@/constants/content";
import { Header } from "@/components/layout/Header";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { BrandStory } from "@/components/sections/BrandStory";
import { ImageCarousel } from "@/components/sections/ImageCarousel";
import { StatsSection } from "@/components/sections/StatsSection";
import { TowerShowcaseSection } from "@/components/sections/TowerShowcaseSection";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollAnimator } from "@/components/utils/ScrollAnimator";

export default function Home() {
  return (
    <main>
      <div className="scroll-wrapper">
        <Header />
        <Hero />
        <AboutSection />
        <BrandStory />
        <ImageCarousel title="Nearby Attractions" items={attractions} />
        <StatsSection stats={projectStats} />
        <TowerShowcaseSection />
        <ImageGallery />
        <LocationSection />
        <ContactSection />
      </div>
      <ContactFooter />
      <ScrollAnimator />
    </main>
  );
}
