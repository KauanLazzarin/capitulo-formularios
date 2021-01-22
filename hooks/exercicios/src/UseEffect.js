/*  
    useEffect é um hook que é executado sempre que 
    o componente é renderizado novamente. Mas na maioria
    dos usos ele é usado para não realizar mais de uma 
    vez uma ação que só precisa ser realizada uma única vez 
    dentro do componente, como uma consulta a um banco de dados.
*/

import React from 'react';

export default function UseEffect () {  
    const [contador, updateContador] = React.useState(0);
    const [dados, updateDados] = React.useState(null);

    // O primeiro parametro é uma callback, o segundo é um array de dependencias
    React.useEffect(() => {
        console.log('executou ');
    }, []);

    // As dependencias determinam quando o useEffect deve ser executado.
    // Sempre que se usar um estado dentro do useEffect, ele deve ser passado como dependencia
    React.useEffect(() => {
        document.title = `Executou ${contador}`
    }, [contador]);

    // Simulando uma consulta em um api usando useEffect e promisses.

    /* 
        Caso não fosse passada o array vazio como segundo parametro
        o useEffect iria ser executado num loop infinito pois
        o estado sempre estaria mudando conforme ele faz o fetch na api.
        
        Isso permite que seja realizada uma só consulta mesmo
        que seja necessário renderizar o componente novamente
    */

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
            .then((response) => response.json())
            .then((json) => updateDados(json))
    }, []);

    return (
        <div>
            <button onClick={() => updateContador(contador + 1)}>{contador}</button>

            {
                dados !== null ? <p>{dados.nome}</p> : ''
            }

        </div>
    )
};  