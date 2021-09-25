import React from 'react';
import './FoodShow.css';
const FoodShow = (pros) => {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = pros.food;
    return (
        <div className="grid-container">
            <div className="food-div">
                <div className="food-img">
                    <img src={strCategoryThumb} alt="" />
                </div>
                <div className="food-name">
                    <h3>{strCategory}</h3><br />
                    <p>Details: {strCategoryDescription.slice(0, 150)}</p>

                </div>
            </div>
        </div>
    );
};

export default FoodShow;