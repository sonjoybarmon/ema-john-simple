import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product-content">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h4 className="product-name">
          <Link to={"/" + key}> {name} </Link>
        </h4>
        <p>
          <small>{seller}</small>
        </p>
        <p>$ {price}</p>
        <p>
          <small>ONly {stock} left in stock</small>
        </p>

        {props.showAddToCart && (
          <button
            className="main-btn btn btn-primary"
            onClick={() => props.handleAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> add to card
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
