# Arsitektur Proyek SPMB 2026

Dokumen ini merangkum struktur folder, alur state dan event, serta komponen per tab utama pada aplikasi SPMB 2026 SMKN 4 Surakarta.

## 1) Peta Arsitektur Per Folder

```mermaid
flowchart TD
  R[Root project] --> A[src/]
  R --> P[public/]
  R --> S[scratch/]
  R --> D[README.md, gemini.md]

  A --> APP[src/app/]
  A --> CMP[src/components/]
  A --> DATA[src/data/]
  A --> CSS[src/index.css & src/App.css]

  APP --> PAGE[page.jsx]
  APP --> LAYOUT[layout.jsx]
  APP --> ROBOTS[robots.txt]
  APP --> SITEMAP[sitemap.xml]

  CMP --> HERO[HeroSection.jsx]
  CMP --> SEL[SelectionComponents.jsx]
  CMP --> QUOTA[QuotaChart.jsx]
  CMP --> RULES[SpecialRules.jsx]
  CMP --> WARN[WarningBanner.jsx]
  CMP --> FOOTER[Footer.jsx]
  CMP --> SCHOOL[SchoolInfo.jsx]
  CMP --> SCHED[ScheduleView.jsx]
  CMP --> REG[RegulasiJuknis.jsx]

  DATA --> SPMB[src/data/spmb.js]

  P --> ASSET[logos, slogan, publik asset]
  S --> NOTES[hasil analisis dan skrip bantu]
```

### Fungsi Tiap Folder

- `src/app/`: lapisan routing Next.js App Router dan metadata global.
- `src/components/`: semua UI utama per layar dan modal interaktif.
- `src/data/`: sumber data statis tunggal untuk sekolah, jurusan, kuota, jadwal, dan regulasi.
- `public/`: aset gambar dan file statis yang langsung dipanggil UI.
- `scratch/`: skrip bantu analisis data lokal dan hasil ekstraksi dokumen.
- root file seperti `README.md` dan `gemini.md`: dokumentasi dan catatan arsitektur.

## 2) Peta Alur State dan Event

```mermaid
flowchart TD
  USER[User] --> TAB[Klik tab utama]
  USER --> DOT[Klik dot navigasi slide]
  USER --> PREV[Navigate prev/next slide]
  USER --> SET[Klik settings]
  USER --> AUTO[Auto slideshow]

  TAB --> AV[activeView]
  DOT --> AS[activeSlide]
  PREV --> AS
  SET --> MOD[isSettingsOpen]
  AUTO --> AV

  AV --> VIEW{View aktif}
  VIEW --> SEK[sekolah]
  VIEW --> SPMB[spmb]
  VIEW --> JAD[jadwal]
  VIEW --> REG[regulasi]

  AS --> SLIDE{Sub-slide}
  SLIDE --> S0[0: kiri]
  SLIDE --> S1[1: tengah]
  SLIDE --> S2[2: kanan]

  MOD --> SETTINGS[Modal pengaturan kios]
```

### State Inti di `src/App.jsx`

- `activeView`: menentukan layar utama yang sedang tampil.
- `activeSlide`: menentukan kolom/sub-layar aktif pada mode yang memakai tiga panel.
- `isSettingsOpen`: membuka dan menutup modal pengaturan kiosk.
- `animationsEnabled`: menghidupkan atau mematikan transisi animasi global lewat `MotionConfig`.
- `autoSlideshowEnabled`: memicu rotasi tab otomatis.
- `slideshowInterval`: durasi perpindahan tab otomatis.

### Event Penting

- Klik tab `sekolah`, `spmb`, `jadwal`, atau `regulasi` mengubah `activeView`.
- Klik dot atau tombol prev/next mengubah `activeSlide`.
- Auto slideshow memutar urutan `sekolah -> spmb -> jadwal -> regulasi -> sekolah`.
- Klik kartu tertentu membuka modal internal di `SpecialRules`, `ScheduleView`, atau `SelectionComponents`.

## 3) Diagram Komponen Per Tab

### Tab Profil Sekolah

```mermaid
flowchart TD
  App --> SchoolInfo
  SchoolInfo --> I[Identitas & Status]
  SchoolInfo --> H[Sejarah Singkat]
  SchoolInfo --> P[Program Keahlian]
  SchoolInfo --> F[Fasilitas Nyata]
  SchoolInfo --> D[Deskripsi sekolah]
```

- Fokus: profil institusi, sejarah, jurusan, dan fasilitas.
- Data utama: `sekolah`, `identitasStatus`, `sejarahSingkat`, `programKeahlian`, `fasilitasUnit`.

