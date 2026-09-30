import { HtmlAttributes } from "@/components/HtmlAttributes";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} h-full antialiased min-h-full flex flex-col bg-white text-charcoal safe-area-inset-bottom`}>
        <HtmlAttributes />
        {children}
      </body>
    </html>
  );
}