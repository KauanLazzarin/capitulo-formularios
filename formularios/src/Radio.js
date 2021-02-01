import React from 'react';

export default function Radio () {
    const [ value, setValue ] = React.useState( '' );

    function handleChange ( {target} ) {
        setValue( target.value );
    };

    return (
        <div>
            <label>
                <input type="radio" name="produto" value="smartphone" onChange={handleChange}/>
                Smartphone
            </label>

            <label>
                <input type="radio" name="produto" value="notebook" onChange={handleChange}/>
                Notebook
            </label>

            <h2>{value}</h2>
        </div>
    )
}