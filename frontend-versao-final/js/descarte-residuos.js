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

    // Recupera o usuário logado
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario || !usuario.id) {
        mostrarMensagem("Usuário não identificado. Faça login novamente.");
        window.location.href = "login.html";
        return;
    }

    // Recupera o token JWT
    const token = localStorage.getItem("token");

    if (!token) {
        mostrarMensagem("Sessão expirada. Faça login novamente.");
        window.location.href = "login.html";
        return;
    }

    const dadosApi = {
        tipo_grupo: residuo.grupo,
        descricao: residuo.nome,
        quantidade: Number(residuo.peso),
        unidade: "kg",
        data_registro: `${residuo.data}T${residuo.hora}:00`,
        setor_gerador: residuo.origem,
        setor_destino: "-",
        responsavel_id: usuario.id
    }
    console.log("Usuário logado:", usuario);
    console.log("ID responsável:", usuario.id);
    console.log("Dados enviados:", dadosApi);

    fetch("http://127.0.0.1:5000/residuo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(dadosApi)
    })
        .then(async response => {

            const data = await response.json();

            console.log("Resposta da API:", data);

            if (!response.ok) {
                throw new Error(data.msg || data.erro || "Erro ao registrar resíduo");
            }

            return data;
        })
        .then(data => {
            mostrarMensagem("Resíduo registrado com sucesso");

            limparFormulario();
            carregarResiduos();
            carregarPesoResiduos();
        })
        .catch(error => {
            console.error(error);
            mostrarMensagem(error.message);
        })
}

function validarCampos(campos) {

    // obrigatórios
    if (!campos.grupo || !campos.peso || !campos.nome || !campos.origem || !campos.data || !campos.hora) {
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
        "form-residuo-input-origem",
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

    return `${dia}/${mes}/${ano} ${hora.substring(0, 5)}`
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
            <td>${residuo.responsavel_nome ?? "-"}</td>
            <td>${residuo.status}</td>
            <td>
                <button class="btn btn-sm btn-primary btn-editar" data-id="${residuo.id}">Editar</button>
                <button class="btn btn-sm btn-danger btn-excluir" data-id="${residuo.id}">Excluir</button>
            </td>

        `

        tbody.appendChild(linha)

    })

}