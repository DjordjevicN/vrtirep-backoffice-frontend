import React from 'react';
import './Button.scss'

function Button({ title, type, width }) {
    return (
        <button style={{ width: `${width}` }} className={`BTN button-${type}`}>{title}</button>
    );
}

export default Button;
