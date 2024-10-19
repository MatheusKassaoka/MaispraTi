// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require("prompt-sync")()

let height = prompt("Olá, digite aqui a sua altura, em metros, por favor: ")
let weight = prompt("E aqui digite o seu peso, em kilos, por gentileza: ")

let IMC = weight/(height**2)

if (IMC < 18.5 ) {
    console.log("O seu IMC está na classificação baixo peso.")
} else if (IMC <= 24.9) {
    console.log("O seu IMC está na classificação peso normal.")
} else if (IMC <= 29.9) {
    console.log("O seu IMC está na classificação sobrepeso.")
} else if (IMC >= 30) {
    console.log("O seu IMC está na classificação obesidade.")
} else {
    console.log("Dados inválidos")
}