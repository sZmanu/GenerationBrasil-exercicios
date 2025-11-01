const leia = require('readline-sync')

let idade = 1
let totalMenor21 = 0
let totalMaior50 = 0

while(idade > 0){
    idade = leia.questionInt("Digite uma idade: ")

   if(idade < 21 && idade > 0){
    totalMenor21 += 1
   }
   else if(idade > 50){
    totalMaior50 += 1
   }
   
}
console.log(`Total de pessoas menores de 21 anos: ${totalMenor21}\nTotal de pessoas maiores de 50 anos: ${totalMaior50}`)
