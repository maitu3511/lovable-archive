import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import { PROCESS_STEPS, WHY_CHOOSE_KRIORA, createWhatsAppUrl } from "../data/krioraData";
import { Sparkles, ShieldCheck, Palette } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export const HowItWorksPage: React.FC = () => {
  const { openQuickEnquiry } = useNavigation();

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#1B263B]">
      {/* Header (Matching Brochure Left Fold) */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 border-b border-[#EAE4D6] bg-gradient-to-b from-[#ECEEFB]/40 to-[#FAF7EE]">
        <HeroBackground image={"/images/hero_how_it_works.jpg"} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C94A59]">
            How It Works
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1B263B]">
            The Simple Ordering Journey
          </h1>
          <p className="text-[#C94A59] font-semibold text-base">
            Clear Steps from your brief to the final delivery
          </p>
          <p className="text-base text-[#5A6B7C] max-w-2xl mx-auto leading-relaxed font-body">
            From initial concept discussion to final on-time delivery at your corporate office, our
            structured process ensures complete clarity at every stage.
          </p>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-20 border-b border-[#EAE4D6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white border border-[#E8E2D5] rounded-3xl p-8 sm:p-10 relative overflow-hidden transition-all duration-300 hover:border-[#C94A59]/40 shadow-xs hover:shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-3">
                    <span className="font-heading text-5xl sm:text-6xl text-[#C94A59] block font-bold">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8A9BB5] block mt-1">
                      Stage {idx + 1}
                    </span>
                  </div>

                  <div className="md:col-span-6 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B263B]">{step.title}</h3>
                    <p className="text-sm text-[#5A6B7C] leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>

                  <div className="md:col-span-3 pt-4 md:pt-0 md:border-l md:border-[#F0EBE1] md:pl-6 text-xs text-[#5A6B7C]">
                    <p className="text-[#8A9BB5] font-bold uppercase tracking-wider mb-1">
                      Key Outcome:
                    </p>
                    <p className="text-[#1B263B] font-semibold">{step.deliverable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Value Propositions (Why Choose KRIORA) */}
      <section className="py-20 bg-[#ECEEFB] border-b border-[#D8DCF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
              The KRIORA Commitment
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#1B263B] mt-2">
              Why Choose KRIORA
            </h2>
            <p className="text-[#5A6B7C] text-sm mt-2">
              Clear commitments that guide every corporate engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_CHOOSE_KRIORA.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-[#DFE3F7] rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ECEEFB] border border-[#B4B9DF] flex items-center justify-center text-[#C94A59] mb-6">
                    {pillar.title === "Thoughtful Personalisation" && (
                      <Sparkles className="w-6 h-6" />
                    )}
                    {pillar.title === "Reliable Fulfilment" && <ShieldCheck className="w-6 h-6" />}
                    {pillar.title === "Distinct Aesthetic" && <Palette className="w-6 h-6" />}
                  </div>

                  <h3 className="text-lg font-bold text-[#1B263B] mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5A6B7C] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ending Banner (Exact Match to Brochure Ending) */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-[#D8DCF5]">
        {/* Background Image Matching Handcrafted Gifting Content */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bespoke_gifts_1791888487226.jpg"
            alt="Handcrafted Gifting Suite"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep Luxurious Warm Tint Overlay for Crystal Clear Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#101726]/90 via-[#101726]/85 to-[#101726]/92 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#E5A83B] bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/15">
            Start Your Business Enquiry
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            “Let’s create something memorable together.”
          </h2>
          <p className="text-[#FFB4BA] text-base sm:text-lg font-semibold">Your occasion. Our thoughtful touch.</p>
          <p className="text-[#E2E8F0] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-body">
            Connect with Namrata Adhvaryu to discuss your organisation’s upcoming requirements,
            deadlines, and bespoke branding aspirations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuickEnquiry()}
              className="w-full sm:w-auto px-8 py-4 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer"
            >
              Start Your Enquiry
            </button>

            <a
              href={createWhatsAppUrl(
                undefined,
                "Hello Namrata, let us begin a corporate gifting consultation for our company.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-[#FAF7EE] text-[#1B263B] border border-white/20 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md active:scale-[0.99]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp: {BRAND_INFO.phone}</span>
            </a>
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer backdrop-blur-sm"
            >
              Contact Desk
            </button>
          </div>

          <p className="text-xs text-[#94A3B8] pt-2">
            Directly handled by {BRAND_INFO.representative} · {BRAND_INFO.email}
          </p>
        </div>
      </section>

      {/* Dedicated breathing space with website background color (#FAF7EE) before footer */}
      <div className="w-full h-14 sm:h-20 md:h-24 bg-[#FAF7EE]" aria-hidden="true" />
    </div>
  );
};
