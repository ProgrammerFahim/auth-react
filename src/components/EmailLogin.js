import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useEmailLogin from '../forms/useEmailLogin';

const EmailLogin = (props) => {
    const { email, otp, token, otpSent, emailChangeHandler, 
        otpChangeHandler, submitHandler, otpSubmitHandler, emailErrors, otpErrors } = useEmailLogin();


    if (token) {
        return <h1>Logged In!</h1>
    }

    if (otpSent) {
        return (
            <div className="phone-otp-sent">
                <form onSubmit={otpSubmitHandler}>
                    <label>
                        <p>Enter OTP</p>
                        <input value={otp.otp} onChange={otpChangeHandler} type="text" />
                        {otpErrors}
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <Link to="/phone-login">Send OTP to my phone</Link>
            </div>
        );
    }

    return (
        <div className="email-login-form">
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <p>Email</p>
                    <input value={email.email} onChange={emailChangeHandler} type="text" />
                    {emailErrors}
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <Link to="/login">Sign in with password</Link>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
};

export default EmailLogin;