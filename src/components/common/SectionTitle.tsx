"use client";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  align = "left"
}: SectionTitleProps) {
  return (
    <div className={`section-title ${align === "center" ? "center" : ""}`} data-reveal>
      {eyebrow ? <span data-reveal data-delay="1">{eyebrow}</span> : null}
      <h2 data-reveal data-delay="2">{title}</h2>
    </div>
  );
}
