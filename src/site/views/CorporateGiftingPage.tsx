import sourceImage0Src from "@/assets/hero_corporate.jpg";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import { BUSINESS_SOLUTIONS, BRAND_INFO, createWhatsAppUrl } from "../data/krioraData";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { SEOHead } from "../components/SEOHead";
import { MemorableTogetherSection } from "../components/MemorableTogetherSection";
const sourceImage0 = { url: sourceImage0Src };

export const CorporateGiftingPage: React.FC = () => {
  const { navigate, openQuickEnquiry } = useNavigation();

  return (
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title="Corporate Gifting Solutions — Employee Kits & VIP Keepsakes | KRIORA"
        description="Bespoke corporate gifting programs for employee onboarding, milestone celebrations, VIP client appreciation & luxury festive hampers with bulk delivery."
        canonicalPath="/corporate-gifting"
        keywords="corporate gifting solutions, employee milestone gifts, client appreciation gifts, luxury corporate hampers India, bulk gifting supplier, HR onboarding kits"
        ogImage="/images/hero_corporate.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "KRIORA Corporate Gifting Solutions",
          provider: {
            "@type": "Organization",
            name: "KRIORA",
            url: "https://kriora.in",
          },
          description:
            "Custom corporate gifting programs including employee joining kits, executive awards, festive hampers and client appreciation keepsakes.",
          areaServed: "India",
        }}
      />

      {/* Hero Header */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 border-b border-source-eae4d6 bg-gradient-to-b from-source-eceefb/40 to-source-faf7ee">
        <HeroBackground image={sourceImage0.url} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="animate-fade-in-down text-xs font-bold uppercase tracking-[0.25em] text-source-c94a59 inline-block">
            Enterprise & HR Gifting Solutions
          </span>
          <h1 className="animate-fade-in-up delay-100 font-heading text-3xl sm:text-4xl md:text-5xl text-source-1b263b text-center mx-auto">
            Corporate Gifting Solutions
          </h1>
          <p className="animate-fade-in-up delay-150 text-base sm:text-lg text-source-5a6b7c max-w-2xl mx-auto leading-relaxed text-center">
            Thoughtfully curated corporate gifting programmes for employee milestones, onboarding
            kits, festive celebrations, client appreciation, and creative team experiences.
          </p>

          <div className="animate-fade-in-up delay-250 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="source"
              size="source"
              onClick={() => openQuickEnquiry()}
              className="px-6 py-3.5 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              Request Custom Proposal
            </Button>
            <a
              href={createWhatsAppUrl(undefined, "Discuss bulk corporate gifting requirements")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white hover:bg-source-faf7ee text-source-1b263b border border-source-d5cebe rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-source-25d366" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Procurement Highlights */}
      <section className="py-12 bg-source-f4f0e4 border-b border-source-e8e2d5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="reveal-on-scroll reveal-from-bottom delay-100 p-5 rounded-2xl bg-white border border-source-e8e2d5 shadow-xs card-hover-lift">
              <p className="text-xs text-source-8a9bb5 font-semibold">Target Audience</p>
              <p className="text-sm sm:text-base font-bold text-source-1b263b mt-1">
                HR & Procurement
              </p>
            </div>
            <div className="reveal-on-scroll reveal-from-bottom delay-150 p-5 rounded-2xl bg-white border border-source-e8e2d5 shadow-xs card-hover-lift">
              <p className="text-xs text-source-8a9bb5 font-semibold">Flexibility</p>
              <p className="text-sm sm:text-base font-bold text-source-1b263b mt-1">
                Custom Tiered Budgets
              </p>
            </div>
            <div className="reveal-on-scroll reveal-from-bottom delay-200 p-5 rounded-2xl bg-white border border-source-e8e2d5 shadow-xs card-hover-lift">
              <p className="text-xs text-source-8a9bb5 font-semibold">Branding</p>
              <p className="text-sm sm:text-base font-bold text-source-1b263b mt-1">
                Laser Engraved & Printed
              </p>
            </div>
            <div className="reveal-on-scroll reveal-from-bottom delay-250 p-5 rounded-2xl bg-white border border-source-e8e2d5 shadow-xs card-hover-lift">
              <p className="text-xs text-source-8a9bb5 font-semibold">Dispatch</p>
              <p className="text-sm sm:text-base font-bold text-source-1b263b mt-1">
                Hub & Doorstep Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Solutions Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {BUSINESS_SOLUTIONS.map((sol, index) => {
            const isOdd = index % 2 === 1;
            const visualAnim = isOdd ? "reveal-from-right" : "reveal-from-left";
            const textAnim = isOdd ? "reveal-from-left delay-150" : "reveal-from-right delay-150";

            return (
              <div
                key={sol.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isOdd ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-5 ${isOdd ? "lg:order-2" : "lg:order-1"} reveal-on-scroll ${visualAnim}`}
                >
                  <div className="relative rounded-3xl overflow-hidden border border-source-e8e2d5 bg-white shadow-xl group card-hover-lift">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="p-4 bg-white border-t border-source-f0ebe1 flex items-center justify-between text-xs">
                      <span className="text-source-c94a59 font-bold">{sol.title}</span>
                      <span className="text-source-5a6b7c">B2B Customised Solution</span>
                    </div>
                  </div>
                </div>

                {/* Text & Content */}
                <div
                  className={`lg:col-span-7 space-y-5 ${isOdd ? "lg:order-1" : "lg:order-2"} reveal-on-scroll ${textAnim}`}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-source-c94a59">
                    <span>Occasion Solution #{index + 1}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-source-1b263b">{sol.title}</h2>

                  <p className="text-sm sm:text-base text-source-5a6b7c leading-relaxed font-body">
                    {sol.description}
                  </p>

                  {/* Practical Information */}
                  <div className="pt-2 space-y-3 text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-white border border-source-e8e2d5">
                      <span className="text-source-8a9bb5 block mb-1 font-bold uppercase tracking-wider text-[11px]">
                        Recommended Catalogue Combinations:
                      </span>
                      <p className="text-source-243247 font-medium">
                        {sol.typicalItems.join(" · ")}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-source-5a6b7c text-xs">
                      <span className="text-source-8a9bb5 font-semibold">Best suited for:</span>
                      <span>{sol.suitableFor}</span>
                    </div>
                  </div>

                  {/* Individual Solution Enquiry CTA */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={createWhatsAppUrl(
                        sol.title,
                        `Hello Namrata, we are planning for ${sol.title}. Please share feasible options and customized combinations.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>Enquire for {sol.title}</span>
                    </a>

                    <Button
                      variant="source"
                      size="source"
                      onClick={() => openQuickEnquiry(sol.title)}
                      className="px-4 py-2.5 bg-white hover:bg-source-faf7ee text-source-1b263b border border-source-d5cebe rounded-xl text-xs font-semibold transition-colors"
                    >
                      Send Specification
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Memorable Section */}
      <MemorableTogetherSection />
    </div>
  );
};
