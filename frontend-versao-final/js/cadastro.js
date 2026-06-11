const form = document.getElementById("form-cadastro");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "";

    const dados = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        cargo: document.getElementById("cargo").value,
        crmv: document.getElementById("crmv").value,
        senha: document.getElementById("senha").value,
        confirmar_senha: document.getElementById("confirmar_senha").value
    };

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/auth/cadastro",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("Conta criada com sucesso!");

            window.location.href = "login.html";

        } else {

            mensagem.textContent =
                data.erro || "Erro ao criar conta.";

        }

    } catch (error) {

        console.error(error);

        mensagem.textContent =
            "Erro ao conectar com o servidor.";

    }

});