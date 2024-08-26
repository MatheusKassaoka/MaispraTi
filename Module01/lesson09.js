const prompt = require("prompt-sync")()

// 1. Soma dos elementos de um Array


// let sum = 0
// let arr =[10, 20, 30, 40]

// for(let j = 0; j < arr.length; j++){
//     sum += arr[j]
// }

// console.log(sum)

// // Encontre o maior número em um Array

// let max = arr[0]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }

// console.log(max)

// // Reverter um Array

// let reversed = []

// for(let k = arr.length - 1; k >= 0; k--){
//     reversed.push(arr[k])
// }

// console.log(reversed)

// // Criar um novo array contendo apenas os números pares

// let evens = []

// for(let m = 0; m < arr.length; m++){
//     if(arr[m] % 2 === 0){
//         evens.push(arr[m])
//     }
// }

// console.log(evens)


// // Contar ocorrências de um valor

// let vet = [10, 10, 7, 5, 10]
// let value = Number(prompt('Insira o valor a ser pesquisado: '))
// let count = 0

// for(let l = 0; l < vet.length; l++){
//     if(vet[l] === value){
//         count++
//     }
// }

// console.log(`O valor ${value} ocorre ${count} vezes no vetor`)

// arrays e vetores multidimensionais

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// // console.table(matriz)

// // console.log(matriz[0][2])

// for(let linha = 0; linha < matriz.length; linha++){
//     for(let coluna = 0; coluna < matriz[linha].length; coluna++){
//         console.log(`Elemento na posição [${linha}][${coluna}]: ${matriz[linha][coluna]}`)
//     }
// }


// let arr1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let arr2 = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ]

// let resultado = []

// if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
//     throw new Error ("Os arrays devem ter o mesmo tamanho")
// }

// for(let i = 0; i < arr1.length; i++){
//     let somalinha = []
//     for(let j = 0; j < arr1[i].length; j++){
//         somalinha.push(arr1[i][j] + arr2[i][j])
//     }

//     resultado.push(somalinha)
// }

// console.table(arr1)
// console.table(arr2)
// console.table(resultado)
