import { createFileRoute } from "@tanstack/react-router";
import { CorporateGiftingPage } from "@/site/views/CorporateGiftingPage";

export const Route = createFileRoute("/corporate-gifting")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting Solutions — Employee Kits & VIP Keepsakes | KRIORA" },
      {
        name: "description",
        content:
          "Bespoke corporate gifting programs for employee onboarding, milestone celebrations, VIP client appreciation & luxury festive hampers with bulk delivery.",
      },
      {
        name: "keywords",
        content:
          "corporate gifting solutions, employee milestone gifts, client appreciation gifts, luxury corporate hampers India, bulk gifting supplier, HR onboarding kits",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
      {
        property: "og:title",
        content: "Corporate Gifting Solutions — Employee Kits & VIP Keepsakes | KRIORA",
      },
      {
        property: "og:description",
        content:
          "Bespoke corporate gifting programs for employee onboarding, milestone celebrations, VIP client appreciation & luxury festive hampers with bulk delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kriora.in/corporate-gifting" },
      { property: "og:image", content: "/images/hero_corporate.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Corporate Gifting Solutions — Employee Kits & VIP Keepsakes | KRIORA",
      },
      {
        name: "twitter:description",
        content:
          "Bespoke corporate gifting programs for employee onboarding, milestone celebrations, and VIP client appreciation.",
      },
      { name: "twitter:image", content: "/images/hero_corporate.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kriora.in/corporate-gifting" }],
  }),
  component: CorporateGiftingPage,
});
