import sourceImage0Src from "@/assets/hero_b2b.jpg";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import { HeroBackground } from "../components/HeroBackground";
import { BRAND_INFO, CATEGORIES, PRODUCTS } from "../data/krioraData";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { SEOHead } from "../components/SEOHead";
import {
  Building2,
  Phone,
  Mail,
  ShieldCheck,
  Package,
  Truck,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
} from "lucide-react";
const sourceImage0 = { url: sourceImage0Src };

export const B2BEnquiryPage: React.FC = () => {
  const { currentPath } = useNavigation();

  // Parse any pre-selected product from URL query params (e.g. ?product=...)
  const initialProductFromUrl = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("product") || "";
    }
    return "";
  };

  const [formData, setFormData] = useState({
    companyName: "",
    buyerType: "Corporate Procurement / HR",
    contactPerson: "",
    phoneNumber: "",
    workEmail: "",
    deliveryLocation: "",
    selectedCategory: "all",
    selectedProduct: "General Corporate Gifting",
    quantity: "50 - 100 units",
    customQuantity: "",
    targetTimeline: "Within 2 - 3 Weeks",
    customisationNeeds: ["Corporate Logo Laser Engraving", "Presentation Gift Box"],
    additionalNotes: "",
  });
  useEffect(() => {
    const selected = initialProductFromUrl();
    if (selected) setFormData((previous) => ({ ...previous, selectedProduct: selected }));
  }, []);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const prod = initialProductFromUrl();
    if (prod) {
      setFormData((prev) => ({ ...prev, selectedProduct: prod }));
    }
  }, [currentPath]);

  const buyerTypes = [
    "Corporate Procurement / HR",
    "Wholesaler / Bulk Buyer",
    "Retailer / Stockist",
    "Distributor",
    "Event Organiser / Agency",
    "Other Business Institution",
  ];

  const quantityTiers = [
    "25 - 50 units (Sample / Pilot Batch)",
    "50 - 100 units (Standard Team Tier)",
    "100 - 250 units (Quarterly / Branch Tier)",
    "250 - 500 units (Annual Corporate Milestone)",
    "500 - 1000 units (Enterprise Gifting)",
    "1000+ units (Wholesale / Bulk Production)",
    "Custom Quantity",
  ];

  const availableCustomisations = [
    "Corporate Logo Laser Engraving",
    "Gold / Silver Metallic Foil Debossing",
    "Individual Recipient Name Personalisation",
    "Custom Printed Intro Message Inserts",
    "Custom Rigid Presentation Gift Box",
    "Pan-India Multi-Address Doorstep Courier",
  ];

  const toggleCustomisation = (opt: string) => {
    setFormData((prev) => {
      const exists = prev.customisationNeeds.includes(opt);
      return {
        ...prev,
        customisationNeeds: exists
          ? prev.customisationNeeds.filter((item) => item !== opt)
          : [...prev.customisationNeeds, opt],
      };
    });
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.companyName.trim()) {
      errs["companyName"] = "Company / Business name is required";
    }
    if (!formData.contactPerson.trim()) {
      errs["contactPerson"] = "Contact person name is required";
    }
    if (!formData.phoneNumber.trim()) {
      errs["phoneNumber"] = "Phone / WhatsApp number is required";
    } else if (formData.phoneNumber.trim().length < 8) {
      errs["phoneNumber"] = "Please enter a valid contact number";
    }
    if (!formData.workEmail.trim()) {
      errs["workEmail"] = "Work email is required for RFP documentation";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail.trim())) {
      errs["workEmail"] = "Please enter a valid corporate email";
    }
    if (!formData.deliveryLocation.trim()) {
      errs["deliveryLocation"] = "Delivery city, state, or PIN code is required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `KR-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);

    const actualQuantity =
      formData.quantity === "Custom Quantity" && formData.customQuantity.trim()
        ? formData.customQuantity
        : formData.quantity;

    const formattedRfp = `*KRIORA B2B WHOLESALE & CORPORATE ENQUIRY*
*Ref ID*: ${ref}

• *Company / Business*: ${formData.companyName}
• *Buyer Profile*: ${formData.buyerType}
• *Contact Person*: ${formData.contactPerson}
• *Phone/WhatsApp*: ${formData.phoneNumber}
• *Work Email*: ${formData.workEmail}
• *Delivery Destination*: ${formData.deliveryLocation}

• *Category / Item of Interest*: ${formData.selectedProduct}
• *Required Quantity*: ${actualQuantity}
• *Target Delivery Timeline*: ${formData.targetTimeline}
• *Branding & Customisations*:
${formData.customisationNeeds.length > 0 ? formData.customisationNeeds.map((c) => `  - ${c}`).join("\n") : "  - Standard finishing"}

• *Additional Notes / Specifications*:
${formData.additionalNotes.trim() ? formData.additionalNotes.trim() : "Please share complete catalogue and tier pricing."}

Hello Namrata Adhvaryu, please confirm receipt of our B2B enquiry and share feasibility, sample process, and bulk quotation.`.trim();

    setSubmittedPayload(formattedRfp);
    setIsSubmitted(true);

    const waUrl = `https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent(formattedRfp)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyPayload = () => {
    if (submittedPayload) {
      navigator.clipboard.writeText(submittedPayload);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title="B2B Bulk Corporate Gift Enquiry & Custom Quotation | KRIORA"
        description="Request a fast bulk quotation and digital mockups for your company's corporate gifting needs. Direct coordination with founder Namrata Adhvaryu."
        canonicalPath="/b2b-enquiry"
        keywords="B2B gift enquiry, corporate gift quote, bulk order corporate gifting, employee gift enquiry, KRIORA wholesale"
        ogImage="/images/hero_b2b.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "KRIORA B2B Trade Portal",
          url: "https://kriora.in/b2b-enquiry",
          description:
            "B2B corporate gift quotation, custom mockups and wholesale procurement portal.",
        }}
      />

      {/* Page Header (Centered) */}
      <section className="relative isolate overflow-hidden pt-16 pb-16 border-b border-source-eae4d6 bg-gradient-to-b from-source-eceefb/40 to-source-faf7ee">
        <HeroBackground image={sourceImage0.url} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="animate-fade-in-down inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-source-b4b9df/60 text-xs uppercase tracking-widest text-source-1b263b font-bold shadow-xs mx-auto">
            <span className="w-2 h-2 rounded-full bg-source-c94a59" />
            <span>Dedicated B2B Procurement Desk</span>
          </div>

          <h1 className="animate-fade-in-left delay-100 font-heading text-3xl sm:text-4xl md:text-5xl text-source-1b263b font-bold text-center mx-auto">
            Bulk Orders & Business Enquiries
          </h1>

          <p className="animate-fade-in-right delay-200 text-sm sm:text-base text-source-5a6b7c max-w-2xl mx-auto leading-relaxed text-center">
            Welcome to KRIORA’s official B2B trade portal for corporate procurers, wholesalers,
            distributors, retailers, and event gifting managers. Direct coordination with lead
            curator <strong className="text-source-1b263b">Namrata Adhvaryu</strong>.
          </p>
        </div>
      </section>

      {/* Main Form & Information Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 8 Columns: The B2B Form */}
            <div className="lg:col-span-8 reveal-on-scroll reveal-from-left delay-100">
              {isSubmitted ? (
                <div className="bg-white border-2 border-source-c94a59/40 rounded-3xl p-8 sm:p-10 shadow-lg space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                        Enquiry Transmitted Successfully
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-source-1b263b">
                        Thank you, {formData.contactPerson}!
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-source-475569 leading-relaxed">
                    Your B2B proposal request has been generated under Reference ID{" "}
                    <strong className="text-source-1b263b bg-source-faf7ee px-2 py-0.5 rounded border border-source-e8e2d5">
                      {referenceId}
                    </strong>{" "}
                    and routed directly to{" "}
                    <strong className="text-source-1b263b">{BRAND_INFO.representative}</strong> (
                    {BRAND_INFO.phone}).
                  </p>

                  <div className="p-4 bg-source-faf7ee rounded-2xl border border-source-e8e2d5 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold uppercase tracking-wider text-source-1b263b">
                        Enquiry Summary
                      </span>
                      <Button
                        variant="source"
                        size="source"
                        onClick={handleCopyPayload}
                        className="text-xs text-source-c94a59 hover:underline flex items-center gap-1 font-semibold"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copied ? "Copied!" : "Copy Summary"}</span>
                      </Button>
                    </div>
                    <pre className="whitespace-pre-wrap text-source-475569 font-mono text-[11px] max-h-48 overflow-y-auto p-2 bg-white rounded-lg border border-source-eae4d6">
                      {submittedPayload}
                    </pre>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={`https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent(submittedPayload || "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Re-open WhatsApp Chat</span>
                    </a>
                    <Button
                      variant="source"
                      size="source"
                      onClick={() => {
                        setIsSubmitted(false);
                      }}
                      className="py-3 px-5 bg-white hover:bg-source-faf7ee text-source-1b263b border border-source-e8e2d5 text-xs font-semibold rounded-xl transition-colors"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-source-e8e2d5 rounded-3xl p-6 sm:p-10 shadow-md space-y-8"
                >
                  {/* Step 1: Business Profile */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-source-f0ebe1 pb-3">
                      <Building2 className="w-5 h-5 text-source-c94a59" />
                      <h2 className="text-base sm:text-lg font-bold text-source-1b263b">
                        1. Business & Contact Information
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Company / Organisation Name *
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({ ...formData, companyName: e.target.value })
                          }
                          placeholder="e.g. Veritas Advisory / Apex Global"
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none transition-colors ${
                            errors["companyName"]
                              ? "border-red-400 bg-red-50/20"
                              : "border-source-e8e2d5 focus:border-source-c94a59"
                          }`}
                        />
                        {errors["companyName"] && (
                          <p className="text-[11px] text-red-500 mt-1">{errors["companyName"]}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Buyer Profile Type
                        </label>
                        <select
                          value={formData.buyerType}
                          onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-source-e8e2d5 text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none focus:border-source-c94a59"
                        >
                          {buyerTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Contact Person Name *
                        </label>
                        <input
                          type="text"
                          value={formData.contactPerson}
                          onChange={(e) =>
                            setFormData({ ...formData, contactPerson: e.target.value })
                          }
                          placeholder="Your full name"
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none transition-colors ${
                            errors["contactPerson"]
                              ? "border-red-400 bg-red-50/20"
                              : "border-source-e8e2d5 focus:border-source-c94a59"
                          }`}
                        />
                        {errors["contactPerson"] && (
                          <p className="text-[11px] text-red-500 mt-1">{errors["contactPerson"]}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData({ ...formData, phoneNumber: e.target.value })
                          }
                          placeholder="e.g. +91 98765 43210"
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none transition-colors ${
                            errors["phoneNumber"]
                              ? "border-red-400 bg-red-50/20"
                              : "border-source-e8e2d5 focus:border-source-c94a59"
                          }`}
                        />
                        {errors["phoneNumber"] && (
                          <p className="text-[11px] text-red-500 mt-1">{errors["phoneNumber"]}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Corporate / Work Email *
                        </label>
                        <input
                          type="email"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none transition-colors ${
                            errors["workEmail"]
                              ? "border-red-400 bg-red-50/20"
                              : "border-source-e8e2d5 focus:border-source-c94a59"
                          }`}
                        />
                        {errors["workEmail"] && (
                          <p className="text-[11px] text-red-500 mt-1">{errors["workEmail"]}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Delivery Location (City / State / PIN) *
                        </label>
                        <input
                          type="text"
                          value={formData.deliveryLocation}
                          onChange={(e) =>
                            setFormData({ ...formData, deliveryLocation: e.target.value })
                          }
                          placeholder="e.g. Mumbai, Maharashtra - 400051"
                          className={`w-full px-4 py-2.5 rounded-xl border text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none transition-colors ${
                            errors["deliveryLocation"]
                              ? "border-red-400 bg-red-50/20"
                              : "border-source-e8e2d5 focus:border-source-c94a59"
                          }`}
                        />
                        {errors["deliveryLocation"] && (
                          <p className="text-[11px] text-red-500 mt-1">
                            {errors["deliveryLocation"]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Order Requirements */}
                  <div className="space-y-4 pt-4 border-t border-source-f0ebe1">
                    <div className="flex items-center gap-2 border-b border-source-f0ebe1 pb-3">
                      <Package className="w-5 h-5 text-source-c94a59" />
                      <h2 className="text-base sm:text-lg font-bold text-source-1b263b">
                        2. Product Selection & Quantities
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Filter by Collection
                        </label>
                        <select
                          value={formData.selectedCategory}
                          onChange={(e) =>
                            setFormData({ ...formData, selectedCategory: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-source-e8e2d5 text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none focus:border-source-c94a59"
                        >
                          <option value="all">All Product Collections</option>
                          {CATEGORIES.map((cat) => (
                            <option key={cat.slug} value={cat.slug}>
                              {cat.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Specific Product of Interest
                        </label>
                        <select
                          value={formData.selectedProduct}
                          onChange={(e) =>
                            setFormData({ ...formData, selectedProduct: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-source-e8e2d5 text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none focus:border-source-c94a59"
                        >
                          <option value="General Corporate Gifting">
                            General Corporate Gifting Catalogue
                          </option>
                          <option value="Combination Hamper / Mixed Items">
                            Combination Hamper / Mixed Items
                          </option>
                          {PRODUCTS.filter(
                            (p) =>
                              formData.selectedCategory === "all" ||
                              p.category === formData.selectedCategory,
                          ).map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name} ({p.categoryLabel})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Required Quantity Range
                        </label>
                        <select
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-source-e8e2d5 text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none focus:border-source-c94a59"
                        >
                          {quantityTiers.map((tier) => (
                            <option key={tier} value={tier}>
                              {tier}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                          Target Delivery Timeline
                        </label>
                        <select
                          value={formData.targetTimeline}
                          onChange={(e) =>
                            setFormData({ ...formData, targetTimeline: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-source-e8e2d5 text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none focus:border-source-c94a59"
                        >
                          <option value="Immediate / Urgent (7 - 10 Days)">
                            Immediate / Urgent (7 - 10 Days)
                          </option>
                          <option value="Within 2 - 3 Weeks">Within 2 - 3 Weeks (Standard)</option>
                          <option value="Within 4 - 6 Weeks">
                            Within 4 - 6 Weeks (Festival / Bulk Planning)
                          </option>
                          <option value="Quarterly / Recurring Delivery">
                            Quarterly / Recurring Delivery
                          </option>
                        </select>
                      </div>

                      {formData.quantity === "Custom Quantity" && (
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                            Specify Exact Units Required
                          </label>
                          <input
                            type="text"
                            value={formData.customQuantity}
                            onChange={(e) =>
                              setFormData({ ...formData, customQuantity: e.target.value })
                            }
                            placeholder="e.g. 750 units with tiered dispatch"
                            className="w-full px-4 py-2.5 rounded-xl border border-source-e8e2d5 text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none focus:border-source-c94a59"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Step 3: Customisation & Delivery Notes */}
                  <div className="space-y-4 pt-4 border-t border-source-f0ebe1">
                    <div className="flex items-center gap-2 border-b border-source-f0ebe1 pb-3">
                      <Sparkles className="w-5 h-5 text-source-c94a59" />
                      <h2 className="text-base sm:text-lg font-bold text-source-1b263b">
                        3. Branding, Finishing & Delivery Specifications
                      </h2>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider">
                        Required Branding Customisations (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {availableCustomisations.map((opt) => {
                          const checked = formData.customisationNeeds.includes(opt);
                          return (
                            <label
                              key={opt}
                              onClick={() => toggleCustomisation(opt)}
                              className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                                checked
                                  ? "bg-source-eceefb border-source-b4b9df text-source-1b263b font-semibold"
                                  : "bg-source-faf7ee/50 border-source-e8e2d5 text-source-5a6b7c hover:bg-white"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => {}}
                                className="w-4 h-4 rounded text-source-c94a59 accent-source-c94a59"
                              />
                              <span>{opt}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-bold text-source-1b263b uppercase tracking-wider mb-1.5">
                        Additional Requirements / Notes
                      </label>
                      <textarea
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={(e) =>
                          setFormData({ ...formData, additionalNotes: e.target.value })
                        }
                        placeholder="Mention any custom hamper combinations, budget per unit, packaging preferences, or event dates..."
                        className="w-full px-4 py-2.5 rounded-xl border border-source-e8e2d5 text-xs bg-source-faf7ee/50 focus:bg-white focus:outline-none focus:border-source-c94a59"
                      />
                    </div>
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-4 border-t border-source-f0ebe1 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-source-8a9bb5 text-center sm:text-left">
                      Direct consultation with {BRAND_INFO.representative} ({BRAND_INFO.phone}).
                    </p>
                    <Button
                      variant="source"
                      size="source"
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-source-c94a59 hover:bg-source-b33947 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
                    >
                      Submit Business Enquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 4 Columns: B2B Procurement Guarantees & Contact */}
            <div className="lg:col-span-4 space-y-6 reveal-on-scroll reveal-from-right delay-150">
              {/* Direct Representative Card */}
              <div className="bg-white border border-source-e8e2d5 rounded-3xl p-6 space-y-5 shadow-xs">
                <span className="text-[11px] font-bold text-source-c94a59 uppercase tracking-wider block">
                  Official Trade Representative
                </span>
                <div>
                  <h3 className="text-lg font-bold text-source-1b263b">
                    {BRAND_INFO.representative}
                  </h3>
                  <p className="text-xs text-source-5a6b7c">Lead Curator & Corporate Accounts</p>
                </div>

                <div className="space-y-3 text-xs pt-1 border-t border-source-f0ebe1">
                  <a
                    href={`tel:${BRAND_INFO.phoneRaw}`}
                    className="flex items-center gap-2.5 text-source-1b263b hover:text-source-c94a59 font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-source-c94a59" />
                    <span>{BRAND_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="flex items-center gap-2.5 text-source-1b263b hover:text-source-c94a59 font-medium transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-source-c94a59" />
                    <span>{BRAND_INFO.email}</span>
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent("Hello Namrata, I would like to schedule a B2B call regarding our corporate gifting requirements.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-source-faf7ee hover:bg-source-f0ebe1 text-source-1b263b hover:text-source-c94a59 border border-source-e8e2d5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-source-25d366" />
                    <span>Schedule Direct WhatsApp Call</span>
                  </a>
                </div>
              </div>

              {/* B2B Capabilities Box */}
              <div className="bg-white border border-source-e8e2d5 rounded-3xl p-6 space-y-4 shadow-xs text-xs">
                <h4 className="font-bold text-source-1b263b uppercase tracking-wider text-xs border-b border-source-f0ebe1 pb-2">
                  KRIORA Trade Advantage
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-source-c94a59 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-source-1b263b">GST Invoicing & Documentation</p>
                      <p className="text-[11px] text-source-5a6b7c">
                        Compliant B2B tax invoices with clear HSN codes for input tax credit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Package className="w-4 h-4 text-source-c94a59 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-source-1b263b">Physical Evaluation Samples</p>
                      <p className="text-[11px] text-source-5a6b7c">
                        Inspection samples coordinated for procurement and HR committee approvals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Truck className="w-4 h-4 text-source-c94a59 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-source-1b263b">Tiered Freight Logistics</p>
                      <p className="text-[11px] text-source-5a6b7c">
                        Master carton dispatches to corporate headquarters or individual remote
                        employee deliveries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
