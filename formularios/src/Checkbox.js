import React from 'react';

function CheckColor (  props  ) {
    return (
        <input type="checkbox" value={props.color} onChange={props.handlerFunction}/>
    );
};


export default function Checkbox (){
    const [cores, setCores] = React.useState([]);
    const colors = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];


    function handleChange ( {target}) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value));
        }
    };

    return (
        <div>

            {
                colors.map((color) => {
                    return <label>
                        <CheckColor color={color} handlerFunction={handleChange}/>
                        {color}
                    </label>
                })
            }

            {
                cores.map((cor) => <h2>{cor}</h2>)
            }
        </div>
    )
};