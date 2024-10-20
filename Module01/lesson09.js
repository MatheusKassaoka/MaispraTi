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

// 1. Soma dos Elementos de um Array
let soma = 0;
let arr = [10, 20, 40, 30];

for(let i = 0; i < arr.length; i++){
    soma += arr[i]; // Acumula a soma dos elementos do array
}

console.log(soma); // Imprime a soma total dos elementos

// 2. Encontre o Maior Número em um Array
let maximo = arr[0]; // Assume que o primeiro elemento é o maior

for(let j = 0; j < arr.length; j++){
    if(arr[j] > maximo){
        maximo = arr[j]; // Atualiza o valor máximo se encontrar um maior
    }
}

console.log(maximo); // Imprime o maior valor encontrado no array

// 3. Reverter um Array            
let reverso = [];

for(let k = arr.length - 1; k >= 0; k--){
    reverso.push(arr[k]); // Adiciona os elementos na ordem inversa
}

console.log(reverso); // Imprime o array revertido

// 4. Criem um novo array contendo apenas os números pares
let pares = [];

for(let m = 0; m < arr.length; m++){
    if(arr[m] % 2 === 0){
        pares.push(arr[m]); // Adiciona o número ao novo array se for par
    }
}

console.log(pares); // Imprime o array contendo apenas os números pares

// 5. Contar Ocorrências de um Valor
const prompt = require('prompt-sync')();
let vet = [10, 10, 7, 5, 10];
let valor = Number(prompt('Insira o valor a ser pesquisado: '));
let contador = 0;

for(let l = 0; l < vet.length; l++){
    if(vet[l] === valor){
        contador++; // Incrementa o contador se o valor for encontrado
    }
}

console.log(`O valor ${valor} ocorre ${contador} vezes no vetor.`); // Imprime o número de ocorrências

// Arrays/Vetores Multidimensionais
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.table(matriz); // Exibe a matriz em formato de tabela

console.log(matriz[1][1]); // Acessa o elemento na segunda linha, segunda coluna (valor 5)

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`); // Imprime cada elemento da matriz
    }
}

// Soma de Arrays Multidimensionais
let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

let resultado = [];

if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
    throw new Error("Os arrays devem ter o mesmo tamanho."); // Verifica se as dimensões dos arrays são iguais
}

for(let i = 0; i < arr1.length; i++){
    let somaLinha = [];
    for(let j = 0; j < arr1[i].length; j++){
        somaLinha.push(arr1[i][j] + arr2[i][j]); // Soma os elementos correspondentes dos dois arrays
    }

    resultado.push(somaLinha); // Adiciona a linha resultante ao array de resultado
}

console.table(resultado); // Exibe a matriz resultante em formato de tabela