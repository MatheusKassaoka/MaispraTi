//5. Calculando Valores em Arrays de Objetos
//Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

const alunos = [
    { nome: "Lucas", nota1: 10, nota2: 9},
    { nome: "Matheus", nota1: 7, nota2: 8},
    { nome: "Welles", nota1: 10, nota2: 10}
]

for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2
    console.log(`${aluno.nome} tem como média ${media}`)
}