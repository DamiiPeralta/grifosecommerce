// src/components/ProductModal/ProductModal.jsx
import React from 'react';
import Modal from 'react-modal';
import styles from './ProductModal.module.css';

const ProductModal = ({ isOpen, onRequestClose, product }) => {
    if (!product) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <div className={styles.content}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <div className={styles.details}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button onClick={onRequestClose} className={styles.closeButton}>Cerrar</button>
                </div>
            </div>
        </Modal>
    );
};

export default ProductModal;
