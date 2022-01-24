import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { iconCart } = useCartContext();
  return (
    <>
      <label>
        <i className="fas fa-shopping-cart"></i>
      </label>
      <div>
        {iconCart()}
      </div>
    </>
  );
};

export default CartWidget;
