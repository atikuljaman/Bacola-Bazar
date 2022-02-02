import React from 'react';
import { BsHandbag } from "react-icons/bs";
import './Cart.css';

const Cart = () => {
    return (
        <div className='side-cart-container'>
            <h6>$0.00</h6>
            <div className='cart'>
                <BsHandbag className='cart-icon' />
                <div>0</div>
            </div>
        </div>
    );
};

export default Cart;
