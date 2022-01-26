import CartItemList from "./CartItemList";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function CartContainer() {
  const { cartList } = useCartContext();
  const navigate = useNavigate();

  return (
    <>
      {cartList.length === 0 ? (
        <div className="emptyCart">
          <h3>Aún no agregaste productos a tu carrito.</h3>
          <button className="btn btn-outline-secondary" onClick={() => {navigate("/")}}>
            Ir al catálogo
          </button>
        </div>
      ) : (<CartItemList />)}
    </>
  );
}

export default CartContainer;
