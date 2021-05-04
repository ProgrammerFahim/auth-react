import { useState, useEffect } from 'react';

async function submitEmail(creds) {
    return fetch('http://localhost:8080/submit/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
    .then(data => data.json())
}

async function submitOtp(creds) {
    return fetch('http://localhost:8080/submit/otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
    .then(data => data.json())
}

const useEmailLogin = (props) => {
    const [email, setEmail] = useState({ email: '' });
    const [otp, setOtp] = useState({ otp: '' });
    const [otpSent, setOtpSent] = useState(false);
    const [emailErrors, setEmailErrors] = useState('');
    const [otpErrors, setOtpErrors] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [otpSubmitted, setOtpSubmitted] = useState(false);

    const emailChangeHandler = (event) => {
        setEmail({ email: event.target.value });
    };

    const otpChangeHandler = (event) => {
        setOtp({ otp: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!email.email) {
            setEmailErrors("Email required");
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.email)) {
            setEmailErrors("Invalid email. Please enter a correct email address");
        } else {
            setEmailErrors("");
        }

        setEmailSubmitted(true);
    };

    const otpSubmitHandler = (event) => {
        event.preventDefault();

        if (!otp.otp) {
            setOtpErrors("OTP required");
        } else if (otp.otp.length != 6) {
            setOtpErrors("OTP should be 6 digits long.");
        } else {
            setOtpErrors("");
        }

        setOtpSubmitted(true);
    };

    useEffect(() => {
        async function checkOtp() {
            if (otpErrors.length === 0 && otpSubmitted) {
                const user = await submitOtp({ otp });
                props.setToken(user);
            }
        }
        checkOtp();
    }, [otpErrors, otpSubmitted]);

    useEffect(() => {
        async function checkEmail() {
            if (emailErrors.length === 0 && emailSubmitted) {
                await submitEmail({ email });
                setOtpSent(true);
            }
        }
        checkEmail();
    }, [emailErrors, emailSubmitted]);

    return { email, otp, otpSent, emailChangeHandler, 
                otpChangeHandler, submitHandler, otpSubmitHandler, emailErrors, otpErrors };
};

export default useEmailLogin;