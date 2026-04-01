import type { Metadata } from "next";
import { Quicksand, Nunito_Sans } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashtanga Mendoza Templo — Shala de Ashtanga Yoga",
  description:
    "Primera Shala de Ashtanga Yoga en Mendoza. Clases guiadas, Mysore, iniciación, tantra y arteterapia. Un espacio de presencia, respiración y transformación.",
  keywords: [
    "ashtanga yoga",
    "yoga mendoza",
    "shala mendoza",
    "mysore mendoza",
    "clases yoga mendoza",
    "tantra mendoza",
    "arteterapia mendoza",
  ],
  openGraph: {
    title: "Ashtanga Mendoza Templo",
    description: "Practicar es volver a casa. Primera Shala de Ashtanga Yoga en Mendoza.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${quicksand.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
