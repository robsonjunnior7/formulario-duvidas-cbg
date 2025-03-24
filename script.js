document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("duvidaForm");

    form.addEventListener("submit", function(event) {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || assunto === "" || mensagem === "") {
            alert("Tem mais uma dúvida? Clique em OK e insira os dados novamente.");
            event.preventDefault();
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            event.preventDefault();
            return;
        }

        alert("Formulário enviado com sucesso!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});