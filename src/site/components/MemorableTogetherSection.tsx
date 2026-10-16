import React from "react";
import sourceImage0Src from "@/assets/lifestyle_clutch_keepsake_1791806098377.jpg";
import { Button } from "@/components/ui/button";
import { useNavigation } from "../context/NavigationContext";
import { BRAND_INFO, createWhatsAppUrl } from "../data/krioraData";
import { WhatsAppIcon } from "./WhatsAppIcon";
const sourceImage0 = { url: sourceImage0Src };

interface MemorableTogetherSectionProps {
  customSubtitle?: string;
  customDescription?: string;
}

export const MemorableTogetherSection: React.FC<MemorableTogetherSectionProps> = ({
  customSubtitle,
  customDescription,
}) => {
  const { navigate } = useNavigation();

  return (
    <>
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-source-d8dcf5">
        {/* Background Image Matching Handcrafted Gifting Content */}
        <div className="absolute inset-0 z-0">
          <img
            src={sourceImage0.url}
            alt="Handcrafted Gifting Suite"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep Luxurious Warm Tint Overlay for Crystal Clear Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-source-101726/90 via-source-101726/85 to-source-101726/92 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="reveal-on-scroll reveal-from-top delay-75">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-source-e5a83b bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/15 shadow-xs">
              Start Your Business Enquiry
            </span>
          </div>
          <h2 className="reveal-on-scroll reveal-from-top delay-150 font-heading text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight [text-shadow:_0_2px_14px_rgba(0,0,0,0.6)]">
            “Let’s create something memorable together.”
          </h2>
          <p className="reveal-on-scroll reveal-from-bottom delay-200 text-source-ffb4ba text-base sm:text-lg font-semibold">
            {customSubtitle ?? "Your occasion. Our thoughtful touch."}
          </p>
          <p className="reveal-on-scroll reveal-from-bottom delay-250 text-source-e2e8f0 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-body">
            {customDescription ??
              "Whether preparing for employee welcome kits, annual company festivals, VIP client tokens, or custom workshops, our team is ready to discuss your requirements."}
          </p>

          <div className="reveal-on-scroll reveal-from-bottom delay-300 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="source"
              size="source"
              onClick={() => navigate("/b2b-enquiry")}
              className="w-full sm:w-auto px-8 py-4 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 active:scale-[0.98] cursor-pointer"
            >
              Submit B2B Bulk Enquiry
            </Button>
            <a
              href={createWhatsAppUrl(
                undefined,
                "Hello Namrata, we have a corporate gifting inquiry and would like to discuss.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-source-faf7ee text-source-1b263b border border-white/20 rounded-xl text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-[0.98] flex items-center justify-center gap-2 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-source-25d366" />
              <span>Direct WhatsApp: {BRAND_INFO.phone}</span>
            </a>
            <Button
              variant="source"
              size="source"
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 active:scale-[0.98] cursor-pointer backdrop-blur-sm"
            >
              Contact Desk
            </Button>
          </div>

          <p className="reveal-on-scroll reveal-from-bottom delay-400 text-xs text-source-94a3b8 pt-2">
            Directly handled by {BRAND_INFO.representative} · {BRAND_INFO.email}
          </p>
        </div>
      </section>

      {/* Dedicated breathing space with website background color (#FAF7EE) before footer */}
      <div className="w-full h-14 sm:h-20 md:h-24 bg-source-faf7ee" aria-hidden="true" />
    </>
  );
};
