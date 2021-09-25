import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Cart.css';
const Cart = (props) => {
    const fontIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const { strCategory } = props.cart;
    console.log(props.cart)
    return (
        <div className="cart-conainer">

            <h4>Order Details {fontIcon}</h4>
            <p>Name: {strCategory}</p>
            <button className="cart-button">show details</button>
        </div>
    );
};

export default Cart;