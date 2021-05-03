import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <label>
                    <p>Phone Number</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <Link to="/phone-login">Forgot Password? Sign in via other means instead!</Link>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
};

export default Login;