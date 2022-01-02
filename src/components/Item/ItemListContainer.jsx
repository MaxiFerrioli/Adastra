import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { products } from './items';
import { useParams } from 'react-router';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        traerProductos
            .then((res) => {
                const categorias = res.filter((i) => i.category === `${id}`);
                id === undefined ? setItems(res) : setItems(categorias);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return (
        <>
            <ItemList items={items} />
        </>
    );
};

export default ItemListContainer;