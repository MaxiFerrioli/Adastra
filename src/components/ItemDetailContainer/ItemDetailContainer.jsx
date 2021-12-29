import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [prod, setProd] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getFetch
      .then((resp) => setProd(resp.find((prod) => prod.id === parseInt(id))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="border border-3 border-secondary">
          <ItemDetail prod={prod} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
