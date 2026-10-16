import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import { BUSINESS_SOLUTIONS, BRAND_INFO, createWhatsAppUrl } from "../data/krioraData";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export const CorporateGiftingPage: React.FC = () => {
  const { navigate, openQuickEnquiry } = useNavigation();

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#1B263B]">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 border-b border-[#EAE4D6] bg-gradient-to-b from-[#ECEEFB]/40 to-[#FAF7EE]">
        <HeroBackground image={"/images/hero_corporate.jpg"} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C94A59]">
            Enterprise & HR Gifting Solutions
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1B263B]">
            Corporate Gifting Solutions
          </h1>
          <p className="text-base sm:text-lg text-[#5A6B7C] max-w-2xl mx-auto leading-relaxed">
            Thoughtfully curated corporate gifting programmes for employee milestones, onboarding
            kits, festive celebrations, client appreciation, and creative team experiences.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuickEnquiry()}
              className="px-6 py-3.5 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Request Custom Proposal
            </button>
            <a
              href={createWhatsAppUrl(undefined, "Discuss bulk corporate gifting requirements")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white hover:bg-[#FAF7EE] text-[#1B263B] border border-[#D5CEBE] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Procurement Highlights */}
      <section className="py-12 bg-[#F4F0E4] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs">
              <p className="text-xs text-[#8A9BB5] font-semibold">Target Audience</p>
              <p className="text-sm sm:text-base font-bold text-[#1B263B] mt-1">HR & Procurement</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs">
              <p className="text-xs text-[#8A9BB5] font-semibold">Flexibility</p>
              <p className="text-sm sm:text-base font-bold text-[#1B263B] mt-1">
                Custom Tiered Budgets
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs">
              <p className="text-xs text-[#8A9BB5] font-semibold">Branding</p>
              <p className="text-sm sm:text-base font-bold text-[#1B263B] mt-1">
                Laser Engraved & Printed
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs">
              <p className="text-xs text-[#8A9BB5] font-semibold">Dispatch</p>
              <p className="text-sm sm:text-base font-bold text-[#1B263B] mt-1">
                Hub & Doorstep Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Solutions Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {BUSINESS_SOLUTIONS.map((sol, index) => (
            <div
              key={sol.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Frame */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative rounded-3xl overflow-hidden border border-[#E8E2D5] bg-white shadow-xl group">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    referrerPolicy="no-referrer"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white border-t border-[#F0EBE1] flex items-center justify-between text-xs">
                    <span className="text-[#C94A59] font-bold">{sol.title}</span>
                    <span className="text-[#5A6B7C]">B2B Customised Solution</span>
                  </div>
                </div>
              </div>

              {/* Text & Content */}
              <div
                className={`lg:col-span-7 space-y-5 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C94A59]">
                  <span>Occasion Solution #{index + 1}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B263B]">{sol.title}</h2>

                <p className="text-sm sm:text-base text-[#5A6B7C] leading-relaxed font-body">
                  {sol.description}
                </p>

                {/* Practical Information */}
                <div className="pt-2 space-y-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-white border border-[#E8E2D5]">
                    <span className="text-[#8A9BB5] block mb-1 font-bold uppercase tracking-wider text-[11px]">
                      Recommended Catalogue Combinations:
                    </span>
                    <p className="text-[#243247] font-medium">{sol.typicalItems.join(" · ")}</p>
                  </div>

                  <div className="flex items-center gap-2 text-[#5A6B7C] text-xs">
                    <span className="text-[#8A9BB5] font-semibold">Best suited for:</span>
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
                    className="px-5 py-2.5 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Enquire for {sol.title}</span>
                  </a>

                  <button
                    onClick={() => openQuickEnquiry(sol.title)}
                    className="px-4 py-2.5 bg-white hover:bg-[#FAF7EE] text-[#1B263B] border border-[#D5CEBE] rounded-xl text-xs font-semibold transition-colors"
                  >
                    Send Specification
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Planning Callout */}
      <section className="py-20 bg-[#ECEEFB] border-t border-[#D8DCF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
            Flexible Planning
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl text-[#1B263B]">
            Discuss Your Specific Quantity, Budget & Brand Identity
          </h3>
          <p className="text-sm text-[#5A6B7C] leading-relaxed">
            Every organisation has distinct quantity requirements, budget guidelines, and internal
            brand guidelines. Reach out to discuss your timeline, and we will formulate options
            aligned with your needs.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm"
            >
              Go to Contact & Enquiry Page
            </button>
            <button
              onClick={() => navigate("/customisation")}
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-[#FAF7EE] text-[#1B263B] border border-[#D5CEBE] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              Review Customisation Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
