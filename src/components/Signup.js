import React from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../forms/useSignup';

const Signup = (props) => {
    const { handleChange, values, submitHandler, errors, failedSignup } = useSignup(props);

    if (props.token) {
        return (
            <div>
                <h1 className="success-banner">You are registered!</h1>
                <Link className="normal-btn" to="/">Home</Link>
            </div>
        );
    }

    return (
        <div className="signup-form form">
            {failedSignup? 
            <p className="failed">Sign Up Failed</p>
            : null }
            <h2>Sign Up</h2>
            <form onSubmit={submitHandler}>
                <label for="phone">Phone Number <small>(Required)</small></label>
                <input value={values.phone} name="phone" type="tel" onChange={handleChange} id="phone" placeholder="+880XXXXXXXXXX"/>
                {errors && <p>{errors.phone}</p>}
                <label for="name">Name <small>(Required)</small></label>
                <input value={values.name} name="name" type="text" onChange={handleChange} id="name" placeholder="Jane Doe"/>
                {errors && <p>{errors.name}</p>}
                <label for="email">Email</label>
                <input value={values.email} name="email" type="email" onChange={handleChange} id="email" placeholder="you@domain.com"/>
                {errors && <p>{errors.email}</p>}
                <label for="password">Password</label>
                <input value={values.password} name="password" type="password" onChange={handleChange} id="password" placeholder="(at least 6-letters long)"/>
                {errors && <p>{errors.password}</p>}
                <button className="block-btn" type="submit">Submit</button>
            </form>
            <Link className="inline-btn" to="/login">Go back to sign in</Link>
        </div>
    );
};

export default Signup;