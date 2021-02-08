import React from 'react';
import Input from './form/Input.js'

export default function Validacao ( ) {
    const [cep, setCep] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate (value) {
        if (value.lenght === 0) {
            setError('O campo está vazio, preencha o campo');
            return false;
        } else if (!/^\d{5}-?\d{3}$/.test(value)) {
            setError('Preencha o campo com um CEP válido');
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function handleBlur ( { target } ) {
        console.log(validate(target.value));
    };

    function handleChange ( {target} ) {
        if (error) { validate(target.value) };
        setCep(target.value);
    };

    function handleSubmit (event) {
        event.preventDefault();
        if (validate(cep)) {
            console.log('enviou')
        } else (
            console.log('não enviou')
        )
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <Input 
                id="cep" 
                label="CEP" 
                value={cep} 
                onChange={handleChange} 
                onBlur={handleBlur} 
                placeholder="123123123"
            />
            
            {cep}
            {error && <p>{error}</p>}
        </form>
    );
};  