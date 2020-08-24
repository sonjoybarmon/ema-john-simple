import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const first10 = fakeData.slice(0 , 10);
    const [product, setProduct] = useState(first10);
    return (
        <div className= 'shop_content'>
            <div className="product">
                {
                    product.map(productName => <Product product= {productName} > </Product>)
                }
            </div>
            <div className="product_info">
                <h1>tk 150</h1>
            </div>
        </div>
    );
};

export default Shop;