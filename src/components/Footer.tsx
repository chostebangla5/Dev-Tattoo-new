import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import logoAsset from "@/assets/logo.asset.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src={logoAsset.url}
              alt="Dev Tattoo & Art logo"
              className="h-12 w-auto"
              loading="lazy"
              width={874}
              height={437}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Kolkata's highest-rated premium tattoo &amp; piercing studio. Custom art,
              international hygiene, unforgettable ink.
            </p>
            <p className="mt-4 font-sub text-sm text-foreground">
              ★★★★★ {SITE.rating} · {SITE.reviews} Google Reviews
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/portfolio" className="transition-colors hover:text-primary">Portfolio</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary">Services &amp; Pricing</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">About Debasis Adak</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary">Book a Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl tracking-wider text-foreground">Visit Us</h3>
            <address className="mt-4 flex items-start gap-2 text-sm not-italic leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              {SITE.address}
            </address>
            <a href={SITE.phoneHref} className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <Phone className="h-4 w-4 text-primary" aria-hidden /> {SITE.phone}
            </a>
            <div className="mt-5 flex gap-3">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="glass rounded-full p-2.5 transition-colors hover:border-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="glass rounded-full p-2.5 transition-colors hover:border-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="glass rounded-full p-2.5 transition-colors hover:border-primary">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Tattoo &amp; Art. All rights reserved.</p>
          <p>Nanda Bhavan, Rajarhat Main Road, New Town, Kolkata</p>
        </div>
      </div>
    </footer>
  );
}
