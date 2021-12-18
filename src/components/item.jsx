import React from "react";

export function Item({ prod }) {
  return (
    <>
      <div key={prod.id} className="col-lg-10">
        <div className="card w-100 mt-5">
          <div className="card-header">
            {`${prod.name} - ${prod.categoria}`}
          </div>
          <div className="card-body">
            <img src={prod.foto} alt="" className="w-50" />
            {prod.price}
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-primary btn-block">
              detalle del producto
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
