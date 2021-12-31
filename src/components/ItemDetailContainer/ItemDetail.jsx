import { useState } from "react";
// import { CartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount";
import { Col, Row } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

function ItemDetail({ prod }) {
  const [count, setCount] = useState(0);

  const { cartList, agregarAlCarrito } = useCartContext();

  function onAdd(cant) {
    console.log(cant);
    agregarAlCarrito({ ...prod, cantidad: cant });
    // agregarAlCarrito( prod, cant )
  }

  console.log(cartList);
  return (
    <Row>
      <label>Soy el desdftalle</label>
      <Col>
        <div>
          <div className="container">
            <label>{prod.title}</label>
          </div>
          <div className="container">
            <img src={prod.foto} className="w-800" alt="foto" />
            <br />
            <label>{prod.description}</label>
            <br />
            <label>{prod.categoria}</label>
          </div>
          <div className="container">
            <label>{prod.price}</label>
          </div>
        </div>
      </Col>
      <Col>
        <ItemCount stock={6} />
      </Col>
    </Row>
  );
}

export default ItemDetail;
