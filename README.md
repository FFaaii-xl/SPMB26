# 🎓 SPMB 2026 Web Infografis — SMKN 4 Surakarta

Aplikasi **Single Page Application (SPA) Web Infografis SPMB 2026** yang interaktif dan premium untuk mempermudah calon peserta didik baru dalam memahami jalur seleksi, kuota, persyaratan, dan regulasi resmi Penerimaan Peserta Didik Baru (PPDB) / SPMB SMKN 4 Surakarta berdasarkan SK Gubernur Jateng No. 100.3.3.1/117 Tahun 2026.

Aplikasi ini didesain khusus untuk tampilan **Kiosk Display (Mading Digital/TV Sekolah)** maupun **Perangkat Mobile** secara responsif tanpa scrollbar yang mengganggu, lengkap dengan sistem Cetak Spanduk MMT otomatis.

---

## ✨ Fitur Unggulan

*   **⚡ Dual Dashboard Switcher:** Beralih dengan mudah antara Profil Sekolah dan Dashboard Informasi SPMB.
*   **📊 Donut Chart Kuota Interaktif:** Visualisasi data kuota jalur seleksi yang dinamis menggunakan *Recharts*.
*   **⚙️ Panel Pengaturan Kiosk Premium:** Modal Glassmorphism dengan toggle animasi iOS, integrasi mode cetak spanduk MMT, dan tombol gigi putar modern.
*   **🖨️ Sistem Cetak MMT Otomatis:** Format spanduk MMT landscape khusus yang siap cetak, bersih dari tombol navigasi.
*   **📱 Portrait Slideshow Navigator:** Navigasi slideshow khusus perangkat mobile agar bebas dari scrollbar horizontal/vertikal.
*   **⚖️ Integrasi Regulasi Resmi SK Gubernur Jateng 2026:** Validasi otomatis syarat DTSEN Desil 1-4, Tie-Breaker nilai, syarat ATS (Anak Tidak Sekolah), serta jaminan bebas pungutan.
*   **📅 Timeline Interaktif Juknis Resmi:** Timeline pendaftaran sekuensial yang dapat diklik (clickable) untuk memunculkan modal glassmorphism berisi panduan teknis resmi langkah-demi-langkah, termasuk aturan daftar ulang dan cadangan.
*   **🧮 Kalkulator Simulasi Nilai Akhir (NA):** Simulasi interaktif kalkulator NA PPDB dengan slider visual untuk meramalkan total skor berdasarkan Rapor, Tes Akademik, Prestasi, dan Organisasi.
*   **🏆 Kalkulator Bobot Piagam Prestasi:** Panduan jenis kejuaraan resmi untuk mengetahui bobot skor (NK) berjenjang dan tidak berjenjang.
*   **✨ Tata Letak Fluid Responsif:** Komponen left-column menggunakan fluid layout (kombinasi `vw`, `vh`, dan `clamp()`) sehingga secara otomatis beralih dari 2-kolom (layar lebar Kiosk) ke 1-kolom bersisian (layar Mobile) tanpa terpotong (clipping).
*   **🌐 Integrasi Portal Daring:** Tombol pintas berdesain interaktif menuju situs portal resmi PPDB Provinsi Jawa Tengah di header hero section.
---

## 🛠️ Persyaratan Sistem (Requirements)

Sebelum menjalankan atau membangun proyek ini, pastikan sistem Anda memenuhi persyaratan berikut:

1.  **Node.js**: Versi **18.x** atau **20.x** ke atas (sangat disarankan versi LTS).
2.  **Package Manager**: `npm` (bawaan Node.js) atau `yarn` / `pnpm`.
3.  **Modern Browser**: Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari dengan dukungan modern CSS (CSS Grid, Variables, Container Queries).

---

## 🚀 Panduan Instalasi & Penggunaan

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal di komputer Anda.

### 1. Klon Repositori
Klon repositori resmi ini ke direktori lokal Anda:
```bash
git clone https://github.com/FFaaii-xl/SPMB26.git
cd SPMB26
```

### 2. Instalasi Dependensi
Instal semua pustaka (dependencies) pihak ketiga yang dibutuhkan oleh proyek:
```bash
npm install
```

### 3. Jalankan Mode Pengembangan (Local Dev Server)
Jalankan aplikasi di server lokal untuk pengujian dan pengembangan real-time:
```bash
npm run dev
```
Setelah berhasil dijalankan, buka peramban (browser) dan akses URL lokal yang tertera di terminal (biasanya `http://localhost:5173`).

### 4. Bangun Aplikasi untuk Produksi (Production Build)
Untuk melakukan kompilasi proyek menjadi file statis siap sebar (deployment):
```bash
npm run build
```
Hasil kompilasi akan tersimpan di dalam folder `/dist` yang siap untuk diunggah ke hosting (seperti Vercel, Netlify, cPanel, dll).

---

## 📁 Struktur Data Statis

Semua konfigurasi teks, warna, persentase kuota, dan aturan jalur seleksi dipusatkan di file data statis berikut:
```
src/data/spmb.js
```
Jika ada perubahan aturan kuota seleksi dari panitia, administrator hanya perlu memperbarui file ini tanpa perlu memodifikasi kode logika komponen React.

---

## ⚖️ Lisensi & Hak Cipta

© 2026 SMKN 4 Surakarta. Dikembangkan untuk transparansi dan kemudahan akses informasi seleksi peserta didik baru yang berintegritas dan bebas pungutan liar.
