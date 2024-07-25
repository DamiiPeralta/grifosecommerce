// src/views/Login/Login.jsx
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import users from '../../data/users.json';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            onLogin(user);
            navigate("/", { replace: true });
            window.location.reload();
        } else {
            alert("Invalid email or password");
        }
        setSubmitting(false);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card p-4 shadow-sm">
                        <h3 className="mb-4">Iniciar Sesión</h3>
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleOnSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <Field 
                                            type="text" 
                                            name="email" 
                                            id="email"
                                            className="form-control" 
                                            placeholder="example@gmail.com"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-danger mt-2" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Contraseña</label>
                                        <Field 
                                            type="password" 
                                            name="password" 
                                            id="password"
                                            className="form-control" 
                                            placeholder="********"
                                        />
                                        <ErrorMessage name="password" component="div" className="text-danger mt-2" />
                                    </div>

                                    <button 
                                        className="btn btn-outline-dark w-100" 
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Iniciando...' : 'Iniciar Sesión'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
