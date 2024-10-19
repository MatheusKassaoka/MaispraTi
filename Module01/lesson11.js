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

// Exemplo 1: Função anônima armazenada em uma variável e executada
let teste = function () {
    console.log('Olá, mundo!'); // Imprime 'Olá, mundo!'
};

teste(); // Chama a função 'teste'

// Exemplo 2: Função que recebe callbacks para sucesso e erro
function showFunction(successCallback, errorCallback) {
    if(false){ // Simula uma condição sempre falsa
        successCallback("Requisição bem sucedida");
    } else {
        errorCallback("Erro na requisição"); // Chama o callback de erro
    }
}

let successCallback = function(message) {
    console.log(message); // Imprime a mensagem de sucesso
};

let errorCallback = (message) => {
    console.log(message); // Imprime a mensagem de erro
};

showFunction(successCallback, errorCallback); // Chama a função com os callbacks

// 1. Soma dos Elementos de um Array
function arrSum(arr){
    let sum = 0;

    for(let i= 0; i < arr.length; i++){
        sum += arr[i]; // Soma cada elemento do array à variável 'sum'
    }

    return sum; // Retorna a soma total
}

console.log(arrSum([10, 20, 40, 30])); // Imprime a soma dos elementos do array

// 2. Encontre o Maior Número em um Array
function findMax(arr) {
    let max = arr[0]; // Assume que o primeiro elemento é o maior

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]; // Atualiza o maior valor encontrado
        }
    }

    return max; // Retorna o maior valor
}

let arr = [1, 2, 3, 4, 5];

console.log(findMax(arr)); // Imprime o maior número do array

// Trabalhando com Strings
let nome = " Equipe Olímpica ";

console.log("Jaques".length); // Imprime o tamanho da string
console.log("Jaques".charAt(0)); // Imprime o primeiro caractere
console.log(nome.indexOf('q')); // Encontra a primeira ocorrência de 'q'

console.log(nome.replace('Ja', 'Mar')); // Substitui 'Ja' por 'Mar'

console.log(nome.substr(7, 8)); // Extrai uma parte da string

console.log(nome.toUpperCase()); // Converte a string para maiúsculas
console.log(nome.toLowerCase()); // Converte a string para minúsculas

console.log('-' + nome.trim() + '-'); // Remove espaços em branco no início e fim da string

// Operações Matemáticas
console.log(Math.ceil(100.73)); // Arredonda para cima
console.log(Math.floor(100.73)); // Arredonda para baixo
console.log(Math.round(100.73)); // Arredonda para o número inteiro mais próximo
console.log(Math.sqrt(100)); // Calcula a raiz quadrada
console.log(Math.pow(100, 2)); // Eleva ao quadrado
console.log(Math.cbrt(100)); // Calcula a raiz cúbica
console.log(Math.abs(100.20)); // Retorna o valor absoluto
console.log(Math.random() * 100); // Gera um número aleatório entre 0 e 100

// Trabalhando com Datas
let date = new Date();

console.log(date.getDate()); // Imprime o dia do mês
console.log(date.getMonth() + 1); // Imprime o mês (começa em 0, por isso +1)
console.log(date.getFullYear()); // Imprime o ano

console.log(date.toString()); // Imprime a data como string

date.setDate(date.getDate() + 720); // Adiciona 720 dias à data
console.log(date.toString()); // Imprime a nova data

date.setFullYear(date.getFullYear() + 720); // Adiciona 720 anos à data
console.log(date.toString()); // Imprime a nova data

// Exemplo: Diferença em dias entre duas datas
let date1 = new Date(2024, 7, 6);
let date2 = new Date(2023, 7, 6);

console.log(date1.toString()); // Imprime a primeira data

console.log(date1.getTime()); // Obtém a data em milissegundos desde 01/01/1970
console.log(date2.getTime()); // Obtém a segunda data em milissegundos

let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime());
console.log(milissegundosEntreDatas); // Diferença em milissegundos entre as duas datas

let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000); // Milissegundos em um dia
console.log(`Um dia tem ${milissegundosPorDia} milissegundos`);

console.log(`A diferença entre as datas é de ${Math.ceil(milissegundosEntreDatas/milissegundosPorDia)} dias`); // Diferença em dias arredondada para cima

// Funções adicionais:

// 1. Inverter uma string
function reverseString(str) {
    return str.split('').reverse().join(''); // Divide a string em array, inverte e junta novamente
}
console.log(reverseString("Olá, mundo!"));

// 2. Contar vogais em uma string
function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi); // Encontra todas as vogais na string
    return vowels ? vowels.length : 0; // Retorna o número de vogais
}
console.log(countVowels("Equipe Olímpica"));

// 3. Gerar número aleatório entre dois valores
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Gera número aleatório no intervalo
}
console.log(randomBetween(1, 100));

// 4. Dias entre duas datas
function daysBetweenDates(date1, date2) {
    let timeDifference = Math.abs(date1.getTime() - date2.getTime()); // Diferença em milissegundos
    return Math.ceil(timeDifference / milissegundosPorDia); // Converte milissegundos para dias
}
console.log(daysBetweenDates(date1, date2));

// 5. Formatar data
function formatDate(date) {
    let day = date.getDate().toString().padStart(2, '0'); // Formata o dia
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Formata o mês
    let year = date.getFullYear(); // Obtém o ano
    return `${day}/${month}/${year}`; // Retorna a data formatada
}
console.log(formatDate(date1));