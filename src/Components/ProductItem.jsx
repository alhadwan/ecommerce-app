import React from "react";

// Represents a single product, receiving individual product data via props.
const ProductItem = ({ productItem }) => {
  return (
    <div className="card">
      {/* <img
        className="card-image"
        src={productItem.image}
        alt={productItem.name}
      /> */}
      <img
        src={`${import.meta.env.BASE_URL}${productItem.image.replace(/^\//, "")}`}
        alt={productItem.name}
      />
      <div className="card-content">
        <h2 className="card-title">{productItem.name}</h2>
        <p className="card-category">Category: {productItem.category}</p>
        <p className="card-price">${productItem.price}</p>
        <p className="card-description">{productItem.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
