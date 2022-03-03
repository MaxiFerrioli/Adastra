import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ img, price, id, name }) => {
  return (
    <div className="item-container">
      <section>
        <div className="img-container">
          <img alt="Imagen prenda" src={img} className="img-caracts"></img>
          <div className="middle">
            <Link to={`/item/${id}`}>
              <span className="go-to-detail">Ver detalle</span>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <h5>{name}</h5>
            <div className="item-price">$ {price}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Item;
