import { motion } from "framer-motion";
import { jadwalSeleksi } from "../data/spmb";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function ScheduleView({ activeSlide }) {
  // Berkas yang harus dipersiapkan
  const berkasWajib = [
    { nama: "Kartu Keluarga (KK)", detail: "Asli & fotokopi, diterbitkan minimal 1 tahun sebelum pendaftaran.", icon: "🏠" },
    { nama: "Rapor SMP/MTs", detail: "Asli & fotokopi nilai rapor semester 1 s.d. 5.", icon: "📘" },
    { nama: "Surat Keterangan Lulus (SKL)", detail: "Asli & fotokopi dari pihak SMP/sederajat asal.", icon: "🎓" },
    { nama: "Surat Kebenaran Dokumen", detail: "Surat pernyataan keabsahan dokumen bermaterai Rp10.000.", icon: "✍️" },
    { nama: "Piagam Prestasi / Kejuaraan", detail: "Asli & fotokopi (khusus pendaftar jalur Prestasi).", icon: "🏆" },
    { nama: "Keterangan DTKS / DTSEN", detail: "Bukti cetak terdata di DTKS (khusus pendaftar jalur Afirmasi).", icon: "🤝" },
  ];

  // Alur verifikasi luring di SMKN 4 Surakarta
  const alurVerifikasi = [
    { step: "01", judul: "Ambil Antrean", ket: "Calon siswa mengambil nomor antrean di gerbang masuk atau loket aula sekolah.", icon: "🎫" },
    { step: "02", judul: "Pra-Verifikasi Berkas", ket: "Panitia memeriksa kelengkapan fisik dokumen pendaftaran di ruang tunggu.", icon: "📋" },
    { step: "03", judul: "Entri & Validasi Sistem", ket: "Petunjuk teknis memasukkan data berkas calon siswa ke sistem PPDB Jawa Tengah.", icon: "💻" },
    { step: "04", judul: "Cetak Tanda Bukti", ket: "Menerima lembar tanda bukti verifikasi akun beserta Token untuk aktivasi akun.", icon: "🖨️" },
  ];

  return (
    <motion.div
      className="school-info-layout"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Kolom Kiri: Berkas Persiapan */}
      <motion.div
        className={`grid-col-left ${activeSlide === 0 ? "slide-active" : "slide-inactive"}`}
        variants={itemVariants}
      >
        <div className="section-header">
          <span className="section-pill">Persiapan</span>
          <h2 className="section-title">Dokumen & Berkas Wajib</h2>
        </div>

        <div className="berkas-list">
          {berkasWajib.map((berkas, i) => (
            <motion.div 
              key={i} 
              className="berkas-card"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="berkas-icon-wrap">
                <span className="berkas-icon">{berkas.icon}</span>
              </div>
              <div className="berkas-body">
                <h4 className="berkas-name">{berkas.nama}</h4>
                <p className="berkas-detail">{berkas.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Kolom Tengah: Timeline Jadwal Utama */}
      <motion.div
        className={`grid-col-center ${activeSlide === 1 ? "slide-active" : "slide-inactive"}`}
        variants={itemVariants}
        style={{ background: "var(--brand-900)", color: "var(--white)" }}
      >
        <div className="section-header">
          <span className="section-pill" style={{ background: "rgba(255,255,255,0.1)", color: "var(--brand-100)" }}>Garis Waktu</span>
          <h2 className="section-title" style={{ color: "var(--white)" }}>Jadwal Resmi PPDB 2026</h2>
        </div>

        <div className="timeline-scroll-wrap">
          <div className="schedule-timeline">
            {jadwalSeleksi.map((item, i) => (
              <div key={i} className={`timeline-item ${item.status}`}>
                <div className="timeline-badge-wrap">
                  <div className="timeline-badge">
                    <span className="timeline-icon">{item.icon}</span>
                  </div>
                  {i < jadwalSeleksi.length - 1 && <div className="timeline-connector-line" />}
                </div>

                <div className="timeline-content" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="timeline-header-row">
                    <span className="timeline-date" style={{ color: "var(--brand-300)" }}>{item.tanggal}</span>
                    {item.status === "active" && (
                      <span className="timeline-badge-active">Sedang Berjalan</span>
                    )}
                    {item.status === "done" && (
                      <span className="timeline-badge-done">Selesai</span>
                    )}
                  </div>
                  <h4 className="timeline-kegiatan" style={{ color: "var(--white)" }}>{item.kegiatan}</h4>
                  <p className="timeline-detail" style={{ color: "rgba(255,255,255,0.7)" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Kolom Kanan: Alur Verifikasi Fisik Luring */}
      <motion.div
        className={`grid-col-right ${activeSlide === 2 ? "slide-active" : "slide-inactive"}`}
        variants={itemVariants}
      >
        <div className="section-header">
          <span className="section-pill">Alur Luring</span>
          <h2 className="section-title">Prosedur Verifikasi Fisik</h2>
        </div>

        <div className="alur-list">
          {alurVerifikasi.map((alur, i) => (
            <motion.div 
              key={i} 
              className="alur-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="alur-badge-wrap">
                <div className="alur-badge">{alur.step}</div>
              </div>
              <div className="alur-body">
                <div className="alur-title-row">
                  <span className="alur-icon">{alur.icon}</span>
                  <h4 className="alur-title">{alur.judul}</h4>
                </div>
                <p className="alur-ket">{alur.ket}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="kiosk-footer-note">
          <p className="kiosk-note-text">
            ⚠️ <strong>Penting:</strong> Verifikasi Dokumen & Pengambilan Token wajib dihadiri oleh Calon Siswa mengenakan seragam SMP asal rapi & bersepatu.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
