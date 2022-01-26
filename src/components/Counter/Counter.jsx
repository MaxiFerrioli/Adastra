import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = ({ stock, onAdd }) => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(1);

  const add = () => {
    number !== stock && setNumber(number + 1);
  };
  const substract = () => {
    number !== 0 && setNumber(number - 1);
  };

  return (
    <div style={{ width: "70%" }}>
      <p>{number}</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <button onClick={substract}>-</button>
          <button onClick={add} disabled={number === stock}>
            +
          </button>
        </div>
        <button disabled={number === 0} onClick={() => onAdd(number)}>
          Agregar al carrito
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Seguir comprando
        </button>
      </div>
    </div>
  );
};

export default Counter;
