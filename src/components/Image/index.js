import React from 'react';
import './styles.css';

export const SmallImage = () => (
    <div></div>
);

export default Image = ({
    src = '',
    alt = 'img', 
    width = 'auto',
    height = 'auto',
    objectFit = 'cover'
}) => {
    const style = { width, height, objectFit };

    return (
        <div className="Image" style={{
            minWidth: width,
            width,
            minHeight: height,
            height
        }}>
            <img src={src} alt={alt} style={{ objectFit }} />
        </div>
    );
}