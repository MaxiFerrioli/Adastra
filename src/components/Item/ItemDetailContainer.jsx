import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { traerProductos } from "./items";
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const { id } = useParams();

    // useEffect(() => {
    //     setLoading(true);
    //     traerProductos
    //         .then((res) => {
    //             const unicoProd = res.find((i) => i.id === parseInt(id));
    //             setItem(unicoProd);
    //             setLoading(false);
    //         }, 2000)
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [id]);

    useEffect(() => {        
        // getFetch
        //     .then(resp => setProd(resp.find(prod => prod.id === parseInt(id)))) 
        //     .catch(err => console.log(err))
        //     .finally(()=>setLoading(false))

            const db = getFirestore()
            const queryDb = doc(db, 'items', id)
            getDoc(queryDb)
            .then(resp => setItem( { id: resp.id, ...resp.data() } ))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
        // eslint-disable-next-line       
    },[]) 
    console.log(item)


    return <>{loading ? <h2>Cargando...</h2> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
