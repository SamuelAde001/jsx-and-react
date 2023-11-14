// src/components/Price.jsx
import React from "react";
import product from "../product";

const Price = () => {
  return (
    <p style={{ color: "yellow", textAlign: "center" }}>{product.price}</p>
  );
};

export default Price;
