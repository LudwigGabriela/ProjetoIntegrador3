const form = document.getElementById("form-cadastro")

form.addEventListener("submit", enviarFormulario)

function enviarFormulario(event) {
    event.preventDefault()

    const dados = {
        nome: document.getElementById("form-cadastro-input-nome").value,
        telefone: document.getElementById("form-cadastro-input-telefone").value,
        email: document.getElementById("form-cadastro-input-email").value,
        cargo: document.getElementById("form-cadastro-input-cargo").value,
        crmv: document.getElementById("form-cadastro-input-crmv").value,
        clinica: document.getElementById("form-cadastro-input-clinica").value,
        senha: document.getElementById("form-cadastro-input-senha").value,
        confirmarSenha: document.getElementById("form-cadastro-input-confirmar-senha").value
    }

    const erro = validarCampos(dados)

    if (erro) {
        alert(erro)
        return
    }

    alert("Conta criada com sucesso!")

    window.location.href = "dashboard.html"
}

function validarCampos(campos) {

    // obrigatórios
    if (!campos.nome ||
        !campos.telefone ||
        !campos.email ||
        !campos.cargo ||
        !campos.clinica ||
        !campos.senha ||
        !campos.confirmarSenha) {

        return "Preencha todos os campos obrigatórios"
    }

    // confirmar senha
    if (campos.senha !== campos.confirmarSenha) {
        return "As senhas não coincidem"
    }

    // tamanho mínimo senha
    if (campos.senha.length < 6) {
        return "A senha deve ter pelo menos 6 caracteres"
    }

    return null

}