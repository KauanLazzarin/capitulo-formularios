/* 
    O hook useRef nos permite referenciar componentes
    dentro do React sem ter todo o trabalho do javascript vanilla
    como o querySelector, getElement, etc...

    Um bom uso do useRef é dentro de formularios para referenciar
    um input, textarea, etc...

    para utilizar o elemento focus, seria necessario referenciar
    o input, com o useRef isso fica fácil já que basta definir a 
    referencia.

    Outro uso é referenciar um setTimeout para caso
    seja necessário limpar ele depois não ocorrer um erro de referencia.
*/

import React from 'react';

export default function UseRef () {
    const [inputValue, updateInput] = React.useState('');
    const [comments, updateComments] = React.useState([]);
    const inputRef = React.useRef();

    function handleClick () {
        updateComments([...comments, inputValue]);

        // É necessário utilizar o current para acessar a referencia atual;
        inputRef.current.focus();
        updateInput('');
    };

    return (
        <div>
            <ul>
                {
                    comments.map((comment) => {
                        return <li key={comment}>{comment}</li>
                    })
                }
            </ul>

            <input 
                ref={inputRef}
                type="text" 
                value={inputValue} 
                onChange={({target}) => updateInput(target.value)}
            />

            <button onClick={handleClick}>Comentar</button>
        </div>
    );
};