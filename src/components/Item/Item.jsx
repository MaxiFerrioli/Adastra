import { Link } from "react-router-dom";

const Item = ({ img, price, id}) => {
  return (
    <div>
      <Link to={`/item/${id}`}>
        <img width="300px" src={img} alt="producto" />
      </Link>
      <p>{price}</p>
    </div>
    )
}

export default Item;
