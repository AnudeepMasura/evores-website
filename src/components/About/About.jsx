import "./About.css";

function About() {
  return (
    <section className="about-mission-section">
      <div className="container">
        
        <div className="about-mission-grid">
          
          {/* ABOUT US CARD COLUMN */}
          <div id="about" className="about-card-box">
            <h2 className="section-title">
              About <span>US</span>
            </h2>
            <div className="text-block">
              <p>
                EvoRES Technology LLP is a technology company based in Vijayawada, India, building digital products and cloud-based platforms for businesses and consumers. We create affordable, easy-to-use software that helps businesses of all sizes manage their operations, improve productivity, and grow faster. Our focus is on developing scalable web and mobile solutions that solve real business problems through modern technology.
              </p>
              <p>
                Along with business software, we are building technology-driven platforms across industries such as fashion, retail, logistics, mobility, e-commerce, food commerce, and other everyday consumer services. Our vision is to create a connected ecosystem of products that simplifies daily life, improves customer experiences, and helps businesses and people work smarter through innovative solutions that challenge traditional workflows.
              </p>
            </div>
          </div>

          {/* MISSION CARD COLUMN */}
          <div id="mission" className="mission-card-box">
            <h2 className="section-title">
              Our <span>Mission</span>
            </h2>
            <div className="text-block">
              <p>
                While our current focus is on building affordable and powerful Software-as-a-Service (SaaS) solutions for businesses, we are also developing marketplace and consumer-focused digital platforms across multiple industries. Our products are designed to simplify business operations, improve customer experiences, and make technology accessible to everyone.
              </p>
              <p>
                Our long-term vision is to become one of India's largest product-based technology companies by building a complete ecosystem of digital products and cloud services. We aim to offer Software-as-a-Service (SaaS), Platform-as-a-Service (PaaS), and Infrastructure-as-a-Service (IaaS) solutions for businesses, developers, and consumers across India and global markets.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;