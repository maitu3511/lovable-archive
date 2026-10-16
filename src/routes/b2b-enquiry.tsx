import { createFileRoute } from "@tanstack/react-router";
import { B2BEnquiryPage } from "@/site/views/B2BEnquiryPage";

export const Route = createFileRoute("/b2b-enquiry")({
  head: () => ({
    meta: [
      { title: "B2B Bulk Corporate Gift Enquiry & Custom Quotation | KRIORA" },
      {
        name: "description",
        content:
          "Request a fast bulk quotation and digital mockups for your company's corporate gifting needs. Connect directly with founder Namrata Adhvaryu.",
      },
      {
        name: "keywords",
        content:
          "B2B gift enquiry, corporate gift quote, bulk order corporate gifting, employee gift enquiry, KRIORA wholesale, custom corporate gift quotation",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
      {
        property: "og:title",
        content: "B2B Bulk Corporate Gift Enquiry & Custom Quotation | KRIORA",
      },
      {
        property: "og:description",
        content:
          "Request a fast bulk quotation and digital mockups for your company's corporate gifting needs. Connect directly with founder Namrata Adhvaryu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kriora.in/b2b-enquiry" },
      { property: "og:image", content: "/images/hero_b2b.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "B2B Bulk Corporate Gift Enquiry | KRIORA",
      },
      {
        name: "twitter:description",
        content:
          "Fast bulk quotations, custom mockups, and doorstep dispatch for corporate gifting.",
      },
      { name: "twitter:image", content: "/images/hero_b2b.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kriora.in/b2b-enquiry" }],
  }),
  component: B2BEnquiryPage,
});
