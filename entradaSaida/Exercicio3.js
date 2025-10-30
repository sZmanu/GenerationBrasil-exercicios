const leia = require('readline-sync')

let salarioBruto, adicionalNoturno, horasExtras, descontos

salarioBruto = leia.questionFloat("Digite o salario bruto: ")
adicionalNoturno = leia.questionFloat("\nDigite o valor do adicional noturno: ")
horasExtras = leia.questionFloat("\nDigite a quantidade de horas extras: ")
descontos = leia.questionFloat("\nDigite o valor dos descontos: ")

let salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos)

console.log(`\nO valor do salario liquido é: ${salarioLiquido.toFixed(2)}`)