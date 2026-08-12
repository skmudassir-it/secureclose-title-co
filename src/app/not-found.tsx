import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-2xl flex-col items-center justify-center px-4 pt-28 pb-16 text-center">
      <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
        <i className="fa-solid fa-compass text-[#a3772a]" aria-hidden /> Page not found
      </span>
      <p className="mt-6 font-display text-7xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-slate-900">
        This page didn&apos;t make it to closing.
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you&apos;re looking for may have moved, or the link is no longer valid. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full px-8")}>
          Back to Home
        </Link>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full border-primary/20 bg-white/60 px-8 backdrop-blur-xl"
          )}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
