import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import { BRAND_INFO, createWhatsAppUrl, WHY_CHOOSE_KRIORA } from "../data/krioraData";
import {
  Sparkles,
  ShieldCheck,
  Palette,
  Phone,
  Mail,
  Quote,
  CheckCircle2,
  ArrowRight,
  Award,
  HeartHandshake,
} from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

export const AboutPage: React.FC = () => {
  const { navigate, openQuickEnquiry } = useNavigation();

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#1B263B]">
      {/* 1. Hero / Header */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 border-b border-[#EAE4D6] bg-gradient-to-b from-[#ECEEFB]/40 to-[#FAF7EE] relative">
        <HeroBackground image={"/images/hero_about.jpg"} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#B4B9DF]/60 text-xs uppercase tracking-widest text-[#1B263B] font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#C94A59]" />
            <span>About KRIORA</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1B263B]">
            Wit • Whimsy • Wonder
          </h1>

          <p className="text-base sm:text-xl text-[#C94A59] font-semibold max-w-2xl mx-auto">
            Gifts that feel considered, useful and memorable.
          </p>
        </div>
      </section>

      {/* 2. Brand Narrative Section */}
      <section className="py-20 border-b border-[#EAE4D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E2D5] bg-white shadow-xl">
                <img
                  src={BRAND_INFO.heroImage}
                  alt="KRIORA Handcrafted Philosophy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="p-5 bg-white border-t border-[#F0EBE1]">
                  <p className="text-xs uppercase tracking-wider text-[#C94A59] font-bold">
                    The Art of Considered Objects
                  </p>
                  <p className="text-xs text-[#5A6B7C] mt-1">
                    Carefully chosen materials, clean lines, and purposeful utility.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
                Brand Positioning & Philosophy
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B263B] leading-snug">
                “KRIORA brings together thoughtful gifting, useful objects and distinctive design to
                help businesses celebrate relationships, milestones and meaningful occasions.”
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed font-body">
                <p>
                  Corporate gifting often defaults to disposable trinkets or uninspired branded
                  merchandise. KRIORA was envisioned to offer a more considered alternative: objects
                  that integrate naturally onto work desks, enrich festive traditions, and express
                  appreciation with enduring dignity.
                </p>
                <p>
                  From tactile wooden desk organizers and precision laser-cut festive shadow lamps
                  to handcrafted clutches and aromatic home fragrance vessels, every piece in our
                  catalogue balances utility with aesthetic grace.
                </p>
                <p>
                  We partner directly with organizations to ensure every bulk order reflects their
                  culture, values, and high standards of hospitality.
                </p>
              </div>

              {/* Quick Philosophy Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-white border border-[#E8E2D5] rounded-xl">
                  <p className="font-bold text-[#1B263B]">Wit</p>
                  <p className="text-[#64748B] text-[11px] mt-0.5">
                    Clever design and functional utility
                  </p>
                </div>
                <div className="p-3 bg-white border border-[#E8E2D5] rounded-xl">
                  <p className="font-bold text-[#1B263B]">Whimsy</p>
                  <p className="text-[#64748B] text-[11px] mt-0.5">
                    Playful elegance and delightful forms
                  </p>
                </div>
                <div className="p-3 bg-white border border-[#E8E2D5] rounded-xl">
                  <p className="font-bold text-[#1B263B]">Wonder</p>
                  <p className="text-[#64748B] text-[11px] mt-0.5">
                    Artisanal finishes that spark joy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Founder Section (Namrata Adhvaryu) */}
      <section className="py-20 bg-white border-b border-[#EAE4D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
              Leadership & Creative Vision
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#1B263B] mt-2">
              Meet Our Founder
            </h2>
            <p className="text-[#5A6B7C] text-sm mt-2">
              The creative visionary and lead curator shaping every KRIORA gifting experience.
            </p>
          </div>

          <div className="bg-[#FAF7EE] border border-[#E8E2D5] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Founder Image & Quick Bio Column */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-full max-w-sm">
                  {/* Subtle decorative glow */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#C94A59]/20 to-[#B4B9DF]/30 rounded-3xl blur-md" />

                  <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white aspect-square">
                    <img
                      src={BRAND_INFO.founderImage}
                      alt={BRAND_INFO.founder?.name || "Namrata Adhvaryu - Founder of KRIORA"}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating role badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#C94A59] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    {BRAND_INFO.founder?.role || "Founder & Creative Director"}
                  </div>
                </div>

                <div className="mt-8 space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1B263B]">
                    {BRAND_INFO.founder?.name || "Namrata Adhvaryu"}
                  </h3>
                  <p className="text-xs font-semibold text-[#8C6239] uppercase tracking-wider">
                    {BRAND_INFO.founder?.credentials || "Lead Curator & B2B Solutions Architect"}
                  </p>
                </div>

                {/* Direct Connect Pills */}
                <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                  <a
                    href={createWhatsAppUrl(
                      undefined,
                      "Hello Namrata, I would like to consult on a corporate gifting project",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp Chat</span>
                  </a>

                  <a
                    href={`tel:${BRAND_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F0EBE1] border border-[#D5CEBE] text-[#1B263B] text-xs font-bold rounded-xl transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C94A59]" />
                    <span>{BRAND_INFO.phone}</span>
                  </a>

                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-[#F0EBE1] border border-[#D5CEBE] text-[#1B263B] text-xs font-bold rounded-xl transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C94A59]" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Founder Narrative & Vision Column */}
              <div className="lg:col-span-7 space-y-6">
                {/* Vision Quote Card */}
                <div className="relative bg-white border border-[#E8E2D5] rounded-2xl p-6 sm:p-7 shadow-xs">
                  <Quote className="w-8 h-8 text-[#C94A59]/20 absolute top-4 right-4 pointer-events-none" />
                  <p className="text-sm sm:text-base font-heading italic text-[#1B263B] leading-relaxed">
                    {BRAND_INFO.founder?.vision}
                  </p>
                  <p className="mt-3 text-xs font-bold text-[#C94A59] uppercase tracking-wider">
                    — {BRAND_INFO.founder?.name}, {BRAND_INFO.name}
                  </p>
                </div>

                {/* Biographical Overview */}
                <div className="space-y-3.5 text-sm sm:text-base text-[#475569] leading-relaxed font-body">
                  <p>{BRAND_INFO.founder?.bio}</p>
                  <p>
                    With deep appreciation for natural hardwoods, refined metal accents, and
                    conscious presentation, Namrata personally oversees product prototyping, sample
                    coordination, and brand embossing. Whether coordinating 50 executive hampers for
                    a leadership conclave or 1,000 employee joining kits across India, her focus
                    remains unwavering on quality, punctuality, and refined simplicity.
                  </p>
                </div>

                {/* Key Expertise Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 bg-white border border-[#E8E2D5] rounded-xl flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#C94A59] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#1B263B]">
                        B2B & Corporate Specialisation
                      </p>
                      <p className="text-[11px] text-[#5A6B7C] mt-0.5">
                        End-to-end management for HR, marketing, and leadership summits.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-[#E8E2D5] rounded-xl flex items-start gap-3">
                    <HeartHandshake className="w-5 h-5 text-[#C94A59] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#1B263B]">Artisanal Collaborations</p>
                      <p className="text-[11px] text-[#5A6B7C] mt-0.5">
                        Sourcing responsibly from Indian woodturners and metalcraft studios.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => openQuickEnquiry("Founder Consultation - Corporate Gifting")}
                    className="px-6 py-3 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request a Direct Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => navigate("/b2b-enquiry")}
                    className="px-6 py-3 bg-white hover:bg-[#FAF7EE] text-[#1B263B] border border-[#D5CEBE] hover:border-[#C94A59] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Submit Bulk Enquiry Form</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 3 Core Pillars (Brochure Periwinkle Rounded Box) */}
      <section className="py-20 bg-[#ECEEFB] border-b border-[#D8DCF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
              Our Guiding Values
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#1B263B] mt-2">
              The Three Pillars of KRIORA
            </h2>
            <p className="text-[#5A6B7C] text-sm mt-2">
              Every product in our collection is curated according to these three standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_CHOOSE_KRIORA.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-[#DFE3F7] p-8 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
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

      {/* 5. Editorial Quote & CTA */}
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
          <p className="text-[#FFB4BA] text-base sm:text-lg font-semibold">
            Your occasion. Our thoughtful touch.
          </p>
          <p className="text-[#E2E8F0] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-body">
            Discuss your upcoming corporate milestones, annual festival hampers, or joining kit
            designs with Namrata Adhvaryu today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/products")}
              className="w-full sm:w-auto px-8 py-4 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer"
            >
              Explore Products
            </button>
            <a
              href={createWhatsAppUrl(
                undefined,
                "Hello Namrata, we want to discuss bulk corporate gifting for our upcoming event.",
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
