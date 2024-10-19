// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require("prompt-sync")()

let val1 = prompt("Oie, digite aqui o primeiro valor, por gentileza: ")
let val2 = prompt("E agora digite aqui o segundo valor, por favor: ")

if (val1 > val2) {
    console.log(`Os números em ordem crescente fica: ${val2} ${val1}`)
} else {
    console.log(`Os números em ordem crescente fica: ${val1} ${val2}`)
}