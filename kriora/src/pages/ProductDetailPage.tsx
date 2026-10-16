import React, { useState } from "react";
import { useNavigation } from "../context/NavigationContext";
import { PRODUCTS, BRAND_INFO, createBuyNowWhatsAppUrl, Product } from "../data/krioraData";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { ProductCard } from "../components/ProductCard";
import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Check,
  Building,
  Phone,
  Mail,
  ShieldCheck,
  Package,
  Truck,
} from "lucide-react";

interface ProductDetailPageProps {
  productId: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const { navigate } = useNavigation();
  const [imageError, setImageError] = useState(false);

  // Locate the product in catalog
  const product: Product | undefined = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF7EE] text-[#1B263B] py-20 px-4">
        <div className="max-w-2xl mx-auto text-center bg-white border border-[#E8E2D5] rounded-3xl p-10 shadow-md">
          <Sparkles className="w-10 h-10 text-[#C94A59] mx-auto mb-4" />
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#1B263B]">
            Product Not Found
          </h1>
          <p className="text-sm text-[#5A6B7C] mt-2 mb-6">
            The product you are looking for may have been updated or moved in our catalogue.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-[#C94A59] hover:bg-[#B33947] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-xs cursor-pointer"
          >
            Explore Complete Catalogue
          </button>
        </div>
      </div>
    );
  }

  const buyNowUrl = createBuyNowWhatsAppUrl(product);

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#1B263B]">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-[#EAE4D6] bg-[#FAF7EE] py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-[#5A6B7C]">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
          <button
            onClick={() => navigate("/")}
            className="hover:text-[#C94A59] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-[#8A9BB5]" />
          <button
            onClick={() => navigate("/products")}
            className="hover:text-[#C94A59] transition-colors cursor-pointer"
          >
            Products
          </button>
          <ChevronRight className="w-3 h-3 text-[#8A9BB5]" />
          <button
            onClick={() => navigate(`/products/${product.category}`)}
            className="hover:text-[#C94A59] transition-colors cursor-pointer"
          >
            {product.categoryLabel}
          </button>
          <ChevronRight className="w-3 h-3 text-[#8A9BB5]" />
          <span className="text-[#1B263B] font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#5A6B7C] hover:text-[#C94A59] mb-8 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Collections</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* Left Column: Product Imagery Frame */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] bg-white rounded-3xl border border-[#E8E2D5] overflow-hidden shadow-lg">
                {!imageError ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#F4F0E4] p-8 text-center">
                    <Sparkles className="w-12 h-12 text-[#C94A59] mb-3" />
                    <span className="text-sm text-[#5A6B7C] font-semibold">{product.name}</span>
                  </div>
                )}

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-[#C94A59] bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg border border-[#E8E2D5] shadow-xs">
                    {product.categoryLabel}
                  </span>
                </div>

                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#1B263B] bg-[#ECEEFB]/95 backdrop-blur-sm px-3 py-1 rounded-lg border border-[#D8DCF5] shadow-xs">
                      Corporate Flagship
                    </span>
                  </div>
                )}
              </div>

              {/* B2B Assurance Bar */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-white border border-[#E8E2D5] rounded-2xl text-center text-xs">
                <div className="space-y-1">
                  <ShieldCheck className="w-4 h-4 text-[#C94A59] mx-auto" />
                  <p className="font-bold text-[#1B263B]">Authentic Materials</p>
                  <p className="text-[11px] text-[#8A9BB5]">Handcrafted Quality</p>
                </div>
                <div className="space-y-1 border-x border-[#F0EBE1]">
                  <Package className="w-4 h-4 text-[#C94A59] mx-auto" />
                  <p className="font-bold text-[#1B263B]">Custom Packaging</p>
                  <p className="text-[11px] text-[#8A9BB5]">Rigid Presentation Boxes</p>
                </div>
                <div className="space-y-1">
                  <Truck className="w-4 h-4 text-[#C94A59] mx-auto" />
                  <p className="font-bold text-[#1B263B]">Pan-India Delivery</p>
                  <p className="text-[11px] text-[#8A9BB5]">Doorstep & Batch</p>
                </div>
              </div>
            </div>

            {/* Right Column: Specifications & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#C94A59] uppercase tracking-widest block mb-1">
                  KRIORA Catalogue
                </span>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1B263B] font-bold leading-tight">
                  {product.name}
                </h1>
                <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed font-body">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-4 pt-2">
                {/* Materials & Craftsmanship */}
                <div className="bg-white border border-[#E8E2D5] rounded-2xl p-4.5 space-y-2 shadow-2xs">
                  <h3 className="text-xs font-bold text-[#1B263B] uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#C94A59]" />
                    <span>Materials & Craftsmanship</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-[#475569] pl-2">
                    {product.materials.map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C94A59] shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Custom Branding Options */}
                <div className="bg-white border border-[#E8E2D5] rounded-2xl p-4.5 space-y-2 shadow-2xs">
                  <h3 className="text-xs font-bold text-[#1B263B] uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C94A59]" />
                    <span>Corporate Branding & Customisation</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-[#475569] pl-2">
                    {product.customisationOptions.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C94A59] shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Occasions */}
                <div className="bg-white border border-[#E8E2D5] rounded-2xl p-4.5 space-y-1.5 shadow-2xs">
                  <h3 className="text-xs font-bold text-[#1B263B] uppercase tracking-wider flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#C94A59]" />
                    <span>Recommended Business Occasions</span>
                  </h3>
                  <p className="text-xs text-[#475569] pl-2 leading-relaxed">{product.bestFor}</p>
                </div>
              </div>

              {/* DIRECT BUY NOW ACTION */}
              <div className="pt-3">
                <a
                  href={buyNowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white text-base font-bold uppercase tracking-wider rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer"
                  title={`Buy Now ${product.name} on WhatsApp`}
                >
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                  <span>Buy Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products from the same collection */}
      {relatedProducts.length > 0 && (
        <section className="py-16 border-t border-[#EAE4D6] bg-[#F4F0E4]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C94A59]">
                  From The Same Collection
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1B263B] mt-0.5">
                  More in {product.categoryLabel}
                </h2>
              </div>
              <button
                onClick={() => navigate(`/products/${product.category}`)}
                className="text-xs font-bold uppercase tracking-wider text-[#C94A59] hover:underline cursor-pointer"
              >
                View Collection
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
