const leia = require('readline-sync')

let salario, abono

salario = leia.questionFloat("Digite o seu salario: ")
abono = leia.questionFloat("\nDigite o seu abono: ")

let novoSalario = salario + abono

console.log(`\nO novo salário é: ${novoSalario}`)