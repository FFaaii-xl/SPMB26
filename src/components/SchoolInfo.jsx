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
        <div className="section-header">
          <span className="section-pill">Program Keahlian</span>
          <h2 className="section-title">4 Jurusan Utama</h2>
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
              <div className="jurusan-body">
                <h3 className="jurusan-title">{jur.nama}</h3>
                <p className="jurusan-desc">{jur.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
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
