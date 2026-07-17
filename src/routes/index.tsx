import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Star,
  Sparkles,
  ShieldCheck,
  PenTool,
  ArrowRight,
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  Instagram,
} from "lucide-react";
import { SITE, REELS } from "@/lib/site";
import { PORTFOLIO } from "@/lib/portfolio";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { Reveal } from "@/components/Reveal";
import { ArtistsSection } from "@/components/ArtistsSection";
import { WorkVideos } from "@/components/WorkVideos";
import artistAsset from "@/assets/artist.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dev Tattoo & Art — Best Tattoo Studio in Kolkata" },
      {
        name: "description",
        content:
          "Premium custom tattoos & piercing in Kolkata by Debasis Adak. 5.0★ rating, 1560+ Google reviews. Anime, realism, portrait & Japanese tattoos. Book on WhatsApp.",
      },
      { property: "og:title", content: "Dev Tattoo & Art — Best Tattoo Studio in Kolkata" },
      {
        property: "og:description",
        content:
          "Premium custom tattoos & piercing in Kolkata by Debasis Adak. 5.0★ rating, 1560+ Google reviews. Anime, realism, portrait & Japanese tattoos. Book on WhatsApp.",
      },
      { name: "twitter:title", content: "Dev Tattoo & Art — Best Tattoo Studio in Kolkata" },
      { property: "og:url", content: "https://skin-canvas-artisans.lovable.app/" },
      { property: "og:image", content: `https://skin-canvas-artisans.lovable.app${artistAsset.url}` },
      { name: "twitter:image", content: `https://skin-canvas-artisans.lovable.app${artistAsset.url}` },
    ],
    links: [
      { rel: "canonical", href: "https://skin-canvas-artisans.lovable.app/" },
      { rel: "preload", as: "image", href: artistAsset.url, fetchpriority: "high" },
    ],
  }),
});

const STATS = [
  { value: "5.0 ★", label: "Google Rating" },
  { value: "1560+", label: "Google Reviews" },
  { value: "1000+", label: "Tattoos Crafted" },
  { value: "100%", label: "Sterile & Safe" },
];

const STEPS = [
  { n: "01", title: "Consultation", desc: "Share your idea over WhatsApp or in-studio. We listen first." },
  { n: "02", title: "Custom Design", desc: "Debasis sketches a one-of-one design made only for you." },
  { n: "03", title: "Appointment", desc: "Pick your slot. We prep a fully sterile, private station." },
  { n: "04", title: "Tattoo Session", desc: "Precision work with premium machines and a near-painless touch." },
  { n: "05", title: "Healing & Aftercare", desc: "Free touch-up support and a personal aftercare plan." },
];

