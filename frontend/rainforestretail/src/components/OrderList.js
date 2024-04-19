import Order from "./Order";
import React from 'react';

const OrderList = ({ basketList, removeFromBasket }) => {
    const basketComponents = basketList.map(basketItem => {
        return <li key={basketItem.item.id}>
            <Order item={basketItem.item} orderQuantity={basketItem.orderQuantity} />
            <button onClick={() => handleRemoveItem(basketItem.item.id)}>Remove</button>
        </li>
    })

    const handleRemoveItem = (itemId) => {
        removeFromBasket(itemId);
    };

    return (
        <>
            <div className="basketList">
                <ul>
                    {basketComponents}
                </ul>
            </div>
        </>
    );
}

export default OrderList;
