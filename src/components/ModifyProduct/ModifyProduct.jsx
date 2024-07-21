import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ModifyProduct.module.css';
import products from "../../data/products.json";
import { Link } from 'react-router-dom';

//// Simular una lista de productos para el ejemplo
//const products = [
//  { id: 1, name: 'Producto 1', description: 'Descripción 1', model: 'Modelo 1', price: 100, imageUrl: 'https://via.placeholder.com/150' },
//  { id: 2, name: 'Producto 2', description: 'Descripción 2', model: 'Modelo 2', price: 200, imageUrl: 'https://via.placeholder.com/150' },
//  // Agrega más productos aquí
//];

const ModifyProduct = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductChange = (event) => {
        const productId = event.target.value;
        const product = products.find(p => p.id === parseInt(productId));
        setSelectedProduct(product);
    };

    return (
        <div className={styles.container}>
            <Link to={"/dashboardadmin"}>
                <button>Volver</button>
            </Link>
            <h2>Modificar Producto</h2>
            <label>Selecciona un producto:</label>
            <select onChange={handleProductChange}>
                <option value="">-- Selecciona un producto --</option>
                {products.map(product => (
                    <option key={product.id} value={product.id}>{product.name}</option>
                ))}
            </select>

            {selectedProduct && (
                <div>
                    <img src={selectedProduct.image} alt={selectedProduct.name} className={styles.productImage} />
                    <Formik
                        initialValues={{
                            name: selectedProduct.name,
                            description: selectedProduct.description,
                            price: selectedProduct.price,
                            image: selectedProduct.image,
                            model: selectedProduct.model
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().required('Nombre requerido'),
                            description: Yup.string().required('Descripción requerida'),
                            price: Yup.string().required('Precio requerido'),
                            image: Yup.string().url('URL de imagen no válida').required('URL de imagen requerida'),
                            model: Yup.string().required('Modelo requerido')
                        })}
                        onSubmit={(values) => {
                            alert(`Datos anteriores: \nNombre: ${selectedProduct.name}\nDescripción: ${selectedProduct.description}\nPrecio: ${selectedProduct.price}\nImagen: ${selectedProduct.image}\nModelo: ${selectedProduct.model}\n\nDatos nuevos: \nNombre: ${values.name}\nDescripción: ${values.description}\nPrecio: ${values.price}\nImagen: ${values.image}\nModelo: ${values.model}`);
                        }}
                        enableReinitialize
                    >
                        <Form className={styles.form}>
                            <label htmlFor="name">Nombre</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" component="div" className={styles.error} />

                            <label htmlFor="description">Descripción</label>
                            <Field name="description" type="text" />
                            <ErrorMessage name="description" component="div" className={styles.error} />

                            <label htmlFor="price">Precio</label>
                            <Field name="price" type="text" />
                            <ErrorMessage name="price" component="div" className={styles.error} />

                            <label htmlFor="image">URL de Imagen</label>
                            <Field name="image" type="text" />
                            <ErrorMessage name="image" component="div" className={styles.error} />

                            <label htmlFor="model">Modelo</label>
                            <Field name="model" type="text" />
                            <ErrorMessage name="model" component="div" className={styles.error} />

                            <button type="submit">Modificar</button>
                        </Form>
                    </Formik>
                </div>
            )}
        </div>
    );
};

export default ModifyProduct;
