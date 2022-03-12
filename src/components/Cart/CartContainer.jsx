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
          <div>
            <img
              alt="Carrito vacio icono"
              src="https://res.cloudinary.com/adastrashop/image/upload/v1646423685/compra_bjukon.png"
            ></img>
          </div>
          <h3>Aún no agregaste productos a tu carrito.</h3>
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              navigate("/");
            }}
          >
            Ir al catálogo
          </button>
        </div>
      ) : (
        <div className="cartitemlist">
          <CartItemList />
        </div>
      )}
    </>
  );
}

export default CartContainer;
