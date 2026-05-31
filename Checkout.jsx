import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cartItems, totalPrice } =
    useContext(CartContext);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      address: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Order placed successfully, ${formData.name}!`
    );
  };

  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h2>Checkout</h2>

        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Shipping address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
          >
            Place Order
          </button>
        </form>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
          >
            <p>
              {item.name} ×
              {item.quantity}
            </p>
          </div>
        ))}

        <h3>
          Total:
          {totalPrice} ETB
        </h3>
      </div>
    </div>
  );
}

export default Checkout;