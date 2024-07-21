import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Contacta con nosotros en WhatsApp: +123456789</p>
            <p>Redes sociales: Facebook, Instagram, Twitter</p>
        </footer>
    );
};

export default Footer;
