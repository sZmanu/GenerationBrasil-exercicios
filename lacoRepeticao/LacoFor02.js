const leia = require('readline-sync')

let num, pares = 0, impares = 0

for(let i = 0; i < 10; i++){
    num = leia.question(`Digite o ${i + 1}º numero: `)
    if(num % 2 == 0){
        pares += 1
    }
    else{
        impares += 1
    }
}
console.log(`\nTotal de numeros pares: ${pares}`)
console.log(`Total de numeros impares: ${impares}`)