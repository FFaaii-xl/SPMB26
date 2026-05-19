import "../index.css";
import "../App.css";

export const metadata = {
  title: "SPMB SMKN 4 Surakarta 2026",
  description: "Informasi Penerimaan Peserta Didik Baru (PPDB) / SPMB Resmi SMKN 4 Surakarta Tahun Ajaran 2026/2027.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
