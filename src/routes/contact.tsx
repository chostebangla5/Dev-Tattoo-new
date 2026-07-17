import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Book a Tattoo Appointment — Dev Tattoo & Art Kolkata" },
      {
        name: "description",
        content:
          "Book your tattoo or piercing session at Dev Tattoo & Art, New Town, Rajarhat, Kolkata. Free consultation. WhatsApp +91 80803 53553.",
      },
      { property: "og:title", content: "Book a Tattoo Appointment — Dev Tattoo & Art Kolkata" },
      {
        property: "og:description",
        content:
          "Free tattoo consultation in Kolkata. Book on WhatsApp — New Town, Rajarhat studio.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

interface FormState {
  name: string;
  phone: string;
  email: string;
  idea: string;
  placement: string;
  budget: string;
  date: string;
  notes: string;
}

const EMPTY: FormState = {
  name: "",
  phone: "",
  email: "",
  idea: "",
  placement: "",
  budget: "",
  date: "",
  notes: "",
};

const inputCls =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-colors";

function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.idea.trim()) {
      setError("Please fill in your name, phone number and tattoo idea.");
      return;
    }
    setError(null);
    const msg = [
      `Hi Dev Tattoo & Art! I'd like to book an appointment.`,
      ``,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.email.trim() && `Email: ${form.email.trim()}`,
      `Tattoo idea: ${form.idea.trim()}`,
      form.placement.trim() && `Placement: ${form.placement.trim()}`,
      form.budget.trim() && `Budget: ${form.budget.trim()}`,
      form.date.trim() && `Preferred date: ${form.date.trim()}`,
      form.notes.trim() && `Notes: ${form.notes.trim()}`,
      ``,
      `I can share reference images here on WhatsApp.`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(SITE.whatsapp(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal>
        <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">Get In Touch</p>
        <h1 className="mt-3 font-display text-6xl text-foreground sm:text-8xl">Book Your Session</h1>
        <p className="mt-4 max-w-xl font-sub text-muted-foreground">
          Fill in the details below — we'll open WhatsApp with everything pre-filled so you
          can attach reference images and confirm your slot instantly.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form onSubmit={submit} className="glass rounded-2xl p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-sub text-sm text-foreground">Name *</label>
                <input id="name" className={inputCls} value={form.name} onChange={set("name")} maxLength={100} placeholder="Your full name" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block font-sub text-sm text-foreground">Phone *</label>
                <input id="phone" className={inputCls} value={form.phone} onChange={set("phone")} maxLength={20} placeholder="+91 ..." autoComplete="tel" inputMode="tel" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1.5 block font-sub text-sm text-foreground">Email</label>
                <input id="email" type="email" className={inputCls} value={form.email} onChange={set("email")} maxLength={255} placeholder="you@example.com" autoComplete="email" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="idea" className="mb-1.5 block font-sub text-sm text-foreground">Tattoo Idea *</label>
                <textarea id="idea" className={`${inputCls} min-h-24 resize-y`} value={form.idea} onChange={set("idea")} maxLength={1000} placeholder="Describe your tattoo idea — style, elements, meaning..." />
              </div>
              <div>
                <label htmlFor="placement" className="mb-1.5 block font-sub text-sm text-foreground">Placement</label>
                <input id="placement" className={inputCls} value={form.placement} onChange={set("placement")} maxLength={100} placeholder="Forearm, back, sleeve..." />
              </div>
              <div>
                <label htmlFor="budget" className="mb-1.5 block font-sub text-sm text-foreground">Budget</label>
                <input id="budget" className={inputCls} value={form.budget} onChange={set("budget")} maxLength={50} placeholder="₹5,000 – ₹10,000" />
              </div>
              <div>
                <label htmlFor="date" className="mb-1.5 block font-sub text-sm text-foreground">Preferred Date</label>
                <input id="date" type="date" className={inputCls} value={form.date} onChange={set("date")} />
              </div>
              <div>
                <label htmlFor="notes" className="mb-1.5 block font-sub text-sm text-foreground">Notes</label>
                <input id="notes" className={inputCls} value={form.notes} onChange={set("notes")} maxLength={500} placeholder="Anything else we should know?" />
              </div>
            </div>
            {error && (
              <p className="mt-4 text-sm text-destructive" role="alert">{error}</p>
            )}
            <button
              type="submit"
              className="glow-btn mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-sub font-semibold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden /> Send via WhatsApp
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Reference images? Attach them directly in WhatsApp after sending.
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-6">
            <div className="glass rounded-2xl p-7">
              <h2 className="font-display text-2xl tracking-wide text-foreground">Studio Details</h2>
              <address className="mt-4 flex items-start gap-3 text-sm not-italic leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                {SITE.address}
              </address>
              <a href={SITE.phoneHref} className="mt-3 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden /> {SITE.phone}
              </a>
              <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden /> {SITE.hours}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Landmark: Opposite Lokenath Temple · Street parking on Rajarhat Main Road.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src={SITE.mapsEmbed}
                title="Dev Tattoo & Art studio location on Google Maps"
                className="h-72 w-full grayscale invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
