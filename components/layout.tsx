import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/data/site";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | Hybrid Seed Genetics, India`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "hybrid seeds India",
    "agri genetics company",
    "seed company India",
    "hybrid cotton seeds",
    "hybrid maize seeds",
    "mustard seeds India",
    "Mango Agri Genetics",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} | Hybrid Seed Genetics, India`,
    description: site.description,
    images: [{ url: "/logo.svg", width: 200, height: 200, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} | Hybrid Seed Genetics, India`,
    description: site.description,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest-900 focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
