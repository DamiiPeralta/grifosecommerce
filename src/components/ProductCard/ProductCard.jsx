import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../reducers/cartReducer';
import styles from './ProductCard.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const ProductCard = ({ product }) => {


    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    
    const handleAddToCart = () => {
        const cartData = localStorage.getItem("cart");
        const parsedData = JSON.parse(cartData);
        let cartstring = JSON.stringify(product);
        
        localStorage.setItem("cart", cartstring);
        dispatch(addToCart(product));
    };

    return (
        <div className={styles.card}>
            <Link 
                to={`/product/${product.id}`}
                state={{ product }}
            >
                <img src={product.image} alt={product.name} className={`${styles.image} custom-image`} />
                <h2 className={`${styles.title}`}>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </Link>
            <button className="btn btn-outline-dark mt-2" onClick={handleAddToCart}>Añadir al Carrito</button>
        </div>
    );
};

export default ProductCard;