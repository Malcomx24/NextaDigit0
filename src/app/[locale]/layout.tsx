import type { Metadata } from "next";
import "@/app/globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getDictionary } from "@/lib/translations";
import { isValidLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: "Agence de Digitalisation des Entreprises a Agadir | NexaTech",
    template: "%s | NexaTech",
  },
  description: "NexaTech accompagne les entreprises marocaines dans leur digitalisation : sites web, logiciels de gestion, automatisation, CRM et solutions sur mesure.",
  metadataBase: new URL("https://nexatech.ma"),
  alternates: {
    languages: {
      fr: "/fr",
      ar: "/ar",
      en: "/en",
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NexaTech",
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://nexatech.ma",
    siteName: "NexaTech",
    title: "Agence de Digitalisation des Entreprises a Agadir | NexaTech",
    description: "NexaTech accompagne les entreprises marocaines dans leur digitalisation : sites web, logiciels de gestion, automatisation, CRM et solutions sur mesure.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexaTech - Digitalisation des entreprises au Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaTech - Digitalisation des entreprises au Maroc",
    description: "Nous construisons les outils numeriques qui simplifient vos operations.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const validLocale = isValidLocale(locale) ? locale : "fr";
  
  // Load dictionary on the server for initial render
  const dict = await getDictionary(validLocale);

  return (
    <LocaleProvider locale={validLocale} initialDict={dict}>
      <Navbar locale={validLocale} />
      <main className="flex-1">{children}</main>
      <Footer locale={validLocale} />
      <WhatsAppFloat locale={validLocale} />
    </LocaleProvider>
  );
}
