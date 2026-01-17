import React from "react";

interface BackgroundImageProps {
  imageUrl?: string;
  className?: string;
  overlay?: "dark" | "light";
  overlayOpacity?: number; // 0-100
  alt?: string;
}

const BackgroundImage = ({
  imageUrl,
  className = "",
  overlay = "dark",
  overlayOpacity = 60,
  alt = "",
}: BackgroundImageProps) => {
  if (!imageUrl) return null;

  const overlayColor = overlay === "dark" ? `rgba(0,0,0,${overlayOpacity / 100})` : `rgba(255,255,255,${overlayOpacity / 100})`;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <img
        src={imageUrl}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: overlayColor }} />
    </div>
  );
};

export default BackgroundImage;
