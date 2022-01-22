import React, { useState, useEffect, useContext } from "react";
import ItemList from "./ItemList";
import { traerProductos } from "./items";
import { useParams } from "react-router";
import {
  collection,
  doc,
  Firestore,
  getDoc,
  getFirestore,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = query(collection(db, "items"));
    //, where('price','>', 0), limit (10)//
    getDocs(queryCollection)
      .then((resp) =>
        setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return <>{loading ? <h2>Cargando...</h2> : <ItemList items={items} />}</>;
};

export default ItemListContainer;

// SIN FIREBASE
// useEffect(() => {
//   setLoading(true)
//   traerProductos
//     .then((res) => {
//       const categorias = res.filter((i) => i.category === `${id}`);
//       id === undefined ? setItems(res) : setItems(categorias);
//       setLoading(false)
//     })
//     .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);
