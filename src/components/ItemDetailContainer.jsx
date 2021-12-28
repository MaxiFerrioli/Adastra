import { useState, useEffect } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  console.log("item", item);

  useEffect(() => {
    getFetch.then((res) => setItem(res)).catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>ITEM DETAIL CONTAINER</h1>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
