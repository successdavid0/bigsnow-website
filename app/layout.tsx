import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/Bigsnow.PNG",
  },
  title: "Bigsnow | Web3 Full-Stack Developer & DApp Builder",
  description:
    "I build, grow, and connect Web3 ecosystems. Full-stack DApp developer, Web3 marketer, advisor, and collaboration manager.",
  keywords: [
    "Web3",
    "DApp",
    "Solidity",
    "Smart Contracts",
    "Blockchain",
    "Full-Stack Developer",
    "DeFi",
    "NFT",
  ],
  openGraph: {
    title: "Bigsnow | Web3 Full-Stack Developer & DApp Builder",
    description:
      "I build, grow, and connect Web3 ecosystems. Full-stack DApp developer, Web3 marketer, advisor, and collaboration manager.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bigsnow | Web3 Full-Stack Developer & DApp Builder",
    description:
      "I build, grow, and connect Web3 ecosystems. Full-stack DApp developer, Web3 marketer, advisor, and collaboration manager.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bigsnow",
              jobTitle: "Web3 Full-Stack Developer",
              description:
                "Full-stack DApp developer, Web3 marketer, advisor, and collaboration manager.",
              url: "https://bigsnow.dev",
              sameAs: [
                "https://github.com/bigsnow",
                "https://twitter.com/bigsnow",
                "https://linkedin.com/in/bigsnow",
              ],
              knowsAbout: [
                "Solidity",
                "Smart Contracts",
                "DeFi",
                "NFTs",
                "Web3",
                "Blockchain",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased`}
      >
        <div className="grid-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
