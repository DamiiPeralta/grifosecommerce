import React from 'react';
import ImgDescription from '../../components/ImgDescription/ImgDescription';
import imgDescriptions from '../../data/imgDescriptions.json';
import styles from './ImgList.module.css';

const ImgList = () => {
    return (
        <div className={styles.imgList}>
            {imgDescriptions.map(desc => (
                <ImgDescription key={desc.id} image={desc.image} text={desc.text} />
            ))}
        </div>
    );
}

export default ImgList;
