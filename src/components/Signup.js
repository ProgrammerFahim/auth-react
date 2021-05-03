import React from 'react';
import { Link } from 'react-router-dom';

const Signup = (props) => {
    return (
        <div className="signup-form">
            <h2>Login</h2>
            <form>
                <label>
                    <p>Phone Number</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Email</p>
                    <input type="email" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
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