// src/components/ProductCarouselByModel/ProductCarouselByModel.jsx
import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products.json';
import styles from './ProductCarouselByModel.module.css';

const ProductCarouselByModel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.model]) {
            acc[product.model] = [];
        }
        acc[product.model].push(product);
        return acc;
    }, {});

    return (
        <div className={styles.carouselContainer}>
            {Object.keys(groupedProducts).map(model => (
                <div key={model} className={styles.modelSection}>
                    <h1 className={styles.modelTitle}>{model}</h1>
                    <Slider {...settings}>
                        {groupedProducts[model].map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
};

export default ProductCarouselByModel;
