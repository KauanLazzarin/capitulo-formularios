import React from 'react';

/* 
  Os eventos no react funcionam igual no javascript puro
  porém o react possui seus proprios eventos que são 
  suportados por todos os browsers que rodam o react.
  Isso ajuda na compatibilidade e evita bugs.
*/

// onClick = addEventListener('click',...)
// onMouseMove = addEventListener('mouse-move',...)

// Mais eventos: reactjs.org/docs/events.html


/* 
  Para utilizar eventos na janela / window 
  tem que se utilizar de javascript puro.
  O mais ideal é utilizar um hook.
*/

function App() {

  function handleWindowEvent (event) {
    console.log(event.target);
  };

  function handleEvent (event) {
    console.log(event.target);
  };

  // Evento na janela / windows
  window.addEventListener('click', handleWindowEvent);
  window.onClick = () => handleWindowEvent();

  return (
    <button onClick={handleEvent} onMouseMove={handleEvent}>Clique aqui</button>    
  );
}

export default App;
