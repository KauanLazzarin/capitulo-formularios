import React from 'react';

export default function Checkbox (){
    const [cores, setCores] = React.useState([]);

    function handleChange ( {target}) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        }
    };

    return (
        <div>
            <label>
                <input type="checkbox" value="azul" checked={cores.includes('azul')} onChange={handleChange}/>
                Azul.
            </label>

            <label>
                <input type="checkbox" value="vermelho" checked={cores.includes('vermelho')} onChange={handleChange}/>
                Vermelho.
            </label>

            {
                cores.map((cor) => <h2>{cor}</h2>)
            }
        </div>
    )
};