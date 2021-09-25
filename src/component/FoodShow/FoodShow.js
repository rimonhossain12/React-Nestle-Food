import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faDeaf } from '@fortawesome/free-solid-svg-icons';
import './FoodShow.css';
import './FoodShow.css';
const FoodShow = (props) => {
    // console.log(props);
    const carIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props.food;
    return (
        <div className="cart">
            <div className="cart-img">
                <img src={strCategoryThumb} alt="" />
            </div>
            <div className="cart-body">
                <p className="catogories-style">Categories: {strCategory}</p>
                <p>{strCategoryDescription.slice(0, 120)}</p>
            </div>
            <div className="btn-style">
                <div className="first-button">
                    <button onClick={() => props.handleAddToCart(props.handleAddToCart.strCategory)}> {carIcon} add to cart</button>
                </div>
                <div className="second-button">
                    <button>show details</button>
                </div>
            </div>
        </div>
    );
};

export default FoodShow;