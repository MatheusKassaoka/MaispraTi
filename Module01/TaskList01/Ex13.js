// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")()

let dec = 1
let soma = 0
let count = 0

while(dec !== 0)  {
    dec = parseFloat(prompt("Olá, digite aqui um número, por favor: "))

    if (dec !== 0) {
        soma += dec
        count++
    }
  
}

let mediaari = soma/count

console.log(`A média aritmética dos números digitados é: ${mediaari.toFixed(2)}`)