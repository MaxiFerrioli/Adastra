import { useState, useEffect } from "react";
import getOneProduct from "../services/getOneProduct";
import ItemDetail from "./ItemDetail";
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  console.log("item", item);

  useEffect(() => {
    getOneProduct.then((res) => setItem(res)).catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>ITEMDETAILCONTAINER</h1>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
