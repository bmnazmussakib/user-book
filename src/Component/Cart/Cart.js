import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let totalSalary = cart.reduce((totalSalary, userSalary) => totalSalary + userSalary.salary, 0);
    console.log(totalSalary);
    return (
        <div className="cart-container">
            <div className="single-card">
            <h2>User Cart</h2>
                <p><strong>User Added:</strong> {cart.length}</p>
                <p><strong>Total Salary:</strong> $ { totalSalary.toFixed(2) }</p>
            </div>
        </div>
    );
};

export default Cart;