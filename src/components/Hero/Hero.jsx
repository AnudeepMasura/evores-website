import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <header className="hero">

      {/* Subtle glowing ambient backdrop */}
      <div className="hero-backdrop">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="container hero-container">

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot" /> EVORES TECHNOLOGY LLP
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            From Ideas <span className="gold-gradient-text">to Infinity.</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Evolving Research &amp; Engineering Solutions at EvoRES Technology.
          </motion.p>

          <motion.div className="hero-line-glow" variants={itemVariants} />

        </motion.div>

      </div>

    </header>
  );
}

export default Hero;