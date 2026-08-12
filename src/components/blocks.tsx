import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FAQS, FEATURES, SERVICES, SITE, STATS } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={cn(center && "text-center")}>
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
          <i className="fa-solid fa-file-shield text-[#a3772a]" /> {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
        {sub ? <p className="mt-3 max-w-2xl text-slate-600">{sub}</p> : null}
      </div>
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  image,
  alt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  image: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <i className="fa-solid fa-file-shield text-[#a3772a]" /> {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">{sub}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-[#d9a441]/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-primary/20">
              <Image
                src={image}
                alt={alt}
                width={1024}
                height={576}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:border-[#d9a441]/40">
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 3) * 0.08}>
          <Link
            href={`/services/${s.slug}`}
            className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <i className={s.icon} aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Learn more <i className="fa-solid fa-arrow-right transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        center
        eyebrow="Why SecureClose"
        title="The title company agents recommend"
        sub="Six reasons buyers, sellers, lenders, and real estate agents trust us with their closings."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.08}>
            <div className="glass group h-full rounded-2xl p-7 transition hover:-translate-y-1 hover:border-[#d9a441]/40">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#0a2f2c] text-white shadow-lg shadow-primary/25">
                <i className={f.icon} aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <SectionHeading
        center
        eyebrow="FAQ"
        title="Common questions, straight answers"
        sub="Everything buyers and sellers ask us most — in plain English."
      />
      <Accordion className="mt-10 space-y-4" defaultValue={[FAQS[0].id]}>
        {FAQS.map((f) => (
          <AccordionItem key={f.id} value={f.id} className="glass rounded-2xl px-6">
            <AccordionTrigger className="py-5 text-base font-semibold text-slate-900 hover:no-underline hover:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function CtaBand({
  title = "Ready to close with confidence?",
  sub = "Get a free, no-obligation quote today — and find out why agents and lenders across the region trust SecureClose.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b3a36] via-[#134e4a] to-[#0e3f3b] px-6 py-14 text-center shadow-2xl shadow-primary/30 md:px-12">
          <div className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-[#d9a441]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 size-80 rounded-full bg-teal-300/10 blur-3xl" />
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-teal-50/85">{sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-gradient-to-r from-[#d9a441] to-[#b8860b] px-8 font-bold text-[#241a05] shadow-lg shadow-black/20 transition hover:from-[#e2b257] hover:to-[#c49214]"
              )}
            >
              Get a Free Quote
            </Link>
            <Link
              href={SITE.phoneHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-md transition hover:bg-white/20"
              )}
            >
              <i className="fa-solid fa-phone mr-2" /> {SITE.phone}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
