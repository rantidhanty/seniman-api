import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seniman Api — Jasa Las & Pembuatan Pagar Profesional",
  description:
    "Seniman Api menyediakan jasa las profesional, pembuatan pagar, railing tangga, kanopi, teralis, dan berbagai pekerjaan pengelasan berkualitas tinggi di Jabodetabek.",
  keywords:
    "jasa las, pagar besi, railing tangga, kanopi, teralis, las listrik, bengkel las, Jabodetabek",
  openGraph: {
    title: "Seniman Api — Jasa Las & Pembuatan Pagar Profesional",
    description:
      "Solusi pengelasan profesional untuk hunian, komersial, dan industri. Pagar, railing, kanopi, teralis, dan konstruksi baja custom.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.className} h-full scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
