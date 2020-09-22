import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import './Review.css';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart , setCart] = useState([]);
    const [orderPlaced , setOrderPlaced] = useState(false);
    const history = useHistory();
    const handleProceedCheckout = () =>{
        history.push('/shipment');
        // setCart([]);
        // setOrderPlaced(true);
        // processOrder();
    }

    const removeProduct = product => {
        const newCart = cart.filter(pd => pd.key !== product);
        setCart(newCart);
        removeFromDatabaseCart(product);
    }

    useEffect(() => {
        const saveData = getDatabaseCart();
        const productKeys = Object.keys(saveData);

        const cartProducts = productKeys.map( key => {
        const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveData[key];
            return product;
        })
        setCart(cartProducts)
    },[])

    let thankYou ;
    if(orderPlaced){
        thankYou = <img src= {happyImage} alt="" />
    }
    return (
        <div className = 'review_content'>
            <div className = 'left_site'>
                {/* <h1> {cart.length}</h1> */}
                {
                    cart.map(pd => <ReviewItems 
                        removeProduct ={removeProduct}
                        product={pd}
                        > </ReviewItems>)
                }
                {
                    thankYou
                }
            </div>
            <div className = 'right_site'>
                <Cart card={cart}>
                    <button onClick={handleProceedCheckout} className='oder_btn'>Proceed Checkout </button>
                </Cart>
            </div>
        </div>
        
    );
};

export default Review;