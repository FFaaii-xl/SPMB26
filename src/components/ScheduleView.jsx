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
    { nama: "Kartu Keluarga (KK)", detail: "Asli & fotokopi (min. terbit 1 tahun)", icon: "🏠" },
    { nama: "Rapor SMP/MTs", detail: "Asli & fotokopi rapor Smt 1-5", icon: "📘" },
    { nama: "Surat Keterangan Lulus", detail: "Asli & fotokopi SKL resmi asal", icon: "🎓" },
    { nama: "Kebenaran Dokumen", detail: "Surat pernyataan bermaterai Rp10k", icon: "✍️" },
    { nama: "Piagam Kejuaraan", detail: "Asli & fotokopi (jika memiliki / prestasi)", icon: "🏆" },
    { nama: "DTKS / DTSEN", detail: "Bukti terdata DTKS (khusus Afirmasi)", icon: "🤝" },
  ];

  // Alur verifikasi luring di SMKN 4 Surakarta
  const alurVerifikasi = [
    { step: "01", judul: "Ambil Antrean", ket: "Ambil nomor antrean di loket masuk aula", icon: "🎫" },
    { step: "02", judul: "Pemeriksaan Berkas", ket: "Pra-verifikasi fisik dokumen di ruang tunggu", icon: "📋" },
    { step: "03", judul: "Validasi Sistem", ket: "Panitia memasukkan data berkas ke sistem Jateng", icon: "💻" },
    { step: "04", judul: "Cetak Bukti Akun", ket: "Menerima lembar bukti cetak akun & token", icon: "🖨️" },
  ];

  return (
    <motion.div
      className="schedule-dashboard-layout"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Kolom Kiri: Dokumen Wajib & Alur Verifikasi (1/3 Kolom) */}
      <motion.div
        className={`schedule-col-left ${activeSlide === 0 ? "slide-active" : "slide-inactive"}`}
        variants={itemVariants}
      >
        {/* Persyaratan Berkas */}
        <div className="sched-section sched-berkas">
          <div className="section-header mini">
            <span className="section-pill">Persiapan</span>
            <h3 className="section-title">Dokumen & Berkas Wajib</h3>
          </div>
          
          <div className="berkas-grid-compact">
            {berkasWajib.map((berkas, i) => (
              <motion.div 
                key={i} 
                className="berkas-card-compact"
                whileHover={{ x: 3 }}
              >
                <span className="berkas-icon-compact">{berkas.icon}</span>
                <div className="berkas-text-compact">
                  <h4 className="berkas-name-compact">{berkas.nama}</h4>
                  <p className="berkas-detail-compact">{berkas.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alur Verifikasi Fisik */}
        <div className="sched-section sched-alur">
          <div className="section-header mini">
            <span className="section-pill">Alur Luring</span>
            <h3 className="section-title">Prosedur Verifikasi Fisik</h3>
          </div>

          <div className="alur-grid-compact">
            {alurVerifikasi.map((alur, i) => (
              <div key={i} className="alur-card-compact">
                <span className="alur-badge-compact">{alur.step}</span>
                <div className="alur-text-compact">
                  <span className="alur-icon-compact">{alur.icon}</span>
                  <span className="alur-title-compact">{alur.judul}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="kiosk-note-compact">
            ⚠️ <strong>Siswa Wajib Datang Fisik:</strong> Memakai seragam SMP rapi & bersepatu untuk verifikasi berkas & pengambilan token.
          </div>
        </div>
      </motion.div>

      {/* Kolom Kanan: Infographic Timeline Horisontal Alternating (2/3 Kolom) */}
      <motion.div
        className={`schedule-col-right ${activeSlide >= 1 ? "slide-active" : "slide-inactive"}`}
        variants={itemVariants}
      >
        <div className="section-header center-align">
          <span className="section-pill">Timeline SPMB 2026</span>
          <h2 className="section-title">Garis Waktu Resmi SPMB SMK Negeri</h2>
          <p className="section-desc">Jadwal resmi pelaksanaan berdasarkan Juknis & Jukop Dinas Pendidikan Provinsi Jawa Tengah</p>
        </div>

        {/* Alternating Horizontal Infographic Timeline */}
        <div className="horizontal-timeline-container">
          {/* Main Horizontal Axis Line */}
          <div className="timeline-axis-line" />

          <div className="timeline-horizontal-steps">
            {jadwalSeleksi.map((item, i) => {
              // Menghitung status urutan ganjil-genap untuk zigzag atas-bawah
              // Indeks genap (0, 2, 4, 6) -> pos-down (Bawah Axis)
              // Indeks ganjil (1, 3, 5, 7) -> pos-up (Atas Axis)
              const isEven = i % 2 === 0;
              const positionClass = isEven ? "pos-down" : "pos-up";

              return (
                <div key={i} className={`timeline-h-step ${positionClass} ${item.status}`}>
                  {/* Step Connector Line to Main Axis */}
                  <div className="timeline-h-connector" />

                  {/* Step Node Dot on the Horizontal Axis */}
                  <div className="timeline-h-node">
                    <div className="node-dot" />
                    {item.status === "active" && <div className="node-pulse-ring" />}
                  </div>

                  {/* Step Content Card */}
                  <div className="timeline-h-card">
                    <div className="card-header-row">
                      <span className="card-icon">{item.icon}</span>
                      <span className="card-date">{item.tanggal}</span>
                    </div>
                    <h4 className="card-title">{item.kegiatan}</h4>
                    <p className="card-detail">{item.detail}</p>
                    
                    {item.status === "active" && (
                      <span className="card-active-label">Aktif</span>
                    )}
                    {item.status === "done" && (
                      <span className="card-done-label">✓</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
