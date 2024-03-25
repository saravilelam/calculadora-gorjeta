let conta = 0
let pessoas = 0

let contaInput = document.querySelector ("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number (evento.target.value)
}

const pessoasInpnut = document.querySelector("#pessoas")
pessoasInpnut.addEventListener ("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
   if(evento.target.value==="0") {
    const paragrafoErro = document.querySelector(".pessoas #erro").display = "block"
    paragrafoErro.style.display = "block"

    const divErro = document.querySelector(".pessoas .input-box")
    divErro.setAttribute ("id", "erro-div")
   }
}
