import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import User from '../User/User';
import './Body.css';
import userData from '../../userData/userData.json'


const Body = () => {
    
    // Get User Data
    const [user, setUser] = useState([]);
    useEffect(() => {
        setUser(userData);
    }, [])
    

    // Cart
    const [cart, setCart] = useState([]);


    const handleUser = (user) => {
        const newCart = [...cart, user]
        setCart(newCart);
    }

    // console.log("Cart: ",cart);

    return (
        <div className="body-container">
            <div className="user-container">
                {
                    user.map(user => <User user={user} handleUser={handleUser}></User>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;