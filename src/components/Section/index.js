import React from 'react';
import './styles.css';

export const GradientSection = ({ 
    background = 'yellow-orange',
    width = '40vw',
    height = '100%',
    children
}) => {
    return (
        <div className={`Section GradientSection ${background}`} style={{ minWidth: width, width, minHeight: height, height }}>
            {children}
        </div>
    );
}

export const BackgroundImageSection = ({
    backgroundUrl = '',
    backgroundSize = 'cover',
    align = 'flex-start',
    width = '60vw',
    height = '100%',
    children
}) => {
    return (
        <div className={`Section BackgroundImageSection`} style={{ 
            width, 
            minWidth: width,
            height,
            backgroundImage: `url(${backgroundUrl})`,
            backgroundSize,
            alignItems: align
        }}>
            {children}
        </div>
    );
}