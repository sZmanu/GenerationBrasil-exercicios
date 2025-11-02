const leia = require('readline-sync')

let idade, genero, pessoaDesenvolvedora, continua = true, totalDevBackend = 0, totalDevFront = 0, totalDevFullStack = 0, totalDevMobile = 0, totalPessoas = 0, somaIdade = 0

while(continua == true){
    idade = leia.questionInt("Digite sua idade: ")
    genero = leia.questionInt("\nDigite a sua identidade de genero:\n1 - Mulher Cis\n2 - Homem Cis\n3 - Não Binário\n4 - Mulher Trans\n5 - Homem Trans\n6 - Outros\n")
    pessoaDesenvolvedora = leia.questionInt("\nDigite o que você é:\n1 - Backend\n2 - Frontend\n3 - Mobile\n4 - FullStack\n")

    totalPessoas += 1
    somaIdade += idade

    let media = somaIdade / totalPessoas

    if(pessoaDesenvolvedora == 1){
        totalDevBackend += 1
    }
    else if(pessoaDesenvolvedora == 2 && genero == 1 || genero == 4){
        totalDevFront += 1
    }
    else if(pessoaDesenvolvedora == 3 && idade > 40 && genero == 2 || genero == 5){
       totalDevMobile += 1
    }
    else if(pessoaDesenvolvedora == 4 && genero == 3 && idade < 30){
        totalDevFullStack += 1
    }
    else{
        console.log("Por favor digite apenas os numeros mostrados no menu!")
    }

    continua = leia.keyInYNStrict("\nDeseja continuar a leitura dos dados? ")

    if(continua != true){
    console.log(`O numero de pessoas desenvolvedoras Backend é: ${totalDevBackend}`)
    console.log(`O número de Mulheres Cis e Trans desenvolvedoras Frontend é: ${totalDevFront}`)
    console.log(`O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos é: ${totalDevMobile}`)
    console.log(`O número de Não Binários desenvolvedores FullStack menores de 30 anos é: ${totalDevFullStack}`)
    console.log(`O número total de pessoas que responderam à pesquisa é: ${totalPessoas}`)
    console.log(`A média de idade das pessoas que responderam à pesquisa é: ${media}`)
}
}
