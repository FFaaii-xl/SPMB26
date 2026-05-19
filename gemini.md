# Dokumentasi Proyek Web Infografis SPMB

## 1. Arsitektur Proyek
- **Tipe Proyek:** Single Page Application (SPA)
- **Framework Utama:** Next.js (versi terbaru - App Router) + React
- **Styling:** Vanilla CSS (Modern CSS dengan Custom Properties & Container Queries)
- **Animasi:** `framer-motion` (untuk scroll reveal, micro-interactions, dan layout animations)
- **Visualisasi Data:** `recharts` (untuk SVG Donut Chart interaktif)
- **Manajemen Data:** Struktur data statis terpusat di `src/data/spmb.js` (Memungkinkan migrasi mudah ke API di masa mendatang).

## 2. Milestone Proyek
- [x] Setup Initial Project dengan Vite + React
- [x] Install dependencies UI (Framer Motion, Recharts)
- [x] Konfigurasi Global CSS Theme (Warna Brand Ungu/Purple)
- [x] Implementasi Data Structure (SPMB Data Source)
- [x] Implementasi Hero Section (Header dengan Partikel Animasi)
- [x] Implementasi Card Komponen Seleksi (Rapor, TKA, Prestasi)
- [x] Implementasi Recharts Donut Chart (Pembagian Kuota)
- [x] Implementasi Grid Ketentuan Khusus (Aturan Tambahan)
- [x] Implementasi Banner Peringatan ("Gratis / Bebas Pungutan")
- [x] Implementasi Footer
- [x] Refactor UI: One-Page Kiosk Display Layout (Tanpa Scrollbar)
- [x] Integrasi Logo Resmi SMKN 4 Surakarta
- [x] Implementasi Dual Dashboard Switcher (Profil Sekolah & Informasi SPMB)
- [x] Refactor UI: Portrait Slideshow Navigator (Bebas Scrollbar di Perangkat Mobile)
- [x] Refactor UI: Desain Universal & Fleksibel (Natural Scroll & Stacked Layout di Mobile)
- [x] Fitur Premium: Panel Pengaturan Kiosk (Modal Glassmorphism, Toggle Animasi iOS, & Tombol Ikon Roda Gigi Putar Modern)

