import { createFileRoute } from "@tanstack/react-router";
import { B2BEnquiryPage } from "@/site/views/B2BEnquiryPage";

export const Route = createFileRoute("/bulk-enquiry")({
  head: () => ({
    meta: [
      { title: "Bulk Corporate Gifting Enquiry & Wholesale Quotes | KRIORA" },
      {
        name: "description",
        content:
          "Discuss quantities, custom branding options, and doorstep delivery for your company's bulk gifting project. Seamless consultation with KRIORA.",
      },
      {
        name: "keywords",
        content:
          "bulk enquiry corporate gifting, wholesale corporate gifts India, employee gift order, customized hamper quotation",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
      {
        property: "og:title",
        content: "Bulk Corporate Gifting Enquiry & Wholesale Quotes | KRIORA",
      },
      {
        property: "og:description",
        content:
          "Discuss quantities, custom branding options, and doorstep delivery for your company's bulk gifting project. Seamless consultation with KRIORA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kriora.in/bulk-enquiry" },
      { property: "og:image", content: "/images/hero_b2b.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Bulk Corporate Gifting Enquiry | KRIORA",
      },
      {
        name: "twitter:description",
        content:
          "Custom corporate bulk gifting proposals, sample kits and doorstep delivery across India.",
      },
      { name: "twitter:image", content: "/images/hero_b2b.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kriora.in/bulk-enquiry" }],
  }),
  component: B2BEnquiryPage,
});
