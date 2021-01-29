// 

import React from 'react';

export default function App() {
  
  const [data, setData] = React.useState({
    nome: '',
    email: '',
    senha: 0,
    cep: 0,
    rua: '',
    numero: 0,
    bairro: '',
    cidade: '',
    estado: ''
  });

  function handleChange ( {target} ) {
    const {id, value} = target;
    setData({...data, [id]: value});
    console.log(data)          
  };

  async function handleSubmit ( event ) {
    event.preventDefault();

    try {
      const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      console.log(response);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form>

      <div>
        <label htmlFor="name">Nome</label>
        <input 
        value={data.nome}
        type="text"
        name="nome"
        id="nome"
        onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input 
        value={data.email}
        type="email"
        name="email"
        id="email"
        onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="senha">Senha</label>
        <input 
        value={data.senha}
        type="password"
        name="senha"
        id="senha"
        onChange={handleChange}
        />
      </div>

      <div>        
      <label htmlFor="cep">Cep</label>
        <input 
        value={data.cep}
        type="number"
        name="cep"
        id="cep"
        onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="rua">Rua</label>
        <input 
        value={data.rua}
        type="text"
        name="rua"
        id="rua"
        onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Número</label>
        <input 
        value={data.numero}
        type="number"
        name="numero"
        id="numero"
        onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Bairro</label>
        <input 
        value={data.bairro}
        type="text"
        name="bairro"
        id="bairro"
        onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Cidade</label>
        <input 
        value={data.cidade}
        type="text"
        name="cidade"
        id="cidade"
        onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Estado</label>
        <input 
        value={data.estado}
        type="text"
        name="estado"
        id="estado"
        onChange={handleChange}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>Enviar</button>
    </form>
  );
}