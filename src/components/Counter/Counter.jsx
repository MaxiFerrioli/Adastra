import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Counter.css";

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
    <div className="containerCounter">
      <div className="d-flex justify-content-center" role="group">
        <button className="btn btn-outline-secondary" onClick={substract} type="button">
          -
        </button>
        <button className="btn btn-outline-secondary" type="button" disabled>
         {number}
        </button>
        <button className="btn btn-outline-secondary" onClick={add} disabled={number === stock} type="button">
          +
        </button>
      </div>
      <div className="btn--CounterDetail">
        <button className="btn btn-outline-secondary btn--Counter" onClick={() => {navigate("/");}}>
          Seguir comprando
        </button>
        <button className="btn btn-outline-secondary" disabled={number === 0} onClick={() => onAdd(number)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
