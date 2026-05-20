# 🎓 SPMB 2026 Web Infografis — SMKN 4 Surakarta

Aplikasi **Single Page Application (SPA) Web Infografis SPMB 2026** yang interaktif dan premium untuk mempermudah calon peserta didik baru dalam memahami jalur seleksi, kuota, persyaratan, dan regulasi resmi Penerimaan Peserta Didik Baru (PPDB) / SPMB SMKN 4 Surakarta berdasarkan SK Gubernur Jateng No. 100.3.3.1/117 Tahun 2026.

Aplikasi ini didesain khusus untuk tampilan **Kiosk Display (Mading Digital/TV Sekolah)** maupun **Perangkat Mobile** secara responsif tanpa scrollbar yang mengganggu, lengkap dengan sistem Cetak Spanduk MMT otomatis.

---

## ✨ Fitur Unggulan

*   **⚡ Dual Dashboard Switcher:** Beralih dengan mudah antara Profil Sekolah dan Dashboard Informasi SPMB.
*   **📊 Donut Chart Kuota Interaktif:** Visualisasi data kuota jalur seleksi yang dinamis menggunakan *Recharts*.
*   **⚙️ Panel Pengaturan Kiosk Premium:** Modal Glassmorphism dengan toggle/switch animasi iOS, integrasi mode cetak spanduk MMT, dan tombol roda gigi putar modern.
*   **🖨️ Sistem Cetak MMT Otomatis:** Format spanduk MMT landscape khusus yang siap cetak, bersih dari tombol navigasi.
*   **📱 Portrait Slideshow Navigator:** Navigasi slideshow khusus perangkat mobile agar bebas dari scrollbar horizontal/vertikal.
*   **⚖️ Integrasi Regulasi Resmi SK Gubernur Jateng 2026:** Validasi otomatis syarat DTSEN Desil 1-4, Tie-Breaker nilai, syarat ATS (Anak Tidak Sekolah), serta jaminan bebas pungutan.
*   **📅 Timeline Interaktif Juknis Resmi:** Timeline pendaftaran sekuensial yang dapat diklik (clickable) untuk memunculkan modal glassmorphism berisi panduan teknis resmi langkah-demi-langkah, termasuk aturan daftar ulang dan cadangan.
*   **🧮 Kalkulator Simulasi Nilai Akhir (NA) Terpadu:** Simulasi interaktif kalkulator NA PPDB dengan slider visual untuk meramalkan total skor berdasarkan Rapor, Tes Akademik, Piagam Prestasi, dan Organisasi.
*   **🏆 Kalkulator Piagam Otomatis (NK):** Kalkulator Piagam Kejuaraan (NK) terintegrasi langsung di dalam form simulasi nilai akhir dengan toggle iOS-Style cerdas. Menghitung bobot skor berjenjang dan tidak berjenjang secara otomatis sesuai dengan kriteria resmi juknis.
*   **✨ Tata Letak Fluid Responsif:** Komponen left-column menggunakan fluid layout (kombinasi `vw`, `vh`, dan `clamp()`) sehingga secara otomatis beralih dari 2-kolom (layar lebar Kiosk) ke 1-kolom bersisian (layar Mobile) tanpa terpotong (clipping).
*   **🌐 Integrasi Portal Daring:** Tombol pintas berdesain interaktif menuju situs portal resmi PPDB Provinsi Jawa Tengah di header hero section.

---

## 🛠️ Persyaratan Sistem (Requirements)

Sebelum menjalankan atau membangun proyek ini, pastikan sistem Anda memenuhi persyaratan berikut:

1.  **Node.js**: Versi **18.x** atau **20.x** ke atas (sangat disarankan versi LTS).
2.  **Package Manager**: `npm` (bawaan Node.js).
3.  **Modern Browser**: Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari dengan dukungan modern CSS (CSS Grid, Variables, Container Queries).

---

## 🚀 Panduan Instalasi & Penggunaan Lokal

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
Jalankan Next.js dalam server lokal untuk pengujian dan pengembangan real-time:
```bash
npm run dev
```
Setelah berhasil dijalankan, buka peramban (browser) dan akses URL lokal di `http://localhost:3000`.

### 4. Bangun Aplikasi untuk Produksi (Production Build)
Untuk melakukan kompilasi proyek menjadi versi produksi yang dioptimalkan:
```bash
npm run build
```

---

## 🌐 Panduan Instalasi di Web Hosting (Next.js Deployment)

Karena proyek ini menggunakan arsitektur **Next.js (App Router)**, Anda memiliki beberapa opsi web hosting yang fleksibel:

### Opsi A: Menggunakan Layanan Serverless (Sangat Direkomendasikan 🚀)
Sangat disarankan menggunakan platform cloud modern seperti **Vercel** atau **Netlify** karena integrasi penuh, performa tinggi, dan penanganan optimalisasi gambar otomatis bawaan Next.js:
1. Hubungkan akun GitHub Anda ke [Vercel](https://vercel.com).
2. Klik **Add New Project** lalu pilih repositori `SPMB26`.
3. Vercel akan mendeteksi framework **Next.js** secara otomatis.
4. Klik **Deploy** dan web Anda akan online dalam waktu kurang dari 1 menit!

### Opsi B: Shared Hosting (cPanel Node.js Application Manager)
Jika Anda menggunakan hosting cPanel tradisional yang mendukung aplikasi Node.js:
1. Jalankan perintah `npm run build` secara lokal untuk memastikan tidak ada error.
2. Unggah seluruh isi file proyek Anda (termasuk folder `.next`, `public`, `src`, `package.json`, dan `node_modules`) ke folder direktori cPanel Anda (bukan ke `public_html`).
3. Masuk ke cPanel dan cari menu **Setup Node.js App**.
4. Klik **Create Application** dan konfigurasikan:
   * **Node.js version:** Pilih 18.x atau 20.x ke atas.
   * **Application Mode:** Pilih `Production`.
   * **Application root:** Isi dengan nama folder proyek Anda.
   * **Application URL:** Arahkan ke domain/subdomain tujuan Anda.
   * **Application startup file:** Isi dengan `node_modules/next/dist/bin/next` dengan parameter `start` atau gunakan script custom runner `server.js` jika diperlukan.
5. Klik **Run JS Install** lalu klik **Start Application**.

### Opsi C: Static Export (Untuk Hosting Statis / cPanel tanpa Node.js 📄)
Jika hosting Anda **tidak memiliki fitur Node.js** dan hanya mendukung file HTML/CSS/JS statis biasa, Anda bisa mengubah konfigurasi Next.js menjadi Static Export:

1. Buat file bernama `next.config.js` di direktori utama proyek Anda (jika belum ada), lalu tambahkan baris berikut:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export', // Mengaktifkan ekspor statis murni
     images: {
       unoptimized: true, // Menonaktifkan optimasi gambar dinamis server-side
     },
   };

   module.exports = nextConfig;
   ```
2. Jalankan perintah kompilasi:
   ```bash
   npm run build
   ```
3. Hasil build statis akan tersimpan di dalam folder baru bernama **`/out`** (menggantikan folder `/dist` pada Vite).
4. Blok seluruh isi di dalam folder `/out`, kompres menjadi file `.zip`.
5. Unggah file `.zip` tersebut ke folder `public_html` di cPanel File Manager Anda, lalu ekstrak langsung di direktori utama tersebut.
6. Web Anda sudah mengudara secara online menggunakan hosting statis biasa!

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
