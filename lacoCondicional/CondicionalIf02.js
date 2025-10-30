const leia = require('readline-sync')

let numero

numero = leia.questionInt("Digite um número: ")

if(numero % 2 == 0){
    if(numero > 0){
        console.log(`O número ${numero} é par e positivo!`)
    }
    else{
        console.log(`O número ${numero} é par e negativo!`)
    }
}

else if(numero % 2 !== 0){
    if(numero < 0){
        console.log(`O número ${numero} é ímpar e negativo!`)
    }
    else{
        console.log(`O número ${numero} é ímpar e positivo!`)
    }
}


