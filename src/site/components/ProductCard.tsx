import { Button } from "@/components/ui/button";
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
    <div className="group relative bg-white hover:bg-source-fdfbf7 border border-source-e8e2d5 hover:border-source-c94a59/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-xs hover:shadow-xl card-hover-lift">
      {/* Product Image Frame */}
      <div
        onClick={handleCardClick}
        className="relative aspect-[4/3] bg-source-f4f0e4 overflow-hidden border-b border-source-eae4d6 cursor-pointer"
      >
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-source-f4f0e4 p-6 text-center">
            <Sparkles className="w-8 h-8 text-source-c94a59 mb-2" />
            <span className="text-xs text-source-5a6b7c font-medium">{product.name}</span>
          </div>
        )}

        {/* Category Label */}
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-bold tracking-wider uppercase text-source-c94a59 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-source-e8e2d5 shadow-2xs">
            {product.categoryLabel}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex flex-col flex-grow">
        <h3
          onClick={handleCardClick}
          className="text-base sm:text-lg font-bold text-source-1b263b group-hover:text-source-c94a59 transition-colors leading-snug cursor-pointer"
        >
          {product.name}
        </h3>

        {/* Factual Catalog Description */}
        <p className="mt-2 text-xs sm:text-sm text-source-5a6b7c leading-relaxed line-clamp-3 flex-grow font-body">
          {product.description}
        </p>

        {/* Materials & Customisation Highlights */}
        <div className="mt-4 pt-3 border-t border-source-f0ebe1 text-xs text-source-5a6b7c space-y-1">
          <div className="flex items-center gap-1.5 text-source-243247">
            <span className="text-source-8a9bb5 font-medium">Materials:</span>
            <span className="truncate">{product.materials.join(", ")}</span>
          </div>
          <div className="flex items-center gap-1.5 text-source-5a6b7c">
            <span className="text-source-8a9bb5 font-medium">Branding:</span>
            <span className="truncate">{product.customisationOptions[0]}</span>
          </div>
        </div>

        {/* Action Buttons: View Details & Direct Buy Now via WhatsApp */}
        <div className="mt-5 pt-3 border-t border-source-f0ebe1 flex items-center gap-2">
          {/* Primary View Details Button - navigates to dedicated page */}
          <Button
            variant="source"
            size="source"
            onClick={handleCardClick}
            className="flex-1 py-2.5 px-3 bg-source-faf7ee hover:bg-source-c94a59 text-source-1b263b hover:text-white border border-source-d5cebe hover:border-source-c94a59 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs group/btn cursor-pointer"
            title={`View full details of ${product.name}`}
          >
            <Eye className="w-4 h-4 text-source-c94a59 group-hover/btn:text-white transition-colors" />
            <span>View Details</span>
          </Button>

          {/* Quick Buy Now via WhatsApp Button */}
          <a
            href={buyNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 bg-source-25d366 hover:bg-source-20bd5a text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98]"
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
