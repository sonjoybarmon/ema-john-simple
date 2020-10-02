import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductInfo = () => {
    
    const {productKey} = useParams();
    const [singlePd , setSinglePd] = useState({})
    useEffect(()=>{
        fetch('https://polar-depths-00406.herokuapp.com/sameProducts',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(productKey)
            })
            .then(res => res.json())
            .then(data => {
                setSinglePd(data)
        })
    },[productKey])
//    const product = fakeData.find( pd => pd.key === productKey )

    return (
        <div>
            <h1>{productKey} this page is gooooom </h1>
            <Product showAddToCart = {false}
             product= {singlePd}
             key={singlePd.key}></Product>
        </div>
    );
};

export default ProductInfo;