export const sekolah = {
  nama: "SMK Negeri 4 Surakarta",
  tahun: 2026,
  dasar: "Keputusan Gubernur Jawa Tengah No. 100.3.3.1/117 Tahun 2026",
  sosmed: "@smkn4surakarta",
  website: "smkn4solo.sch.id",
  tagline: "Unggul · Berkarakter · Berprestasi",
  slogan: "Smart · Beauty · Good Character",
  deskripsi: "SMK Negeri 4 Surakarta merupakan institusi pendidikan kejuruan negeri Pusat Keunggulan bidang Pariwisata dan Industri Kreatif terkemuka di Solo, Jawa Tengah.",
  cp1: "+62 857-4787-1815",
  cp2: "+62 819-1463-7994",
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
    rombel: 4,
    perKelas: 36,
    total: 144,
  },
  {
    id: "kuliner",
    nama: "Kuliner (Tata Boga)",
    icon: "🍳",
    deskripsi: "Teknik memasak nusantara/internasional, pastry & bakery, katering, serta operasional bisnis kuliner.",
    warna: "#F59E0B", // Amber
    rombel: 4,
    perKelas: 36,
    total: 144,
  },
  {
    id: "perhotelan",
    nama: "Perhotelan",
    icon: "🏨",
    deskripsi: "Kompetensi front office, tata graha (housekeeping), pelayanan restoran, hingga manajemen perhotelan.",
    warna: "#3B82F6", // Blue
    rombel: 3,
    perKelas: 36,
    total: 108,
  },
  {
    id: "kecantikan",
    nama: "Kecantikan Kulit & Rambut",
    icon: "💇",
    deskripsi: "Perawatan kulit/rambut, tata rias wajah (MUA), hair styling, serta pengelolaan salon kecantikan.",
    warna: "#10B981", // Emerald
    rombel: 2,
    perKelas: 36,
    total: 72,
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

export const persyaratanPiagam = [
  {
    no: 1,
    jenis: "Berjenjang",
    tingkat: "semua tingkat",
    kurasi: "tidak perlu",
    suketKs: "wajib",
    suketOpd: "tidak perlu",
  },
  {
    no: 2,
    jenis: "Berjenjang",
    tingkat: "dari luar prov jateng",
    kurasi: "tidak perlu",
    suketKs: "wajib",
    suketOpd: "wajib OPD asal prov atau cabdin asal",
  },
  {
    no: 3,
    jenis: "Tidak berjenjang",
    tingkat: "dari luar prov jateng",
    kurasi: "kurasi",
    suketKs: "wajib",
    suketOpd: "tidak perlu",
  },
  {
    no: 4,
    jenis: "Tidak berjenjang",
    tingkat: "dari luar prov jateng",
    kurasi: "tidak kurasi",
    suketKs: "wajib",
    suketOpd: "wajib OPD asal prov atau cabdin asal",
  },
  {
    no: 5,
    jenis: "Tidak berjenjang",
    tingkat: "nasional/internasional",
    kurasi: "kurasi",
    suketKs: "wajib",
    suketOpd: "tidak perlu",
  },
  {
    no: 6,
    jenis: "Tidak berjenjang",
    tingkat: "nasional/internasional",
    kurasi: "tidak kurasi",
    suketKs: "wajib",
    suketOpd: "wajib",
  },
  {
    no: 7,
    jenis: "Tidak berjenjang",
    tingkat: "kabupaten/provinsi",
    kurasi: "tidak kurasi",
    suketKs: "wajib",
    suketOpd: "tidak perlu",
  },
];

const rawJadwalSeleksi = [
  {
    tanggal: "18 Mei 2026",
    kegiatan: "Pengumuman SPMB 2026",
    detail: "Informasi resmi kuota & syarat di website dan mading sekolah.",
    icon: "📢",
    panduanLengkap: [
      "Publikasi resmi mengenai daya tampung / kuota berjenjang per kompetensi keahlian / jurusan (Busana, Kuliner, Perhotelan, Kecantikan).",
      "Pemasangan brosur pendaftaran fisik serta materi infografis digital di Kiosk Display TV Sekolah.",
      "Pengumuman jaminan bebas biaya pendaftaran dan bebas segala bentuk pungutan liar (sekolah negeri 100% gratis)."
    ]
  },
  {
    tanggal: "03 - 12 Juni 2026",
    kegiatan: "Pengajuan Akun",
    detail: "Calon murid baru mengajukan akun pendaftaran daring di spmb.jatengprov.go.id.",
    icon: "💻",
    panduanLengkap: [
      "Mengakses portal resmi daring Provinsi Jawa Tengah di alamat: https://ppdb.jatengprov.go.id.",
      "Menginput nomor induk kependudukan (NIK), nomor induk siswa nasional (NISN), sekolah asal, serta rata-rata nilai rapor semester 1-5.",
      "Mengunggah (upload) scan berkas Kartu Keluarga (KK) asli, rapor asli, piagam kejuaraan (bila ada), dan Surat Pernyataan Kebenaran Dokumen bermaterai Rp10.000.",
      "Mencetak tanda bukti Pengajuan Akun mandiri dari rumah untuk dibawa ke sekolah saat verifikasi."
    ]
  },
  {
    tanggal: "04 - 13 Juni 2026",
    kegiatan: "Verifikasi Dokumen & Aktivasi",
    detail: "Verifikasi berkas fisik & aktivasi akun mandiri daring di spmb.jatengprov.go.id.",
    icon: "🛡️",
    panduanLengkap: [
      "WAJIB LURING: Calon murid datang secara fisik ke SMKN 4 Surakarta atau SMA/SMK Negeri terdekat membawa berkas fisik asli & fotokopi lembar verifikasi.",
      "Panitia sekolah memvalidasi kecocokan berkas asli dengan data isian daring di sistem.",
      "Menerima lembar Tanda Bukti Verifikasi berkas resmi yang berisi Token Aktivasi Akun.",
      "Calon murid melakukan aktivasi akun secara mandiri di website PPDB menggunakan token agar akun siap digunakan memilih jurusan."
    ]
  },
  {
    tanggal: "15 - 18 Juni 2026",
    kegiatan: "Pendaftaran & Pilihan",
    detail: "Pemilihan jurusan daring di spmb.jatengprov.go.id & perubahan pilihan jika ada.",
    icon: "📝",
    panduanLengkap: [
      "Login menggunakan akun teraktivasi di portal https://ppdb.jatengprov.go.id.",
      "Memilih kompetensi keahlian / jurusan tujuan di SMKN 4 Surakarta (maksimal memilih 3 pilihan jurusan).",
      "Memantau pergerakan posisi peringkat jurnal pendaftaran harian secara berkala.",
      "Bebas mengubah pilihan sekolah atau jurusan selama rentang masa pendaftaran masih dibuka."
    ]
  },
  {
    tanggal: "21 Juni 2026",
    kegiatan: "Pengumuman Kelulusan",
    detail: "Pengumuman resmi di website spmb.jatengprov.go.id, medsos, & mading sekolah.",
    icon: "🏆",
    panduanLengkap: [
      "Pengumuman hasil seleksi didasarkan pada hasil akhir masing-masing jalur SPMB SMA dan hasil akhir Seleksi SMK.",
      "Pengumuman hasil seleksi mencantumkan daftar nama calon murid yang lolos dan tidak lolos seleksi pada masing-masing jalur yang tersedia dan daftar nama satuan pendidikan pilihan.",
      "Calon murid tidak lolos seleksi dinyatakan sebagai calon murid cadangan yang akan mengisi kekosongan daya tampung satuan pendidikan pilihannya apabila ada calon murid lolos yang tidak daftar ulang.",
      "Penetapan pengumuman daftar nama calon murid yang dinyatakan tidak lolos seleksi disusun berdasarkan peringkat.",
      "Pengumuman resmi dapat diakses secara daring di portal PPDB serta ditayangkan di mading fisik SMKN 4 Surakarta."
    ]
  },
  {
    tanggal: "22 - 25 Juni 2026",
    kegiatan: "Daftar Ulang (Utama)",
    detail: "Melakukan registrasi ulang luring/fisik di sekolah bagi yang diterima utama.",
    icon: "✍️",
    panduanLengkap: [
      "Calon murid yang dinyatakan diterima dalam penyelenggaraan SPMB wajib melakukan daftar ulang.",
      "Bagi calon murid yang tidak melakukan daftar ulang sampai dengan batas waktu yang ditentukan dianggap mengundurkan diri.",
      "Persyaratan dan tata cara daftar ulang diatur lebih lanjut oleh Satuan Pendidikan masing-masing mempedomani ketentuan Dinas Pendidikan Provinsi Jawa Tengah."
    ]
  },
  {
    tanggal: "26 Juni 2026",
    kegiatan: "Pengumuman Cadangan",
    detail: "Pengisian daya tampung kosong berdasarkan peringkat cadangan yang tidak daftar ulang.",
    icon: "🔄",
    panduanLengkap: [
      "Calon murid yang dinyatakan tidak lolos dalam seleksi SPMB terdaftar sebagai calon murid cadangan didasarkan pada pilihan sesuai jalur yang dipilih.",
      "Calon murid cadangan yang akan mengisi kekosongan daya tampung akibat adanya peserta lolos seleksi yang tidak melakukan daftar ulang akan diumumkan di website SPMB.",
      "Calon murid cadangan yang dinyatakan dapat mengisi kekosongan daya tampung wajib melakukan daftar ulang.",
      "Calon murid cadangan yang tidak melakukan daftar ulang sampai batas waktu yang ditentukan dianggap mengundurkan diri, dan selanjutnya tidak diberlakukan adanya calon murid cadangan."
    ]
  },
  {
    tanggal: "13 Juli 2026",
    kegiatan: "Awal Tahun Ajaran Baru",
    detail: "Hari pertama masuk sekolah dan dimulainya kegiatan pembelajaran (MPLS).",
    icon: "🎓",
    panduanLengkap: [
      "Hari pertama masuk sekolah resmi bagi seluruh siswa baru SMKN 4 Surakarta.",
      "Pembagian seragam atribut kelengkapan sekolah dan buku panduan tata tertib.",
      "Pembukaan Masa Pengenalan Lingkungan Sekolah (MPLS) untuk mengenal fasilitas, budaya, dan visi misi sekolah.",
      "Pembagian kelas reguler dan perkenalan dengan wali kelas serta guru kompetensi keahlian masing-masing."
    ]
  }
];


// Definisikan rentang tanggal absolut untuk masing-masing 8 tahapan SPMB di tahun 2026
const ranges = [
  { start: new Date("2026-05-18T00:00:00"), end: new Date("2026-05-18T23:59:59") }, // 18 Mei
  { start: new Date("2026-06-03T00:00:00"), end: new Date("2026-06-12T23:59:59") }, // 03-12 Juni
  { start: new Date("2026-06-04T00:00:00"), end: new Date("2026-06-13T23:59:59") }, // 04-13 Juni
  { start: new Date("2026-06-15T00:00:00"), end: new Date("2026-06-18T23:59:59") }, // 15-18 Juni
  { start: new Date("2026-06-21T00:00:00"), end: new Date("2026-06-21T23:59:59") }, // 21 Juni
  { start: new Date("2026-06-22T00:00:00"), end: new Date("2026-06-25T23:59:59") }, // 22-25 Juni
  { start: new Date("2026-06-26T00:00:00"), end: new Date("2026-06-26T23:59:59") }, // 26 Juni
  { start: new Date("2026-07-13T00:00:00"), end: new Date("2026-07-13T23:59:59") }, // 13 Juli
];

const now = new Date();

export const jadwalSeleksi = rawJadwalSeleksi.map((item, idx) => {
  let status = "next";
  const range = ranges[idx];
  const nextRange = ranges[idx + 1];

  if (now < range.start) {
    status = "next";
  } else if (nextRange && now >= nextRange.start) {
    status = "done";
  } else {
    status = "active";
  }

  return {
    ...item,
    status
  };
});

