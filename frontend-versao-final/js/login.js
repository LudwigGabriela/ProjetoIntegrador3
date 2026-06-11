document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const mensagem = document.getElementById("mensagem");

        mensagem.textContent = "";

        try {

            const response = await fetch(
                "http://127.0.0.1:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        senha
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                localStorage.setItem(
                    "token",
                    data.token
                );

                localStorage.setItem(
                    "usuario",
                    JSON.stringify(data.usuario)
                );

                window.location.href = "dashboard.html";

            } else {

                mensagem.textContent =
                    data.erro || "Erro ao fazer login.";

            }

        } catch (error) {

            console.error(error);

            mensagem.textContent =
                "Erro ao conectar com o servidor.";

        }

    });

});