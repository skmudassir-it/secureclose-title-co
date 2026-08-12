import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/data";
import { Reveal, TestimonialsSection } from "@/components/motion";
import {
  CtaBand,
  FaqSection,
  FeaturesGrid,
  SectionHeading,
  ServicesGrid,
  StatsStrip,
} from "@/components/blocks";

export const metadata: Metadata = {
  title: "Title & Escrow Services You Can Close On",
  description:
    "Title searches, title insurance, escrow closings, and settlement support — delivered fast, transparent, and fraud-safe by SecureClose Title Co.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.legalName,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/images/og.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "212 Commerce Street, Suite 400",
    addressLocality: "Springfield",
    addressRegion: "IL",
    postalCode: "62704",
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 08:30-17:00",
  description:
    "Title searches, title insurance, escrow closings, and settlement support for residential and commercial real estate.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <Reveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
                <i className="fa-solid fa-file-shield text-[#a3772a]" aria-hidden /> Licensed · Insured · On Time
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
                Title &amp; escrow closings, <span className="text-gold">handled with certainty.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-600">
                SecureClose Title Co. protects every dollar and every deadline — from the first title
                search to the final recorded deed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full px-8")}
                >
                  Get a Free Quote <i className="fa-solid fa-arrow-right ml-2" aria-hidden />
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full border-primary/20 bg-white/60 px-8 backdrop-blur-xl transition hover:bg-white/80"
                  )}
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-[#d9a441]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/hero-home.jpg"
                  alt="Deed with gold seal and house keys on a polished closing table"
                  width={1280}
                  height={720}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="glass absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl px-5 py-4">
                <i className="fa-solid fa-circle-check text-2xl text-[#a3772a]" aria-hidden />
                <div>
                  <p className="text-sm font-bold text-slate-900">12,400+ closings</p>
                  <p className="text-xs text-slate-500">99.98% on-time settlement</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <FeaturesGrid />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our services"
            title="Every step of the close, covered"
            sub="Seven services that work together — or stand alone — to keep your transaction moving."
          />
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "rounded-full border-primary/20 bg-white/60 backdrop-blur-xl"
              )}
            >
              View all services <i className="fa-solid fa-arrow-right ml-2" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#d9a441]/20 to-primary/10 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-primary/20">
                <Image
                  src="/images/feature-escrow-desk.jpg"
                  alt="Overhead view of a closing table with deed, keys, and gold pen"
                  width={800}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="A closing team that treats your transaction like our own"
              sub="SecureClose Title Co. was founded on one belief: real estate closings should be boring — in the best way. No surprises, no delays, no fraud scares."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {[
                  "Licensed title agents and closers in every state we serve",
                  "A-rated underwriters and errors & omissions coverage on every file",
                  "Real humans answer the phone — and reply within one business day",
                  "County-level expertise that keeps recordings clean the first time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <i className="fa-solid fa-circle-check mt-1 text-[#a3772a]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className={cn(buttonVariants({ size: "lg" }), "btn-gradient mt-8 rounded-full px-8")}
              >
                More about us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <FaqSection />

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
