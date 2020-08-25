import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {img , name , seller , price , stock} = props.product;
    return (
        <div className='product-content'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div className='product-info'>
                <h4 className="product-name">{name}</h4>
                <p><small>{seller}</small></p>
                <p>{price}</p>
                <p><small>ONly {stock} left in stock</small></p>
                <button className='main-btn' onClick={ () =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>
        </div>
        /* <h3><FontAwesomeIcon icon={faCoffee} />
            {props.product.name}</h3> */
    );
};

export default Product;