import Button from "./Button";
import Card from "./Card";
import React from 'react';


export default function Products () {   

    const [dataState, updateData] = React.useState({nome: '', preco: '', fotos: [ {src: ''} ]});
    const [loadingState, updateLoanding] = React.useState(null);

    function handleClick (event) {
        const url = event.target.getAttribute('fetchurl');
        fetchProduct(url);
    };
    
    async function fetchProduct (url) {
        updateLoanding(true);

        const response = await fetch(url);
        const data = await response.json();
        
        updateLoanding(false);
        updateData(data);
    };

    return (
        <div>
            <Button text="Celular" onclickfunction={handleClick} fetchurl="https://ranekapi.origamid.dev/json/api/produto/smartphone" />  
            <Button text="Tablet" onclickfunction={handleClick} fetchurl="https://ranekapi.origamid.dev/json/api/produto/tablet" />  
            <Button text="Notebook" onclickfunction={handleClick} fetchurl="https://ranekapi.origamid.dev/json/api/produto/notebook" />  
        
            {loadingState === true ? <p>Carregando...</p> : ''}

            <div>
                <Card name={dataState.nome} price={dataState.preco} imgsrc={dataState.fotos[0].src}/>
            </div>
        </div>
    )
}

