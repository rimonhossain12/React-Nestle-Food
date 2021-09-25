import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { strCategory } = props.cart;
    console.log(props.cart)
    return (
        <div className="cart-conainer">
            <h4>Order Details</h4>
            <p>Name: {strCategory}</p>
            <button className="cart-button">show details</button>
        </div>
    );
};

export default Cart;