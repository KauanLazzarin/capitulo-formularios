/* 
    O estado de uma aplicação representa as caracteristicas 
    dela naquele momento. Por exemplo: os dados do usuário
    foram carregados, o botão está ativo, o usuário pode
    entrar na página de contato e etc. 

    O problema é que o react não renderiza novamente a página
    só por causa de uma variável que mudou de valor, e é então
    que deve ser utilizado os hooks, como o useState
*/

import React from 'react';

export default function UseState () {
    const [stateValue, updateState] = React.useState(false);
    
    // Também é possível usar dados no useState.
    const [dataValue, updateData] = React.useState({nome: 'Kauan', idade: '17'});
    const [contador, updateContador] = React.useState(1);
    const [items, updateItems] = React.useState(['Item 0']);

    function handleClick () {
        updateState(!stateValue);
        updateData({...dataValue, faculdade: 'ciencias da computação'})
    }

    // Uma das coisas a se preocupar em react ao usar useState é não criar uma função com efeito colateral
    function addItem () {
        updateContador((contar) => contar + 1 );

        /* 
            Caso o return estivesse na callback acima
            o strictmode iria renderizar a página duas vezes
            e isso iria bugar o contador. 
        */
        return updateItems((items) => [...items, `item ${contador}`]);
    }

    function removeItem () {
        updateContador((contar) => contar - 1);

        return updateItems((items) => [...items].pop());
    }

    /* 
        ----reatividade----
        
        Jamais se deve modificar o state diretamente, deve 
        ser utilizado a função de update para que o react
        sempre monitore a modificação e renderize novamente a página

        errado:

        function pushItem () {
            const stateValue = React.useState(['valor qualquer']);
            stateValue.push('novo item');
        };

        correto:

        function pushItem () [
            const {stateValue, updateState} = React.useState(['valor qualquer']);

            return updateState([...stateValue, 'novo valor']);
        ];
    */

    return (
        <div>
            <button onClick={handleClick}>{stateValue ? 'Botão está ativo' : 'Botão está inativo'}</button>
            <button onClick={handleClick}>Adicionar faculdade</button>
            <p>{dataValue.nome}</p>
            <p>{dataValue.idade}</p>
            <p>{dataValue.faculdade}</p>
       

            <button onClick={addItem}>adicionar item</button>
            <button onClick={removeItem}>remover item</button>
       
            {
                items.map((item) => {
                    return <li key={item}>{item}</li>
                })
            }

        </div>
    )
};