"use client";

import { useState } from "react";
import { Pair } from "@/types";
import { SectionTitle } from "@/components/common/SectionTitle";
import { MediaBlock } from "@/components/common/MediaBlock";

interface ImageCarouselProps {
  title: string;
  items: Pair[];
}

export function ImageCarousel({ title, items }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section 
      id="lifestyle"
      className="lifestyle-carousel-section section-bridge"
      style={{ "--gradient-start": "var(--vw-white)", "--gradient-end": "var(--vw-forest)" } as React.CSSProperties}
    >
      <div className="hummingbird-placeholder-alt" data-reveal></div>
      <SectionTitle eyebrow="Experience The Lifestyle" title="A World Of Your Own" align="center" />
      <div className="carousel-wrapper">
        <div className="card-carousel">
          {items.map(([name, src], i) => (
            <article 
                key={name} 
                className={`lifestyle-card ${i === activeIndex ? 'active' : ''}`}
            >
              <MediaBlock src={src} alt={name} className="lifestyle-card-image"/>
              <div className="lifestyle-card-overlay">
                  <div className="lifestyle-card-content">
                      <h4>{name}</h4>
                      <div className="card-arrow-button">→</div>
                  </div>
              </div>
            </article>
          ))}
        </div>
        <div className="carousel-nav" data-reveal data-delay="1">
            <button className="carousel-arrow prev" onClick={prevSlide}>‹</button>
            <button className="carousel-arrow next" onClick={nextSlide}>›</button>
        </div>
        <div className="carousel-dots" data-reveal data-delay="2">
            {items.map((_, i) => (
                <button 
                    key={i} 
                    className={i === activeIndex ? 'is-active' : ''}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
