import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailPage } from "@/site/views/ProductDetailPage";
import { PRODUCTS } from "@/site/data/krioraData";

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.id);
    const title = product
      ? `${product.name} — Handcrafted Corporate Gift | KRIORA`
      : "KRIORA Corporate Gift Product";
    const description =
      product?.description ??
      "Discover KRIORA handcrafted corporate gifts. Premium quality, custom logo engraving and pan-India doorstep delivery.";
    const imageUrl = product?.image ?? "/images/hero_products.jpg";
    const canonical = `https://kriora.in/product/${params.id}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        {
          name: "keywords",
          content: `${product?.name ?? "corporate gift"}, ${product?.categoryLabel ?? "gifting"}, corporate gifts India, personalized gifts, custom logo engraving, KRIORA`,
        },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:site_name", content: "KRIORA — B2B Corporate Gifting" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
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
  component: ProductRoute,
});

function ProductRoute() {
  const { id } = Route.useParams();
  return <ProductDetailPage productId={id} />;
}
