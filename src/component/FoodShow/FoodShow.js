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
            <button>add to cart</button>
        </div>
    );
};

export default FoodShow;