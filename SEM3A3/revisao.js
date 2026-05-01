/**
 * REVISÃO DE JAVASCRIPT
 * Temas:
 * - Estruturas Condicionais
 * - Laços de Repetição
 * - Funções
 */

// ======================================================
// 1. ESTRUTURAS CONDICIONAIS
// ======================================================

/**
 * EXERCÍCIO 1:
 * Um sistema de delivery cobra taxa baseada no valor do pedido:
 * - Até R$ 20 → taxa de R$ 5
 * - De R$ 21 a R$ 50 → taxa de R$ 3
 * - Acima de R$ 50 → frete grátis
 */

function calcularFrete(valorPedido) {
  let valorFrete = 0;
  // TODO: implementar lógica condicional
  if (valorPedido<=20){ 
    valorFrete = 5; 
  }else if (valorPedido<=50){ 
    valorFrete = 3;  
  }
  
  let msgFrete = `R$ ${valorFrete}`;
  if (valorFrete<=0){
    msgFrete = 'Grátis';
  }

  return {
      valorFrete: valorFrete,
      valorTotal: valorPedido+valorFrete,
      msgFrete: msgFrete
  }
}

// Teste
console.log(calcularFrete(15));
console.log(calcularFrete(30));
console.log(calcularFrete(60));


/**
 * EXERCÍCIO 2:
 * Um aluno é aprovado se sua média for >= 7.
 * Se estiver entre 5 e 6.9 → recuperação.
 * Abaixo de 5 → reprovado.
 */

function verificarSituacao(media) {
  // TODO: implementar
  if (media>=7){ return "Aprovado"; }else
  if (media>=5){ return "Recuperação"; }else
  { return "Reprovado"; }
}

// Teste
console.log("Situação:", verificarSituacao(8));
console.log("Situação:", verificarSituacao(6));
console.log("Situação:", verificarSituacao(4));


// ======================================================
// 2. LAÇOS DE REPETIÇÃO
// ======================================================

/**
 * EXERCÍCIO 3:
 * Exibir no console todos os números de 1 a 10 utilizando FOR
 */

  // TODO: implementar usando for
  for(let i=1;i<=10;i++){
    console.log(i);
  }


/**
 * EXERCÍCIO 4:
 * Simular um sistema que conta quantos produtos foram adicionados ao carrinho.
 * O sistema deve parar quando atingir 5 produtos.
 * Utilizar WHILE.
 */

  // TODO: implementar
  let produtos = 0;
  while (produtos<5){
    produtos++;
    console.log('Qtd Produtos: '+produtos)
  }


/**
 * EXERCÍCIO 5:
 * Simular um sistema de login:
 * O usuário tem até 3 tentativas para acertar a senha.
 * Usar DO-WHILE.
 */

  let tentativas = 0;
  let senhaCorreta = "1234";
  let senhaDigitada;
  let ok = false;

  // TODO: implementar lógica

  const prompt = require("prompt-sync")();


  do{
    senhaDigitada = prompt("Insira sua senha: ");
    ok = (senhaCorreta===senhaDigitada);
    if (!ok){
      console.log('Senha Inválida!');
      tentativas++;
      ok = (tentativas>=3);
      if (ok){
        console.log('Tentativas esgotadas!');
      }
    }else{
      console.log('Senha Correta!');
    }

  }while(!ok);


// ======================================================
// 3. FUNÇÕES
// ======================================================

/**
 * EXERCÍCIO 6:
 * Criar uma função que receba um array de preços e retorne
 * o valor total da compra.
 */

function calcularTotal(precos) {
  // TODO: implementar
  let total = 0;
  for(let i=0;i<precos.length;i++){
    total+=precos[i];
  }
  return total;
}

// Teste
console.log("Total:", calcularTotal([10, 20, 30]));


/**
 * EXERCÍCIO 7:
 * Criar uma função que receba um nome e retorne uma saudação personalizada.
 */

  // TODO: implementar

function saudacao(nome){
  return `Olá ${nome}!`;
}
console.log(saudacao("Davi"));


/**
 * EXERCÍCIO 8:
 * Criar uma função que receba um número e retorne:
 * - "Par" se for par
 * - "Ímpar" se for ímpar
 */

  // TODO: implementar

  function parImpar(num){
    let par = (num%2)==0;
    if (par){ 
      return 'Par';
    }else{
      return 'Impar';
    }
  }

console.log(parImpar(10));
console.log(parImpar(7));


// ======================================================
// DESAFIO FINAL
// ======================================================

/**
 * Um sistema de estacionamento cobra:
 * - R$ 5 por hora
 * - Se passar de 3 horas, aplica desconto de 10%
 *
 * Crie uma função que receba o número de horas e retorne o valor final.
 */


  // TODO: implementar

  function valorEstacionamento(horas){
      let valorCobrar = horas * 5;
      if (horas>3){
          valorCobrar-= (valorCobrar/10);
      }
      return valorCobrar;
  }


console.log("Valor estacionamento:", valorEstacionamento(2));
console.log("Valor estacionamento:", valorEstacionamento(4));

/**
 * Perguntas para reflexão:
 * 1. Quando usar if/else ao invés de switch?
 * 2. Qual a diferença prática entre while e do-while?
 * 3. Por que dividir código em funções melhora a manutenção?
 */
