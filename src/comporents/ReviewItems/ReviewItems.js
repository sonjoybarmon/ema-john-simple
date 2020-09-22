import React from 'react';

const ReviewItems = (props) => {
    const {name , quantity , price , key } = props.product;
    const items ={
        marginLeft  : ' 150px',
        padding : '20px' , 
        borderBottom : ' 1px solid gray',
        marginBottom : '20px'
    }
    return (
        <div style= {items}>
            <h3>Product : {name} </h3>
            <h3>Quantity : {quantity} </h3>
            <h2>${price}</h2>
            <br/>
            <button 
            onClick={() => props.removeProduct(key)} className ='oder_btn'
            >Remove Oder</button>
        </div>
    );
};

export default ReviewItems;