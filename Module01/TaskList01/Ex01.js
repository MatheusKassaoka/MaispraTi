// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")()

let num = prompt("Olá, qual número você quer saber se é par ou ímpar? ")

if (num % 2 == 0) {
    console.log("Esse número é par!")
} else {
    console.log("Esse é um número ímpar!")
}