    import React, { Component } from 'react';
    import './formStyle.css'


    class login extends Component {
        constructor(props) {
            super(props);
            this.state = {
                email: '',
                password: '',
            };
        }

        handleEmailChange = (event) => {
            this.setState({ email: event.target.value });
        }

        handlePasswordChange = (event) => {
            this.setState({ password: event.target.value });
        }

        handleLogin = (event) => {
            event.preventDefault();
            console.log('Login form submitted with data:', this.state);
        }

        render() {
            return (
                <div className='signup-form'>
                    <h2>Login</h2>
                    <form onSubmit={this.handleLogin}>
                        <div>
                            <label>Email:</label>
                            <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                        </div>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            );
        }
    }

    export default login;