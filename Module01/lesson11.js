// let teste = function () {
//     console.log('Olá mundo!')
// }

// teste()

// function showFunction(sucessCallback, errorCallback) {
//     if(false){
//         sucessCallback("Requisição bem sucedida")
//     } else {
//         errorCallback("Erro na requisição")
//     }
// }

// let sucessCallback = function(message) {
//     console.log(message)
// }

// let errorCallback = function(message) {
//     console.error(message)
// }

// showFunction(sucessCallback, errorCallback)

// let arrSum = function(arr) {
//     let sum = 0

//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }

//     return sum
// }

// let arr = [10, 20, 40, 30]
// let sum = arrSum(arr)

// console.log(sum)

// function findMax(arr) {
//     let max = arr[0]

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }

//     return max

// }

// let arr = [1, 2, 3, 4, 5]

// console.log(findMax(arr))

// const prompt = require("prompt-sync")()

// let vet = [10, 10, 7, 5, 10]
// let value = Number(prompt("Digite um valor a procurar: "))

// let ArrOcorrencias = function(value, vet) {
//     let count = 0

//     for(let c = 0; c < vet.length; c++){
//         if(vet[c] === value) {
//             count++
//         }

//     }

//     return count
// }

// let contarOcorrencias = ArrOcorrencias(value, vet)

// console.log(`O valor ${value} ocorre ${contarOcorrencias} vezes no vetor`)

// console.log("Matheus".length)
// console.log("Matheus".charAt(0))

// let nome = "Equipe Olímpica"

// // console.log(nome.indexOf("a"))
// // // console.log(nome.replace("Matheus", "Ga"))
// // console.log(nome.substr(7, 8))

// // console.log(nome.toUpperCase())
// // console.log(nome.toLowerCase())
// console.log('-' + nome.trim() + '-')

// Matemáticos

// console.log(Math.ceil(100.73))
// console.log(Math.floor(100.73))
// console.log(Math.round(100.73)) // 
// console.log(Math.sqrt(100))
// console.log(Math.pow(100, 2)) //potencia
// console.log(Math.cbrt(100)) // raiz cubica
// console.log(Math.abs(100.20)) // numero absoluto
// console.log(Math.random() * 100) 

// //datas

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())

// console.log(date.getDate() + 720)

// console.log(date.toString())

// date.setDate(date.getDate() + 720)
// console.log(date.toString())

// date.setFullYear(date.getFullYear() + 720)
// console.log(date.toString())

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// console.log(date1.toString())

// console.log(date1.getTime()) // contagem de segundos
// console.log(date2.getTime()) // contagem de segundos

// let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
// console.log(miliseconds_between_dates)

// let miliseconds_per_day = (1* 24* 60* 60 * 1000)
// console.log(`Um dia tem ${miliseconds_per_day} milisegundos`)

// console.log(`A diferença entre as datas é de ${Math.ceil(miliseconds_between_dates/miliseconds_per_day)} dias.`)

//Inverter uma string

// Contar vogais

// Gerar número aleatório

// Dias entre duas datas

// Formatar data