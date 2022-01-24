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
import { useCartContext } from "../context/CartContext";
import { useState } from "react";

function Cart() {
  const [idOrder, setIdOrder] = useState("");
  const [dataForm, setDataForm] = useState({ name: "", email: "", phone: "" });
  const { cartList, deleteCart, totalPrice, deleteProd } = useCartContext();

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
        deleteCart();
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
        {cartList.length === 0 ? (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '70vh',
                }}
            >
                <h2>Aún no agregaste productos al carrito</h2>
                <Link to="/">
                    <button className="detail">Ir al catálogo</button>
                </Link>
            </div>
        ) : (
            <>
                {cartList?.map((prod) => (
                    <div key={prod.id} className="containerCart">
                        <img src={prod.img} alt={prod.name} />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '300px',
                            }}
                        >
                            <h3>{prod.name}</h3>
                            <h3>{prod.price}</h3>
                            <h3>Cantidad: {prod.cantidad}</h3>
                            <button onClick={() => deleteProd(prod.id)}>
                                X
                            </button>
                        </div>
                    </div>
                ))}
                <button onClick={deleteCart}>Vaciar Carrito</button>
                <h3>{totalPrice()}</h3>
            </>
        )}
    </>


  // return (
  //   <div>
  //     {idOrder.length !== 0 && idOrder}
  //     {cartList.length === 0 ? (
  //       <div>
  //         <h2>No hay producto en su carrito</h2>
  //         <Link to="/" className="btn btn-outnline-primary">
  //           Seguir Comprando
  //         </Link>
  //       </div>
  //     ) : (
  //       <div>
  //         {cartList.map((id) => (
  //           <div>
  //             <img width={160} src={id.img} alt="img" style={{ margin: "10px" }}/>
  //             {id.name} {id.quantity} 
  //             <button>X</button>
  //           </div>
  //         ))}
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
  //         <button onClick={deleteCart}>Vaciar Carrito</button>
  //       </div>
  //     )}
  //   </div>
  // );
  )}

export default Cart;
