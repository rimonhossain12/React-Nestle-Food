import React from 'react';
import './FoodShow.css';
const FoodShow = (pros) => {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = pros.food;
    return (
        <div className="cart">
            <div className="cart-img">
                <img src={strCategoryThumb} alt="" />
            </div>
            <div className="cart-body">
                <p>{strCategory}</p>
                <p>{strCategoryDescription.slice(0, 120)}</p>
            </div>
            <div className="btn-style">
                <div className="first-button">
                    <button>add to cart</button>
                </div>
                <div className="second-button">
                    <button>show details</button>
                </div>
            </div>
        </div>
    );
};

export default FoodShow;