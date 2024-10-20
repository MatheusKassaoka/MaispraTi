// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require("prompt-sync")()

let age = prompt("Oie, digite aqui a idade da pessoa: ")

if (age > 0 && age < 13) {
    console.log("Essa pessoa é uma criança!")
} else if (age > 12 && age < 19) {
    console.log("Essa pessoa é um adolescente!")
} else if (age > 18 && age < 65) {
    console.log("Essa pessoa é um adulto!")
} else if (age > 64) {
    console.log("Essa pessoa é um(a) idoso(a)")
} else {
    console.log("Idade inválida!")
}