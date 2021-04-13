import React from "react";

const ReviewItems = (props) => {
  const { name, quantity, price, key, img } = props.product;
  const items = {
    marginLeft: " 150px",
    padding: "20px",
    borderBottom: " 1px solid gray",
    marginBottom: "20px",
  };
  console.log(props.product);
  return (
    <div style={items}>
      <img src={img} class="img-fluid" alt="single product" />
      <h4>Product : {name} </h4>
      <h5>Quantity : {quantity} </h5>
      <h5>Price : ${price}</h5>
      <br />
      <button
        onClick={() => props.removeProduct(key)}
        className="oder_btn btn btn-primary"
      >
        Remove Oder
      </button>
    </div>
  );
};

export default ReviewItems;
