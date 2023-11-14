// src/components/Name.jsx
import React from "react";
import product from "../product";

const Name = () => {
  return (
    <h3 style={{ textDecoration: "underline", color: "#06b0ff" }}>
      {product.name}
    </h3>
  );
};

export default Name;
