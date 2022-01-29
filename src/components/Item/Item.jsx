import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ img, price, id, name }) => {
  return (
    <div className="card text-dark bg-light item--container">
      <div className="item--subContainer">
        <Link className="card-img-top cont--img" to={`/item/${id}`}>
          <img src={img} alt="producto" className="img--caracts" />
        </Link>
        <div className="card-header">$ {price}</div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link className="btn btn-outline-secondary" to={`/item/${id}`}>
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
