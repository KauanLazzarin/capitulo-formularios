import React from 'react';

export default function Select () {
    const [value, setValue] = React.useState('');
    
    return (
      <div>
          <select id="product" value={value} onChange={({ target }) => setValue(target.value)}>
              <option disabled value="">Selecione uma opção</option>
              <option value="notebook">Notebook</option>
              <option value="smartphone">Smartphone</option>
              <option value="tablet">Tablet</option>
          </select>

          <h2>{value}</h2>
      </div>  
    )
};