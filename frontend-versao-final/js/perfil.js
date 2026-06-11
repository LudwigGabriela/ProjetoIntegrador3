document.addEventListener("DOMContentLoaded", () => {

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        window.location.href = "login.html";
        return;
    }

    // Campos do formulário
    document.getElementById("nome").value =
        usuario.nome || "";

    document.getElementById("email").value =
        usuario.email || "";

    // Sidebar
    document.getElementById("sidebarNome").textContent =
        usuario.nome || "";

    document.getElementById("sidebarPerfil").textContent =
        usuario.perfil || "";

        document.getElementById("telefone").value =
        usuario.telefone || "";

    document.getElementById("crmv").value =
        usuario.crmv || "";

    // Iniciais
    const iniciais = usuario.nome
        ? usuario.nome
              .split(" ")
              .map(p => p[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()
        : "US";

    document.getElementById("avatarSidebar").textContent =
        iniciais;

    document.getElementById("avatarHeader").textContent =
        iniciais;

    // Cargo
    const cargo = document.getElementById("cargo");

    if (cargo) {

        if (usuario.perfil === "admin") {
            cargo.value = "admin";
        }

        if (
            usuario.perfil === "tecnico" ||
            usuario.perfil === "aux"
        ) {
            cargo.value = "aux";
        }
    }

});