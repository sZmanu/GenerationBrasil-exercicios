const leia = require('readline-sync')

let numInicio, numFinal

numInicio = leia.questionInt(`Digite o primeiro: `)
numFinal = leia.questionInt(`Digite o ultimo: `)


if(numInicio < numFinal){
   console.log(`\nNo intervalo entre ${numInicio} e ${numFinal}:\n`)

   for(let i = numInicio; i < numFinal; i++){ 
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} é multiplo de 3 e 5`)    
     }
   }
}
else{
    console.log("\nIntervalo invalido!")
}