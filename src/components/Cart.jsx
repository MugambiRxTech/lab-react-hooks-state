export default function Cart({ cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <p key={item.id}>{item.name} is in your cart</p>
      ))}
    </div>
  );
}
