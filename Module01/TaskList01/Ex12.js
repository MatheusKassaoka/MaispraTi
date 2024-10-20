// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require("prompt-sync")()

let tab = prompt("Oie, qual número você gostaria de saber a tabuada? ")

for(i = 1; i <= 10; i++) {
    mult = tab*i
    console.log(`${tab} x ${i} = ${mult}`)
}