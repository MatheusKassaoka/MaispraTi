//15. Filtrando e Somando Valores
//Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

const transacoes = [
    { tipo: "entrada", valor: 200},
    { tipo: "saída", valor: 9000},
    { tipo: "entrada", valor: 4000},
    { tipo: "saída", valor: 5000},
    { tipo: "entrada", valor: 600000},
    { tipo: "saída", valor: 8000}
]

let saldoFinal = 0

transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor
    } else if (transacao.tipo === "saída") {
        saldoFinal -= transacao.valor
    }
})

console.log(`O saldo final é de R$ ${saldoFinal.toFixed(2)}`)