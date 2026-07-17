import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Tattoo Portfolio — Dev Tattoo & Art Kolkata" },
      {
        name: "description",
        content:
          "Explore realism, anime, portrait, Japanese, mandala & blackwork tattoos by Debasis Adak — Kolkata's highest-rated tattoo artist in New Town, Rajarhat.",
      },
      { property: "og:title", content: "Tattoo Portfolio — Dev Tattoo & Art Kolkata" },
      {
        property: "og:description",
        content:
          "Realism, anime, portrait, Japanese & blackwork tattoos by Debasis Adak, Kolkata.",
      },
      { property: "og:url", content: "https://skin-canvas-artisans.lovable.app/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://skin-canvas-artisans.lovable.app/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Tattoo Portfolio — Dev Tattoo & Art Kolkata",
          description:
            "Curated collection of realism, anime, portrait, Japanese, mandala and blackwork tattoos by Debasis Adak in Kolkata.",
          url: "https://skin-canvas-artisans.lovable.app/portfolio",
          isPartOf: {
            "@type": "WebSite",
            name: "Dev Tattoo & Art",
            url: "https://skin-canvas-artisans.lovable.app/",
          },
        }),
      },
    ],
  }),
});

function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal>
        <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">Selected Work</p>
        <h1 className="mt-3 font-display text-6xl text-foreground sm:text-8xl">The Portfolio</h1>
        <p className="mt-4 max-w-xl font-sub text-muted-foreground">
          Every piece is a one-of-one design. Filter by style to explore how Debasis
          translates ideas into ink.
        </p>
      </Reveal>
      <div className="mt-12">
        <PortfolioGallery />
      </div>
      <Reveal className="mt-16 text-center">
        <a
          href={SITE.whatsapp("Hi! I saw your portfolio and want to discuss a custom tattoo.")}
          target="_blank"
          rel="noopener noreferrer"
          className="glow-btn inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 font-sub font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" aria-hidden /> Discuss Your Idea
        </a>
      </Reveal>
    </div>
  );
}
