import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDb = doc(db, "items", id);
    getDoc(queryDb)
      .then((resp) => setItem({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  console.log(item);

  return <>{loading ? <Loader /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
