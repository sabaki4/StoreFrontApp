import Navigation from "../components/Navigation";
import Registration from "../components/Registration";
import Login from "../components/Login"
import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import LandingPageContainer from "./LandingPageContainer";
import Item from "../components/Item";
import BrowseItemsContainer from "./BrowseItemsContainer";
import ShoppingCart from "./ShoppingCartContainer";
import OrderList from "../components/OrderList";
import YourOrder from "../components/YourOrder";

export const userState = React.createContext();

const StoreContainer = () => {
    const [customers, setCustomers] = useState([]);
    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [purchaseList, setPurchaseList] = useState([]);
    const [basketList, setBasketList] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);
    const [currentOrder, setCurrentOrder] = useState({});

    const [activeCustomer, setActiveCustomer] = useState({});
    const [registerCustomer, setRegisterCustomer] = useState({});

    const fetchCustomers = async () => {
        const response = await fetch('http://localhost:8080/customers');
        const data = await response.json();
        setCustomers(data);
    }

    const fetchItems = async () => {
        const response = await fetch('http://localhost:8080/items');
        const data = await response.json();
        setItems(data);
    }

    const fetchOrders = async () => {
        const response = await fetch('http://localhost:8080/orders');
        const data = await response.json();
        setOrders(data);
    }

    const fetchReviews = async () => {
        const response = await fetch('http://localhost:8080/reviews');
        const data = await response.json();
        setReviews(data);
    }

    const fetchOrderedItems = async () => {
        const response = await fetch('http://localhost:8080/ordered-items');
        const data = await response.json();
        setOrderedItems(data);
    }

    const postCustomer = async (newCustomer) => {
        const response = await fetch("http://localhost:8080/customers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCustomer)
        });
        fetchCustomers();
    }

    const postOrder = async (newOrder) => {
        const response = await fetch("http://localhost:8080/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrder)
        });
        const data = await response.json();
        setCurrentOrder(data);
        fetchOrders();
    }

    const postOrderedItems = async (newOrderedItem) => {
        const response = await fetch("http://localhost:8080/ordered-items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrderedItem)
        })
        const savedNewOrderedItem = await response.json();
        fetchOrderedItems();
    }

    const patchOrderedItems = async (newOrderedItem) => {
        const response = await fetch("http://localhost:8080/ordered-items", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrderedItem)
        })
        const savedNewOrderedItem = await response.json();
        fetchOrderedItems();
    }

    const postReview = async (newReview) => {
        const response = await fetch("http://localhost:8080/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview)
        });
        fetchItems();
    }

    const patchReview = async (amendedReview, reviewId) => {
        const response = await fetch(`http://localhost:8080/reviews/${reviewId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(amendedReview)
        });
        fetchReviews();
        fetchItems();
    }

    const deleteReview = async (reviewId) => {
        const response = await fetch(`http://localhost:8080/reviews/${reviewId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviewId)
        });
        fetchItems();
    }

    useEffect(() => {
        fetchCustomers();
        fetchItems();
        fetchOrders();
        fetchReviews();
        fetchOrderedItems();
    }, [])

    const itemLoader = ({ params }) => {
        return items.find(item => {
            return item.id === parseInt(params.itemId);
        });
    }

    const addToBasket = (newOrderedItem) => {
        setBasketList([...basketList, newOrderedItem]);
    }

    const completeOrder = async (basketItems, customerId, address) => {

        const newOrder = { customerId: customerId, address: address };

        const newOrderResponse = await fetch("http://localhost:8080/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrder)
        });

        const newOrderData = await newOrderResponse.json();
        console.log(newOrderData);

        basketItems.forEach(async basketItem => {
            const orderedItem = {
                itemId: basketItem.item.id,
                orderId: newOrderData.id,
                orderQuantity: basketItem.orderQuantity
            };

            const response = await fetch("http://localhost:8080/ordered-items", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderedItem)
            });
        });

        fetchItems();
        fetchOrders();
        fetchOrderedItems();
        setBasketList([]);
    }


    const userNames = customers.map((customer) => {
        <li>{customer.name}</li>
    });

    const removeFromBasket = (itemId) => {
        const updatedBasketList = basketList.filter(item => item.item.id !== itemId);
        setBasketList([...updatedBasketList]);
    };

    const retailRouter = createBrowserRouter([
        {
            path: "/",
            element: <Navigation />,
            children: [
                {
                    path: "/",
                    element: <Navigate to="/home" />
                },
                {
                    path: "/home",
                    element: <LandingPageContainer items={items} />
                },
                {
                    path: "/items/:itemId",
                    loader: itemLoader,
                    element: <Item
                        postReview={postReview}
                        deleteReview={deleteReview}
                        editReview={patchReview}
                        addToBasket={addToBasket}
                    />
                },
                {
                    path: "/login",
                    element: <Login customers={customers} />
                },
                {
                    path: "/register",
                    element: <Registration customers={customers} postCustomer={postCustomer} />
                },
                {
                    path: "/browse",
                    element: <BrowseItemsContainer items={items} />,
                },
                {
                    path: "/basket",
                    element: <ShoppingCart basketList={basketList} completeOrder={completeOrder} removeFromBasket={removeFromBasket} />
                },
                {
                    path: "/orders",
                    element: <YourOrder orders={orders} />
                }
            ]
        }
    ]);



    return (
        <div className="container">
            <userState.Provider value={{ activeCustomer: activeCustomer, setActiveCustomer: setActiveCustomer }}>
                <RouterProvider router={retailRouter} />
            </userState.Provider>
        </div>

    );
}

export default StoreContainer;
