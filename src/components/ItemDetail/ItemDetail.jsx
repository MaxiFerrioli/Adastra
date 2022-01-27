import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "../Counter/Counter";
import "./ItemDetail.css";
import Swal from 'sweetalert2';

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [goCart, setGoCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    setGoCart(true);
    addToCart({ ...item, quantity: quantity });
    
    Swal.fire({
      title: '¡Agregaste un nuevo producto!',
      text: `Agregaste: ${item.name}. Cantidad: ${quantity}.`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#440bd4'
  })
  };

  return (
    <div className="containerDetail">
      <section className="sectionDetail">
        <div>
          <img width="600px" src={item.img} alt="img" />
        </div>
        <article className="articleDetail">
          <div className="itemDetail">
            <h2>{item.name}</h2>
            <h3>$ {item.price}</h3>
            <h4>{item.description}</h4>
          </div>
          {!goCart ? (
            <div>
              {item.stock > 0 ? (
                <>
                  <Counter stock={item.stock} onAdd={onAdd} />
                </>
              ) : (
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {navigate("/");}}>
                  Seguir comprando
                </button>
              )}
            </div>
          ) : (
            <div>
              <button
                className="btn btn-outline-secondary btn--ItemDetail"
                onClick={() => {navigate("/");}}>
                Seguir comprando
              </button>
              <button
                className="btn btn-outline-secondary btn--ItemDetail"
                onClick={() => {navigate("/CartItemList");}}>
                Ir al carrito
              </button>
            </div>
          )}
        </article>
      </section>
    </div>
  );
};

export default ItemDetail;
