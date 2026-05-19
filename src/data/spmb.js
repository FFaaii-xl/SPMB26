export const sekolah = {
  nama: "SMK Negeri 4 Surakarta",
  tahun: 2026,
  dasar: "Keputusan Gubernur Jawa Tengah No. 100.3.3.1/117 Tahun 2026",
  sosmed: "@smkn4surakarta",
  website: "smkn4solo.sch.id",
  tagline: "Unggul · Berkarakter · Berprestasi",
  deskripsi: "SMK Negeri 4 Surakarta merupakan institusi pendidikan kejuruan negeri Pusat Keunggulan bidang Pariwisata dan Industri Kreatif terkemuka di Solo, Jawa Tengah.",
};

export const identitasStatus = [
  {
    id: "pk",
    judul: "SMK Pusat Keunggulan",
    isi: "Mutu pendidikan vokasi berstandar industri tinggi.",
    icon: "⭐",
  },
  {
    id: "lsp",
    judul: "LSP-P1 BNSP Resmi",
    isi: "Uji kompetensi resmi berlisensi BNSP.",
    icon: "🛡️",
  },
];

export const sejarahSingkat = [
  {
    era: "SKKA",
    judul: "SKKA Negeri Surakarta",
    isi: "Awal berdiri hanya membuka jurusan Kerajinan Batik.",
  },
  {
    era: "SMKK",
    judul: "SMKK Surakarta",
    isi: "Tatalaksana Makanan diperbarui menjadi Tatalaksana Boga.",
  },
  {
    era: "SMKN 4",
    judul: "SMK Negeri 4 Surakarta",
    isi: "Transformasi penuh menjadi sekolah vokasi modern unggulan.",
  },
];

export const programKeahlian = [
  {
    id: "busana",
    nama: "Busana (Tata Busana)",
    icon: "👗",
    deskripsi: "Menguasai desain busana, pembuatan pola, teknik menjahit, dan pengelolaan bisnis butik mandiri.",
    warna: "#EC4899", // Pink
  },
  {
    id: "kuliner",
    nama: "Kuliner (Tata Boga)",
    icon: "🍳",
    deskripsi: "Teknik memasak nusantara/internasional, pastry & bakery, katering, serta operasional bisnis kuliner.",
    warna: "#F59E0B", // Amber
  },
  {
    id: "perhotelan",
    nama: "Perhotelan",
    icon: "🏨",
    deskripsi: "Kompetensi front office, tata graha (housekeeping), pelayanan restoran, hingga manajemen perhotelan.",
    warna: "#3B82F6", // Blue
  },
  {
    id: "kecantikan",
    nama: "Kecantikan Kulit & Rambut",
    icon: "💇",
    deskripsi: "Perawatan kulit/rambut, tata rias wajah (MUA), hair styling, serta pengelolaan salon kecantikan.",
    warna: "#10B981", // Emerald
  },
];

export const fasilitasUnit = [
  {
    nama: "Hotel Sparta",
    jurusan: "Perhotelan",
    isi: "Praktik akomodasi komprehensif bagi siswa jurusan Perhotelan.",
    icon: "🏨",
  },
  {
    nama: "Resto & Coffee",
    jurusan: "Kuliner",
    isi: "Kafe kekinian yang dikelola nyata oleh jurusan Kuliner & sekolah.",
    icon: "☕",
  },
  {
    nama: "Katering Sparta",
    jurusan: "Kuliner",
    isi: "Layanan jasa boga komersial untuk melatih produksi massal.",
    icon: "🍱",
  },
  {
    nama: "Sanggar Busana",
    jurusan: "Tata Busana",
    isi: "Ruang produksi busana & praktik menjahit garmen.",
    icon: "🪡",
  },
  {
    nama: "Salon Sparta",
    jurusan: "Tata Kecantikan",
    isi: "Fasilitas perawatan & rias nyata untuk umum.",
    icon: "💅",
  },
];

export const komponenSeleksi = [
  {
    id: "rapor",
    icon: "📘",
    judul: "Seleksi Nilai Rapor",
    keterangan: "Menggunakan nilai rata-rata dari Semester 1 hingga 5.",
    warna: "#7C3AED",
    warnaGlow: "rgba(124,58,237,0.4)",
  },
  {
    id: "tka",
    icon: "🧠",
    judul: "TKA (Tes Kemampuan Akademik)",
    keterangan: "Tes Kemampuan Akademik (mengukur kesesuaian dengan program keahlian).",
    warna: "#9333EA",
    warnaGlow: "rgba(147,51,234,0.4)",
  },
  {
    id: "prestasi",
    icon: "🏆",
    judul: "Tambahan Bobot Prestasi",
    keterangan: "Kejuaraan Akademik & Non-Akademik (Maksimal 3 tahun terakhir).",
    warna: "#A855F7",
    warnaGlow: "rgba(168,85,247,0.4)",
  },
];

export const kuotaJalur = [
  {
    name: "Seleksi Prestasi",
    value: 75,
    color: "#7C3AED",
    icon: "🎓",
    minimum: "Minimal 75%",
    deskripsi:
      "Jalur utama penerimaan SMK. Nilai akhir dihitung berdasarkan kombinasi Nilai Rapor SMP/MTs (Semester 1 s.d. 5) ditambah hasil tes minat bakat (TKK) dan bobot sertifikat kejuaraan jika ada.",
  },
  {
    name: "Seleksi Afirmasi",
    value: 15,
    color: "#F59E0B",
    icon: "🤝",
    minimum: "Minimal 15%",
    deskripsi:
      "Dikhususkan untuk calon siswa dari keluarga miskin (DTSEN Desil 1-4), anak yatim/piatu Covid-19, anak panti asuhan, anak tidak sekolah (ATS) guna mencegah putus sekolah, dan disabilitas fisik (maksimal 2%).",
  },
  {
    name: "Seleksi Domisili",
    value: 10,
    color: "#10B981",
    icon: "🏠",
    minimum: "Maksimal 10%",
    deskripsi:
      "Didasarkan pada jarak domisili tempat tinggal terdekat ke kampus SMKN 4 Surakarta, dibuktikan dengan Kartu Keluarga (KK) resmi yang diterbitkan paling lambat 1 tahun sebelum pendaftaran.",
  },
];

export const ketentuanKhusus = [
  {
    id: "ats-dtsen",
    label: "Syarat ATS & Kriteria DTSEN",
    isi: "ATS wajib putus sekolah ≥ 1 tahun (usia maks 21). Keluarga tidak mampu wajib terdata di DTSEN Desil 1 s.d Desil 4.",
    icon: "📋",
  },
  {
    id: "seni",
    label: "Minat Bakat Seni Khusus",
    isi: "Kuota khusus maks 50% dari seleksi prestasi untuk program Seni Rupa, Kriya, dan Seni Pertunjukan.",
    icon: "🎨",
  },
  {
    id: "tie-breaker",
    label: "Aturan Tie-Breaker (Skor Sama)",
    isi: "Jika skor akhir sama, diprioritaskan domisili Kab/Kota/Provinsi yang sama dengan sekolah, lalu usia tertua.",
    icon: "⚖️",
  },
  {
    id: "cadangan-daftar-ulang",
    label: "Daftar Ulang & Sistem Cadangan",
    isi: "Lolos utama wajib daftar ulang. Kuota kosong diisi otomatis dari cadangan sesuai urutan peringkat.",
    icon: "🔄",
  },
];
