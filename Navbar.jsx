import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cartItems } =
    useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/">
        Store
      </Link>

      <Link to="/cart">
        Cart (
        {cartItems.length}
        )
      </Link>
    </nav>
  );
}

export default Navbar;