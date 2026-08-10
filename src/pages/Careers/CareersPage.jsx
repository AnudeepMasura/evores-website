import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import "./CareersPage.css";

function CareersPage() {
  const positions = [
    {
      title: "Senior Full Stack Engineer (React + Node)",
      department: "Engineering",
      location: "Vijayawada / Remote",
      type: "Full Time"
    },
    {
      title: "UI/UX Product Designer",
      department: "Design",
      location: "Vijayawada / Remote",
      type: "Full Time"
    },
    {
      title: "DevOps & Cloud Infrastructure Architect",
      department: "Infrastructure",
      location: "Vijayawada / Remote",
      type: "Full Time"
    }
  ];

  return (
    <div className="careers-page">
      <div className="container">

        <motion.div 
          className="careers-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="careers-badge">JOIN EVORES</span>
          <h1>Build the <span>Future</span> With Us.</h1>
          <p>
            We are constantly seeking brilliant minds to join our journey of engineering next-generation SaaS ecosystems.
          </p>
          <div className="careers-gold-line" />
        </motion.div>

        <div className="positions-list">
          <h2>Open <span>Positions</span></h2>
          {positions.map((pos, index) => (
            <motion.div 
              className="position-card" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="position-info">
                <h3>{pos.title}</h3>
                <div className="position-tags">
                  <span>{pos.department}</span>
                  <span>{pos.location}</span>
                  <span>{pos.type}</span>
                </div>
              </div>
              <a href="mailto:evorestechnologysocial@gmail.com" className="apply-btn">
                Apply Now →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default CareersPage;
