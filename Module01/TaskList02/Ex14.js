//14. Manipulando Objetos Complexos
//Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

const empresa = {
    departamentos: [
        {
            nome: "Operação",
            funcionarios: [
                { nome: "Alex", cargo: "Operador de Trem"},
                { nome: "Seidi", cargo: "Operadora de Console"}
            ]
        },
        {
            nome: "Financeiro",
            funcionarios: [
                { nome: "Lucas", cargo: "Analista"},
                { nome: "Veridi", cargo: "Contadora"}
            ]
        },
        {
            nome: "Manutenção",
            funcionarios: [
                { nome: "Michel", cargo: "Chefe do departamento"},
                { nome: "Mauro", cargo: "Técnica de Elétrica"}
            ]
        },
        {
            nome: "Limpeza",
            funcionarios: [
                { nome: "Gabriel", cargo: "Encarregado"},
                { nome: "Vinicius", cargo: "Circulante"}
            ]
        }
    ]
}

for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`)

    for (const funcionario of departamento.funcionarios) {
        console.log(`Funcionárix: ${funcionario.nome} tem como cargo: ${funcionario.cargo}`)
    }
}