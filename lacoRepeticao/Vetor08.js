const leia = require('readline-sync')

let vetorNum = new Array(10)
let soma = 0, media

for(let i = 0; i < 10; i++){
    vetorNum[i] = leia.questionInt("Digite um numero: ")
}

console.log("\nElementos nos indices impares:\n")
for(let i = 0; i < 10; i++){
    if(i % 2 !== 0){
        console.log(`${vetorNum[i]}`)
    }
}

console.log("\nElementos pares:\n")
for(let i = 0; i < 10; i++){
   if(vetorNum[i] % 2 == 0){
        console.log(`${vetorNum[i]}`)
    }
}

console.log("\nSoma: ")
for(let i = 0; i < 10; i++){
   soma += vetorNum[i]
}
console.log(`${soma}`)

media = soma / 10
console.log(`\nMedia: ${media}`)