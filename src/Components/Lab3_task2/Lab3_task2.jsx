import React, { Component } from "react";
import Signup from './SignUp'; 
import Login from './login';  
import './formStyle.css'


class Lab3_task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignup: true,
    };
  }

  toggleAuthComponent = () => {
    this.setState((prevState) => ({
      isSignup: !prevState.isSignup,
    }));
  };

  render() {
    const { isSignup } = this.state;
    return (
      <div className="signup-form">
        <button onClick={this.toggleAuthComponent}>
          {isSignup ? "Log In page" : "Sign Up page"}
        </button>
        {isSignup ? <Signup /> : <Login />}
      </div>
    );
  }
}
export default Lab3_task2;
