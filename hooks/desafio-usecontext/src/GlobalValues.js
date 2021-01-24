import React from 'react';

export function GlobalValues () {
    
    const [data, updateData] = React.useState(null);

    return {

        fetchApi () {
            fetch('https://ranekapi.origamid.dev/json/api/produto/')
                .then(response => response.json())
                .then(json => updateData(json))
            
            return data;
        },

         clearData () {
            updateData(null);
        }
    };
}