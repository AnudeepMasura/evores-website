import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import productDetails from "../../data/productDetails";
import "./ProductDetails.css";

function ProductDetails() {
  const { slug } = useParams();
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  
  // viewMode: 'main' (Overview + How it Started extension) or 'phase1' (Phase 1 products grid)
  const [activeView, setActiveView] = useState("main");
  const [isStartedExpanded, setIsStartedExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setActiveView("main");
    setIsStartedExpanded(false);
  }, [slug]);

  const productKey = slug || "asat";
  const product = productDetails[productKey];

  const handleExpandStarted = () => {
    setIsStartedExpanded(true);
    setTimeout(() => {
      const el = document.getElementById("started-section-node");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const handleGoToPhaseOne = () => {
    setActiveView("phase1");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleBackToMain = () => {
    setActiveView("main");
    setIsStartedExpanded(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>The requested product page does not exist.</p>
          <Link to="/" className="back-btn">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="product-details-page deck-presentation-mode">
      <section className="product-details">
        
        {/* Background glow & ambient deck particles */}
        <div className="pd-backdrop">
          <div className="pd-glow-1" />
          <div className="pd-glow-2" />
          <div className="pd-grid-lines" />
        </div>

        <div className="container presentation-container">

          <AnimatePresence mode="wait">
            
            {/* =========================================================
               MAIN VIEW: OVERVIEW + HOW IT STARTED EXTENSION
               ========================================================= */}
            {activeView === "main" && (
              <motion.div
                key="main-overview-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="presentation-slide main-extended-deck"
              >
                
                {/* 1. OVERVIEW CARD */}
                <div className="slide-card glass-card overview-card-primary">
                  <div className="slide-badge">01 // OVERVIEW</div>
                  
                  <div className="slide-hero">
                    <div className="hero-logo-box">
                      <img
                        src={product.logo}
                        alt={product.title}
                        className="details-logo"
                      />
                    </div>
                    <h1>{product.title}</h1>
                    <div className="gold-accent-line" />
                  </div>

                  <div className="slide-body-content">
                    <p className="lead-text">{product.overview}</p>
                  </div>

                  {/* DOWN ARROW BUTTON (IF NOT YET EXPANDED) */}
                  {!isStartedExpanded && (
                    <motion.div 
                      className="slide-nav-action action-down"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <button 
                        className="arrow-nav-btn btn-down"
                        onClick={handleExpandStarted}
                        title="Click to expand How it's Started below"
                      >
                        <span className="btn-label">HOW IT STARTED</span>
                        <div className="arrow-icon-circle pulsing-down">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                          </svg>
                        </div>
                      </button>
                      <span className="nav-hint">Click Down Arrow to reveal How it Started</span>
                    </motion.div>
                  )}

                </div>

                {/* 2. HOW IT'S STARTED EXTENSION CARD (EXPANDS DIRECTLY BELOW OVERVIEW) */}
                <AnimatePresence>
                  {isStartedExpanded && (
                    <motion.div
                      id="started-section-node"
                      initial={{ opacity: 0, y: 40, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 20, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="started-extension-wrapper"
                    >
                      {/* Vertical Flow Connector Conduit */}
                      <div className="conduit-connector-line">
                        <div className="conduit-glow-dot" />
                      </div>

                      <div className="slide-card glass-card started-extension-card">
                        <div className="slide-badge">02 // ORIGIN & FOUNDATION</div>

                        <div className="slide-body-content started-content">
                          <h2>How it's Started</h2>
                          <div className="gold-accent-line align-left" />
                          <p className="started-narrative">{product.started}</p>
                        </div>

                        {/* RIGHT ARROW NAVIGATION TO PHASE 1 */}
                        <div className="slide-nav-action action-right">
                          <button 
                            className="arrow-nav-btn btn-right"
                            onClick={handleGoToPhaseOne}
                            title="Click right to go to Phase 1"
                          >
                            <div className="btn-text-group">
                              <span className="btn-sub">NEXT SECTION</span>
                              <span className="btn-label">PHASE ONE</span>
                            </div>
                            <div className="arrow-icon-circle pulsing-right">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </div>
                          </button>
                          <span className="nav-hint">Click Right Arrow to view Phase 1 Projects</span>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )}

            {/* =========================================================
               PHASE 1 VIEW (HOW IT'S GOING & PROJECTS GRID)
               ========================================================= */}
            {activeView === "phase1" && (
              <motion.div
                key="phase1-view"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="presentation-slide slide-phase"
              >
                <div className="slide-card glass-card phase-card">
                  
                  {/* LEFT ARROW BACK BUTTON TO MAIN VIEW */}
                  <div className="slide-top-nav">
                    <button 
                      className="arrow-back-pill"
                      onClick={handleBackToMain}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                      </svg>
                      <span>Back to Overview & How it Started</span>
                    </button>
                    <div className="slide-badge">03 // ECOSYSTEM ROADMAP</div>
                  </div>

                  <div className="phase-header-deck">
                    <div className="phase-pill-badge">
                      <span className="phase-pulse-dot" />
                      {product.going.phase}
                    </div>
                    <h2>How it's Going</h2>
                    <p className="phase-sub">Current projects & live applications powering the {product.title} platform</p>
                  </div>

                  {/* Extended 4 Projects Grid */}
                  <motion.div 
                    className="flow-products deck-products-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {product.going.products.map((item, index) => (
                      <motion.div 
                        className="flow-item presentation-item" 
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      >
                        <div className="item-badge-corner">0{index + 1}</div>
                        <div className="flow-item-header">
                          <h3>{item.name}</h3>
                        </div>

                        <p>{item.description}</p>

                        <div className="timeline-buttons">
                          <a
                            href={item.website && item.website !== "#" ? item.website : "#"}
                            target={item.website && item.website !== "#" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="btn-website"
                            onClick={(e) => {
                              if (!item.website || item.website === "#") {
                                e.preventDefault();
                                setSelectedSubItem(item);
                              }
                            }}
                          >
                            VIEW SITE
                          </a>

                          <button 
                            className="btn-learn"
                            onClick={() => setSelectedSubItem(item)}
                          >
                            LEARN MORE
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </section>

      {/* Modal for Sub-product Details */}
      <AnimatePresence>
        {selectedSubItem && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSubItem(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedSubItem(null)}
              >
                ✕
              </button>
              <div className="modal-badge">{product.title} Project</div>
              <h2>{selectedSubItem.name}</h2>
              <p className="modal-desc">{selectedSubItem.description}</p>
              <p className="modal-subtext">
                Part of EvoRES Technology LLP's {product.title} ecosystem strategy. Dedicated modular architecture providing high-speed digital infrastructure.
              </p>

              {selectedSubItem.website && selectedSubItem.website !== "#" && (
                <a 
                  href={selectedSubItem.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  Visit Official Website →
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductDetails;