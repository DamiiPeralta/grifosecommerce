// src/components/TypeProductList/TypeProductList.jsx
import React from 'react';
import ProductList from '../../views/ProductList/ProductList';
import products from '../../data/products.json';
import styles from './TypeProductList.module.css';

const TypeProductList = ({ type }) => {
    const filteredProductsByType = products.filter(product => product.type.toLowerCase() === type.toLowerCase());

    // Obtener los modelos únicos
    const models = [...new Set(filteredProductsByType.map(product => product.model))];

    return (
        <div className={styles.typeProductList}>
            <h1>{type}</h1>
            {models.map(model => (
                <ProductList key={model} model={model} products={filteredProductsByType.filter(product => product.model === model)} />
            ))}
        </div>
    );
};

export default TypeProductList;
