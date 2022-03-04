import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "../Counter/DetailCounter/Counter";
import "./ItemDetail.css";
import Swal from "sweetalert2";
import Modals from "./ModalsContainer/Modals";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [goCart, setGoCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    setGoCart(true);
    addToCart({ ...item, quantity: quantity });

    Swal.fire({
      title: "¡Agregaste un nuevo producto!",
      text: `Agregaste: ${item.name}. Cantidad: ${quantity}.`,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "rgb(61, 230, 100)",
    });
  };

  return (
    <div className="container-detail">
      <section className="section-detail">
        <div className="mobile-name-price">
          <h1>{item.name}</h1>
          <h3>$ {item.price}</h3>
        </div>
        <div>
          <img className="img-detail" src={item.img} alt="img" />
        </div>
        <article className="article-detail">
          <div className="item-detail">
            <div className="desktop-name-price">
              <h2>{item.name}</h2>
              <h3>$ {item.price}</h3>
            </div>
            <div className="container-description">
              <h4>Descripción:</h4>
              <label>{item.description}</label>
            </div>
            <Modals item={item} />
          </div>
          <div className="item-detail2">
            {!goCart ? (
              <div>
                {item.stock > 0 ? (
                  <>
                    <Counter stock={item.stock} onAdd={onAdd} />
                  </>
                ) : (
                  <button
                    className=""
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Seguir comprando
                  </button>
                )}
              </div>
            ) : (
              <div className="container-btn-after-buy">
                <button
                  className="btn-keepb-gocart"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Seguir comprando
                </button>
                <button
                  className="btn-keepb-gocart"
                  onClick={() => {
                    navigate("/CartItemList");
                  }}
                >
                  Ir al carrito
                </button>
              </div>
            )}
          </div>
        </article>
      </section>
    </div>
  );
};

export default ItemDetail;
