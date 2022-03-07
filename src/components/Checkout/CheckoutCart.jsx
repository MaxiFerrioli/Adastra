import FormCheckout from "./FormCheckout";
import Swal from "sweetalert2";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import "../Cart/Cart.css";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  Timestamp,
  where,
  writeBatch,
} from "firebase/firestore";

function CheckoutCart() {
  const { cartList, clearCart, totalPrice, dataForm, setDataForm } =
    useCartContext();
  const [orderId, setOrderId] = useState();
  const navigate = useNavigate();

  const generateOrder = (e) => {
    e.preventDefault();

    let order = {};
    order.date = Timestamp.fromDate(new Date());
    order.buyer = dataForm;
    order.total = totalPrice();
    order.products = cartList.map((item) => {
      const id = item.id;
      const name = item.name;
      const quantity = item.quantity;
      const total = item.price * item.quantity;
      return { id, name, quantity, total };
    });

    const db = getFirestore();
    const oufOfStock = [];
    const batch = writeBatch(db);
    const collectionUpdate = collection(db, "products");
    const stockCurrent = query(
      collectionUpdate,
      where(
        documentId(),
        "in",
        cartList.map((p) => p.id)
      )
    );

    getDocs(stockCurrent).then((resp) => {
      resp.docs.forEach((route) => {
        const item = cartList.find((items) => items.id === route.id);
        if (route.data().stock >= item.quantity) {
          batch.update(route.ref, {
            stock: route.data().stock - item.quantity,
          });
        } else {
          oufOfStock.push(item);
        }
      });

      if (oufOfStock.length === 0) {
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
          .then((resp) => {
            batch.commit();
            setOrderId(resp.id);
          })
          .catch((error) => console.log(error))
          .finally(() => {
            setDataForm({ name: "", email: "", emailConfirm: "", phone: "" });
            clearCart();
          });
      } else {
        Swal.fire({
          title: "Productos sin stock en el carrito!",
          icon: "warning",
          confirmButtonText: "Ok",
          confirmButtonColor: "#rgb(61, 230, 100)",
        });
      }
    });
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  if (orderId) {
    return (
      <div className="text-center">
        <h2>¡Gracias por su compra!</h2>
        <p>
          Número de orden: <strong>{orderId}</strong>.
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-outline-secondary"
        >
          Volver a la tienda
        </button>
      </div>
    );
  }

  return (
    <>
      {cartList.length === 0 ? (
        <div className="container-check emptyCart">
          <div>
            <img
              alt="Carrito vacio icono"
              src="https://res.cloudinary.com/adastrashop/image/upload/v1646423685/compra_bjukon.png"
            ></img>
          </div>
          <h3>Aún no agregaste productos a tu carrito.</h3>
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              navigate("/");
            }}
          >
            Ir al catálogo
          </button>
        </div>
      ) : (
        <div className="container-formCheck">
          <FormCheckout change={handleChange} send={generateOrder} />
        </div>
      )}
    </>
  );
}

export default CheckoutCart;
