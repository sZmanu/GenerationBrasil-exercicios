const leia = require('readline-sync')

let nomeColaborador, codigoCargo, salario

nomeColaborador = leia.question("Digite o nome do colaborador: ")
codigoCargo = leia.questionInt("Digite um numero entre 1 e 6: ")
salario = leia.questionFloat("Digite o salario: ")

switch(codigoCargo){
    case 1:
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Gerente\nSalario: ${salario + ( 0.10 * salario)}`)
        break
    case 2:
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Vendedor\nSalario: ${salario + ( 0.07 * salario)} `)
        break
    case 3:
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Supervisor\nSalario: ${salario + ( 0.09 * salario)} `)
        break
    case 4:
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Motorista\nSalario: ${salario + (0.06 * salario)} `)
        break
    case 5:
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo:Estoquista\nSalario: ${salario + (0.05 * salario)} `)
        break
    case 6:
        console.log(`\nNome do colaborador: ${nomeColaborador}\nCargo: Técnico de TI\nSalario: ${salario + (0.08 * salario)}`)
        break

    default:
        console.log("Digite apenas numeros entre 1 e 6!")  
}