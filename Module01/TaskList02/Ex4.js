//4. Iterando Sobre Arrays de Objetos
//Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

const pessoas = [
    { nome: "Lucas", idade: 32, cidade: "Santos"},
    { nome: "Welles", idade: 30, cidade: "Florianópolis"},
    { nome: "Amara", idade: 27, cidade: "Salvador"},
    { nome: "Irene", idade: 60, cidade: "Porto Seguro"},
    { nome: "Roberto", idade: 64, cidade: "Jijoca"}
]

for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
    
}