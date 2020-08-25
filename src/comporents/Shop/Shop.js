import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0 , 10);
    const [product, setProduct] = useState(first10);
    const [card , setCard] = useState([]);
    const handleAddProduct = (product) =>{
        
    const newCard = [...card , product];
        setCard(newCard);
    }
    return (
        <div className= 'shop_content'>
            <div className="product">
                {
                    product.map(productName => <Product
                        handleAddProduct = {handleAddProduct} 
                         product= {productName} 
                         > </Product>)
                }
            </div>
            <div className="product_info">
                <Cart card={card}> </Cart>

            </div>
        </div>
    );
};

export default Shop;