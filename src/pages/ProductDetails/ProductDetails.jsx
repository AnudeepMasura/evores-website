import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import productDetails from "../../data/productDetails";
import "./ProductDetails.css";

function ProductDetails() {
  const { slug, subslug } = useParams();
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug, subslug]);

  const productKey = slug || "asat";
  const product = productDetails[productKey];

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="product-details-page">
      <section className="product-details">
        
        {/* Background glow effects */}
        <div className="pd-backdrop">
          <div className="pd-glow-1" />
          <div className="pd-glow-2" />
        </div>

        <div className="container">

          {/* Header */}
          <motion.div 
            className="product-header"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="logo-wrapper">
              <img
                src={product.logo}
                alt={product.title}
                className="details-logo"
              />
            </div>
            <h1>{product.title}</h1>
            <div className="header-gold-line" />
          </motion.div>

          {/* Connected Flow Line wrapper */}
          <div className="flow-conduit-wrapper">

            {/* Overview */}
            <motion.div 
              className="details-section overview-node"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <div className="section-node-indicator">
                <div className="node-dot" />
              </div>
              <div className="section-content-card">
                <h2>Overview</h2>
                <p>{product.overview}</p>
              </div>
            </motion.div>

            {/* Vertical Flow Connector */}
            <div className="conduit-line" />

            {/* How it Started */}
            <motion.div 
              className="details-section started-node"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <div className="section-node-indicator">
                <div className="node-dot" />
              </div>
              <div className="section-content-card">
                <h2>How it's Started</h2>
                <p>{product.started}</p>
              </div>
            </motion.div>

            {/* Vertical Flow Connector */}
            <div className="conduit-line" />

            {/* How it's Going */}
            <motion.div 
              className="details-section going-node"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <div className="phase-header">
                <h2>How it's Going</h2>
              </div>

              <div className="flowchart">
                
                {/* Phase 1 Badge */}
                <div className="phase-box">
                  <span className="phase-pulse" />
                  {product.going.phase}
                </div>

                {/* Vertical line from Phase 1 */}
                <div className="vertical-line" />

                {/* 4 Projects Grid */}
                <motion.div 
                  className="flow-products"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="horizontal-connector" />

                  {product.going.products.map((item, index) => (
                    <motion.div 
                      className="flow-item" 
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -8, transition: { duration: 0.25 } }}
                    >
                      <div className="branch-line" />
                      <div className="node-junction" />

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

          </div>

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

      <Footer />
    </div>
  );
}

export default ProductDetails;