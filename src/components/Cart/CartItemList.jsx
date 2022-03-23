import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import "./Cart.css";

function CartItemList() {
  const { cartList, clearCart, totalPrice, cartCounter } = useCartContext();

  return (
    <>
      <div className="title-cartitemlist">
        <h1>TU CARRITO</h1>
      </div>
      <div className="container-cartitemlist">
        <div className="subcontainer-cartitemlist">
          {cartList.map((prod) => (
            <CartItem key={prod.id} prod={prod} />
          ))}
          <div>
            <h3 className="title-total-price">
              Precio total: $ {totalPrice()}
            </h3>
            <div className="btn-position">
              <div>
                <button className="btn-clear-cart" onClick={clearCart}>
                  Vaciar carrito
                </button>
                <Link to="/checkoutCart">
                  <button className="btn-finish">Ir a pagar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-resumen-cil">
          <Link to="/checkoutCart">
            <button className="btn-finish">Ir a pagar</button>
          </Link>
          <div>
            <h5>RESUMEN DEL PEDIDO</h5>
            <div className="resumen-cil1">
              <span>Productos:</span>
              <span>{cartCounter()}</span>
            </div>
            <div className="resumen-cil2">
              <span>Entrega:</span>
              <span>Gratis</span>
            </div>
            <div className="resumen-cil3">
              <span>Total:</span>
              <span>$ {totalPrice()}</span>
            </div>
            <div>
              <input
                className="input-code-promo"
                placeholder="Código promocional"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItemList;
