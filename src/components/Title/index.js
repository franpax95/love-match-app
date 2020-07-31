import React from 'react';
import './styles.css';

const Title = ({
    fontSize = '3vw',
    textAlign = 'left',
    textTransform = 'initial',
    textDecoration = 'none',
    color = 'whitesmoke',
    backgroundColor = 'none',
    textShadow = 'none',
    children
}) => {
    const styles = {
        /** fonts */
        fontSize, textAlign, textTransform, textDecoration, textShadow,
        /** colors */
        color, backgroundColor
    };

    return <h1 className="Title" style={styles}>{children}</h1>;
}

export default Title;