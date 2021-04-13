import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const ProductInfo = () => {
  const { productKey } = useParams();
  const [singlePd, setSinglePd] = useState({});
  useEffect(() => {
    fetch(`https://polar-depths-00406.herokuapp.com/sameProducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKey),
    })
      .then((res) => res.json())
      .then((data) => {
        setSinglePd(data);
      });
  }, [productKey]);

  useEffect(() => {
    fetch(`https://polar-depths-00406.herokuapp.com/product/${productKey}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePd(data);
      });
  }, [productKey]);

  //    const product = fakeData.find( pd => pd.key === productKey )
  console.log(singlePd);
  return (
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-md-8 col-sm-10">
        <Product
          showAddToCart={false}
          product={singlePd}
          key={singlePd.key}
        ></Product>
      </div>
    </div>
  );
};

export default ProductInfo;
