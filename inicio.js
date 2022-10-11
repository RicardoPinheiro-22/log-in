function entrar(){
    var usuario = document.querySelector('#usuario')
    var senha = document.querySelector('#senha')
    var page = document.querySelector('.c_main')
    var carregar = document.querySelector('.carregar')
    
    a = String(usuario.value)
    b = String(senha.value)


    if(a == "Professor", b == "Ricardo123"){
        page.style.display = "none"
        carregar.style.display = "flex"
        
        setTimeout(() => {
            location.href="https://ricardopinheiro-22.github.io/gr-mio/";
        }, "1000")
    }else{
        alert('Insira um Nome de Usuário e Senha válidos!')
    }
}
