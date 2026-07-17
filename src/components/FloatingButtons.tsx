import { Phone, Instagram, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      <a
        href={SITE.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        className="glass flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-110"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href={SITE.phoneHref}
        aria-label="Call Dev Tattoo & Art"
        className="glass flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={SITE.whatsapp("Hi Dev Tattoo & Art! I'd like to book an appointment.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className="glow-btn flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
