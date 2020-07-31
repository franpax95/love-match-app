import React from 'react';
import './styles.css';

export const SubmitButton = ({
    onClick = undefined,
    children
}) => {
    return <button className="SubmitButton Button" onClick={onClick}>{children}</button>
}