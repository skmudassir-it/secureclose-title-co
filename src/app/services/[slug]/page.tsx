import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICES, getService } from "@/lib/data";
import { Reveal } from "@/components/motion";
import { CtaBand } from "@/components/blocks";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: service.name,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.name,
      description: service.short,
      images: [service.image],
    },
  };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              <i className={`${service.icon} text-[#a3772a]`} aria-hidden /> Our services
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">{service.short}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full px-8")}
              >
                Get a Quote for This Service
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-primary/20 bg-white/60 px-8 backdrop-blur-xl"
                )}
              >
                All Services
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-[#d9a441]/20 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-primary/20">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={1024}
                  height={576}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-slate-900">How it works</h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {service.process.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="glass flex gap-5 rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-primary/25">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#0a2f2c] font-display text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="mt-10">
                {service.description.map((p, i) => (
                  <p key={i} className="mt-4 text-[15px] leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="glass sticky top-28 rounded-2xl p-7">
                <h3 className="font-display text-xl font-bold text-slate-900">What&apos;s included</h3>
                <ul className="mt-5 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <i className="fa-solid fa-circle-check mt-0.5 text-[#a3772a]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "btn-gradient mt-7 w-full rounded-xl")}
                >
                  Get a Quote
                </Link>
                <p className="mt-3 text-center text-xs text-slate-500">
                  Quotes are free and obligations-free — reply within one business day.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-slate-900">Related services</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.08}>
              <Link
                href={`/services/${r.slug}`}
                className="glass group flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/25"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <i className={r.icon} aria-hidden />
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{r.name}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{r.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <i className="fa-solid fa-arrow-right transition group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
