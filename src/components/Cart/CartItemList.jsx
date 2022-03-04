import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import "./Cart.css";

function CartItemList() {
  const { cartList, clearCart, totalPrice } = useCartContext();

  return (
    <>
      <h2 className="title-cart">Carrito de compras</h2>
      <div className="table-container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Vista previa</th>
              <th className="th-desktop" scope="col">Categoría</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Quitar</th>
            </tr>
            {cartList.map((prod) => (
              <CartItem key={prod.id} prod={prod} />
            ))}
          </thead>
        </table>
        <h3 className="title-total-price">Precio total: $ {totalPrice()}</h3>
        <div className="btn-position">
          <div>
            <Link to="/">
              <button className="btn-back-shop">
                <img alt="Volver" title="Volver" src="https://res.cloudinary.com/adastrashop/image/upload/v1646420619/volver_qd3wkz.png"></img>
              </button>
            </Link>
          </div>
          <div>
            <button className="btn-clear-cart" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <Link to="/checkoutCart">
              <button className="btn-finish">
                Finalizar compra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItemList;
