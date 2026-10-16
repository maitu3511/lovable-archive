import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import { CATEGORIES, PRODUCTS, createWhatsAppUrl } from "../data/krioraData";
import { ProductCard } from "../components/ProductCard";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { SEOHead } from "../components/SEOHead";
import { MemorableTogetherSection } from "../components/MemorableTogetherSection";

interface CategoryDetailPageProps {
  categorySlug: "desk-office-essentials" | "festive-celebration" | "lifestyle-keepsakes";
}

export const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({ categorySlug }) => {
  const { navigate, openQuickEnquiry } = useNavigation();

  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  const products = PRODUCTS.filter((p) => p.category === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-source-faf7ee text-source-1b263b p-12 text-center">
        <p>Category not found.</p>
        <Button
          variant="source"
          size="source"
          onClick={() => navigate("/products")}
          className="mt-4 px-4 py-2 bg-source-c94a59 text-white font-bold rounded-lg cursor-pointer"
        >
          Back to All Products
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title={`${category.title} — Corporate Gift Collection | KRIORA`}
        description={category.summary}
        canonicalPath={`/products/${categorySlug}`}
        ogImage={category.image}
        keywords={`${category.title}, corporate gifting, bulk gift hampers, personalized keepsakes, KRIORA`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: category.title,
          description: category.summary,
          url: `https://kriora.in/products/${categorySlug}`,
        }}
      />

      {/* Breadcrumb & Navigation Back */}
      <div className="bg-source-f4f0e4 border-b border-source-e8e2d5 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-source-5a6b7c">
          <div className="flex items-center gap-2">
            <Button
              variant="source"
              size="source"
              onClick={() => navigate("/products")}
              className="hover:text-source-1b263b transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Collections</span>
            </Button>
            <ChevronRight className="w-3 h-3 text-source-8a9bb5" />
            <span className="text-source-c94a59 font-bold">{category.title}</span>
          </div>

          <span className="hidden sm:inline text-source-8a9bb5">
            Curated Handcrafted Collection
          </span>
        </div>
      </div>

      {/* Category Hero Banner (Centered) */}
      <section className="relative isolate overflow-hidden py-16 sm:py-20 border-b border-source-eae4d6 bg-gradient-to-b from-source-eceefb/40 to-source-faf7ee">
        <HeroBackground image={category.image} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="animate-fade-in-down text-xs font-bold uppercase tracking-[0.2em] text-source-c94a59 inline-block">
            KRIORA Collection
          </span>
          <h1 className="animate-fade-in-left delay-100 font-heading text-3xl sm:text-4xl md:text-5xl text-source-1b263b text-center mx-auto">
            {category.title}
          </h1>
          <p className="animate-fade-in-right delay-200 text-base text-source-5a6b7c leading-relaxed font-body max-w-2xl mx-auto text-center">
            {category.summary}
          </p>

          <div className="animate-fade-in-up delay-300 pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href={createWhatsAppUrl(
                category.title,
                `We are looking for bulk enquiry in ${category.title}. Please provide customisation options.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Enquire on WhatsApp</span>
            </a>
            <Button
              variant="source"
              size="source"
              onClick={() => openQuickEnquiry(category.title)}
              className="px-5 py-3 bg-white hover:bg-source-faf7ee text-source-1b263b border border-source-d5cebe rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer hover:scale-105 active:scale-95"
            >
              Request Bulk Quotation
            </Button>
          </div>
        </div>
      </section>

      {/* Specific Section for Festive / Desk / Lifestyle */}
      {categorySlug === "festive-celebration" && (
        <section className="py-8 bg-source-eceefb border-b border-source-d8dcf5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-on-scroll reveal-from-bottom delay-100 p-6 rounded-2xl bg-white border border-source-dfe3f7 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs card-hover-lift">
              <div>
                <p className="text-xs uppercase tracking-wider text-source-c94a59 font-bold">
                  Seasonal & Corporate Festival Booking
                </p>
                <p className="text-sm text-source-5a6b7c mt-1">
                  Reserve Diwali, New Year, and auspicious festive corporate hampers in advance with
                  customized dry-fruit boxes, company branding plates, and protective courier
                  packing.
                </p>
              </div>
              <Button
                variant="source"
                size="source"
                onClick={() => openQuickEnquiry("Festive Booking Reservation")}
                className="whitespace-nowrap px-5 py-2.5 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold rounded-xl uppercase shadow-xs transition-all hover:scale-105 cursor-pointer"
              >
                Plan Festive Order
              </Button>
            </div>
          </div>
        </section>
      )}

      {categorySlug === "desk-office-essentials" && (
        <section className="py-8 bg-source-eceefb border-b border-source-d8dcf5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-on-scroll reveal-from-bottom delay-100 p-6 rounded-2xl bg-white border border-source-dfe3f7 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs card-hover-lift">
              <div>
                <p className="text-xs uppercase tracking-wider text-source-c94a59 font-bold">
                  Employee Onboarding & Workplace Provisioning
                </p>
                <p className="text-sm text-source-5a6b7c mt-1">
                  Combine wooden organisers, ergonomic laptop elevators, custom diaries, and card
                  holders into a unified employee welcome kit.
                </p>
              </div>
              <Button
                variant="source"
                size="source"
                onClick={() => openQuickEnquiry("Employee Desk Kit Consultation")}
                className="whitespace-nowrap px-5 py-2.5 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold rounded-xl uppercase shadow-xs transition-all hover:scale-105 cursor-pointer"
              >
                Design Welcome Kit
              </Button>
            </div>
          </div>
        </section>
      )}

      {categorySlug === "lifestyle-keepsakes" && (
        <section className="py-8 bg-source-eceefb border-b border-source-d8dcf5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal-on-scroll reveal-from-bottom delay-100 p-6 rounded-2xl bg-white border border-source-dfe3f7 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs card-hover-lift">
              <div>
                <p className="text-xs uppercase tracking-wider text-source-c94a59 font-bold">
                  Bespoke Gifts, Milestone Mementos & VIP Clutches
                </p>
                <p className="text-sm text-source-5a6b7c mt-1">
                  Honor outstanding achievements, women leadership initiatives, and annual summits
                  with tailored keepsake gifts.
                </p>
              </div>
              <Button
                variant="source"
                size="source"
                onClick={() => openQuickEnquiry("Lifestyle Keepsake Consultation")}
                className="whitespace-nowrap px-5 py-2.5 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold rounded-xl uppercase shadow-xs transition-all hover:scale-105 cursor-pointer"
              >
                Discuss Custom Keepsakes
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Product Cards Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 reveal-on-scroll reveal-from-top">
            <h2 className="text-xl font-bold text-source-1b263b">Catalogue Items</h2>
            <p className="text-xs text-source-5a6b7c mt-1">
              Select any item to view complete details or order directly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p, idx) => {
              const pAnim = idx % 2 === 0 ? "reveal-from-left" : "reveal-from-right";
              const delayClass = `delay-${Math.min((idx % 4) * 100 + 100, 400)}`;

              return (
                <div key={p.id} className={`reveal-on-scroll ${pAnim} ${delayClass} h-full`}>
                  <ProductCard
                    product={p}
                    onOpenDetails={(item) => navigate(`/product/${item.id}`)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Collections Switcher */}
      <section className="py-16 bg-source-f4f0e4 border-t border-source-e8e2d5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xs uppercase tracking-widest text-source-8a9bb5 font-bold mb-6 reveal-on-scroll reveal-from-left">
            Other Collections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CATEGORIES.filter((c) => c.slug !== categorySlug).map((other, oIdx) => (
              <div
                key={other.slug}
                className={`reveal-on-scroll ${oIdx === 0 ? "reveal-from-left" : "reveal-from-right"} delay-150`}
              >
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate(`/products/${other.slug}`)}
                  className="w-full p-6 rounded-2xl bg-white border border-source-e8e2d5 hover:border-source-c94a59/40 text-left transition-all flex items-center justify-between group shadow-xs hover:shadow-md cursor-pointer card-hover-lift"
                >
                  <div>
                    <span className="text-xs text-source-c94a59 font-bold">{other.highlight}</span>
                    <h4 className="text-lg font-bold text-source-1b263b group-hover:text-source-c94a59 transition-colors mt-1">
                      {other.title}
                    </h4>
                    <p className="text-xs text-source-5a6b7c mt-1 line-clamp-2">{other.summary}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-source-8a9bb5 group-hover:text-source-c94a59 group-hover:translate-x-1.5 transition-all ml-4 flex-shrink-0" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorable Together Section */}
      <MemorableTogetherSection />
    </div>
  );
};
