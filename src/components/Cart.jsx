export default function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <div className="cartList">
          {cartItems.map((item) => (
            <p key={item.id} className="cartItem">
              {item.name} is in your cart
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
