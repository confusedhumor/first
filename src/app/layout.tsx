import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import FloatingKeysBackground from "@/components/FloatingKeysBackground";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Keysingh - Expert Key Duplication & Locksmith Services",
  description: "Professional key duplication, lock repair, and locksmith services. Trusted and reliable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} antialiased font-sans bg-warm-white text-charcoal overflow-x-hidden`}
      >
        <FloatingKeysBackground />
        {children}
      </body>
    </html>
  );
}
