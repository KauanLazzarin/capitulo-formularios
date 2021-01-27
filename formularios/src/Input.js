/* 
    Formulários em React podem se tornar reativos 
    quando usados com hooks.
*/

import React from 'react';

export default function Input () {
    const [value, updateValue] = React.useState('');
    
    return (
        <div>
            <label htmlFor="input">Escreva qualquer coisa</label>
            <input 
            type="text"
            id='input'
            value={value}
            onChange={(event) => updateValue(event.target.value)}
            />

            <p>{ value }</p>
        </div>
    );
};
