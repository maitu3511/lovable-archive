import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/site/views/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KRIORA — Corporate Gifting Consultation & Inquiries" },
      {
        name: "description",
        content:
          "Connect directly with Namrata Adhvaryu for corporate gifting consultations, custom bulk orders and sample requests. Call or WhatsApp +91 96877 39779.",
      },
      {
        name: "keywords",
        content:
          "contact KRIORA, corporate gifting phone number, WhatsApp corporate gifting, KRIORA address Vadodara Gujarat, corporate gifts bulk order contact",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
      {
        property: "og:title",
        content: "Contact KRIORA — Corporate Gifting Consultation & Inquiries",
      },
      {
        property: "og:description",
        content:
          "Connect directly with Namrata Adhvaryu for corporate gifting consultations, custom bulk orders and sample requests. Call or WhatsApp +91 96877 39779.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kriora.in/contact" },
      { property: "og:image", content: "/images/hero_contact.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact KRIORA — Corporate Gifting Desk" },
      {
        name: "twitter:description",
        content:
          "Direct corporate gifting consultations, custom branding & doorstep bulk deliveries across India.",
      },
      { name: "twitter:image", content: "/images/hero_contact.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kriora.in/contact" }],
  }),
  component: ContactPage,
});
