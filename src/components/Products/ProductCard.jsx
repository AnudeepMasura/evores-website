function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-meta">

        <div>

          <small>SECTOR</small>

          <h5>{product.sector}</h5>

        </div>

        <div>

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

        <a href={product.website}>View Website</a>

        <a href="#">Learn More</a>

      </div>

    </div>
  );
}

export default ProductCard;