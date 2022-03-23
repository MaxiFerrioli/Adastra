import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="title-itemlist">
        <h1>Productos</h1>
      </div>
      <Dropdown className="dropdown-itemlist">
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Filtrar por categoría
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/category/hoodies">
            <Link to={"/"}>Todo</Link>
          </Dropdown.Item>
          <Dropdown.Item href="/category/hoodies">
            <Link to={"/category/hoodies"}>Hoodies</Link>
          </Dropdown.Item>
          <Dropdown.Item href="/category/remeras">
            <Link to={"/category/remeras"}>Remeras</Link>
          </Dropdown.Item>
          <Dropdown.Item href="/category/medias">
            <Link to={"/category/medias"}>Medias</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="itemlist-container">
        {items.map((items) => (
          <Item key={items.id} {...items} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
