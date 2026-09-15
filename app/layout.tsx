import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { StyledComponentsRegistry } from "@/components/StyledComponentsRegistry";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cosmica — Explore the Universe",
  description:
    "A window into deep space, built on NASA's Astronomy Picture of the Day.",
  metadataBase: new URL("https://cosmica.example.com"),
  openGraph: {
    title: "Cosmica — Explore the Universe",
    description:
      "A window into deep space, built on NASA's Astronomy Picture of the Day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrument.variable} ${inter.variable}`}>
      <body className="bg-void text-ink antialiased overflow-x-hidden">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
