import React from 'react';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';

export default function Form () {
    const [nome, setNome] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [product, setProduct] = React.useState("");
    const [color, setColor] = React.useState("");

    return (
        <form action="">

            <Select
                options={['Notebook', 'Smartphone', 'Tablet']}
                value={product}
                id='product'
                updateFunction={setProduct}
            />

            <Input  
                id="nome" 
                label="Nome" 
                value={nome} 
                updateFunction={setNome} 
            />

            <Input  
                id="email" 
                label="Email" 
                value={email} 
                updateFunction={setEmail} 
            />

            <Radio
                options={['Vermelho', 'Azul']}
                value={color}
                updateFunction={setColor}
            />
        </form>
    )
};