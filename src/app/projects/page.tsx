import type { Metadata } from "next";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { ProjectsSection } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/blocks";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real closings from SecureClose Title Co.: a commercial portfolio refinance, a first-time home purchase with a hidden easement, and a 1031 exchange closed in one day.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Recent closings, <span className="text-gold">real results</span>
          </>
        }
        sub="Every transaction has its own story. Here are three we're proud to tell — and the problems we solved along the way."
        image="/images/project-3.jpg"
        alt="Modern townhouse development at dusk with warm glowing windows"
      />

      <ProjectsSection />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="glass flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-primary/25">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#a3772a]">{p.tag}</p>
                  <h2 className="mt-2 font-display text-lg font-bold text-slate-900">{p.title}</h2>
                  <p className="mt-3 text-sm text-slate-600">
                    <span className="font-semibold text-primary">The challenge: </span>
                    {p.challenge}
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    <span className="font-semibold text-primary">The result: </span>
                    {p.result}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    <i className="fa-solid fa-circle-check" aria-hidden /> {p.stat}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Your transaction could be our next success story"
        sub="Bring us the hard closings — the tangled titles, the tight deadlines, the exchanges that need to land on the same day."
      />
    </>
  );
}
