import "./Products.css";
import ProductCard from "./ProductCard";
import products from "../../data/products";

function Products() {
  return (
    <section id="products" className="products-section">
      <div className="container">

        <h2 className="section-title">
          Our <span>Products</span>
        </h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;