
const Order = ({ item, orderQuantity }) => {
    return (
        <div className="orders">
            <div className="thumbnail">
                <img src={item.picture} />
                <h4> {item.name}</h4>
                <p>Quantity: {orderQuantity}</p>
            </div>
        </div>
    );
}

export default Order;