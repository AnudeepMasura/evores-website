import { motion } from "framer-motion";

import "./Hero.css";

import evoreLogo from "../../assets/evores-logo.png";

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
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <header className="hero">
      <div className="container hero-container">

        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            From Ideas{" "}
            <span className="gold-gradient-text">
              to Infinity...
            </span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Evolving Research &amp; Engineering Solutions
          </motion.p>
        </motion.div>

        {/* Evores Logo */}
        <motion.div
          className="hero-logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={evoreLogo}
            alt="Evores logo"
          />
        </motion.div>

      </div>
    </header>
  );
}

export default Hero;