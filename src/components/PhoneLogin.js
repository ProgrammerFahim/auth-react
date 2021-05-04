import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePhoneLogin from '../forms/usePhoneLogin';

const PhoneLogin = (props) => {
    const { phone, otp, otpSent, phoneChangeHandler, 
        otpChangeHandler, submitHandler, otpSubmitHandler, 
        phoneErrors, otpErrors, failedPhone, failedOtp} = usePhoneLogin(props);


    if (props.token) {
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
                {failedOtp? 
                <p className="failed">OTP Authentication Error</p>
                : null }
                <h2>OTP sent to your phone</h2>
                <form onSubmit={otpSubmitHandler}>
                    <label for="otp">Enter OTP</label>
                    <input value={otp.otp} name="otp" onChange={otpChangeHandler} type="text" id="otp" placeholder="(6-digit OTP)"/>
                    <p>{otpErrors}</p>
                    <button className="block-btn" type="submit">Submit</button>
                </form>
                <Link className="block-btn" to="/email-login">Send OTP to my email</Link>
            </div>
        );
    }

    return (
        <div className="otp-login-form form">
            {failedPhone? 
            <p className="failed">Number Authentication Error</p>
            : null }
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label for="phone">Phone Number</label>
                <input value={phone.phone} onChange={phoneChangeHandler} type="tel" id="phone" placeholder="+880XXXXXXXXXX"/>
                <p>{phoneErrors}</p>
                <button className="block-btn" type="submit">Submit</button>
            </form>
            <Link className="block-btn" to="/login">Sign in with password</Link>
            <p>Don't have an account? <Link className="inline-btn" to="/signup">Sign up</Link></p>
        </div>
    );
};

export default PhoneLogin;