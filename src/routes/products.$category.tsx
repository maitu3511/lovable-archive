import { createFileRoute } from "@tanstack/react-router";
import { CategoryDetailPage } from "@/site/views/CategoryDetailPage";
import { CATEGORIES } from "@/site/data/krioraData";

export const Route = createFileRoute("/products/$category")({
  head: ({ params }) => {
    const category = CATEGORIES.find((c) => c.slug === params.category);
    const title = `${category?.title ?? "Corporate Gift Collection"} | KRIORA`;
    const description =
      category?.summary ??
      "Explore thoughtfully handcrafted corporate gift collections by KRIORA. Perfect for employees, festive hampers & client appreciation.";
    const imageUrl = category?.image ?? "/images/hero_products.jpg";
    const canonical = `https://kriora.in/products/${params.category}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `${category?.title ?? "gifts"}, corporate gifting India, bulk gift sets, personalized ${category?.title ?? "gifts"}, KRIORA hampers`,
        },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: imageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: CategoryRoute,
});

function CategoryRoute() {
  const { category } = Route.useParams();
  const slug =
    category === "festive-celebration" || category === "lifestyle-keepsakes"
      ? category
      : "desk-office-essentials";
  return <CategoryDetailPage categorySlug={slug} />;
}
