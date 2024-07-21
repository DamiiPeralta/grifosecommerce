import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        navigate("/");
    }

    const handleInputChange = (event) => {
        console.log(event);
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                    username: "", password: ""
                }}
                onSubmit={(values) => { alert(`username: ${values.username} password: ${values.password}`); }}
            >
                <Form className={styles.form}>
                    <label>USERNAME</label>
                    <Field 
                        type="text" 
                        name="username" 
                        placeholder="example@gmail.com"
                        onChange={handleInputChange}
                    />
                    <ErrorMessage name="username" component="div" className={styles.errorMessage} />

                    <label>PASSWORD</label>
                    <Field 
                        type="password" 
                        name="password" 
                        placeholder="********" 
                        onChange={handleInputChange}
                    />
                    <ErrorMessage name="password" component="div" className={styles.errorMessage} />

                    <button type="submit" onClick={handleOnSubmit}>SUBMIT</button>
                </Form>
            </Formik>
        </div>
    );
}
export default Login;
