//11. Agrupando Elementos com forEach
//Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

const pedidos = [
    { cliente: "Lucas", produto: "Short", quantidade: 4},
    { cliente: "Henry", produto: "Regata", quantidade: 6},
    { cliente: "Flofy", produto: "Casaco de pele", quantidade: 10},
    { cliente: "Lucas", produto: "Roupa íntima", quantidade: 12},
    { cliente: "Henry", produto: "Sunga", quantidade: 3},
    { cliente: "Aurora", produto: "Saia", quantidade: 2}
]

let quantidadeTotalPorCliente = {}

pedidos.forEach(pedido => {
    if (quantidadeTotalPorCliente[pedido.cliente]) {
        quantidadeTotalPorCliente[pedido.cliente] += pedido.quantidade
    } else {
        quantidadeTotalPorCliente[pedido.cliente] = pedido.quantidade
    }
})

console.log(quantidadeTotalPorCliente)