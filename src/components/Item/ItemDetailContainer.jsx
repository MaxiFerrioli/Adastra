import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { traerProductos } from './items';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        traerProductos
            .then((res) => {
                const unicoProd = res.find((i) => i.id === parseInt(id));
                setItem(unicoProd);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return <>{loading ? <h1>Cargando...</h1> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;