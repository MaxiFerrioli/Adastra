import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    maxWidth: '80%',
                    margin: '0 auto',
                }}
            >
                {items.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default ItemList;