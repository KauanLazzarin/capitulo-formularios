import React from 'react';

function slowCalc () {
    let c;

    for (let i = 0; i < 100000000; i++) {
        c = i + i / 10 * 100;
    };

    return c;
};

export default function UseMemo () {
    const [counter, updateCounter] = React.useState(0); // Fazer com que o componente seja novamente renderizado.
    
    // Executando uma função que demora calcular, verificamos então a performance
    
    const time = performance.now();
    React.useMemo(() => {
        slowCalc();
    }, []);
    console.log(`Response time: ${Math.round(performance.now() - time)}ms`);
    
    return <button onClick={() => updateCounter( counter + 1)}>{counter}</button>
};