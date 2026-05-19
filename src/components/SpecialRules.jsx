import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ketentuanKhusus } from "../data/spmb";

export default function SpecialRules() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-pill">Regulasi</span>
        <h2 className="section-title">Ketentuan Khusus SPMB</h2>
      </motion.div>

      {/* Grid Ketentuan Khusus langsung ditampilkan secara permanen */}
      <div className="special-content-body">
        <div className="rules-grid">
          
          {/* Kartu Perbandingan Kebijakan Premium */}
          <motion.div
            className="rule-card comparison-promo-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <div className="rule-icon-wrap comparison-icon-wrap">
              <span className="rule-icon">🔄</span>
            </div>
            <div className="rule-body">
              <div className="comparison-badge">Kebijakan Baru</div>
              <h3 className="rule-label" style={{ color: "var(--brand-900)" }}>Perubahan Regulasi (2025 vs 2026)</h3>
              <p className="rule-isi">
                Lihat perbandingan resmi sistem desil kemiskinan, syarat piagam kurasi, dan kuota khusus wilayah.
              </p>
            </div>
            <div className="comparison-action-arrow">➡️</div>
          </motion.div>

          {ketentuanKhusus.map((item, i) => (
            <motion.div
              key={item.id}
              className="rule-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="rule-icon-wrap">
                <span className="rule-icon">{item.icon}</span>
              </div>
              <div className="rule-body">
                <h3 className="rule-label">{item.label}</h3>
                <p className="rule-isi">{item.isi}</p>
              </div>
              <div className="rule-number">0{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GLOBAL COMPARISON MODAL OVERLAY */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div 
              className="comparison-modal" 
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="comp-header">
                <div className="comp-title-group">
                  <span className="comp-badge">Bandingkan Kebijakan</span>
                  <h3 className="comp-title">Perbedaan Regulasi SPMB</h3>
                </div>
                <button 
                  className="comp-close-btn" 
                  onClick={() => setIsModalOpen(false)}
                  title="Tutup Modal"
                >
                  ×
                </button>
              </div>
              
              <div className="comp-body">
                <table className="comp-table">
                  <thead className="comp-thead">
                    <tr>
                      <th className="comp-th" style={{ width: "25%" }}>Kategori Perubahan</th>
                      <th className="comp-th" style={{ width: "35%" }}>Tahun Lalu (2025/2026)</th>
                      <th className="comp-th" style={{ width: "40%" }}>Tahun Ini (2026/2027)</th>
                    </tr>
                  </thead>
                  <tbody className="comp-tbody">
                    <tr className="comp-tr">
                      <td className="comp-td">
                        <div className="comp-category">
                          <span>📉 Data Kemiskinan</span>
                          <span className="comp-category-desc">Basis data resmi penentuan afirmasi tidak mampu.</span>
                        </div>
                      </td>
                      <td className="comp-td">
                        <div className="comp-old-val">
                          <ul className="comp-list">
                            <li className="comp-item">
                              <span className="comp-bullet-old">•</span>
                              <span>DTKS-DTJateng Prioritas 1 s.d 3</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="comp-td">
                        <div className="comp-new-val">
                          <ul className="comp-list">
                            <li className="comp-item">
                              <span className="comp-bullet">✦</span>
                              <strong>DTSEN Desil 1 s.d 4</strong>
                            </li>
                          </ul>
                          <p style={{ fontSize: "0.68rem", opacity: 0.8, marginTop: "0.4rem", lineHeight: 1.25 }}>
                            Sistem baru berbasis desil kemiskinan ekstrem untuk jangkauan bantuan sosial pendidikan yang lebih presisi.
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr className="comp-tr">
                      <td className="comp-td">
                        <div className="comp-category">
                          <span>🏆 Jalur Prestasi</span>
                          <span className="comp-category-desc">Komponen pembobotan nilai & piagam kejuaraan.</span>
                        </div>
                      </td>
                      <td className="comp-td">
                        <div className="comp-old-val">
                          <ul className="comp-list">
                            <li className="comp-item">
                              <span className="comp-bullet-old">•</span>
                              <span>Nilai Rapor semester 1 s.d 5</span>
                            </li>
                            <li className="comp-item">
                              <span className="comp-bullet-old">•</span>
                              <span>Prestasi Lomba / Ketua Organisasi (Umum)</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="comp-td">
                        <div className="comp-new-val">
                          <ul className="comp-list">
                            <li className="comp-item">
                              <span className="comp-bullet">✦</span>
                              <strong>Nilai Rapor SMT 1-5 + Nilai TKA</strong>
                            </li>
                            <li className="comp-item">
                              <span className="comp-bullet">✦</span>
                              <strong>Prestasi + Ketua Organisasi</strong>
                            </li>
                            <li className="comp-item">
                              <span className="comp-bullet">✦</span>
                              <span style={{ fontSize: "0.72rem", color: "var(--accent-gold)", fontWeight: 700 }}>
                                Wajib Piagam Kurasi Puspresnas
                              </span>
                            </li>
                          </ul>
                          <p style={{ fontSize: "0.68rem", opacity: 0.8, marginTop: "0.4rem", lineHeight: 1.25 }}>
                            Sekarang nilai akademis digabung dengan hasil TKA (Tes Kemampuan Akademik). Piagam kejuaraan wajib terkurasi oleh Pusat Prestasi Nasional untuk validitas tinggi.
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr className="comp-tr">
                      <td className="comp-td">
                        <div className="comp-category">
                          <span>🗺️ Kuota Khusus Wilayah</span>
                          <span className="comp-category-desc">Apresiasi domisili daerah terpencil & penunjang khusus.</span>
                        </div>
                      </td>
                      <td className="comp-td">
                        <div className="comp-old-val">
                          <ul className="comp-list">
                            <li className="comp-item">
                              <span className="comp-bullet-old">•</span>
                              <span>Kecamatan yang belum berdiri SMAN dan/atau SMKN (domisili khusus)</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td className="comp-td">
                        <div className="comp-new-val">
                          <ul className="comp-list">
                            <li className="comp-item">
                              <span className="comp-bullet">✦</span>
                              <strong>Kecamatan Belum Berdiri SMAN/SMKN</strong>
                            </li>
                            <li className="comp-item">
                              <span className="comp-bullet">✦</span>
                              <strong>Desa Berdiri di Atas Kas Desa</strong>
                            </li>
                            <li className="comp-item">
                              <span className="comp-bullet">✦</span>
                              <strong>Kecamatan Karimunjawa</strong>
                            </li>
                          </ul>
                          <p style={{ fontSize: "0.68rem", opacity: 0.8, marginTop: "0.4rem", lineHeight: 1.25 }}>
                            Perluasan apresiasi bagi warga desa yang lahannya digunakan untuk sekolah negeri, serta perlindungan khusus akses vokasi bagi masyarakat kepulauan Karimunjawa.
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
