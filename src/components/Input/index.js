import React from 'react';
import './styles.css';

const Input = ({
    type = 'text',
    name = '',
    onChange = undefined,
    value = ''
}) => {


    return <input className="Input" type={type} name={name} onChange={onChange} value={value} />
}

export default Input;