import { useState, useEffect } from "react";
import { getFetch } from "../helpers/getFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCate } = useParams();

  useEffect(() => {
    if (idCate) {
      getFetch
        .then((resp) =>
          setProductos(resp.filter((prod) => prod.categoria === idCate))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idCate]);

  console.log(idCate);

  return (
    <>
      {greeting}
      {loading ? (
        <div class="spinner-border"></div>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
}

export default ItemListContainer;
