import leia = require("readline-sync")
import { Queue } from "./Queue";

let continua:boolean = true, opcao:number, nomeCliente:string

const fila = new Queue<string>()

while(continua){
    console.log("\n*******************************************************************")
    console.log("Digite a opcao que deseja selecionar no menu:\n")
    opcao = leia.questionInt("\n1 - Adicionar Cliente na Fila\n2 - Listar todos os Clientes\n3 - Retirar Cliente da Fila\n0 - Sair\n")

    switch(opcao){
        case 1:
            nomeCliente = leia.question("\nDigite o nome do cliente: ")
            fila.enqueue(nomeCliente)
            console.log("\nO cliente foi adicionado com sucesso!")
            break

        case 2:
            if(fila.isEmpty() == false){
                console.log("Lista de clientes:\n")
                fila.printQueue()
            }
            else{
                console.log("\nA lista está vazia!")
            }
            break

        case 3:
            if(fila.isEmpty() == false){
                console.log(`\nO cliente ${fila.peek()} foi chamado!`)
                fila.dequeue()
            }
            else{
                console.log("\nA lista está vazia, nao e possivel chamar clientes!")
            }
            break

        case 0:
            console.log("\nO programa foi finalizado")
            continua = false
            break
        
        default:
            console.log("\nDigite apenas os numeros indicados no menu!")  
    }

}