import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar, Footer } from "@/components/site";
import { Toaster } from "sonner";
import { SITE } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SecureClose Title Co. | Title & Escrow Services",
    template: "%s | SecureClose Title Co.",
  },
  description:
    "SecureClose Title Co. delivers title searches, title insurance, escrow closings, and settlement support that keep real estate transactions safe and on schedule.",
  keywords: [
    "title company",
    "escrow services",
    "title insurance",
    "closing services",
    "1031 exchange",
    "settlement statements",
    "wire fraud protection",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "SecureClose Title Co. | Title & Escrow Services",
    description:
      "Title searches, title insurance, escrow closings, and settlement support that keep real estate transactions safe and on schedule.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "SecureClose Title Co." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureClose Title Co. | Title & Escrow Services",
    description: "Title searches, title insurance, escrow closings, and settlement support.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#134e4a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 size-[34rem] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute top-1/3 -right-52 size-[36rem] rounded-full bg-[#d9a441]/15 blur-3xl" />
          <div className="absolute -bottom-24 left-1/4 size-[30rem] rounded-full bg-teal-200/25 blur-3xl" />
        </div>
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
