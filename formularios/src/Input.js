/* 
    Formulários em React podem se tornar reativos 
    quando usados com hooks.
    É possível guardar vários dados (objeto) de 
    um input usando useState
*/

import React from 'react';

export default function Input () {
    const [data, setData] = React.useState({
        name: '',
        email: ''
    });

    function handleChange ({ target }) {
        const {id, value} = target;
        setData({...data, [id]: value });
        console.log(data);
    };
    
    return (
        <form>
            <label htmlFor="name">Nome</label>
            <input 
            type="text"
            id='name'
            value={data.name}
            onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input 
            type="text"
            id="email"
            value={data.email}
            name="email"
            onChange={handleChange}
            />

            <p>{data.email}</p>
            <p>{data.name}</p>
        </form>
    );
};
