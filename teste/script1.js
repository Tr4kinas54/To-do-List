function adicionar(){
    const numeros = [2,4,6,8]
    const novoNumero = parseInt(document.getElementById('numero').value)

    numeros.forEach(function (numeros) {
        resultado = novoNumero*numeros
        parseInt(resultado)
        console.log(resultado)
    })



}