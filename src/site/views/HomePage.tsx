import giftingVideoWebmSrc from "@/assets/kriora-gifting-background.webm";
import giftingVideoMp4Src from "@/assets/kriora-gifting-background.mp4";
import { Button } from "@/components/ui/button";
import React, { useState, useRef, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import { SEOHead } from "../components/SEOHead";
import { MemorableTogetherSection } from "../components/MemorableTogetherSection";
import {
  BRAND_INFO,
  CATEGORIES,
  PRODUCTS,
  BUSINESS_SOLUTIONS,
  PROCESS_STEPS,
  WHY_CHOOSE_KRIORA,
  createWhatsAppUrl,
  createBuyNowWhatsAppUrl,
  Product,
} from "../data/krioraData";
import { ProductCard } from "../components/ProductCard";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Palette,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Star,
  Quote,
  HelpCircle,
  Eye,
} from "lucide-react";
const giftingVideoWebm = { url: giftingVideoWebmSrc };
const giftingVideoMp4 = { url: giftingVideoMp4Src };

interface ClientReview {
  id: string;
  clientName: string;
  designation: string;
  organisation: string;
  quote: string;
  occasion: string;
  rating: number;
  avatar: string;
}

const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "rev-1",
    clientName: "Pooja Varma",
    designation: "Associate Director of People & Culture",
    organisation: "Fintech Solutions India",
    quote:
      "KRIORA curated 250 onboarding welcome kits for our new engineering cohort. The personalized wooden desk organizers and embossed notebooks set a warm, inspiring tone on day one. Delivery to individual remote addresses was punctual and flawless.",
    occasion: "Employee Joining Kits",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-2",
    clientName: "Siddharth Mehta",
    designation: "Head of Marketing & Corporate Alliances",
    organisation: "Apex Infrastructure Group",
    quote:
      "For our annual leadership summit, we commissioned custom shadow tea-light holders and executive diaries with our brand insignia. The craftsmanship and attention to detail from Namrata and her team were truly exceptional.",
    occasion: "Annual Leadership Summit",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-3",
    clientName: "Ananya Deshmukh",
    designation: "Senior Manager - Employee Experience",
    organisation: "CloudScale Technologies",
    quote:
      "Our Diwali dry-fruit hampers and reusable rangoli stencil sets received tremendous appreciation across all our regional branches. Unlike generic retail gift boxes, KRIORA’s products felt artisanal, durable, and genuinely thoughtful.",
    occasion: "Festive & Seasonal Gifting",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-4",
    clientName: "Vikram Singhania",
    designation: "Managing Partner",
    organisation: "Veritas Advisory & Capital",
    quote:
      "KRIORA understands corporate gifting etiquette deeply. No tacky plastic tags or flimsy materials—just tasteful seasoned wood, refined brass, and packaging that dignified our most valued client partnerships.",
    occasion: "VIP Client Appreciation",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-5",
    clientName: "Rohan Chawla",
    designation: "Vice President - Human Resources",
    organisation: "Zenith Global Consulting",
    quote:
      "From custom engraved perpetual calendar blocks to bespoke resin desktop keepsakes, KRIORA delivered 400 anniversary kits right on schedule. The response from our leadership team was overwhelmingly positive.",
    occasion: "Corporate Milestone Keepsakes",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-6",
    clientName: "Meera Iyer",
    designation: "Chief Administrative Officer",
    organisation: "Bloom Healthcare Network",
    quote:
      "Working with Namrata was an absolute pleasure. Every item was tailored to our medical conference delegates, finished with impeccable laser branding and delivered in sturdy, presentation-grade gift boxes.",
    occasion: "Staff & Delegate Appreciation",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&auto=format&fit=crop&q=80",
  },
];

interface ProcessStepBackground {
  step: string;
  image: string;
  alt: string;
}

