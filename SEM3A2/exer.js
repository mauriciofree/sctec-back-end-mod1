 //npm install prompt-sync

 /*
========================================
LISTA DE EXERCÍCIOS - LAÇOS DE REPETIÇÃO
Contexto: Situações do dia a dia
========================================
*/

// =============================
// EXERCÍCIO 1 - FOR
// =============================
/*
Uma escola deseja listar todos os números de chamada dos alunos de uma turma.
Sabendo que a turma possui 30 alunos, exiba no console os números de 1 a 30.
*/

console.log("Exercício 1");
// Seu código aqui

for(let i=0; i<30; i++){
    console.log("Aluno "+(i+1));
}


// =============================
// EXERCÍCIO 2 - FOR
// =============================
/*
Um sistema de vendas precisa calcular o valor total de 5 produtos.
Considere que os valores estão armazenados em um array.
Exiba o valor total da compra.
*/

console.log("\nExercício 2");

const produtos = [10.50, 25.00, 7.30, 12.00, 5.20];

// Seu código aqui

let totalProdutos = 0;
for(let p=0; p<produtos.length; p++){
    totalProdutos+=produtos[p];
}

console.log("Valor total da compra: "+totalProdutos);


// =============================
// EXERCÍCIO 3 - WHILE
// =============================
/*
Um caixa eletrônico permite saques até que o saldo acabe.
Dado um saldo inicial de R$ 1000, simule saques de R$ 150 enquanto houver saldo suficiente.
Exiba o saldo restante a cada saque.
*/

console.log("\nExercício 3");

let saldo = 1000;

// Seu código aqui

let saque = 150;

while(saldo>=saque){
    saldo-=saque;
    console.log("Saque realizado: R$ "+saque+" - Saldo restante: R$ "+saldo);
}


// =============================
// EXERCÍCIO 4 - WHILE
// =============================
/*
Um aplicativo de corrida registra a distância percorrida até atingir a meta de 10km.
Simule incrementos de 2km por execução e exiba o progresso até atingir ou ultrapassar a meta.
*/

console.log("\nExercício 4");

let distancia = 0;

// Seu código aqui

let meta = 10;
let incremento = 2;

console.log("Iniciando viagem...");

while (distancia<meta){
    distancia+=incremento;
    console.log("Progresso atual: "+distancia+"km");
}

console.log("Meta alcaçada!");


// =============================
// EXERCÍCIO 5 - DO...WHILE
// =============================
/*
Um sistema pede senha ao usuário até que a senha correta seja digitada.
Considere que a senha correta é "1234".
Simule tentativas usando uma variável e execute pelo menos uma vez.
*/

console.log("\nExercício 5");

let senhaCorreta = "1234";
let tentativa = ""; // Simule diferentes valores

// Seu código aqui

const  prompt = require("prompt-sync")();

do{
    if (tentativa!=''){ console.log("\nSenha invorreta!"); }
    tentativa = prompt('Digite a senha: ');
}while(senhaCorreta!==tentativa);
console.log("\nSenha correta!");

// =============================
// EXERCÍCIO 6 - DO...WHILE
// =============================
/*
Um jogo solicita ao jogador que continue jogando até decidir sair.
Simule a execução do jogo exibindo "Jogando..." pelo menos uma vez
e utilize uma variável para controlar a decisão de saída.
*/

console.log("\nExercício 6");

let continuar = false; // altere para simular comportamento

// Seu código aqui
do{
    console.log('Jogando...');
    continuar = prompt('Continuar jogando (s/n): ') !== 's';
}while(continuar);
console.log('Saiu do jogo.');


// =============================
// EXERCÍCIO DESAFIO
// =============================
/*
Uma loja deseja aplicar desconto progressivo:
- Para cada item comprado, o cliente ganha R$ 2 de desconto
- Limite máximo de desconto: R$ 20

Dado um array com 15 itens, calcule o desconto total usando FOR.
*/

console.log("\nDesafio");

const itens = new Array(15).fill(1);

// Seu código aqui

let desc_limite = 20;
let desc_poritem = 2;
let desc_total = 0;
let desc_item = 0;

for(let d=0;d<itens.length;d++){
    desc_item = (desc_poritem*itens[d]);
    desc_total+= desc_item;
    if (desc_total>=desc_limite){
        if (desc_total>desc_limite){
            desc_item = desc_limite - (desc_total - desc_item);
            desc_total = desc_limite;
        }
        console.log("Desconto Item "+(d+1)+" ("+itens[d]+" UN): R$ "+desc_item);        
        break;
    }
    console.log("Desconto Item "+(d+1)+" ("+itens[d]+" UN): R$ "+desc_item);
}

console.log("Desconto total: R$ "+desc_total);