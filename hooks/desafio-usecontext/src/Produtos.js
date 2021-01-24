import React from 'react';
import GlobalContext from './GlobalContext';

export default function Produtos () {
    const Global = React.useContext(GlobalContext);
    const GlobalFunctions = Global();

    function getProducts () {
        const dados = GlobalFunctions.fetchApi();
        console.log(dados);
    };

    function deleteProducts () {
        GlobalFunctions.clearData();
    };

    return <button onClick={() => getProducts()}>Produtos</button>
};