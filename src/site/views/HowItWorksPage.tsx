import sourceImage0Src from "@/assets/hero_how_it_works.jpg";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import { PROCESS_STEPS, WHY_CHOOSE_KRIORA, createWhatsAppUrl } from "../data/krioraData";
import { Sparkles, ShieldCheck, Palette } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { SEOHead } from "../components/SEOHead";
import { MemorableTogetherSection } from "../components/MemorableTogetherSection";
const sourceImage0 = { url: sourceImage0Src };

export const HowItWorksPage: React.FC = () => {
  const { openQuickEnquiry } = useNavigation();

  return (
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title="How It Works — Simple 4-Step Bulk Corporate Gifting | KRIORA"
        description="From initial consultation and curation to precision crafting and doorstep pan-India delivery. Learn how KRIORA simplifies corporate bulk gifting."
        canonicalPath="/how-it-works"
        keywords="corporate gifting process, how to order corporate gifts in bulk, corporate gift delivery India, custom gift prototyping, bulk gift production lead times"
        ogImage="/images/hero_how_it_works.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Order Custom Corporate Gifts with KRIORA",
          description:
            "A structured 4-step corporate gifting process from consultation to pan-India delivery.",
          step: PROCESS_STEPS.map((s, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: s.title,
            text: s.description,
          })),
        }}
      />

      {/* Header (Matching Brochure Left Fold) */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 border-b border-source-eae4d6 bg-gradient-to-b from-source-eceefb/40 to-source-faf7ee">
        <HeroBackground image={sourceImage0.url} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="animate-fade-in-down text-xs font-bold uppercase tracking-[0.25em] text-source-c94a59 inline-block">
            How It Works
          </span>
          <h1 className="animate-fade-in-up delay-100 font-heading text-3xl sm:text-4xl md:text-5xl text-source-1b263b text-center mx-auto">
            The Simple Ordering Journey
          </h1>
          <p className="animate-fade-in-up delay-150 text-source-c94a59 font-semibold text-base text-center">
            Clear Steps from your brief to the final delivery
          </p>
          <p className="animate-fade-in-up delay-200 text-base text-source-5a6b7c max-w-2xl mx-auto leading-relaxed font-body">
            From initial concept discussion to final on-time delivery at your corporate office, our
            structured process ensures complete clarity at every stage.
          </p>
        </div>
      </section>

      {/* 4 Steps Section with Alternating Left and Right Animations */}
      <section className="py-20 border-b border-source-eae4d6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, idx) => {
              const stepAnim = idx % 2 === 0 ? "reveal-from-left" : "reveal-from-right";
              const delay = `delay-${Math.min(100 + idx * 75, 300)}`;

              return (
                <div
                  key={step.step}
                  className={`reveal-on-scroll ${stepAnim} ${delay} bg-white border border-source-e8e2d5 rounded-3xl p-8 sm:p-10 relative overflow-hidden transition-all duration-300 hover:border-source-c94a59/40 shadow-xs hover:shadow-md card-hover-lift`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-3">
                      <span className="font-heading text-5xl sm:text-6xl text-source-c94a59 block font-bold">
                        {step.step}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-source-8a9bb5 block mt-1">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <div className="md:col-span-6 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-source-1b263b">
                        {step.title}
                      </h3>
                      <p className="text-sm text-source-5a6b7c leading-relaxed font-body">
                        {step.description}
                      </p>
                    </div>

                    <div className="md:col-span-3 pt-4 md:pt-0 md:border-l md:border-source-f0ebe1 md:pl-6 text-xs text-source-5a6b7c">
                      <p className="text-source-8a9bb5 font-bold uppercase tracking-wider mb-1">
                        Key Outcome:
                      </p>
                      <p className="text-source-1b263b font-semibold">{step.deliverable}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brochure Value Propositions (Why Choose KRIORA) */}
      <section className="py-20 bg-source-eceefb border-b border-source-d8dcf5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 block">
              The KRIORA Commitment
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
              Why Choose KRIORA
            </h2>
            <p className="text-source-5a6b7c text-sm mt-2 max-w-xl mx-auto">
              Clear commitments that guide every corporate engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_CHOOSE_KRIORA.map((pillar, idx) => {
              const pAnim =
                idx === 0
                  ? "reveal-from-left delay-100"
                  : idx === 1
                    ? "reveal-from-bottom delay-200"
                    : "reveal-from-right delay-300";

              return (
                <div
                  key={pillar.title}
                  className={`reveal-on-scroll ${pAnim} bg-white border border-source-dfe3f7 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow card-hover-lift`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-source-eceefb border border-source-b4b9df flex items-center justify-center text-source-c94a59 mb-6">
                      {pillar.title === "Thoughtful Personalisation" && (
                        <Sparkles className="w-6 h-6" />
                      )}
                      {pillar.title === "Reliable Fulfilment" && <ShieldCheck className="w-6 h-6" />}
                      {pillar.title === "Distinct Aesthetic" && <Palette className="w-6 h-6" />}
                    </div>

                    <h3 className="text-lg font-bold text-source-1b263b mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-source-5a6b7c leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ending Banner */}
      <MemorableTogetherSection />
    </div>
  );
};
