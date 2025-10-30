const leia = require('readline-sync')

let n1, n2, n3, n4

n1 = leia.questionFloat("Digite o valor do produto 1: ")
n2 = leia.questionFloat("Digite o valor do produto 2: ")
n3 = leia.questionFloat("Digite o valor do produto 3: ")
n4 = leia.questionFloat("Digite o valor do produto 4: ")

let diferenca = (n1 * n2) - (n3 * n4)

console.log(`\nA difereça do produto dos numeros é: ${diferenca} `)

