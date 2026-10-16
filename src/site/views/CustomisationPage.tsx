import sourceImage0Src from "@/assets/hero_customisation.jpg";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import {
  CUSTOMISATION_SERVICES,
  PRODUCTS,
  BRAND_INFO,
  createWhatsAppUrl,
  Product,
} from "../data/krioraData";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";
import { ShieldAlert, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { SEOHead } from "../components/SEOHead";
import { MemorableTogetherSection } from "../components/MemorableTogetherSection";
const sourceImage0 = { url: sourceImage0Src };

export const CustomisationPage: React.FC = () => {
  const { openQuickEnquiry } = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const customisableShowcase = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title="Custom Corporate Gifts & Logo Personalisation Services | KRIORA"
        description="Discover precision laser engraving, metallic foil embossing, custom packaging & branded gift hampers for companies of all sizes across India."
        canonicalPath="/customisation"
        keywords="custom corporate gifts, laser engraved wooden gifts, logo branded diaries, personalized corporate merchandise, bespoke gift curation, customized gift packaging"
        ogImage="/images/hero_customisation.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Corporate Gift Customisation & Branding",
          provider: {
            "@type": "Organization",
            name: "KRIORA",
            url: "https://kriora.in",
          },
          serviceType: "Corporate Customisation, Laser Engraving & Foil Stamping",
          areaServed: "India",
        }}
      />

      {/* Hero Header */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 border-b border-source-eae4d6 bg-gradient-to-b from-source-eceefb/40 to-source-faf7ee">
        <HeroBackground image={sourceImage0.url} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="animate-fade-in-down text-xs font-bold uppercase tracking-[0.25em] text-source-c94a59 inline-block">
            Bespoke Branding & Personalisation
          </span>
          <h1 className="animate-fade-in-left delay-100 font-heading text-3xl sm:text-4xl md:text-5xl text-source-1b263b text-center mx-auto">
            Your Brand. Your Occasion. Your Personal Touch.
          </h1>
          <p className="animate-fade-in-right delay-200 text-base sm:text-lg text-source-5a6b7c max-w-2xl mx-auto leading-relaxed font-body text-center">
            “Create gifting experiences that reflect your organisation’s identity, occasion and
            message. Discuss your ideas with KRIORA to explore suitable products and personalisation
            possibilities.”
          </p>

          <div className="animate-fade-in-up delay-300 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={createWhatsAppUrl(
                undefined,
                "We would like to discuss a custom order with corporate branding.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Discuss a Custom Order on WhatsApp</span>
            </a>

            <Button
              variant="source"
              size="source"
              onClick={() => openQuickEnquiry("Custom Branding & Personalisation")}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-source-faf7ee text-source-1b263b border border-source-d5cebe rounded-xl text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
            >
              Submit Custom Specification
            </Button>
          </div>
        </div>
      </section>

      {/* Feasibility Advisory Notice */}
      <section className="py-6 bg-source-f4f0e4 border-b border-source-e8e2d5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-on-scroll reveal-from-bottom delay-100 p-4 rounded-2xl bg-white border border-source-e8e2d5 flex items-start gap-3 shadow-xs card-hover-lift">
            <ShieldAlert className="w-5 h-5 text-source-c94a59 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-source-5a6b7c leading-relaxed">
              <strong className="text-source-c94a59">Customisation Feasibility Notice:</strong> The
              techniques described below represent personalisation possibilities consistent with our
              product catalogue and brochure. Exact feasibility, minimum production quantities, lead
              times, and branding techniques depend on the specific product selected and confirmed
              project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Customisation Possibilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-12 text-center reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 block">
              Available Techniques & Services
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
              How We Bring Your Brand to Life
            </h2>
            <p className="text-sm text-source-5a6b7c mt-2 max-w-xl mx-auto">
              From understated wood engravings to premium gold-foiled packaging boxes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMISATION_SERVICES.map((serv, index) => {
              const colMod = index % 4;
              const animClass =
                colMod === 0
                  ? "reveal-from-left delay-100"
                  : colMod === 1
                    ? "reveal-from-bottom delay-150"
                    : colMod === 2
                      ? "reveal-from-bottom delay-200"
                      : "reveal-from-right delay-250";

              return (
                <div
                  key={serv.title}
                  className={`reveal-on-scroll ${animClass} bg-white border border-source-e8e2d5 hover:border-source-c94a59/40 rounded-2xl p-6 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md card-hover-lift`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-source-eceefb border border-source-b4b9df flex items-center justify-center text-source-c94a59 mb-4 font-bold font-mono text-xs">
                      0{index + 1}
                    </div>
                    <h3 className="text-base font-bold text-source-1b263b mb-2 group-hover:text-source-c94a59 transition-colors">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-source-5a6b7c leading-relaxed font-body">
                      {serv.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-source-f0ebe1">
                    <a
                      href={createWhatsAppUrl(
                        serv.title,
                        `Inquiry about ${serv.title} options for our organisation`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-source-c94a59 hover:text-source-b33947 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Discuss this technique</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Showcase: Catalogue Products */}
      <section className="py-20 bg-source-f4f0e4 border-y border-source-e8e2d5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 block">
              Product Demonstrations
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
              Selected Catalogue Products Primed for Customisation
            </h2>
            <p className="text-sm text-source-5a6b7c mt-2 max-w-xl mx-auto">
              Browse actual catalogue items frequently selected by businesses for logo engraving,
              employee personalization, and executive gift sets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customisableShowcase.map((p, pIdx) => (
              <div
                key={p.id}
                className={`reveal-on-scroll reveal-from-bottom delay-${(pIdx + 1) * 100} h-full`}
              >
                <ProductCard
                  product={p}
                  onOpenDetails={(item) => setSelectedProduct(item)}
                  onSelectForEnquiry={(item) => openQuickEnquiry(item.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <MemorableTogetherSection />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForBulkForm={(pName) => openQuickEnquiry(pName)}
      />
    </div>
  );
};
