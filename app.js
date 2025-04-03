//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function VerificarBotao() {
    console.log('o botão foi clicado');
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function VerificarAlerta(){
    alert('Eu amo JS');
}
//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil.
//  Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function VerificarCidade(){
 let cidade = prompt('diga o nome de uma cidade');
 alert(`estive em ${cidade} e lembrei de você`);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function VerificarSoma(){
    let valor1 = parseInt(prompt('digite um numero inteiro'));
    let valor2 = parseInt(prompt('digite outro numero inteiro'));
    resultado = valor1 + valor2;
    alert(`a soma de ${valor1} e ${valor2} é ${resultado}`);
}