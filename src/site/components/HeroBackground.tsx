import React from "react";

interface HeroBackgroundProps {
  image: string;
}

/**
 * Full-bleed background photo for page hero sections.
 * Slowly zooms in and out (Ken Burns effect) with a soft ivory overlay
 * so the hero text above stays readable.
 */
export const HeroBackground: React.FC<HeroBackgroundProps> = ({ image }) => (
  <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <img
      src={image}
      alt=""
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="kb-hero w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-source-faf7ee/85 via-source-faf7ee/80 to-source-faf7ee/95" />
  </div>
);
