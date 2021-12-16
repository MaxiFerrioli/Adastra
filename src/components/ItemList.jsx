import React from "react";
import Item from "./item";

function ItemList({ productos }) {
  return (
    <>
      {productos.map((prod) => (
        <Item prod={prod} />
      ))}
    </>
  );
}

export default ItemList;
