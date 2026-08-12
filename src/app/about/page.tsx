import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion";
import { CtaBand, PageHero, SectionHeading, StatsStrip } from "@/components/blocks";
import { VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SecureClose Title Co. is a licensed title & escrow agency built on integrity, clarity, speed, and local knowledge. Meet the team behind smoother closings.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            The team behind a <span className="text-gold">smoother close</span>
          </>
        }
        sub="We are title agents, escrow officers, and closers who believe a great closing is invisible — everything just works, and nothing surprises you."
        image="/images/about.jpg"
        alt="Modern title company office lobby with teal accent wall and gold lighting"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Founded by closers, for closers"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
                SecureClose Title Co. started in a spare office above a title plant with three
                examiners and a filing cabinet. Our founders had spent years watching good deals
                fall apart for bad reasons — a missed lien, a late payoff, a wire gone to the wrong
                account. They built SecureClose to remove those failure modes entirely.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                Today we close thousands of transactions a year for families, investors, lenders,
                and brokerages. The filing cabinet is gone; the standard isn&apos;t: every file gets
                double-checked numbers, verified wire instructions, and a closer who answers the
                phone.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-[#d9a441]/20 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/feature-escrow-desk.jpg"
                  alt="Closing table flat lay with deed, house keys, and gold pen"
                  width={800}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading
          center
          eyebrow="Our values"
          title="What we hold ourselves to"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-7 text-center transition hover:-translate-y-1 hover:border-[#d9a441]/40">
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#0a2f2c] text-white shadow-lg shadow-primary/25">
                  <i className={v.icon} aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsStrip />

      <CtaBand
        title="Work with a team that sweats the details"
        sub="Whether it's your first home or your fiftieth closing, we treat your transaction like our reputation depends on it — because it does."
      />
    </>
  );
}
