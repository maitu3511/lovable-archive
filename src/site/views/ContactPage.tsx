import sourceImage0Src from "@/assets/hero_contact.jpg";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { BRAND_INFO, PRODUCTS, createWhatsAppUrl } from "../data/krioraData";
import { HeroBackground } from "../components/HeroBackground";
import { Phone, Mail, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { SEOHead } from "../components/SEOHead";
const sourceImage0 = { url: sourceImage0Src };

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    workEmail: "",
    phoneNumber: "",
    enquiryType: "Corporate Gifting",
    interestedCategory: "Desk & Office Essentials",
    approximateQuantity: "",
    budgetRange: "",
    occasionDetails: "",
    customisationRequirements: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedPayload, setLastSubmittedPayload] = useState<string | null>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs["fullName"] = "Full name is required";
    if (!formData.company.trim()) errs["company"] = "Company / Organisation name is required";
    if (!formData.phoneNumber.trim()) {
      errs["phoneNumber"] = "Phone number is required for WhatsApp coordination";
    } else if (formData.phoneNumber.trim().length < 8) {
      errs["phoneNumber"] = "Please enter a valid phone number";
    }
    if (formData.workEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs["workEmail"] = "Please enter a valid email address";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Structured B2B WhatsApp Enquiry Text
    const formattedText = `*KRIORA B2B CORPORATE ENQUIRY*

• *Representative*: ${formData.fullName}
• *Organisation*: ${formData.company}
• *Phone/WhatsApp*: ${formData.phoneNumber}
• *Work Email*: ${formData.workEmail || "Not provided"}
• *Enquiry Type*: ${formData.enquiryType}
• *Interested Item / Category*: ${formData.interestedCategory}
• *Approx. Quantity*: ${formData.approximateQuantity || "To be discussed"}
• *Budget Range*: ${formData.budgetRange || "Flexible / To be discussed"}
• *Occasion / Timeline*: ${formData.occasionDetails || "Upcoming corporate milestone"}
• *Customisation Needs*: ${formData.customisationRequirements || "Standard branding & logo engraving"}

Hello Namrata Adhvaryu, please confirm receipt and share the available options and samples.`.trim();

    setLastSubmittedPayload(formattedText);
    setIsSubmitted(true);

    const waUrl = `https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-source-faf7ee text-source-1b263b">
      <SEOHead
        title="Contact KRIORA — Corporate Gifting Consultation & Enquiries"
        description="Connect directly with Namrata Adhvaryu to discuss corporate bulk orders, custom company logo branding, sample kits, and pan-India doorstep delivery."
        canonicalPath="/contact"
        keywords="contact KRIORA, corporate gifting phone number, WhatsApp corporate gifting, KRIORA address Vadodara Gujarat"
        ogImage="/images/hero_contact.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact KRIORA",
          url: "https://kriora.in/contact",
          description:
            "Connect directly with Namrata Adhvaryu for corporate gifting inquiries and bespoke bulk orders.",
        }}
      />

      {/* Header (Centered) */}
      <section className="relative isolate overflow-hidden pt-16 pb-16 border-b border-source-eae4d6 bg-gradient-to-b from-source-eceefb/40 to-source-faf7ee">
        <HeroBackground image={sourceImage0.url} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="animate-fade-in-down text-xs font-bold uppercase tracking-[0.25em] text-source-c94a59 inline-block">
            Direct Business Procurement Desk
          </span>
          <h1 className="animate-fade-in-left delay-100 font-heading text-3xl sm:text-4xl md:text-5xl text-source-1b263b text-center mx-auto">
            Contact & Bulk Enquiries
          </h1>
          <p className="animate-fade-in-right delay-200 text-sm sm:text-base text-source-5a6b7c max-w-2xl mx-auto leading-relaxed text-center">
            Connect directly with Namrata Adhvaryu to discuss corporate bulk orders, custom company
            logo branding, sample kits, and delivery schedules.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Details Card */}
            <div className="lg:col-span-5 space-y-6 reveal-on-scroll reveal-from-left delay-100">
              <div className="bg-white border border-source-e8e2d5 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
                <div className="border-b border-source-f0ebe1 pb-5">
                  <span className="text-[11px] font-bold text-source-c94a59 uppercase tracking-wider block mb-1">
                    Official Representation
                  </span>
                  <h3 className="text-xl font-bold text-source-1b263b">
                    {BRAND_INFO.representative}
                  </h3>
                  <p className="text-xs text-source-5a6b7c mt-1 font-medium">
                    KRIORA — Wit • Whimsy • Wonder
                  </p>
                </div>

                {/* Direct Channels */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-source-8a9bb5 block mb-1 text-xs font-semibold">
                      Direct Telephone & WhatsApp:
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.phoneRaw}`}
                      className="text-source-1b263b hover:text-source-c94a59 font-bold flex items-center gap-2 transition-colors text-base"
                    >
                      <Phone className="w-4 h-4 text-source-c94a59" />
                      <span>{BRAND_INFO.phone}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-source-8a9bb5 block mb-1 text-xs font-semibold">
                      Official Email Address:
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-source-1b263b hover:text-source-c94a59 font-medium flex items-center gap-2 transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-source-c94a59" />
                      <span>{BRAND_INFO.email}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-source-8a9bb5 block mb-1 text-xs font-semibold">
                      Instant WhatsApp Chat:
                    </span>
                    <a
                      href={createWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-source-ebf7ee text-source-1e7e34 hover:bg-source-d4edda transition-colors text-xs font-bold"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-source-25d366" />
                      <span>Open Chat with Namrata (+91 96877 39779)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Scope Note */}
                <div className="pt-4 border-t border-source-f0ebe1 text-xs text-source-5a6b7c space-y-2">
                  <p className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-source-c94a59 flex-shrink-0 mt-0.5" />
                    <span>
                      Bulk corporate gifting orders, HR joining kits & custom branded merchandise.
                    </span>
                  </p>
                  <p className="text-[11px] text-source-8a9bb5">
                    * No payment information is collected on this website. All commercial quotes,
                    GST invoices, and delivery logistics are coordinated directly.
                  </p>
                </div>
              </div>

              {/* Quick Hours Note */}
              <div className="bg-source-eceefb border border-source-dfe3f7 rounded-2xl p-5 text-xs text-source-475569">
                <p className="text-source-1b263b font-bold mb-1">Corporate Response Assurance</p>
                <p>
                  Enquiries submitted via WhatsApp or this form are reviewed directly during
                  business hours. For urgent project deadlines, kindly call our phone number.
                </p>
              </div>
            </div>

            {/* Right B2B Enquiry Form */}
            <div className="lg:col-span-7 reveal-on-scroll reveal-from-right delay-150">
              <div className="bg-white border border-source-e8e2d5 rounded-3xl p-6 sm:p-8 shadow-md">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-source-1b263b">
                    Submit Corporate Gifting Requirement
                  </h2>
                  <p className="text-xs text-source-5a6b7c mt-1">
                    Fill the form below to compile your specifications. Upon submission, it
                    seamlessly opens directly in WhatsApp to connect with our team.
                  </p>
                </div>

                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-source-ebf7ee border border-source-c3e6cb text-source-155724 text-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-source-28a745" />
                      <span>WhatsApp Discussion Opened</span>
                    </div>
                    <p>
                      Your specifications have been formatted and opened in your WhatsApp
                      browser/application for instant transmission to Namrata Adhvaryu.
                    </p>
                    {lastSubmittedPayload && (
                      <details className="mt-2 text-[11px] text-source-495057">
                        <summary className="cursor-pointer font-semibold">
                          View formatted enquiry text
                        </summary>
                        <pre className="mt-1 p-2 bg-source-f8f9fa rounded text-[10px] text-source-212529 overflow-x-auto whitespace-pre-wrap border border-source-e9ecef">
                          {lastSubmittedPayload}
                        </pre>
                      </details>
                    )}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Full Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-source-1b263b font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Priya Nair"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                      />
                      {errors["fullName"] && (
                        <p className="text-source-c94a59 text-[11px] mt-1 font-semibold">
                          {errors["fullName"]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-source-1b263b font-semibold mb-1">
                        Company / Organisation *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Zenith Tech Solutions"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                      />
                      {errors["company"] && (
                        <p className="text-source-c94a59 text-[11px] mt-1 font-semibold">
                          {errors["company"]}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-source-1b263b font-semibold mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="priya@zenith.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                      />
                      {errors["workEmail"] && (
                        <p className="text-source-c94a59 text-[11px] mt-1 font-semibold">
                          {errors["workEmail"]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-source-1b263b font-semibold mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                      />
                      {errors["phoneNumber"] && (
                        <p className="text-source-c94a59 text-[11px] mt-1 font-semibold">
                          {errors["phoneNumber"]}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Enquiry Type & Interested Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-source-1b263b font-semibold mb-1">
                        Enquiry Type *
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                      >
                        <option value="Corporate Gifting">Corporate Gifting</option>
                        <option value="Employee Joining Kits">Employee Joining Kits</option>
                        <option value="Festive Gifting">Festive Gifting</option>
                        <option value="Bulk Orders">Bulk Orders</option>
                        <option value="Customisation">Customisation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-source-1b263b font-semibold mb-1">
                        Interested Product / Category *
                      </label>
                      <select
                        value={formData.interestedCategory}
                        onChange={(e) =>
                          setFormData({ ...formData, interestedCategory: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                      >
                        <option value="Desk & Office Essentials">Desk & Office Essentials</option>
                        <option value="Festive & Celebration">Festive & Celebration</option>
                        <option value="Lifestyle & Keepsakes">Lifestyle & Keepsakes</option>
                        <option value="Mixed Corporate Hamper">Mixed Corporate Hamper</option>
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.name}>
                            Specific: {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Quantity & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-source-1b263b font-semibold mb-1">
                        Approximate Quantity (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.approximateQuantity}
                        onChange={(e) =>
                          setFormData({ ...formData, approximateQuantity: e.target.value })
                        }
                        placeholder="e.g. 75 kits / 200 units"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-source-1b263b font-semibold mb-1">
                        Budget Range (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        placeholder="e.g. ₹500 - ₹1,500 per gift"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                      />
                    </div>
                  </div>

                  {/* Occasion / Project Details */}
                  <div>
                    <label className="block text-source-1b263b font-semibold mb-1">
                      Occasion / Project Details
                    </label>
                    <textarea
                      rows={2}
                      value={formData.occasionDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, occasionDetails: e.target.value })
                      }
                      placeholder="e.g. Annual company day in November, welcoming 50 graduate trainees in July..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs resize-none"
                    />
                  </div>

                  {/* Customisation Requirements */}
                  <div>
                    <label className="block text-source-1b263b font-semibold mb-1">
                      Customisation Requirements
                    </label>
                    <textarea
                      rows={2}
                      value={formData.customisationRequirements}
                      onChange={(e) =>
                        setFormData({ ...formData, customisationRequirements: e.target.value })
                      }
                      placeholder="e.g. Company logo laser engraving on wooden desk items, personalized employee name cards, custom packaging box..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      variant="source"
                      size="source"
                      type="submit"
                      className="w-full py-3.5 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Submit Corporate Enquiry via WhatsApp</span>
                    </Button>
                  </div>

                  <p className="text-[11px] text-source-8a9bb5 text-center pt-1">
                    Direct enquiry flow to {BRAND_INFO.representative} (+91 96877 39779). No online
                    payments required.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
