import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  Timestamp,
  updateDoc,
  writeBatch,
} from "firebase/firestore";

function Cart() {
  const [idOrder, setIdOrder] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { cartList, borrarCarrito, precioTotal } = useCartContext();

  const generateOrder = (e) => {
    e.preventDefault();

    let order = {};

    order.date = Timestamp.fromDate(new Date());
    order.buyer = { name: "pepe", tel: "12345678", email: "kokito@gmail.com" };
    order.total = precioTotal();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price * cartItem.quantity;

      return { id, name, price };
    });

    const db = getFirestore();

    // GENERAR ORDEN
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((resp) => setIdOrder(resp.id))
      .catch((err) => console.log(err));

    //MODIFICAR UN ITEM
    //   const db = getFirestore();
    // const docModi = doc(db, "items", "2i8nUhtF29cervXEvG4z");
    //   updateDoc(docModi, {
    //     stock: 100,
    //   });

    //ESCRITURA POR LOTES (MODIFICAR DE A VARIOS)
    // const docModi = doc(db, "items", "2i8nUhtF29cervXEvG4z");
    // const docModi1 = doc(db, "items", "2lSlpjRCfHEspW0XUH25");
    // const batch = writeBatch(db);
    // batch.update(docModi, {
    //   stock: 90,
    // });
    // batch.update(docModi1, {
    //   stock: 50,
    // });
    // batch.commit();
  };

  return (
    <div>
      {idOrder.length !== 0 && idOrder}
      {cartList.map((prod) => (
        <li>
          {prod.name} {prod.quantity}
        </li>
      ))}
      <form onSubmit={generateOrder}>
        <button>Generar Orden</button>
      </form>
      <button onClick={borrarCarrito}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;
