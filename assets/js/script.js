/* quais  as formas para acessar o DOM? 

-POR TAG: getElementeByTagName()
-POR ID: getElementById()
-POR NOME: getElementsByName()
-POR CLASS: geteElementsByClassName()
-POR SELETOR: querySelector().
*/
let nome = window.document.getElementById('nome') /* pode-se optar por não colocar  o '.window' */
let email = document.querySelector('#email') /* pode-se também usar apenas o (input#email)*/  /*Caso o input de email fosse uma classe utilizaria (.email) ou então (input.email) */
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let mensagemOk = false
let telefoneOk= false
let mapa= document.querySelector('#mapa')



function validaNome() {

    let textNome = document.querySelector('#textNome')

    if (nome.value.length < 3) {
        textNome.innerHTML = 'Nome Inválido'
        textNome.style.color = 'red'
    } else {
        nomeOk = true
        textNome.innerHTML= 'Nome Válido'
        textNome.style.color = 'green'
        
    }
}

function validaEmail() {

    let textEmail = document.querySelector('#textEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        textEmail.innerHTML = 'E-mail invalido'
        textEmail.style.color = 'red'
    } else {
        emailOk = true
        textEmail.innerHTML = 'E-mail válido'
        textEmail.style.color = 'green'


    }
}

function validaMensagem() {

    let textMensagem = document.querySelector('#textMensagem')

    if (mensagem.value.length > 200) {
        textMensagem.innerHTML = 'Texto muito grande, permitido até no maximo 200 caracteres'
        textMensagem.style.color = 'red'
        textMensagem.style.display = 'block'
    } else {
        mensagemOk = true
        textMensagem.style.display = 'none'
        

    }
}

function validaTelefone() {

    let textTelefone = document.querySelector('#textTelefone')

    if (telefone.value.length < 11 ) {
        textTelefone.innerHTML = 'Telefone inválido!'
        textTelefone.style.color = 'red'
        textTelefone.style.display = 'block'
    } else {
        telefoneOk = true
        textTelefone.style.color = 'green'
        
    }
}

function enviar() {
    if (nomeOk==true && emailOk== true && mensagemOk== true && telefoneOk==true) {
        
        alert('Enviado com sucesso!')

    } else {
        alert('Prencha os campos corretamente!')
    }

}

function mapaZomm(){
    mapa.style.width='600px'
    mapa.style.heigth= '600px'
}

function mapaNormal(){
    mapa.style.width='900px'
    mapa.style.heigth= '900px'
}