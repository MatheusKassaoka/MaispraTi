// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync") ()

let apple = prompt("Olá, quantas maçãs você quer comprar? ")
let valor

if (apple >= 0 && apple < 12) {
    valor = apple * 0.30
    console.log(`O valor total de sua compra é: R$ ${valor.toFixed(2)} reais`)
} else {
    valor = apple * 0.25
    console.log(`O valor total de sua compra é: R$ ${valor.toFixed(2)} reais`)
}