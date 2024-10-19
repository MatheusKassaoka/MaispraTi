const prompt = require("prompt-sync")()

// Exercício 1

// const num1 = Number(prompt("Digite um nújmero: "))

// if (num1 > 0){
    // console.log("O número informado é positivo!")

// } else if (num1 < 0){
    // console.log("O número informado é negativo!")
// } else if (num1a === 0) {
    // console.log("O número é zero.")
// } else {
    // console.log("Erro! Informe um número.")
// }

//  Exercício 2

// const year = Number(prompt("Informe um ano: "))

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 ===0)){
    // console.log(`O ano ${year} é bissexto`)
// } else{
    // console.log(`${year} não é um ano bissexto`)
// }

//  Exercício 3

// let grade1 = Number(prompt('Informe a primeira nota: '))
// let grade2 = Number(prompt('Informe a segunda nota: '))
// let grade3 = Number(prompt('Informe a terceira nota: '))

// let avg = (grade1 + grade2 + grade3)/3
// let concept

// if (avg >= 90){
    // console.log(`A média das notas é ${avg.toFixed(2)}`)
    // concept = 'A'
// } else if (avg <= 80){
    // console.log(`A média das notas é ${avg.toFixed(2)}`)
    // concept = 'B'
// } else {
    // console.log('É outra nota.')
// }

// console.log('O conceito do aluno é: ' + concept)

//  Exercício 9

// let age = Number(prompt('Informe a sua idade: '))

// let ageRange

// if(age >= 0 && age <= 12) {
    // ageRange = 'Criança'
// } else if (age >= 13 && age <= 17){
    // ageRange = 'Adolescente'
// } else if (age >= 18 && age <=60){
    // ageRange = 'Adulto'
// } else {
    // ageRange = 'Idoso'
// }

// switch(ageRange) {
    // case 'Criança':
        // console.log("Você é uma criança!")
        // break
    // case 'Adolescente':
        // console.log("Você é um(a) adolescente!")
        // break
    // case 'Adulto':
        // console.log("Você é um(a) adulto!")
        // break
    // default:
        // console.log("Você é um(a) idoso(a)")
// }

//  Exercício 10 

//   Encontre o maior divisor comum MDC de dois números
//  Escreva um programa que use um loop do while para encontrar o amior MDC de dois números fornecidos

// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))

// let a = num1
// let b = num2

// do {

//     let temp = b
//     b = a % b
//     a = temp


// } while (b !== 0)

//     const MDC = a

//     console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)

// ARRAYS

let carros = Array()

carros[0] = 'Civic'
carros[0] = 'Civic'
carros[0] = 'Civic'
carros[0] = 'Civic'

let motos = Array('CBR', 'Ninka', 10)
let livros = ['Senhor dos Anéis', 'O Hobbit', 'HP']

livros.push('Sherlock')
livros.unshift('1984')
livros.pop()
livros.shift()
livros.splice(2, 0, 1, 'Animais Fantásticos') // o 0 vai fazer nao deletar nada e colocar um novo item a partir da segunda posição

// site bom MDN DOCS
console.log(livros)

// Exercício: Verificar se um número é primo
let numeroPrimo = Number(prompt('Qual número que deseja verificar? '));

for (let i = 1; i < numeroPrimo; i++) {
    if ((numeroPrimo % i === 0) && (i !== 1)) {
        console.log('Não é primo!');
        break;
    }

    if (i === (numeroPrimo - 1)) {
        console.log('É primo!');
    }
}

// Exemplo adicional: Imprimir os 50 primeiros números primos maiores que 100
let contadorPrimos = 0;
let numeroAtual = 100;

do {
    let totalDivisores = 0;
    for (let i = 1; i <= numeroAtual; i++) {
        if (numeroAtual % i === 0) {
            totalDivisores++;
        }
    }

    if (totalDivisores === 2) { // Número primo tem exatamente dois divisores
        console.log(numeroAtual);
        contadorPrimos++;
    }

    numeroAtual++;
} while (contadorPrimos < 50);

// Trabalhando com arrays
let carros = Array();

carros[0] = 'Civic';
carros[1] = 10;
carros[2] = true;
carros['Hyago'] = '10';

let motos = Array('CBR', 'Ninja', 10);
let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter', 'Sherlock Holmes'];

// Manipulando o array de livros
livros.splice(2, 1, 'Animais Fantásticos'); // Substitui 'Harry Potter' por 'Animais Fantásticos'
console.log(livros);