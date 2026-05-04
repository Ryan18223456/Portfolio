const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

let claro = true;
botao.addEventListener("click", function() {
    if (claro) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo Claro";
        claro = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo Escuro";
    }
    claro = !claro; 
});
const NOME = "Ryan de Carvalho";
let tituloProfissional = "Desenvolvedor Web";
let minhhaBio = "Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis. Com habilidades em HTML, CSS e JavaScript, estou sempre buscando aprender novas tecnologias para aprimorar minhas habilidades e entregar projetos de alta qualidade. Meu objetivo é contribuir para o desenvolvimento de soluções inovadoras e impactantes na área de tecnologia.";
let anoFormatura = 2028;
let anoingresso = 2025;
let indefinido;
let nulo = null;
let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    diciplinatual: "Design focado no usuário",
}

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhhaBio;
document.getElementById("anoFormatura").innerText = anoFormatura;
