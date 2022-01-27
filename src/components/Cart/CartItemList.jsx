import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import CartItem from './CartItem';
import './Cart.css'

function CartItemList() {
  const { cartList, clearCart, totalPrice } = useCartContext();

  return (
    <>
       <h2 className="title--Cart">Carrito de compras</h2>
            <div className="table--Container">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th className="" scope="col"></th>
                      <th className="" scope="col">Name</th>
                      <th className="" scope="col">Price</th>
                      <th className="" scope="col">Quantity</th>
                      <th className="" scope="col">Remove</th>
                    </tr>
                  {cartList.map((prod) => <CartItem key={prod.id} prod={prod} />)}                    
                  </thead>
                  <tbody>
                  </tbody>
                </table>
                <h3 className="title--TotalPrice">Precio total: $ {totalPrice()}</h3>
                <div className="buttons--Position">
                  <div>
                    <Link to="/"><button className="btn btn-outline-secondary">Volver a la tienda</button></Link> 
                  </div>
                  <div>
                    <button className="btn btn-outline-secondary" onClick={clearCart}>Vaciar Carrito</button>
                    <Link to="/checkoutCart"><button className="btn btn-outline-secondary buttons--Finish">Finalizar compra</button></Link> 
                  </div>
                </div>
            </div>
    </>
  )}

export default CartItemList;
