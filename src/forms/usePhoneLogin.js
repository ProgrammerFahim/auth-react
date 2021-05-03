import { useState, useEffect } from 'react';

async function submitPhone(creds) {
    return fetch('http://localhost:8080/submit/phone', {
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

const usePhoneLogin = () => {
    const [phone, setPhone] = useState({ phone: '' });
    const [otp, setOtp] = useState({ otp: '' });
    const [token, setToken] = useState(null);
    const [otpSent, setOtpSent] = useState(false);
    const [phoneErrors, setPhoneErrors] = useState('');
    const [otpErrors, setOtpErrors] = useState('');
    const [phoneSubmitted, setPhoneSubmitted] = useState(false);
    const [otpSubmitted, setOtpSubmitted] = useState(false);

    const phoneChangeHandler = (event) => {
        setPhone({ phone: event.target.value });
    };

    const otpChangeHandler = (event) => {
        setOtp({ otp: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!phone.phone) {
            setPhoneErrors("Phone Number required");
        } else if (phone.phone.length < 11) {
            setPhoneErrors("Phone Number should be at least 11 digits long.");
        } else {
            setPhoneErrors("");
        }

        setPhoneSubmitted(true);
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
                setToken(user);
            }
        }
        checkOtp();
    }, [otpErrors, otpSubmitted]);

    useEffect(() => {
        async function checkPhone() {
            if (phoneErrors.length === 0 && phoneSubmitted) {
                await submitPhone({ phone });
                setOtpSent(true);
            }
        }
        checkPhone();
    }, [phoneErrors, phoneSubmitted]);

    return { phone, otp, token, otpSent, phoneChangeHandler, 
                otpChangeHandler, submitHandler, otpSubmitHandler, phoneErrors, otpErrors };
};

export default usePhoneLogin;