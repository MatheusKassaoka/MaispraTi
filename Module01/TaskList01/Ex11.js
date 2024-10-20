// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require("prompt-sync")()

let sum = 0

for( let count = 0; count < 5; count++){
    let numb = Number(prompt("Olá, digite aqui um número, por favor: "))
    sum += numb 
}

console.log(`Olha só, a soma dos números digitados é: ${sum}.`)
