import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Side */}
        <div className="footer-left">

          <div className="footer-heading-label">
            CONTACT
          </div>

          <h2>
            Get in touch.
          </h2>

          <div className="contact-details">

            <div className="contact-item">
              <span>DIRECT LINE</span>
              <p>+91 9912544545</p>
            </div>

            <div className="contact-item">
              <span>GSTIN</span>
              <p>37AAMFE8739J1ZQ</p>
            </div>

            <div className="contact-item">
              <span>CORRESPONDENCE</span>
              <p>evorestechnologysocial@gmail.com</p>
            </div>

            <div className="contact-item">
              <span>HQ</span>
              <p>Vijayawada, Andhra Pradesh, India</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="footer-right">

          <div className="social-section">

            <span>SOCIAL HANDLES</span>

            <div className="social-links">

              <a
                href="#"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                ◎
              </a>

            </div>

          </div>

          <div className="copyright">
            ©2026 EvoRES Technology LLP
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;