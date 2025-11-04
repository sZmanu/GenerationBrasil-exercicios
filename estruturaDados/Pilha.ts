import leia = require("readline-sync")
import { Stack } from "./Stack"

const pilha = new Stack<string>()
let continua:boolean = true, opcao:number, nomeLivro:string

while(continua){

    console.log("\n*******************************************************************")
    console.log("Digite a opcao que deseja selecionar no menu:\n")
    opcao = leia.questionInt("\n1 - Adicionar um novo livro\n2 - Listar todos os livros\n3 - Retirar um livro\n0 - Sair\n")

    switch(opcao){
        case 1:
            nomeLivro = leia.question("\nDigite o nome do livro: ")
            pilha.push(nomeLivro)
            console.log("\nO livro foi adicionado com sucesso!")
            break
        
        case 2:
            if(pilha.isEmpty() == false){
            console.log("\nLista de todos os livros:\n")
            pilha.printStack()
            }
            else{
                console.log("\nA pilha esta sem livros!")
            }
            break
        
        case 3:
            if(pilha.isEmpty() == false){
            console.log(`\nO livro ${pilha.peek()} foi retirado!`)
            pilha.pop()
            }
            else{
                console.log("\nA pilha esta vazia, não é possivel retirar um livro!")
            }
            break

        case 0:
            console.log("\nO programa foi finalizado!")
            continua = false
            break
        
        default:
            console.log("\nDigite apenas os numeros indicados no menu!")
    }
}