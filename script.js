function adicionar(){

const personagens = ['Finn',' Jake', 'Gumball','Bob Esponja']
const novoPersonagem = document.getElementById("personagem").value

//adiciona um novo elemento no final
personagens.push(novoPersonagem)

//adicioha uma novo elemento no inicio
personagens.unshift(novoPersonagem)

//remove o ultimo elemento
personagens.pop()

//remove o primejuro elemento
personagens.shift()


console.log(personagens)


personagens.forEach(function (pegaPersonagem) {
    console.log(`O nome do personagem é : ${pegaPersonagem}`)
})
}


const numeros = [2,4,6,8]
