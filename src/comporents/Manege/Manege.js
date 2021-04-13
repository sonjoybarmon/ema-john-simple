import React from "react";
import "./Manege.css";
const Manege = () => {
  const product = {};
  const handleAddProduct = () => {
    fetch("https://polar-depths-00406.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    });
  };
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-5 col-sm-10">
        <form action="" className="manegeForm">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Product Name"
            className="form-control"
          />
          <br />
          <input
            type="number"
            name="price"
            placeholder="Enter Your Product Price"
            className="form-control"
          />
          <br />
          <input
            type="number"
            name="quantity"
            placeholder="Enter Your Product Quantity"
            className="form-control"
          />
          <br />
          <input
            style={{ margin: "5px 0px" }}
            type="file"
            className="form-control-file"
          />
          <br />
          <button className="btn btn-primary" onClick={handleAddProduct}>
            Add Products
          </button>
        </form>
      </div>
    </div>
  );
};

export default Manege;
