import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/site/views/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KRIORA — Handcrafted Corporate Gifting & Our Story" },
      {
        name: "description",
        content:
          "Meet founder Namrata Adhvaryu and discover KRIORA's artisanal philosophy of Wit • Whimsy • Wonder. Thoughtful corporate gifting handcrafted across India.",
      },
      {
        name: "keywords",
        content:
          "about KRIORA, Namrata Adhvaryu, corporate gift manufacturer India, artisanal corporate gifts, handcrafted keepsakes Vadodara, premium B2B gifts",
      },
      { name: "author", content: "Namrata Adhvaryu (Founder, KRIORA)" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
      { property: "og:title", content: "About KRIORA — Handcrafted Corporate Gifting & Our Story" },
      {
        property: "og:description",
        content:
          "Meet founder Namrata Adhvaryu and discover KRIORA's artisanal philosophy of Wit • Whimsy • Wonder. Thoughtful corporate gifting handcrafted across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kriora.in/about" },
      { property: "og:image", content: "/images/founder_namrata_1791878021459.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About KRIORA — Handcrafted Corporate Gifting" },
      {
        name: "twitter:description",
        content:
          "Meet founder Namrata Adhvaryu and explore the artisanal care behind KRIORA's B2B corporate gifting.",
      },
      { name: "twitter:image", content: "/images/founder_namrata_1791878021459.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kriora.in/about" }],
  }),
  component: AboutPage,
});
