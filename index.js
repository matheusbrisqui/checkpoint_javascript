/*Guilherme Dal Posolo Matheus I Rm: 98694
Guilherme Rezende Bezerra I Rm: 98508
Gustavo Brisqui Martinez I Rm: 97969
Matheus Brisqui Martinez I Rm: 97892
Ryan Perez Pacheco I Rm: 98782
*/


/* 1 -Como declarar uma variável com valor undefined em JavaScript?Exemplifique e demonstre a saída do valor da variável!*/

/* // Declarando a variável
let qualquer = undefined

// Demonstrando a saída
console.log(qualquer) */


/* 2 -Como usar o operador % em JavaScript?Exemplifique e demonstre a saída! */

/* // O operador de % em JavaScript significa módulo, ou seja, o retorno dessa operação é o restante da divisão de um número pelo outro
let numero1 = parseInt(prompt("Digite um número: "))
let numero2 = parseInt(prompt("Digite um número"))

// Mostrando a saída
conta = numero1 % numero2
console.log(conta) */


/* 3 -Escreva  um  programa  que  calcula  o  índice  de  massa  corporal  (IMC)  de  uma  pessoa  e  exibe  uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as seguintes faixas de 
IMC:  abaixo  de  18,5  (abaixo  do  peso),  entre  18,5  e  24,9  (peso  ideal)  e  acima  de  24,9  (acima  do  peso). Exemplifique e demonstre a saída! */

// Declarando as variáveis
let peso = parseFloat(prompt("Digite seu peso: "))
let altura = parseFloat(prompt("Digite sua altura: "))

// Fazendo os cálculos
imc = peso / (altura * altura)

// Retornando o IMC do cliente
if(imc < 18.5){
    document.write("Você está abaixo do peso ideal.")
}else if(imc >= 18.5 && imc <= 24.9){
    document.write("Você está no peso ideal.")
}else{
    document.write("Você está acima do peso.")
}