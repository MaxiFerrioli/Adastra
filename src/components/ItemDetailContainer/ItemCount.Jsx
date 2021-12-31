import { useState } from "react";
// import { useCartContext } from '../../../context/CartContext'

function ItemCount({ stock = 1, onAdd }) {
  console.log("ItemCount");

  const [count, setCount] = useState(1);

  function sumar() {
    console.log("Sumar");
    if (count < stock) {
      setCount(count + 1);
    }
    // props.onAdd(count)
    console.log(count);
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleClick() {
    onAdd(count);
  }

  return (
    <div>
      <button onClick={restar}>-</button>
      <div>
        {count}
        {/* {props.count} */}
      </div>
      <button onClick={sumar}>+</button>
      <br />

      <button onClick={handleClick} disabled={number===0}>Agregar Carrito</button>
    </div>
  );
}

export default ItemCount;
