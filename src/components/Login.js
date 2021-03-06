import React from 'react';
import { Link } from 'react-router-dom';
import usePassLogin from '../forms/usePassLogin';

const Login = (props) => {
    const { handleChange, values, submitHandler, errors, failedLogin } = usePassLogin(props);

    if (props.token) {
        return (
            <div>
                <h1 className="success-banner">You are logged in!</h1>
                <Link className="normal-btn" to="/">Home</Link>
            </div>
        );
    }

    return (
        <div className="login-form form">
            {failedLogin? 
            <p className="failed">Log In Failed</p>
            : null }
            <h2>Log In</h2>
            <form onSubmit={submitHandler}>
                <label for="phone">Phone Number</label>
                <input name="phone" value={values.phone} type="tel" onChange={handleChange} id="phone" placeholder="+880XXXXXXXXXX"/>
                {errors && <p>{errors.phone}</p>}
                <label for="password">Password</label>
                <input name="password" value={values.password} type="password" onChange={handleChange} id="password" placeholder="(at least 6-letters long)"/>
                {errors && <p>{errors.password}</p>}
                <button className="block-btn" type="submit">Submit</button>
            </form>
            <Link className="block-btn" to="/phone-login">Forgot Password? Sign in via other means instead!</Link>
            <p>Don't have an account? <Link className="inline-btn" to="/signup">Sign up</Link></p>
        </div>
    );
};

export default Login;