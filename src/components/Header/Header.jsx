import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/GGrifos.png'; // Asegúrate de tener un logo en esta ubicación

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Logo" className={styles.logo} />
            </Link>
            
            <div className={styles.buttonContainer}>
                <Link to="/login" className={styles.link}>
                    <button className={styles.button}>Inicio de sesión</button>
                </Link>
                <Link to="/register" className={styles.link}>
                    <button className={styles.button}>Registro</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
