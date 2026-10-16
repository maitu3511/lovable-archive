import React, { createContext, useContext, useEffect, useState } from "react";
import { preloadHeroImages } from "../heroImages";
import { useLocation, useNavigate } from "@tanstack/react-router";

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isQuickEnquiryOpen: boolean;
  openQuickEnquiry: (initialProduct?: string) => void;
  closeQuickEnquiry: () => void;
  selectedProductForEnquiry: string | null;
}

// Keep one context instance across hot reloads so pages never lose the provider.
const globalKey = "__kriora_navigation_context__";
const NavigationContext: React.Context<NavigationContextType | undefined> =
  ((globalThis as Record<string, unknown>)[globalKey] as React.Context<
    NavigationContextType | undefined
  >) ??
  (((globalThis as Record<string, unknown>)[globalKey] = createContext<
    NavigationContextType | undefined
  >(undefined)) as React.Context<NavigationContextType | undefined>);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const routerNavigate = useNavigate();

  const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string | null>(null);

  useEffect(() => {
    preloadHeroImages();
  }, []);

  const navigate = (path: string) => {
    void routerNavigate({ to: path });
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  const openQuickEnquiry = (initialProduct?: string) => {
    if (initialProduct) {
      setSelectedProductForEnquiry(initialProduct);
    } else {
      setSelectedProductForEnquiry(null);
    }
    setIsQuickEnquiryOpen(true);
  };

  const closeQuickEnquiry = () => {
    setIsQuickEnquiryOpen(false);
    setSelectedProductForEnquiry(null);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        isQuickEnquiryOpen,
        openQuickEnquiry,
        closeQuickEnquiry,
        selectedProductForEnquiry,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
