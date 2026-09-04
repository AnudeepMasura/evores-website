import { motion } from "framer-motion";
import "./CareersPage.css";

function CareersPage() {
  return (
    <div className="careers-page minimal-uc-page">
      <div className="container uc-center-container">
        <motion.div 
          className="minimal-uc-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="uc-badge-tag">UPCOMING</span>
          <h1>Page Under Construction</h1>
          <p>
            Our career portal is currently under active development. Stay tuned for future opportunities.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default CareersPage;
