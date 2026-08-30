import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import productDetails from "../../data/productDetails";
import "./ProductDetails.css";

function ProductDetails() {
  const { slug } = useParams();
  const [activeSubPage, setActiveSubPage] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setActiveSubPage(null);
  }, [slug]);

  const productKey = slug || "asat";
  const product = productDetails[productKey] || productDetails.asat;

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleOpenSubProduct = (subProduct) => {
    setActiveSubPage(subProduct);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleGoBack = () => {
    setActiveSubPage(null);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Convert products object to array if it's an object (for ASAT) or handle fallback
  const subProductsList = product.products
    ? Object.values(product.products)
    : [];

  return (
    <div className="asat-page-wrapper">
      <AnimatePresence mode="wait">
        
        {/* =========================================================
           1. MAIN ECOSYSTEM VIEW (ALL 4 PRODUCTS + STRUCTURE TREE)
           ========================================================= */}
        {!activeSubPage ? (
          <motion.div
            key="asat-main-view"
            className="asat-view-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <main className="asat-main-content">
              
              {/* Title Section */}
              <div className="asat-title-header">
                <h1 className="asat-main-title">{product.title || "As Simple as That"}</h1>
              </div>

              <div className="section-label-bar">
                <h2 className="section-mono-tag">OUR PRODUCTS</h2>
              </div>

              {/* 4 Sub-Products Grid */}
              <div className="asat-products-grid">
                {subProductsList.map((item) => (
                  <div key={item.slug} className="asat-product-card">
                    <div className="card-top-info">
                      <h3 className="sub-product-title">{item.name}</h3>
                      <p className="sub-product-lines">
                        {item.shortLines && item.shortLines.length >= 3 ? (
                          <>
                            {item.shortLines[0]}<br />
                            {item.shortLines[1]}<br />
                            {item.shortLines[2]}
                          </>
                        ) : (
                          item.para1
                        )}
                      </p>
                    </div>

                    <div className="card-actions-bar">
                      <button
                        onClick={() => handleOpenSubProduct(item)}
                        className="btn-pill-outline"
                      >
                        LEARN MORE
                      </button>
                      <button
                        onClick={() => triggerToast(item.toastMsg || `Launching ${item.name}...`)}
                        className="btn-pill-filled"
                      >
                        VISIT WEBSITE
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Structure Section Added on Home Page */}
              <div className="asat-structure-section">
                <div className="section-label-bar">
                  <h2 className="section-mono-tag">STRUCTURE</h2>
                </div>

                {/* Tree Diagram matching exact HTML structure */}
                <div className="structure-tree-container">
                  {/* Root: EvoRES Technology */}
                  <div className="tree-node tree-root">
                    <span>EVORES TECHNOLOGY</span>
                  </div>

                  {/* Down Arrow */}
                  <div className="tree-connector-down">
                    <div className="line-v"></div>
                    <div className="arrow-head"></div>
                  </div>

                  {/* Parent: As Simple as That */}
                  <div className="tree-node tree-parent">
                    <span>AS SIMPLE AS THAT</span>
                  </div>

                  {/* Branch Line Connector Down */}
                  <div className="tree-branch-wrapper">
                    <div className="line-v short-v"></div>
                    <div className="line-h-connector"></div>
                  </div>

                  {/* 4 Children Products */}
                  <div className="tree-children-grid">
                    {subProductsList.map((item) => (
                      <div key={item.slug} className="tree-node tree-child">
                        <div className="top-vertical-pin"></div>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </main>

            <footer className="asat-footer">
              <p className="footer-origin">MADE IN VIJAYAWADA</p>
              <p className="footer-copyright">© All rights reserved with EvoRES Technology LLP</p>
            </footer>
          </motion.div>
        ) : (

          /* =========================================================
             2. SUB-PRODUCT DETAIL VIEW (ABOUT PRODUCT + JOURNEY TIMELINE)
             ========================================================= */
          <motion.div
            key="asat-detail-view"
            className="asat-view-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <main className="asat-detail-content">
              
              {/* Navigation Back Button */}
              <div className="back-btn-wrapper">
                <button onClick={handleGoBack} className="btn-back-pill">
                  <span>← Back to Products</span>
                </button>
              </div>

              {/* 1. Product Logo / Title */}
              <div className="asat-title-header">
                <h1 className="asat-main-title">{activeSubPage.name}</h1>
              </div>

              {/* 2. About Product (2 Paragraphs) */}
              <div className="detail-about-card">
                <h2 className="section-mono-tag">About {activeSubPage.name}</h2>
                <div className="about-paragraphs-body">
                  <p>{activeSubPage.para1}</p>
                  <p>{activeSubPage.para2}</p>
                </div>
              </div>

              {/* 3. Journey Timeline */}
              <div className="detail-timeline-section">
                <h2 className="section-mono-tag">JOURNEY</h2>
                
                <div className="vertical-timeline-conduit">
                  {activeSubPage.timeline && activeSubPage.timeline.map((step) => (
                    <div className="timeline-step-item" key={step.num}>
                      <div className="step-circle-pin">
                        {step.num}
                      </div>
                      <div className="step-content-body">
                        <div className="step-header-row">
                          <h3 className="step-title">{step.title}</h3>
                          <span className="period-badge">{step.period}</span>
                        </div>
                        {step.desc && <p className="step-desc">{step.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </main>

            <footer className="asat-footer">
              <p className="footer-origin">MADE IN VIJAYAWADA</p>
              <p className="footer-copyright">© All rights reserved with EvoRES Technology LLP</p>
            </footer>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Notification Toast */}
      {toastMessage && (
        <div className="toast-notification-pill">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;