import React, { useState } from "react";

const ItemCount = () => {
  
  const inicial = 1;
  const maximo = 10;
  
  const [count, setCount] = useState(inicial);

  const clickSuma = () => {
    count < maximo ? setCount(count + 1) : alert ('Compra maxima por persona')
    // if (count < maximo) {setCount(count + 1);}
  };

  const clickResta = () => {
    count > inicial &&
    setCount(count - 1);
  };
  
  const reset = () => {
    setCount (inicial)
  }

  return (
    <>
      <h1>{count}</h1>
      <p>
        <button onClick={clickSuma}>Agregar</button>
        <button onClick={clickResta}>Quitar</button>
        <button onClick={reset}>Reset</button>
      </p>
    </>
  );
};

export default ItemCount;
