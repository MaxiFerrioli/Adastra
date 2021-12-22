import React from "react";
import "./index.css";

export function Item({ prod }) {
  return (
    <div className="">
      <div key={prod.id} className="centrar">
        <div>
          <div>{`${prod.name} - ${prod.categoria}`}</div>
          <div className="">
            <img src={prod.foto} alt="" className="widthFoto" />
          </div>
          <p>{prod.price}</p>
          <div>
            <button className="btn btn-outline-primary btn-block btnDetail">
              detalle del producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
