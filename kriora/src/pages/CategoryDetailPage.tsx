import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import { CATEGORIES, PRODUCTS, createWhatsAppUrl } from "../data/krioraData";
import { ProductCard } from "../components/ProductCard";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

interface CategoryDetailPageProps {
  categorySlug: "desk-office-essentials" | "festive-celebration" | "lifestyle-keepsakes";
}

export const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({ categorySlug }) => {
  const { navigate, openQuickEnquiry } = useNavigation();

  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  const products = PRODUCTS.filter((p) => p.category === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#FAF7EE] text-[#1B263B] p-12 text-center">
        <p>Category not found.</p>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 px-4 py-2 bg-[#C94A59] text-white font-bold rounded-lg cursor-pointer"
        >
          Back to All Products
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-[#1B263B]">
      {/* Breadcrumb & Navigation Back */}
      <div className="bg-[#F4F0E4] border-b border-[#E8E2D5] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#5A6B7C]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/products")}
              className="hover:text-[#1B263B] transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Collections</span>
            </button>
            <ChevronRight className="w-3 h-3 text-[#8A9BB5]" />
            <span className="text-[#C94A59] font-bold">{category.title}</span>
          </div>

          <span className="hidden sm:inline text-[#8A9BB5]">Curated Handcrafted Collection</span>
        </div>
      </div>

      {/* Category Hero Banner */}
      <section className="relative isolate overflow-hidden py-16 sm:py-20 border-b border-[#EAE4D6] bg-gradient-to-b from-[#ECEEFB]/40 to-[#FAF7EE]">
        <HeroBackground image={category.image} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C94A59]">
                KRIORA Collection
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1B263B]">
                {category.title}
              </h1>
              <p className="text-base text-[#5A6B7C] leading-relaxed font-body">
                {category.summary}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={createWhatsAppUrl(
                    category.title,
                    `We are looking for bulk enquiry in ${category.title}. Please provide customisation options.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#C94A59] hover:bg-[#B33947] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <button
                  onClick={() => openQuickEnquiry(category.title)}
                  className="px-5 py-3 bg-white hover:bg-[#FAF7EE] text-[#1B263B] border border-[#D5CEBE] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  Request Bulk Quotation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-xl bg-white">
                <img
                  src={category.image}
                  alt={category.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-4 bg-white border-t border-[#F0EBE1] text-xs flex items-center justify-between">
                  <span className="text-[#C94A59] font-bold">{category.highlight}</span>
                  <span className="text-[#8A9BB5]">Official KRIORA Catalogue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Section for Festive / Desk / Lifestyle */}
      {categorySlug === "festive-celebration" && (
        <section className="py-8 bg-[#ECEEFB] border-b border-[#D8DCF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 rounded-2xl bg-white border border-[#DFE3F7] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#C94A59] font-bold">
                  Seasonal & Corporate Festival Booking
                </p>
                <p className="text-sm text-[#5A6B7C] mt-1">
                  Reserve Diwali, New Year, and auspicious festive corporate hampers in advance with
                  customized dry-fruit boxes, company branding plates, and protective courier
                  packing.
                </p>
              </div>
              <button
                onClick={() => openQuickEnquiry("Festive Booking Reservation")}
                className="whitespace-nowrap px-5 py-2.5 bg-[#C94A59] hover:bg-[#B33947] text-white text-xs font-bold rounded-xl uppercase shadow-xs transition-colors cursor-pointer"
              >
                Plan Festive Order
              </button>
            </div>
          </div>
        </section>
      )}

      {categorySlug === "desk-office-essentials" && (
        <section className="py-8 bg-[#ECEEFB] border-b border-[#D8DCF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 rounded-2xl bg-white border border-[#DFE3F7] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#C94A59] font-bold">
                  Employee Onboarding & Workplace Provisioning
                </p>
                <p className="text-sm text-[#5A6B7C] mt-1">
                  Combine wooden organisers, ergonomic laptop elevators, custom diaries, and card
                  holders into a unified employee welcome kit.
                </p>
              </div>
              <button
                onClick={() => openQuickEnquiry("Employee Desk Kit Consultation")}
                className="whitespace-nowrap px-5 py-2.5 bg-[#C94A59] hover:bg-[#B33947] text-white text-xs font-bold rounded-xl uppercase shadow-xs transition-colors cursor-pointer"
              >
                Design Welcome Kit
              </button>
            </div>
          </div>
        </section>
      )}

      {categorySlug === "lifestyle-keepsakes" && (
        <section className="py-8 bg-[#ECEEFB] border-b border-[#D8DCF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 rounded-2xl bg-white border border-[#DFE3F7] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#C94A59] font-bold">
                  Bespoke Gifts, Milestone Mementos & VIP Clutches
                </p>
                <p className="text-sm text-[#5A6B7C] mt-1">
                  Honor outstanding achievements, women leadership initiatives, and annual summits
                  with tailored keepsake gifts.
                </p>
              </div>
              <button
                onClick={() => openQuickEnquiry("Lifestyle Keepsake Consultation")}
                className="whitespace-nowrap px-5 py-2.5 bg-[#C94A59] hover:bg-[#B33947] text-white text-xs font-bold rounded-xl uppercase shadow-xs transition-colors cursor-pointer"
              >
                Discuss Custom Keepsakes
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Product Cards Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#1B263B]">Catalogue Items</h2>
            <p className="text-xs text-[#5A6B7C] mt-1">
              Select any item to view complete details or order directly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onOpenDetails={(item) => navigate(`/product/${item.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Collections Switcher */}
      <section className="py-16 bg-[#F4F0E4] border-t border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xs uppercase tracking-widest text-[#8A9BB5] font-bold mb-6">
            Other Collections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CATEGORIES.filter((c) => c.slug !== categorySlug).map((other) => (
              <button
                key={other.slug}
                onClick={() => navigate(`/products/${other.slug}`)}
                className="p-6 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#C94A59]/40 text-left transition-all flex items-center justify-between group shadow-xs hover:shadow-md cursor-pointer"
              >
                <div>
                  <span className="text-xs text-[#C94A59] font-bold">{other.highlight}</span>
                  <h4 className="text-lg font-bold text-[#1B263B] group-hover:text-[#C94A59] transition-colors mt-1">
                    {other.title}
                  </h4>
                  <p className="text-xs text-[#5A6B7C] mt-1 line-clamp-2">{other.summary}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8A9BB5] group-hover:text-[#C94A59] group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
