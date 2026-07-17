import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import logoAsset from "@/assets/logo.asset.png";

const SITE_URL = "https://skin-canvas-artisans.lovable.app";
const LOGO_URL = `${SITE_URL}${logoAsset.url}`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
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
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "Dev Tattoo & Art — Best Tattoo Studio in Kolkata" },
      {
        name: "description",
        content:
          "Premium custom tattoos & piercing in Kolkata by Debasis Adak. 5.0★ rating, 1560+ Google reviews. Anime, realism, portrait & Japanese tattoos. Book on WhatsApp.",
      },
      { name: "author", content: "Dev Tattoo & Art" },
      { property: "og:title", content: "Dev Tattoo & Art — Best Tattoo Studio in Kolkata" },
      {
        property: "og:description",
        content:
          "Premium custom tattoos & piercing in Kolkata by Debasis Adak. 5.0★ rating, 1560+ Google reviews. Anime, realism, portrait & Japanese tattoos. Book on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dev Tattoo & Art" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dev Tattoo & Art — Best Tattoo Studio in Kolkata" },
      { name: "twitter:description", content: "Premium custom tattoos & piercing in Kolkata by Debasis Adak. 5.0★ rating, 1560+ Google reviews. Anime, realism, portrait & Japanese tattoos. Book on WhatsApp." },
      { name: "google-site-verification", content: "2I4QDlu9QpiM5O7TxakZi5qpfL0BJukmCoptP0KO-Tc" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TattooParlor",
          name: "Dev Tattoo & Art",
          image: LOGO_URL,
          telephone: "+91-80803-53553",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Nanda Bhavan, 184 Rajarhat Main Road, Opposite Lokenath Temple, Pearabagan, New Town, Rajarhat",
            addressLocality: "Kolkata",
            addressRegion: "West Bengal",
            postalCode: "700157",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "1560",
          },
          founder: { "@type": "Person", name: "Debasis Adak" },
          sameAs: [
            "https://www.instagram.com/devtattooandart",
            "https://www.facebook.com/devtattooandart",
          ],
          priceRange: "₹₹",
        }),
      },
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <FloatingButtons />
      <Footer />
    </QueryClientProvider>
  );
}
