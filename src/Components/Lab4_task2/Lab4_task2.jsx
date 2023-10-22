import React, { useState } from "react";
import Signup from "./SignUp";
import Login from "./login";
import "./formStyle.css";

function Lab4_task2() {
  const [isSignup, setIsSignup] = useState(true);

  const toggleAuthComponent = () => {
    setIsSignup((prevState) => !prevState);
  };

  return (
    <div className="signup-form">
      <button onClick={toggleAuthComponent}>
        {isSignup ? "Log In page" : "Sign Up page"}
      </button>
      {isSignup ? <Signup /> : <Login />}
    </div>
  );
}
export default Lab4_task2;
