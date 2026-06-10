document.addEventListener("DOMContentLoaded", carregarResiduos)
document.addEventListener("DOMContentLoaded", carregarPesoResiduos)


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
    const data = new Date(dataString)

    return data.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })
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