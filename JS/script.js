function validar(){
    let contato = document.getElementById("contato");
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome == ''){
        alert('Por favor digite seu nome!')
    }else if(email == ''){
        alert('Por favor digite seu email!')
    }else if(mensagem == ''){
        alert('Por favor digite uma mensagem!')
    }else{
        return confirm('Tem certeza que quer enviar?')
    }
}