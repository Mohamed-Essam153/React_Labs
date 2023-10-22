import React, { Component } from "react";
import { products } from "../../ProductData";
import CounterComponent from "../CounterComponent/CounterComponent"
import './productsStyle.css'

export default class Lab3_task1 extends Component {
  render() {
    return (
      <div className="container">
        {products.map((product) => (
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
}
