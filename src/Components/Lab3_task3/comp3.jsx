import React, { Component } from "react";
import comp4 from "./comp4";
import { userConsumer } from "./compContext";

class comp3 extends Component {
  render() {
    return (
      <div>
        <userConsumer>
          {(value) => {
            return (
              <>
                <h3>Component Three {value}</h3>
                <comp4></comp4>
              </>
            );
          }}
        </userConsumer>
      </div>
    );
  }
}

export default comp3;
