// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

console.log("~~~~~Kingdom Hearts 7~~~~~")
console.log("                          ")
console.log("1 -     Continuar         ")
console.log("2 -     Novo jogo         ")
console.log("3 -     Desligar          ")

let option = prompt("Oie! Olha a opção desejada: ")

switch(option) {
    case "1":
        console.log("Você deseja continuar de onde parou? ")
        break
    case "2":
        console.log("Você deseja começar um novo jogo? ")
        break
    case "3":
        console.log("Você deseja desligar o jogo? ")
        break
    default:
        console.log("Essa não é nenhuma das opções!")
        break
}

