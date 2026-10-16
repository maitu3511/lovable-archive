import React, { useState } from "react";
import { useNavigation } from "../context/NavigationContext";
import { Product, createBuyNowWhatsAppUrl } from "../data/krioraData";
import { Eye, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface ProductCardProps {
  product: Product;
  onOpenDetails?: (product: Product) => void;
  onSelectForEnquiry?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { navigate } = useNavigation();
  const [imageError, setImageError] = useState(false);
  const buyNowUrl = createBuyNowWhatsAppUrl(product);

  const handleCardClick = () => {
    if (onOpenDetails) {
      onOpenDetails(product);
    } else {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <div className="group relative bg-white hover:bg-[#FDFBF7] border border-[#E8E2D5] hover:border-[#C94A59]/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-xs hover:shadow-xl">
      {/* Product Image Frame */}
      <div
        onClick={handleCardClick}
        className="relative aspect-[4/3] bg-[#F4F0E4] overflow-hidden border-b border-[#EAE4D6] cursor-pointer"
      >
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#F4F0E4] p-6 text-center">
            <Sparkles className="w-8 h-8 text-[#C94A59] mb-2" />
            <span className="text-xs text-[#5A6B7C] font-medium">{product.name}</span>
          </div>
        )}

        {/* Category Label */}
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#C94A59] bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-[#E8E2D5] shadow-2xs">
            {product.categoryLabel}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex flex-col flex-grow">
        <h3
          onClick={handleCardClick}
          className="text-base sm:text-lg font-bold text-[#1B263B] group-hover:text-[#C94A59] transition-colors leading-snug cursor-pointer"
        >
          {product.name}
        </h3>

        {/* Factual Catalog Description */}
        <p className="mt-2 text-xs sm:text-sm text-[#5A6B7C] leading-relaxed line-clamp-3 flex-grow font-body">
          {product.description}
        </p>

        {/* Materials & Customisation Highlights */}
        <div className="mt-4 pt-3 border-t border-[#F0EBE1] text-xs text-[#5A6B7C] space-y-1">
          <div className="flex items-center gap-1.5 text-[#243247]">
            <span className="text-[#8A9BB5] font-medium">Materials:</span>
            <span className="truncate">{product.materials.join(", ")}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#5A6B7C]">
            <span className="text-[#8A9BB5] font-medium">Branding:</span>
            <span className="truncate">{product.customisationOptions[0]}</span>
          </div>
        </div>

        {/* Action Buttons: View Details & Direct Buy Now via WhatsApp */}
        <div className="mt-5 pt-3 border-t border-[#F0EBE1] flex items-center gap-2">
          {/* Primary View Details Button - navigates to dedicated page */}
          <button
            onClick={handleCardClick}
            className="flex-1 py-2.5 px-3 bg-[#FAF7EE] hover:bg-[#C94A59] text-[#1B263B] hover:text-white border border-[#D5CEBE] hover:border-[#C94A59] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs group/btn cursor-pointer"
            title={`View full details of ${product.name}`}
          >
            <Eye className="w-4 h-4 text-[#C94A59] group-hover/btn:text-white transition-colors" />
            <span>View Details</span>
          </button>

          {/* Quick Buy Now via WhatsApp Button */}
          <a
            href={buyNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98]"
            title={`Buy Now ${product.name} on WhatsApp`}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
            <span>Buy Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
