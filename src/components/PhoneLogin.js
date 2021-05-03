import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePhoneLogin from '../forms/usePhoneLogin';

const PhoneLogin = (props) => {
    const { phone, otp, token, otpSent, phoneChangeHandler, 
        otpChangeHandler, submitHandler, otpSubmitHandler, phoneErrors, otpErrors } = usePhoneLogin();


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
                <Link to="/email-login">Send OTP to my email</Link>
            </div>
        );
    }

    return (
        <div className="phone-login-form">
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <p>Phone Number</p>
                    <input value={phone.phone} onChange={phoneChangeHandler} type="tel" />
                    {phoneErrors}
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

export default PhoneLogin;