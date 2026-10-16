import React, { useEffect } from "react";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_IMAGE = "/images/hero_corporate.jpg";
const BASE_URL = "https://kriora.in";

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = "",
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  keywords,
  jsonLd,
}) => {
  const fullUrl = `${BASE_URL}${canonicalPath}`;
  const fullImageUrl = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;

  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attribute: "name" | "property", key: string, value: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    // 2. Standard SEO meta tags
    setMetaTag("name", "description", description);
    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    }
    setMetaTag("name", "robots", "index, follow, max-image-preview:large");

    // 3. OpenGraph tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", fullUrl);
    setMetaTag("property", "og:image", fullImageUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "KRIORA — B2B Corporate Gifting");

    // 4. Twitter / X Cards
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", fullImageUrl);

    // 5. Canonical link tag
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", fullUrl);

    // 6. JSON-LD Structured Data
    const scriptId = `seo-jsonld-${canonicalPath.replace(/[^a-zA-Z0-9]/g, "-") || "root"}`;
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = scriptId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(jsonLd);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, fullUrl, fullImageUrl, ogType, keywords, jsonLd, canonicalPath]);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
};
