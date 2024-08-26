// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")()

let numero = prompt("Olá, escreva aqui o número que você quer vê-lo 10 vezes: ")

for(let count = 0; count < 10; count++) {
    console.log(numero)
}