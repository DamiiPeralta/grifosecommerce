import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'; // Añadido para la validación
import styles from './Login.module.css';
import users from '../../data/users.json';

// Puedes definir la función onLogin aquí o manejar la autenticación de otra manera.
const onLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

const Login = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const handleOnSubmit = (values, { setSubmitting }) => {
        const user = users.find(user => user.email === values.email && user.password === values.password);
        if (user) {
            onLogin(user); // Llama a la función onLogin pasada como prop
            navigate("/");
        } else {
            alert("Invalid email or password");
        }
        setSubmitting(false);
    };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        <label>Email</label>
                        <Field 
                            type="text" 
                            name="email" 
                            placeholder="example@gmail.com"
                        />
                        <ErrorMessage name="email" component="div" className={styles.errorMessage} />

                        <label>Password</label>
                        <Field 
                            type="password" 
                            name="password" 
                            placeholder="********" 
                        />
                        <ErrorMessage name="password" component="div" className={styles.errorMessage} />

                        <button type="submit" disabled={isSubmitting}>Iniciar Sesión</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
