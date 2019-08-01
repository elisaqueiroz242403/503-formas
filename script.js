let email = document.querySelector ("#email");
let nome = document.querySelector ("#nome");
let confirmacao = document.querySelector ("#confirmacao");
let senha = document.querySelector ("#senha");
let botao = document.querySelector ("#botao");
let sexo = document.querySelector ("#sexo");
let div = document.querySelector ("div");
// let texto = document.querySelector ("h2");
// let naosou = document.querySelector ("a");



function login(){
    if(email.value !== "" && email.value === confirmacao.value){
        
        localStorage.setItem("sexo", sexo.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("confirmacao", confirmacao.value)
        localStorage.setItem("senha", senha.value)
        localStorage.setItem("nome", nome.value)
        // texto.inner.HTML = `Seja bem vindo ${nome}!`
        // naosou.inner.HTML = `Não sou ${localStorage.nome}`
    }
    
    else{
        ("Senha ou email invalido")
    }

}


botao.onclick = login;