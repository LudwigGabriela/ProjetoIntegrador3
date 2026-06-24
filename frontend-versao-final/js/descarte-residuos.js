document.addEventListener("DOMContentLoaded", carregarResiduos)
document.addEventListener("DOMContentLoaded", carregarPesoResiduos)

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
        origem: document.getElementById("form-residuo-input-origem").value,
        data: document.getElementById("form-residuo-input-data").value,
        hora: document.getElementById("form-residuo-input-hora").value,
        observacao: document.getElementById("form-residuo-input-observacao").value
    }

    const erro = validarCampos(residuo)

    if (erro) {
        mostrarMensagem(erro)
        return
    }

    // Requisição para o backend 
    const dadosApi = {
        tipo_grupo: residuo.grupo,
        descricao: residuo.nome,
        quantidade: Number(residuo.peso),
        unidade: "kg",
        data_registro: `${residuo.data}T${residuo.hora}:00`,
        setor_gerador: residuo.origem,
        setor_destino: "-",
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
        mostrarMensagem("Resíduo registrado com sucesso")
        limparFormulario()
        carregarResiduos()
        carregarPesoResiduos()
    })
    .catch(error => {
        console.error(error)
        mostrarMensagem("Erro ao registrar resíduo")
    })

}

function validarCampos(campos) {

    // obrigatórios
    if (!campos.grupo || !campos.peso || !campos.nome || !campos.empresa || !campos.data || !campos.hora) {
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
        "form-residuo-input-data",
        "form-residuo-input-hora",
        "form-residuo-input-observacao"
    ]

    campos.forEach(id => {
        document.getElementById(id).value = ""
    })

}

function carregarResiduos() {

    fetch("http://127.0.0.1:5000/residuo")
        .then(response => response.json())
        .then(residuos => {
            preencherTabela(residuos)
        })
        .catch(error => {
            console.error(error)
        })

}

function carregarPesoResiduos() {

    const hoje = new Date()
    const mes = hoje.getMonth() + 1
    const ano = hoje.getFullYear()

    fetch(`http://127.0.0.1:5000/residuo/peso-total?mes=${mes}&ano=${ano}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("kpi-peso-total").textContent =
            `${data.peso_total}`
    })
    .catch(error => console.error(error))

    fetch("http://127.0.0.1:5000/residuo/peso-total")
    .then(response => response.json())
    .then(data => {
        document.getElementById("kpi-peso-aguardando").textContent =
            `${data.peso_total}`
    })
    .catch(error => console.error(error))

}

function formatarData(dataString) {

    const partes = dataString.split(" ")

    const data = partes[0]
    const hora = partes[1]

    const [ano, mes, dia] = data.split("-")

    return `${dia}/${mes}/${ano} ${hora.substring(0,5)}`
}

function preencherTabela(residuos) {

    const tbody = document.getElementById("tabela-residuos")

    tbody.innerHTML = ""

    residuos.forEach(residuo => {

        const linha = document.createElement("tr")

        linha.innerHTML = `
            <td>${residuo.id}</td>
            <td>${formatarData(residuo.data_registro)}</td>
            <td>${residuo.tipo_grupo}</td>
            <td>${residuo.descricao}</td>
            <td>${residuo.quantidade}</td>
            <td>${residuo.setor_gerador}</td>
            <td>${residuo.responsavel_id ?? "-"}</td>
            <td>${residuo.status}</td>
        `

        tbody.appendChild(linha)

    })

}