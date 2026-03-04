import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aqua Grid — Green Solutions for Blue Oceans",
  description:
    "Aqua Grid deploys modular kelp farming systems that combat ocean acidification, restore marine ecosystems, and generate sustainable revenue for coastal communities.",
  keywords: [
    "kelp farming",
    "ocean acidification",
    "marine restoration",
    "sustainable aquaculture",
    "carbon capture",
    "coastal communities",
    "blue economy",
  ],
  openGraph: {
    title: "Aqua Grid — Green Solutions for Blue Oceans",
    description:
      "Modular kelp farming solutions that restore marine ecosystems while creating sustainable revenue for coastal communities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${nunito.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
