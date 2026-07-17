import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO, CATEGORIES, type PortfolioItem } from "@/lib/portfolio";

export function PortfolioGallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = PORTFOLIO.filter((i) => filter === "All" || i.category === filter).slice(
    0,
    limit ?? PORTFOLIO.length,
  );

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: number) => {
      setLightbox((cur) => (cur === null ? null : (cur + dir + items.length) % items.length));
    },
    [items.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  return (
    <div>
      {!limit && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 font-sub text-sm transition-all ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-[var(--glow)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {items.map((item, idx) => (
          <GalleryCard key={item.title} item={item} onClick={() => setLightbox(idx)} />
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && items[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={items[lightbox].title}
          >
            <button
              className="absolute right-5 top-5 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
              onClick={close}
              aria-label="Close lightbox"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[lightbox].src}
                alt={items[lightbox].alt}
                className="max-h-[80vh] w-auto rounded-xl object-contain"
              />
              <figcaption className="mt-4 text-center font-sub text-sm text-muted-foreground">
                {items[lightbox].title}
              </figcaption>
            </motion.figure>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryCard({ item, onClick }: { item: PortfolioItem; onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group relative block w-full break-inside-avoid overflow-hidden rounded-xl border border-border bg-card text-left"
      aria-label={`View ${item.title}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        width={item.width}
        height={item.height}
        className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="font-sub text-sm font-semibold text-foreground">{item.title}</p>
        <p className="text-xs uppercase tracking-widest text-primary">{item.category}</p>
      </div>
    </motion.button>
  );
}
