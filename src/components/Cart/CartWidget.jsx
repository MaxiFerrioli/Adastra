import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

const CartWidget = () => {
  const { cartCounter, cartList } = useCartContext();

  return (
    <>
      <div className="cart--btn-container">
        <i className="fas fa-shopping-cart cart--btn"></i>
        <span
          className="cart--counter"
          style={{ visibility: cartList.length === 0 ? "hidden" : "visible" }}
        >
          {cartCounter()}
        </span>
      </div>
    </>
  );
};

export default CartWidget;
