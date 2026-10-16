/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { BulkEnquiryModal } from "./components/BulkEnquiryModal";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CorporateGiftingPage } from "./pages/CorporateGiftingPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CategoryDetailPage } from "./pages/CategoryDetailPage";
import { CustomisationPage } from "./pages/CustomisationPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { B2BEnquiryPage } from "./pages/B2BEnquiryPage";

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  const cleanPath = currentPath.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";

  const renderCurrentPage = () => {
    switch (cleanPath) {
      case "/":
        return <HomePage />;
      case "/about":
        return <AboutPage />;
      case "/corporate-gifting":
        return <CorporateGiftingPage />;
      case "/products":
        return <ProductsPage />;
      case "/products/desk-office-essentials":
        return <CategoryDetailPage categorySlug="desk-office-essentials" />;
      case "/products/festive-celebration":
        return <CategoryDetailPage categorySlug="festive-celebration" />;
      case "/products/lifestyle-keepsakes":
        return <CategoryDetailPage categorySlug="lifestyle-keepsakes" />;
      case "/b2b-enquiry":
      case "/bulk-enquiry":
        return <B2BEnquiryPage />;
      case "/customisation":
        return <CustomisationPage />;
      case "/how-it-works":
        return <HowItWorksPage />;
      case "/contact":
        return <ContactPage />;
      default:
        // Dedicated Product Detail URL: /product/:id
        if (cleanPath.startsWith("/product/")) {
          const prodId = cleanPath.replace("/product/", "");
          return <ProductDetailPage productId={prodId} />;
        }
        // Graceful fallback for subpaths or variations
        if (cleanPath.startsWith("/products/desk")) {
          return <CategoryDetailPage categorySlug="desk-office-essentials" />;
        }
        if (cleanPath.startsWith("/products/festive")) {
          return <CategoryDetailPage categorySlug="festive-celebration" />;
        }
        if (cleanPath.startsWith("/products/lifestyle")) {
          return <CategoryDetailPage categorySlug="lifestyle-keepsakes" />;
        }
        if (cleanPath.startsWith("/products")) {
          return <ProductsPage />;
        }
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7EE] text-[#1B263B] selection:bg-[#C94A59]/20 selection:text-[#1B263B]">
      <Navbar />
      <main className="flex-grow">{renderCurrentPage()}</main>
      <Footer />
      <FloatingWhatsApp />
      <BulkEnquiryModal />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
