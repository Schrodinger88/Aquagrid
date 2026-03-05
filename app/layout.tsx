import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const interBody = Inter({
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
      <body className={`${inter.variable} ${interBody.variable} antialiased relative min-h-screen text-deep-forest bg-[#FAF9F6] z-0`}>
        {/* Subtle Global Background Orbs — kelp palette */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-blue/8 rounded-full blur-[150px]" />
          <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-kelp-green/5 rounded-full blur-[180px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-royal-blue/6 rounded-full blur-[150px]" />
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
