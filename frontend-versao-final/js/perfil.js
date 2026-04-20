const btnSubmit = document.getElementById("form-informacoes-btn-submit")
const btnCancelar = document.getElementById("form-informacoes-btn-cancelar")

btnSubmit.addEventListener("click", enviarFormulario)
btnCancelar.addEventListener("click", restaurarFormulario)

function enviarFormulario(event) {
    event.preventDefault()

    const dados = {
        nome: document.getElementById("form-informacoes-pessoais-input-nome").value,
        email: document.getElementById("form-informacoes-pessoais-input-email").value,
        telefone: document.getElementById("form-informacoes-pessoais-input-telefone").value,
        dataDeNascimento: document.getElementById("form-informacoes-pessoais-input-data-de-nascimento").value,
        cargo: document.getElementById("form-informacoes-profissionais-input-cargo").value,
        crmv: document.getElementById("form-informacoes-profissionais-input-crmv").value,
        clinica: document.getElementById("form-informacoes-profissionais-input-clinica").value
    }

    const erro = validarCampos(dados)

    if (erro) {
        alert(erro)
        return
    }

    alert("Informações atualizadas com sucesso")

}

function validarCampos(campos) {

    // obrigatórios
    if (!campos.nome || 
        !campos.email || 
        !campos.telefone || 
        !campos.dataDeNascimento ||
        !campos.cargo ||
        !campos.clinica) {
        return "Preencha todos os campos obrigatórios"
    }

    // email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(campos.email)) {
        return "Formato de email inválido"
    }

    // data de nascimento
    const hoje = new Date()
    const dataNascimento = new Date(campos.dataDeNascimento)
    if (dataNascimento > hoje) {
        return "Data de nascimento não pode ser no futuro"
    }

    return null

}

function restaurarFormulario() {

}
