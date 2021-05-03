import { useState } from 'react';

const usePassLogin = () => {
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

    const submitHandler = (event) => {
        event.preventDefault();
        setErrors(validateInfo(values));
        console.log(values);
        console.log(errors);
    }

    return { handleChange, values, submitHandler, errors };
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