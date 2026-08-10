import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import "./Team.css";

function Team() {
  const teamMembers = [
    {
      name: "Engineering & Product Leadership",
      role: "EvoRES Core Team",
      bio: "Driving research, architecture, and technology development across fashion technology, mobility, gig platforms, and cloud infrastructure."
    },
    {
      name: "Strategy & Operations",
      role: "EvoRES Executive Management",
      bio: "Focusing on corporate scaling, market expansion, business operations, and enterprise digital solutions."
    },
    {
      name: "Design & User Experience",
      role: "EvoRES Creative Studio",
      bio: "Crafting intuitive digital interfaces, brand visual languages, and human-centered design systems."
    }
  ];

  return (
    <div className="team-page">
      <div className="container">

        <motion.div 
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="team-badge">PEOPLE &amp; CULTURE</span>
          <h1>Our <span>Team.</span></h1>
          <p>
            Meet the visionaries, engineers, and strategists building the future of SaaS and digital platforms at EvoRES Technology LLP.
          </p>
          <div className="team-gold-line" />
        </motion.div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              className="team-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="team-card-badge">{member.role}</div>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="team-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Want to shape the future with us?</h2>
          <p>We are always looking for passionate builders to join our team.</p>
          <a href="/careers" className="team-btn">View Open Positions →</a>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
}

export default Team;
