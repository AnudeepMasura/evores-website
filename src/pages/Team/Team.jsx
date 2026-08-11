import { motion } from "framer-motion";
import teamMembers from "../../data/team";
import "./Team.css";

function Team() {
  return (
    <div className="team-page">
      <div className="container">
        
        {/* Title */}
        <motion.div 
          className="team-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Our Team</h1>
        </motion.div>

        {/* Alternating Team Rows */}
        <div className="team-rows-list">
          {teamMembers.map((member, index) => {
            const isPhotoRight = index % 2 === 1;

            return (
              <motion.div 
                className={`team-row-card ${isPhotoRight ? "photo-right" : "photo-left"}`} 
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Photo Box */}
                <div className="team-photo-box">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="photo-img" />
                  ) : (
                    <div className="photo-placeholder" />
                  )}
                </div>

                {/* Text Block */}
                <div className="team-text-block">
                  <h2>{member.name}</h2>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
      {/* Footer removed as requested */}
    </div>
  );
}

export default Team;
