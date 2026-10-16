import { Button } from "@/components/ui/button";
import React from "react";
import {
  Product,
  createBuyNowWhatsAppUrl,
  createWhatsAppUrl,
  BRAND_INFO,
} from "../data/krioraData";
import { X, Check, Sparkles, Building, Layers, ShoppingBag } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { MarketplaceButtons } from "./MarketplaceButtons";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForBulkForm?: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onSelectForBulkForm,
}) => {
  if (!product) return null;

  const buyNowUrl = createBuyNowWhatsAppUrl(product);
  const bulkWaUrl = createWhatsAppUrl(product.name);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white border border-source-e8e2d5 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl text-source-1b263b"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="source"
          size="source"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-source-faf7ee text-source-1b263b border border-source-e8e2d5 shadow-xs transition-colors cursor-pointer"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[88vh] overflow-y-auto">
          {/* Product Image */}
          <div className="relative aspect-square md:aspect-auto bg-source-faf7ee border-b md:border-b-0 md:border-r border-source-eae4d6">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4">
              <span className="text-xs font-bold tracking-wider uppercase text-source-c94a59 bg-white/95 px-2.5 py-1 rounded-md border border-source-e8e2d5 shadow-xs">
                {product.categoryLabel}
              </span>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              <p className="text-xs text-source-c94a59 font-bold tracking-widest uppercase">
                KRIORA Product Details
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-source-1b263b mt-1">
                {product.name}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-source-5a6b7c leading-relaxed font-body">
                {product.description}
              </p>

              {/* Factual Materials */}
              <div className="mt-5 space-y-3.5 text-xs">
                <div>
                  <h4 className="text-source-1b263b font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-source-c94a59" />
                    <span>Materials & Craftsmanship</span>
                  </h4>
                  <ul className="space-y-1 text-source-475569 pl-1">
                    {product.materials.map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-source-c94a59 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Customisation Possibilities */}
                <div>
                  <h4 className="text-source-1b263b font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-source-c94a59" />
                    <span>Customisation Options</span>
                  </h4>
                  <ul className="space-y-1 text-source-475569 pl-1">
                    {product.customisationOptions.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-source-c94a59 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For Occasions */}
                <div className="pt-0.5">
                  <h4 className="text-source-1b263b font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-source-c94a59" />
                    <span>Recommended For</span>
                  </h4>
                  <p className="text-source-475569 pl-1 leading-normal">{product.bestFor}</p>
                </div>
              </div>
            </div>

            {/* Primary Direct BUY NOW Action */}
            <div className="pt-4 border-t border-source-f0ebe1">
              <a
                href={buyNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-source-25d366 hover:bg-source-20bd5a text-white text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-[0.99] uppercase tracking-wider"
                title={`Buy Now ${product.name} on WhatsApp`}
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Buy Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
