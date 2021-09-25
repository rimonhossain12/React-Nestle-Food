import React, { useEffect, useState } from 'react';
import FoodShow from '../FoodShow/FoodShow';
import './Food.css';
const Food = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setProducts(data.categories))
    }, [])
    return (

        <div className="food-container">
            <div className="food-list">
                {
                    products.map(food => <FoodShow food={food}></FoodShow>)
                }

            </div>
            <div className="food-order">
                <h2>Orderd Summary: </h2>
            </div>
        </div>
    );
};

export default Food;