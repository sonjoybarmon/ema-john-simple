import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.card;
    // const total = card.reduce((total , product) => total + product.price , 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const Product = cart[i];
        // console.log(Product);
        total = total + Product.price * Product.quantity ;
    }
        //shipping if else
    let shipping = 0 ;
    if (total > 35) {
        shipping = 0;    
    } else if(total > 15){
        shipping = 4.99;
    } else if(total > 0){
        shipping = 12.99
    }
    const tex = total / 10 ;
        //function toFixed
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
        //grandTotal 
    const grandTotal = total + shipping + tex;
    return (
        <div className='cart_info'>
            <p>Items : {cart.length} </p>
            <p>Shipping cost : {formatNumber(shipping)}</p>
            <p>Total : {formatNumber(total)}</p>
            <p>Tex + vet : {formatNumber(tex)}</p>
            <p>Grand Total : {formatNumber(grandTotal)}</p>

            {
                props.children 
            }
        </div>
    );
};

export default Cart;