import { createFileRoute } from "@tanstack/react-router";
import { HowItWorksPage } from "@/site/views/HowItWorksPage";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Simple 4-Step Bulk Corporate Gifting | KRIORA" },
      {
        name: "description",
        content:
          "From initial consultation and curation to precision crafting and doorstep pan-India delivery. Learn how KRIORA simplifies corporate bulk gifting.",
      },
      {
        name: "keywords",
        content:
          "corporate gifting process, how to order corporate gifts in bulk, corporate gift delivery India, custom gift prototyping, bulk gift production lead times",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
      {
        property: "og:title",
        content: "How It Works — Simple 4-Step Bulk Corporate Gifting | KRIORA",
      },
      {
        property: "og:description",
        content:
          "From initial consultation and curation to precision crafting and doorstep pan-India delivery. Learn how KRIORA simplifies corporate bulk gifting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kriora.in/how-it-works" },
      { property: "og:image", content: "/images/hero_how_it_works.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "How It Works — Simple 4-Step Bulk Corporate Gifting | KRIORA",
      },
      {
        name: "twitter:description",
        content:
          "Consultation, curation, production and secure pan-India delivery for corporate gifting.",
      },
      { name: "twitter:image", content: "/images/hero_how_it_works.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kriora.in/how-it-works" }],
  }),
  component: HowItWorksPage,
});
