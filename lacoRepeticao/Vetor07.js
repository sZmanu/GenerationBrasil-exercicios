const leia = require('readline-sync')

let vetorNumeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6], localizarNumeroVetor, presente

localizarNumeroVetor = leia.questionInt("Digite o numero que deseja encontrar: ")

for(let i = 0; i < vetorNumeros.length; i++){
    if(vetorNumeros[i] == localizarNumeroVetor){
        console.log(`\nO numero ${vetorNumeros[i]} está localizado na posição ${[i]}`)
        presente = true
    } 
}
if(presente != true){
    console.log(`\nO numero ${localizarNumeroVetor} não foi encontrado!`)
}



