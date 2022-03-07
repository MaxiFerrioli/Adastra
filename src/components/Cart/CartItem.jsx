import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

function CartItem({ prod }) {
  const { deleteItemCart } = useCartContext();

  return (
    <>
      <div className="container-cartitem" key={prod.id}>
        <div>
          <img className="img-cart" src={prod.img} alt={prod.name} />
        </div>
        <div className="details-cartitem">
          <div className="name-and-delete">
            <div>{prod.name}</div>
            <button
              className="icon-delete-item"
              type="button"
              onClick={() => deleteItemCart(prod.id)}
            >
              <img
                alt="delete item"
                src="https://res.cloudinary.com/adastrashop/image/upload/v1646587971/eliminar-cruz_ls6dgy.png"
              ></img>
            </button>
          </div>
          <div className="quantity-cartitem">
            <span>Cantidad:</span> {prod.quantity}
          </div>
          <div className="price-cartitem">
            <b>$ {prod.price}</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
