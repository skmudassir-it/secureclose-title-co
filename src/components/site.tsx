"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICES, SITE } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 24
  );

  useEffect(() => {
    const onScroll = () =>
      setScrolled((prev) => {
        const next = window.scrollY > 24;
        return next === prev ? prev : next;
      });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/60 bg-white/60 px-5 py-3 shadow-lg shadow-primary/5 backdrop-blur-xl transition-all duration-300",
          scrolled && "border-white/80 bg-white/85 shadow-primary/10"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="SecureClose Title Co. home">
          <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#0a2f2c] text-white">
            <i className="fa-solid fa-file-shield" aria-hidden />
          </span>
          <span className="text-sm font-bold tracking-tight text-primary sm:text-base">
            SecureClose <span className="text-[#a3772a]">Title Co.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-primary/10 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "default" }),
              "btn-gradient rounded-full px-5 font-semibold"
            )}
          >
            Get a Quote
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            className="inline-flex size-10 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-white/90 backdrop-blur-2xl">
            <SheetTitle className="px-2 pt-2 font-display text-lg font-bold text-primary">
              SecureClose Title Co.
            </SheetTitle>
            <nav className="mt-6 flex flex-col gap-1 px-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-primary/10 hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
              <div className="my-3 h-px bg-primary/10" />
              <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Services
              </p>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-xl px-4 py-2 text-sm text-slate-600 transition hover:bg-primary/10 hover:text-primary"
                >
                  {s.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto px-2 pb-2">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "default" }), "btn-gradient w-full rounded-xl font-semibold")}
              >
                Get a Free Quote
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative px-4 pb-8 pt-4">
      <div className="glass mx-auto max-w-6xl rounded-[2rem] px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#0a2f2c] text-white">
                <i className="fa-solid fa-file-shield" aria-hidden />
              </span>
              <span className="font-display text-lg font-bold text-primary">
                SecureClose <span className="text-[#a3772a]">Title Co.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Title searches, title insurance, escrow closings, and settlement support that keep
              real estate transactions safe and on schedule.
            </p>
            <div className="mt-5 flex gap-3">
              {SITE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary transition hover:bg-primary hover:text-white"
                >
                  <i className={s.icon} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-slate-600 transition hover:text-primary">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Case Studies" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-600 transition hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot mt-0.5 text-[#a3772a]" aria-hidden />
                {SITE.address}
              </li>
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-2.5 transition hover:text-primary">
                  <i className="fa-solid fa-phone text-[#a3772a]" aria-hidden /> {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 transition hover:text-primary">
                  <i className="fa-solid fa-envelope text-[#a3772a]" aria-hidden /> {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-clock text-[#a3772a]" aria-hidden /> {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 text-xs text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p>Licensed title &amp; escrow agency · NMLS-independent · E&amp;O insured</p>
        </div>
      </div>
    </footer>
  );
}
