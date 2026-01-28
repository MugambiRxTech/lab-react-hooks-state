export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <div className="cardInfo">
        <p className="cardTitle">{product.name}</p>
        <p className="cardMeta">{product.category}</p>
      </div>

      <button
        className="btn"
        data-testid={"product-" + product.id}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
