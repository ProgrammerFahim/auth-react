import React from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../forms/useSignup';

const Signup = (props) => {
    const { handleChange, values, submitHandler, errors, token } = useSignup();

    if (token) {
        return <h1>Done</h1>
    }

    return (
        <div className="signup-form">
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <p>Phone Number</p>
                    <input value={values.phone} name="phone" type="tel" onChange={handleChange}/>
                    {errors && <p>{errors.phone}</p>}
                </label>
                <label>
                    <p>Name</p>
                    <input value={values.name} name="name" type="text" onChange={handleChange}/>
                    {errors && <p>{errors.name}</p>}
                </label>
                <label>
                    <p>Email</p>
                    <input value={values.email} name="email" type="email" onChange={handleChange}/>
                    {errors && <p>{errors.email}</p>}
                </label>
                <label>
                    <p>Password</p>
                    <input value={values.password} name="password" type="password" onChange={handleChange}/>
                    {errors && <p>{errors.password}</p>}
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <Link to="/login">Go back to sign in</Link>
        </div>
    );
};

export default Signup;