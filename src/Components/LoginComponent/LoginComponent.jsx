import React, { Component } from "react";

export class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isloggedIn: false,
      subscription: "guest",
    };
  }

  checkLogin() {
    console.log("clicked");
    this.setState({
      isloggedIn: true,
      subscription: "You now have a subscription",
    });
  }

  render() {
    return (
      <div>
        <h2>welcome {this.state.subscription}</h2>
        <div>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            // onClick={this.checkLogin()}      infinty loop !!
            onClick={() => this.checkLogin()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
