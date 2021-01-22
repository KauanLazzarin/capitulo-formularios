import Button from './Button';
import React from 'react';
import Product from './Product';

export default function App() {
  
  const [ data, updateData ] = React.useState(null);
  const [ fetchProduct, updateUrl] = React.useState('');

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${fetchProduct}`)
      .then(response => response.json())
      .then(json => updateData(json))
    
  }, [fetchProduct]);

  React.useEffect(() => {
      if ( localStorage.getItem('produto') ) {
        const product = localStorage.getItem('produto');
        console.log(product)
        updateUrl(product);
      }
  }, []);

  function handleClick (event) {
    const product = event.target.getAttribute('product');
    updateUrl(product);
    localStorage.setItem('produto', product);
  };
  
  return (
    <div>
      <Button product="notebook" texto="Notebook" onclickfunction={handleClick} />
      <Button product="smartphone" texto="Smartphone" onclickfunction={handleClick} />

      {
        data !== null ? <Product nome={data.nome} preco={data.preco}/> : ''
      }

    </div>
  );
};