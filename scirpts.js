let conta = 0
let pessoas = 0
let porcentagem = 0

let contaInput = document.querySelector ("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number (evento.target.value)
}

const pessoasInpnut = document.querySelector("#pessoas")
pessoasInpnut.addEventListener ("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {

    const paragrafoErro = document.querySelector(".pessoas #erro").display = "block"

    const divErro = document.querySelector(".pessoas .input-box")

   if(evento.target.value==="0") {
    
    paragrafoErro.style.display = "block"

    divErro.setAttribute ("id", "erro-div")
   } else{
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.terget.value)
   }
}

const botoesGorjeta = document.querySelectorAllb(".gorjeta input[type='button'")
botoesGorjeta.forEach(botao =>{
    botao.addEventListener("click", receberPorcentagemBotao)
})

function receberPorcentagemBotao(evento) {

    botoesGorjeta.forEach(botao =>{
        botoesGorjeta.ClassList.remove("botao-ativo")
        
        if(botao.value===evento.target.value){
            botao.ClassList.add("botao-ativo")
        }
    })
    porcentagem = parseFloat(evento.target.value) /100



}