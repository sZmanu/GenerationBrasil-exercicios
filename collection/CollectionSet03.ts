import leia = require("readline-sync")

const setValores: Set<number> = new Set<number>([])
let valor:number

for(let i = 0; i < 10; i++){
    valor = leia.questionInt("Digite um valor inteiro e não repetido: ")
    setValores.add(valor)
}
console.log("\nLista de dados do set:")

for(let valor of setValores){
    console.log(`${valor}`)
}