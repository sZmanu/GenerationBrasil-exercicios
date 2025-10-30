const leia = require('readline-sync')

let valorA, valorB, valorC, soma

valorA = leia.questionInt("Digite o valor A: ")
valorB = leia.questionInt("\nDigite o valor B: ")
valorC = leia.questionInt("\nDigite o valor C: ")

soma = valorA + valorB

if(soma > valorC){
    console.log("A soma de A + B é maior que C")
}
else if(soma < valorC){
    console.log("A soma de A + B é menor que C")
}
if(soma == valorC){
    console.log("A soma de A + B é igual a C")
}