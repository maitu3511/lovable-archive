import React, { useState, useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import { Menu, X, Phone, Mail } from "lucide-react";
import { BRAND_INFO } from "../data/krioraData";

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
            ? "bg-[#FAF7EE]/95 backdrop-blur-md border-b border-[#E5DFD1] shadow-sm"
            : "bg-[#FAF7EE] border-b border-[#EAE4D6]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Tagline */}
            <button
              onClick={() => handleNavClick("/")}
              className="flex flex-col text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C94A59] cursor-pointer"
              aria-label="KRIORA Home"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-2xl sm:text-3xl tracking-wider text-[#1B263B] group-hover:text-[#C94A59] transition-colors">
                  KRIORA
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#C94A59] inline-block" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[11px] sm:text-xs tracking-[0.2em] text-[#C94A59] uppercase font-semibold">
                  Wit • Whimsy • Wonder
                </span>
              </div>
            </button>

            {/* Desktop Navigation (Direct Links, No Dropdown) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-3.5 py-2 text-sm tracking-wide transition-colors font-medium cursor-pointer ${
                    isCurrentActive(item.path)
                      ? "text-[#C94A59] font-bold"
                      : "text-[#243247] hover:text-[#C94A59]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isCurrentActive(item.path) && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C94A59] rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Action CTA: Bulk / B2B Inquiry Button */}
            <div className="flex items-center ml-auto mr-2 lg:ml-0 lg:mr-0">
              <button
                onClick={handleInquiryClick}
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs font-bold tracking-wider uppercase bg-[#C94A59] hover:bg-[#B33947] text-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5 active:scale-[0.98]"
                title="Open Bulk & B2B Inquiry"
              >
                <span>B2B Inquiry</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  mobileMenuOpen
                    ? "text-white bg-[#C94A59] border-[#C94A59]"
                    : "text-[#1B263B] hover:text-[#C94A59] bg-white border-[#E5DFD1]"
                }`}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
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
          className="lg:hidden fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-[#FAF7EE] border-t border-[#E5DFD1] z-50 overflow-y-auto overscroll-contain shadow-2xl flex flex-col justify-between"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="px-5 pt-4 pb-8 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-[#EBE6D8]/80 pb-1">
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left py-3 px-3 text-base font-medium transition-colors cursor-pointer flex items-center justify-between rounded-lg ${
                    isCurrentActive(item.path)
                      ? "text-[#C94A59] font-bold bg-[#F4EFEB]"
                      : "text-[#243247] hover:text-[#C94A59] hover:bg-[#F4EFEB]/50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isCurrentActive(item.path) && (
                    <span className="w-2 h-2 rounded-full bg-[#C94A59]" />
                  )}
                </button>
              </div>
            ))}

            {/* Prominent Action Button: Bulk / B2B Inquiry */}
            <div className="pt-6 pb-2">
              <button
                onClick={handleInquiryClick}
                className="w-full text-center py-3.5 text-xs font-bold uppercase tracking-wider bg-[#C94A59] hover:bg-[#B33947] text-white rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                Bulk / B2B Inquiry
              </button>
            </div>

            {/* Direct Contact for Quick Mobile Access */}
            <div className="pt-4 border-t border-[#EBE6D8] mt-4 space-y-2 pb-10">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9BB5]">
                Direct Corporate Connect
              </p>
              <div className="flex flex-col gap-2 text-xs">
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-[#243247] hover:text-[#C94A59] font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C94A59]" />
                  <span>{BRAND_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-2 text-[#243247] hover:text-[#C94A59] font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C94A59]" />
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
