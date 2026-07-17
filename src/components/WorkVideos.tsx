import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import reel1 from "@/assets/reel-1.mp4.asset.json";
import reel2 from "@/assets/reel-2.mp4.asset.json";
import reel3 from "@/assets/reel-3.mp4.asset.json";
import reel4 from "@/assets/reel-4.mp4.asset.json";
import reel6 from "@/assets/reel-6.mp4.asset.json";

const VIDEOS = [reel1.url, reel2.url, reel3.url, reel4.url, reel6.url];

export function WorkVideos() {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = (i: number) => setIndex(((i % VIDEOS.length) + VIDEOS.length) % VIDEOS.length);

  // Play only the active video; advance on end
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [index]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      goTo(index + (touchDeltaX.current < 0 ? 1 : -1));
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section className="section-pad border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-sub text-sm uppercase tracking-[0.3em] text-primary">
              Studio Sessions
            </p>
            <h2 className="mt-3 font-display text-5xl text-foreground sm:text-7xl">
              Our Work in Motion
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="glass flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:border-primary"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="glass flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:border-primary"
              aria-label="Next video"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </Reveal>

        {isDesktop ? (
          /* DESKTOP: coverflow-style */
          <Reveal delay={0.1}>
            <div
              className="relative mt-14 flex h-[70vh] max-h-[640px] items-center justify-center overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {VIDEOS.map((src, i) => {
                let offset = i - index;
                // wrap for shortest path
                if (offset > VIDEOS.length / 2) offset -= VIDEOS.length;
                if (offset < -VIDEOS.length / 2) offset += VIDEOS.length;
                const abs = Math.abs(offset);
                const isActive = offset === 0;
                const hidden = abs > 2;
                const translate = offset * 180;
                const scale = isActive ? 1 : abs === 1 ? 0.72 : 0.55;
                const opacity = hidden ? 0 : isActive ? 1 : abs === 1 ? 0.55 : 0.25;
                const z = 10 - abs;

                return (
                  <button
                    key={src}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Play video ${i + 1}`}
                    className="absolute left-1/2 top-1/2 aspect-[9/16] h-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-border bg-black shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translate}px) scale(${scale})`,
                      opacity,
                      zIndex: z,
                      pointerEvents: hidden ? "none" : "auto",
                      filter: isActive ? "none" : "grayscale(0.4) brightness(0.7)",
                    }}
                    tabIndex={hidden ? -1 : 0}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      src={src}
                      className="h-full w-full object-cover"
                      playsInline
                      muted
                      preload="metadata"
                      onEnded={() => isActive && goTo(i + 1)}
                    />
                    {!isActive && (
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="h-10 w-10 text-white/80" aria-hidden />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>
        ) : (
          /* MOBILE: single-slide */
          <Reveal delay={0.1}>
            <div
              className="mt-10 overflow-hidden rounded-2xl border border-border"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {VIDEOS.map((src, i) => (
                  <div key={src} className="relative w-full shrink-0 basis-full bg-black">
                    <div className="mx-auto aspect-[9/16] max-h-[80vh] w-full max-w-[420px]">
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el;
                        }}
                        src={src}
                        className="h-full w-full object-cover"
                        playsInline
                        muted
                        preload="metadata"
                        onEnded={() => goTo(i + 1)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
