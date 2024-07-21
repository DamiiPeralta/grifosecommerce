import React from 'react';
import styles from'./BannerDeliver.module.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta o ajusta la ruta según corresponda

// Importa la imagen
import BannerImage from '../../assets/BannerDeliver/Banner4.jpg'; // Ajusta la ruta según la ubicación de tu imagen

const BannerDeliver = () => {
    return (
        <div className={styles.bannerdeliver}>
            <img src={BannerImage} alt="Banner Deliver" className={styles.bannerimage} />
        </div>
    );
};

export default BannerDeliver;
