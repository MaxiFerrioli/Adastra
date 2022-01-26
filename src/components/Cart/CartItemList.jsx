import {
  addDoc,
  collection,
  query,
  documentId,
  getFirestore,
  Timestamp,
  where,
  writeBatch,
  getDocs,
} from "firebase/firestore";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import './Cart.css'
import CartItem from './CartItem';

function CartItemList() {
  const [idOrder, setIdOrder] = useState("");
  const [dataForm, setDataForm] = useState({ name: "", email: "", phone: "" });
  const { cartList, clearCart, totalPrice, deleteItemCart } = useCartContext();

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const generateOrder = (e) => {
    e.preventDefault();

    let order = {};
    order.date = Timestamp.fromDate(new Date());
    order.buyer = dataForm;
    order.total = totalPrice();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price * cartItem.quantity;
      return { id, name, price };
    });

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((resp) => setIdOrder(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        clearCart();
        setDataForm({ name: "", email: "", phone: "" });
      });

    const collectionNoti = collection(db, "items");

    const queryUpdateStock = query(
      collectionNoti,
      where(
        documentId(),
        "in",
        cartList.map((i) => i.id)
      )
    );

    const batch = writeBatch(db);

    getDocs(queryUpdateStock).then((resp) =>
      resp.docs.forEach((res) =>
        batch.update(res.ref, {
          stock:
            resp.data().stock -
            cartList.find((item) => item.id === resp.id).quantity,
        })
      )
    );
    batch.commit();
  }

  return (
    <>
       {/* {idOrder.length !== 0 && idOrder} */}
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
                    <Link to="/checkout"><button className="btn btn-outline-secondary buttons--Finish">Finalizar compra</button></Link> 
                  </div>
                </div>
            </div>
    </>





























  //         <form onSubmit={generateOrder} onChange={handleChange}>
  //           <input
  //             type="text"
  //             name="name"
  //             placeholder="Nombre"
  //             value={dataForm.name}
  //           />
  //           <br />
  //           <input
  //             type="text"
  //             name="phone"
  //             placeholder="Tel"
  //             value={dataForm.phone}
  //           />
  //           <br />
  //           <input
  //             type="email"
  //             name="email"
  //             placeholder="Email"
  //             value={dataForm.email}
  //           />
  //           <input type="text" placeholder="Confirme el mail " name="email2" />
  //         <br/>
  //           <button>Generar Orden</button>
  //         </form>

  )}

export default CartItemList;
