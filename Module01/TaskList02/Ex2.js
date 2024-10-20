//2. Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: "O Homem e Seus Símbolos",
    autor: "Carl Jung",
    anoPublicacao: "1964",
    genero: "Autoajuda"
}

let editoraExiste = false
for (let prop in livro) {
    if (prop === "editora") {
        editoraExiste == true
        break 
    }
}

if (!editoraExiste) {
    livro.editora = "HarperCollins Brasil"
}

console.log(livro)


