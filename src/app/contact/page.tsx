import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms";
import { CtaBand, PageHero, SectionHeading } from "@/components/blocks";
import { Reveal } from "@/components/motion";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free title & escrow quote from SecureClose Title Co. Call (555) 210-4488, email closings@secureclosetitle.co, or request a quote online — we reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s get your deal <span className="text-gold">to the table</span>
          </>
        }
        sub="Questions, quotes, or a closing you need to schedule — the fastest way to reach a real closer is below."
        image="/images/cta-contact.jpg"
        alt="Bright modern closing room with long wooden table and teal chairs"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "fa-solid fa-phone", title: "Call us", line: SITE.phone, href: SITE.phoneHref, note: "Mon–Fri, 8:30am–5:00pm" },
            { icon: "fa-solid fa-envelope", title: "Email us", line: SITE.email, href: `mailto:${SITE.email}`, note: "Replies within one business day" },
            { icon: "fa-solid fa-location-dot", title: "Visit us", line: SITE.address, href: undefined, note: "Free client parking in the garage" },
            { icon: "fa-solid fa-clock", title: "Hours", line: "8:30am – 5:00pm", href: undefined, note: "Closings by appointment" },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:border-[#d9a441]/40">
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#0a2f2c] text-white shadow-lg shadow-primary/25">
                  <i className={c.icon} aria-hidden />
                </span>
                <h2 className="mt-4 font-display text-lg font-bold text-slate-900">{c.title}</h2>
                {c.href ? (
                  <a href={c.href} className="mt-1 block text-sm font-semibold text-primary hover:underline">
                    {c.line}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-semibold text-slate-800">{c.line}</p>
                )}
                <p className="mt-1 text-xs text-slate-500">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <SectionHeading
          center
          eyebrow="Request a quote"
          title="Get your free, exact quote"
          sub="Fill out the form and a closing specialist — not a bot — will get back to you within one business day."
        />
        <Reveal delay={0.1}>
          <div className="mt-10">
            <QuoteForm />
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
