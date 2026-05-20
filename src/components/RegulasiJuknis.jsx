"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegulasiJuknis() {
  const [activeTopic, setActiveTopic] = useState("domisili");

  // TOPIC MAPPING AND LOGICAL GROUPING (Slides 7, 8, 9, 10, 11, 13, 14, 15, 16, 17)
  const topics = [
    {
      id: "domisili",
      label: "🏠 Domisili & Kependudukan (KK)",
      icon: "🏠",
      color: "#10B981",
      badge: "Slide 08 & 13"
    },
    {
      id: "disabilitas",
      label: "♿ Afirmasi & Disabilitas",
      icon: "♿",
      color: "#3B82F6",
      badge: "Slide 07 & 15"
    },
    {
      id: "prestasi",
      label: "🏆 Piagam Prestasi & Organisasi",
      icon: "🏆",
      color: "#F59E0B",
      badge: "Slide 09 & 14"
    },
    {
      id: "mutasi",
      label: "💼 Mutasi Tugas & Anak Guru",
      icon: "💼",
      color: "#EC4899",
      badge: "Slide 10 & 16"
    },
    {
      id: "wewenang",
      label: "⚖️ Tie-Breaker & Kewenangan",
      icon: "⚖️",
      color: "#EF4444",
      badge: "Slide 11 & 17"
    }
  ];

  return (
    <div 
      className="grid-col-left" 
      style={{ 
        gridColumn: "span 3", 
        height: "100%", 
        width: "100%", 
        overflowY: "auto",
        background: "linear-gradient(135deg, var(--brand-900) 0%, #161338 65%, #0a081f 100%)",
        color: "var(--white)",
        padding: "2vh 2vw",
        borderRadius: "var(--radius-lg)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
      }}
    >
      {/* HEADER */}
      <div className="section-header center-align" style={{ marginBottom: "2vh" }}>
        <span className="section-pill" style={{ background: "rgba(245, 158, 11, 0.15)", color: "var(--accent-gold)", border: "1px solid rgba(245, 158, 11, 0.3)" }}>
          📚 Panduan Kebijakan & Penyelesaian Kasus Lapangan (Juknis Resmi)
        </span>
        <h2 className="section-title" style={{ fontSize: "1.45rem", color: "var(--white)", marginTop: "0.5vh", fontWeight: 900 }}>
          Pusat Informasi & Penyelesaian Kendala Teknis (Troubleshooting)
        </h2>
        <p className="section-desc" style={{ display: "block", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.75)", maxWidth: "800px", margin: "0.5vh auto 0 auto" }}>
          Sintesis Panduan Lintas Sektor Mengacu pada Modul Teknis <strong>"Troubleshooting SPMB Jawa Tengah 2026/2027"</strong>
        </p>
      </div>

      {/* TOPIC SELECTOR TABS */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.6vw", marginBottom: "2.5vh", flexWrap: "wrap" }}>
        {topics.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTopic(t.id)}
            style={{
              background: activeTopic === t.id ? "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-800) 100%)" : "rgba(255, 255, 255, 0.06)",
              border: activeTopic === t.id ? `1.5px solid ${t.color}` : "1px solid rgba(255, 255, 255, 0.15)",
              color: "var(--white)",
              fontSize: "0.72rem",
              fontWeight: 800,
              padding: "0.6rem 1.1rem",
              borderRadius: "20px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5vw",
              boxShadow: activeTopic === t.id ? `0 4px 14px rgba(168, 85, 247, 0.35)` : "none"
            }}
          >
            <span>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* DYNAMIC TOPIC-BASED CONTENT PANEL */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <AnimatePresence mode="wait">
          
          {/* TOPIC A: DOMISILI & KEPENDUDUKAN */}
          {activeTopic === "domisili" && (
            <motion.div
              key="domisili"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "1.5vw" }}
            >
              {/* Sektor 1: Aturan Perhitungan Domisili */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "#10B981", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  📍 Perhitungan Titik Koordinat & Status Domisili
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1vh" }}>
                  {[
                    { label: "💳 KK (Kartu Keluarga)", val: "Domisili utama dihitung mutlak berdasarkan koordinat domisili yang tertulis pada Kartu Keluarga resmi." },
                    { label: "🏡 Pondok Pesantren", val: "Hak istimewa (privilege) jarak dihitung langsung dari titik koordinat Pondok Pesantren tempat santri bermukim secara riil, bukan dari rumah orang tua." },
                    { label: "🏢 Anak Panti Asuhan", val: "Diberikan hak mendaftar sesuai koordinat panti asuhan (Jalur Afirmasi). Tetap diperkenankan mendaftar lewat jalur domisili biasa jika pengajuan akun menggunakan KK pribadi." },
                    { label: "🛡️ Domisili Khusus (SMA/SMK)", val: "Diberlakukan bagi kecamatan tanpa SMA/SMK Negeri, wilayah Lahan Desa, atau kepulauan terpencil (Karimunjawa masuk ke SMA Jepara). Urutan seleksi otomatis disesuaikan: Usia ➔ Nilai Rapor (Tanpa Jarak Jarak)." }
                  ].map((p, idx) => (
                    <div key={idx} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "4px solid #10B981", borderRadius: "8px", padding: "1.2vh 1vw" }}>
                      <strong style={{ fontSize: "0.76rem", color: "var(--white)", display: "block", marginBottom: "0.2vh" }}>{p.label}</strong>
                      <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.35" }}>{p.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sektor 2: Kasus KK Terbit Ulang */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "var(--accent-gold)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  🔄 Kebijakan Kasus Kartu Keluarga (KK) Terbit Ulang
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                  
                  {/* Tetap Valid */}
                  <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.75rem", color: "#a7f3d0", display: "block", marginBottom: "0.4vh" }}>✅ TETAP VALID (Pengecualian Sah - Usia Menetap Dihitung Terus)</strong>
                    <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.85)", display: "flex", flexDirection: "column", gap: "0.4vh" }}>
                      <p>👶 <strong>Penambahan Anggota:</strong> Bayi baru lahir atau sanak saudara bertambah tanpa perubahan alamat.</p>
                      <p>⚰️ <strong>Pengurangan Anggota:</strong> Anggota wafat sehingga nama dihapus tanpa perubahan alamat.</p>
                      <p>🛠️ <strong>Cetak Ulang Fisik:</strong> Akibat KK lama hilang atau rusak biasa/akibat bencana alam resmi.</p>
                    </div>
                  </div>

                  {/* Tidak Valid */}
                  <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.75rem", color: "#fca5a5", display: "block", marginBottom: "0.4vh" }}>❌ TIDAK VALID (Masa Menetap Dinyatakan Gugur & Diulang dari 0)</strong>
                    <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.85)", display: "flex", flexDirection: "column", gap: "0.4vh" }}>
                      <p>🏠 <strong>Pindah Alamat Baru:</strong> Pindah ke domisili baru yang berumur kurang dari 1 tahun.</p>
                      <p>👥 <strong>Numpang KK Kerabat:</strong> Nama dititipkan ke KK kerabat tanpa adanya alamat menetap riil.</p>
                      <p>📋 <strong>SHDK Anak Pindah Alamat:</strong> Kolom Status Hubungan tertulis 'Anak', namun alamat terbukti pindah.</p>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.5)", fontStyle: "italic", textAlign: "center" }}>
                    *Kaidah Operator: Hanya mengevaluasi perubahan ALAMAT domisili secara hukum, bukan sekadar tanggal cetak ulang KK.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TOPIC B: AFIRMASI & PENYANDANG DISABILITAS */}
          {activeTopic === "disabilitas" && (
            <motion.div
              key="disabilitas"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "1.5vw" }}
            >
              {/* Sektor 1: Seleksi & Penyaluran Otomatis */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "#3B82F6", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  ♿ Mekanisme Kuota & Penyaluran Otomatis
                </h3>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "2vh 1.2vw", display: "flex", flexDirection: "column", gap: "1vh" }}>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.4" }}>
                    🎯 <strong>Kuota & Seleksi:</strong> Alokasi kuota maksimal **2% dari total daya tampung** per jurusan/sekolah. Urutan penyeleksian internal didasarkan pada **Jarak Rumah ➔ Usia**.
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.4" }}>
                    🔄 <strong>Penyaluran Otomatis:</strong> Jika kuota 2% di sekolah tujuan utama sudah penuh, sistem otomatis mengalihkan calon siswa ke sekolah negeri terdekat dengan jurusan yang sama.
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.4" }}>
                    ✍️ <strong>Konfirmasi Admin:</strong> Notifikasi penyaluran akan muncul langsung pada aplikasi pendaftaran CMB. Pihak sekolah tujuan diberikan kewenangan **1x Konfirmasi** untuk menyatakan kesediaan menampung.
                  </p>
                  <div style={{ background: "rgba(239, 68, 68, 0.12)", border: "1px solid rgba(239, 68, 68, 0.3)", padding: "0.8rem", borderRadius: "8px" }}>
                    <p style={{ fontSize: "0.7rem", color: "#fca5a5", lineHeight: "1.4", fontWeight: 700 }}>
                      ⚠️ Jika Calon Siswa menolak penyaluran otomatis tersebut, ia dinyatakan keluar dari antrean sistem afirmasi disabilitas dan wajib mendaftar sekolah lain secara mandiri.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sektor 2: Legalitas & Kewenangan Berkas Medis */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "var(--accent-gold)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  🩺 Validitas Dokumen Medis & Pihak yang Berwenang
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                  
                  {/* Dokumen Sah */}
                  <div style={{ background: "rgba(59, 130, 246, 0.08)", border: "1px solid rgba(59, 130, 246, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.74rem", color: "#93c5fd", display: "block", marginBottom: "0.4vh" }}>🩺 3 DOKUMEN YANG DINYATAKAN SAH (Cukup Salah Satu)</strong>
                    <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.9)", display: "flex", flexDirection: "column", gap: "0.4vh" }}>
                      <p>💳 <strong>1. Kartu Disabilitas Kemensos:</strong> Diterbitkan resmi Kementerian Sosial (validasi langsung tanpa syarat tambahan).</p>
                      <p>📄 <strong>2. Surat Dokter Spesialis / Psikolog Klinis:</strong> Dokter spesialis relevan (Sp.A / Sp.KJ / Psikolog klinis). Sah baik dari klinik swasta terdaftar maupun RSUD pemerintah.</p>
                      <p>🏢 <strong>3. Rekomendasi Tim Asesmen Daerah:</strong> Tim bentukan resmi Cabang Dinas Pendidikan daerah terkait.</p>
                    </div>
                  </div>

                  {/* Kasus Bidan Desa Ditolak */}
                  <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.74rem", color: "#fca5a5", display: "block", marginBottom: "0.4vh" }}>🚫 KASUS DITOLAK (Surat Keterangan Bidan Desa / Perawat)</strong>
                    <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.35" }}>
                      Bidan desa tidak memiliki kompetensi medis menetapkan diagnosis keterbelakangan intelektual (grahita). <strong>Meskipun bidan berstatus ASN</strong> dan dokumen dilegalisir Kepala Puskesmas, berkas <strong>tetap dinyatakan tidak sah</strong>. Arahkan siswa ke Dokter Spesialis/Psikolog.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TOPIC C: PIAGAM PRESTASI & ORGANISASI */}
          {activeTopic === "prestasi" && (
            <motion.div
              key="prestasi"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "1.5vw" }}
            >
              {/* Sektor 1: Sistem Penilaian Prestasi & Organisasi */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "#F59E0B", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  🏆 Struktur Nilai Prestasi & Pengakuan Organisasi
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1vh" }}>
                  {[
                    { title: "🎗️ Piagam Berjenjang", desc: "Juara 1, 2, atau 3 dari kejuaraan resmi yang berjenjang. Verifikasi langsung, opsi kurasi dinonaktifkan." },
                    { title: "⭐ Piagam Tak Berjenjang", desc: "Kompetisi tidak berkelanjutan. Wajib masuk kurasi kurikulum sistem bintang (⭐1 sampai ⭐5)." },
                    { title: "📈 Rumus Nilai Akhir", desc: "Skor NA dihitung dari: 50% Nilai Rapor + 50% TKA. Jika skor sama: Kabupaten/Kota Sama ➔ Jarak ➔ Usia." },
                    { title: "👥 Pengakuan Organisasi", desc: "Hanya 1 kepengurusan yang diakui (misal Ketua OSIS atau Ketua Pramuka, tidak boleh digabung). Nilai ini (+0.75) dapat digabung dengan piagam prestasi." }
                  ].map((p, idx) => (
                    <div key={idx} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "1.2vh 1vw" }}>
                      <strong style={{ fontSize: "0.75rem", color: "var(--white)", display: "block", marginBottom: "0.2vh" }}>{p.title}</strong>
                      <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.35" }}>{p.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div style={{ background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                  <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.4" }}>
                    ⭐ <strong>Aturan Prestasi Khusus:</strong> Kuota dialokasikan sebesar **50% dari total kuota prestasi keseluruhan**. Hanya tersedia di satuan pendidikan tertentu yang ditunjuk resmi oleh Dinas Pendidikan.
                  </p>
                </div>
              </div>

              {/* Sektor 2: Keabsahan & Batas Usia Berkas Piagam */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "var(--brand-300)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  📅 Batas Waktu & Kategori Kejuaraan Kompetitif
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                  
                  {/* Piagam dihitung */}
                  <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.74rem", color: "#a7f3d0", display: "block", marginBottom: "0.4vh" }}>🏅 KEJUARAAN KOMPETITIF (Diterima / Dihitung)</strong>
                    <div style={{ fontSize: "0.66rem", color: "rgba(255,255,255,0.9)", display: "flex", flexDirection: "column", gap: "0.3vh" }}>
                      <p>✓ Juara 1 / 2 / 3 perlombaan resmi berjenjang.</p>
                      <p>✓ Lomba antar-sekolah disertai tanda tangan basah pejabat daerah.</p>
                      <p>✓ Pramuka Garuda Berprestasi disertai surat keterangan Kepsek.</p>
                      <p>✓ Batas Terbit: Terlama 14 Juni 2023 (Maks 3 tahun) & Tercepat Desember 2025.</p>
                    </div>
                  </div>

                  {/* Piagam ditolak */}
                  <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.74rem", color: "#fca5a5", display: "block", marginBottom: "0.4vh" }}>❌ BUKAN KEJUARAAN (Ditolak / Nol Poin)</strong>
                    <div style={{ fontSize: "0.66rem", color: "rgba(255,255,255,0.9)", display: "flex", flexDirection: "column", gap: "0.3vh" }}>
                      <p>✗ Peserta Teraktif, Terbaik, Duta, atau sekadar peserta non-juara.</p>
                      <p>✗ Juara Terfavorit berdasarkan voting / polling media sosial.</p>
                      <p>✗ Kegiatan internal sekolah (Juara Classmeeting).</p>
                      <p>✗ Kejuaraan di tingkat Desa atau tingkat Kecamatan.</p>
                      <p>✗ Piagam tanpa menyertakan tanggal terbit resmi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TOPIC D: MUTASI TUGAS & ANAK GURU */}
          {activeTopic === "mutasi" && (
            <motion.div
              key="mutasi"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "1.5vw" }}
            >
              {/* Sektor 1: Persyaratan & Sistem Aplikasi */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "#EC4899", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  🏢 Persyaratan Jalur Mutasi & Anak Guru
                </h3>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "2vh 1.2vw", display: "flex", flexDirection: "column", gap: "1vh" }}>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.4" }}>
                    💼 <strong>Batas Kuota Mutasi (5%):</strong> Kota tujuan bertugas wajib dikunci oleh Admin ke kabupaten/kota instansi baru. Alamat tujuan harus terbukti berbeda dari daerah asal. Anak guru diperbolehkan memakai kuota mutasi ini.
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.4" }}>
                    👨‍🏫 <strong>Sistem Jalur Anak Guru:</strong> Alamat dan profil diidentifikasi otomatis dari database Dapodik. Verifikator tetap wajib memeriksa seluruh kelayakan dokumen standar.
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.4" }}>
                    👥 <strong>Kelebihan Pendaftar:</strong> Jika jumlah pendaftar anak guru melebihi 5%, segera lakukan eskalasi langsung ke Tim PPDB Provinsi untuk penataan distribusi sekolah tujuan.
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.4" }}>
                    🧑‍🤝‍🧑 <strong>Kasus Dua Ortu Guru:</strong> Jika suami & istri merupakan guru, wajib memilih salah satu instansi saja untuk diverifikasi di sekolah tempat mengajar orang tua yang dipilih tersebut.
                  </p>
                </div>
              </div>

              {/* Sektor 2: Legalitas Hukum Instansi & Wilayah Tugas */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "var(--accent-gold)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  🏢 Legalitas Instansi Baru & Aturan Wilayah Tugas
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                  
                  {/* Instansi Sah */}
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.74rem", color: "#a7f3d0", display: "block", marginBottom: "0.4vh" }}>🏢 LEGALITAS INSTANSI BARU (Harus Berbadan Hukum)</strong>
                    <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.9)", display: "flex", flexDirection: "column", gap: "0.3vh" }}>
                      <p>✓ <strong>Diterima:</strong> PT (Perseroan Terbatas), Yayasan resmi, atau Koperasi terdaftar.</p>
                      <p>✗ <strong>Ditolak:</strong> CV, Firma, UD (Usaha Dagang), atau Usaha Mandiri/Wiraswasta.</p>
                      <p style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)", marginTop: "0.2vh" }}>*Meskipun memiliki NIB/SIUP lengkap, berkas CV/UD tetap wajib ditolak sistem.</p>
                    </div>
                  </div>

                  {/* Batas Wilayah Tugas */}
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.74rem", color: "#93c5fd", display: "block", marginBottom: "0.4vh" }}>📍 BATAS WILAYAH TUGAS & TANGGAL SK</strong>
                    <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.9)", display: "flex", flexDirection: "column", gap: "0.3vh" }}>
                      <p>• <strong>Kesesuaian Kota:</strong> Harus di Kab/Kota instansi baru (SK Kendal = SMAN/SMKN Kendal).</p>
                      <p>• <strong>Masa Berlaku SK:</strong> Maksimal 1 tahun terbit sebelum pendaftaran (bukan tanggal pindah rumah).</p>
                      <p>• <strong>Mutasi Lintas Kab/Kota:</strong> Mutasi tugas dalam satu Kab/Kota dinyatakan DITOLAK.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TOPIC E: ATURAN TIE-BREAKER & KEWENANGAN */}
          {activeTopic === "wewenang" && (
            <motion.div
              key="wewenang"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "1.5vw" }}
            >
              {/* Sektor 1: Simulasi Tie-Breaker Anak Kembar */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "#EF4444", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  👥 Simulasi Batas Kuota: Kasus Kasus Anak Kembar
                </h3>
                <div style={{
                  background: "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.04) 100%)",
                  border: "1px solid rgba(245, 158, 11, 0.2)",
                  borderRadius: "12px",
                  padding: "2vh 1.2vw",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2vh"
                }}>
                  <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.95)", lineHeight: "1.4" }}>
                    🔥 <strong>Skenario Kasus:</strong> Dua anak kembar mendaftar di SMAN/SMKN yang sama melalui Jalur Domisili. Jarak rumah & usia mereka identik. Hanya tersisa **1 kursi terakhir** di batas akhir kuota 30% domisili murni.
                  </p>
                  
                  <strong style={{ fontSize: "0.72rem", color: "var(--accent-gold)", display: "block" }}>Urutan Algoritma Penyelesaian Sistem:</strong>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.4vw" }}>
                    <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.4rem", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                      <strong style={{ display: "block", fontSize: "0.68rem", color: "var(--white)" }}>1. Jarak</strong>
                      <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.6)" }}>Sama Persis</span>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.4rem", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                      <strong style={{ display: "block", fontSize: "0.68rem", color: "var(--white)" }}>2. Usia</strong>
                      <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.6)" }}>Sama Persis</span>
                    </div>
                    <div style={{ background: "rgba(245, 158, 11, 0.15)", padding: "0.4rem", borderRadius: "6px", border: "1px solid rgba(245, 158, 11, 0.3)", textAlign: "center" }}>
                      <strong style={{ display: "block", fontSize: "0.68rem", color: "var(--white)" }}>3. Waktu Submit</strong>
                      <span style={{ fontSize: "0.6rem", color: "var(--accent-gold)", fontWeight: 700 }}>Penentu Akhir</span>
                    </div>
                  </div>

                  <div style={{ background: "rgba(16, 185, 129, 0.12)", padding: "0.6rem 0.8rem", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                    <p style={{ fontSize: "0.68rem", color: "#d1fae5", lineHeight: "1.35", fontWeight: 700 }}>
                      ⚖️ <strong>Putusan Mutlak:</strong> Anak A (yang melakukan submit pendaftaran 2 jam lebih dahulu) berhak menempati kursi terakhir. Anak B terlempar dari kuota domisili 30% dan diproses pada antrean seleksi pilihan berikutnya.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sektor 2: Batas Wewenang & Integritas Operator */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
                <h3 style={{ fontSize: "0.88rem", color: "var(--accent-gold)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  🛡️ Batas Wewenang Hukum & Integritas Verifikator
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                  
                  {/* Dokumen Cacat Tipe-X */}
                  <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.74rem", color: "#fca5a5", display: "block", marginBottom: "0.2vh" }}>🚫 DOKUMEN CACAT FISIK (Tolak & Wajib Cetak Ulang)</strong>
                    <p style={{ fontSize: "0.66rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.35" }}>
                      SKNR hasil sistem digital yang memiliki <strong>coretan/Tipe-X</strong> dinyatakan cacat administrasi. Paraf Kepala Sekolah atau lampiran SPTJM bermaterai tidak sah. Solusi tunggal: Cetak ulang bersih dari SMP asal.
                    </p>
                  </div>

                  {/* Geser Jarak */}
                  <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.74rem", color: "#fca5a5", display: "block", marginBottom: "0.2vh" }}>📍 LARANGAN MENGGESER KOORDINAT</strong>
                    <p style={{ fontSize: "0.66rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.35" }}>
                      Operator dilarang keras membantu menggeser koordinat pendaftar. Jarak &lt; 100m bukan alasan pemaaf. Calon siswa wajib memperbaiki koordinat secara mandiri dari akun pribadi. Terbukti manipulasi = Batal Demi Hukum.
                    </p>
                  </div>

                  {/* De Jure */}
                  <div style={{ background: "rgba(59, 130, 246, 0.08)", border: "1px solid rgba(59, 130, 246, 0.2)", borderRadius: "10px", padding: "1.2vh 1vw" }}>
                    <strong style={{ fontSize: "0.74rem", color: "#93c5fd", display: "block", marginBottom: "0.2vh" }}>⚖️ PRINSIP KEWENANGAN OPERATOR (De Jure vs De Facto)</strong>
                    <p style={{ fontSize: "0.66rem", color: "rgba(255,255,255,0.85)", lineHeight: "1.35" }}>
                      <strong>Operator bukan detektif lapangan!</strong> Berkas KK asli + SHDK 'Anak' + masa menetap &gt; 1 tahun secara hukum wajib diakui. Operator dilarang melakukan penolakan atas dasar opini/pengetahuan pribadi atau survei lapangan.
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
