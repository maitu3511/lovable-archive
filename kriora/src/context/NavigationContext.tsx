import React, { createContext, useContext, useState, useEffect } from "react";

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isQuickEnquiryOpen: boolean;
  openQuickEnquiry: (initialProduct?: string) => void;
  closeQuickEnquiry: () => void;
  selectedProductForEnquiry: string | null;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname || "/";
    }
    return "/";
  });

  const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
