import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ img, price, id, name }) => {
  return (
    <div className="card text-dark bg-light itemPosition">
      <Link className="card-img-top" to={`/item/${id}`}>
        <img width="350px" src={img} alt="producto" />
      </Link>
      <div className="card-header">$ {price}</div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link className="btn btn-outline-secondary" to={`/item/${id}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;