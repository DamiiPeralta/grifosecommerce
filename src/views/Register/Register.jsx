// src/views/Register/Register.jsx
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
            .max(15, "El nombre de usuario no puede tener más de 15 caracteres")
            .required("Nombre de usuario es requerido"),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Número de teléfono no es válido")
            .required("Número de teléfono es requerido"),
        email: Yup.string()
            .email("Correo electrónico no es válido")
            .required("Correo electrónico es requerido"),
        contraseña: Yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/, "La contraseña debe tener entre 8 y 16 caracteres e incluir letras y números")
            .required("La contraseña es requerida"),
        confirmContraseña: Yup.string()
            .oneOf([Yup.ref('contraseña'), null], "Las contraseñas deben coincidir")
            .required("La confirmación de la contraseña es requerida"),
    });

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card p-4 shadow-sm">
                        <h3 className="mb-4">Registrarse</h3>
                        <Formik
                            initialValues={{
                                username: "", phone: "", email: "", contraseña: "", confirmContraseña: ""
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => { 
                                alert(`Nombre de Usuario: ${values.username} Teléfono: ${values.phone} Correo electrónico: ${values.email} Contraseña: ${values.contraseña}`);
                                navigate("/login");
                            }}
                        >
                            {() => (
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                                        <Field 
                                            type="text" 
                                            name="username" 
                                            id="username"
                                            className="form-control" 
                                            placeholder="Tu nombre de usuario"
                                        />
                                        <ErrorMessage name="username" component="div" className="text-danger mt-2" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Teléfono</label>
                                        <Field 
                                            type="text" 
                                            name="phone" 
                                            id="phone"
                                            className="form-control" 
                                            placeholder="1166853345"
                                        />
                                        <ErrorMessage name="phone" component="div" className="text-danger mt-2" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                        <Field 
                                            type="email" 
                                            name="email" 
                                            id="email"
                                            className="form-control" 
                                            placeholder="example@gmail.com"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-danger mt-2" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="contraseña" className="form-label">Contraseña</label>
                                        <Field 
                                            type="password" 
                                            name="contraseña" 
                                            id="contraseña"
                                            className="form-control" 
                                            placeholder="********"
                                        />
                                        <ErrorMessage name="contraseña" component="div" className="text-danger mt-2" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="confirmContraseña" className="form-label">Confirmar Contraseña</label>
                                        <Field 
                                            type="password" 
                                            name="confirmContraseña" 
                                            id="confirmContraseña"
                                            className="form-control" 
                                            placeholder="********"
                                        />
                                        <ErrorMessage name="confirmContraseña" component="div" className="text-danger mt-2" />
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn btn-primary w-100"
                                    >
                                        Registrarse
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
