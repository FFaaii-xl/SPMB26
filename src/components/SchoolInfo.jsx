"use client";
import { motion } from "framer-motion";
import { sekolah, identitasStatus, sejarahSingkat, programKeahlian, fasilitasUnit } from "../data/spmb";

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

export default function SchoolInfo({ activeSlide }) {
  return (
    <motion.div
      className="school-info-layout"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Kolom Kiri: Identitas & Sejarah */}
      <motion.div 
        className={`grid-col-left ${activeSlide === 0 ? "slide-active" : "slide-inactive"}`}
        variants={itemVariants}
      >
        <div className="section-header">
          <span className="section-pill">Identitas & Status</span>
          <h2 className="section-title">Profil & Sejarah</h2>
        </div>
        
        {/* Identitas Cards */}
        <div className="identitas-grid">
          {identitasStatus.map((item) => (
            <div key={item.id} className="identitas-card">
              <div className="identitas-icon">{item.icon}</div>
              <div className="identitas-body">
                <h3 className="identitas-title">{item.judul}</h3>
                <p className="identitas-isi">{item.isi}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sejarah Timeline */}
        <div className="sejarah-section">
          <h3 className="sejarah-section-title">⌛ Garis Waktu Sejarah</h3>
          <div className="sejarah-timeline">
            {sejarahSingkat.map((sej, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-era">{sej.era}</span>
                  <h4 className="timeline-title">{sej.judul}</h4>
                  <p className="timeline-isi">{sej.isi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Kolom Tengah: Program Keahlian (Tata Busana, Kuliner, Perhotelan, Tata Kecantikan) */}
      <motion.div 
        className={`grid-col-center ${activeSlide === 1 ? "slide-active" : "slide-inactive"}`}
        variants={itemVariants}
      >
        <div className="section-header" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span className="section-pill">Program Keahlian</span>
          <h2 className="section-title">4 Jurusan Utama</h2>
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.3rem",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "0.2rem 0.6rem",
            borderRadius: "12px",
            fontSize: "0.68rem",
            fontWeight: 800,
            marginTop: "0.5vh",
            color: "var(--white)",
            width: "fit-content"
          }}>
            <span>📊 Total Kuota Seluruh Jurusan:</span>
            <strong style={{ color: "var(--accent-gold)" }}>
              {programKeahlian.reduce((acc, curr) => acc + curr.total, 0)} Siswa
            </strong>
          </div>
        </div>

        <div className="jurusan-list">
          {programKeahlian.map((jur) => (
            <div 
              key={jur.id} 
              className="jurusan-card"
              style={{ "--jur-color": jur.warna }}
            >
              <div className="jurusan-badge">
                <span className="jurusan-icon">{jur.icon}</span>
              </div>
              <div className="jurusan-body" style={{ width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 className="jurusan-title">{jur.nama}</h3>
                  <div className="jurusan-badge-total" style={{ 
                    background: "rgba(255, 255, 255, 0.08)", 
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "var(--white)",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    padding: "0.15rem 0.5rem",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem"
                  }}>
                    <span>📊 Total Kuota:</span>
                    <strong style={{ color: "var(--accent-gold)" }}>{jur.total}</strong>
                  </div>
                </div>
                <p className="jurusan-desc" style={{ marginTop: "0.25vh", marginBottom: "0.6vh" }}>{jur.deskripsi}</p>
                
                {/* Quota Details Row */}
                <div className="jurusan-quota-row">
                  <div className="jurusan-quota-pill">
                    <span className="label">Rombel:</span>
                    <strong className="value">{jur.rombel} Kelas</strong>
                  </div>
                  <div className="jurusan-quota-pill">
                    <span className="label">Kapasitas:</span>
                    <strong className="value">{jur.perKelas} Siswa/Kelas</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="jurusan-note" style={{
          fontSize: "0.62rem",
          color: "rgba(255, 255, 255, 0.6)",
          textAlign: "center",
          fontStyle: "italic",
          marginTop: "1.2vh",
          lineHeight: 1.3
        }}>
          💡 <strong>Catatan:</strong> Jumlah kuota di atas merupakan daya tampung murni sebelum dikurangi pendaftar jalur inklusi / anak Pendidik & Tendik.
        </p>
      </motion.div>

      {/* Kolom Kanan: Fasilitas & Unit Produksi */}
      <motion.div 
        className={`grid-col-right ${activeSlide === 2 ? "slide-active" : "slide-inactive"}`}
        variants={itemVariants}
      >
        <div className="section-header">
          <span className="section-pill">Fasilitas Nyata</span>
          <h2 className="section-title">Business Centre & Lab</h2>
        </div>

        <div className="prestasi-list">
          {fasilitasUnit.map((fas, i) => (
            <div key={i} className="prestasi-card">
              <div className="prestasi-icon-wrap">
                <span className="prestasi-icon">{fas.icon}</span>
              </div>
              <div className="prestasi-body">
                <span className="prestasi-year">{fas.jurusan}</span>
                <h4 className="prestasi-name">{fas.nama}</h4>
                <p className="keunggulan-isi" style={{ fontSize: "0.68rem", marginTop: "2px" }}>{fas.isi}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="school-desc-box">
          <p className="school-desc-text">
            🌟 {sekolah.deskripsi}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
