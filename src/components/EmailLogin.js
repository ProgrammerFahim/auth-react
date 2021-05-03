import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const EmailLogin = (props) => {
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
                <Link to="/phone-login">Send OTP to my phone</Link>
            </div>
        );
    }

    return (
        <div className="email-login-form">
            <h2>Login</h2>
            <form>
                <label>
                    <p>Email</p>
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

export default EmailLogin;