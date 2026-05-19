import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { komponenSeleksi } from "../data/spmb";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

// Data Bobot Prestasi Berjenjang (Slide 1)
const berjenjangData = {
  internasional: { juara1: "Langsung Diterima", juara2: "Langsung Diterima", juara3: "Langsung Diterima" },
  nasional: { juara1: "Langsung Diterima", juara2: "5", juara3: "4" },
  provinsi: { juara1: "3", juara2: "2.75", juara3: "2.5" },
  kab_kota: { juara1: "2.22", juara2: "2", juara3: "1.75" } // Sesuai slide c: 2.25/2/1.75 diubah kab_kota d: 2.25/2/1.75
};

// Data Bobot Prestasi Tidak Berjenjang (Slide 2)
const tidakBerjenjangData = {
  bintang5: {
    internasional: { juara1: "3", juara2: "2.75", juara3: "2.5" },
    nasional: { juara1: "2.25", juara2: "2", juara3: "1.75" },
    provinsi: { juara1: "1.5", juara2: "1.25", juara3: "1" },
    kab_kota: { juara1: "0.75", juara2: "0.5", juara3: "0.25" }
  },
  bintang4: {
    internasional: { juara1: "2.97", juara2: "2.72", juara3: "2.47" },
    nasional: { juara1: "2.22", juara2: "1.97", juara3: "1.72" },
    provinsi: { juara1: "1.47", juara2: "1.22", juara3: "0.97" },
    kab_kota: { juara1: "0.72", juara2: "0.47", juara3: "0.22" }
  },
  bintang3: {
    internasional: { juara1: "2.94", juara2: "2.69", juara3: "2.44" },
    nasional: { juara1: "2.19", juara2: "1.94", juara3: "1.69" },
    provinsi: { juara1: "1.44", juara2: "1.19", juara3: "0.94" },
    kab_kota: { juara1: "0.69", juara2: "0.44", juara3: "0.19" }
  },
  bintang2: {
    internasional: { juara1: "2.91", juara2: "2.66", juara3: "2.41" },
    nasional: { juara1: "2.16", juara2: "1.91", juara3: "1.66" },
    provinsi: { juara1: "1.41", juara2: "1.16", juara3: "0.91" },
    kab_kota: { juara1: "0.66", juara2: "0.41", juara3: "0.16" }
  },
  bintang1: {
    internasional: { juara1: "2.88", juara2: "2.63", juara3: "2.38" },
    nasional: { juara1: "2.13", juara2: "1.88", juara3: "1.63" },
    provinsi: { juara1: "1.38", juara2: "1.13", juara3: "0.88" },
    kab_kota: { juara1: "0.63", juara2: "0.38", juara3: "0.13" }
  },
  non_kurasi: {
    internasional: { juara1: "2.15", juara2: "2.12", juara3: "2.09" },
    nasional: { juara1: "1.4", juara2: "1.37", juara3: "1.34" },
    provinsi: { juara1: "0.65", juara2: "0.62", juara3: "0.59" },
    kab_kota: { juara1: "0.1", juara2: "0.07", juara3: "0.04" }
  }
};

