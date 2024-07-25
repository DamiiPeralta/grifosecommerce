// src/components/ProductList/ProductList.jsx
import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ model, products }) => {
    const filteredProducts = products || [];

    return (
        <div className={styles.productList}>
            <h1>{model}</h1>
            <div className={styles.productGrid}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
