import React, {
    useState,
    useEffect
} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {
    addToDatabaseCart,
    getDatabaseCart
} from '../../utilities/databaseManager';
import {
    Link
} from 'react-router-dom';

const Shop = () => {
        const [product, setProduct] = useState([]);
        useEffect(() => {
            fetch('https://polar-depths-00406.herokuapp.com/products')
                .then(res => res.json())
                .then(data => {
                    setProduct(data)
                })
        }, [])

        const [card, setCard] = useState([]);
        useEffect(() => {
            const savedCart = getDatabaseCart();
            const productKey = Object.keys(savedCart);
            if (product.length) {
                const previousCart = productKey.map(existingKey => {
                    const products = product.find(pd => pd.key === existingKey);
                    products.quantity = savedCart[existingKey];
                    return products;
                })
                setCard(previousCart);
            }
        }, [])

        const handleAddProduct = (product) => {

            const toBeAddedKey = product.key;
            const sameProduct = card.find(pd => pd.key === toBeAddedKey);
            let count = 1;
            let newCard;
            if (sameProduct) {
                count = sameProduct.quantity + 1;
                sameProduct.quantity = count;
                const others = card.find(pd => pd.key !== toBeAddedKey)
                newCard = [...others, sameProduct]
            } else {
                product.quantity = 1;
                newCard = [...card, product]
            }
            setCard(newCard);
            addToDatabaseCart(product.key, count);



        }
        return ( <
            div className = 'shop_content' >
            <
            div className = "product" > {
                product.map(productName => <Product key = {productName.key}
                    showAddToCart = {true}
                    handleAddProduct = {handleAddProduct}
                    product = {productName}>
                    </Product>)
                } </div> <div className = "product_info" >
                <Cart card = {card} >
                <Link to = '/reviwe'>
                <button className = 'oder_btn' > Oder Reviews </button> </Link> 
                </Cart>

                </div> 
                </div>
            );
        };

        export default Shop;