export default function SelectionComponents() {
  const [isLookupOpen, setIsLookupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("kalkulator");

  // State Calculator
  const [jenis, setJenis] = useState("berjenjang");
  const [tingkat, setTingkat] = useState("nasional");
  const [juara, setJuara] = useState("juara1");
  const [kurasi, setKurasi] = useState("bintang5");

  // Fungsi hitung bobot nilai
  const getCalculatedWeight = () => {
    if (jenis === "berjenjang") {
      return berjenjangData[tingkat][juara];
    } else {
      return tidakBerjenjangData[kurasi][tingkat][juara];
    }
  };

  const calculatedWeight = getCalculatedWeight();

  return (
    <section className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-pill">Seleksi</span>
        <h2 className="section-title">Komponen Seleksi Utama</h2>
        <p className="section-desc">
          Tiga komponen penilaian resmi yang menentukan kelulusan peserta SPMB
        </p>
      </motion.div>

      <div className="cards-grid">
        {komponenSeleksi.map((item, i) => (
          <motion.div
            key={item.id}
            className="seleksi-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{ "--card-color": item.warna, "--card-glow": item.warnaGlow }}
          >
            {/* Glow orb */}
            <div className="card-glow-orb" />

            {/* Icon circle */}
            <div className="card-icon-wrap">
              <span className="card-icon">{item.icon}</span>
              <div className="card-icon-ring" />
            </div>

            {/* Step number */}
            <div className="card-step">{String(i + 1).padStart(2, "0")}</div>

            <h3 className="card-title">{item.judul}</h3>

            <div className="card-divider" />

            <p className="card-keterangan">
              <strong>Keterangan:</strong> {item.keterangan}
            </p>

            {/* Tombol Cek Piagam Interaktif khusus kartu Prestasi */}
            {item.id === "prestasi" && (
              <button 
                className="card-detail-btn"
                onClick={() => setIsLookupOpen(true)}
              >
                🏆 Cek Bobot & Jenis Piagam ➡️
              </button>
            )}

            {/* Bottom accent bar */}
            <div className="card-accent-bar" />
          </motion.div>
        ))}

        {/* Rumus Nilai Akhir Card */}
        <motion.div
          className="formula-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="formula-accent-line" />
          <div className="formula-header">
            <span className="formula-icon-circle">⚖️</span>
            <h3 className="formula-title">Rumus Penilaian Nilai Akhir (NA)</h3>
          </div>
          <div className="formula-math-box">
            <code className="formula-code">NA = (50% × NR) + (50% × NTKA) + NK + NO</code>
          </div>
          <div className="formula-legend-grid">
            <div className="formula-legend-item">
              <span className="legend-label">NR</span>
              <span className="legend-desc">Rerata Rapor Smt 1-5</span>
            </div>
            <div className="formula-legend-item">
              <span className="legend-label">NTKA</span>
              <span className="legend-desc">Rerata Tes Akademik</span>
            </div>
            <div className="formula-legend-item">
              <span className="legend-label">NK</span>
              <span className="legend-desc">Nilai Piagam Kejuaraan</span>
            </div>
            <div className="formula-legend-item">
              <span className="legend-label">NO</span>
              <span className="legend-desc">Nilai Ketua Organisasi</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* LOOKUP MODAL OVERLAY */}
      <AnimatePresence>
        {isLookupOpen && (
          <div className="modal-overlay" onClick={() => setIsLookupOpen(false)}>
            <motion.div
              className="comparison-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              style={{ maxWidth: "900px" }}
            >
              <div className="comp-header" style={{ padding: "1.2rem 2rem" }}>
                <div className="comp-title-group">
                  <span className="comp-badge">Rincian Prestasi Resmi</span>
                  <h3 className="comp-title">Bobot & Kriteria Piagam Prestasi</h3>
                </div>
                <button
                  className="comp-close-btn"
                  onClick={() => setIsLookupOpen(false)}
                >
                  ×
                </button>
              </div>

              <div className="lookup-tabs">
                <button
                  className={`lookup-tab-btn ${activeTab === "kalkulator" ? "active" : ""}`}
                  onClick={() => setActiveTab("kalkulator")}
                >
                  ⚖️ Kalkulator Bobot Nilai
                </button>
                <button
                  className={`lookup-tab-btn ${activeTab === "kejuaraan" ? "active" : ""}`}
                  onClick={() => setActiveTab("kejuaraan")}
                >
                  🏆 Jenis Kejuaraan Resmi
                </button>
              </div>

              <div className="lookup-body">
                {activeTab === "kalkulator" ? (
                  <div className="calc-grid">
                    {/* Left: Controls */}
                    <div className="calc-controls">
                      {/* 1. Kategori Prestasi */}
                      <div className="calc-group">
                        <span className="calc-label">Jenis Prestasi</span>
                        <div className="calc-options-grid">
                          <button
                            className={`calc-option-btn ${jenis === "berjenjang" ? "active" : ""}`}
                            onClick={() => setJenis("berjenjang")}
                          >
                            🏅 Berjenjang
                          </button>
                          <button
                            className={`calc-option-btn ${jenis === "tidak_berjenjang" ? "active" : ""}`}
                            onClick={() => setJenis("tidak_berjenjang")}
                          >
                            🏵️ Tidak Berjenjang
                          </button>
                        </div>
                      </div>

                      {/* 2. Tingkat Event */}
                      <div className="calc-group">
                        <span className="calc-label">Tingkat Event</span>
                        <div className="calc-options-grid">
                          {["internasional", "nasional", "provinsi", "kab_kota"].map((t) => (
                            <button
                              key={t}
                              className={`calc-option-btn ${tingkat === t ? "active" : ""}`}
                              onClick={() => setTingkat(t)}
                              style={{ textTransform: "capitalize" }}
                            >
                              {t === "kab_kota" ? "Kab/Kota" : t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 3. Peringkat / Juara */}
                      <div className="calc-group">
                        <span className="calc-label">Peringkat Juara</span>
                        <div className="calc-options-grid">
                          {["juara1", "juara2", "juara3"].map((j, idx) => (
                            <button
                              key={j}
                              className={`calc-option-btn ${juara === j ? "active" : ""}`}
                              onClick={() => setJuara(j)}
                            >
                              Juara {idx + 1}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 4. Kurasi Curation Quality (Hanya jika Tidak Berjenjang) */}
                      {jenis === "tidak_berjenjang" && (
                        <div className="calc-group">
                          <span className="calc-label">Tingkat Kurasi Piagam</span>
                          <div className="calc-options-row">
                            {[
                              { id: "bintang5", text: "⭐5" },
                              { id: "bintang4", text: "⭐4" },
                              { id: "bintang3", text: "⭐3" },
                              { id: "bintang2", text: "⭐2" },
                              { id: "bintang1", text: "⭐1" },
                              { id: "non_kurasi", text: "❌ Tanpa Kurasi" }
                            ].map((k) => (
                              <button
                                key={k.id}
                                className={`calc-option-btn ${kurasi === k.id ? "active-gold" : ""}`}
                                onClick={() => setKurasi(k.id)}
                                style={{ flex: "1 1 auto", minWidth: "60px", fontSize: "0.68rem" }}
                              >
                                {k.text}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Results Box */}
                    <div className="calc-result-box">
                      <div className="calc-result-decor">🏆</div>
                      <span className="result-title">Hasil Bobot Nilai Piagam</span>
                      <div className="result-value-wrap">
                        {calculatedWeight === "Langsung Diterima" ? (
                          <div className="result-badge-direct"> Langsung Diterima! ✅</div>
                        ) : (
                          <span className="result-points">+{calculatedWeight} <span style={{ fontSize: "1.1rem" }}>Poin</span></span>
                        )}
                      </div>
                      <p className="result-desc">
                        {jenis === "berjenjang" 
                          ? `Prestasi Berjenjang tingkat ${tingkat === "kab_kota" ? "Kab/Kota" : tingkat} Juara ${juara === "juara1" ? "1" : juara === "juara2" ? "2" : "3"} tidak memerlukan proses kurasi.`
                          : `Prestasi Tidak Berjenjang tingkat ${tingkat === "kab_kota" ? "Kab/Kota" : tingkat} Juara ${juara === "juara1" ? "1" : juara === "juara2" ? "2" : "3"} dengan status ${kurasi === "non_kurasi" ? "Tanpa Kurasi" : "Kurasi " + kurasi.replace("bintang", "Bintang ")}.`
                        }
                      </p>
                      <div className="result-note">
                        💡 <strong>Catatan Regulasi:</strong> Piagam tidak berjenjang yang dikurasi memiliki bobot nilai lebih tinggi dibanding piagam tidak berjenjang yang tidak dikurasi.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="directory-grid">
                    {/* Column 1: Berjenjang Nasional */}
                    <div className="directory-column">
                      <div className="dir-card">
                        <div className="dir-card-header">
                          <span className="dir-card-icon">🔬</span>
                          <span className="dir-card-title">Kelompok Riset & Inovasi (Nasional)</span>
                        </div>
                        <ul className="dir-list">
                          <li className="dir-item"><span className="dir-bullet">▪</span> OSN / KSN (Olimpiade Sains Nasional)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> OPSI / KOPSI (Penelitian Siswa Indonesia)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> Kuis Kihajar (Kita Harus Belajar)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> OMI / KSM (Kompetisi Sains Madrasah)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> MYRES / OSMA</li>
                        </ul>
                      </div>

                      <div className="dir-card">
                        <div className="dir-card-header">
                          <span className="dir-card-icon">👟</span>
                          <span className="dir-card-title">Kelompok Olahraga (Nasional)</span>
                        </div>
                        <ul className="dir-list">
                          <li className="dir-item"><span className="dir-bullet">▪</span> O2SN / KOSN (Olimpiade Olahraga)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> POPDA / POPNAS (Pekan Olahraga Pelajar)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> PON / PORPROV (Pekan Olahraga Nasional)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> GSI (Gala Siswa Nasional) / Pospenas / Porsadin</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> Peparnas / Peparprov / Pepaperda</li>
                        </ul>
                      </div>

                      <div className="dir-card">
                        <div className="dir-card-header">
                          <span className="dir-card-icon">⛺</span>
                          <span className="dir-card-title">Kelompok Kepanduan & Keagamaan</span>
                        </div>
                        <ul className="dir-list">
                          <li className="dir-item"><span className="dir-bullet">▪</span> Lomba Tingkat (LT) Pramuka Penggalang</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> Pramuka Garuda Berprestasi / Pramuka Teladan</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> MTQ Pelajar / MQK (Musabaqah Qiraatul Kutub)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> MAPSI / Sippa Dhamma Samajja (SDS)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> UDG / Pesparani / FASI</li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2: Internasional & Seni */}
                    <div className="directory-column">
                      <div className="dir-card">
                        <div className="dir-card-header">
                          <span className="dir-card-icon">🎨</span>
                          <span className="dir-card-title">Kelompok Seni & Budaya (Nasional)</span>
                        </div>
                        <ul className="dir-list">
                          <li className="dir-item"><span className="dir-bullet">▪</span> FLS2N (Festival & Lomba Seni Siswa Nasional)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> OLSN (Olimpiade Literasi Siswa Nasional)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> LKSN (Lomba Keterampilan Siswa Nasional)</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> LCSPN / LCCM / FTBI</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> Pekan Olahraga & Seni (Porseni) MTs</li>
                        </ul>
                      </div>

                      <div className="dir-card">
                        <div className="dir-card-header">
                          <span className="dir-card-icon">🌐</span>
                          <span className="dir-card-title">Berjenjang Tingkat Internasional</span>
                        </div>
                        <p style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.4rem" }}>
                          Juara 1, 2, atau 3 tingkat internasional langsung diterima otomatis di SMKN 4 Surakarta.
                        </p>
                        <ul className="dir-list" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.2rem" }}>
                          <li className="dir-item"><span className="dir-bullet">▪</span> IMSO / ITMO</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> IPhO / IChO</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> IBO / IGeO</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> IOAA / IOI</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> APIO / Olympiade</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> Asean School Games</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> SEA Games</li>
                          <li className="dir-item"><span className="dir-bullet">▪</span> MTQ Internasional</li>
                        </ul>
                      </div>

                      <div className="dir-card" style={{ background: "rgba(168, 85, 247, 0.05)", border: "1px dashed rgba(168, 85, 247, 0.2)" }}>
                        <div className="dir-card-header">
                          <span className="dir-card-icon">💡</span>
                          <span className="dir-card-title" style={{ color: "var(--brand-300)" }}>Prestasi Tidak Berjenjang</span>
                        </div>
                        <p className="dir-item" style={{ fontSize: "0.68rem" }}>
                          Adalah semua kejuaraan atau lomba selain dari kelompok resmi di atas. Agar berbobot tinggi, sertifikat wajib diajukan kurasi ke tim Puspresnas untuk memperoleh akreditasi bintang (Bintang 1 s.d 5).
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
