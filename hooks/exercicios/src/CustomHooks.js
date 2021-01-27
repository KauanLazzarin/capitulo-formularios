import React from 'react';
import useLocalStorage from './UseLocalStorage';
import useFetch from './UseFetch';

export default function CustomHooks () {
    const [value, updateValue] = useLocalStorage('Produto', 'Carro');
    const {fetchData, data, loading, error} = useFetch();

    React.useEffect(() => {
        fetchData('https://ranekapi.origamid.dev/json/api/produto/');
    }, []);
    console.log(data);

    
    if (error) {
        return <h3>Aconteceu um erro, tente novamente. Se o erro persistir, contate o desenvolvedor</h3>
    }
    if (data === null) return null;
    
    return (
        <div>
            <p>Produto:{value}</p>
            <input type="text" onChange={({target}) => updateValue(target.value)}/>

            {
                loading ? <h2>Carregando...</h2> : ''
            }
        
            {
                data.map((product, index) => {
                    return <li key={product.nome + index}>{product.nome}</li>
                })
            }
        </div>
    )
};