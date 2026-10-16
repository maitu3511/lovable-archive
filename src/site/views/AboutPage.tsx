import sourceImage0Src from "@/assets/hero_about.jpg";
import { Button } from "@/components/ui/button";
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

import { SEOHead } from "../components/SEOHead";
import { MemorableTogetherSection } from "../components/MemorableTogetherSection";
const sourceImage0 = { url: sourceImage0Src };

export const AboutPage: React.FC = () => {
  const { navigate, openQuickEnquiry } = useNavigation();

  return (
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title="About KRIORA — Handcrafted Corporate Gifting & Our Story"
        description="Meet founder Namrata Adhvaryu and discover KRIORA's artisanal philosophy of Wit • Whimsy • Wonder. Thoughtful corporate gifting handcrafted across India."
        canonicalPath="/about"
        keywords="about KRIORA, Namrata Adhvaryu, corporate gift manufacturer India, artisanal corporate gifts, handcrafted keepsakes Vadodara, premium B2B gifts"
        ogImage="/images/founder_namrata_1791878021459.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About KRIORA",
          url: "https://kriora.in/about",
          description:
            "Meet founder Namrata Adhvaryu and discover KRIORA's artisanal philosophy of Wit • Whimsy • Wonder.",
          mainEntity: {
            "@type": "Person",
            name: "Namrata Adhvaryu",
            jobTitle: "Founder & Creative Director",
            worksFor: {
              "@type": "Organization",
              name: "KRIORA",
            },
            telephone: "+91-96877-39779",
            email: "krioracrafts@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vadodara",
              addressRegion: "Gujarat",
              addressCountry: "India",
            },
          },
        }}
      />

      {/* 1. Hero / Header */}
      <section className="relative isolate overflow-hidden pt-16 pb-20 border-b border-source-eae4d6 bg-gradient-to-b from-source-eceefb/40 to-source-faf7ee relative">
        <HeroBackground image={sourceImage0.url} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="animate-fade-in-down inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-source-b4b9df/60 text-xs uppercase tracking-widest text-source-1b263b font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-source-c94a59" />
            <span>About KRIORA</span>
          </div>

          <h1 className="animate-fade-in-left delay-100 font-heading text-3xl sm:text-4xl md:text-5xl text-source-1b263b text-center mx-auto">
            Wit • Whimsy • Wonder
          </h1>

          <p className="animate-fade-in-right delay-200 text-base sm:text-xl text-source-c94a59 font-semibold max-w-2xl mx-auto">
            Gifts that feel considered, useful and memorable.
          </p>
        </div>
      </section>

      {/* 2. Brand Narrative Section */}
      <section className="py-20 border-b border-source-eae4d6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 reveal-on-scroll reveal-from-left">
              <div className="relative rounded-3xl overflow-hidden border border-source-e8e2d5 bg-white shadow-xl card-hover-lift">
                <img
                  src={BRAND_INFO.heroImage}
                  alt="KRIORA Handcrafted Philosophy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="p-5 bg-white border-t border-source-f0ebe1">
                  <p className="text-xs uppercase tracking-wider text-source-c94a59 font-bold">
                    The Art of Considered Objects
                  </p>
                  <p className="text-xs text-source-5a6b7c mt-1">
                    Carefully chosen materials, clean lines, and purposeful utility.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 reveal-on-scroll reveal-from-right delay-150">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59">
                Brand Positioning & Philosophy
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-source-1b263b leading-snug">
                “KRIORA brings together thoughtful gifting, useful objects and distinctive design to
                help businesses celebrate relationships, milestones and meaningful occasions.”
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-source-475569 leading-relaxed font-body">
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
                <div className="reveal-on-scroll reveal-from-bottom delay-100 p-3 bg-white border border-source-e8e2d5 rounded-xl card-hover-lift">
                  <p className="font-bold text-source-1b263b">Wit</p>
                  <p className="text-source-64748b text-[11px] mt-0.5">
                    Clever design and functional utility
                  </p>
                </div>
                <div className="reveal-on-scroll reveal-from-bottom delay-200 p-3 bg-white border border-source-e8e2d5 rounded-xl card-hover-lift">
                  <p className="font-bold text-source-1b263b">Whimsy</p>
                  <p className="text-source-64748b text-[11px] mt-0.5">
                    Playful elegance and delightful forms
                  </p>
                </div>
                <div className="reveal-on-scroll reveal-from-bottom delay-300 p-3 bg-white border border-source-e8e2d5 rounded-xl card-hover-lift">
                  <p className="font-bold text-source-1b263b">Wonder</p>
                  <p className="text-source-64748b text-[11px] mt-0.5">
                    Artisanal finishes that spark joy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Founder Section (Namrata Adhvaryu) */}
      <section className="py-20 bg-white border-b border-source-eae4d6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 block">
              Leadership & Creative Vision
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
              Meet Our Founder
            </h2>
            <p className="text-source-5a6b7c text-sm mt-2 max-w-xl mx-auto">
              The creative visionary and lead curator shaping every KRIORA gifting experience.
            </p>
          </div>

          <div className="bg-source-faf7ee border border-source-e8e2d5 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Founder Image & Quick Bio Column */}
              <div className="lg:col-span-5 flex flex-col items-center text-center reveal-on-scroll reveal-from-left delay-100">
                <div className="relative w-full max-w-sm">
                  {/* Subtle decorative glow */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-source-c94a59/20 to-source-b4b9df/30 rounded-3xl blur-md" />

                  <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white aspect-square">
                    <img
                      src={BRAND_INFO.founderImage}
                      alt={BRAND_INFO.founder?.name || "Namrata Adhvaryu - Founder of KRIORA"}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating role badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-source-c94a59 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    {BRAND_INFO.founder?.role || "Founder & Creative Director"}
                  </div>
                </div>

                <div className="mt-8 space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-source-1b263b">
                    {BRAND_INFO.founder?.name || "Namrata Adhvaryu"}
                  </h3>
                  <p className="text-xs font-semibold text-source-8c6239 uppercase tracking-wider">
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-source-25d366 hover:bg-source-20ba59 text-white text-xs font-bold rounded-xl shadow-xs transition-colors hover:scale-105"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp Chat</span>
                  </a>

                  <a
                    href={`tel:${BRAND_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-source-f0ebe1 border border-source-d5cebe text-source-1b263b text-xs font-bold rounded-xl transition-colors shadow-xs hover:scale-105"
                  >
                    <Phone className="w-3.5 h-3.5 text-source-c94a59" />
                    <span>{BRAND_INFO.phone}</span>
                  </a>

                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-source-f0ebe1 border border-source-d5cebe text-source-1b263b text-xs font-bold rounded-xl transition-colors shadow-xs hover:scale-105"
                  >
                    <Mail className="w-3.5 h-3.5 text-source-c94a59" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Founder Narrative & Vision Column */}
              <div className="lg:col-span-7 space-y-6 reveal-on-scroll reveal-from-right delay-150">
                {/* Vision Quote Card */}
                <div className="relative bg-white border border-source-e8e2d5 rounded-2xl p-6 sm:p-7 shadow-xs">
                  <Quote className="w-8 h-8 text-source-c94a59/20 absolute top-4 right-4 pointer-events-none" />
                  <p className="text-sm sm:text-base font-heading italic text-source-1b263b leading-relaxed">
                    {BRAND_INFO.founder?.vision}
                  </p>
                  <p className="mt-3 text-xs font-bold text-source-c94a59 uppercase tracking-wider">
                    — {BRAND_INFO.founder?.name}, {BRAND_INFO.name}
                  </p>
                </div>

                {/* Biographical Overview */}
                <div className="space-y-3.5 text-sm sm:text-base text-source-475569 leading-relaxed font-body">
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
                  <div className="reveal-on-scroll reveal-from-bottom delay-200 p-4 bg-white border border-source-e8e2d5 rounded-xl flex items-start gap-3 card-hover-lift">
                    <Award className="w-5 h-5 text-source-c94a59 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-source-1b263b">
                        B2B & Corporate Specialisation
                      </p>
                      <p className="text-[11px] text-source-5a6b7c mt-0.5">
                        End-to-end management for HR, marketing, and leadership summits.
                      </p>
                    </div>
                  </div>

                  <div className="reveal-on-scroll reveal-from-bottom delay-250 p-4 bg-white border border-source-e8e2d5 rounded-xl flex items-start gap-3 card-hover-lift">
                    <HeartHandshake className="w-5 h-5 text-source-c94a59 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-source-1b263b">
                        Artisanal Collaborations
                      </p>
                      <p className="text-[11px] text-source-5a6b7c mt-0.5">
                        Sourcing responsibly from Indian woodturners and metalcraft studios.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="reveal-on-scroll reveal-from-bottom delay-300 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    variant="source"
                    size="source"
                    onClick={() => openQuickEnquiry("Founder Consultation - Corporate Gifting")}
                    className="px-6 py-3 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request a Direct Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>

                  <Button
                    variant="source"
                    size="source"
                    onClick={() => navigate("/b2b-enquiry")}
                    className="px-6 py-3 bg-white hover:bg-source-faf7ee text-source-1b263b border border-source-d5cebe hover:border-source-c94a59 font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <span>Submit Bulk Enquiry Form</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 3 Core Pillars (Brochure Periwinkle Rounded Box) */}
      <section className="py-20 bg-source-eceefb border-b border-source-d8dcf5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 block">
              Our Guiding Values
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
              The Three Pillars of KRIORA
            </h2>
            <p className="text-source-5a6b7c text-sm mt-2 max-w-xl mx-auto">
              Every product in our collection is curated according to these three standards.
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
                  className={`reveal-on-scroll ${pAnim} bg-white border border-source-dfe3f7 p-8 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow card-hover-lift`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-source-eceefb border border-source-b4b9df flex items-center justify-center text-source-c94a59 mb-6">
                      {pillar.title === "Thoughtful Personalisation" && (
                        <Sparkles className="w-6 h-6" />
                      )}
                      {pillar.title === "Reliable Fulfilment" && (
                        <ShieldCheck className="w-6 h-6" />
                      )}
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

      {/* 5. Editorial Quote & CTA */}
      <MemorableTogetherSection />
    </div>
  );
};
