import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = ({ stock, onAdd }) => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(1);

  return (
    <div className="">
      <div className="">
        <div className="" role="group">
        </div>
        <button
          className=""
          disabled={number === 0}
          onClick={() => onAdd(number)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
