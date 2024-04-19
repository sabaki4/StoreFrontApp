import React, { useContext } from 'react';
import { userState } from '../containers/StoreContainer';

const YourOrder = ({ orders }) => {
    const { activeCustomer } = useContext(userState);


    const filteredOrders = orders.filter(order => order.customer.id === activeCustomer.id);
    console.log(filteredOrders);

    return (

        <div className='cartContainer'>
            <h1>Whats in your basket:</h1>

            {filteredOrders.length > 0 ? (
                filteredOrders.map(order => (
                    <div key={order.id}>
                        <h3>Ordered Items:</h3>
                        <ul>
                            {order.orderedItems.map(orderedItem => (
                                <li key={orderedItem.id}>
                                    {orderedItem.item.name} - Quantity: {orderedItem.orderedQuantity}
                                </li>
                            ))}
                        </ul>
                        <p>Address: {order.address}</p>
                    </div>
                ))
            ) : (
                <p>No orders found for the active customer.</p>
            )}
        </div>
    );
};

export default YourOrder;
