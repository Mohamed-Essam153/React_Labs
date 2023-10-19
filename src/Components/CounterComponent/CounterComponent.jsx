import React from "react";
import "./style.css";

class CounterComponent extends React.Component {
  state = {
    count: 1,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default CounterComponent;
