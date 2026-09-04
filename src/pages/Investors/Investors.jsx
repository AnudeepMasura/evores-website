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
          </div>

          {/* Tree / Card Flowchart Structure */}
          <div className="journey-tree">
            
            {/* Central Company Node */}
            <div className="tree-root-card glass-investor-card">
              <div className="card-badge">MAIN COMPANY</div>
              <h3>EvoRES Technology</h3>
              <p className="company-desc">
                EvoRES Technology LLP develops and operates next generation SaaS, PaaS, and AI-driven digital platforms across multiple industries. It incubates, builds, and manages flagship products including the World of Happi ecosystem and ASAT under one unified technology company.
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
                <div className="card-badge">ONLINE ECOSYSTEM</div>
                <h3>World of Happi</h3>
                
                <div className="card-action">
                  <Link to="/products/happi" className="learn-more-btn">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* ASAT Ecosystem Branch Card */}
              <div className="tree-branch-card glass-investor-card">
                <div className="card-badge">FASHION ECOSYSTEM</div>
                <h3>ASAT (As Simple as That)</h3>

                <div className="card-action">
                  <Link to="/products/asat" className="learn-more-btn">
                    Learn More
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
