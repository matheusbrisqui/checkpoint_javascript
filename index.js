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

/* // Declarando as variáveis
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
} */



/* 4 -Faça um programa que recebaa idade de uma pessoa e exibauma mensagem indicando em qual faixa etária ela se encontra: criança (até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e 60 anos) ou idoso (mais de 60 anos). Exemplifique e demonstre a saída!*/

/* // Declarando e pedindo idade da pessoa
let idade = parseInt(prompt("Digite sua idade: "))

// Dizendo ao usuário qual faixa ele se encontra
if(idade <= 12){
    document.write("Você é um criança.")
}else if(idade >= 13 && idade <= 18){
    document.write("Você é um adolescente.")
}else if(idade >= 19 && idade <= 60){
    document.write("Você é um adulto.")
}else{
    document.write("Você é um idoso.")
} */



/* 5 -Crieum programa que recebaum nome de usuário e uma senha e verifiquese eles correspondem aos dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou se houve falha de autenticação.Exemplifique e demonstre a saída! */

/* // Declarando usuário admin e sua senha 
let usuario_pedido = prompt("Digite seu user: ", "Escreva aqui")
let senha_requisitada = prompt(" Digite sua senha", "Escreva aqui")

// Checando se o usuário será cadastrado ou não
if(usuario_pedido == "admin" && senha_requisitada == "1234"){
    document.write("Login realizado com sucesso")
}else{
    document.write("Falha de autenticação.")
} */



/* 6 -Vamoscriar um programa que calculea média de 7notas e exibauma mensagem indicando se o aluno foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6.Exemplifique e demonstre a saída!*/

/* // Declarando as variáveis das notas e media
nota1 = parseFloat(prompt("Digite sua primeira nota: "))
nota2 = parseFloat(prompt("Digite sua segunda nota: "))
nota3 = parseFloat(prompt("Digite sua terceira nota: "))
nota4 = parseFloat(prompt("Digite sua qurta nota: "))
nota5 = parseFloat(prompt("Digite sua quinta nota: "))
nota6 = parseFloat(prompt("Digite sua sexta nota: "))
nota7 = parseFloat(prompt("Digite sua sétima nota: "))

media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7

// Retornando ao usuário a média final e se foi aprovado ou não
if(media >= 6){
    document.write("Você foi aprovado!")
}else{
    document.write("Você foi reprovado")
} */



/* 7 -Crie um programa que digite o nome, idade, Curso e ano na tela um embaixo do outro , no seu html coloque um fundo e um titulo e o javascript deve ser externo. */

// Colocando nome, idade, curso e ano
document.write("Matheus <br>")
document.write("18 anos <br>")
document.write("Engenharia de Software <br>")
document.write("Primeiro ano de curso")