- [x] Fitur Premium: Animasi Latar Belakang & Footer Dinamis (Efek bgGradient & linkPulse Emas Berdenyut)
- [x] Fitur Premium: Rincian Jalur Seleksi Komprehensif (SK Gubernur Jateng 2026)
- [x] Perbaikan Kontras & Keterbacaan Visual (Desain Khusus Latar Terang & Gelap)
- [x] Ekstraksi & Analisis Otomatis Dokumen PDF Juknis 2026 (Python pypdf)
- [x] Integrasi Regulasi Resmi SK Gubernur Jateng No. 100.3.3.1/117 Tahun 2026 (DTSEN Desil 1-4, Tie-Breaker, Syarat ATS, Bebas Pungutan)
- [x] Publikasi Repositori GitHub Resmi (https://github.com/FFaaii-xl/SPMB26)
- [x] Ekstraksi & Analisis Komprehensif Dokumen MateriSPMB.pptx (Python openxml zip/xml parser)
- [x] Fitur Premium: Tab Utama Khusus Terintegrasi untuk Timeline & Jadwal PPDB 2026 (3-Kolom Kiosk & Mobile Slideshow)
- [x] Fitur Premium: Komponen Timeline Kronologis Jadwal Seleksi 2026
- [x] Fitur Premium: Visualisasi Rumus Nilai Akhir (NA) PPDB Resmi Terintegrasi (50% NR + 50% NTKA + NK + NO)
- [x] Integrasi Nomor Kontak Resmi SPMB 2026 (WhatsApp Klik Langsung) di Footer Kiosk & Mobile
- [x] Refactor UI: Tata Letak Bersisian (Row Layout) Kiri-Kanan untuk Judul & Donut Chart Kuota di Layar Lebar
- [x] Fitur Premium: Panel Perbandingan Perbedaan Regulasi Resmi SPMB (2025 vs 2026) Berbasis Modal Kaca Interaktif
- [x] Fitur Premium: Kalkulator Bobot Nilai Piagam Prestasi Interaktif & Panduan Jenis Kejuaraan Resmi (Berjenjang & Tidak Berjenjang)
- [x] Fitur Premium: Alur Urutan Pendaftaran Sekuensial Terpadu 1-6 (Daring + Luring)
- [x] Fitur Premium: Integrasi Rincian Kuota Jurusan (Rombel, Kapasitas, & Total Kuota)
- [x] Perbaikan Kontras & Keterbacaan Kolom Kiri Kiosk (Skala Proporsional Font & Keterbacaan Tinggi)
- [x] Fitur Premium: Sistem Auto Slideshow Tab Kiosk Terintegrasi (Rotasi Otomatis Menu Sekolah ➔ SPMB ➔ Jadwal dengan Detik Waktu Khusus yang Dapat Diatur, Default Mati)
- [x] Fitur Premium: Simulasi Kalkulator Nilai Akhir (NA) PPDB Resmi 2026 Terintegrasi (Rapor 50% + TKA 50% + Piagam Kejuaraan + Kepengurusan Organisasi) dengan Visual Bar Kontribusi & Micro-interactions Copy-Transfer
- [x] Fitur Premium: Timeline Interaktif Clickable (Pengunjung Dapat Mengetuk Setiap Garis Waktu SPMB untuk Menampilkan Rincian Sub-Langkah Juknis Resmi dengan Efek Hover & Animasi Glassmorphic)
- [x] Fitur Premium: Redesign Komponen Kiosk & Dashboard (Accent borders kiri tebal berwarna pada seleksi card, floating icon circles, rule cards dengan alternating rounded corners, circular hero badges, stadium shapes untuk alur pendaftaran, dan asimetris warning banner)
- [x] Perbaikan UI & UX: Optimisasi Tab "Info SMKN 4 Surakarta" (Desain asimetris berseling, neon-glow hover, pulsing history timeline nodes, dan business centre capsules)
- [x] Perbaikan UI & UX: Restrukturisasi Footer Portrait Mobile menjadi Grid 2-Kolom Seimbang (Bebas area kosong & hemat ruang)
- [x] Fitur Premium: Implementasi Global Responsive Font Scaling (`18.5px` di Kiosk / `17px` di Mobile) untuk keterbacaan tingkat tinggi
- [x] Perbaikan UI & UX: Kompresi Spasi, Padding, dan Gap Komponen Kiosk (Menghilangkan seluruh scrollbar dan masalah legend Nilai Akhir/NA yang terpotong pada resolusi tetap)
- [x] Perbaikan UI & UX: Optimisasi Ketebalan Tinggi Footer (Mengurangi padding vertikal dan tinggi logo secara global agar layout semakin ramping dan proporsional)
- [x] Publikasi Repositori: Rekonsiliasi & Penggabungan (*Safe Merge*) Cabang Integrasi Vercel (PR #1 & PR #2) dengan Strategi 'Ours' guna menjaga konsistensi desain premium
- [x] Migrasi Arsitektur: Migrasi penuh dari Vite + React ke Next.js (App Router) dengan optimalisasi halaman statis dan Client Components
- [x] Optimisasi Performa: Pemisahan kode dinamis (Dynamic Import) pada page.jsx dan Loading UI Kustom untuk mencegah masalah hidrasi
- [x] Integrasi Fitur: Pemasangan Vercel Analytics & Vercel Speed Insights (`@vercel/analytics/next` & `@vercel/speed-insights/next`) ke dalam RootLayout untuk pelacakan trafik pengunjung & diagnostik metrik Core Web Vitals




## 3. Catatan Teknis / Konfigurasi
- **Struktur Data:** Data konfigurasi teks, warna, persentase kuota, dan aturan dipisah di `src/data/spmb.js`. Ini bertujuan agar administrator tidak perlu membuka *source code component* jika ada perubahan kecil.
- **Responsivitas:** Menggunakan CSS Grid, Flexbox, dan Clamp() function agar layout adaptif dari Mobile hingga TV Display.
- **Warna Identitas:**
  - `brand-900`: `#581c87` (Primary Dark Purple)
  - `brand-500`: `#a855f7` (Base Purple)
  - `accent-gold`: `#f59e0b` (Untuk Highlight Angka dan Chart Kuota)

## 4. Rencana ke Depan (Opsional)
- Implementasi API Fetching jika data kuota/seleksi ingin dibuat dinamis dari backend (misalnya Laravel/Citroroso).
