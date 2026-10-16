import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/site/views/HomePage";
import heroVideoMp4 from "@/assets/kriora-gifting-background.mp4";
import heroVideoWebm from "@/assets/kriora-gifting-background.webm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KRIORA — Premium B2B Corporate Gifting & Handcrafted Keepsakes" },
      {
        name: "description",
        content:
          "Discover thoughtfully curated corporate gifts, employee welcome kits, festive hampers and logo-engraved keepsakes by KRIORA. Handcrafted in India.",
      },
      {
        name: "keywords",
        content:
          "corporate gifting, B2B gifts India, employee welcome kit, corporate festive hampers, personalized wooden gifts, Namrata Adhvaryu, luxury corporate hampers",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
      {
        property: "og:title",
        content: "KRIORA — Premium B2B Corporate Gifting & Handcrafted Keepsakes",
      },
      {
        property: "og:description",
        content:
          "Discover thoughtfully curated corporate gifts, employee welcome kits, festive hampers and logo-engraved keepsakes by KRIORA. Handcrafted in India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kriora.in" },
      { property: "og:image", content: "/images/hero_corporate.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "KRIORA — Premium B2B Corporate Gifting",
      },
      {
        name: "twitter:description",
        content:
          "Curated corporate gifts, employee onboarding kits & festive hampers handcrafted with wit, whimsy and wonder.",
      },
      { name: "twitter:image", content: "/images/hero_corporate.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://kriora.in" },
      { rel: "preload", as: "video", href: heroVideoMp4, type: "video/mp4" },
      { rel: "preload", as: "video", href: heroVideoWebm, type: "video/webm" },
    ],
  }),
  component: HomePage,
});
