import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

function CartItem({ prod }) {
  const { deleteItemCart } = useCartContext();

  return (
    <>
      <tr key={prod.id}>
        <td>
          <img className="img-cart" src={prod.img} alt={prod.name} />
        </td>
        <td className="td-desktop">{prod.category}</td>
        <td>$ {prod.price}</td>
        <td>x {prod.quantity}</td>
        <td>
          <button
            className="icon-delete-item"
            type="button"
            onClick={() => deleteItemCart(prod.id)}
          >
            <img
              alt="delete item"
              src="https://res.cloudinary.com/adastrashop/image/upload/v1646420974/tacho-de-basura_rrkbnf.png"
            ></img>
          </button>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
