export default function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <p>{product.name}</p>
      <button
        data-testid={"product-" + product.id}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
