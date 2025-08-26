import React from "react";
import ProductItem from "./ProductItem.jsx";
import { useState } from "react";
import "../App.css";
// Receives the list of products from App via
// props and maps through them to display each product.
const ProductList = ({ products }) => {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col1">
          <select onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Footwear">Footwear</option>
            <option value="Home Appliances">Home Appliances</option>
          </select>
        </div>
        <div className="col2">
          {/* filtered product list base on the selected category, if not selection(true) display all products */}
          {products
            .filter((product) =>
              category ? product.category === category : true
            )
            .map((product) => (
              <ProductItem key={product.id} productItem={product} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
