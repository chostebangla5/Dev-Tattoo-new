import { Instagram, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import artistLead from "@/assets/artist-dev.jpg";
import artistRohan from "@/assets/artist-rohan.jpg";
import artistPriya from "@/assets/artist-priya.jpg";
import artistArjun from "@/assets/artist-arjun.jpg";

type Artist = {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  lead?: boolean;
};

const ARTISTS: Artist[] = [
  {
    name: "Debasis Adak",
    role: "Founder · Lead Artist",
    bio: "10+ years crafting realism, portrait & Japanese sleeves. The signature hand behind Dev Tattoo & Art.",
    image: artistLead.url,
    specialties: ["Realism", "Portrait", "Japanese"],
    lead: true,
  },
  {
    name: "Tushar",
    role: "Senior Artist",
    bio: "Blackwork, geometric & neo-traditional specialist. Known for razor-clean lines and bold compositions.",
    image: artistRohan,
    specialties: ["Blackwork", "Geometric", "Neo-Trad"],
  },
  {
    name: "Priya Rao",
    role: "Fine-Line Artist",
    bio: "Fine-line, botanical & minimal tattoos. A gentle hand for first-timers and delicate detail work.",
    image: artistPriya,
    specialties: ["Fine-Line", "Botanical", "Minimal"],
  },
  {
    name: "Subhankar",
    role: "Piercing Specialist",
    bio: "Certified piercing artist for ear, nose, septum & body work. Sterile technique, jewellery you can trust.",
    image: artistArjun,
    specialties: ["Ear", "Septum", "Body"],
  },
];

export function ArtistsSection() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">The Crew</p>
          <h2 className="mt-3 font-display text-5xl text-foreground sm:text-7xl">
            Meet The Artists
          </h2>
          <p className="mt-4 font-sub text-muted-foreground">
            A hand-picked team of tattoo & piercing specialists — each with their own signature style,
            all working under one roof at Dev Tattoo & Art.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ARTISTS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08}>
              <article
                className={`group glass relative h-full overflow-hidden rounded-2xl transition-all hover:border-primary/60 ${
                  a.lead ? "ring-1 ring-primary/40" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={a.image}
                    alt={`${a.name}, ${a.role} at Dev Tattoo & Art Kolkata`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  {a.lead && (
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-sub text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                      Lead
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl leading-none text-foreground">{a.name}</h3>
                  <p className="mt-1 font-sub text-xs uppercase tracking-[0.25em] text-primary">
                    {a.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.bio}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {a.specialties.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border px-3 py-1 font-sub text-[11px] uppercase tracking-widest text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={SITE.whatsapp(`Hi! I'd like to book with ${a.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 font-sub text-sm font-semibold text-primary-foreground"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden /> Book
                    </a>
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${a.name} on Instagram`}
                      className="glass inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:border-primary"
                    >
                      <Instagram className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
