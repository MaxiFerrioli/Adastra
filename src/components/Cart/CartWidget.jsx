import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartCounter, cartList } = useCartContext();

  return (
    <>
      <div>
      <i className="fas fa-shopping-cart"></i>
      <span style={{ visibility: cartList.length === 0 ? "hidden" : "visible" }}>{cartCounter()}</span>
      </div>
    </>
  );
};

export default CartWidget;