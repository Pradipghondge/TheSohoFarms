interface MediaBlockProps {
  src: string;
  alt: string;
  className?: string;
  contain?: boolean;
}

export function MediaBlock({
  src,
  alt,
  className = "",
  contain = false
}: MediaBlockProps) {
  return (
    <div
      className={`media-block ${contain ? 'media-block-contain' : ''} ${className}`}
      data-reveal
    >
      <img src={src} alt={alt} className="media-block-img" />
      <div className="media-block-overlay" />
    </div>
  );
}
