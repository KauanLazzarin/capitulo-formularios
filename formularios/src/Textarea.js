import React from 'react';

export default function Textarea () {
    const [value, setValue] = React.useState('');

    return (
        <div>
            <textarea value={value}  onChange={({target}) => setValue(target.value)}/>
            
            {
                value
            }
        </div>
    )
};