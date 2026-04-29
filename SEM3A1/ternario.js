//short-circ
const logado = false;
logado && console.log('Logado');

//ternario
const pontos = 50;
const msg = pontos>100 
            ? 'Campeão' 
            : 'Tente mais';
console.log(msg);

const input = 'Teste';
msg = input!==null && input !== undefined 
        ? input 
        : 'Anonimo';
console.log(msg);

let nome = input ?? 'Anonimo';
nome = input || 'Anonimo';
console.log(nome);
