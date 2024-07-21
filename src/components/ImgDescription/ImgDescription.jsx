import React from 'react';
import styles from './ImgDescription.module.css';

const ImgDescription = ({ image, text }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="description" className={styles.image} />
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default ImgDescription;
