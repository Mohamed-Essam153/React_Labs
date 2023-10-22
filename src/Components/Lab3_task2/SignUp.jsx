import React, { Component } from "react";
import './formStyle.css'


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
        };
    }

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSignup = (event) => {
        event.preventDefault();
        console.log("Signed up:", this.state);
    };

    render() {
        const { firstName,lastName,phoneNumber,email,password } = this.state
        return (
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSignup}>
                    <div>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChanges}
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChanges}
                        />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"  
                            value={phoneNumber}
                            onChange={this.handleChanges}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChanges}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChanges}
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Signup;