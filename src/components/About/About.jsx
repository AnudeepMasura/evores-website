import "./About.css";

function About() {
  return (
    <section className="about-mission-section">
      <div className="container">
        
        <div className="about-mission-grid">
          
          {/* ABOUT US COLUMN */}
          <div id="about" className="about-col">
            <h2 className="section-title">
              About <span>Us</span>
            </h2>
            <div className="text-block">
              <p>
                EvoRES TECHNOLOGY LLP, incorporated in 2026 in Vijayawada, India, is an emerging technology company focused on building and scaling digital platforms across multiple industries, including fashion technology, logistics, e-commerce, mobility, food commerce, and related sectors.
              </p>
              <p>
                As a service-driven, product-oriented organisation, we develop innovative web and mobile platforms that simplify business operations, enhance customer experiences, and create value for businesses and consumers alike.
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="col-divider" />

          {/* MISSION COLUMN */}
          <div id="mission" className="mission-col">
            <h2 className="section-title">
              Our <span>Mission.</span>
            </h2>
            <div className="text-block">
              <p>
                While our current focus is on expanding our Software-as-a-Service (SaaS) ecosystem through a portfolio of industry-focused solutions, our long-term vision is to evolve into a leading Indian product-based technology company, creating impactful, scalable, and innovative digital products for users across India and global markets.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;