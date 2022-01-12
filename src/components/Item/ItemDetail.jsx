import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Counter from "../Counter";

const ItemDetail = ({ item }) => {
  const [goCart, setGoCart] = useState(false);

  const { cartList, agregarAlCarrito } = useCartContext()

  const onAdd = (cantidad) => {
    console.log(cantidad);
    setGoCart(true);
    agregarAlCarrito({ ...item, cantidad: cantidad });
  };
  console.log(cartList);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <div>
        <img width={600} src={item.img} alt="img" style={{ margin: "10px" }} />
      </div>
      <div style={{ width: "50%" }}>
        <h2>{item.name}</h2>
        <h3>$ {item.price}</h3>
        <h4 style={{ width: "70%" }}>{item.description}</h4>
        <Link to="/">Volver al home</Link>
      </div>
      {!goCart ? (
        <Counter stock={item.stock} onAdd={onAdd} />
      ) : (
        <Link to="/Cart">Ir al carrito</Link>
      )}
    </div>
  );
};

export default ItemDetail;
