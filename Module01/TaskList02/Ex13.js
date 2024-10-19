//13. Implementando um Carrinho de Compras
//Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

const carrinho = {
    itens: [
        { nome: "Lantejoula", quantidade: 100, precoUnitario: 1},
        { nome: "Glitter", quantidade: 10000, precoUnitario: 2},
        { nome: "Ouro", quantidade: 80, precoUnitario: 999},
        { nome: "Estrelas metálicas", quantidade: 500, precoUnitario: 5}
    ]
}

let valorTotalCarrinho = 0

carrinho.itens.forEach((item) => {
    valorTotalCarrinho += item.quantidade * item.precoUnitario
})

console.log(`O valor total do carrinho é R$ ${valorTotalCarrinho.toFixed(2).replace(".",",")}`)
