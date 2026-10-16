import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { NavigationProvider } from "@/site/context/NavigationContext";
import { Navbar } from "@/site/components/Navbar";
import { Footer } from "@/site/components/Footer";
import { FloatingWhatsApp } from "@/site/components/FloatingWhatsApp";
import { BulkEnquiryModal } from "@/site/components/BulkEnquiryModal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KRIORA — Premium B2B Corporate Gifting & Handcrafted Keepsakes" },
      {
        name: "description",
        content:
          "Discover thoughtfully curated corporate gifts, employee welcome kits, festive hampers and logo-engraved keepsakes by KRIORA. Handcrafted in India.",
      },
      {
        name: "keywords",
        content:
          "corporate gifting, B2B gifts India, employee welcome kits, festive corporate gifts, personalized wooden gifts, luxury hampers, Namrata Adhvaryu",
      },
      { name: "author", content: "KRIORA (Founder: Namrata Adhvaryu)" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#c94a59" },
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
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Finger+Paint&family=Nunito+Sans:ital,opsz,wght@0,6..12,300..900;1,6..12,300..900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "canonical", href: "https://kriora.in" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// Warm every site photo into the browser cache right after first paint,
// so pictures on other pages open instantly.
const siteImageUrls = Object.values(
  import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", { eager: true, query: "?url", import: "default" }),
) as string[];

function useWarmSiteImages() {
  useEffect(() => {
    const start = () => siteImageUrls.forEach((src) => { const i = new Image(); i.decoding = "async"; i.src = src; });
    const t = setTimeout(start, 600);
    return () => clearTimeout(t);
  }, []);
}

function RootComponent() {
  useWarmSiteImages();
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on navigation so entrance animations trigger properly
    window.scrollTo({ top: 0, behavior: "instant" });

    let observer: IntersectionObserver | null = null;

    const checkAndObserve = () => {
      const elements = document.querySelectorAll<HTMLElement>(
        ".reveal-on-scroll:not(.is-revealed)",
      );
      if (!elements.length) return;

      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                delete (entry.target as HTMLElement).dataset["revealing"];
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
        );
      }

      let inViewIndex = 0;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in initial viewport, stagger reveal so animation is smoothly visible
        if (rect.top <= window.innerHeight * 0.95 && rect.bottom >= 0) {
          if (el.dataset["revealing"]) return;
          el.dataset["revealing"] = "true";
          const delayMs = Math.min(inViewIndex * 50, 350);
          inViewIndex++;
          setTimeout(() => {
            el.classList.add("is-revealed");
            delete el.dataset["revealing"];
          }, delayMs);
        } else {
          observer?.observe(el);
        }
      });
    };

    // Give DOM a frame to compute initial transform styles before revealing in-view elements
    const rafId = requestAnimationFrame(() => {
      checkAndObserve();
    });

    const t1 = setTimeout(checkAndObserve, 80);
    const t2 = setTimeout(checkAndObserve, 250);

    // Watch for dynamic DOM additions (e.g. tabs switching or products loading)
    const mutationObserver = new MutationObserver(() => {
      checkAndObserve();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Safety fallback: ensure all elements in view or near view are revealed
    const safetyTimer = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal-on-scroll:not(.is-revealed)")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 1.1) {
            el.classList.add("is-revealed");
            delete el.dataset["revealing"];
          }
        });
    }, 1200);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(safetyTimer);
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, [router.state.location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationProvider>
        <div className="flex flex-col min-h-screen bg-source-faf7ee text-source-1b263b">
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
          <FloatingWhatsApp />
          <BulkEnquiryModal />
        </div>
      </NavigationProvider>
    </QueryClientProvider>
  );
}
