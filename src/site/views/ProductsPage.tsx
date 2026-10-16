import sourceImage0Src from "@/assets/hero_products.jpg";
import { Button } from "@/components/ui/button";
import React, { useState, useMemo, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import {
  PRODUCTS,
  BUSINESS_SOLUTIONS,
  CUSTOMISATION_SERVICES,
  BRAND_INFO,
  createWhatsAppUrl,
  Product,
} from "../data/krioraData";
import { ProductCard } from "../components/ProductCard";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { SEOHead } from "../components/SEOHead";
import { MemorableTogetherSection } from "../components/MemorableTogetherSection";
import {
  Search,
  ArrowRight,
  Sparkles,
  Gift,
  Palette,
  PackageOpen,
  ShieldAlert,
  Flame,
  Wind,
  Gem,
  Award,
} from "lucide-react";
const sourceImage0 = { url: sourceImage0Src };

export const ProductsPage: React.FC = () => {
  const { navigate } = useNavigation();

  // Active top tab on the products page: 'catalogue' | 'corporate-gifting' | 'customisation'
  const [activeTab, setActiveTab] = useState<"catalogue" | "corporate-gifting" | "customisation">(
    "catalogue",
  );

  // Product catalogue filters
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Check URL hash or query on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === "corporate-gifting" || hash === "gifting") {
        setActiveTab("corporate-gifting");
      } else if (hash === "customisation" || hash === "branding") {
        setActiveTab("customisation");
      }
    }
  }, []);

  const deskProducts = useMemo(
    () => PRODUCTS.filter((p) => p.category === "desk-office-essentials"),
    [],
  );

  const festiveProducts = useMemo(
    () => PRODUCTS.filter((p) => p.category === "festive-celebration"),
    [],
  );

  const lifestyleProducts = useMemo(
    () => PRODUCTS.filter((p) => p.category === "lifestyle-keepsakes"),
    [],
  );

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title="Corporate Gifts Catalogue — Handcrafted Desk & Festive Items | KRIORA"
        description="Browse KRIORA's curated collection of handcrafted wooden desk organisers, aromatic candles, festive dry fruit hampers, clutches & executive gifts."
        canonicalPath="/products"
        keywords="corporate gifts catalogue, wooden desk organiser, festive gift boxes, luxury clutches, scented candles corporate gifting, personalized corporate gifts"
        ogImage="/images/hero_products.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "KRIORA Corporate Gifts Catalogue",
          url: "https://kriora.in/products",
          description:
            "Curated collection of 30 handcrafted corporate gifts, employee milestone keepsakes, and festive hampers.",
        }}
      />

      {/* Page Header */}
      <section className="relative isolate overflow-hidden pt-14 pb-12 border-b border-source-eae4d6 bg-gradient-to-b from-source-eceefb/40 to-source-faf7ee">
        <HeroBackground image={sourceImage0.url} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="animate-fade-in-down text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 inline-block">
            KRIORA Product & Gifting Hub
          </span>
          <h1 className="animate-fade-in-left delay-100 font-heading text-3xl sm:text-4xl md:text-5xl text-source-1b263b mt-2 text-center mx-auto">
            Products, Corporate Gifting & Customisation
          </h1>
          <p className="animate-fade-in-right delay-200 text-sm sm:text-base text-source-5a6b7c mt-3 leading-relaxed max-w-2xl mx-auto text-center">
            Explore our complete product catalogue, bespoke corporate gifting packages, and brand
            personalisation options—curated in one seamless view for enterprise procurement, retail
            purchases, and festive bulk orders.
          </p>

          {/* Primary View Switcher Tabs (Centered) */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 pt-4 border-t border-source-e8e2d5">
            <Button
              variant="source"
              size="source"
              onClick={() => setActiveTab("catalogue")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "catalogue"
                  ? "bg-source-c94a59 text-white shadow-md"
                  : "bg-white text-source-243247 hover:text-source-c94a59 border border-source-e8e2d5 hover:border-source-c94a59/40"
              }`}
            >
              <PackageOpen className="w-4 h-4" />
              <span>Glimpse of Products</span>
            </Button>

            <Button
              variant="source"
              size="source"
              onClick={() => setActiveTab("corporate-gifting")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "corporate-gifting"
                  ? "bg-source-c94a59 text-white shadow-md"
                  : "bg-white text-source-243247 hover:text-source-c94a59 border border-source-e8e2d5 hover:border-source-c94a59/40"
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>Corporate Gifting</span>
            </Button>

            <Button
              variant="source"
              size="source"
              onClick={() => setActiveTab("customisation")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "customisation"
                  ? "bg-source-c94a59 text-white shadow-md"
                  : "bg-white text-source-243247 hover:text-source-c94a59 border border-source-e8e2d5 hover:border-source-c94a59/40"
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Customisation & Branding</span>
            </Button>

            {/* Quick jump to B2B Inquiry Form */}
            <Button
              variant="source"
              size="source"
              onClick={() => navigate("/b2b-enquiry")}
              className="ml-auto px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-source-c94a59 hover:bg-source-faf7ee bg-white border border-source-c94a59/30 rounded-xl transition-colors cursor-pointer hidden md:flex items-center gap-1.5"
            >
              <span>Submit B2B Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 1. PRODUCT CATALOGUE SECTION (Shown when activeTab === 'catalogue') */}
      {/* ============================================================== */}
      {activeTab === "catalogue" && (
        <>
          {/* GLIMPSE OF PRODUCTS BANNER */}
          <section className="py-8 bg-source-f8f5ec border-b border-source-eae4d6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-2 reveal-on-scroll reveal-from-top">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-source-eceefb border border-source-b4b9df text-source-c94a59 text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>GLIMPSE OF PRODUCTS</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-2">
                  Curated Workplace, Festive & Lifestyle Catalogue
                </h2>
                <p className="text-xs sm:text-sm text-source-5a6b7c mt-1 max-w-2xl mx-auto leading-relaxed">
                  Explore handcrafted essentials engineered with noble materials, custom logo
                  branding, and dedicated individual product details with instant WhatsApp ordering.
                </p>
              </div>
            </div>
          </section>

          {/* Sticky Category Filters and Search Bar */}
          <section className="sticky top-20 z-30 bg-source-faf7ee/95 backdrop-blur-md border-b border-source-eae4d6 py-3.5 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Category Buttons - Clean labels without numbers or Part 1/2/3 */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  <Button
                    variant="source"
                    size="source"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearchQuery("");
                    }}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === "all" && !searchQuery
                        ? "bg-source-c94a59 text-white shadow-xs"
                        : "text-source-243247 hover:text-source-c94a59 bg-white border border-source-e8e2d5"
                    }`}
                  >
                    All Collections
                  </Button>
                  <Button
                    variant="source"
                    size="source"
                    onClick={() => {
                      setSelectedCategory("desk-office-essentials");
                      setSearchQuery("");
                    }}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === "desk-office-essentials"
                        ? "bg-source-c94a59 text-white shadow-xs"
                        : "text-source-243247 hover:text-source-c94a59 bg-white border border-source-e8e2d5"
                    }`}
                  >
                    Desk & Office Essentials
                  </Button>
                  <Button
                    variant="source"
                    size="source"
                    onClick={() => {
                      setSelectedCategory("festive-celebration");
                      setSearchQuery("");
                    }}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === "festive-celebration"
                        ? "bg-source-c94a59 text-white shadow-xs"
                        : "text-source-243247 hover:text-source-c94a59 bg-white border border-source-e8e2d5"
                    }`}
                  >
                    Festive & Celebration
                  </Button>
                  <Button
                    variant="source"
                    size="source"
                    onClick={() => {
                      setSelectedCategory("lifestyle-keepsakes");
                      setSearchQuery("");
                    }}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === "lifestyle-keepsakes"
                        ? "bg-source-c94a59 text-white shadow-xs"
                        : "text-source-243247 hover:text-source-c94a59 bg-white border border-source-e8e2d5"
                    }`}
                  >
                    Lifestyle & Keepsakes
                  </Button>
                </div>

                {/* Search Input */}
                <div className="relative min-w-[240px]">
                  <Search className="w-4 h-4 text-source-8a9bb5 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search catalogue by name or material..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b placeholder-source-8a9bb5 shadow-xs"
                  />
                  {searchQuery && (
                    <Button
                      variant="source"
                      size="source"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-source-8a9bb5 hover:text-source-1b263b text-xs cursor-pointer"
                    >
                      ×
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* CATALOGUE CONTENT */}
          <div className="py-12 space-y-16">
            {/* If searching or filtering single category, show filtered view */}
            {searchQuery !== "" ? (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm font-semibold text-source-1b263b">
                    Search Results for &ldquo;{searchQuery}&rdquo;
                  </p>
                  <Button
                    variant="source"
                    size="source"
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-source-c94a59 font-bold hover:underline cursor-pointer"
                  >
                    Clear Search
                  </Button>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((p, idx) => (
                      <div
                        key={p.id}
                        className="reveal-on-scroll reveal-from-bottom"
                        style={{ transitionDelay: `${(idx % 4) * 75}ms` }}
                      >
                        <ProductCard
                          product={p}
                          onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white border border-source-e8e2d5 rounded-2xl p-8">
                    <Sparkles className="w-8 h-8 text-source-c94a59 mx-auto mb-3" />
                    <p className="text-base font-bold text-source-1b263b">
                      No products found matching &ldquo;{searchQuery}&rdquo;
                    </p>
                    <p className="text-xs text-source-5a6b7c mt-1">
                      Try another keyword or select a category tab above.
                    </p>
                  </div>
                )}
              </section>
            ) : selectedCategory !== "all" ? (
              /* Single Category Selected */
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {selectedCategory === "desk-office-essentials" && (
                  <div className="mb-8 border-b border-source-e8e2d5 pb-5 reveal-on-scroll reveal-from-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-source-c94a59">
                      GLIMPSE OF PRODUCTS
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-source-1b263b mt-1">
                      Desk & Office Essentials
                    </h2>
                    <p className="text-sm text-source-5a6b7c mt-1 italic font-serif">
                      Useful objects with a crafted, distinctive edge.
                    </p>
                  </div>
                )}

                {selectedCategory === "festive-celebration" && (
                  <div className="mb-8 border-b border-source-e8e2d5 pb-5 reveal-on-scroll reveal-from-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-source-c94a59">
                      GLIMPSE OF PRODUCTS
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-source-1b263b mt-1">
                      Festive & Celebration
                    </h2>
                    <p className="text-sm text-source-5a6b7c mt-1 italic font-serif">
                      Warm, versatile pieces designed for gifting moments.
                    </p>
                  </div>
                )}

                {selectedCategory === "lifestyle-keepsakes" && (
                  <div className="mb-8 border-b border-source-e8e2d5 pb-5 reveal-on-scroll reveal-from-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-source-c94a59">
                      GLIMPSE OF PRODUCTS
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-source-1b263b mt-1">
                      Lifestyle & Keepsakes
                    </h2>
                    <p className="text-sm text-source-5a6b7c mt-1 italic font-serif">
                      Compact statement pieces for everyday use, occasions and gifting.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((p, idx) => (
                    <div
                      key={p.id}
                      className="reveal-on-scroll reveal-from-bottom"
                      style={{ transitionDelay: `${(idx % 4) * 75}ms` }}
                    >
                      <ProductCard
                        product={p}
                        onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ) : (
              /* All Collections - Clean presentation without Part 1,2,3 or number counts */
              <div className="space-y-20">
                {/* -------------------------------------------------------- */}
                {/* Desk & Office Essentials */}
                {/* -------------------------------------------------------- */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-source-e8e2d5 gap-4 reveal-on-scroll reveal-from-left">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-source-c94a59">
                        Glimpse of Products
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl text-source-1b263b mt-1">
                        Desk & Office Essentials
                      </h2>
                      <p className="text-sm sm:text-base text-source-5a6b7c mt-1 italic font-serif">
                        Useful objects with a crafted, distinctive edge.
                      </p>
                    </div>

                    <div className="text-xs text-source-8a9bb5 font-semibold reveal-on-scroll reveal-from-right">
                      Handcrafted Workplace Objects
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {deskProducts.map((p, idx) => (
                      <div
                        key={p.id}
                        className="reveal-on-scroll reveal-from-bottom"
                        style={{ transitionDelay: `${(idx % 4) * 75}ms` }}
                      >
                        <ProductCard
                          product={p}
                          onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* -------------------------------------------------------- */}
                {/* Festive & Celebration */}
                {/* -------------------------------------------------------- */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-source-e8e2d5 gap-4 reveal-on-scroll reveal-from-left">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-source-c94a59">
                        Glimpse of Products
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl text-source-1b263b mt-1">
                        Festive & Celebration
                      </h2>
                      <p className="text-sm sm:text-base text-source-5a6b7c mt-1 italic font-serif">
                        Warm, versatile pieces designed for gifting moments.
                      </p>
                    </div>

                    <div className="text-xs text-source-8a9bb5 font-semibold reveal-on-scroll reveal-from-right">
                      Festive Celebration Designs
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {festiveProducts.map((p, idx) => (
                      <div
                        key={p.id}
                        className="reveal-on-scroll reveal-from-bottom"
                        style={{ transitionDelay: `${(idx % 4) * 75}ms` }}
                      >
                        <ProductCard
                          product={p}
                          onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                        />
                      </div>
                    ))}
                  </div>
                </section>

                {/* -------------------------------------------------------- */}
                {/* Lifestyle & Keepsakes */}
                {/* -------------------------------------------------------- */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-source-e8e2d5 gap-4 reveal-on-scroll reveal-from-left">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-source-c94a59">
                        Glimpse of Products
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl text-source-1b263b mt-1">
                        Lifestyle & Keepsakes
                      </h2>
                      <p className="text-sm sm:text-base text-source-5a6b7c mt-1 italic font-serif">
                        Compact statement pieces for everyday use, occasions and gifting.
                      </p>
                    </div>

                    <div className="text-xs text-source-8a9bb5 font-semibold reveal-on-scroll reveal-from-right">
                      Keepsakes, Clutches, Resin & Aromatics
                    </div>
                  </div>

                  {/* SPECIAL HIGHLIGHT ROW: Resin Essentials • Scented Candles • Signature Fragrances • Bespoke Gifts */}
                  <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-source-faf7ee to-source-eceefb/40 border border-source-e8e2d5 shadow-xs reveal-on-scroll reveal-from-bottom delay-100">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-source-c94a59">
                          <Sparkles className="w-4 h-4" />
                          <span>Curated Signature Spotlight</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-source-1b263b mt-1">
                          Resin Essentials, Candles, Fragrances & Bespoke Gifts
                        </h3>
                      </div>
                      <Button
                        variant="source"
                        size="source"
                        onClick={() =>
                          navigate("/b2b-enquiry?product=Curated%20Lifestyle%20Spotlight")
                        }
                        className="text-xs font-bold text-source-c94a59 hover:text-source-b33947 inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Customise Corporate Hamper</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* 1. Resin Essentials */}
                      <div className="bg-white rounded-2xl p-3 border border-source-e8e2d5 group hover:border-source-c94a59/40 hover:shadow-md transition-all">
                        <div
                          onClick={() => navigate("/product/resin-essentials")}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden bg-source-faf7ee mb-3 cursor-pointer"
                        >
                          <img
                            src={BRAND_INFO.resinImage}
                            alt="Resin Essentials"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2 left-2 bg-white/95 text-[10px] font-bold text-source-c94a59 px-2 py-0.5 rounded shadow-2xs">
                            Botanical Cast
                          </span>
                        </div>
                        <h4
                          onClick={() => navigate("/product/resin-essentials")}
                          className="font-bold text-sm text-source-1b263b cursor-pointer hover:text-source-c94a59 transition-colors"
                        >
                          Resin Essentials
                        </h4>
                        <p className="text-[11px] text-source-5a6b7c line-clamp-2 mt-0.5">
                          Real preserved botanicals, gold leaf flakes, and polished walnut base
                          paperweights.
                        </p>
                        <Button
                          variant="source"
                          size="source"
                          onClick={() => navigate("/product/resin-essentials")}
                          className="mt-3 w-full py-1.5 text-[11px] font-bold text-source-c94a59 bg-source-eceefb hover:bg-source-c94a59 hover:text-white rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </Button>
                      </div>

                      {/* 2. Scented Candles */}
                      <div className="bg-white rounded-2xl p-3 border border-source-e8e2d5 group hover:border-source-c94a59/40 hover:shadow-md transition-all">
                        <div
                          onClick={() => navigate("/product/scented-candles")}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden bg-source-faf7ee mb-3 cursor-pointer"
                        >
                          <img
                            src={BRAND_INFO.candleImage}
                            alt="Scented Candles"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2 left-2 bg-white/95 text-[10px] font-bold text-source-c94a59 px-2 py-0.5 rounded shadow-2xs">
                            100% Soy Wax
                          </span>
                        </div>
                        <h4
                          onClick={() => navigate("/product/scented-candles")}
                          className="font-bold text-sm text-source-1b263b cursor-pointer hover:text-source-c94a59 transition-colors"
                        >
                          Scented Candles
                        </h4>
                        <p className="text-[11px] text-source-5a6b7c line-clamp-2 mt-0.5">
                          Hand-poured in heavy amber glass with corked wood lid and calming
                          botanical aromatics.
                        </p>
                        <Button
                          variant="source"
                          size="source"
                          onClick={() => navigate("/product/scented-candles")}
                          className="mt-3 w-full py-1.5 text-[11px] font-bold text-source-c94a59 bg-source-eceefb hover:bg-source-c94a59 hover:text-white rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </Button>
                      </div>

                      {/* 3. Signature Fragrances */}
                      <div className="bg-white rounded-2xl p-3 border border-source-e8e2d5 group hover:border-source-c94a59/40 hover:shadow-md transition-all">
                        <div
                          onClick={() => navigate("/product/signature-fragrances")}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden bg-source-faf7ee mb-3 cursor-pointer"
                        >
                          <img
                            src={BRAND_INFO.fragranceImage}
                            alt="Signature Fragrances"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2 left-2 bg-white/95 text-[10px] font-bold text-source-c94a59 px-2 py-0.5 rounded shadow-2xs">
                            Reed Diffuser
                          </span>
                        </div>
                        <h4
                          onClick={() => navigate("/product/signature-fragrances")}
                          className="font-bold text-sm text-source-1b263b cursor-pointer hover:text-source-c94a59 transition-colors"
                        >
                          Signature Fragrances
                        </h4>
                        <p className="text-[11px] text-source-5a6b7c line-clamp-2 mt-0.5">
                          Frosted apothecary diffuser vessel with natural rattan reeds and luxury
                          essential oils.
                        </p>
                        <Button
                          variant="source"
                          size="source"
                          onClick={() => navigate("/product/signature-fragrances")}
                          className="mt-3 w-full py-1.5 text-[11px] font-bold text-source-c94a59 bg-source-eceefb hover:bg-source-c94a59 hover:text-white rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </Button>
                      </div>

                      {/* 4. Bespoke Gifts */}
                      <div className="bg-white rounded-2xl p-3 border border-source-e8e2d5 group hover:border-source-c94a59/40 hover:shadow-md transition-all">
                        <div
                          onClick={() => navigate("/product/bespoke-gifts")}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden bg-source-faf7ee mb-3 cursor-pointer"
                        >
                          <img
                            src={BRAND_INFO.bespokeImage}
                            alt="Bespoke Gifts"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2 left-2 bg-white/95 text-[10px] font-bold text-source-c94a59 px-2 py-0.5 rounded shadow-2xs">
                            Executive Suite
                          </span>
                        </div>
                        <h4
                          onClick={() => navigate("/product/bespoke-gifts")}
                          className="font-bold text-sm text-source-1b263b cursor-pointer hover:text-source-c94a59 transition-colors"
                        >
                          Bespoke Gifts
                        </h4>
                        <p className="text-[11px] text-source-5a6b7c line-clamp-2 mt-0.5">
                          Curated solid oak keepsake hampers with laser engraved brass plaques and
                          tailored journals.
                        </p>
                        <Button
                          variant="source"
                          size="source"
                          onClick={() => navigate("/product/bespoke-gifts")}
                          className="mt-3 w-full py-1.5 text-[11px] font-bold text-source-c94a59 bg-source-eceefb hover:bg-source-c94a59 hover:text-white rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* All Lifestyle & Keepsakes Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {lifestyleProducts.map((p, idx) => (
                      <div
                        key={p.id}
                        className="reveal-on-scroll reveal-from-bottom"
                        style={{ transitionDelay: `${(idx % 4) * 75}ms` }}
                      >
                        <ProductCard
                          product={p}
                          onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>
        </>
      )}

      {/* ============================================================== */}
      {/* 2. CORPORATE GIFTING SECTION (Shown when activeTab === 'corporate-gifting') */}
      {/* ============================================================== */}
      {activeTab === "corporate-gifting" && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Highlights Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-5 rounded-2xl bg-white border border-source-e8e2d5 shadow-xs reveal-on-scroll reveal-from-bottom delay-100 card-hover-lift">
                <p className="text-xs text-source-8a9bb5 font-semibold">Client Focus</p>
                <p className="text-sm sm:text-base font-bold text-source-1b263b mt-1">
                  Corporate & HR Teams
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-source-e8e2d5 shadow-xs reveal-on-scroll reveal-from-bottom delay-150 card-hover-lift">
                <p className="text-xs text-source-8a9bb5 font-semibold">Budget Flexibility</p>
                <p className="text-sm sm:text-base font-bold text-source-1b263b mt-1">
                  Custom Tiered Packages
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-source-e8e2d5 shadow-xs reveal-on-scroll reveal-from-bottom delay-200 card-hover-lift">
                <p className="text-xs text-source-8a9bb5 font-semibold">Organisation Branding</p>
                <p className="text-sm sm:text-base font-bold text-source-1b263b mt-1">
                  Laser Engraved & Printed
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-source-e8e2d5 shadow-xs reveal-on-scroll reveal-from-bottom delay-250 card-hover-lift">
                <p className="text-xs text-source-8a9bb5 font-semibold">Logistics</p>
                <p className="text-sm sm:text-base font-bold text-source-1b263b mt-1">
                  Hub & Doorstep Delivery
                </p>
              </div>
            </div>

            {/* Gifting Solutions Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BUSINESS_SOLUTIONS.map((sol, idx) => {
                const sAnim =
                  idx % 3 === 0
                    ? "reveal-from-left delay-100"
                    : idx % 3 === 1
                      ? "reveal-from-bottom delay-150"
                      : "reveal-from-right delay-200";

                return (
                  <div
                    key={sol.title}
                    className={`reveal-on-scroll ${sAnim} bg-white rounded-3xl border border-source-e8e2d5 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-source-c94a59/40 transition-all card-hover-lift`}
                  >
                    <div className="space-y-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-source-c94a59 bg-source-eceefb px-3 py-1 rounded-full">
                        {sol.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-source-1b263b mt-2 font-heading">
                        {sol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-source-5a6b7c leading-relaxed">
                        {sol.description}
                      </p>

                      <div className="pt-2 border-t border-source-f0ebe1 space-y-2">
                        <p className="text-xs font-bold text-source-1b263b">Key Items Included:</p>
                        <ul className="text-xs text-source-5a6b7c space-y-1.5 pl-3 list-disc">
                          {sol.typicalItems.map((item: string) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-source-f0ebe1">
                      <Button
                        variant="source"
                        size="source"
                        onClick={() =>
                          navigate(`/b2b-enquiry?category=${encodeURIComponent(sol.title)}`)
                        }
                        className="w-full py-2.5 bg-source-faf7ee hover:bg-source-c94a59 text-source-1b263b hover:text-white border border-source-d5cebe hover:border-source-c94a59 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Inquire About Package</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Corporate Gifting Inquiry Strip */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-source-1b263b to-source-2c3e5a text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-source-b4b9df font-bold">
                  Custom Hamper Consultation
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-1">
                  Need a Bespoke Hamper for 100+ Recipients?
                </h3>
                <p className="text-xs sm:text-sm text-source-dfe3f7 mt-1 max-w-xl">
                  Share your team headcount, occasion, and preferred branding elements. We will
                  prepare physical mockups and tiered rate options.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/b2b-enquiry")}
                  className="w-full sm:w-auto px-6 py-3 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md cursor-pointer"
                >
                  Request Proposal
                </Button>
                <a
                  href={createWhatsAppUrl(
                    undefined,
                    "We want to discuss a Corporate Gifting Hamper requirement for our organization.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-source-faf7ee text-source-1b263b text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-source-25d366" />
                  <span>WhatsApp Representative</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* 3. CUSTOMISATION SECTION (Shown when activeTab === 'customisation') */}
      {/* ============================================================== */}
      {activeTab === "customisation" && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-source-c94a59 block">
                Precision Craftsmanship
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-source-1b263b mt-1">
                Personalise Every Piece With Your Identity
              </h2>
              <p className="text-sm text-source-5a6b7c mt-2 leading-relaxed max-w-xl mx-auto">
                From permanent laser engraving into teak and acrylic to gold-leaf foiling and
                velvet-lined luxury boxes, every KRIORA item can carry your brand logo or event
                memento.
              </p>
            </div>

            {/* Customisation Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CUSTOMISATION_SERVICES.map((serv, index) => {
                const icons = [Flame, Wind, Gem, Award];
                const IconComponent = icons[index % icons.length] ?? Flame;
                return (
                  <div
                    key={serv.title}
                    className="p-6 bg-white rounded-3xl border border-source-e8e2d5 space-y-4 shadow-xs flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-source-eceefb border border-source-b4b9df flex items-center justify-center text-source-c94a59">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base text-source-1b263b">{serv.title}</h3>
                      <p className="text-xs text-source-5a6b7c leading-relaxed">
                        {serv.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verification / Sample Banner */}
            <div className="p-8 rounded-3xl bg-white border border-source-e8e2d5 text-center max-w-3xl mx-auto shadow-xs space-y-4">
              <ShieldAlert className="w-8 h-8 text-source-c94a59 mx-auto" />
              <h3 className="font-heading text-xl sm:text-2xl text-source-1b263b font-bold">
                Digital Vector Previews Before Bulk Production
              </h3>
              <p className="text-xs sm:text-sm text-source-5a6b7c leading-relaxed max-w-xl mx-auto">
                Once an inquiry is submitted, our design studio renders exact digital mockups
                showing logo placement, dimensions, and finishes before manufacturing commences.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/b2b-enquiry")}
                  className="px-6 py-3 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md cursor-pointer"
                >
                  Start B2B Custom Inquiry
                </Button>
                <a
                  href={createWhatsAppUrl(
                    undefined,
                    "We would like to consult on custom branding & laser engraving for our upcoming order.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white hover:bg-source-faf7ee text-source-1b263b border border-source-d5cebe text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 shadow-2xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-source-25d366" />
                  <span>Chat with Branding Team</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Memorable Together Section */}
      <MemorableTogetherSection />
    </div>
  );
};
