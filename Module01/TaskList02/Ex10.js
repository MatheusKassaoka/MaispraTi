//10. Criando Relatórios com Objetos e Arrays
//Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

const vendas = [
    { nome: "Tecido pelúcia", quantidade: 100, valor: 100},
    { nome: "Tecido latéx", quantidade: 90, valor: 80},
    { nome: "Tecido vinil", quantidade: 120, valor: 70},
    { nome: "Tecido veludo", quantidade: 80, valor: 50}
]

let valorTotalVendas = 0 

vendas.forEach((venda) => {
    valorTotalVendas += venda.quantidade * venda.valor
})

console.log(`O valor total de vendas é R$ ${valorTotalVendas.toFixed(2)} `)