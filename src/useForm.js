import {useState, useEffect} from 'react'

const useForm = validate => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const[errors, setErrors] = useState({});
    const [isLoggingIn, setIsLoggingIn] = useState
    (false)

    const handleChange = e => {
        const { name, value} = e.target
        setValues({
        ...values,
        [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsLoggingIn(true);
    };
    return { handleChange, values, handleSubmit, errors };
};

export default useForm;