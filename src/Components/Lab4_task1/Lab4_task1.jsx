import React, { useState, useEffect } from "react";
import { products } from "../../ProductData";
import CounterComponent from "../CounterComponent/CounterComponent";
import "./productsStyle.css";

export default function Lab3_task1() {
  const [productsState, setProductsState] = useState(products);

  useEffect(() => {
    // we can make some API here
  }, []);

  return (
    <div className="container">
      {productsState.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h3 className="productName">{product.name}</h3>
          <p className="description">{product.description}</p>
          <p className="price">Price: ${product.price}</p>
          <p className="category">Category: {product.category}</p>
          <CounterComponent></CounterComponent>
          <div className="buy">BUY NOW</div>
        </div>
      ))}
    </div>
  );
}
