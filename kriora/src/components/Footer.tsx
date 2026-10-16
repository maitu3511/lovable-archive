import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { BRAND_INFO } from "../data/krioraData";
import { Phone, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-[#FAF7EE] text-[#1B263B] border-t border-[#EAE4D6] text-sm">
      {/* Top Banner / Corporate Promise */}
      <div className="border-b border-[#EAE4D6] bg-[#FAF7EE] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C94A59]" />
            <p className="text-xs uppercase tracking-widest text-[#1B263B] font-bold">
              Strictly B2B Corporate Gifting & Customised Product Solutions
            </p>
          </div>
          <p className="text-xs text-[#5A6B7C] text-center md:text-right">
            Curated bulk orders · Organisation logo branding · Thoughtful packaging
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl tracking-wider text-[#1B263B]">KRIORA</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C94A59]" />
            </div>
            <p className="text-xs tracking-[0.2em] text-[#C94A59] uppercase font-bold">
              Wit • Whimsy • Wonder
            </p>
            <p className="text-[#5A6B7C] text-xs sm:text-sm leading-relaxed max-w-sm pt-2 font-body">
              KRIORA brings together thoughtful gifting, useful objects and distinctive design to
              help businesses celebrate relationships, milestones and meaningful occasions.
            </p>
            <div className="pt-2 text-xs text-[#8A9BB5]">
              <span>B2B Partner for Corporate, HR & Enterprise Gifting</span>
            </div>
          </div>

          {/* Product Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B263B] border-b border-[#EAE4D6] pb-2">
              Product Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#243247]">
              <li>
                <button
                  onClick={() => navigate("/products")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  All Products Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/products/desk-office-essentials")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  Desk & Office Essentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/products/festive-celebration")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  Festive & Celebration
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/products/lifestyle-keepsakes")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  Lifestyle & Keepsakes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/customisation")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  Custom Branding Services
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Workflow */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B263B] border-b border-[#EAE4D6] pb-2">
              Business Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#243247]">
              <li>
                <button
                  onClick={() => navigate("/b2b-enquiry")}
                  className="hover:text-[#C94A59] transition-colors text-left font-semibold text-[#C94A59]"
                >
                  Bulk / B2B Enquiry Form
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  About Us & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/corporate-gifting")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  Employee Joining Kits
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/corporate-gifting")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  Corporate & Client Gifting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/how-it-works")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  The Simple Ordering Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="hover:text-[#C94A59] transition-colors text-left"
                >
                  Contact Procurement Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Representative */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1B263B] border-b border-[#EAE4D6] pb-2">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <p className="text-[#8A9BB5] font-semibold">Representative</p>
                <p className="text-[#1B263B] font-bold text-sm">{BRAND_INFO.representative}</p>
              </div>

              <div>
                <p className="text-[#8A9BB5] font-semibold">Phone</p>
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="text-[#1B263B] hover:text-[#C94A59] font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C94A59]" />
                  <span>{BRAND_INFO.phone}</span>
                </a>
              </div>

              <div>
                <p className="text-[#8A9BB5] font-semibold">Official Email</p>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-[#1B263B] hover:text-[#C94A59] font-medium transition-colors break-all flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C94A59]" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Centered Copyright */}
        <div className="mt-12 pt-8 border-t border-[#EAE4D6] text-center text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} KRIORA — Wit • Whimsy • Wonder. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
