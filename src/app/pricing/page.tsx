import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms";
import { CtaBand, PageHero, SectionHeading } from "@/components/blocks";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent title & escrow pricing from SecureClose Title Co. — title search from $350, escrow & closing from $750, full coverage from $1,450. Get an exact quote in one business day.",
  alternates: { canonical: "/pricing" },
};

const TIERS = [
  {
    name: "Essential",
    price: "from $350",
    tag: "Per transaction",
    features: [
      "Title search & examination",
      "Clear ownership report",
      "Wire fraud briefing",
      "Document notarization",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "from $750",
    tag: "Per closing",
    features: [
      "Everything in Essential",
      "Full escrow & closing services",
      "Closing Disclosure preparation",
      "Electronic recording",
      "Priority 48-hour turnaround",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "from $1,450",
    tag: "Per transaction",
    features: [
      "Everything in Professional",
      "Owner's title insurance policy",
      "1031 exchange coordination",
      "Dedicated closing officer",
      "Same-day recording",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Transparent fees, <span className="text-gold">quoted up front</span>
          </>
        }
        sub="No surprise charges at the table. Pick the coverage that fits your transaction — every quote is exact, itemized, and obligations-free."
        image="/images/pricing.jpg"
        alt="Modern glass office consultation space with teal chairs and warm daylight"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={cn(
                  "glass relative flex h-full flex-col rounded-2xl p-8 transition hover:-translate-y-1",
                  t.featured
                    ? "border-[#d9a441]/60 shadow-xl shadow-[#d9a441]/10 ring-1 ring-[#d9a441]/40"
                    : "hover:border-primary/25"
                )}
              >
                {t.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#d9a441] to-[#b8860b] px-4 py-1 text-xs font-bold text-[#241a05] shadow-md">
                    Most popular
                  </span>
                ) : null}
                <h2 className="font-display text-xl font-bold text-slate-900">{t.name}</h2>
                <p className="mt-3 font-display text-4xl font-bold text-primary">{t.price}</p>
                <p className="mt-1 text-sm text-slate-500">{t.tag}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                      <i className="fa-solid fa-circle-check mt-0.5 text-[#a3772a]" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition",
                    t.featured
                      ? "bg-gradient-to-r from-[#d9a441] to-[#b8860b] text-[#241a05] shadow-lg shadow-black/10 hover:from-[#e2b257] hover:to-[#c49214]"
                      : "btn-gradient"
                  )}
                >
                  Request Exact Quote
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
            Fees vary by county, loan amount, policy coverage, and title complexity — the ranges
            above are typical starting points. Your written quote is exact, itemized, and valid for
            60 days.
          </p>
        </Reveal>
      </section>

      <section id="quote" className="mx-auto max-w-4xl scroll-mt-28 px-4 py-14">
        <SectionHeading
          center
          eyebrow="Get an exact quote"
          title="Tell us about your transaction"
          sub="Answer four quick questions and our closing team will send an itemized quote within one business day."
        />
        <Reveal delay={0.1}>
          <div className="mt-10">
            <QuoteForm />
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Prefer to talk it through?"
        sub="Call us and a real closer — not a call center — will walk through your numbers with you."
      />
    </>
  );
}
