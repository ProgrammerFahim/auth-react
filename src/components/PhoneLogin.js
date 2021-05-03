import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PhoneLogin = (props) => {
    const [ otpSent, setotpSent ] = useState(false);

    if (otpSent) {
        return (
            <div className="phone-otp-sent">
                <form>
                    <label>
                        <p>Enter OTP</p>
                        <input type="text" />
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <Link to="/email-login">Send OTP to my email</Link>
            </div>
        );
    }

    return (
        <div className="phone-login-form">
            <h2>Login</h2>
            <form>
                <label>
                    <p>Phone Number</p>
                    <input type="text" />
                </label>
                <div>
                    <button type="submit" onClick={() => setotpSent(true)}>Submit</button>
                </div>
            </form>
            <Link to="/login">Sign in with password</Link>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
};

export default PhoneLogin;