const PROCESS_STEP_BACKGROUNDS: ProcessStepBackground[] = [
  {
    step: "01",
    image: "/images/how_step1_consult.jpg",
    alt: "Corporate Gifting Consultation & Requirements Assessment",
  },
  {
    step: "02",
    image: "/images/how_step2_curate.jpg",
    alt: "Product Curation, Hamper Assembly & Digital Branding Mockup",
  },
  {
    step: "03",
    image: "/images/how_step3_produce.jpg",
    alt: "Precision Laser Engraving & Artisan Workshop Production",
  },
  {
    step: "04",
    image: "/images/how_step4_deliver.jpg",
    alt: "Luxury Tiered Gift Hamper Packaging & Pan-India Dispatch",
  },
];

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the Minimum Order Quantity (MOQ) for corporate gifting?",
    answer:
      "Our standard minimum order quantities typically start between 25 to 50 units depending on the product category. For high-end bespoke gifts, executive awards, or comprehensive hamper suites, we accommodate flexible project quantities. Please get in touch to discuss your specific requirements.",
  },
  {
    id: "faq-2",
    question: "How does corporate branding and logo personalisation work?",
    answer:
      "We provide precision laser engraving on natural hardwood and metal items, metallic foil stamping (gold/silver) on diaries and rigid boxes, and high-definition UV printing. Once you provide your vector logo files and brand guidelines, we share digital mockups for confirmation prior to production.",
  },
  {
    id: "faq-3",
    question: "Can we create custom combination gift hampers?",
    answer:
      "Yes, absolutely! You can combine desk organisers, perpetual calendar stands, message diaries, dry-fruit gift boxes, scented candles, and keepsakes into a unified presentation box customized to your event theme and corporate budget tier.",
  },
  {
    id: "faq-4",
    question: "What are the typical production lead times for bulk orders?",
    answer:
      "Standard lead times generally range between 7 to 15 business days following mockup approval, depending on the volume and customisation techniques. For major festive seasons like Diwali and Year-End, we recommend initiating consultations 3 to 4 weeks in advance.",
  },
  {
    id: "faq-5",
    question: "Do you handle individual doorstep delivery or centralized dispatch?",
    answer:
      "We offer both options: batch dispatch in secure bulk cartons directly to your corporate head office or regional branch offices, as well as individual pan-India doorstep courier delivery directly to remote employees or VIP clients based on your verified dispatch list.",
  },
  {
    id: "faq-6",
    question: "Can we inspect physical samples before confirming a bulk order?",
    answer:
      "Yes! Sample pieces can be coordinated for evaluation by your HR or procurement committee. Simply connect with Namrata Adhvaryu via WhatsApp (+91 96877 39779) or our enquiry form to request sample availability.",
  },
];

