import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  query,
  documentId,
  getFirestore,
  Timestamp,
  updateDoc,
  where,
  writeBatch,
  getDocs,
} from "firebase/firestore";

function Cart() {
  const [idOrder, setIdOrder] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { cartList, borrarCarrito, precioTotal } = useCartContext();

  const handleChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  console.log(dataForm);

  const generateOrder = (e) => {
    e.preventDefault();

    //NUEVO OBJETO (ORDERS)
    let order = {};
    order.date = Timestamp.fromDate(new Date());
    order.buyer = dataForm;
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
      .catch((err) => console.log(err))
      .finally(() => {
        borrarCarrito();
        setDataForm({ name: "", email: "", phone: "" });
      });

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

    //ACTUALIZAR STOCK AUTOMATICAMENTE
    const collectionNoti = collection(db, "items");

    const queryUpdateStock = query(
      collectionNoti,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
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
  };

  return (
    <div>
      {idOrder.length !== 0 && idOrder}
      {cartList.map((prod) => (
        <li>
          {prod.name} {prod.quantity}
        </li>
      ))}
      <form onSubmit={generateOrder} onChange={handleChange}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={dataForm.name}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={dataForm.phone}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={dataForm.email}
        />
        <br />
        <button>Generar Orden</button>
      </form>
      <button onClick={borrarCarrito}>Vaciar Carrito</button>
    </div>
  );
}

export default Cart;
