const btnSubmit = document.getElementById("form-solicitacao-btn-submit")
const btnLimpar = document.getElementById("form-solicitacao-btn-limpar")

btnSubmit.addEventListener("click", enviarFormulario)
btnLimpar.addEventListener("click", limparFormulario)

function enviarFormulario(event) {
    event.preventDefault()

    const solicitacao = {
        material: document.getElementById("form-solicitacao-input-material").value,
        quantidade: document.getElementById("form-solicitacao-input-quantidade").value,
        prioridade: document.getElementById("form-solicitacao-input-prioridade").value,
        destino: document.getElementById("form-solicitacao-input-destino").value,
        data: document.getElementById("form-solicitacao-input-data").value,
        hora: document.getElementById("form-solicitacao-input-hora").value,
        observacao: document.getElementById("form-solicitacao-input-observacao").value
    }

    const erro = validarCampos(solicitacao)

    if (erro) {
        alert(erro)
        return
    }

    alert("Solicitação realizada com sucesso")
    limparFormulario()

}

function validarCampos(campos) {

    // obrigatórios
    if (!campos.material || !campos.quantidade || !campos.prioridade || !campos.destino || !campos.data || !campos.hora) {
        return "Preencha todos os campos obrigatórios"
    }

    // quantidade
    if (campos.quantidade <= 0) {
        return "Quantidade deve ser um valor maior que zero"
    }

    return null

}

function limparFormulario() {

    const campos = [
        "form-solicitacao-input-material",
        "form-solicitacao-input-data",
        "form-solicitacao-input-hora",
        "form-solicitacao-input-observacao"
    ]

    campos.forEach(id => {
        document.getElementById(id).value = ""
    })

    const quantidade = document.getElementById("form-solicitacao-input-quantidade")
    const prioridade = document.getElementById("form-solicitacao-input-prioridade")
    const destino = document.getElementById("form-solicitacao-input-destino")

    quantidade.value = 1
    prioridade.value = "media"
    destino.value = "cirurgia"

}