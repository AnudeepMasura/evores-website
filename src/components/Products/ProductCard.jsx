import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      className={`product-card ${
        product.featured ? "featured-card" : ""
      }`}
    >
      <div className="product-meta">
        <div className="sector-row">
          <div>
            <small>SECTOR</small>
            <h5>{product.sector}</h5>
          </div>

          {product.upcoming && (
            <span className="upcoming-badge">
              Upcoming
            </span>
          )}
        </div>

        <div className="model-row">
          <small>MODEL</small>
          <h5>{product.model}</h5>
        </div>
      </div>

      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <h3>{product.title}</h3>

      <p>{product.description}</p>

      <div className="buttons">
        {product.website && product.website !== "#" ? (
          <a href={product.website} target="_blank" rel="noopener noreferrer" className="btn-visit">
            VISIT WEBSITE
          </a>
        ) : (
          <a href="#" onClick={(e) => e.preventDefault()} className="btn-visit disabled">
            VISIT WEBSITE
          </a>
        )}
        <Link to={`/products/${product.slug}`} className="btn-learn">
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;