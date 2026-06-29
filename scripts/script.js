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

//====== TRADUÇÃO ======
// Referência ao botão de tradução HTML por seu ID
const botaoTraduzir = document.getElementById("traduzir");

// Object de tradução em português e inglês
const textos = {
    pt: {
        logoPortfolio: "Portfólio Yuji",
        inicio: "Início",
        habilidades: "Habilidades",
        projetos: "Projetos",
        frase: "Hoje melhor do que ontem, amanhã melhor do que hoje",
        quem: "Quem sou eu?",
        sobre01: "Sou estudante de Engenharia de Software no Centro Universitário Filadélfia (UniFil) e apaixonado " +
            "por tecnologia, desenvolvimento e criatividade, com foco em me tornar um desenvolvedor Full-Stack.",
        sobre02: "Fui aluno (2024) e monitor (2025) do projeto de extensão, Pensamento Computacional, nas quais foram os " +
            "grandes passos na área de T.I e para evoluir meus conhecimentos. Atualmente sou membro do grupo de " +
            "pesquisa e desenvolvimento de jogos, Obscura, onde atuo como vice-líder das equipes de gestão e design.",
        contato: "Contato",
        footer: "© 2026 Henrique Yuji Toda - Todos os direitos reservados",
        tecnologiasLinguagens: "Tecnologias & Linguagens",
        webDev: "Desenvolvimento Web",
        database: "Banco de Dados",
        ferramentas: "Ferramentas",
        pensamentoComputacional: "Pensamento Computacional",
        pc: "No ano de 2024, participei como aluno do projeto de extensão dos Cursos de Computação da UniFil, Pensamento " +
            "Computacional, que tem o intuito de ensinar conceitos de tecnologia e programação para alunos do ensino " +
            "médio de escolas públicas e privadas. No ano seguinte, já como aluno universitário, participei como aluno " +
            "monitor da turma básica C e da turma intermediária, onde pude evoluir junto dos alunos como estudante de " +
            "T.I, tendo meu primeiro contato com CSS, JavaScript, Python, SQL e outros conceitos básicos.",
        portfolioPC: "Portfólio Pensamento Computacional",
        obscura01: "Atualmente, participo de um grupo de pesquisa e desenvolvimento de jogos, a Obscura, onde atuo como " +
            "vice-líder das equipes de design e gestão, auxiliando na coordenação e na orientação dos integrantes.",
        obscura02: "Estamos desenvolvendo um jogo 2D de plataforma e top-down, o Endless Gnome de exploração, aventura e" +
            " ação, que inclui combate imersivo, explorações de um cenário fantasioso e descobertas da história de fundo " +
            "ao longo de sua jornada.",
        cursos: "Cursos",
        curso: "Para aprimorar meus conhecimentos e evoluir como estudante de T.I, venho realizando cursos pagos de Java " +
            "e Full-Stack no site Udemy e um curso da Godot Engine no YouTube.",
        javaCurso: "Repositório Java (Udemy)",
        godotCurso: "Repositório Godot " +
            "(Rafael Forbeck)"
    },
    en: {
        logoPortfolio: "Yuji's Portfolio",
        inicio: "Home",
        habilidades: "Skills",
        projetos: "Projects",
        frase: "Be better today than you were yesterday, and be better tomorrow than you are today",
        quem: "Who am I?",
        sobre01: "I am a Software Engineering student at Centro Universitário Filadélfia (UniFil) and passionate about " +
            "technology, development, and creativity, with a focus on becoming a Full-Stack developer.",
        sobre02: "I participated as a student (2024) and a teaching assistant (2025) in the Computational Thinking" +
            " outreach project, which marked major steps in my IT journey and helped me advance my knowledge. Currently," +
            " I am a member of the game research and development group, Obscura, where I serve as co-lead of the " +
            "management and design teams.",
        contato: "Contact",
        footer: "© 2026 Henrique Yuji Toda - All rights reserved",
        tecnologiasLinguagens: "Technologies & Languages",
        webDev: "Web Development",
        database: "Database",
        ferramentas: "Tools",
        pensamentoComputacional: "Computing Thinking",
        pc: "In 2024, I participated as a student in UniFil's Computing Department outreach project, Computational " +
            "Thinking, which aims to teach technology and programming concepts to public and private high school " +
            "students. The following year, as a university student myself, I served as a student monitor for the Basic C" +
            " and Intermediate classes; this allowed me to grow alongside the students as an IT learner while gaining my " +
            "first exposure to CSS, JavaScript, Python, SQL, and other fundamental concepts.",
        portfolioPC: "Computing Thinking Portfolio",
        obscura01: "Currently, I am part of a game research and development group, the Obscura, where I serve as " +
            "co-lead of the design and management teams, assisting in the coordination and guidance of team members.",
        obscura02: "We are developing Endless Gnome, a 2D action-adventure game featuring both platforming and top-down " +
            "perspectives; it includes immersive combat, exploration of a fantasy setting, and the discovery of the" +
            " backstory throughout the journey.",
        cursos: "Courses",
        curso: "To improve my knowledge and grow as an IT student, I have been watching Java and Full-Stack paid courses " +
            "on Udemy, as well as a Godot Engine course on YouTube.",
        javaCurso: "Java's Repository (Udemy)",
        godotCurso: "Godot's Repository " +
            "(Rafael Forbeck)"
    }
};
// Guarda a preferência de idioma
let idioma = localStorage.getItem("idioma") || "pt"; // A página inicia em português
// Chama a função traduzir
traduzir(idioma);
// Evento ao clicar
botaoTraduzir.addEventListener("click", () => {
    // Alterna o idioma
    if (idioma === "pt") {
        idioma = "en";
    } else {
        idioma = "pt";
    }
    // Salva a preferência e define o idioma
    localStorage.setItem("idioma", idioma);
    // Chama a função de traduzir
    traduzir(idioma);
})

function traduzir(lang) {
    // Atualiza o atributo HTML lang para "pt" ou "en"
    document.documentElement.lang = lang;
    // Seleciona todos os elementos com data-lang no HTML e os percorre
    document.querySelectorAll("[data-lang]").forEach((el => {
        // Seleciona o texto que deve usar para o elemento com data-lang
        const chave =el.dataset.lang;
        // Verifica se existe tradução
        if (textos[lang][chave]) {
            // Troca o texto
            el.textContent = textos[lang][chave];
        }
    }));
    // Atualiza o texto do botão
    botaoTraduzir.textContent = (lang === "pt") ? "EN" : "PT";
}









