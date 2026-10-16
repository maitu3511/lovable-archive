import React, { useState, useRef, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
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
const PROCESS_STEP_BACKGROUNDS = [
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

export const HomePage: React.FC = () => {
  const { navigate, openQuickEnquiry } = useNavigation();
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("desk-office-essentials");
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
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
    <div className="min-h-screen bg-[#FAF7EE] text-[#1B263B]">
      {/* 1. Hero Section (Warm Ivory + Periwinkle & Coral Accents) */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden border-b border-[#EAE4D6]">
        {/* Soft Ambient Pastel Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#B4B9DF]/30 via-[#C94A59]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Brand Tagline Badge in Brochure Periwinkle */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ECEEFB] border border-[#B4B9DF]/60 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C94A59]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#1B263B] font-bold">
                  {BRAND_INFO.name} · {BRAND_INFO.tagline}
                </span>
              </div>

              {/* Main Headline - Centered */}
              <div className="text-center">
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-[#1B263B] leading-[1.2] text-center">
                  Thoughtful Corporate Gifting.{" "}
                  <span className="text-[#C94A59] block mt-1 font-heading text-center">
                    Beautifully Personalised.
                  </span>
                </h1>
                <p className="mt-3 text-sm sm:text-base font-semibold text-[#8C6239] tracking-wide text-center">
                  “Gifts that feel considered, useful and memorable.”
                </p>
              </div>

              {/* Supporting Text */}
              <p className="font-body text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                “Discover thoughtfully curated gifting solutions for businesses, employee
                milestones, festive celebrations and meaningful appreciation. From useful desk
                essentials to customised keepsakes, KRIORA helps businesses make every gift
                memorable.”
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigate("/products")}
                  className="px-7 py-3.5 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Our Collections</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={createWhatsAppUrl(
                    undefined,
                    "Discuss bulk order requirements for our organisation",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-white hover:bg-[#FAF7EE] text-[#1B263B] border border-[#D5CEBE] hover:border-[#C94A59] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Discuss Your Bulk Order</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-[#E8E2D5] grid grid-cols-3 gap-4 text-xs">
                <div>
                  <p className="text-[#1B263B] font-bold text-sm">Strictly B2B</p>
                  <p className="text-[11px] text-[#64748B]">Corporate & HR solutions</p>
                </div>
                <div>
                  <p className="text-[#1B263B] font-bold text-sm">Logo Engraved</p>
                  <p className="text-[11px] text-[#64748B]">Tailored branding</p>
                </div>
                <div>
                  <p className="text-[#1B263B] font-bold text-sm">Namrata Adhvaryu</p>
                  <p className="text-[11px] text-[#64748B]">Direct consultation</p>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Soft pastel backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#B4B9DF]/50 to-[#FCE7EB]/50 rounded-3xl blur-xl opacity-80" />

                <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E8E2D5] shadow-xl">
                  <img
                    src={BRAND_INFO.heroImage}
                    alt="KRIORA Premium Corporate Gifting Suite"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/10] lg:aspect-square"
                  />
                  <div className="p-5 bg-white border-t border-[#F0EBE1]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[#C94A59] font-bold">
                          Executive Gifting Suite
                        </p>
                        <p className="text-xs text-[#5A6B7C]">
                          Handcrafted wood, brass accents & bespoke diary
                        </p>
                      </div>
                      <button
                        onClick={() => openQuickEnquiry("Executive Gifting Suite")}
                        className="px-3.5 py-1.5 rounded-lg bg-[#C94A59] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#B33947] transition-colors shadow-xs"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Solutions Section (Brochure Periwinkle Palette Accent) */}
      <section className="py-20 bg-[#ECEEFB] border-b border-[#D8DCF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
              Tailored Corporate Programmes
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#1B263B] mt-2">
              Gifting Solutions for Every Business Occasion
            </h2>
            <p className="text-[#5A6B7C] text-sm mt-3 leading-relaxed">
              Every occasion holds a unique intention. We collaborate with corporate teams, HR
              leads, and event organizers to curate gifting that reflects your culture.
            </p>
          </div>

          {/* 5 Solution Cards - Compact & Balanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUSINESS_SOLUTIONS.map((solution, idx) => (
              <div
                key={solution.id}
                className={`bg-white border border-[#DFE3F7] hover:border-[#C94A59]/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md ${
                  idx === 0 ? "lg:col-span-2 lg:flex-row" : ""
                }`}
              >
                <div
                  className={`relative bg-[#F4F0E4] overflow-hidden shrink-0 ${
                    idx === 0 ? "lg:w-5/12 aspect-[16/10] lg:aspect-auto" : "aspect-[16/9] max-h-44"
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C94A59]">
                      {solution.subtitle}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#1B263B] mt-0.5 group-hover:text-[#C94A59] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-xs text-[#5A6B7C] mt-1.5 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-[#F0EBE1] text-[11px] flex items-center gap-1.5 flex-wrap">
                      <span className="text-[#8A9BB5] font-semibold shrink-0">Includes:</span>
                      <span className="text-[#243247] font-medium">
                        {solution.typicalItems.join(" · ")}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex items-center justify-between">
                    <a
                      href={createWhatsAppUrl(
                        solution.title,
                        `We are planning for ${solution.title}. Please share feasible options and samples.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#C94A59] hover:text-[#B33947] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Discuss Requirement</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-[#64748B]">
              * Note: The collection can be discussed for bulk requirements and customised gifting
              projects. Final availability depends on confirmed order scale and timelines.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Product Collections */}
      <section className="py-20 bg-[#FAF7EE] border-b border-[#EAE4D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
                Curated Catalogue
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#1B263B] mt-2">
                Featured Product Collections
              </h2>
              <p className="text-[#5A6B7C] text-sm mt-2 max-w-xl">
                Representative highlights from Desk Essentials, Festive Traditions, and Bespoke
                Lifestyle Keepsakes.
              </p>
            </div>

            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C94A59] hover:text-[#B33947] font-bold transition-colors"
            >
              <span>View All 30 Catalog Items</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Category Banner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                onClick={() => navigate(`/products/${cat.slug}`)}
                className="group relative bg-white border border-[#E8E2D5] hover:border-[#C94A59]/40 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#F4F0E4]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold text-[#C94A59] uppercase tracking-wider">
                    {cat.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-[#1B263B] group-hover:text-[#C94A59] transition-colors mt-0.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#5A6B7C] mt-2 line-clamp-2 leading-relaxed">
                    {cat.summary}
                  </p>
                  <div className="mt-4 flex items-center text-xs text-[#C94A59] font-bold gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Collection</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Product Cards in 1 Scrolling Line */}
          <div className="relative">
            {/* Scroll Navigation Header & Controls */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#5A6B7C] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C94A59]" />
                <span>Scroll horizontally to view featured highlights</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollFeatured("left")}
                  className="p-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1B263B] hover:text-[#C94A59] hover:border-[#C94A59] transition-all shadow-xs cursor-pointer active:scale-95"
                  aria-label="Scroll featured products left"
                  title="Scroll Left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollFeatured("right")}
                  className="p-2.5 rounded-xl bg-white border border-[#E8E2D5] text-[#1B263B] hover:text-[#C94A59] hover:border-[#C94A59] transition-all shadow-xs cursor-pointer active:scale-95"
                  aria-label="Scroll featured products right"
                  title="Scroll Right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
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
      <section className="py-20 bg-[#F4F0E4] border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
              The KRIORA Distinction
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#1B263B] mt-2">
              Why Choose KRIORA
            </h2>
            <p className="text-[#5A6B7C] text-sm mt-3">
              Rooted in the philosophy of Wit • Whimsy • Wonder, delivering excellence without
              generic corporate tropes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_CHOOSE_KRIORA.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#DFE3F7] border border-[#CCD3F2] rounded-2xl p-8 transition-all hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#CCD3F2] flex items-center justify-center text-[#C94A59] mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    {pillar.title === "Thoughtful Personalisation" && (
                      <Sparkles className="w-6 h-6" />
                    )}
                    {pillar.title === "Reliable Fulfilment" && <ShieldCheck className="w-6 h-6" />}
                    {pillar.title === "Distinct Aesthetic" && <Palette className="w-6 h-6" />}
                  </div>

                  <h3 className="text-lg font-bold text-[#1B263B] mb-2 group-hover:text-[#C94A59] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Customisation & Branding Teaser */}
      <section className="py-20 bg-[#FAF7EE] border-b border-[#EAE4D6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E2D5] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg relative">
            <div className="max-w-2xl space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
                Custom Branding & Personalisation
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#1B263B] leading-snug">
                Your Brand. Your Occasion. Your Personal Touch.
              </h2>
              <p className="text-[#5A6B7C] text-sm sm:text-base leading-relaxed">
                “Create gifting experiences that reflect your organisation’s identity, occasion and
                message. Discuss your ideas with KRIORA to explore suitable products and
                personalisation possibilities.”
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs text-[#243247]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C94A59]" />
                  <span>Logo Engraving</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C94A59]" />
                  <span>Foil Stamping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C94A59]" />
                  <span>Rigid Gift Boxes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C94A59]" />
                  <span>Custom Notes</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/customisation")}
                  className="px-6 py-3 bg-[#C94A59] hover:bg-[#B33947] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                >
                  Explore Customisation Options
                </button>
                <a
                  href={createWhatsAppUrl(
                    undefined,
                    "We would like to discuss custom branding with our company logo",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FAF7EE] hover:bg-[#F0EBE1] text-[#1B263B] border border-[#D5CEBE] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Discuss a Custom Order</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works (Brochure's "The Simple Ordering Journey") with Auto-Advancing Background */}
      <section className="relative py-24 sm:py-28 overflow-hidden bg-[#1B263B] border-b border-[#D8DCF5]">
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
          <div className="absolute inset-0 bg-[#1B263B]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
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
              <span className="w-2 h-2 rounded-full bg-[#C94A59] animate-pulse" />
              <span className="font-semibold text-[#ECEEFB]">
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
              return (
                <div
                  key={step.step}
                  onClick={() => handleSelectProcessStep(idx)}
                  className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer text-left ${
                    isActive
                      ? "bg-white/95 backdrop-blur-xl border-2 border-[#C94A59] shadow-2xl scale-[1.03] ring-4 ring-[#C94A59]/20"
                      : "bg-white/60 hover:bg-white/80 backdrop-blur-md border border-white/70 shadow-md hover:scale-[1.01]"
                  }`}
                >
                  {/* Active Step Indicator Pill & Animated Progress Bar */}
                  {isActive && (
                    <div className="absolute -top-1.5 left-6 right-6 h-1 bg-[#C94A59]/25 rounded-full overflow-hidden shadow-xs">
                      <div
                        key={`prog-${activeProcessStep}`}
                        className="h-full bg-[#C94A59] rounded-full"
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
                          isActive ? "text-[#C94A59]" : "text-[#1B263B]/70"
                        }`}
                      >
                        {step.step}
                      </span>
                      {isActive && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#C94A59] text-white shadow-2xs">
                          Active Step
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-[#1B263B] mb-2">{step.title}</h3>
                    <p className="text-xs text-[#243247] leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-black/10 text-[11px] text-[#1B263B]">
                    <span className="text-[#C94A59] block mb-0.5 font-bold uppercase tracking-wider text-[10px]">
                      Outcome:
                    </span>
                    <span className="font-semibold text-[#1B263B]">{step.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Progress Indicator Dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {PROCESS_STEPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectProcessStep(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeProcessStep === idx
                    ? "w-8 bg-[#C94A59] shadow-md"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to step ${idx + 1}`}
                title={`Go to Step 0${idx + 1}`}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/how-it-works")}
              className="text-xs uppercase tracking-wider text-white hover:text-[#FFB4BA] font-bold inline-flex items-center gap-1.5 transition-colors bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-xl border border-white/20 backdrop-blur-sm shadow-sm"
            >
              <span>Learn More About Ordering & Delivery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Product Gallery Filter Section */}
      <section className="py-20 bg-[#FAF7EE] border-b border-[#EAE4D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
                Product Showcase
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#1B263B] mt-1">
                Explore the Catalogue
              </h2>
            </div>

            {/* Interactive Filter Controls: 3 Dedicated Categories Only */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E8E2D5] rounded-xl shadow-xs">
              <button
                onClick={() => setActiveGalleryTab("desk-office-essentials")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeGalleryTab === "desk-office-essentials"
                    ? "bg-[#C94A59] text-white shadow-xs"
                    : "text-[#243247] hover:text-[#C94A59]"
                }`}
              >
                Desk & Office Essentials
              </button>
              <button
                onClick={() => setActiveGalleryTab("festive-celebration")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeGalleryTab === "festive-celebration"
                    ? "bg-[#C94A59] text-white shadow-xs"
                    : "text-[#243247] hover:text-[#C94A59]"
                }`}
              >
                Festive & Celebration
              </button>
              <button
                onClick={() => setActiveGalleryTab("lifestyle-keepsakes")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeGalleryTab === "lifestyle-keepsakes"
                    ? "bg-[#C94A59] text-white shadow-xs"
                    : "text-[#243247] hover:text-[#C94A59]"
                }`}
              >
                Lifestyle & Keepsakes
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                onSelectForEnquiry={(item) => openQuickEnquiry(item.name)}
              />
            ))}
          </div>

          {/* Redirect Buttons Below the 4 Showcase Products */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <button
              onClick={() => navigate(`/products/${activeGalleryTab}`)}
              className="px-8 py-3.5 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>View All {activeCategory?.title || "Collection"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/products")}
              className="px-6 py-3.5 bg-white hover:bg-[#FAF7EE] text-[#1B263B] border border-[#D5CEBE] hover:border-[#C94A59] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>View Full Catalogue</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7B. Retail & Individual Purchase (Direct Buy Now & Details) */}
      <section className="py-16 bg-white border-b border-[#EAE4D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
                Individual & Retail Purchase
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#1B263B] mt-2">
                Handcrafted Pieces Ready for Instant Order
              </h2>
              <p className="text-sm text-[#5A6B7C] mt-2.5 leading-relaxed">
                Looking for individual pieces or sample evaluation? You can explore detailed
                specifications or place your order directly via WhatsApp with personal customer
                assistance and pan-India doorstep delivery.
              </p>
            </div>
            <button
              onClick={() => navigate("/b2b-enquiry")}
              className="px-5 py-2.5 bg-[#FAF7EE] hover:bg-[#F0EBE1] text-[#1B263B] hover:text-[#C94A59] border border-[#E8E2D5] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-2xs cursor-pointer"
            >
              For Bulk Corporate Orders Click Here
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketplaceProducts.map((p) => (
              <div
                key={`mkt-${p.id}`}
                className="bg-[#FAF7EE]/60 hover:bg-[#FAF7EE] border border-[#E8E2D5] rounded-2xl p-4 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group"
              >
                <div>
                  <div
                    onClick={() => navigate(`/product/${p.id}`)}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white mb-3 cursor-pointer border border-[#EAE4D6]"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C94A59] bg-white/95 px-2 py-0.5 rounded shadow-2xs">
                        {p.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <h4
                    onClick={() => navigate(`/product/${p.id}`)}
                    className="text-sm font-bold text-[#1B263B] group-hover:text-[#C94A59] transition-colors cursor-pointer line-clamp-1"
                  >
                    {p.name}
                  </h4>
                  <p className="text-xs text-[#5A6B7C] mt-1 line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E2D5] flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/product/${p.id}`)}
                    className="flex-1 py-2 px-2.5 bg-white hover:bg-[#C94A59] text-[#1B263B] hover:text-white border border-[#D5CEBE] hover:border-[#C94A59] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs group/btn cursor-pointer"
                    title={`View full details of ${p.name}`}
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C94A59] group-hover/btn:text-white transition-colors" />
                    <span>Details</span>
                  </button>

                  <a
                    href={createBuyNowWhatsAppUrl(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98]"
                    title={`Buy Now ${p.name} on WhatsApp`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Buy Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Client Reviews: 1 Centered Box with 1 by 1 Automatic Rotation */}
      <section className="py-20 bg-[#ECEEFB] border-b border-[#D8DCF5] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
              Corporate Client Feedback
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#1B263B] mt-2">
              What Corporate Partners Say
            </h2>
            <p className="text-[#5A6B7C] text-sm mt-3 leading-relaxed max-w-xl mx-auto">
              Real experiences from HR leaders, event directors, and procurement heads across India.
            </p>
          </div>

          {/* Centered Single Review Box (1 by 1 Automatic Rotation) */}
          <div
            onMouseEnter={() => setIsReviewPaused(true)}
            onMouseLeave={() => setIsReviewPaused(false)}
            className="relative bg-white border border-[#DFE3F7] rounded-3xl p-8 sm:p-12 shadow-lg transition-all duration-500 max-w-2xl mx-auto"
          >
            {/* Occasion Badge */}
            <div className="flex justify-center sm:justify-end mb-4 sm:mb-0">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C94A59] bg-[#FAF7EE] px-3 py-1 rounded-full border border-[#E8E2D5]">
                {CLIENT_REVIEWS[currentReviewIndex].occasion}
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              {/* 1. Client Image at the Top */}
              <div className="relative mb-4">
                <img
                  src={CLIENT_REVIEWS[currentReviewIndex].avatar}
                  alt={CLIENT_REVIEWS[currentReviewIndex].clientName}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-4 ring-[#C94A59]/20 shadow-md mx-auto"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#FAF7EE] border border-[#E8E2D5] flex items-center justify-center text-[#C94A59] shadow-xs">
                  <Quote className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>

              {/* 2. Client Name & Designation Below Image */}
              <h3 className="text-lg sm:text-xl font-bold text-[#1B263B]">
                {CLIENT_REVIEWS[currentReviewIndex].clientName}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5 font-medium">
                {CLIENT_REVIEWS[currentReviewIndex].designation}
              </p>
              <p className="text-xs font-semibold text-[#8C6239] mt-0.5">
                {CLIENT_REVIEWS[currentReviewIndex].organisation}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#E5A83B] my-3">
                {[...Array(CLIENT_REVIEWS[currentReviewIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* 3. Review Quote */}
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-body italic mt-1 max-w-lg">
                “{CLIENT_REVIEWS[currentReviewIndex].quote}”
              </p>
            </div>

            {/* Navigation Arrow Controls */}
            <button
              onClick={() =>
                setCurrentReviewIndex((prev) => (prev === 0 ? CLIENT_REVIEWS.length - 1 : prev - 1))
              }
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-[#FAF7EE] text-[#1B263B] border border-[#DFE3F7] shadow-sm hover:text-[#C94A59] transition-all cursor-pointer active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % CLIENT_REVIEWS.length)}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-[#FAF7EE] text-[#1B263B] border border-[#DFE3F7] shadow-sm hover:text-[#C94A59] transition-all cursor-pointer active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-[#F0EBE1]">
              {CLIENT_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReviewIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentReviewIndex === idx
                      ? "w-6 bg-[#C94A59]"
                      : "w-2 bg-[#CCD3F2] hover:bg-[#B4B9DF]"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions (FAQ) Section (NEW) */}
      <section className="py-20 bg-[#FAF7EE] border-b border-[#EAE4D6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
              Corporate Procurement Guidance
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#1B263B] mt-2">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-[#5A6B7C] text-sm mt-3 max-w-xl mx-auto">
              Everything you need to know about order volumes, custom logo engraving, bespoke
              hampers, and delivery across India.
            </p>
          </div>

          {/* Interactive Accordion */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-[#E8E2D5] rounded-2xl overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#1B263B]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                        isOpen
                          ? "bg-[#C94A59] text-white rotate-180"
                          : "bg-[#FAF7EE] text-[#5A6B7C]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F8F6F0] font-body">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-[#ECEEFB] border border-[#DFE3F7] text-center text-xs text-[#475569] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#C94A59]" />
              <span className="font-semibold text-[#1B263B]">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold rounded-xl text-xs transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. Start Your Business Enquiry (Content-Matched Background Image & Centered Layout) */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
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
            Whether preparing for employee welcome kits, annual company festivals, VIP client
            tokens, or custom workshops, our team is ready to discuss your requirements.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/b2b-enquiry")}
              className="w-full sm:w-auto px-8 py-4 bg-[#C94A59] hover:bg-[#B33947] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.99] cursor-pointer"
            >
              Submit B2B Bulk Enquiry
            </button>
            <a
              href={createWhatsAppUrl(
                undefined,
                "Hello Namrata, we have a corporate gifting inquiry and would like to discuss.",
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
