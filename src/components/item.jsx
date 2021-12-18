import React from "react";
import "./index.css";

export function Item({ prod }) {
  return (
    <div className="display">
      <div key={prod.id} className="centrar display">
        <div>
          <div>{`${prod.name} - ${prod.categoria}`}</div>
          <div>
            <img src={prod.foto} alt="" className="widthFoto" />
          </div>
          {prod.price}
          <div>
            <button className="btn btn-outline-primary btn-block">
              detalle del producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
