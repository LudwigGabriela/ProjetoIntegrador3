document.addEventListener("DOMContentLoaded", carregarCadaveres)

const btnSubmit = document.getElementById("form-cadaver-btn-submit")
const btnCancelar = document.getElementById("form-cadaver-btn-cancelar")

btnSubmit.addEventListener("click", enviarFormulario)
btnCancelar.addEventListener("click", limparFormulario)

function enviarFormulario(event) {
    event.preventDefault()

    const cadaver = {
        nome: document.getElementById("form-cadaver-input-nome").value,
        peso: document.getElementById("form-cadaver-input-peso").value,
        nome_proprietario: document.getElementById("form-cadaver-input-nome-proprietario").value,
        especie: document.getElementById("form-cadaver-input-especie").value,
        idade: document.getElementById("form-cadaver-input-idade").value,
        causa: document.getElementById("form-cadaver-input-causa").value,
        destino: document.getElementById("form-cadaver-input-destino").value,
        data_entrada: document.getElementById("form-cadaver-input-data-entrada").value,
        hora_entrada: document.getElementById("form-cadaver-input-hora-entrada").value,
        data_saida: document.getElementById("form-cadaver-input-data-saida").value,
        hora_saida: document.getElementById("form-cadaver-input-hora-saida").value,
        observacao: document.getElementById("form-cadaver-input-observacao").value
    }

    const erro = validarCampos(cadaver)

    if (erro) {
        mostrarMensagem(erro)
        return
    }

    // Recupera o usuário logado
    const usuario = JSON.parse(localStorage.getItem("usuario"))

    if (!usuario || !usuario.id) {
        mostrarMensagem("Usuário não identificado. Faça login novamente.")
        window.location.href = "login.html"
        return
    }

    // Recupera o token JWT
    const token = localStorage.getItem("token")

    if (!token) {
        mostrarMensagem("Sessão expirada. Faça login novamente.")
        window.location.href = "login.html"
        return
    }

    const dadosApi = {
        especie: cadaver.especie,
        identificacao: cadaver.nome,
        idade_anos: Number(cadaver.idade),
        peso_kg: Number(cadaver.peso),
        data_entrada: `${cadaver.data_entrada}T${cadaver.hora_entrada}:00`,
        status: "congelado",
        observacoes: cadaver.observacao,

        // Usuário que está logado
        registrado_por: usuario.id,

        nome_proprietario: cadaver.nome_proprietario,
        causa_obito: cadaver.causa,
        destino_id: cadaver.destino,
        data_saida: cadaver.data_saida && cadaver.hora_saida
            ? `${cadaver.data_saida}T${cadaver.hora_saida}:00`
            : null
    }

    console.log("Usuário logado:", usuario)
    console.log("ID responsável pelo cadastro:", usuario.id)
    console.log("Dados enviados:", dadosApi)

    fetch("http://127.0.0.1:5000/cadaver", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(dadosApi)
    })
        .then(async response => {

            const data = await response.json()

            console.log("Resposta da API:", data)

            if (!response.ok) {
                throw new Error(
                    data.msg ||
                    data.erro ||
                    "Erro ao registrar cadáver"
                )
            }

            return data
        })
        .then(data => {

            mostrarMensagem("Cadáver registrado com sucesso")

            limparFormulario()
            carregarCadaveres()

        })
        .catch(error => {

            console.error(error)
            mostrarMensagem(error.message)

        })
}

function validarCampos(campos) {

    // obrigatórios
    if (!campos.nome || !campos.peso || !campos.nome_proprietario || !campos.especie || !campos.idade || !campos.causa || !campos.data_entrada || !campos.hora_entrada) {
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
        "form-cadaver-input-nome",
        "form-cadaver-input-peso",
        "form-cadaver-input-nome-proprietario",
        "form-cadaver-input-especie",
        "form-cadaver-input-idade",
        "form-cadaver-input-causa",
        "form-cadaver-input-destino",
        "form-cadaver-input-data-entrada",
        "form-cadaver-input-hora-entrada",
        "form-cadaver-input-data-saida",
        "form-cadaver-input-hora-saida",
        "form-cadaver-input-observacao"
    ]

    campos.forEach(id => {
        document.getElementById(id).value = ""
    })

}

function carregarCadaveres() {

    fetch("http://127.0.0.1:5000/cadaver")
        .then(response => response.json())
        .then(cadaveres => {
            preencherTabela(cadaveres)
        })
        .catch(error => {
            console.error(error)
        })

}

function formatarData(dataString) {

    const partes = dataString.split(" ")

    const data = partes[0]
    const hora = partes[1]

    const [ano, mes, dia] = data.split("-")

    return `${dia}/${mes}/${ano} ${hora.substring(0, 5)}`
}

function preencherTabela(cadaveres) {

    const tbody = document.getElementById("tabela-cadaveres")

    tbody.innerHTML = ""

    destinos_cadaver = ['Labocien', 'Empresa Terceirizada', 'Proprietário']

    cadaveres.forEach(cadaver => {

        const linha = document.createElement("tr")

        linha.innerHTML = `
            <td>${cadaver.id}</td>
            <td>${cadaver.identificacao}</td>
            <td>${cadaver.peso_kg}</td>
            <td>${cadaver.nome_proprietario}</td>
            <td>${cadaver.especie}</td>
            <td>${cadaver.idade_anos}</td>
            <td>${cadaver.causa_obito}</td>
            <td>${formatarData(cadaver.data_entrada)}</td>
            <td>${formatarData(cadaver.data_saida)}</td>
            <td>${destinos_cadaver[cadaver.destino_id - 1]}</td>
            <td>${cadaver.registrado_por_nome ?? "-"}</td>
            <td>
                <button class="btn btn-sm btn-primary btn-editar" data-id="${cadaver.id}">Editar</button>
                <button class="btn btn-sm btn-danger btn-excluir" data-id="${cadaver.id}">Excluir</button>
            </td>
        `

        tbody.appendChild(linha)

    })

}
