import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../reducers/cartReducer";

const ProductDetail = () => {
    const location = useLocation();
    const product = location.state?.product;

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems); 

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    if (!product) {
        return <p>No se encontró el producto.</p>;
    }

    return (
        <div className={styles.productDetail}>
            <div className={styles.imageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
            </div>
            <div className={styles.detailsContainer}>
                <h1 className={styles.productName}>{product.name}</h1>
                <p className={styles.productPrice}>{product.price}</p>
                <p className={styles.productDescription}>{product.description}</p>
                <button className={styles.addToCartButton} onClick={handleAddToCart}>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default ProductDetail;
