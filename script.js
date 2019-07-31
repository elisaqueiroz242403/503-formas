let email = document.querySelector ("email");
let nome = document.querySelector ("nome");
let confirmacao = document.querySelector ("confirmacao");
let senha = document.querySelector ("senha");
let botao = document.querySelector ("botao");
let sexo = document.querySelector ("sexo");


function login(){
    if(email === confirmacao){

    }
    localStorage.setItem("sexo", sexo.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("confirmacao", confirmacao.value)
    localStorage.setItem("senha", senha.value)
    localStorage.setItem("nome", nome.value)
}

botao.onclick = login;