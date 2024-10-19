//8. Criando Novos Arrays a Partir de Objetos
//Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

const filmes = [
    { titulo: "Sempre ao seu lado", diretor: "Lasse Hallstrom", anoLancamento: 2009 },
    { titulo: "As vantagens de ser invisível", diretor: "Stephen Chbosky", anoLancamento: 2012 },
    { titulo: "Do Começo ao Fim", diretor: "Aluizio Abranches", anoLancamento: 2009 }
]

const tituloDosFilmes = []
filmes.forEach(filme => {
    tituloDosFilmes.push(filme.titulo)
})

console.log(tituloDosFilmes)