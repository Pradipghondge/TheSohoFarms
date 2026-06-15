import { SectionTitle } from "@/components/common/SectionTitle";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
    return (
        <section 
          className="stats-section section-bridge"
          style={{ "--gradient-start": "var(--vw-forest)", "--gradient-end": "var(--vw-cream)" } as React.CSSProperties}
        >
            <div className="stats-content" data-reveal>
                <SectionTitle 
                    eyebrow="The Scale of The Dream"
                    title="An Unprecedented Lifestyle"
                    align="center"
                />
                <div className="stats-grid-v2">
                    {stats.slice(0, 3).map((stat, i) => (
                        <div key={i} className="stat-item" data-reveal data-delay={i}>
                            <div className="stat-value">
                                <AnimatedCounter target={parseInt(stat.value.replace(/,/g, ''), 10)} />
                                {i === 0 && <span>,000 SQ.FT</span>}
                                {i === 1 && <span>+</span>}
                            </div>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="stats-image-container" data-reveal>
                <img src="/creatives/master-plan.jpg" alt="Aerial garden maze" />
            </div>
        </section>
    );
}
