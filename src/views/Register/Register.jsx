import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import styles from './Register.module.css';

const Register = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
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
        <div className={styles.container}>
            <Formik
                initialValues={{
                    phone: "", email: "", contraseña: "", confirmContraseña: ""
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => { 
                    alert(`Teléfono: ${values.phone} Correo electrónico: ${values.email} Contraseña: ${values.contraseña}`);
                    navigate("/login");
                }}
            >
                <Form className={styles.form}>
                    <label>TELÉFONO</label>
                    <Field 
                        type="text" 
                        name="phone" 
                        placeholder="1166853345"
                    />
                    <ErrorMessage name="phone" component="div" className={styles.errorMessage} />

                    <label>CORREO ELECTRÓNICO</label>
                    <Field 
                        type="email" 
                        name="email" 
                        placeholder="example@gmail.com"
                    />
                    <ErrorMessage name="email" component="div" className={styles.errorMessage} />

                    <label>CONTRASEÑA</label>
                    <Field 
                        type="password" 
                        name="contraseña" 
                        placeholder="********"
                    />
                    <ErrorMessage name="contraseña" component="div" className={styles.errorMessage} />

                    <label>CONFIRMAR CONTRASEÑA</label>
                    <Field 
                        type="password" 
                        name="confirmContraseña" 
                        placeholder="********"
                    />
                    <ErrorMessage name="confirmContraseña" component="div" className={styles.errorMessage} />

                    <button type="submit">REGISTRARSE</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;
