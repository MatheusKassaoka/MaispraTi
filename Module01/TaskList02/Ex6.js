// 6. Filtrando Arrays de Objetos
//Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

const funcionarios = [
    { nome: "Lucas", cargo: "Engenheiro de Gestão", salario: 4000},
    { nome: "Matheus", cargo: "Designer", salario: 8000},
    { nome: "Welles", cargo: "Engenheiro de Software", salario: 10000},
    { nome: "Alex", cargo: "Metroviário", salario: 3000},
    { nome: "Harumi", cargo: "Modelo", salario: 12000}
]

for (const funcionario of funcionarios) {
    if (funcionario.salario > 4000) {
        console.log(`${funcionario.nome} é ${funcionario.cargo} e recebe R$ ${funcionario.salario}`)
    }
}