const REVIEWS = [
  {
    name: "Ankit S.",
    text: "Hands down the best tattoo experience in Kolkata. Debasis understood exactly what I wanted and made it even better. Hygiene level is international.",
  },
  {
    name: "Priya M.",
    text: "Got my first tattoo here and I was nervous — the team made it completely painless and comfortable. The fine line work is unreal.",
  },
  {
    name: "Rahul D.",
    text: "My full sleeve took 4 sessions and every single one was perfect. Worth every rupee. This studio is on another level.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-dvh items-end overflow-hidden bg-background sm:items-center">
        <div className="absolute inset-0">
          <img
            src={artistAsset.url}
            alt="Debasis Adak, lead tattoo artist at Dev Tattoo & Art Kolkata, holding a tattoo machine"
            className="h-full w-full object-cover object-[65%_top] opacity-80 sm:object-[75%_top]"
            width={1126}
            height={1418}
            fetchPriority="high"
          />
          <div className="hero-vignette absolute inset-0" />
          <div className="smoke pointer-events-none absolute -left-1/4 top-1/4 h-[60vh] w-[60vw] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-8 sm:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sub text-sm uppercase tracking-[0.35em] text-primary"
          >
            Kolkata · New Town · Rajarhat
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] text-foreground"
          >
            Your Skin
            <br />
            <span className="text-crimson-gradient">Our Masterpiece</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-6 max-w-lg font-sub text-base text-muted-foreground sm:text-lg"
          >
            Premium custom tattoo experiences crafted by{" "}
            <span className="text-foreground">Debasis Adak</span> — one of Kolkata's
            highest-rated tattoo artists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={SITE.whatsapp("Hi Dev Tattoo & Art! I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-sub font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" aria-hidden /> Book Appointment
            </a>
            <Link
              to="/portfolio"
              className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-sub font-semibold text-foreground transition-all hover:border-primary"
            >
              View Portfolio <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-sub text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5 text-foreground">
              <span className="text-primary" aria-hidden>★★★★★</span> {SITE.reviews} Google Reviews
            </span>
            <span className="flex items-center gap-1.5">
              <PenTool className="h-4 w-4 text-primary" aria-hidden /> 1000+ Tattoos
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> Premium Studio
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden /> Expert Piercing
            </span>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="px-6 py-10 text-center">
              <p className="font-display text-4xl text-crimson-gradient sm:text-5xl">{s.value}</p>
              <p className="mt-1 font-sub text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WORK VIDEOS */}
      <WorkVideos />

      {/* PORTFOLIO PREVIEW */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">Selected Work</p>
          <h2 className="mt-3 font-display text-5xl text-foreground sm:text-7xl">The Portfolio</h2>
        </Reveal>
        <div className="mt-12">
          <PortfolioGallery limit={6} />
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-sub font-semibold transition-all hover:border-primary"
          >
            Explore Full Portfolio <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </section>

      {/* BOOKING FLOW */}
      <section className="section-pad border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal>
            <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">The Process</p>
            <h2 className="mt-3 font-display text-5xl text-foreground sm:text-7xl">
              From Idea to Ink
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="glass h-full rounded-xl p-6 transition-colors hover:border-primary/50">
                  <p className="font-display text-4xl text-primary">{s.n}</p>
                  <h3 className="mt-3 font-sub text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <ArtistsSection />

      {/* REVIEWS */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="text-center">
          <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">Google Reviews</p>
          <h2 className="mt-3 font-display text-5xl text-foreground sm:text-7xl">
            Rated 5.0 by 1560+ Clients
          </h2>
          <p className="mt-3 flex items-center justify-center gap-1 text-primary" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" aria-hidden />
            ))}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <figure className="glass h-full rounded-xl p-7">
                <p className="text-primary" aria-hidden>★★★★★</p>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 font-sub text-sm font-semibold text-foreground">
                  {r.name} · <span className="font-normal text-muted-foreground">Google Review</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section-pad border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">
                @devtattooandart
              </p>
              <h2 className="mt-3 font-display text-5xl text-foreground sm:text-7xl">
                Watch the Craft
              </h2>
            </div>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-sub font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Instagram className="h-5 w-5" aria-hidden /> Follow on Instagram
            </a>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {REELS.map((url, i) => (
              <Reveal key={url} delay={i * 0.06}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[3/4] overflow-hidden rounded-xl border border-border"
                  aria-label={`Watch reel ${i + 1} on Instagram`}
                >
                  <img
                    src={PORTFOLIO[i % PORTFOLIO.length].src}
                    alt={`Dev Tattoo & Art Instagram reel preview ${i + 1}`}
                    loading="lazy"
                    width={384}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Instagram className="h-8 w-8 text-foreground" aria-hidden />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section-pad mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">The Studio</p>
            <h2 className="mt-3 font-display text-5xl text-foreground sm:text-7xl">Find Us</h2>
            <address className="mt-6 flex items-start gap-3 text-base not-italic leading-relaxed text-muted-foreground">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              {SITE.address}
            </address>
            <p className="mt-4 flex items-center gap-3 text-muted-foreground">
              <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden /> {SITE.hours}
            </p>
            <a href={SITE.phoneHref} className="mt-4 flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
              <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden /> {SITE.phone}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Landmark: Opposite Lokenath Temple · Street parking available on Rajarhat Main Road.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-sub font-semibold transition-all hover:border-primary"
              >
                Get Directions <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={SITE.whatsapp("Hi! I'd like to visit the studio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-sub font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" aria-hidden /> WhatsApp Us
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src={SITE.mapsEmbed}
                title="Dev Tattoo & Art studio location on Google Maps"
                className="h-[420px] w-full grayscale invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="smoke pointer-events-none absolute right-0 top-0 h-[50vh] w-[50vw] rounded-full bg-primary/15 blur-[140px]" />
        <div className="section-pad relative mx-auto max-w-4xl px-4 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] text-foreground">
              Ready to Wear
              <br />
              <span className="text-crimson-gradient">Your Story?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md font-sub text-muted-foreground">
              Consultations are free. Your design is one-of-one. Book your session with
              Debasis Adak today.
            </p>
            <a
              href={SITE.whatsapp("Hi Dev Tattoo & Art! I'd like to book a free consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 font-sub text-lg font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" aria-hidden /> Book on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
