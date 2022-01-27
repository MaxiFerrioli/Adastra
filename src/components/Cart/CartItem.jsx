import { useCartContext } from "../../context/CartContext"
import './Cart.css';

function CartItem({prod}) {

  const { deleteItemCart } = useCartContext();
  
  return (
    <>
      <tr key={prod.id}>
        <td>
          <img src={prod.img} width={100} alt={prod.name} />
        </td>
        <td className="text--Cart">{prod.name}</td>
        <td className="text--Cart">$ {prod.price}</td>
        <td className="text--Cart">x {prod.quantity}</td>
        <td>
          <button
            className="btn btn-outline-danger btn--Delete"
            type="button"
            onClick={() => deleteItemCart(prod.id)}>
              X
          </button>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
