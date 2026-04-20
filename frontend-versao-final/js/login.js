const form = document.getElementById("form-login")

form.addEventListener("submit", enviarFormulario)

function enviarFormulario(event) {
    event.preventDefault()

    const dados = {
        email: document.getElementById("form-login-input-email").value,
        senha: document.getElementById("form-login-input-senha").value,
    }

    const erro = validarCampos(dados)

    if (erro) {
        alert(erro)
        return
    }

    alert("Login realizado com sucesso!")

    window.location.href = "dashboard.html"
}

function validarCampos(campos) {

    // obrigatórios
    if (!campos.email || !campos.senha) {
        return "Preencha todos os campos obrigatórios"
    }

    return null

}