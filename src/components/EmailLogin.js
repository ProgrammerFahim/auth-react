import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useEmailLogin from '../forms/useEmailLogin';

const EmailLogin = (props) => {
    const { email, otp, token, otpSent, emailChangeHandler, 
        otpChangeHandler, submitHandler, otpSubmitHandler, emailErrors, otpErrors } = useEmailLogin();


    if (token) {
        return (
            <div>
                <h1 className="success-banner">You are logged in!</h1>
                <Link className="normal-btn" to="/">Home</Link>
            </div>
        );
    }

    if (otpSent) {
        return (
            <div className="otp-sent form">
                <form onSubmit={otpSubmitHandler}>
                    <label for="otp">Enter OTP</label>
                    <input value={otp.otp} name="otp" onChange={otpChangeHandler} type="text" id="otp" placeholder="(6-digit OTP)"/>
                    <p>{otpErrors}</p>
                    <button className="block-btn" type="submit">Submit</button>
                </form>
                <Link className="block-btn" to="/phone-login">Send OTP to my phone</Link>
            </div>
        );
    }

    return (
        <div className="otp-login-form form">
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label for="email">Email</label>
                <input value={email.email} onChange={emailChangeHandler} type="text" id="email" placeholder="you@domain.com"/>
                <p>{emailErrors}</p>
                <button className="block-btn" type="submit">Submit</button>
            </form>
            <Link className="block-btn" to="/login">Sign in with password</Link>
            <p>Don't have an account? <Link className="inline-btn" to="/signup">Sign up</Link></p>
        </div>
    );
};

export default EmailLogin;