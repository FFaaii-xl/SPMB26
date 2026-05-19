import { useState } from "react";
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
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Berkas yang harus dipersiapkan
  const berkasWajib = [
    { nama: "Kartu Keluarga (KK)", detail: "Asli & fotokopi (min. terbit 1 tahun)", icon: "🏠" },
    { nama: "Rapor SMP/MTs", detail: "Asli & fotokopi rapor Smt 1-5", icon: "📘" },
    { nama: "Surat Keterangan Lulus", detail: "Asli & fotokopi SKL resmi asal", icon: "🎓" },
    { nama: "Kebenaran Dokumen", detail: "Surat pernyataan bermaterai Rp10k", icon: "✍️" },
    { nama: "Piagam Kejuaraan", detail: "Asli & fotokopi (jika memiliki / prestasi)", icon: "🏆" },
    { nama: "DTKS / DTSEN (Afirmasi)", detail: "Terdeteksi otomatis oleh sistem (bebas bukti fisik)", icon: "🤝" },
  ];

  // Alur Pendaftaran Kronologis Sekuensial (Daring + Luring Terintegrasi)
  const alurPendaftaran = [
    { step: "01", tipe: "daring", judul: "Input Data Mandiri", ket: "Isi data diri & rapor di web PPDB Jateng", icon: "📝" },
    { step: "02", tipe: "daring", judul: "Unggah Berkas", ket: "Unggah scan KK, Rapor & Surat Pernyataan", icon: "📤" },
    { step: "03", tipe: "daring", judul: "Cetak Pengajuan", ket: "Cetak Bukti Pengajuan Akun dari rumah", icon: "📄" },
    { step: "04", tipe: "luring", judul: "Verifikasi Fisik", ket: "Bawa berkas asli ke SMAN/SMKN terdekat untuk melakukan verifikasi", icon: "🏢" },
    { step: "05", tipe: "luring", judul: "Cetak Bukti Token", ket: "Terima cetak token teraktivasi dari panitia", icon: "🖨️" },
    { step: "06", tipe: "daring", judul: "Pilihan Jurusan", ket: "Login web dengan token & pilih jurusan SMKN 4", icon: "🔑" },
  ];

  // Official detailed 9 steps from Disdik Jateng Infographic
  const official9Steps = [
    { 
      step: "01", 
      tipe: "luring", 
      judul: "Persiapan Berkas", 
      desc: "Calon Murid menyiapkan berkas persyaratan pendaftaran fisik asli sesuai ketentuan jalur yang akan diikuti.", 
      icon: "📁" 
    },
    { 
      step: "02", 
      tipe: "daring", 
      judul: "Akses Situs Resmi", 
      desc: "Membuka situs portal resmi SPMB Daring Jawa Tengah dengan alamat https://ppdb.jatengprov.go.id.", 
      icon: "🌐" 
    },
    { 
      step: "03", 
      tipe: "daring", 
      judul: "Input Data Pribadi", 
      desc: "Calon murid menginput data pribadi serta nilai rapor secara mandiri sesuai alur dalam sistem aplikasi SPMB.", 
      icon: "✍️" 
    },
    { 
      step: "04", 
      tipe: "daring", 
      judul: "Unggah Dokumen", 
      desc: "Calon murid mengunggah (upload) semua scan dokumen persyaratan ke sistem dan akan mendapatkan bukti ajuan akun.", 
      icon: "📤" 
    },
    { 
      step: "05", 
      tipe: "luring", 
      judul: "Pengajuan Verifikasi", 
      desc: "Mengajukan verifikasi secara luring ke SMA/SMK Negeri terdekat membawa berkas fisik asli & fotokopi berkas.", 
      icon: "🏢" 
    },
    { 
      step: "06", 
      tipe: "luring", 
      judul: "Verifikasi & Dapat Token", 
      desc: "Sekolah memverifikasi berkas fisik. Jika semua berkas sesuai ketentuan, calon murid diberikan Token untuk aktivasi akun.", 
      icon: "🔑" 
    },
    { 
      step: "07", 
      tipe: "luring", 
      judul: "Kesempatan Perbaikan", 
      desc: "Apabila berkas belum lengkap, calon murid diberi kesempatan memenuhinya sebelum nantinya diserahkan token aktivasi.", 
      icon: "🔄" 
    },
    { 
      step: "08", 
      tipe: "daring", 
      judul: "Aktivasi Akun & Pilih Jurusan", 
      desc: "Melakukan aktivasi akun dengan token yang didapat, lalu memilih satuan pendidikan / kompetensi keahlian sesuai jadwal.", 
      icon: "🎓" 
    },
    { 
      step: "09", 
      tipe: "daring", 
      judul: "Pantau Jurnal Harian", 
      desc: "Calon murid dapat memantau pergerakan peringkat dan jurnal pendaftaran harian pada sistem aplikasi SPMB Jateng.", 
      icon: "📊" 
    }
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

        {/* Alur Urutan Pendaftaran Terintegrasi */}
        <div className="sched-section sched-alur">
          <div className="section-header mini">
            <span className="section-pill">Urutan Pendaftaran</span>
            <h3 className="section-title">Alur Pengajuan Akun & Verifikasi</h3>
          </div>

          <div className="alur-grid-compact" style={{ gridTemplateColumns: "1fr 1fr", gap: "0.6vh 0.5vw" }}>
            {alurPendaftaran.map((alur, i) => (
              <div 
                key={i} 
                className={`alur-card-compact seq-step-${alur.tipe}`}
                title={alur.ket}
                style={{ position: "relative", padding: "0.5vh 0.5vw" }}
              >
                {/* Step badge */}
                <span 
                  className="alur-badge-compact"
                  style={{
                    background: alur.tipe === "daring" ? "var(--brand-600)" : "var(--accent-gold)",
                    color: alur.tipe === "daring" ? "var(--white)" : "#1e1b4b"
                  }}
                >
                  {alur.step}
                </span>

                <div className="alur-text-compact" style={{ width: "100%", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3vw", minWidth: 0 }}>
                    <span className="alur-icon-compact">{alur.icon}</span>
                    <span 
                      className="alur-title-compact"
                      style={{ 
                        whiteSpace: "nowrap", 
                        overflow: "hidden", 
                        textOverflow: "ellipsis" 
                      }}
                    >
                      {alur.judul}
                    </span>
                  </div>
                  
                  {/* Daring/Luring Badge */}
                  <span 
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 900,
                      padding: "0.1rem 0.4rem",
                      borderRadius: "10px",
                      background: alur.tipe === "daring" ? "rgba(124, 58, 237, 0.1)" : "rgba(245, 158, 11, 0.15)",
                      color: alur.tipe === "daring" ? "var(--brand-700)" : "var(--accent-gold)",
                      textTransform: "uppercase",
                      marginLeft: "auto",
                      flexShrink: 0
                    }}
                  >
                    {alur.tipe}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="kiosk-note-compact" 
            style={{ 
              fontSize: "0.72rem", 
              padding: "0.8vh 0.8vw",
              lineHeight: 1.35,
              marginTop: "0.3vh",
              background: "rgba(124, 58, 237, 0.04)"
            }}
          >
            💡 <strong>Info Penting:</strong> Langkah <strong>01-03</strong> dilakukan daring dari rumah. Langkah <strong>04-05</strong> wajib datang ke SMAN/SMKN terdekat untuk melakukan verifikasi membawa berkas asli. Langkah <strong>06</strong> dilanjutkan daring kembali.
          </div>

          {/* Button to open Official Detailed 9 Steps Modal */}
          <button 
            className="detail-tata-cara-btn"
            onClick={() => setIsDetailModalOpen(true)}
            style={{
              width: "100%",
              marginTop: "0.8vh",
              background: "rgba(245, 158, 11, 0.08)",
              border: "1px dashed var(--accent-gold)",
              color: "var(--accent-gold)",
              borderRadius: "6px",
              padding: "0.6vh 0.8vw",
              fontSize: "0.68rem",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4vw",
              transition: "all 0.2s ease"
            }}
          >
            📋 Detail Resmi 9 Tata Cara Pendaftaran Disdik Jateng ➡️
          </button>
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

      {/* DETAILED TATA CARA PENDAFTARAN MODAL */}
      {isDetailModalOpen && (
        <div className="tata-cara-overlay" onClick={() => setIsDetailModalOpen(false)}>
          <div className="tata-cara-modal" onClick={(e) => e.stopPropagation()}>
            <div className="tata-cara-header">
              <h3 className="tata-cara-title">📋 Alur Tata Cara Pendaftaran PPDB Resmi 2026</h3>
              <button className="tata-cara-close-x" onClick={() => setIsDetailModalOpen(false)}>×</button>
            </div>
            
            <div className="tata-cara-content">
              <p className="tata-cara-subtitle">
                💡 <strong>Informasi Resmi Disdik Jateng:</strong> Berikut adalah detail 9 langkah kronologis tata cara pendaftaran akun dan verifikasi fisik PPDB Sekolah Menengah Kejuruan (SMK) Negeri Tahun Ajaran 2026/2027 berdasarkan diagram alur petunjuk teknis resmi.
              </p>
              
              <div className="tata-cara-grid">
                {official9Steps.map((stepItem, index) => (
                  <div 
                    key={index} 
                    className={`tata-cara-card ${stepItem.tipe === "luring" ? "luring-step" : "daring-step"}`}
                  >
                    <span className="tata-cara-badge-num">{stepItem.step}</span>
                    <div className="tata-cara-details">
                      <div className="tata-cara-step-header">
                        <span className="tata-cara-step-title">{stepItem.icon} {stepItem.judul}</span>
                        <span className={`tata-cara-type-badge ${stepItem.tipe}`}>{stepItem.tipe}</span>
                      </div>
                      <p className="tata-cara-step-desc">{stepItem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="tata-cara-footer">
              <button className="tata-cara-close-btn" onClick={() => setIsDetailModalOpen(false)}>
                Tutup Panduan
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
