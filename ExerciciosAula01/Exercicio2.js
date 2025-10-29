const leia = require('readline-sync')

let nota1, nota2, nota3, nota4

nota1 = leia.questionFloat("Digite a nota 1: ")
nota2 = leia.questionFloat("\nDigite a nota 2: ")
nota3 = leia.questionFloat("\nDigite a nota 3: ")
nota4 = leia.questionFloat("\nDigite a nota 4: ")

calcularMedia = (nota1 + nota2 + nota3 + nota4) / 4

console.log(`\nA media final do participante é: ${calcularMedia.toFixed(1)}`)