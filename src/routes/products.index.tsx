import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/site/views/ProductsPage";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Corporate Gifts Catalogue — Handcrafted Desk & Festive Items | KRIORA" },
      {
        name: "description",
        content:
          "Browse KRIORA's curated collection of handcrafted wooden desk organisers, aromatic candles, festive dry fruit hampers, clutches & executive gifts.",
      },
      {
        name: "keywords",
        content:
          "corporate gifts catalogue, wooden desk organiser, festive gift boxes, luxury clutches, scented candles corporate gifting, personalized corporate gifts",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
      {
        property: "og:title",
        content: "Corporate Gifts Catalogue — Handcrafted Desk & Festive Items | KRIORA",
      },
      {
        property: "og:description",
        content:
          "Browse KRIORA's curated collection of handcrafted wooden desk organisers, aromatic candles, festive dry fruit hampers, clutches & executive gifts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kriora.in/products" },
      { property: "og:image", content: "/images/hero_products.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Corporate Gifts Catalogue — Handcrafted Desk & Festive Items | KRIORA",
      },
      {
        name: "twitter:description",
        content:
          "Browse handcrafted wooden desk organisers, festive dry fruit hampers, clutches & executive gifts.",
      },
      { name: "twitter:image", content: "/images/hero_products.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kriora.in/products" }],
  }),
  component: ProductsPage,
});
