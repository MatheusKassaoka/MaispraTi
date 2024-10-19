//7. Modificando Objetos em um Array
//Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

const produtos = [
    { nome: "Batom", preco: 5, desconto: 0},
    { nome: "Base", preco: 50, desconto: 0},
    { nome: "Corretivo", preco: 20, desconto: 0},
    { nome: "Peruca", preco: 400, desconto: 0}
]

produtos.forEach((produto) => {
    const desconto = produto.preco * 0.1
    produto.preco -= desconto
    console.log(`Produto: ${produto.nome} agora está custando R$ ${produto.preco.toFixed(2)}`)
})