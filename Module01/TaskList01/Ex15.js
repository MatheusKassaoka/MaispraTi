// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let ant = 0
let prim = 1
let soma = 0

for(i = 1; i <= 10; i++){
    console.log(ant)

    soma = ant + prim
    ant = prim
    prim = soma
}