import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Apple", category: "Fruits" },
  { id: 3, name: "Bread", category: "Bakery" },
];

export default function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p className="empty">No products available</p>;
  }

  return (
    <div className="list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
