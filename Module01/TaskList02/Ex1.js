//1. Acessando Propriedades de Objetos
// Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

const carro = {
    Marca: "= Fiat",
    Modelo: "= Doblo",
    Ano: "= 2021",
    Cor: "= Branco"
}

for (let prop in carro) {
    console.log(prop, carro[prop])
}