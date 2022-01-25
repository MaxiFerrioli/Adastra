import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartCounter } = useCartContext();

  return (
    <>
      <label>
        <i className="fas fa-shopping-cart"></i>
      </label>
      <div>{cartCounter()}</div>
    </>
  );
};

export default CartWidget;
