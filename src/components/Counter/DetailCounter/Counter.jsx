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
    <div className="container-counter">
      <div className="subcontainer-counter">
        <div className="container-signs" role="group">
          <button className="number-counter" type="button" disabled>
            {number}
          </button>
          <span className="sign-counter">
            <button
              className="sign-button"
              onClick={add}
              disabled={number === stock}
              type="button"
            >
              +
            </button>
            <button
              className="sign-button"
              onClick={substract}
              disabled={number === 0}
              type="button"
            >
              -
            </button>
          </span>
        </div>
        <button
          className="btn-add"
          disabled={number === 0}
          onClick={() => onAdd(number)}
        >
          Agregar al carrito
        </button>
      </div>
      <button
        className="btn-back"
        onClick={() => {
          navigate("/");
        }}
      >
        Seguir comprando
      </button>
    </div>
  );
};

export default Counter;
