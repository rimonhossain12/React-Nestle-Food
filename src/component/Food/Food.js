import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import FoodShow from '../FoodShow/FoodShow';
import './Food.css';
const Food = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setProducts(data.categories))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        console.log('clicked');
        setCart(newCart);
    }
    return (

        <div className="food-container">
            <div className="food-list">
                {
                    products.map(food => <FoodShow
                        key={food.idCategory}
                        food={food}
                        handleAddToCart={handleAddToCart}
                    ></FoodShow>)
                }

            </div>
            <div className="food-order">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Food;