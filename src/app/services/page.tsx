import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CtaBand, PageHero, ServicesGrid } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Title search & examination, escrow & closing, title insurance, recording, 1031 exchange support, settlement statements, and wire fraud protection.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Title &amp; escrow services, <span className="text-gold">end to end</span>
          </>
        }
        sub="From the first title search to the final recorded deed — seven services that keep every transaction safe, transparent, and on schedule."
        image="/images/service-escrow.jpg"
        alt="Handshake across a closing table with a signed deed"
      >
        <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full px-8")}>
          Get a Quote
        </Link>
        <Link
          href="/pricing"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full border-primary/20 bg-white/60 px-8 backdrop-blur-xl"
          )}
        >
          See Pricing
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <ServicesGrid />
      </section>

      <CtaBand
        title="Not sure which service you need?"
        sub="Tell us about your transaction and our team will recommend exactly what it takes to close — nothing more."
      />
    </>
  );
}
