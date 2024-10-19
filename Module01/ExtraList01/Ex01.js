//1 - Verifique se um número é positivo, negativo ou zero

const prompt = require("prompt-sync")()

let num = Number(prompt("Olá, bem vindo, digite aqui o número: "))

if (num > 0) {
    console.log("Esse número é positivo!")
}

if (num < 0) {
    console.log("Esse número é negativo!")
}

if (num === 0){
    console.log("É um ZERO!")
}