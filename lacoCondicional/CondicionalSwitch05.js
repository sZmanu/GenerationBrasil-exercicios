const leia = require('readline-sync')

let codigoProduto, quantidadeComprada

codigoProduto = leia.questionInt("Digite um numero entre 1 e 6: ")
quantidadeComprada = leia.questionInt("Digite a quantidade de itens comprado: ")

switch(codigoProduto){
    case 1:
        console.log(`\nProduto: Cachorro quente\nvalor total: R$ ${quantidadeComprada * 10.00}`)
        break
    case 2:
        console.log(`\nProduto: X-salada\nvalor total: R$ ${quantidadeComprada * 15.00}`)
        break
    case 3:
        console.log(`\nProduto: X-bacon\nvalor total: R$ ${quantidadeComprada * 18.00}`)
        break
    case 4:
        console.log(`\nProduto: Bauru\nvalor total: R$ ${quantidadeComprada * 12.00}`)
        break
    case 5:
        console.log(`\nProduto: Refrigerante\nvalor total: R$ ${quantidadeComprada * 8.00}`)
        break
    case 6:
        console.log(`\nProduto: Suco de laranja\nvalor total: R$ ${quantidadeComprada * 13.00}`)
        break

    default:
        console.log("Digite apenas numeros entre 1 e 6!")  
}