import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Award, Syringe, MessageSquare, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import artistAsset from "@/assets/artist-dev.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Debasis Adak — Dev Tattoo & Art Kolkata" },
      {
        name: "description",
        content:
          "Meet Debasis Adak, lead artist at Dev Tattoo & Art — Kolkata's 5.0★ rated tattoo studio. International hygiene, premium equipment, 1000+ custom tattoos.",
      },
      { property: "og:title", content: "About Debasis Adak — Dev Tattoo & Art Kolkata" },
      {
        property: "og:description",
        content:
          "Kolkata's 5.0★ tattoo artist. International hygiene, premium equipment, 1000+ custom tattoos.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: `https://id-preview--45755f1e-491e-4695-8d8a-348274a34b34.lovable.app${artistAsset.url}` },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const TIMELINE = [
  { year: "The Beginning", text: "Debasis picks up a machine after years of sketching — art moves from paper to skin." },
  { year: "The Studio", text: "Dev Tattoo & Art opens in New Town, Rajarhat with a single promise: never compromise on art or hygiene." },
  { year: "The Recognition", text: "Word spreads. The studio crosses 1000+ tattoos and becomes one of Kolkata's highest-rated studios." },
  { year: "Today", text: "5.0★ with 1560+ Google reviews. Clients travel from across India and abroad for custom work." },
];

const PILLARS = [
  { icon: ShieldCheck, title: "International Hygiene", text: "Single-use needles, hospital-grade sterilization, sealed inks — every session, no exceptions." },
  { icon: Award, title: "Premium Equipment", text: "Top-tier rotary machines and imported pigments for cleaner lines and richer, longer-lasting color." },
  { icon: MessageSquare, title: "Creative Consultation", text: "Every tattoo starts as a conversation. We design with you, not just for you." },
  { icon: Syringe, title: "Near-Painless Technique", text: "Refined hand technique and pacing that first-timers consistently call 'way easier than expected'." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">The Artist</p>
          <h1 className="mt-3 font-display text-6xl leading-none text-foreground sm:text-8xl">
            Debasis
            <br />
            <span className="text-crimson-gradient">Adak</span>
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Lead artist and founder of Dev Tattoo &amp; Art, Debasis has spent years turning
            skin into canvas across every style — hyper-realism, anime, Japanese irezumi,
            fine line and spiritual art. His philosophy is simple:{" "}
            <span className="text-foreground">
              a tattoo should mean something forever, so it should be designed like it will
              last forever.
            </span>
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Every client gets a personal consultation, a custom one-of-one design, and a
            session built around comfort — which is why the studio holds a perfect 5.0
            rating across 1560+ Google reviews.
          </p>
          <a
            href={SITE.whatsapp("Hi Debasis! I'd like to discuss a tattoo idea.")}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-sub font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" aria-hidden /> Talk to Debasis
          </a>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={artistAsset.url}
              alt="Debasis Adak, founder and lead tattoo artist of Dev Tattoo & Art Kolkata, smiling with a tattoo machine"
              className="w-full"
              width={1126}
              height={1418}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="font-display text-2xl text-foreground">Debasis Adak</p>
              <p className="font-sub text-sm text-muted-foreground">Founder · Lead Artist</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* TIMELINE */}
      <section className="mt-28">
        <Reveal>
          <h2 className="font-display text-5xl text-foreground sm:text-6xl">The Journey</h2>
        </Reveal>
        <div className="mt-10 space-y-0 border-l border-border pl-8">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.08}>
              <div className="relative pb-10">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-[var(--glow)]" aria-hidden />
                <h3 className="font-sub text-lg font-semibold text-primary">{t.year}</h3>
                <p className="mt-1 max-w-2xl leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="mt-20">
        <Reveal>
          <h2 className="font-display text-5xl text-foreground sm:text-6xl">Why Clients Trust Us</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass h-full rounded-xl p-7 transition-colors hover:border-primary/50">
                <p.icon className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-4 font-sub text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
