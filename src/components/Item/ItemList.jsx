import { memo } from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "80%",
          margin: "0 auto",
        }}
      >
        {items.map((items) => (
          <Item key={items.id} {...items} />
        ))}
      </div>
    </>
  )
}

export default ItemList;
