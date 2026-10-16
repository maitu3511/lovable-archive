import { createFileRoute } from "@tanstack/react-router";
import { CustomisationPage } from "@/site/views/CustomisationPage";

export const Route = createFileRoute("/customisation")({
  head: () => ({
    meta: [
      { title: "Custom Corporate Gifts & Logo Personalisation Services | KRIORA" },
      {
        name: "description",
        content:
          "Discover precision laser engraving, metallic foil embossing, custom packaging & branded gift hampers for companies of all sizes across India.",
      },
      {
        name: "keywords",
        content:
          "custom corporate gifts, laser engraved wooden gifts, logo branded diaries, personalized corporate merchandise, bespoke gift curation, customized gift packaging",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
      {
        property: "og:title",
        content: "Custom Corporate Gifts & Logo Personalisation Services | KRIORA",
      },
      {
        property: "og:description",
        content:
          "Discover precision laser engraving, metallic foil embossing, custom packaging & branded gift hampers for companies of all sizes across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kriora.in/customisation" },
      { property: "og:image", content: "/images/hero_customisation.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Custom Corporate Gifts & Logo Personalisation Services | KRIORA",
      },
      {
        name: "twitter:description",
        content:
          "Precision laser engraving, metallic foil embossing & bespoke gift packaging for corporate partners.",
      },
      { name: "twitter:image", content: "/images/hero_customisation.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kriora.in/customisation" }],
  }),
  component: CustomisationPage,
});
