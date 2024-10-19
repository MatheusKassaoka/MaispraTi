//9. Contabilizando Elementos com uma Condição 
//Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

const clientes = [
    { nome: "Lucas", idade: 32, cidade: "Santos"},
    { nome: "Yuri", idade: 20, cidade: "Salvador"},
    { nome: "Yukari", idade: 25, cidade: "São Sebastião"},
    { nome: "Hikari", idade: 35, cidade: "Jijoca"},
    { nome: "Jhonny", idade: 40, cidade: "Florianópolis"}
]

let cont = 0

clientes.forEach((cliente) => {
    if (cliente.idade > 30) {
        cont++
    }
})

console.log(`Temos ${cont} clientes com mais de 30 anos.`)