export const HomePage: React.FC = () => {
  const { navigate, openQuickEnquiry } = useNavigation();
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("desk-office-essentials");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;

    const playVideo = () => {
      if (!video) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Retry on user interaction or when allowed
        });
      }
    };

    // Initial play attempt
    playVideo();

    // 1. Seamless replay when ended (safeguard in case browser loop misses tick)
    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    // 2. Resume if paused unexpectedly (except user prefers reduced motion)
    const handlePause = () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        playVideo();
      }
    };

    // 3. Resume when user switches back to tab
    const handleVisibility = () => {
      if (!document.hidden && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        playVideo();
      }
    };

    // 4. Stalled / waiting recovery
    const handleCanPlay = () => {
      playVideo();
    };

    // 5. User interaction kickstart for mobile/browser autoplay policies
    const handleUserInteraction = () => {
      if (video && video.paused && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        playVideo();
      }
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("pause", handlePause);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleCanPlay);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("touchstart", handleUserInteraction, { passive: true, once: true });
    window.addEventListener("click", handleUserInteraction, { passive: true, once: true });
    window.addEventListener("scroll", handleUserInteraction, { passive: true, once: true });

    // Watchdog check every 2 seconds to guarantee continuous uninterrupted playback
    const interval = setInterval(() => {
      if (video && video.paused && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        playVideo();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleCanPlay);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  // Featured products horizontal scroll ref
  const featuredScrollRef = useRef<HTMLDivElement>(null);

  const scrollFeatured = (direction: "left" | "right") => {
    if (featuredScrollRef.current) {
      const scrollAmount = 340;
      featuredScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Client reviews 1-by-1 automatic slider state
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isReviewPaused, setIsReviewPaused] = useState(false);

  useEffect(() => {
    if (isReviewPaused) return;
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % CLIENT_REVIEWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isReviewPaused]);

  // How It Works auto-advancing step progression & dynamic background
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [processTimerKey, setProcessTimerKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcessStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [processTimerKey]);

  const handleSelectProcessStep = (idx: number) => {
    setActiveProcessStep(idx);
    setProcessTimerKey((prev) => prev + 1);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  const allCategoryProducts = PRODUCTS.filter((p) => p.category === activeGalleryTab);
  const galleryProducts = allCategoryProducts.slice(0, 4);
  const activeCategory = CATEGORIES.find((c) => c.slug === activeGalleryTab);

  const marketplaceProducts = PRODUCTS.filter((p) =>
    Boolean(p.amazonUrl || p.flipkartUrl || p.meeshoUrl),
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title="KRIORA — Premium B2B Corporate Gifting & Handcrafted Keepsakes"
        description="Discover thoughtfully curated gifting solutions for businesses, employee milestones, festive celebrations and meaningful appreciation. Handcrafted in India."
        canonicalPath="/"
        keywords="corporate gifting, B2B gifts India, employee welcome kit, corporate festive hampers, personalized wooden gifts, Namrata Adhvaryu"
        ogImage="/images/hero_corporate.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "KRIORA",
          url: "https://kriora.in",
          logo: "https://kriora.in/images/hero_corporate.jpg",
          description:
            "Premium B2B corporate gifting, employee milestone kits, and handcrafted bespoke keepsakes in India.",
          founder: {
            "@type": "Person",
            name: "Namrata Adhvaryu",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-96877-39779",
            contactType: "customer service",
            areaServed: "IN",
          },
        }}
      />

      {/* 1. Hero Section (Warm Ivory + Periwinkle & Coral Accents) */}
      <section className="home-hero relative pt-8 pb-8 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden border-b border-source-eae4d6">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onEnded={() => {
            if (heroVideoRef.current) {
              heroVideoRef.current.currentTime = 0;
              heroVideoRef.current.play().catch(() => {});
            }
          }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={giftingVideoMp4.url} type="video/mp4" />
          <source src={giftingVideoWebm.url} type="video/webm" />
        </video>
        <div className="home-hero-overlay" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="home-hero-content text-center mx-auto">
            {/* Centered Main Hero Content */}
            <div className="space-y-4 sm:space-y-8 flex flex-col items-center text-center mx-auto">
              {/* Brand Tagline Badge in Brochure Periwinkle with animation */}
              <div className="animate-fade-in-down inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-source-eceefb/95 backdrop-blur-sm border border-source-b4b9df/60 shadow-xs mx-auto">
                <span className="w-2 h-2 rounded-full bg-source-c94a59 animate-ping" />
                <span className="text-xs uppercase tracking-[0.2em] text-source-1b263b font-bold">
                  {BRAND_INFO.name} · {BRAND_INFO.tagline}
                </span>
              </div>

              {/* Main Headline with stagger animation - Left to Right */}
              <div className="animate-fade-in-left delay-100 text-center mx-auto max-w-4xl">
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-source-1b263b leading-[1.2] text-center">
                  Thoughtful Corporate Gifting.{" "}
                  <span className="text-source-c94a59 block mt-1 font-heading text-center">
                    Beautifully Personalised.
                  </span>
                </h1>
                <p className="mt-3 text-sm sm:text-base font-semibold text-source-8c6239 tracking-wide text-center">
                  “Gifts that feel considered, useful and memorable.”
                </p>
              </div>

              {/* Supporting Text - Right to Left */}
              <p className="hero-copy font-body text-base sm:text-lg text-source-475569 leading-relaxed max-w-2xl mx-auto text-center animate-fade-in-right delay-200">
                “Discover thoughtfully curated gifting solutions for businesses, employee
                milestones, festive celebrations and meaningful appreciation. From useful desk
                essentials to customised keepsakes, KRIORA helps businesses make every gift
                memorable.”
              </p>

              {/* Action Buttons - Down to Up */}
              <div className="hero-actions pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 animate-fade-in-up delay-300 w-full sm:w-auto">
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/products")}
                  className="px-7 py-3.5 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Our Collections</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Button>

                <a
                  href={createWhatsAppUrl(
                    undefined,
                    "Discuss bulk order requirements for our organisation",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white/90 hover:bg-white text-source-1b263b border border-source-d5cebe hover:border-source-c94a59 font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-xs hover:shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-source-25d366" />
                  <span>Discuss Your Bulk Order</span>
                </a>
              </div>

              {/* Quick Trust Highlights - Left, Down-Up, Right */}
              <div className="pt-6 border-t border-source-e8e2d5 grid grid-cols-3 gap-4 sm:gap-8 text-xs max-w-xl mx-auto text-center">
                <div className="animate-fade-in-left delay-400 p-2 rounded-lg transition-transform hover:-translate-y-0.5 text-center">
                  <p className="text-source-1b263b font-bold text-sm">Strictly B2B</p>
                  <p className="text-[11px] text-source-64748b">Corporate & HR solutions</p>
                </div>
                <div className="animate-fade-in-up delay-400 p-2 rounded-lg transition-transform hover:-translate-y-0.5 text-center">
                  <p className="text-source-1b263b font-bold text-sm">Logo Engraved</p>
                  <p className="text-[11px] text-source-64748b">Tailored branding</p>
                </div>
                <div className="animate-fade-in-right delay-400 p-2 rounded-lg transition-transform hover:-translate-y-0.5 text-center">
                  <p className="text-source-1b263b font-bold text-sm">Namrata Adhvaryu</p>
                  <p className="text-[11px] text-source-64748b">Direct consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Solutions Section (Brochure Periwinkle Palette Accent) */}
      <section className="py-20 bg-source-eceefb border-b border-source-d8dcf5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 block">
              Tailored Corporate Programmes
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
              Gifting Solutions for Every Business Occasion
            </h2>
            <p className="text-source-5a6b7c text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
              Every occasion holds a unique intention. We collaborate with corporate teams, HR
              leads, and event organizers to curate gifting that reflects your culture.
            </p>
          </div>

          {/* 5 Solution Cards - Compact & Balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUSINESS_SOLUTIONS.map((solution, idx) => {
              const animDirection =
                idx === 0
                  ? "reveal-from-left delay-100"
                  : idx === 1
                    ? "reveal-from-right delay-150"
                    : idx === 2
                      ? "reveal-from-left delay-200"
                      : idx === 3
                        ? "reveal-from-top delay-250"
                        : "reveal-from-right delay-300";

              return (
                <div
                  key={solution.id}
                  className={`reveal-on-scroll ${animDirection} bg-white border border-source-dfe3f7 hover:border-source-c94a59/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md card-hover-lift ${
                    idx === 0 ? "lg:col-span-2 lg:flex-row" : ""
                  }`}
                >
                  <div
                    className={`relative bg-source-f4f0e4 overflow-hidden shrink-0 ${
                      idx === 0
                        ? "lg:w-5/12 aspect-[16/10] lg:aspect-auto"
                        : "aspect-[16/9] max-h-44"
                    }`}
                  >
                    <img
                      src={solution.image}
                      alt={solution.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div
                    className={`p-5 flex flex-col justify-between flex-grow ${
                      idx === 0 ? "lg:w-7/12" : ""
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-source-c94a59">
                        {solution.subtitle}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-source-1b263b mt-0.5 group-hover:text-source-c94a59 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-xs text-source-5a6b7c mt-1.5 leading-relaxed">
                        {solution.description}
                      </p>

                      <div className="mt-3 pt-2.5 border-t border-source-f0ebe1 text-[11px] flex items-center gap-1.5 flex-wrap">
                        <span className="text-source-8a9bb5 font-semibold shrink-0">Includes:</span>
                        <span className="text-source-243247 font-medium">
                          {solution.typicalItems.join(" · ")}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-source-f0ebe1 flex items-center justify-between">
                      <a
                        href={createWhatsAppUrl(
                          solution.title,
                          `We are planning for ${solution.title}. Please share feasible options and samples.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-source-c94a59 hover:text-source-b33947 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Discuss Requirement</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-source-64748b">
              * Note: The collection can be discussed for bulk requirements and customised gifting
              projects. Final availability depends on confirmed order scale and timelines.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Product Collections */}
      <section className="py-20 bg-source-faf7ee border-b border-source-eae4d6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 inline-block">
              Curated Catalogue
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-1 text-center">
              Featured Product Collections
            </h2>
            <p className="text-source-5a6b7c text-sm sm:text-base max-w-xl mx-auto text-center leading-relaxed">
              Representative highlights from Desk Essentials, Festive Traditions, and Bespoke
              Lifestyle Keepsakes.
            </p>

            <div className="pt-2">
              <Button
                variant="source"
                size="source"
                onClick={() => navigate("/products")}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-source-c94a59 hover:text-source-b33947 font-bold transition-all hover:scale-105"
              >
                <span>View All 30 Catalog Items</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Top Row: 3 Categories in 1 Line with 1-2 line details and 'View More' button */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {CATEGORIES.map((cat, idx) => {
              const catAnim =
                idx === 0
                  ? "reveal-from-left delay-100"
                  : idx === 1
                    ? "reveal-from-bottom delay-200"
                    : "reveal-from-right delay-300";

              return (
                <div
                  key={cat.slug}
                  onClick={() => navigate(`/products/${cat.slug}`)}
                  className={`reveal-on-scroll ${catAnim} group relative bg-white border border-source-e8e2d5 hover:border-source-c94a59/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between card-hover-lift`}
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-source-f4f0e4 relative border-b border-source-eae4d6 img-zoom-container">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-bold text-white bg-source-c94a59 px-2.5 py-0.5 rounded-md shadow-xs uppercase tracking-wider">
                          {cat.highlight}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-source-1b263b group-hover:text-source-c94a59 transition-colors">
                        {cat.title}
                      </h3>
                      {/* 1-2 line concise details */}
                      <p className="text-xs text-source-5a6b7c mt-2 line-clamp-2 leading-relaxed">
                        {cat.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Button
                      variant="source"
                      size="source"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${cat.slug}`);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-source-faf7ee hover:bg-source-c94a59 text-source-1b263b hover:text-white border border-source-e8e2d5 hover:border-source-c94a59 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs group-hover:bg-source-c94a59 group-hover:text-white group-hover:border-source-c94a59 cursor-pointer"
                    >
                      <span>View More</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: Featured Product Cards in Horizontal Scrolling Line */}
          <div className="relative reveal-on-scroll reveal-from-bottom delay-150">
            {/* Scroll Navigation Header & Controls */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-source-5a6b7c font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-source-c94a59" />
                <span>Featured Highlights — scroll horizontally</span>
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="source"
                  size="source"
                  onClick={() => scrollFeatured("left")}
                  className="p-2.5 rounded-xl bg-white border border-source-e8e2d5 text-source-1b263b hover:text-source-c94a59 hover:border-source-c94a59 transition-all shadow-xs cursor-pointer active:scale-95"
                  aria-label="Scroll featured products left"
                  title="Scroll Left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => scrollFeatured("right")}
                  className="p-2.5 rounded-xl bg-white border border-source-e8e2d5 text-source-1b263b hover:text-source-c94a59 hover:border-source-c94a59 transition-all shadow-xs cursor-pointer active:scale-95"
                  aria-label="Scroll featured products right"
                  title="Scroll Right"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div
              ref={featuredScrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 no-scrollbar"
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="w-[280px] sm:w-[320px] shrink-0">
                  <ProductCard
                    product={product}
                    onOpenDetails={(p) => navigate(`/product/${p.id}`)}
                    onSelectForEnquiry={(p) => openQuickEnquiry(p.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose KRIORA (Matching Brochure Periwinkle Rounded Callout Card) */}
      <section className="py-20 bg-source-f4f0e4 border-b border-source-e8e2d5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59">
              The KRIORA Distinction
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
              Why Choose KRIORA
            </h2>
            <p className="text-source-5a6b7c text-sm mt-3">
              Rooted in the philosophy of Wit • Whimsy • Wonder, delivering excellence without
              generic corporate tropes.
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
                  className={`reveal-on-scroll ${pAnim} bg-source-dfe3f7 border border-source-ccd3f2 rounded-2xl p-8 transition-all hover:shadow-md group flex flex-col justify-between card-hover-lift`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-source-ccd3f2 flex items-center justify-center text-source-c94a59 mb-6 shadow-xs group-hover:scale-105 transition-transform">
                      {pillar.title === "Thoughtful Personalisation" && (
                        <Sparkles className="w-6 h-6" />
                      )}
                      {pillar.title === "Reliable Fulfilment" && (
                        <ShieldCheck className="w-6 h-6" />
                      )}
                      {pillar.title === "Distinct Aesthetic" && <Palette className="w-6 h-6" />}
                    </div>

                    <h3 className="text-lg font-bold text-source-1b263b mb-2 group-hover:text-source-c94a59 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-source-475569 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Customisation & Branding Teaser */}
      <section className="py-20 bg-source-faf7ee border-b border-source-eae4d6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-on-scroll reveal-zoom-in delay-100 bg-white border border-source-e8e2d5 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg relative">
            <div className="max-w-2xl mx-auto space-y-5 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 block">
                Custom Branding & Personalisation
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b leading-snug">
                Your Brand. Your Occasion. Your Personal Touch.
              </h2>
              <p className="text-source-5a6b7c text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                “Create gifting experiences that reflect your organisation’s identity, occasion and
                message. Discuss your ideas with KRIORA to explore suitable products and
                personalisation possibilities.”
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs text-source-243247 max-w-lg mx-auto">
                <div className="flex items-center gap-1.5 bg-source-faf7ee px-3.5 py-2 rounded-xl border border-source-e8e2d5 hover:border-source-c94a59 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-source-c94a59" />
                  <span>Logo Engraving</span>
                </div>
                <div className="flex items-center gap-1.5 bg-source-faf7ee px-3.5 py-2 rounded-xl border border-source-e8e2d5 hover:border-source-c94a59 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-source-c94a59" />
                  <span>Foil Stamping</span>
                </div>
                <div className="flex items-center gap-1.5 bg-source-faf7ee px-3.5 py-2 rounded-xl border border-source-e8e2d5 hover:border-source-c94a59 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-source-c94a59" />
                  <span>Rigid Gift Boxes</span>
                </div>
                <div className="flex items-center gap-1.5 bg-source-faf7ee px-3.5 py-2 rounded-xl border border-source-e8e2d5 hover:border-source-c94a59 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-source-c94a59" />
                  <span>Custom Notes</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/customisation")}
                  className="px-6 py-3.5 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                >
                  Explore Customisation Options
                </Button>
                <a
                  href={createWhatsAppUrl(
                    undefined,
                    "We would like to discuss custom branding with our company logo",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-source-faf7ee hover:bg-source-f0ebe1 text-source-1b263b border border-source-d5cebe hover:border-source-c94a59 text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-source-25d366" />
                  <span>Discuss a Custom Order</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works: Interactive Step-by-Step with Matching Animated Background Images */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-source-1b263b border-b border-source-d8dcf5">
        {/* Dynamic Background Images with Smooth Cross-Fade Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {PROCESS_STEP_BACKGROUNDS.map((bg, idx) => (
            <img
              key={bg.step}
              src={bg.image}
              alt={bg.alt}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                activeProcessStep === idx ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
            />
          ))}

          {/* Balanced subtle gradient overlay: ensures background image is bright & clear while keeping cards & text 100% legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/75" />
          <div className="absolute inset-0 bg-source-1b263b/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FAF7EE] bg-[#C94A59] px-4 py-1.5 rounded-full shadow-md inline-block">
              How It Works
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mt-3 [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]">
              The Simple Ordering Journey
            </h2>
            <p className="text-[#FAF7EE] font-medium text-sm sm:text-base mt-2 [text-shadow:_0_1px_8px_rgba(0,0,0,0.85)]">
              Clear steps from your brief to on-time corporate delivery
            </p>

            {/* Current Step Status Pill & Progress Indicators */}
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-xs text-white shadow-md">
              <span className="w-2 h-2 rounded-full bg-source-c94a59 animate-pulse" />
              <span className="font-semibold text-source-periwinkle-light">
                Stage {PROCESS_STEPS[activeProcessStep]?.step}:
              </span>
              <span className="font-bold text-white">
                {PROCESS_STEPS[activeProcessStep]?.title}
              </span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="text-[11px] text-white/90 hidden sm:inline">
                Auto-advancing through each stage
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeProcessStep === idx;
              const stepAnim =
                idx === 0
                  ? "reveal-from-left delay-100"
                  : idx === 1
                    ? "reveal-from-bottom delay-150"
                    : idx === 2
                      ? "reveal-from-bottom delay-200"
                      : "reveal-from-right delay-250";

              return (
                <div
                  key={step.step}
                  onClick={() => handleSelectProcessStep(idx)}
                  className={`reveal-on-scroll ${stepAnim} relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer text-left ${
                    isActive
                      ? "bg-white/95 backdrop-blur-xl border-2 border-source-c94a59 shadow-2xl scale-[1.03] ring-4 ring-source-c94a59/20"
                      : "bg-white/60 hover:bg-white/80 backdrop-blur-md border border-white/70 shadow-md hover:scale-[1.01]"
                  }`}
                >
                  {/* Active Step Indicator Pill & Animated Progress Bar */}
                  {isActive && (
                    <div className="absolute -top-1.5 left-6 right-6 h-1 bg-source-c94a59/25 rounded-full overflow-hidden shadow-xs">
                      <div
                        key={`prog-${activeProcessStep}`}
                        className="h-full bg-source-c94a59 rounded-full"
                        style={{
                          animation: "kriora-progress 3.5s linear forwards",
                        }}
                      />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`font-heading text-4xl font-bold transition-colors ${
                          isActive ? "text-source-c94a59" : "text-source-1b263b/70"
                        }`}
                      >
                        {step.step}
                      </span>
                      {isActive && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-source-c94a59 text-white shadow-2xs">
                          Active Step
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-source-1b263b mb-2">{step.title}</h3>
                    <p className="text-xs text-source-243247 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/10 text-[11px] text-source-1b263b">
                    <span className="text-source-c94a59 block mb-0.5 font-bold uppercase tracking-wider text-[10px]">
                      Outcome:
                    </span>
                    <span className="font-semibold text-source-1b263b">{step.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Progress Indicator Dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {PROCESS_STEPS.map((_, idx) => (
              <Button
                variant="source"
                size="source"
                key={idx}
                onClick={() => handleSelectProcessStep(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeProcessStep === idx
                    ? "w-8 bg-source-c94a59 shadow-md"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to step ${idx + 1}`}
                title={`Go to Step 0${idx + 1}`}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="source"
              size="source"
              onClick={() => navigate("/how-it-works")}
              className="text-xs uppercase tracking-wider text-[#FAF7EE] bg-source-1b263b/80 hover:bg-source-c94a59 border border-white/30 hover:border-source-c94a59 px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2 transition-all shadow-md backdrop-blur-md cursor-pointer"
            >
              <span>Learn More About Ordering & Delivery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Product Gallery Filter Section */}
      <section className="py-20 bg-source-faf7ee border-b border-source-eae4d6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2 reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 block">
              Product Showcase
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-1">
              Explore the Catalogue
            </h2>
            <p className="text-source-5a6b7c text-sm">
              Discover artisan pieces crafted for workplace desks, festive traditions, and corporate
              appreciation.
            </p>
          </div>

          {/* Centered Interactive Filter Controls */}
          <div className="flex justify-center mb-10 reveal-on-scroll reveal-from-top delay-100">
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white border border-source-e8e2d5 rounded-xl shadow-xs">
              <Button
                variant="source"
                size="source"
                onClick={() => setActiveGalleryTab("desk-office-essentials")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeGalleryTab === "desk-office-essentials"
                    ? "bg-source-c94a59 text-white shadow-xs"
                    : "text-source-243247 hover:text-source-c94a59"
                }`}
              >
                Desk & Office Essentials
              </Button>
              <Button
                variant="source"
                size="source"
                onClick={() => setActiveGalleryTab("festive-celebration")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeGalleryTab === "festive-celebration"
                    ? "bg-source-c94a59 text-white shadow-xs"
                    : "text-source-243247 hover:text-source-c94a59"
                }`}
              >
                Festive & Celebration
              </Button>
              <Button
                variant="source"
                size="source"
                onClick={() => setActiveGalleryTab("lifestyle-keepsakes")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeGalleryTab === "lifestyle-keepsakes"
                    ? "bg-source-c94a59 text-white shadow-xs"
                    : "text-source-243247 hover:text-source-c94a59"
                }`}
              >
                Lifestyle & Keepsakes
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryProducts.map((p, idx) => {
              const gAnim =
                idx === 0
                  ? "reveal-from-left delay-100"
                  : idx === 1
                    ? "reveal-from-bottom delay-150"
                    : idx === 2
                      ? "reveal-from-bottom delay-200"
                      : "reveal-from-right delay-250";

              return (
                <div key={p.id} className={`reveal-on-scroll ${gAnim}`}>
                  <ProductCard
                    product={p}
                    onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                    onSelectForEnquiry={(item) => openQuickEnquiry(item.name)}
                  />
                </div>
              );
            })}
          </div>

          {/* Redirect Buttons Below the 4 Showcase Products */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center reveal-on-scroll reveal-from-bottom delay-150">
            <Button
              variant="source"
              size="source"
              onClick={() => navigate(`/products/${activeGalleryTab}`)}
              className="px-8 py-3.5 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>View All {activeCategory?.title || "Collection"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="source"
              size="source"
              onClick={() => navigate("/products")}
              className="px-6 py-3.5 bg-white hover:bg-source-faf7ee text-source-1b263b border border-source-d5cebe hover:border-source-c94a59 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>View Full Catalogue</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 7B. Retail & Individual Purchase (Direct Buy Now & Details) */}
      <section className="py-16 bg-white border-b border-source-eae4d6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3 reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 block">
              Individual & Retail Purchase
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
              Handcrafted Pieces Ready for Instant Order
            </h2>
            <p className="text-sm text-source-5a6b7c leading-relaxed max-w-2xl mx-auto">
              Looking for individual pieces or sample evaluation? You can explore detailed
              specifications or place your order directly via WhatsApp with personal customer
              assistance and pan-India doorstep delivery.
            </p>
            <div className="pt-2 flex justify-center">
              <Button
                variant="source"
                size="source"
                onClick={() => navigate("/b2b-enquiry")}
                className="px-6 py-2.5 bg-source-faf7ee hover:bg-source-f0ebe1 text-source-1b263b hover:text-source-c94a59 border border-source-e8e2d5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer"
              >
                For Bulk Corporate Orders Click Here
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketplaceProducts.map((p, idx) => {
              const mAnim =
                idx === 0
                  ? "reveal-from-left delay-100"
                  : idx === 1
                    ? "reveal-from-bottom delay-150"
                    : idx === 2
                      ? "reveal-from-bottom delay-200"
                      : "reveal-from-right delay-250";

              return (
                <div
                  key={`mkt-${p.id}`}
                  className={`reveal-on-scroll ${mAnim} bg-source-faf7ee/60 hover:bg-source-faf7ee border border-source-e8e2d5 rounded-2xl p-4 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group card-hover-lift`}
                >
                  <div>
                    <div
                      onClick={() => navigate(`/product/${p.id}`)}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white mb-3 cursor-pointer border border-source-eae4d6"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-source-c94a59 bg-white/95 px-2 py-0.5 rounded shadow-2xs">
                          {p.categoryLabel}
                        </span>
                      </div>
                    </div>
                    <h4
                      onClick={() => navigate(`/product/${p.id}`)}
                      className="text-sm font-bold text-source-1b263b group-hover:text-source-c94a59 transition-colors cursor-pointer line-clamp-1"
                    >
                      {p.name}
                    </h4>
                    <p className="text-xs text-source-5a6b7c mt-1 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-source-e8e2d5 flex items-center gap-2">
                    <Button
                      variant="source"
                      size="source"
                      onClick={() => navigate(`/product/${p.id}`)}
                      className="flex-1 py-2 px-2.5 bg-white hover:bg-source-c94a59 text-source-1b263b hover:text-white border border-source-d5cebe hover:border-source-c94a59 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs group/btn cursor-pointer"
                      title={`View full details of ${p.name}`}
                    >
                      <Eye className="w-3.5 h-3.5 text-source-c94a59 group-hover/btn:text-white transition-colors" />
                      <span>Details</span>
                    </Button>

                    <a
                      href={createBuyNowWhatsAppUrl(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-2.5 bg-source-25d366 hover:bg-source-20bd5a text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98]"
                      title={`Buy Now ${p.name} on WhatsApp`}
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>Buy Now</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Client Reviews: With Clear Corporate Gifting Background & Translucent Foreground Review Cards */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-source-1b263b border-b border-source-d8dcf5">
        {/* Background Image: Crisp, Clear & Beautifully Visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/corporate_review_bg.jpg"
            alt="KRIORA Handcrafted Corporate Gifting Hamper Collection"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle balanced gradient overlay: keeps image bright & sharp while ensuring contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FAF7EE] bg-[#C94A59] px-4 py-1.5 rounded-full shadow-md inline-block">
              Corporate Client Feedback
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mt-3 [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]">
              What Corporate Partners Say
            </h2>
            <p className="text-[#FAF7EE] text-sm sm:text-base mt-2.5 leading-relaxed max-w-xl mx-auto [text-shadow:_0_1px_8px_rgba(0,0,0,0.85)] font-medium">
              Real experiences from HR leaders, event directors, and procurement heads across India.
            </p>
          </div>

          {/* Centered Single Review Box: Translucent Frosted Glass allowing background image to show through */}
          <div
            onMouseEnter={() => setIsReviewPaused(true)}
            onMouseLeave={() => setIsReviewPaused(false)}
            className="reveal-on-scroll reveal-zoom-in delay-150 relative bg-white/45 sm:bg-white/50 backdrop-blur-md border border-white/70 rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-500 max-w-2xl mx-auto ring-1 ring-black/10"
          >
            {/* Occasion Badge */}
            <div className="flex justify-center sm:justify-end mb-4 sm:mb-0">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-source-c94a59 bg-white/90 px-3.5 py-1 rounded-full border border-source-c94a59/30 shadow-xs">
                {CLIENT_REVIEWS[currentReviewIndex]?.occasion}
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              {/* 1. Client Image at the Top */}
              <div className="relative mb-4">
                <img
                  src={CLIENT_REVIEWS[currentReviewIndex]?.avatar}
                  alt={CLIENT_REVIEWS[currentReviewIndex]?.clientName}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-4 ring-white/90 shadow-lg mx-auto"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border border-source-e8e2d5 flex items-center justify-center text-source-c94a59 shadow-xs">
                  <Quote className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>

              {/* 2. Client Name & Designation Below Image */}
              <h3 className="text-lg sm:text-xl font-bold text-source-1b263b [text-shadow:_0_1px_2px_rgba(255,255,255,0.8)]">
                {CLIENT_REVIEWS[currentReviewIndex]?.clientName}
              </h3>
              <p className="text-xs sm:text-sm text-source-243247 mt-0.5 font-semibold">
                {CLIENT_REVIEWS[currentReviewIndex]?.designation}
              </p>
              <p className="text-xs font-bold text-source-c94a59 mt-0.5">
                {CLIENT_REVIEWS[currentReviewIndex]?.organisation}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-500 my-3">
                {[...Array(CLIENT_REVIEWS[currentReviewIndex]?.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* 3. Review Quote in Translucent Backed Bubble for Crisp Contrast */}
              <div className="bg-white/60 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-white/60 shadow-2xs mt-1 max-w-lg">
                <p className="text-sm sm:text-base text-source-1b263b leading-relaxed font-body italic font-medium">
                  “{CLIENT_REVIEWS[currentReviewIndex]?.quote}”
                </p>
              </div>
            </div>

            {/* Navigation Arrow Controls */}
            <Button
              variant="source"
              size="source"
              onClick={() =>
                setCurrentReviewIndex((prev) => (prev === 0 ? CLIENT_REVIEWS.length - 1 : prev - 1))
              }
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-source-1b263b border border-white shadow-md hover:text-source-c94a59 transition-all cursor-pointer active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="source"
              size="source"
              onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % CLIENT_REVIEWS.length)}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-source-1b263b border border-white shadow-md hover:text-source-c94a59 transition-all cursor-pointer active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-white/40">
              {CLIENT_REVIEWS.map((_, idx) => (
                <Button
                  variant="source"
                  size="source"
                  key={idx}
                  onClick={() => setCurrentReviewIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentReviewIndex === idx
                      ? "w-6 bg-source-c94a59"
                      : "w-2 bg-source-1b263b/35 hover:bg-source-1b263b/60"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions (FAQ) Section (NEW) */}
      <section className="py-20 bg-source-faf7ee border-b border-source-eae4d6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-on-scroll reveal-from-top">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59">
              Corporate Procurement Guidance
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-source-5a6b7c text-sm mt-3 max-w-xl mx-auto">
              Everything you need to know about order volumes, custom logo engraving, bespoke
              hampers, and delivery across India.
            </p>
          </div>

          {/* Interactive Accordion */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqId === faq.id;
              const faqAnim = idx % 2 === 0 ? "reveal-from-left" : "reveal-from-right";
              const delay = `delay-${Math.min(100 + idx * 50, 400)}`;

              return (
                <div
                  key={faq.id}
                  className={`reveal-on-scroll ${faqAnim} ${delay} bg-white border border-source-e8e2d5 rounded-2xl overflow-hidden transition-all shadow-xs`}
                >
                  <Button
                    variant="source"
                    size="source"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-source-1b263b">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                        isOpen
                          ? "bg-source-c94a59 text-white rotate-180"
                          : "bg-source-faf7ee text-source-5a6b7c"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </Button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-source-475569 leading-relaxed border-t border-source-f8f6f0 font-body animate-fade-in-up">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="reveal-on-scroll reveal-from-bottom delay-150 mt-10 p-5 rounded-2xl bg-source-eceefb border border-source-dfe3f7 text-center text-xs text-source-475569 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-source-c94a59" />
              <span className="font-semibold text-source-1b263b">
                Have a specific project question or deadline?
              </span>
            </div>
            <a
              href={createWhatsAppUrl(
                undefined,
                "Hello Namrata, I have a query regarding corporate gifting requirements.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold rounded-xl text-xs transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. Start Your Business Enquiry */}
      <MemorableTogetherSection />
    </div>
  );
};
