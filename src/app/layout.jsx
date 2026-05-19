import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "../index.css";
import "../App.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "SPMB SMKN 4 Surakarta 2026",
  description: "Informasi Penerimaan Peserta Didik Baru (PPDB) / SPMB Resmi SMKN 4 Surakarta Tahun Ajaran 2026/2027.",
  keywords: ["SPMB", "PPDB", "SMKN 4 Surakarta", "PPDB 2026", "Jawa Tengah", "Solo", "SMK Negeri 4 Surakarta"],
  authors: [{ name: "SMK Negeri 4 Surakarta" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#581c87",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={outfit.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
