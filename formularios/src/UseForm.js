/* 
    Nesse exercício vamos criar um custom hook para validação.
*/

import React from 'react';

const validates = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'Insira um CEP válido'
    }
}


export default function useForm (type) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate (value) {
        if (value.lenght === 0) {
            setError('O campo está vazio, preencha o campo');
            return false;
        } else if (validates[type].regex.test(value)) {
            setError('Preencha o campo com um CEP válido');
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange ( {target} ) {
        if (error) { validate(target.value) };
        setValue(target.value);
    };
    
    return {
        value,
        setValue,
        error,
        onChange,
        onBlur: () => validate(value)
    }
};