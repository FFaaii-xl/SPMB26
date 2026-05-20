import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../index.css";
import "../App.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "SPMB 2026 SMKN 4 Surakarta — Web Infografis & Kalkulator NA Resmi",
  description: "Aplikasi Web Infografis Resmi & Kalkulator Nilai Akhir (NA) PPDB / SPMB SMKN 4 Surakarta Tahun Pelajaran 2026/2027 berdasarkan SK Gubernur Jateng.",
  keywords: [
    "SPMB 2026",
    "PPDB 2026",
    "SMKN 4 Surakarta 2026",
    "PPDB SMKN 4 Surakarta 2026",
    "PPDB Jateng 2026",
    "Kalkulator Nilai Akhir",
    "Kalkulator NA PPDB",
    "Juknis PPDB Jateng 2026",
    "SMK Negeri 4 Surakarta",
    "Solo"
  ],
  authors: [{ name: "SMK Negeri 4 Surakarta" }],
  creator: "SMK Negeri 4 Surakarta",
  publisher: "SMK Negeri 4 Surakarta",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "SPMB 2026 SMKN 4 Surakarta — Web Infografis & Kalkulator NA",
    description: "Kalkulasi Nilai Akhir PPDB & Informasi Regulasi Resmi SPMB SMKN 4 Surakarta 2026/2027.",
    url: "https://spmb26.vercel.app",
    siteName: "SPMB SMKN 4 Surakarta 2026",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPMB 2026 SMKN 4 Surakarta — Web Infografis & Kalkulator NA",
    description: "Kalkulasi Nilai Akhir PPDB & Informasi Regulasi Resmi SPMB SMKN 4 Surakarta 2026/2027.",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
