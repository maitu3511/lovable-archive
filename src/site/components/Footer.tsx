import logoAssetSrc from "@/assets/kriora-logo.png";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigation } from "../context/NavigationContext";
import { BRAND_INFO } from "../data/krioraData";
import { Phone, Mail } from "lucide-react";
const logoAsset = { url: logoAssetSrc };

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-source-faf7ee text-source-1b263b border-t border-source-eae4d6 text-sm">
      {/* Top Banner / Corporate Promise */}
      <div className="border-b border-source-eae4d6 bg-source-faf7ee py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-source-c94a59" />
            <p className="text-xs uppercase tracking-widest text-source-1b263b font-bold">
              Strictly B2B Corporate Gifting & Customised Product Solutions
            </p>
          </div>
          <p className="text-xs text-source-5a6b7c text-center md:text-right">
            Curated bulk orders · Organisation logo branding · Thoughtful packaging
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <img src={logoAsset.url} alt="KRIORA — Wit Whimsy Wonder" className="h-16 w-auto" />
            <p className="text-source-5a6b7c text-xs sm:text-sm leading-relaxed max-w-sm pt-2 font-body">
              KRIORA brings together thoughtful gifting, useful objects and distinctive design to
              help businesses celebrate relationships, milestones and meaningful occasions.
            </p>
            <div className="pt-2 text-xs text-source-8a9bb5">
              <span>B2B Partner for Corporate, HR & Enterprise Gifting</span>
            </div>
          </div>

          {/* Product Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-source-1b263b border-b border-source-eae4d6 pb-2">
              Product Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-source-243247">
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/products")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  All Products Catalogue
                </Button>
              </li>
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/products/desk-office-essentials")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  Desk & Office Essentials
                </Button>
              </li>
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/products/festive-celebration")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  Festive & Celebration
                </Button>
              </li>
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/products/lifestyle-keepsakes")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  Lifestyle & Keepsakes
                </Button>
              </li>
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/customisation")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  Custom Branding Services
                </Button>
              </li>
            </ul>
          </div>

          {/* Solutions & Workflow */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-source-1b263b border-b border-source-eae4d6 pb-2">
              Business Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-source-243247">
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/b2b-enquiry")}
                  className="hover:text-source-c94a59 transition-colors text-left font-semibold text-source-c94a59"
                >
                  Bulk / B2B Enquiry Form
                </Button>
              </li>
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/about")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  About Us & Philosophy
                </Button>
              </li>
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/corporate-gifting")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  Employee Joining Kits
                </Button>
              </li>
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/corporate-gifting")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  Corporate & Client Gifting
                </Button>
              </li>
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/how-it-works")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  The Simple Ordering Journey
                </Button>
              </li>
              <li>
                <Button
                  variant="source"
                  size="source"
                  onClick={() => navigate("/contact")}
                  className="hover:text-source-c94a59 transition-colors text-left"
                >
                  Contact Procurement Desk
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact Representative */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-source-1b263b border-b border-source-eae4d6 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <p className="text-source-8a9bb5 font-semibold">Representative</p>
                <p className="text-source-1b263b font-bold text-sm">{BRAND_INFO.representative}</p>
              </div>

              <div>
                <p className="text-source-8a9bb5 font-semibold">Phone</p>
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="text-source-1b263b hover:text-source-c94a59 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-source-c94a59" />
                  <span>{BRAND_INFO.phone}</span>
                </a>
              </div>

              <div>
                <p className="text-source-8a9bb5 font-semibold">Official Email</p>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-source-1b263b hover:text-source-c94a59 font-medium transition-colors break-all flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-source-c94a59" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Centered Copyright */}
        <div className="mt-12 pt-8 border-t border-source-eae4d6 text-center text-xs text-source-64748b">
          <p>© {new Date().getFullYear()} KRIORA — Wit • Whimsy • Wonder. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
