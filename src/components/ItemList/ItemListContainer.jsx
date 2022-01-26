import {collection, getFirestore, getDocs, query, where} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = id
      ? query(collection(db, "items"), where("category", "==", id))
      : query(collection(db, "items"));

    getDocs(queryCollection)
      .then((resp) => setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() }))))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return <>{loading ? (<Loader textLoad='Cargando productos'/>) : <ItemList items={items}/>}</>;
};

export default ItemListContainer;