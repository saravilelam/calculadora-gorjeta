let conta = 0
let pessoas = 0
let porcentagem = 0

let contaInput = document.querySelector ("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number (evento.target.value)
    calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener ("input", receberQuantidadePessoas)

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

   calcular()
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
        calcular()
        
    })

    if(botao.target.value !== "") {

        porcentagem = parseFloat(evento.target.value) /100 
    } else{
        porcentagem = 0

    }
    console.log(porcentagem)
    
}

const gorjetaInput = document.querySelector ("#outra")
gorjetaInput.addEventListener("input", receberPorcentagem)

function calcular() {
    if (conta !==0 && porcentagem !== 0 && pessoas !== 0){
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = `R$ ${(conta * porcentagem / pessoas).toFixed(2)}`

        const strongTotal = document.querySelector (".total > strong") 
        strongTotal.innerHTML = `R$ ${(conta+(conta*porcentagem) / pessoas).toFixed(2)}`
    }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar(){
    contaInput = ""

    botoesGorjeta.forEach(botao =>{
        botao.ClassList.remove("botao-ativo")
        })

    gorjetaInput.value = ""


    pessoasInput.value = ""

    document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"

    document.querySelector (".total > strong") .innerHTML = "R$ 0.00"
}

