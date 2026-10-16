import React from "react";
import { ExternalLink } from "lucide-react";

interface MarketplaceButtonsProps {
  amazonUrl?: string;
  flipkartUrl?: string;
  meeshoUrl?: string;
  productName?: string;
  size?: "sm" | "md" | "lg";
  layout?: "horizontal" | "vertical" | "grid";
}

/**
 * Official SVG Icons for Amazon, Flipkart, and Meesho
 */
export const AmazonIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.62 16.32c-3.14 2.32-7.7 3.56-11.62 1.76-.56-.25-1.07-.63-.38-1.19 4.19-3.4 10.36-2.22 11.23-.74.22.38.07.7-.23 1.17zM14.9 14.81c-.4-.51-1.33-.24-1.99-.08-2.61.64-5.32.22-7.85-1.01-.35-.17-.66-.02-.45.31 1.78 2.87 5.7 4.09 9.06 2.72.63-.26 1.63-.84 1.23-1.94zM15.42 18.28c.18.24.41.38.69.38.25 0 .5-.11.68-.31l4.49-4.83c.33-.36.26-.85-.14-1.1-.38-.24-.89-.13-1.22.23l-3.9 4.2-1.63-1.84c-.33-.37-.84-.46-1.22-.22-.39.24-.48.73-.14 1.1l2.45 2.39z" />
  </svg>
);

export const FlipkartIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.72 3H6.28C4.47 3 3 4.47 3 6.28v11.44C3 19.53 4.47 21 6.28 21h11.44c1.81 0 3.28-1.47 3.28-3.28V6.28C21 4.47 19.53 3 17.72 3zM10.74 17.65H8.31V7.98h5.92v2.12h-3.49v1.89h3.18v2.12h-3.18v3.54z" />
  </svg>
);

export const MeeshoIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5h-2.1v-4.1c0-.9-.6-1.4-1.4-1.4s-1.4.5-1.4 1.4v4.1H9.5v-4.1c0-.9-.6-1.4-1.4-1.4s-1.4.5-1.4 1.4v4.1H4.6V8.5h2.1v1.1c.6-.8 1.5-1.2 2.5-1.2 1.2 0 2.2.6 2.8 1.6.6-1 1.6-1.6 2.8-1.6 1.7 0 3.2 1.3 3.2 3.2v3.9h-1.5z" />
  </svg>
);

export const MarketplaceButtons: React.FC<MarketplaceButtonsProps> = ({
  amazonUrl,
  flipkartUrl,
  meeshoUrl,
  productName = "Product",
  size = "md",
  layout = "horizontal",
}) => {
  // Only render buttons if at least one URL is provided and non-empty
  const hasAmazon = Boolean(amazonUrl && amazonUrl.trim().length > 0);
  const hasFlipkart = Boolean(flipkartUrl && flipkartUrl.trim().length > 0);
  const hasMeesho = Boolean(meeshoUrl && meeshoUrl.trim().length > 0);

  if (!hasAmazon && !hasFlipkart && !hasMeesho) {
    return null;
  }

  const sizeClasses = {
    sm: "py-1.5 px-2.5 text-[11px] gap-1.5",
    md: "py-2 px-3.5 text-xs gap-2",
    lg: "py-2.5 px-4 text-xs sm:text-sm gap-2.5",
  };

  const layoutClasses = {
    horizontal: "flex flex-wrap items-center gap-2",
    vertical: "flex flex-col gap-2",
    grid: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
  };

  return (
    <div className={layoutClasses[layout]}>
      {/* Buy on Amazon */}
      {hasAmazon && (
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center font-bold tracking-wide rounded-xl transition-all duration-200 bg-[#FF9900]/10 hover:bg-[#FF9900]/20 text-[#232F3E] border border-[#FF9900]/30 hover:border-[#FF9900] shadow-2xs hover:shadow-xs active:scale-[0.98] ${sizeClasses[size]}`}
          title={`Buy ${productName} on Amazon`}
        >
          <AmazonIcon className="w-4 h-4 text-[#FF9900] shrink-0" />
          <span className="font-semibold">Buy on Amazon</span>
          <ExternalLink className="w-3 h-3 text-[#232F3E]/60 shrink-0" />
        </a>
      )}

      {/* Buy on Flipkart */}
      {hasFlipkart && (
        <a
          href={flipkartUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center font-bold tracking-wide rounded-xl transition-all duration-200 bg-[#2874F0]/10 hover:bg-[#2874F0]/20 text-[#1B263B] border border-[#2874F0]/30 hover:border-[#2874F0] shadow-2xs hover:shadow-xs active:scale-[0.98] ${sizeClasses[size]}`}
          title={`Buy ${productName} on Flipkart`}
        >
          <FlipkartIcon className="w-4 h-4 text-[#2874F0] shrink-0" />
          <span className="font-semibold">Buy on Flipkart</span>
          <ExternalLink className="w-3 h-3 text-[#1B263B]/60 shrink-0" />
        </a>
      )}

      {/* Buy on Meesho */}
      {hasMeesho && (
        <a
          href={meeshoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center font-bold tracking-wide rounded-xl transition-all duration-200 bg-[#9C27B0]/10 hover:bg-[#9C27B0]/20 text-[#1B263B] border border-[#9C27B0]/30 hover:border-[#9C27B0] shadow-2xs hover:shadow-xs active:scale-[0.98] ${sizeClasses[size]}`}
          title={`Buy ${productName} on Meesho`}
        >
          <MeeshoIcon className="w-4 h-4 text-[#9C27B0] shrink-0" />
          <span className="font-semibold">Buy on Meesho</span>
          <ExternalLink className="w-3 h-3 text-[#1B263B]/60 shrink-0" />
        </a>
      )}
    </div>
  );
};
