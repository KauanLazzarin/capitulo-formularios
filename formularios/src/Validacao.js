import React from 'react';
import Input from './form/Input.js';
import useForm from './UseForm.js';

export default function Validacao ( ) {
    const cep = useForm('cep');
    const [error, setError] = React.useState(null);

    // function handleSubmit (event) {
    //     event.preventDefault();
    //     if (validate(cep)) {
    //         console.log('enviou')
    //     } else (
    //         console.log('não enviou')
    //     )
    // }

    return (
        <form  action="">
            <Input 
                id="cep" 
                label="CEP" 
                value={cep}
                placeholder="1231231230"
                {...cep}
            />
            
            {cep}
            {error && <p>{error}</p>}
        </form>
    );
};  