//12. Atualizando um Array de Objetos
//Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    { produto: "Bambu da sorte", quantidade: 20, minimo: 50},
    { produto: "Jibóia", quantidade: 20, minimo: 40},
    { produto: "Palmeirinha leque", quantidade: 10, minimo: 20},
    { produto: "Bonsai", quantidade: 40, minimo: 30}
]

estoque.forEach(objeto => {
    if(objeto.quantidade < objeto.minimo) {
        objeto.quantidade *= 2
        console.log(`A quantidade de ${objeto.produto} foi atualizada para ${objeto.quantidade}`)
    }
})
console.log(estoque)
