const leia = require('readline-sync')

let numero, media, totalNum = 0, somaNum = 0

do{
    numero = leia.questionInt("Digite um numero: ")

    if(numero % 3 == 0 && numero > 0){
        totalNum += 1
        somaNum += numero
        media = somaNum / totalNum
    }

}while(numero !== 0) 
    console.log(`A média de todos os números múltiplos de 3 é: ${media}`)