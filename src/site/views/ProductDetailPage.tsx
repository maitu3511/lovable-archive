import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigation } from "../context/NavigationContext";
import { PRODUCTS, BRAND_INFO, createBuyNowWhatsAppUrl, Product } from "../data/krioraData";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { ProductCard } from "../components/ProductCard";
import { SEOHead } from "../components/SEOHead";
import { MemorableTogetherSection } from "../components/MemorableTogetherSection";
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
      <div className="min-h-screen bg-source-faf7ee text-source-1b263b py-20 px-4">
        <div className="max-w-2xl mx-auto text-center bg-white border border-source-e8e2d5 rounded-3xl p-10 shadow-md">
          <Sparkles className="w-10 h-10 text-source-c94a59 mx-auto mb-4" />
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-source-1b263b">
            Product Not Found
          </h1>
          <p className="text-sm text-source-5a6b7c mt-2 mb-6">
            The product you are looking for may have been updated or moved in our catalogue.
          </p>
          <Button
            variant="source"
            size="source"
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-xs cursor-pointer"
          >
            Explore Complete Catalogue
          </Button>
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
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title={`${product.name} — Handcrafted Corporate Gift | KRIORA`}
        description={product.description}
        canonicalPath={`/product/${product.id}`}
        ogImage={product.image}
        ogType="product"
        keywords={`${product.name}, ${product.categoryLabel}, corporate gift, personalized merchandise, KRIORA`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          image: product.image.startsWith("http")
            ? product.image
            : `https://kriora.in${product.image}`,
          description: product.description,
          category: product.categoryLabel,
          brand: {
            "@type": "Brand",
            name: "KRIORA",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "500.00",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: "KRIORA",
            },
          },
        }}
      />

      {/* Breadcrumb Navigation */}
      <div className="border-b border-source-eae4d6 bg-source-faf7ee py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-source-5a6b7c">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
          <Button
            variant="source"
            size="source"
            onClick={() => navigate("/")}
            className="hover:text-source-c94a59 transition-colors cursor-pointer"
          >
            Home
          </Button>
          <ChevronRight className="w-3 h-3 text-source-8a9bb5" />
          <Button
            variant="source"
            size="source"
            onClick={() => navigate("/products")}
            className="hover:text-source-c94a59 transition-colors cursor-pointer"
          >
            Products
          </Button>
          <ChevronRight className="w-3 h-3 text-source-8a9bb5" />
          <Button
            variant="source"
            size="source"
            onClick={() => navigate(`/products/${product.category}`)}
            className="hover:text-source-c94a59 transition-colors cursor-pointer"
          >
            {product.categoryLabel}
          </Button>
          <ChevronRight className="w-3 h-3 text-source-8a9bb5" />
          <span className="text-source-1b263b font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Button
            variant="source"
            size="source"
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-source-5a6b7c hover:text-source-c94a59 mb-8 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Collections</span>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* Left Column: Product Imagery Frame */}
            <div className="lg:col-span-6 space-y-4 reveal-on-scroll reveal-from-left delay-100">
              <div className="relative aspect-[4/3] bg-white rounded-3xl border border-source-e8e2d5 overflow-hidden shadow-lg card-hover-lift">
                {!imageError ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-source-f4f0e4 p-8 text-center">
                    <Sparkles className="w-12 h-12 text-source-c94a59 mb-3" />
                    <span className="text-sm text-source-5a6b7c font-semibold">{product.name}</span>
                  </div>
                )}

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-source-c94a59 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg border border-source-e8e2d5 shadow-xs">
                    {product.categoryLabel}
                  </span>
                </div>

                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold tracking-wider uppercase text-source-1b263b bg-source-eceefb/95 backdrop-blur-sm px-3 py-1 rounded-lg border border-source-d8dcf5 shadow-xs">
                      Corporate Flagship
                    </span>
                  </div>
                )}
              </div>

              {/* B2B Assurance Bar */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-white border border-source-e8e2d5 rounded-2xl text-center text-xs shadow-xs">
                <div className="space-y-1">
                  <ShieldCheck className="w-4 h-4 text-source-c94a59 mx-auto" />
                  <p className="font-bold text-source-1b263b">Authentic Materials</p>
                  <p className="text-[11px] text-source-8a9bb5">Handcrafted Quality</p>
                </div>
                <div className="space-y-1 border-x border-source-f0ebe1">
                  <Package className="w-4 h-4 text-source-c94a59 mx-auto" />
                  <p className="font-bold text-source-1b263b">Custom Packaging</p>
                  <p className="text-[11px] text-source-8a9bb5">Rigid Presentation Boxes</p>
                </div>
                <div className="space-y-1">
                  <Truck className="w-4 h-4 text-source-c94a59 mx-auto" />
                  <p className="font-bold text-source-1b263b">Pan-India Delivery</p>
                  <p className="text-[11px] text-source-8a9bb5">Doorstep & Batch</p>
                </div>
              </div>
            </div>

            {/* Right Column: Specifications & Actions */}
            <div className="lg:col-span-6 space-y-6 reveal-on-scroll reveal-from-right delay-150">
              <div>
                <span className="text-xs font-bold text-source-c94a59 uppercase tracking-widest block mb-1">
                  KRIORA Catalogue
                </span>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl text-source-1b263b font-bold leading-tight">
                  {product.name}
                </h1>
                <p className="mt-4 text-sm sm:text-base text-source-475569 leading-relaxed font-body">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-4 pt-2">
                {/* Materials & Craftsmanship */}
                <div className="bg-white border border-source-e8e2d5 rounded-2xl p-4.5 space-y-2 shadow-2xs">
                  <h3 className="text-xs font-bold text-source-1b263b uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-source-c94a59" />
                    <span>Materials & Craftsmanship</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-source-475569 pl-2">
                    {product.materials.map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-source-c94a59 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Custom Branding Options */}
                <div className="bg-white border border-source-e8e2d5 rounded-2xl p-4.5 space-y-2 shadow-2xs">
                  <h3 className="text-xs font-bold text-source-1b263b uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-source-c94a59" />
                    <span>Corporate Branding & Customisation</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-source-475569 pl-2">
                    {product.customisationOptions.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-source-c94a59 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Occasions */}
                <div className="bg-white border border-source-e8e2d5 rounded-2xl p-4.5 space-y-1.5 shadow-2xs">
                  <h3 className="text-xs font-bold text-source-1b263b uppercase tracking-wider flex items-center gap-2">
                    <Building className="w-4 h-4 text-source-c94a59" />
                    <span>Recommended Business Occasions</span>
                  </h3>
                  <p className="text-xs text-source-475569 pl-2 leading-relaxed">
                    {product.bestFor}
                  </p>
                </div>
              </div>

              {/* DIRECT BUY NOW ACTION */}
              <div className="pt-3">
                <a
                  href={buyNowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-source-25d366 hover:bg-source-20bd5a text-white text-base font-bold uppercase tracking-wider rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer"
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
        <section className="py-16 border-t border-source-eae4d6 bg-source-f4f0e4/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 reveal-on-scroll reveal-from-top">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-source-c94a59">
                  From The Same Collection
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-source-1b263b mt-0.5">
                  More in {product.categoryLabel}
                </h2>
              </div>
              <Button
                variant="source"
                size="source"
                onClick={() => navigate(`/products/${product.category}`)}
                className="text-xs font-bold uppercase tracking-wider text-source-c94a59 hover:underline cursor-pointer"
              >
                View Collection
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, rIdx) => (
                <div
                  key={p.id}
                  className={`reveal-on-scroll reveal-from-bottom delay-${(rIdx + 1) * 100} h-full`}
                >
                  <ProductCard
                    product={p}
                    onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Memorable Together Section */}
      <MemorableTogetherSection />
    </div>
  );
};
