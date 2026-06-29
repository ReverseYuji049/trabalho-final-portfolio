// ======= TEMA ======
// Referência do botão de tema HTML por seu ID
const botaoTema = document.getElementById("tema");

// Guarda a preferência de tema
let tema = localStorage.getItem("tema") || "light";

if (tema === "dark") {
    // Retorna o nome da classe CSS "dark"
    document.body.classList.add("dark");
    // Muda o texto do botão
    botaoTema.textContent = "Modo Claro";
}
// Adiciona evento ao clicar no botão
botaoTema.addEventListener("click", () => {
    // Remove a classe "dark"
    document.body.classList.toggle("dark");

    // Define o tema como escuro
    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema", "dark");
        botaoTema.textContent = "Modo Claro";
    }
    // Define o tema como claro
    else {
        localStorage.setItem("tema", "light");
        botaoTema.textContent = "Modo Escuro";
    }
})