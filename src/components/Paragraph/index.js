import React from 'react';
import './styles.css';

const Paragraph = ({
    fontSize = '18px',
    textAlign = 'left',
    textTransform = 'initial',
    textDecoration = 'none',
    color = 'whitesmoke',
    backgroundColor = 'none',
    textShadow = 'none',
    children
}) => (
    <p style={{
        fontSize, textAlign, textTransform, textDecoration, textShadow,
        color, backgroundColor
    }}>
        {children}
    </p>
)

export default Paragraph;