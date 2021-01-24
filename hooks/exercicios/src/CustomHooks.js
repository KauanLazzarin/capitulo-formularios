import React from 'react';
import useLocalStorage from './UseLocalStorage';

export default function CustomHooks () {
    const [value, updateValue] = useLocalStorage('Produto', 'Carro');

    return (
        <div>
            <p>Produto:{value}</p>
            <input type="text" onChange={({target}) => updateValue(target.value)}/>
        </div>
    )
};