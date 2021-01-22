/* 
    Props são propriedades passadas
    para os componentes como se fossem 
    parametros de uma função javascript.

    ele vem dentro do objeto props que está nos parametros do componente

    As props podem ser utilizadas para diversas finalidades

    O children é o que vem dentro do componente caso você feche ele como uma tag HTML normal
*/

function Props (props) {
    return (
        <h1 style={{color: props.color}}>{props.conteudo}, {props.children}</h1>
    );
};


function RenderProps () {
    return (
        <Props conteudo="Conteúdo proveniente das props" color="red">
            Esse é o children
        </Props>
    );
};

export default RenderProps;