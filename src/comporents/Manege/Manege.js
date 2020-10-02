import React from 'react';

const Manege = () => {
    const product = {};
    const handleAddProduct = () => {
        fetch('http://localhost:8080/addProduct',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            
            <form action="">
                <input style={{width:'400px', padding:'20px 10px'}} 
                type="text" name='name' placeholder='Enter Your Product Name'/> <br/>
                <input style={{width:'400px', padding:'20px 10px'}}
                 type="number" name='price' placeholder='Enter Your Product Price'/> <br/>
                <input style={{width:'400px', padding:'20px 10px'}}
                 type="number" name='quantity' placeholder='Enter Your Product Quantity'/> <br/>
                <input style={{width:'400px', padding:'20px 10px'}} type="file" /> <br/>
                <button onClick={handleAddProduct}>Add Products </button>
            </form>
        </div>
    );
};

export default Manege;