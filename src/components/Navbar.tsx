import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import logoAsset from "@/assets/logo.asset.jpg";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "glass" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-8">
        <Link to="/" className="flex min-w-0 shrink-0 items-center" aria-label="Dev Tattoo & Art home">
          <img
            src={logoAsset.url}
            alt="Dev Tattoo & Art logo"
            className="h-9 w-auto sm:h-11"
            width={1044}
            height={310}
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-sub text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
              activeProps={{ className: "active" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.whatsapp("Hi Dev Tattoo & Art! I'd like to book an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn rounded-full bg-primary px-6 py-2.5 font-sub text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </div>

        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border px-4 pb-6 pt-2 lg:hidden animate-fade-in">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-3 py-3 font-sub text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={SITE.whatsapp("Hi Dev Tattoo & Art! I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn mt-3 rounded-full bg-primary px-6 py-3 text-center font-sub font-semibold text-primary-foreground"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
