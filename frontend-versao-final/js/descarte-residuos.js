const btnSubmit = document.getElementById("form-residuo-btn-submit")
const btnCancelar = document.getElementById("form-residuo-btn-cancelar")

btnSubmit.addEventListener("click", enviarFormulario)
btnCancelar.addEventListener("click", limparFormulario)

function enviarFormulario(event) {
    event.preventDefault()

    const residuo = {
        grupo: document.getElementById("form-residuo-input-grupo").value,
        peso: document.getElementById("form-residuo-input-peso").value,
        nome: document.getElementById("form-residuo-input-nome").value,
        empresa: document.getElementById("form-residuo-input-empresa").value,
        observacao: document.getElementById("form-residuo-input-observacao").value
    }

    const erro = validarCampos(residuo)

    if (erro) {
        alert(erro)
        return
    }

    // Requisição para o backend 
    const dadosApi = {
        tipo_grupo: residuo.grupo,
        descricao: residuo.nome,
        quantidade: Number(residuo.peso),
        unidade: "kg",
        data_registro: new Date().toISOString().split("T")[0],
        setor_gerador: residuo.empresa,
        responsavel_id: 1
    }

    fetch("http://127.0.0.1:5000/residuo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosApi)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        alert("Resíduo registrado com sucesso")
        limparFormulario()
    })
    .catch(error => {
        console.error(error)
        alert("Erro ao registrar resíduo")
    })

}

function validarCampos(campos) {

    // obrigatórios
    if (!campos.grupo || !campos.peso || !campos.nome || !campos.empresa) {
        return "Preencha todos os campos obrigatórios"
    }

    // peso
    if (campos.peso < 0) {
        return "Peso deve ser um valor positivo"
    }

    return null

}

function limparFormulario() {

    const campos = [
        "form-residuo-input-grupo",
        "form-residuo-input-peso",
        "form-residuo-input-nome",
        "form-residuo-input-empresa",
        "form-residuo-input-observacao"
    ]

    campos.forEach(id => {
        document.getElementById(id).value = ""
    })

}
