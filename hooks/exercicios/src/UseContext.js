import React from 'react';
import UserContext from './UserContext';

export default function UseContext () {
    const dados = React.useContext(UserContext);
    console.log(dados);

    return <div></div>
};