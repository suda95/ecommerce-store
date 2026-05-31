import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 && (
        <p>Cart is empty</p>
      )}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="cart-item"
        >
          <img
            src={item.image}
            alt={item.name}
          />

          <div>
            <h3>{item.name}</h3>

            <p>
              Qty:
              {item.quantity}
            </p>

            <p>
              {item.price} ETB
            </p>
          </div>

          <button
            onClick={() =>
              removeFromCart(
                item.id
              )
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h2>
  Total:
  {totalPrice} ETB
</h2>

{cartItems.length > 0 && (
  <Link to="/checkout">
    <button>
      Checkout
    </button>
  </Link>
)}
    </div>
  );
}

export default Cart;