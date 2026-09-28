import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/app/globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
  const direction = locale === "ar" ? "rtl" : "ltr";
  const lang = locale === "ar" ? "ar" : locale === "en" ? "en" : "fr";

  return (
    <html lang={lang} dir={direction} className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-charcoal safe-area-inset-bottom">
        <LocaleProvider locale={locale as "fr" | "ar" | "en"}>
          <Navbar locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <WhatsAppFloat locale={locale} />
        </LocaleProvider>
      </body>
    </html>
  );
}
