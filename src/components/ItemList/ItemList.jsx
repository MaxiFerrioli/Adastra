import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="itemlist-container">
        {items.map((items) => (
          <Item key={items.id} {...items} />
          ))}
      </div>
    </>
  );
};

export default ItemList;