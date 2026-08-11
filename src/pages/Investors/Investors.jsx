import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Investors.css";

function Investors() {
  return (
    <div className="investors-page">
      <div className="container investors-container">

        {/* 1. Header Section */}
        <motion.div 
          className="investors-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Investor Relation</h1>
          <h2 className="investors-sub-heading">
            Join us and be a part of our journey
          </h2>
          <p className="investors-intro-text">
            EvoRES Technology LLP is an emerging multi-sector technology enterprise focused on building and scaling high-performance digital platforms across fashion technology, mobility, logistics, e-commerce, and gig economy sectors.
          </p>
        </motion.div>

        {/* 2. Section: Our Journey & Flowchart Architecture */}
        <motion.div 
          className="journey-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="journey-title-box">
            <h2>Our journey</h2>
            <p className="journey-sub-text">
              Building modular SaaS architecture and multi-sided digital ecosystems from India for global markets.
            </p>
          </div>

          {/* Tree / Card Flowchart Structure */}
          <div className="journey-tree">
            
            {/* Central Company Node */}
            <div className="tree-root-card glass-investor-card">
              <div className="card-badge">PARENT PLATFORM</div>
              <h3>EvoRES Technology</h3>
              <p className="company-desc">
                Serving as the primary technology foundation, powering cloud infrastructure, shared micro-services, and enterprise growth across all flagship product ecosystems.
              </p>
              <div className="company-meta">
                <span>HQ: Vijayawada, AP, India</span>
                <span className="dot-sep">•</span>
                <span>Incorporated: 2026</span>
              </div>
            </div>

            {/* Connecting Lines Conduit */}
            <div className="tree-conduits">
              <svg className="tree-svg-lines" viewBox="0 0 500 80" fill="none">
                <path 
                  d="M 250 0 L 250 35 L 125 35 L 125 80" 
                  stroke="var(--gold)" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />
                <path 
                  d="M 250 0 L 250 35 L 375 35 L 375 80" 
                  stroke="var(--gold)" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* Ecosystem Branch Cards */}
            <div className="tree-branches">
              
              {/* Happi Ecosystem Branch Card */}
              <div className="tree-branch-card glass-investor-card">
                <div className="card-badge">MOBILITY ECOSYSTEM</div>
                <h3>Happi Ecosystem</h3>
                <p className="ecosystem-desc">
                  Transportation &amp; gig worker platform connecting intracity rides (Happi Ride), intercity travel (Happi Journey), partner fleet management (Happi Rider's Crew), and gamified rewards (Happi Games).
                </p>
                
                <div className="card-action">
                  <Link to="/products/happi" className="learn-more-btn">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* ASAT Ecosystem Branch Card */}
              <div className="tree-branch-card glass-investor-card">
                <div className="card-badge">FASHION ECOSYSTEM</div>
                <h3>ASAT</h3>
                <p className="ecosystem-desc">
                  Fashion technology platform connecting independent designers (Designers Paradise), fashion services (H&amp;S), virtual fitting solutions (FitX), and brand commerce platforms (Brand Hub).
                </p>

                <div className="card-action">
                  <Link to="/products/asat" className="learn-more-btn">
                    Learn More →
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </div>
  );
}

export default Investors;
