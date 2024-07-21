import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './CreateProduct.module.css';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
    const initialValues = {
        name: '',
        description: '',
        model: '',
        price: '',
        imageUrl: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('El nombre es obligatorio'),
        description: Yup.string().required('La descripción es obligatoria'),
        model: Yup.string().required('El modelo es obligatorio'),
        price: Yup.number().required('El precio es obligatorio').positive('El precio debe ser un número positivo'),
        imageUrl: Yup.string().url('Debe ser una URL válida').required('La URL de la imagen es obligatoria'),
    });

    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
        // Aquí puedes hacer la lógica de envío del formulario
    };

    return (
        <div className={styles.container}>
            <Link to={"/dashboardadmin"}>
                <button>Volver</button>
            </Link>
            
            <h2>Crear Producto</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nombre</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" className={styles.error} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Descripción</label>
                        <Field type="text" id="description" name="description" />
                        <ErrorMessage name="description" component="div" className={styles.error} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="model">Modelo</label>
                        <Field type="text" id="model" name="model" />
                        <ErrorMessage name="model" component="div" className={styles.error} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="price">Precio</label>
                        <Field type="number" id="price" name="price" />
                        <ErrorMessage name="price" component="div" className={styles.error} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="imageUrl">URL de la Imagen</label>
                        <Field type="text" id="imageUrl" name="imageUrl" />
                        <ErrorMessage name="imageUrl" component="div" className={styles.error} />
                    </div>

                    <button type="submit" className={styles.button}>Crear Producto</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreateProduct;