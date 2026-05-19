import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import HeroSection from "./components/HeroSection";
import SelectionComponents from "./components/SelectionComponents";
import QuotaChart from "./components/QuotaChart";
import SpecialRules from "./components/SpecialRules";
import WarningBanner from "./components/WarningBanner";
import Footer from "./components/Footer";
import SchoolInfo from "./components/SchoolInfo";
import ScheduleView from "./components/ScheduleView";

export default function App() {
  const [activeView, setActiveView] = useState("sekolah"); // "sekolah" or "spmb"
  const [activeSlide, setActiveSlide] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [autoSlideshowEnabled, setAutoSlideshowEnabled] = useState(false);
  const [slideshowInterval, setSlideshowInterval] = useState(10); // default 10 seconds

  // Auto Slideshow per Tab logic
  useEffect(() => {
    if (!autoSlideshowEnabled) return;

    const interval = setInterval(() => {
      setActiveView((currentView) => {
        const nextView = currentView === "sekolah" ? "spmb" : currentView === "spmb" ? "jadwal" : "sekolah";
        setActiveSlide(0); // Reset inner slide on view rotation
        return nextView;
      });
    }, slideshowInterval * 1000);

    return () => clearInterval(interval);
  }, [autoSlideshowEnabled, slideshowInterval]);

  const handleViewChange = (view) => {
    setActiveView(view);
    setActiveSlide(0); // Reset slide on view change
  };

  const handlePrint = () => {
    setIsSettingsOpen(false);
    setTimeout(() => {
      window.print();
    }, 150); // Short delay to let settings overlay close smoothly
  };

  return (
    <MotionConfig transition={animationsEnabled ? undefined : { duration: 0 }}>
      <div className={`app-container ${animationsEnabled ? "" : "animations-disabled"}`}>
        {/* HEADER SECTION */}
        <div className="grid-header">
          <HeroSection />
        </div>

        {/* DASHBOARD SELECTOR TABS & ACTION BUTTONS */}
        <div className="dashboard-tabs-container">
          <div className="dashboard-tabs">
            <button
              onClick={() => handleViewChange("sekolah")}
              className={`tab-btn ${activeView === "sekolah" ? "active" : ""}`}
            >
              🏫 Info SMKN4 Surakarta
            </button>
            <button
              onClick={() => handleViewChange("spmb")}
              className={`tab-btn ${activeView === "spmb" ? "active" : ""}`}
            >
              ⚡ Info SPMB 2026
            </button>
            <button
              onClick={() => handleViewChange("jadwal")}
              className={`tab-btn ${activeView === "jadwal" ? "active" : ""}`}
            >
              📅 Jadwal SPMB 2026
            </button>
            
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="settings-btn"
              title="Buka Pengaturan Kiosk"
            >
              ⚙️
            </button>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="grid-main">
          {activeView === "sekolah" && (
            <SchoolInfo activeSlide={activeSlide} />
          )}
          
          {activeView === "spmb" && (
            <>
              {/* Kolom Kiri: Info Seleksi */}
              <div className={`grid-col-left ${activeSlide === 0 ? "slide-active" : "slide-inactive"}`}>
                <SelectionComponents />
              </div>

              {/* Kolom Tengah: Chart Kuota */}
              <div className={`grid-col-center ${activeSlide === 1 ? "slide-active" : "slide-inactive"}`}>
                <QuotaChart />
              </div>

              {/* Kolom Kanan: Aturan */}
              <div className={`grid-col-right ${activeSlide === 2 ? "slide-active" : "slide-inactive"}`}>
                <SpecialRules />
              </div>
            </>
          )}

          {activeView === "jadwal" && (
            <ScheduleView activeSlide={activeSlide} />
          )}
        </div>

        {/* SLIDE NAVIGATION (Only visible on Portrait/Mobile) */}
        <div className="slide-navigation">
          <button 
            onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))} 
            disabled={activeSlide === 0} 
            className="slide-nav-btn prev"
          >
            ‹
          </button>
          <div className="slide-nav-dots">
            {[0, 1, 2].map((idx) => (
              <span 
                key={idx} 
                className={`slide-nav-dot ${activeSlide === idx ? "active" : ""}`}
                onClick={() => setActiveSlide(idx)}
              />
            ))}
          </div>
          <button 
            onClick={() => setActiveSlide(prev => Math.min(2, prev + 1))} 
            disabled={activeSlide === 2} 
            className="slide-nav-btn next"
          >
            ›
          </button>
        </div>

        {/* FOOTER SECTION */}
        <div className="grid-footer">
          <WarningBanner />
          <Footer />
        </div>

        {/* PREMIUM SETTINGS MODAL OVERLAY */}
        {isSettingsOpen && (
          <div className="settings-overlay" onClick={() => setIsSettingsOpen(false)}>
            <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
              <div className="settings-header">
                <h3 className="settings-title">⚙️ Pengaturan Kiosk</h3>
                <button 
                  className="settings-close-x" 
                  onClick={() => setIsSettingsOpen(false)}
                >
                  ×
                </button>
              </div>
              
              <div className="settings-group">
                 {/* Toggle 1: Smooth Animations */}
                <div className="settings-option">
                  <div className="option-info">
                    <span className="option-label">✨ Efek Animasi</span>
                    <span className="option-desc">
                      Aktifkan partikel bergerak dan transisi menu yang halus.
                    </span>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={animationsEnabled}
                      onChange={(e) => setAnimationsEnabled(e.target.checked)}
                    />
                    <span className="slider" />
                  </label>
                </div>

                {/* Toggle 3: Auto Slideshow per Tab */}
                <div className="settings-option" style={{ flexDirection: "column", alignItems: "stretch", gap: "0.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="option-info">
                      <span className="option-label">📺 Auto Slideshow Tab</span>
                      <span className="option-desc">
                        Ganti tab otomatis (Info SMK ➔ Info SPMB ➔ Jadwal) untuk TV Kiosk.
                      </span>
                    </div>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={autoSlideshowEnabled}
                        onChange={(e) => setAutoSlideshowEnabled(e.target.checked)}
                      />
                      <span className="slider" />
                    </label>
                  </div>
                  
                  {autoSlideshowEnabled && (
                    <div className="interval-selector" style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between",
                      background: "rgba(255, 255, 255, 0.05)",
                      padding: "0.5rem 0.8rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      marginTop: "0.3rem"
                    }}>
                      <span style={{ fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.8)", fontWeight: 500 }}>
                        ⏱️ Durasi per Tab:
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <input 
                          type="number" 
                          min="3"
                          max="300"
                          value={slideshowInterval}
                          onChange={(e) => setSlideshowInterval(Math.max(3, parseInt(e.target.value) || 3))}
                          style={{
                            width: "55px",
                            background: "rgba(0, 0, 0, 0.2)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "4px",
                            color: "var(--white)",
                            fontSize: "0.75rem",
                            padding: "0.2rem 0.4rem",
                            textAlign: "center",
                            fontWeight: "bold"
                          }}
                        />
                        <span style={{ fontSize: "0.72rem", color: "var(--accent-gold)", fontWeight: "bold" }}>detik</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Section 2: Print Action (Moved here) */}
                <div className="settings-option" style={{ flexDirection: "column", alignItems: "stretch", gap: "0.8rem" }}>
                  <div className="option-info" style={{ maxWidth: "100%" }}>
                    <span className="option-label">🖨️ Cetak Spanduk MMT</span>
                    <span className="option-desc">
                      Layout horizontal bersisian otomatis, siap dikirim ke tempat percetakan banner digital.
                    </span>
                  </div>
                  <button 
                    onClick={handlePrint}
                    className="settings-print-btn"
                  >
                    🖨️ Cetak MMT Banner
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Vercel Web Analytics */}
        <Analytics />
      </div>
    </MotionConfig>
  );
}
