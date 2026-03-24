import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blu Horizon Agency — AI Systems That Replace Knowledge Workers",
    template: "%s | Blu Horizon Agency",
  },
  description:
    "We build AI systems that replace knowledge workers — content, lead generation, sales preparation, and continuous improvement. All in one integrated engine.",
  metadataBase: new URL("https://bluhorizonagency.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Blu Horizon Agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
