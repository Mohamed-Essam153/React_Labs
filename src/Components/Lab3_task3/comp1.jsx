import React, { Component } from "react";
import comp2 from "./comp2";
import { userConsumer } from "./compContext";

class comp1 extends Component {
  render() {
    return (
      <div>
        <userConsumer>
          {(value) => {
            return (
              <>
                <h1>Component One{value}</h1>

                <comp2></comp2>
              </>
            );
          }}
        </userConsumer>
      </div>
    );
  }
}

export default comp1;
