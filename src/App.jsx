import { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import "./App.css";

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
      <header className="topbar">
        <div className="brand">
          <h1 className="title">GreenGrocer</h1>
          <p className="subtitle">Simple shopping list with cart</p>
        </div>

        <div className="actions">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Dairy">Dairy</option>
            <option value="Fruits">Fruits</option>
            <option value="Bakery">Bakery</option>
          </select>
        </div>
      </header>

      <main className="layout">
        <section className="panel">
          <h2 className="sectionTitle">Products</h2>
          <ProductList products={filteredProducts} onAddToCart={addToCart} />
        </section>

        <section className="panel">
          <Cart cartItems={cartItems} />
        </section>
      </main>
    </div>
  );
}
