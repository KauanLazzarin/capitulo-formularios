/* 
    É possível criar hooks personalizados e próprios para ajudar
    no desenvolvimento da aplicação, as possibilidades são infinitas, 
    no exemplo abaixo criamos um hook para ajudar a salvar e pegar dados do localstorage.
*/

import React from 'react';

export default function useLocalStorage (key, initialValue) {

    // Setando o estado para um valor já existente ou para o valor passado como argumento
    const [state, updateState] = React.useState(() => {
        const localValue = localStorage.getItem(key);

        return localValue ? localValue : initialValue;
    });

    // Salvando no localstorage.
    React.useEffect(() => {
        localStorage.setItem(key, state);
    }, [state, key]);

    // Retornando o array com o estado e a função atualizadora.
    return [state, updateState];
};