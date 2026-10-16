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

export const CustomisationPage: React.FC = () => {
  const { openQuickEnquiry } = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const customisableShowcase = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#1B263B]">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 border-b border-[#EAE4D6] bg-gradient-to-b from-[#ECEEFB]/40 to-[#FAF7EE]">
        <HeroBackground image={"/images/hero_customisation.jpg"} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C94A59]">
            Bespoke Branding & Personalisation
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1B263B]">
            Your Brand. Your Occasion. Your Personal Touch.
          </h1>
          <p className="text-base sm:text-lg text-[#5A6B7C] max-w-2xl mx-auto leading-relaxed font-body">
            “Create gifting experiences that reflect your organisation’s identity, occasion and
            message. Discuss your ideas with KRIORA to explore suitable products and personalisation
            possibilities.”
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={createWhatsAppUrl(
                undefined,
                "We would like to discuss a custom order with corporate branding.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Discuss a Custom Order on WhatsApp</span>
            </a>

            <button
              onClick={() => openQuickEnquiry("Custom Branding & Personalisation")}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#FAF7EE] text-[#1B263B] border border-[#D5CEBE] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              Submit Custom Specification
            </button>
          </div>
        </div>
      </section>

      {/* Feasibility Advisory Notice */}
      <section className="py-6 bg-[#F4F0E4] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-2xl bg-white border border-[#E8E2D5] flex items-start gap-3 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-[#C94A59] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#5A6B7C] leading-relaxed">
              <strong className="text-[#C94A59]">Customisation Feasibility Notice:</strong> The
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
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
              Available Techniques & Services
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#1B263B] mt-2">
              How We Bring Your Brand to Life
            </h2>
            <p className="text-sm text-[#5A6B7C] mt-2">
              From understated wood engravings to premium gold-foiled packaging boxes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMISATION_SERVICES.map((serv, index) => (
              <div
                key={serv.title}
                className="bg-white border border-[#E8E2D5] hover:border-[#C94A59]/40 rounded-2xl p-6 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ECEEFB] border border-[#B4B9DF] flex items-center justify-center text-[#C94A59] mb-4 font-bold font-mono text-xs">
                    0{index + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#1B263B] mb-2 group-hover:text-[#C94A59] transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-[#5A6B7C] leading-relaxed font-body">
                    {serv.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F0EBE1]">
                  <a
                    href={createWhatsAppUrl(
                      serv.title,
                      `Inquiry about ${serv.title} options for our organisation`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#C94A59] hover:text-[#B33947] flex items-center gap-1"
                  >
                    <span>Discuss this technique</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase: Catalogue Products */}
      <section className="py-20 bg-[#F4F0E4] border-y border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
              Product Demonstrations
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#1B263B] mt-2">
              Selected Catalogue Products Primed for Customisation
            </h2>
            <p className="text-sm text-[#5A6B7C] mt-2">
              Browse actual catalogue items frequently selected by businesses for logo engraving,
              employee personalization, and executive gift sets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customisableShowcase.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onOpenDetails={(item) => setSelectedProduct(item)}
                onSelectForEnquiry={(item) => openQuickEnquiry(item.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-20 bg-[#FAF7EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl text-[#1B263B]">
            Have a Bespoke Idea or Unique Brand Vector?
          </h3>
          <p className="text-sm text-[#5A6B7C] max-w-xl mx-auto">
            Send us your brand guidelines, vector logo format, and target date. We will evaluate
            technical feasibility and propose product mockups.
          </p>

          <div className="pt-2">
            <a
              href={createWhatsAppUrl(
                "Custom Branding Project",
                "We have a bespoke idea and would like to share our brand logo for mockup",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Discuss a Custom Order with Namrata Adhvaryu</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForBulkForm={(pName) => openQuickEnquiry(pName)}
      />
    </div>
  );
};
