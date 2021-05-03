import { useState, useEffect } from 'react';

async function login(creds) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
    .then(data => data.json())
}

const usePassLogin = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [token, setToken] = useState(null);
    const [values, setValues] = useState({
        phone: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);
        console.log(values);
        console.log(errors);
    }

    useEffect(() => {
        async function fetchData() {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                const user = await login({
                    phone: values.phone,
                    password: values.password
                });
                setToken(user);
                console.log(token);
            }
        }
        fetchData();
    }, [errors]);

    return { handleChange, values, submitHandler, errors, token };
};

function validateInfo(values) {
    let errors = {};

    if (!values.phone) {
        errors.phone = "Phone Number required";
    } else if (values.phone.length < 11) {
        errors.phone = "Phone Number needs to be at least 11 digits long";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or longer";
    }

    return errors;
}

export default usePassLogin;