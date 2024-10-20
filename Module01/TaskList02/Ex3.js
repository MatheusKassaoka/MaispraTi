//3. Filtrando Propriedades de Objetos
//Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

const produto = {
    nome: "Tênis",
    numeracao: "40",
    preco: "420",
    marca: "Puma",
    ano: "2024"
}

function filtrarPropsMaiores(objeto, valorEspecifico) {
    const novoObjeto = {}

    for (const prop in objeto) {
        if (objeto[prop] > valorEspecifico) {
            novoObjeto[prop] = objeto[prop]
        }
    }

    return novoObjeto
}

const resultado = filtrarPropsMaiores(produto, 41)
console.log(resultado)