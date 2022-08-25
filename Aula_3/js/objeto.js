pessoa = {
    id:01,
    nome: 'Astarote',
    idade: 28,
    altura: 1.77,
    situacao : function(){
        if(pessoa.idade >= 50)
            aviso = "cuidado com o carroooooooo"
        else
            aviso = "OLHA O VEIOOO!!!!!!!!!!!!!!!!!"

        return aviso
    }
}

//console.log(pessoa['id'] + " " + pessoa['nome'])

console.log(pessoa.id + " " + pessoa.nome + 'Situacao: ' + pessoa.situacao())