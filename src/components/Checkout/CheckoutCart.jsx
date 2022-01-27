import Container from "react-bootstrap/Container";
import FormCheckout from "./FormCheckout";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
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
          confirmButtonColor: "#440bd4",
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
        <div className="emptyCart">
          <h3>Aún no agregaste productos a tu carrito.</h3>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              navigate("/");
            }}
          >
            Ir al catálogo
          </button>
        </div>
      ) : (
        <Container className="form--cont">
          <div>
            <h3 className="title--resumen text-center">
              Resumen de su compra:
            </h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>x{item.quantity}</td>
                    <td>$ {item.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p className="final--price">Precio final: $ {totalPrice()}</p>
          </div>
          <h3 className="text-center title--formCheck">
            Completar los siguientes datos:
          </h3>
          <FormCheckout change={handleChange} send={generateOrder} />
        </Container>
      )}
    </>
  );
}

export default CheckoutCart;
