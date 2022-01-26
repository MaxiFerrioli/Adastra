import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "../Counter/Counter";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [goCart, setGoCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    setGoCart(true);
    addToCart({ ...item, quantity: quantity });
  };

  return (
    <div>
      <div>
        <img src={item.img} alt="img"/>
      </div>
      <div>
        <h2>{item.name}</h2>
        <h3>$ {item.price}</h3>
        <h4>{item.description}</h4>
      </div>
      {!goCart ? (
        <>
          {item.stock > 0 ? (
            <>
              <Counter stock={item.stock} onAdd={onAdd} />
            </>
          ) : (
            <Button onClick={() => {navigate("/");}}>Seguir comprando</Button>)
            }
        </>
      ) : (
        <>
          <Button onClick={() => {navigate("/")}}>Seguir comprando</Button>
          <Button onClick={() => {navigate("/Cart")}}>Ir al carrito</Button>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
