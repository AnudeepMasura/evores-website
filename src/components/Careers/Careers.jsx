import { Link } from "react-router-dom";
import "./Careers.css";

function Careers() {
  return (
    <section id="careers">
      <div className="container">

        <h2 className="section-title">
          Our <span>Careers</span>
        </h2>

        <div className="text-block">
          <p>
            We are constantly seeking brilliant minds to join our corporate journey.
          </p>

          <Link to="/careers" className="career-btn">
            View More
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Careers;
