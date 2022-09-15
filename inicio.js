function nada(){
    var usuario = document.querySelector('#usuario')
    var senha = document.querySelector('#pass')
    var page = document.querySelector('.container')
    var carregar = document.querySelector('.load')
    
    a = String(usuario.value)
    b = String(senha.value)


    if(a == "Professor", b == "Ricardo123"){
        page.style.display = "none"
        carregar.style.display = "block"
        
        setTimeout(() => {
            location.href="https://ricardopinheiro-22.github.io/gr-mio/";
        }, "1000")
    }else{
        alert('Insira um Nome de Usuário e Senha válidos!')
    }
}