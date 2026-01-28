import { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  function addToCart(product) {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}
