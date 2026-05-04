
const botao = document.getElementById("modoClaroEscuro");

let claro = true;

botao.addEventListener("click", function () {
    if (claro) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo Claro";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo Escuro";
    }

    claro = !claro; // agora funciona corretamente
});


const NOME = "Ryan de Carvalho";
let tituloProfissional = "Desenvolvedor Web";
let minhhaBio = "Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis. Com habilidades em HTML, CSS e JavaScript, estou sempre buscando aprender novas tecnologias para aprimorar minhas habilidades e entregar projetos de alta qualidade. Meu objetivo é contribuir para o desenvolvimento de soluções inovadoras e impactantes na área de tecnologia.";

let anoFormatura = 2028;
let anoIngresso = 2025;

let indefinido;
let nulo = null;

let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário",
};


console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);


function calcularTempoRestante(dataAtual, dataFutura) {
    const diffMs = dataFutura - dataAtual;

    const diasTotais = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const anos = Math.floor(diasTotais / 365);
    const meses = Math.floor((diasTotais % 365) / 30);
    const dias = (diasTotais % 365) % 30;

    return { anos, meses, dias };
}

const hoje = new Date();
const dataFormatura = new Date(`${anoFormatura}-12-31`);

const tempo = calcularTempoRestante(hoje, dataFormatura);

const commitMessage = `
feat: adiciona modo claro/escuro e cálculo de formatura

Data atual: ${hoje.toLocaleDateString()}
Tempo restante:
- ${tempo.anos} anos
- ${tempo.meses} meses
- ${tempo.dias} dias
`;

console.log(commitMessage);


document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhhaBio;
document.getElementById("anoFormatura").innerText = anoFormatura;