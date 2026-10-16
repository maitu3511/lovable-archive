import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import { PRODUCTS, BRAND_INFO } from "../data/krioraData";
import { X, Sparkles, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const BulkEnquiryModal: React.FC = () => {
  const { isQuickEnquiryOpen, closeQuickEnquiry, selectedProductForEnquiry } = useNavigation();

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(
    selectedProductForEnquiry || "General Corporate Gifting",
  );
  const [quantity, setQuantity] = useState("50 - 100 units");
  const [occasion, setOccasion] = useState("Employee Welcome Kits");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (selectedProductForEnquiry) {
      setSelectedProduct(selectedProductForEnquiry);
    }
  }, [selectedProductForEnquiry]);

  if (!isQuickEnquiryOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs["fullName"] = "Please enter your full name";
    if (!company.trim()) errs["company"] = "Please enter your company / organization name";
    if (!phone.trim()) errs["phone"] = "Please enter your phone / WhatsApp number";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Hello KRIORA,
I would like to submit a B2B corporate gifting enquiry:

• Name: ${fullName}
• Organisation: ${company}
• Phone: ${phone}
• Work Email: ${email || "Not specified"}
• Interested Item/Category: ${selectedProduct}
• Approximate Quantity: ${quantity}
• Occasion/Purpose: ${occasion}
• Customisation Notes: ${notes || "Standard branding & logo options"}

Please share catalogue details and customisation feasibility.`.trim();

    const waUrl = `https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent(message)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      closeQuickEnquiry();
      setIsSubmitted(false);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={closeQuickEnquiry}
    >
      <div
        className="relative bg-white border border-source-e8e2d5 rounded-2xl max-w-lg w-full p-6 sm:p-8 text-source-1b263b shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="source"
          size="source"
          onClick={closeQuickEnquiry}
          className="absolute top-5 right-5 text-source-8a9bb5 hover:text-source-1b263b p-1 rounded-lg transition-colors"
          aria-label="Close bulk enquiry modal"
        >
          <X className="w-5 h-5" />
        </Button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-source-ebf7ee border border-source-25d366 text-source-25d366 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-source-1b263b">Opening WhatsApp Enquiry...</h3>
            <p className="text-sm text-source-5a6b7c max-w-xs mx-auto">
              Redirecting you to our official WhatsApp chat with Namrata Adhvaryu (+91 96877 39779)
              with your prefilled details.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-source-c94a59" />
              <span className="text-xs uppercase tracking-widest text-source-c94a59 font-bold">
                Direct B2B Procurement Desk
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-source-1b263b">
              Discuss Your Bulk Order
            </h3>
            <p className="text-xs text-source-5a6b7c mt-1 mb-6">
              Share your project requirements to discuss tailored product combinations, brand
              engraving, and delivery schedules.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-source-1b263b font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                />
                {errors["fullName"] && (
                  <p className="text-source-c94a59 text-[11px] mt-1 font-medium">
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
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Technologies India Pvt Ltd"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                />
                {errors["company"] && (
                  <p className="text-source-c94a59 text-[11px] mt-1 font-medium">
                    {errors["company"]}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-source-1b263b font-semibold mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                  />
                  {errors["phone"] && (
                    <p className="text-source-c94a59 text-[11px] mt-1 font-medium">
                      {errors["phone"]}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-source-1b263b font-semibold mb-1">
                    Work Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-source-1b263b font-semibold mb-1">
                    Product / Collection
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                  >
                    <option value="General Corporate Gifting">General Corporate Gifting</option>
                    <option value="Employee Joining Kits">Employee Joining Kits</option>
                    <option value="Desk & Office Essentials">Desk & Office Essentials</option>
                    <option value="Festive & Diwali Gifting">Festive & Diwali Gifting</option>
                    <option value="Lifestyle & Keepsakes">Lifestyle & Keepsakes</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-source-1b263b font-semibold mb-1">
                    Approximate Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs"
                  >
                    <option value="25 - 50 units">25 - 50 units</option>
                    <option value="50 - 100 units">50 - 100 units</option>
                    <option value="100 - 250 units">100 - 250 units</option>
                    <option value="250 - 500 units">250 - 500 units</option>
                    <option value="500+ units">500+ units</option>
                    <option value="Sample discussion first">Sample discussion first</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-source-1b263b font-semibold mb-1">
                  Customisation & Project Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention desired logo placement, target event date, or packaging preference..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-source-faf7ee border border-source-e8e2d5 focus:border-source-c94a59 focus:outline-none text-source-1b263b text-xs resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  variant="source"
                  size="source"
                  type="submit"
                  className="w-full py-3 bg-source-c94a59 hover:bg-source-b33947 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-sm hover:shadow-md cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Send Enquiry via WhatsApp</span>
                </Button>
              </div>

              <p className="text-[11px] text-source-8a9bb5 text-center">
                Submitting opens WhatsApp with your pre-formatted enquiry to{" "}
                {BRAND_INFO.representative} (+91 96877 39779). No payment required.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
