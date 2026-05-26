"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { komponenSeleksi, persyaratanPiagam } from "../data/spmb";

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
  const [activeTab, setActiveTab] = useState("simulasi_na");

  // State Calculator Piagam
  const [hasPiagam, setHasPiagam] = useState(false); // Default: Tanpa Piagam (0.0)
  const [jenis, setJenis] = useState("berjenjang");
  const [tingkat, setTingkat] = useState("nasional");
  const [juara, setJuara] = useState("juara1");
  const [kurasi, setKurasi] = useState("bintang5");

  // State Simulasi Nilai Akhir (NA)
  const [nrVal, setNrVal] = useState(85.0);
  const [ntkaVal, setNtkaVal] = useState(80.0);
  const [nkVal, setNkVal] = useState("0");
  const [noKey, setNoKey] = useState("none");
  const noVal = noKey === "none" ? 0.0 : 0.75;

  // Fungsi hitung bobot nilai
  const getCalculatedWeight = () => {
    if (jenis === "berjenjang") {
      return berjenjangData[tingkat][juara];
    } else {
      return tidakBerjenjangData[kurasi][tingkat][juara];
    }
  };

  const calculatedWeight = getCalculatedWeight();

  // Sinkronisasi otomatis dari kriteria kalkulator piagam ke nkVal
  useEffect(() => {
    if (!hasPiagam) {
      setNkVal("0");
    } else {
      const weight = getCalculatedWeight();
      if (weight === "Langsung Diterima") {
        setNkVal("999");
      } else {
        setNkVal(String(weight));
      }
    }
  }, [hasPiagam, jenis, tingkat, juara, kurasi]);

  // Fungsi menyalin bobot piagam ke kalkulator simulasi NA (dipertahankan untuk backward compatibility)
  const handleCopyWeight = () => {
    const weight = getCalculatedWeight();
    if (weight === "Langsung Diterima") {
      setNkVal("999");
    } else {
      setNkVal(String(weight));
    }
    setActiveTab("simulasi_na");
  };

  // Nilai Akhir (NA) math
  const nrScaled = 0.5 * parseFloat(nrVal);
  const ntkaScaled = 0.5 * parseFloat(ntkaVal);
  const isDirectAccept = parseFloat(nkVal) === 999;
  const computedNA = isDirectAccept 
    ? "LANGSUNG DITERIMA" 
    : (nrScaled + ntkaScaled + parseFloat(nkVal) + parseFloat(noVal)).toFixed(2);

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
                  className={`lookup-tab-btn ${activeTab === "simulasi_na" ? "active" : ""}`}
                  onClick={() => setActiveTab("simulasi_na")}
                  style={{ flex: 1 }}
                >
                  ⚖️ Simulasi Nilai Akhir & Kalkulator Piagam Terpadu
                </button>
                <button
                  className={`lookup-tab-btn ${activeTab === "kejuaraan" ? "active" : ""}`}
                  onClick={() => setActiveTab("kejuaraan")}
                  style={{ flex: 1 }}
                >
                  📚 Kriteria & Jenis Kejuaraan Resmi
                </button>
              </div>

              <div className="lookup-body">

                {activeTab === "simulasi_na" && (
                  <div className="calc-grid">
                    {/* Left: Input Controls */}
                    <div className="calc-controls">
                      {/* 1. Nilai Rapor */}
                      <div className="calc-group">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span className="calc-label">Rata-rata Rapor (NR)</span>
                          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent-gold)" }}>{nrVal}</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="100"
                          step="0.1"
                          value={nrVal}
                          onChange={(e) => setNrVal(parseFloat(e.target.value))}
                          style={{ width: "100%", accentColor: "var(--brand-500)", margin: "0.5vh 0" }}
                        />
                        <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.5)" }}>
                          Rata-rata Nilai Rapor Semester 1 s.d. 5 dari SMP/MTs asal.
                        </span>
                      </div>

                      {/* 2. Nilai TKA */}
                      <div className="calc-group">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span className="calc-label">Nilai Tes Kemampuan Akademik (NTKA)</span>
                          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--accent-gold)" }}>{ntkaVal}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="0.1"
                          value={ntkaVal}
                          onChange={(e) => setNtkaVal(parseFloat(e.target.value))}
                          style={{ width: "100%", accentColor: "var(--brand-500)", margin: "0.5vh 0" }}
                        />
                        <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.5)" }}>
                          Hasil Nilai Ujian TKA PPDB Jateng tertulis (24-26 Juni).
                        </span>
                      </div>

                      {/* 3. Nilai Piagam */}
                      <div className="calc-group">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                          <span className="calc-label">Nilai Piagam Kejuaraan (NK)</span>
                          {/* iOS-style toggle for piagam status */}
                          <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                            <span style={{ fontSize: "0.58rem", fontWeight: 800, color: hasPiagam ? "var(--brand-500)" : "rgba(255,255,255,0.4)" }}>
                              {hasPiagam ? "🏆 Piagam Aktif" : "❌ Tanpa Piagam"}
                            </span>
                            <div 
                              onClick={() => setHasPiagam(!hasPiagam)}
                              style={{
                                width: "36px",
                                height: "20px",
                                borderRadius: "10px",
                                background: hasPiagam ? "var(--brand-500)" : "rgba(255,255,255,0.15)",
                                position: "relative",
                                transition: "all 0.3s ease",
                                border: "1px solid rgba(255,255,255,0.1)"
                              }}
                            >
                              <div 
                                style={{
                                  width: "14px",
                                  height: "14px",
                                  borderRadius: "50%",
                                  background: "var(--white)",
                                  position: "absolute",
                                  top: "2px",
                                  left: hasPiagam ? "18px" : "2px",
                                  transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
                                }}
                              />
                            </div>
                          </label>
                        </div>

                        {hasPiagam ? (
                          // Mode Hitung Otomatis yang Terpadu & Indah!
                          <div 
                            style={{ 
                              background: "rgba(255,255,255,0.03)", 
                              border: "1px dashed rgba(168, 85, 247, 0.2)", 
                              borderRadius: "10px", 
                              padding: "0.8rem", 
                              marginTop: "0.8vh",
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px"
                            }}
                          >
                            {/* A. Kategori */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.6)" }}>Kategori Kejuaraan</span>
                              <div style={{ display: "flex", gap: "4px" }}>
                                <button
                                  type="button"
                                  className={`calc-option-btn ${jenis === "berjenjang" ? "active" : ""}`}
                                  onClick={() => setJenis("berjenjang")}
                                  style={{ padding: "2px 8px", fontSize: "0.55rem" }}
                                >
                                  🏅 Berjenjang
                                </button>
                                <button
                                  type="button"
                                  className={`calc-option-btn ${jenis === "tidak_berjenjang" ? "active" : ""}`}
                                  onClick={() => setJenis("tidak_berjenjang")}
                                  style={{ padding: "2px 8px", fontSize: "0.55rem" }}
                                >
                                  🏵️ Tidak Berjenjang
                                </button>
                              </div>
                            </div>

                            {/* B. Tingkat Event */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                              <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.6)" }}>Tingkat Event</span>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" }}>
                                {["kab_kota", "provinsi", "nasional", "internasional"].map((t) => (
                                  <button
                                    key={t}
                                    type="button"
                                    className={`calc-option-btn ${tingkat === t ? "active" : ""}`}
                                    onClick={() => setTingkat(t)}
                                    style={{ padding: "2px 0", fontSize: "0.55rem", textTransform: "capitalize" }}
                                  >
                                    {t === "kab_kota" ? "Kab/Kota" : t}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* C. Peringkat Juara */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.6)" }}>Peringkat Juara</span>
                              <div style={{ display: "flex", gap: "4px" }}>
                                {["juara1", "juara2", "juara3"].map((j, idx) => (
                                  <button
                                    key={j}
                                    type="button"
                                    className={`calc-option-btn ${juara === j ? "active" : ""}`}
                                    onClick={() => setJuara(j)}
                                    style={{ padding: "2px 8px", fontSize: "0.55rem" }}
                                  >
                                    Juara {idx + 1}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* D. Kurasi (jika tidak berjenjang) */}
                            {jenis === "tidak_berjenjang" && (
                              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                                <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.6)" }}>Tingkat Kurasi Piagam</span>
                                <select
                                  value={kurasi}
                                  onChange={(e) => setKurasi(e.target.value)}
                                  style={{
                                    background: "rgba(0,0,0,0.3)",
                                    border: "1.2px solid rgba(255,255,255,0.15)",
                                    color: "var(--white)",
                                    borderRadius: "6px",
                                    padding: "0.2rem 0.4rem",
                                    fontSize: "0.62rem",
                                    fontWeight: 700,
                                    outline: "none"
                                  }}
                                >
                                  <option value="bintang5">⭐ 5 - Sangat Direkomendasikan</option>
                                  <option value="bintang4">⭐ 4 - Direkomendasikan Tinggi</option>
                                  <option value="bintang3">⭐ 3 - Direkomendasikan</option>
                                  <option value="bintang2">⭐ 2 - Cukup Direkomendasikan</option>
                                  <option value="bintang1">⭐ 1 - Kurang Direkomendasikan</option>
                                  <option value="non_kurasi">❌ Tanpa Kurasi (Bobot Dasar)</option>
                                </select>
                              </div>
                            )}

                            {/* Info Bobot Terhitung */}
                            <div 
                              style={{ 
                                display: "flex", 
                                justifyContent: "space-between", 
                                alignItems: "center",
                                background: "rgba(168, 85, 247, 0.1)",
                                border: "1px solid rgba(168, 85, 247, 0.2)",
                                borderRadius: "6px",
                                padding: "6px 10px",
                                marginTop: "2px"
                              }}
                            >
                              <span style={{ fontSize: "0.58rem", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
                                Hasil Bobot Piagam:
                              </span>
                              <span style={{ fontSize: "0.68rem", fontWeight: 900, color: "var(--accent-gold)" }}>
                                {isDirectAccept ? "Langsung Diterima! ✅" : `+${parseFloat(nkVal).toFixed(2)} Poin`}
                              </span>
                            </div>
                          </div>
                        ) : (
                          // Jika tidak memiliki piagam, tampilkan info sederhana yang indah
                          <div 
                            style={{
                              background: "rgba(255,255,255,0.01)",
                              border: "1px dashed rgba(255,255,255,0.05)",
                              borderRadius: "10px",
                              padding: "0.6rem 0.8rem",
                              marginTop: "0.8vh",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.4)" }}>Nilai Piagam Kejuaraan (NK):</span>
                            <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "rgba(255,255,255,0.6)" }}>0.0 Poin (Tidak Ada)</span>
                          </div>
                        )}
                        
                        <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.5)", marginTop: "4px", display: "block" }}>
                          Bobot nilai dihitung secara otomatis dan akurat berdasarkan kriteria piagam kejuaraan resmi Anda.
                        </span>
                        <button
                          type="button"
                          className="calc-reference-link"
                          onClick={() => setActiveTab("kejuaraan")}
                        >
                          Lihat acuan persyaratan piagam penghargaan
                        </button>
                      </div>

                      {/* 4. Nilai Organisasi */}
                      <div className="calc-group">
                        <span className="calc-label">Nilai Kepengurusan Organisasi (NO)</span>
                        <select
                          value={noKey}
                          onChange={(e) => setNoKey(e.target.value)}
                          style={{
                            background: "rgba(0,0,0,0.3)",
                            border: "1.2px solid rgba(255,255,255,0.15)",
                            color: "var(--white)",
                            borderRadius: "8px",
                            padding: "0.4rem 0.6rem",
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            outline: "none",
                            marginTop: "0.3vh"
                          }}
                        >
                          <option value="none">Bukan Pengurus / Tidak Ada (0.0)</option>
                          <option value="osis">Ketua OSIS tingkat Sekolah (+0.75)</option>
                          <option value="pramuka">Ketua Pramuka Garuda Penggalang (+0.75)</option>
                          <option value="kelas_ekskul">Ketua Organisasi Kelas / Ekstrakurikuler (+0.75)</option>
                        </select>
                        <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.5)" }}>
                          Bobot tambahan kepengurusan ketua organisasi resmi yang diakui satuan pendidikan.
                        </span>
                      </div>
                    </div>

                    {/* Right: Results Dashboard */}
                    <div className="calc-result-box" style={{ padding: "1.2rem", minHeight: "280px" }}>
                      <div className="calc-result-decor">⚖️</div>
                      <span className="result-title">Estimasi Nilai Akhir (NA)</span>
                      
                      <div className="result-value-wrap" style={{ margin: "0.5vh 0" }}>
                        {isDirectAccept ? (
                          <div className="result-badge-direct" style={{ fontSize: "1.1rem", padding: "0.6rem 1.2rem" }}>
                            Langsung Diterima! ✅
                          </div>
                        ) : (
                          <span className="result-points" style={{ fontSize: "2.8rem" }}>
                            {computedNA}
                            <span style={{ fontSize: "1.0rem", marginLeft: "4px", color: "rgba(255,255,255,0.7)" }}>Poin</span>
                          </span>
                        )}
                      </div>

                      {/* Visual Contribution Bar */}
                      {!isDirectAccept && (
                        <div style={{ width: "100%", margin: "1vh 0" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.58rem", color: "rgba(255,255,255,0.6)", marginBottom: "3px" }}>
                            <span>Komposisi Nilai:</span>
                            <span>Total 100%</span>
                          </div>
                          
                          {/* Segmented bar */}
                          <div style={{
                            display: "flex",
                            height: "12px",
                            width: "100%",
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: "6px",
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.1)"
                          }}>
                            {/* Rapor portion */}
                            <div 
                              title={`Rapor (50% NR): ${nrScaled} Poin`}
                              style={{
                                width: `${(nrScaled / parseFloat(computedNA)) * 100}%`,
                                background: "var(--brand-500)",
                                transition: "width 0.3s ease"
                              }}
                            />
                            {/* TKA portion */}
                            <div 
                              title={`TKA (50% NTKA): ${ntkaScaled} Poin`}
                              style={{
                                width: `${(ntkaScaled / parseFloat(computedNA)) * 100}%`,
                                background: "#3B82F6",
                                transition: "width 0.3s ease"
                              }}
                            />
                            {/* Piagam portion */}
                            {parseFloat(nkVal) > 0 && (
                              <div 
                                title={`Piagam Kejuaraan (NK): ${parseFloat(nkVal)} Poin`}
                                style={{
                                  width: `${(parseFloat(nkVal) / parseFloat(computedNA)) * 100}%`,
                                  background: "var(--accent-gold)",
                                  transition: "width 0.3s ease"
                                }}
                              />
                            )}
                            {/* Organisasi portion */}
                            {noVal > 0 && (
                              <div 
                                title={`Kepemimpinan (NO): ${noVal} Poin`}
                                style={{
                                  width: `${(noVal / parseFloat(computedNA)) * 100}%`,
                                  background: "#10B981",
                                  transition: "width 0.3s ease"
                                }}
                              />
                            )}
                          </div>

                          {/* Legend markers */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 8px", justifyContent: "center", marginTop: "8px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "0.55rem" }}>
                              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brand-500)" }} />
                              <span>50% Rapor ({nrScaled.toFixed(2)})</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "0.55rem" }}>
                              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3B82F6" }} />
                              <span>50% TKA ({ntkaScaled.toFixed(2)})</span>
                            </div>
                            {parseFloat(nkVal) > 0 && (
                              <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "0.55rem" }}>
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-gold)" }} />
                                <span>Piagam (+{parseFloat(nkVal).toFixed(2)})</span>
                              </div>
                            )}
                            {noVal > 0 && (
                              <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "0.55rem" }}>
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981" }} />
                                <span>Organisasi (+{noVal.toFixed(2)})</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="result-note" style={{ fontSize: "0.58rem", padding: "0.5vh 0.6vw", width: "100%", margin: "0.8vh 0 0 0" }}>
                        ⚖️ <strong>Metode Rumus Resmi:</strong><br />
                        <code>NA = (50% × {nrVal}) + (50% × {ntkaVal}) {parseFloat(nkVal) > 0 ? `+ ${parseFloat(nkVal)}` : ""} {noVal > 0 ? `+ ${noVal}` : ""} = {computedNA} Poin</code>
                      </div>
                      
                      <div style={{ fontSize: "0.52rem", color: "rgba(255,255,255,0.45)", lineHeight: "1.3", marginTop: "4px" }}>
                        ⚠️ *Hasil simulasi ini bersifat estimasi panduan pendaftaran dan tidak menjamin kelulusan mutlak di jurnal akhir.*
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "kejuaraan" && (
                  <div className="lookup-reference-layout">
                    <div className="reference-table-card">
                      <div className="reference-table-head">
                        <span className="reference-table-badge">Acuan Resmi</span>
                        <h4 className="reference-table-title">Daftar Persyaratan Piagam Penghargaan</h4>
                        <p className="reference-table-desc">
                          Tabel ini menjadi acuan utama untuk menentukan apakah piagam masuk kategori berjenjang atau tidak berjenjang, serta dokumen pendukung yang harus dilampirkan.
                        </p>
                      </div>

                      <div className="reference-table-wrap">
                        <div className="reference-table">
                          <div className="reference-table-row reference-table-row-head">
                            <span>No</span>
                            <span>Jenis Kejuaraan</span>
                            <span>Tingkat</span>
                            <span>Kurasi</span>
                            <span>Suket KS</span>
                            <span>Suket OPD bidang terkait</span>
                          </div>
                          {persyaratanPiagam.map((item) => (
                            <div key={item.no} className="reference-table-row">
                              <span>{item.no}</span>
                              <span>{item.jenis}</span>
                              <span>{item.tingkat}</span>
                              <span>{item.kurasi}</span>
                              <span>{item.suketKs}</span>
                              <span>{item.suketOpd}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="reference-table-notes">
                        <p>keterangan :</p>
                        <p>Daftar kejuaraan berjenjang terdapat pada Jukop. Kejuaraan di luar itu =&gt; tidak berjenjang</p>
                        <p>Kejuaraan minimal tingkat Kabupaten, paling lama 16 Juni 2023 (terdapat nomor piagam dan tanggal)</p>
                      </div>
                    </div>

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
