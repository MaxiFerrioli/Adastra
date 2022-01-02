import React from 'react';

const CartDetail = ({ item }) => {
    return (
        <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
    );
};

export default CartDetail;