### Tab Info SPMB

```mermaid
flowchart TD
  App --> Sel[SelectionComponents]
  App --> QC[QuotaChart]
  App --> SR[SpecialRules]

  Sel --> C1[Kartu seleksi]
  Sel --> C2[Kalkulator piagam]
  Sel --> C3[Simulasi NA]

  QC --> Q1[Donut kuota]
  QC --> Q2[Legend kuota]
  QC --> Q3[Tooltip interaktif]

  SR --> R1[Ketentuan khusus]
  SR --> R2[Modal perbandingan regulasi]
```

- Fokus: penjelasan jalur seleksi, pembagian kuota, dan aturan khusus.
- Data utama: `komponenSeleksi`, `kuotaJalur`, `ketentuanKhusus`.

### Tab Jadwal SPMB

```mermaid
flowchart TD
  App --> ScheduleView
  ScheduleView --> B[Berkas wajib]
  ScheduleView --> A[Alur pendaftaran]
  ScheduleView --> T[Timeline jadwal]
  ScheduleView --> M[Modal tata cara resmi]
```

- Fokus: dokumen yang dibawa, urutan pendaftaran, dan jadwal resmi.
- Data utama: `jadwalSeleksi` dari `src/data/spmb.js`.

### Tab Regulasi & Juknis

```mermaid
flowchart TD
  App --> RegulasiJuknis
  RegulasiJuknis --> T1[Domisili & KK]
  RegulasiJuknis --> T2[Afirmasi & Disabilitas]
  RegulasiJuknis --> T3[Prestasi & Organisasi]
  RegulasiJuknis --> T4[Mutasi & Anak Guru]
  RegulasiJuknis --> T5[Tie-breaker & kewenangan]
```

- Fokus: referensi kebijakan yang lebih rinci dan berbasis topik.
- Komponen ini paling mandiri, karena ia mengelola tab topik internal sendiri.

## 4) Ringkasan Peran Komponen Global

- `HeroSection`: header visual utama, branding, dan link portal resmi.
- `WarningBanner`: peringatan resmi gratis dan bebas pungutan.
- `Footer`: kontak, media sosial, dan tautan resmi sekolah.
- `layout.jsx`: metadata, font, analytics, dan kerangka HTML global.
- `page.jsx`: entry point yang memuat app client secara dinamis.

## 5) Hubungan Data -> UI

```mermaid
flowchart LR
  DATA[src/data/spmb.js] --> UI1[SchoolInfo]
  DATA --> UI2[SelectionComponents]
  DATA --> UI3[QuotaChart]
  DATA --> UI4[SpecialRules]
  DATA --> UI5[ScheduleView]
  DATA --> UI6[RegulasiJuknis]
  DATA --> UI7[HeroSection]
  DATA --> UI8[Footer]
```

Intinya, `src/data/spmb.js` adalah pusat konten. `src/App.jsx` hanya mengatur tata letak, state, dan perpindahan layar.

## 6) Titik Edit Paling Cocok Untuk Fitur Baru

Kalau mau menambah fitur baru, urutan edit yang paling masuk akal biasanya begini:

- **Tambah konten atau aturan baru**: mulai dari `src/data/spmb.js`.
- **Tambah komponen tampilan baru**: buat file baru di `src/components/`.
- **Tambah tab atau layar baru**: ubah `src/App.jsx` untuk menambah state `activeView` dan routing tampilan.
- **Ubah metadata, font, atau analytics global**: edit `src/app/layout.jsx`.
- **Ubah cara halaman utama dimuat**: edit `src/app/page.jsx`.
- **Ubah aset gambar/logo/sponsor**: taruh atau ganti file di `public/`.

### Prioritas Edit yang Paling Efisien

1. `src/data/spmb.js` kalau perubahan hanya menyentuh isi data.
2. `src/components/*.jsx` kalau perubahan menyentuh satu layar atau modal tertentu.
3. `src/App.jsx` kalau perubahan menyentuh navigasi, tab, atau layout global.

### Contoh Cepat

- Kalau ingin menambah kartu informasi baru di tab SPMB, paling sering cukup edit `src/data/spmb.js` dan `src/components/SelectionComponents.jsx`.
- Kalau ingin menambah tab baru, hampir pasti perlu edit `src/App.jsx` dan menambah komponen baru di `src/components/`.
- Kalau ingin menambah halaman profil sekolah baru, biasanya paling aman buat komponen baru lalu pasang di `src/App.jsx` sebagai view tambahan.
