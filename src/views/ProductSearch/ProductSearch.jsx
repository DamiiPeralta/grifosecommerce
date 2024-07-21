import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products.json';
import styles from './ProductSearch.module.css';
import { useLocation } from 'react-router-dom';

const ProductSearch = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query')?.toLowerCase() || '';
    const model = searchParams.get('model')?.toLowerCase() || '';

    const filteredProducts = products.filter(product => 
        (product.name.toLowerCase().includes(query) || product.model.toLowerCase().includes(query)) &&
        (model ? product.model.toLowerCase() === model : true)
    );

    const groupedProducts = filteredProducts.reduce((acc, product) => {
        if (!acc[product.model]) {
            acc[product.model] = [];
        }
        acc[product.model].push(product);
        return acc;
    }, {});

    return (
        <div className={styles.productSearch}>
            {Object.keys(groupedProducts).length > 0 ? (
                Object.keys(groupedProducts).map(model => (
                    <div key={model}>
                        <h1>{model}</h1>
                        <div className={styles.productGrid}>
                            {groupedProducts[model].map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No se encontraron productos.</p>
            )}
        </div>
    );
};

export default ProductSearch;
