import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import RenderProps from './Props';

/* 
    Um dos principais conceitos do reactjs é 
    a componentização da aplicação, sendo 
    possível reutilizar todo o código de um componente
    em várias páginas diferentes.

    O ideal é criar sempre um nome único e objetivo
    para os componentes da aplicação, evitando erros.

    Uma vez importado um componente, é possível utilizar
    várias vezes.
*/


export default function App () {
    return (
        <div>
            <Header />
            <h1>Conteúdo</h1>
            <Footer />
            <Form />

            <div>
                <h2>Props:</h2>
                <RenderProps />
            </div>
        </div>
    );
};