import logoAssetSrc from "@/assets/kriora-logo.png";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import { Menu, X, Phone, Mail } from "lucide-react";
import { BRAND_INFO } from "../data/krioraData";
const logoAsset = { url: logoAssetSrc };

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Clean, focused navigation items (no dropdowns in menu)
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleInquiryClick = () => {
    navigate("/b2b-enquiry");
    setMobileMenuOpen(false);
  };

  const isCurrentActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    if (path === "/products")
      return currentPath.startsWith("/products") || currentPath.startsWith("/product/");
    return currentPath === path;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-source-faf7ee/95 backdrop-blur-md border-b border-source-e5dfd1 shadow-sm"
            : "bg-source-faf7ee border-b border-source-eae4d6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Tagline */}
            <Button
              variant="source"
              size="source"
              onClick={() => handleNavClick("/")}
              className="flex flex-col text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-source-c94a59 cursor-pointer"
              aria-label="KRIORA Home"
            >
              <img
                src={logoAsset.url}
                alt="KRIORA — Wit Whimsy Wonder"
                className="h-12 sm:h-14 w-auto"
              />
            </Button>

            {/* Desktop Navigation (Direct Links, No Dropdown) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
              {navItems.map((item) => (
                <Button
                  variant="source"
                  size="source"
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-3.5 py-2 text-sm tracking-wide transition-colors font-medium cursor-pointer ${
                    isCurrentActive(item.path)
                      ? "text-source-c94a59 font-bold"
                      : "text-source-243247 hover:text-source-c94a59"
                  }`}
                >
                  <span>{item.label}</span>
                  {isCurrentActive(item.path) && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-source-c94a59 rounded-full" />
                  )}
                </Button>
              ))}
            </nav>

            {/* Action CTA: Bulk / B2B Inquiry Button */}
            <div className="flex items-center ml-auto mr-2 lg:ml-0 lg:mr-0">
              <Button
                variant="source"
                size="source"
                onClick={handleInquiryClick}
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs font-bold tracking-wider uppercase bg-source-c94a59 hover:bg-source-b33947 text-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5 active:scale-[0.98]"
                title="Open Bulk & B2B Inquiry"
              >
                <span>B2B Inquiry</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="source"
                size="source"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  mobileMenuOpen
                    ? "text-white bg-source-c94a59 border-source-c94a59"
                    : "text-source-1b263b hover:text-source-c94a59 bg-white border-source-e5dfd1"
                }`}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay - Click outside to dismiss */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-20 bg-black/40 backdrop-blur-xs z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer rendered as sibling outside header so containing block is always viewport */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-source-faf7ee border-t border-source-e5dfd1 z-50 overflow-y-auto overscroll-contain shadow-2xl flex flex-col justify-between"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="px-5 pt-4 pb-8 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-source-ebe6d8/80 pb-1">
                <Button
                  variant="source"
                  size="source"
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left py-3 px-3 text-base font-medium transition-colors cursor-pointer flex items-center justify-between rounded-lg ${
                    isCurrentActive(item.path)
                      ? "text-source-c94a59 font-bold bg-source-f4efeb"
                      : "text-source-243247 hover:text-source-c94a59 hover:bg-source-f4efeb/50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isCurrentActive(item.path) && (
                    <span className="w-2 h-2 rounded-full bg-source-c94a59" />
                  )}
                </Button>
              </div>
            ))}

            {/* Prominent Action Button: Bulk / B2B Inquiry */}
            <div className="pt-6 pb-2">
              <Button
                variant="source"
                size="source"
                onClick={handleInquiryClick}
                className="w-full text-center py-3.5 text-xs font-bold uppercase tracking-wider bg-source-c94a59 hover:bg-source-b33947 text-white rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                Bulk / B2B Inquiry
              </Button>
            </div>

            {/* Direct Contact for Quick Mobile Access */}
            <div className="pt-4 border-t border-source-ebe6d8 mt-4 space-y-2 pb-10">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-source-8a9bb5">
                Direct Corporate Connect
              </p>
              <div className="flex flex-col gap-2 text-xs">
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-source-243247 hover:text-source-c94a59 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-source-c94a59" />
                  <span>{BRAND_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-2 text-source-243247 hover:text-source-c94a59 font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-source-c94a59" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
