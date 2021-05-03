import React from 'react';
import { Link } from 'react-router-dom';
import usePassLogin from '../forms/usePassLogin';

const Login = (props) => {
    const { handleChange, values, submitHandler, errors } = usePassLogin();
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <p>Phone Number</p>
                    <input name="phone" value={values.phone} type="tel" onChange={handleChange}/>
                    {errors && <p>{errors.phone}</p>}
                </label>
                <label>
                    <p>Password</p>
                    <input name="password" value={values.password} type="password" onChange={handleChange}/>
                    {errors && <p>{errors.password}</p>}
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