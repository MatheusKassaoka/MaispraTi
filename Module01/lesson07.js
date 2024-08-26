const prompt = require('prompt-sync')()

// Variavel; condicao, incremento

// let counter
// let multiplier = Number(promp("Informe o número que você quer saber a tabuada "))
// for (let counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} = `, multiplier * counter)
// }

// Imprimir os valores pares entre 1 e 20
//   for(let i = 0; i <= 20; i+= 2){
//    console.log(i)
// }

// Calcular a soma dos números de 1 a 100
// let sum = 0
// for(let j = 1; j <= 100; j++){
//    sum += j
//}

//console.log(sum)

//Imprimam os valores de 1 até 10 em ordem decrescente

//for(let i = 10; i >= 1; i--){
//    console.log(i)
//}

//let i = 10
//while(i > 0){
//    console.log(i)
//    i--
//}

// Calcular a soma dos números de 1 a 100

//let sum = 0
//let num = 0

//while (num <= 100){
//    sum += num
//    num++
//}

//    console.log(sum)

// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números

//let num = Number(prompt("Insira um número: "))
//let counter = 0
//let sum = 0

//while(num !== 0){
//    sum += num
//    counter++
//    num = Number(prompt("Insira um novo número: "))
//}

//console.log('A média aritmética é : ', sum/counter)

// Exercício Primos

// let prime = Number(prompt('Qual o número que deseja verificar? '))

// for(let i = 1; i < prime; i++){
//     if((prime % i ===0) && (i!==1)) {
//         console.log('Não é primo!')
//         break
//     }

//     if(i === (prime -1)){
//         console.log('É primo!')
//     }
// }

// Escreva um algoritmo para imprimir os 50 primeiros números primos maior que 100

// let num = 100
// let counter = 0

// do {
//     let divisores = 0
//     for(let i = 1; i <= num; i++){
//         if(num % i ===0){
//             divisores++
//         }
//     }

//     if(divisores === 2){
//         console.log(num)
//         counter++
//     }

//     num++

// } while(counter < 50)


// Solicitar números ao usuário até que ele insira um valor negativo

// let num

//do {
//    num = Number(prompt("Insira um número: "))
//} while(num >= 0)
    