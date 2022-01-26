import { Link } from "react-router-dom";

const Item = ({ img, price, id, name}) => {

  return (
    <div className="card">
      <Link className="card-img-top" to={`/item/${id}`}>
        <img width="350px" src={img} alt="producto" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price}</p>
        <Link className="btn btn-primary" to={`/item/${id}`}>Go somewhere</Link>
      </div>
    </div>
  );
};

export default Item;

