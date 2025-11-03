import leia = require("readline-sync")

const cores: Array<string> = new Array<string>()
let cor:string

for(let i = 0; i < 5; i++){
   cor = leia.question("Digite uma cor: ")
   cores.push(cor)
}
console.log("\nAs cores adicionadas foram:")
for(let cor of cores){
    console.log(`${cor}`)
}
console.log(`\nCores ordenadas em ordem crescente:\n${cores.sort()}`)






