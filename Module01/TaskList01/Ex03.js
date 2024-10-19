//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")()

let grade = prompt("Olá, insira aqui a sua nota, por favor: ")

if (grade >= 7 && grade <= 10) {
    console.log("Parabéns! Você foi aprovado!")
} else if (grade >= 5 && grade < 7) {
    console.log("Você está de recuperação, mas eu acredito em você!")
} else if (grade >= 0 && grade < 5) {
    console.log("Sinto muito, você foi reprovado!")
} else {
    console.log("Digite uma nota válida!")
}