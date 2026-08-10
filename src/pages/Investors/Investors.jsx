import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import "./Investors.css";

function Investors() {
  const pillars = [
    {
      title: "Scalable SaaS Platforms",
      desc: "Architecting high-margin, multi-tenant digital ecosystems across high-growth verticals including mobility, logistics, and fashion commerce."
    },
    {
      title: "Product-Led Growth",
      desc: "Capitalizing on high lifetime customer value, network effect virality, and cross-platform synergy between consumer & enterprise solutions."
    },
    {
      title: "Strategic Capital",
      desc: "Partnering with visionary institutional investors, angel syndicates, and strategic corporate venture capital for long-term expansion."
    }
  ];

  return (
    <div className="investors-page">
      <div className="container">

        <motion.div 
          className="investors-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="investors-badge">INVESTOR RELATIONS</span>
          <h1>Investor <span>Relations.</span></h1>
          <p>
            Building the next generation of scalable SaaS products and enterprise digital ecosystems from India for global markets.
          </p>
          <div className="investors-gold-line" />
        </motion.div>

        <div className="investors-grid">
          {pillars.map((pillar, index) => (
            <motion.div 
              className="investor-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="investor-card-num">0{index + 1}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="investor-contact-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Connect with our Investor Relations Team</h2>
          <p>For investment inquiries, pitch decks, and strategic partnership opportunities:</p>
          <div className="investor-email">evorestechnologysocial@gmail.com</div>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
}

export default Investors;
