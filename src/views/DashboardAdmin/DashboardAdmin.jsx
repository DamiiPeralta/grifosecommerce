import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import styles from './DashboardAdmin.module.css';
import ProductList from '../ProductList/ProductList';

const DashboardAdmin = () => {
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
        <div>
            <h1>Administrador</h1>
            <Link to={"/createproduct"}>
                <button>Crear Producto</button>
            </Link>
            <Link to={"/modifyproduct"}>
                <button>Modificar Producto</button>
            </Link>
            <ProductList />
        </div>
    );
};

export default DashboardAdmin;