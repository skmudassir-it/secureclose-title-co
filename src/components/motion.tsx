"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function EmblaSlider<T>({
  items,
  renderSlide,
}: {
  items: T[];
  renderSlide: (item: T) => ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item, i) => (
            <div key={i} className="embla__slide px-2 py-1">
              {renderSlide(item)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-white/70 text-primary backdrop-blur-md transition hover:bg-primary hover:text-white"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "size-2.5 rounded-full transition",
                i === selected ? "bg-primary" : "bg-primary/25 hover:bg-primary/50"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-white/70 text-primary backdrop-blur-md transition hover:bg-primary hover:text-white"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <i className="fa-solid fa-comment-dots text-[#a3772a]" /> Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            What our clients say
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Buyers, sellers, agents, and investors who closed with SecureClose.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10">
          <EmblaSlider
            items={TESTIMONIALS}
            renderSlide={(t) => (
              <figure className="glass flex h-full flex-col rounded-2xl p-7 transition hover:-translate-y-1 hover:border-primary/25">
                <div className="flex gap-1 text-[#d9a441]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#0a2f2c] font-display text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-slate-900">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            )}
          />
        </div>
      </Reveal>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <i className="fa-solid fa-folder-open text-[#a3772a]" /> Case studies
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Recent closings, real results
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            A few transactions we are proud to have moved across the finish line.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10">
          <EmblaSlider
            items={PROJECTS}
            renderSlide={(p) => (
              <article className="glass overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-primary/25">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#a3772a]">{p.tag}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    <i className="fa-solid fa-circle-check" /> {p.stat}
                  </p>
                </div>
              </article>
            )}
          />
        </div>
      </Reveal>
    </section>
  );
}
