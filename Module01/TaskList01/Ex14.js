// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require("prompt-sync")()

let fat = 1
let pot = Number(prompt("Olá, qual número gostaria de saber o fatorial? "))

for(i = 1; i <= pot; i++) {
    fat *= i
}

console.log(`O fatorial de ${pot} é ${fat}`)

