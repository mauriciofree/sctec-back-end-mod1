const nota = 7.5;

if (nota>=9){
    console.log('Excelente');
}else if (nota>=7){
    console.log('Aprovado');
}else if (nota>=5){
    console.log('Recuperação');
}else{
    console.log('Reprovado');
}

let test = ''===' '

console.log(test);

let nome = '  Davi';

if (nome.trim() !== ''){
    console.log(`${nome.trim()}! Seja bem vindo!`);
}

const x = 30;
const xRange = x >= 70 && x < 100

const yValido = y !== null

if (xRange && yValido){
    console.log('Logica complexa - código auto-documentado');
}

