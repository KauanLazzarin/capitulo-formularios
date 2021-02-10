import Question from "./Question";
import React from 'react';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()'
    ],
    resposta: 'React.createElement()',
    id:'p1'
  },

  {
    pergunta: 'Como importamos componentes externos?',
    options: [
      'import Component from "./Component',
      'require("./Component")',
      'import "./Component"'
    ],
    resposta: 'import Component from "./Component',
    id:'p2'
  },

  {
    pergunta: 'Qual hook não é nativo?',
    options: [
      'useEffect()',
      'useFetch()',
      'useCallback'
    ],
    resposta: 'useFetch()',
    id:'p3'
  },

  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: [
      'set',
      'set',
      'use'
    ],
    resposta: 'use',
    id:'p4'
  }
];

export default function App() {
  const [currentNumber, setNumber] = React.useState(1);
  const [currentAnswer, setAnswer] = React.useState('');
  const [isCorrect, setCorrect] = React.useState(true);
  const [currentQuestion, setCurrentQuestion] = React.useState(perguntas[currentNumber - 1]);
  
  function handleChange (value) {
    console.log(currentAnswer)
    setAnswer(value);
  }

  function handleSubmit (event) {
    event.preventDefault();
    
    if (currentAnswer === currentQuestion.resposta && currentNumber !== perguntas.length ) {
      setCorrect(true);
      setNumber(currentNumber + 1);
      setCurrentQuestion(perguntas[currentNumber]);
    } else {
      setCorrect(false);
      setNumber(currentNumber - currentNumber);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Question question={currentQuestion.pergunta} options={currentQuestion.options} setValue={handleChange}/>
        <button>Próxima</button>

        {!isCorrect && <h3>Errado, tente novamente</h3>}
      </form>
    </div>
  );
}
