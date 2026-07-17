import { createFileRoute } from "@tanstack/react-router";
import {
  PenTool,
  User,
  Sparkles,
  Eye,
  Minus,
  Anchor,
  Flower2,
  Landmark,
  Layers,
  Brush,
  Palette,
  CircleDot,
  RefreshCw,
  Wand2,
  Ear,
  Gem,
  MessageSquare,
  HeartPulse,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Tattoo & Piercing Services — Dev Tattoo & Art Kolkata" },
      {
        name: "description",
        content:
          "Custom, realism, anime, Japanese, sleeve & cover-up tattoos plus professional piercing in Kolkata. Transparent pricing. Book your session on WhatsApp.",
      },
      { property: "og:title", content: "Tattoo & Piercing Services — Dev Tattoo & Art Kolkata" },
      {
        property: "og:description",
        content:
          "Custom tattoos, realism, anime, sleeves, cover-ups & professional piercing in Kolkata.",
      },
      { property: "og:url", content: "https://skin-canvas-artisans.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://skin-canvas-artisans.lovable.app/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Tattoo & Piercing Services — Dev Tattoo & Art Kolkata",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              provider: {
                "@type": "TattooParlor",
                name: "Dev Tattoo & Art",
                url: "https://skin-canvas-artisans.lovable.app/",
              },
              offers: {
                "@type": "Offer",
                price: s.price.replace(/[^\d]/g, "") || "0",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
            },
          })),
        }),
      },
    ],
  }),
});

const SERVICES = [
  { icon: PenTool, title: "Custom Tattoos", desc: "One-of-one designs built from your story — never flash, never repeated.", price: "₹1,500" },
  { icon: User, title: "Portrait Tattoos", desc: "Photorealistic portraits of loved ones with breathtaking detail.", price: "₹8,000" },
  { icon: Sparkles, title: "Anime Tattoos", desc: "Vivid anime characters and scenes, from Naruto to Jujutsu Kaisen.", price: "₹4,000" },
  { icon: Eye, title: "Realism Tattoos", desc: "Hyper-realistic black & grey or color work that looks alive.", price: "₹6,000" },
  { icon: Minus, title: "Minimal & Fine Line", desc: "Delicate, elegant fine line pieces with surgical precision.", price: "₹1,500" },
  { icon: Anchor, title: "Traditional Tattoos", desc: "Bold lines, classic motifs, timeless old-school energy.", price: "₹3,000" },
  { icon: Flower2, title: "Japanese Tattoos", desc: "Irezumi dragons, koi, waves and blossoms — full-body storytelling.", price: "₹7,000" },
  { icon: Brush, title: "Black & Grey", desc: "Smooth gradients and deep contrast in monochrome mastery.", price: "₹3,500" },
  { icon: Palette, title: "Color Tattoos", desc: "Saturated, long-lasting color packed with premium inks.", price: "₹4,000" },
  { icon: CircleDot, title: "Mandala Tattoos", desc: "Sacred geometry and dotwork with perfect symmetry.", price: "₹3,500" },
  { icon: Landmark, title: "Religious Tattoos", desc: "Shiva, Kali, Om and spiritual art rendered with reverence.", price: "₹4,000" },
  { icon: Layers, title: "Sleeve Tattoos", desc: "Half and full sleeves — planned as a single flowing composition.", price: "₹25,000" },
  { icon: RefreshCw, title: "Cover-Up Tattoos", desc: "Old ink transformed into art you'll be proud to show.", price: "₹5,000" },
  { icon: Wand2, title: "Touch Up Tattoos", desc: "Refresh faded work and restore crisp lines and color.", price: "₹1,000" },
  { icon: Ear, title: "Ear & Lobe Piercing", desc: "Ear, upper lobe and cartilage piercing with sterile technique.", price: "₹500" },
  { icon: Gem, title: "Nose & Septum Piercing", desc: "Professional nose and septum piercing with premium jewellery.", price: "₹800" },
  { icon: MessageSquare, title: "Tattoo Consultation", desc: "Free design consultation — bring your idea, leave with a plan.", price: "Free" },
  { icon: HeartPulse, title: "Aftercare Support", desc: "Personal healing plan and free follow-up for every tattoo.", price: "Included" },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal>
        <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">What We Do</p>
        <h1 className="mt-3 font-display text-6xl text-foreground sm:text-8xl">Services</h1>
        <p className="mt-4 max-w-xl font-sub text-muted-foreground">
          Every service includes free consultation, sterile single-use equipment and a
          personal aftercare plan. Final pricing depends on size and detail.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <div className="glass group flex h-full flex-col rounded-xl p-7 transition-all hover:-translate-y-1 hover:border-primary/60">
              <s.icon className="h-8 w-8 text-primary" aria-hidden />
              <h2 className="mt-4 font-sub text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <p className="font-sub text-sm text-muted-foreground">
                  Starts from <span className="font-semibold text-foreground">{s.price}</span>
                </p>
                <a
                  href={SITE.whatsapp(`Hi! I'd like to book: ${s.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-4 py-2 font-sub text-xs font-semibold text-primary-foreground transition-all group-hover:shadow-[var(--glow)]"
                >
                  Book Now
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
