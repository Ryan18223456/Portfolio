const usuario = {
  nome: "Ryan de Carvalho",
  titulo: "Desenvolvedor Web",
  bio: "Desenvolvedor focado em performance, clareza de código e construção de interfaces eficientes.",
  formatura: new Date("2028-12-31")
};

const el = {
  nome: document.getElementById("nome"),
  titulo: document.getElementById("titulo"),
  bio: document.getElementById("bio"),
  formatura: document.getElementById("formatura"),
  tempo: document.getElementById("tempo"),
  botao: document.getElementById("toggleTema")
};

function calcularTempo(dataAtual, dataFutura) {
  const diff = dataFutura - dataAtual;

  if (diff <= 0) return null;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const anos = Math.floor(dias / 365);
  const meses = Math.floor((dias % 365) / 30);
  const restoDias = (dias % 365) % 30;

  return { anos, meses, dias: restoDias };
}

function render() {
  el.nome.textContent = usuario.nome;
  el.titulo.textContent = usuario.titulo;
  el.bio.textContent = usuario.bio;
  el.formatura.textContent = `Formatura: ${usuario.formatura.toLocaleDateString()}`;

  const tempo = calcularTempo(new Date(), usuario.formatura);

  el.tempo.textContent = tempo
    ? `${tempo.anos} anos, ${tempo.meses} meses, ${tempo.dias} dias restantes`
    : "Curso concluído";
}

function atualizarBotao() {
  el.botao.textContent = document.body.classList.contains("dark")
    ? "Modo Claro"
    : "Modo Escuro";
}

function initTema() {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
  }

  atualizarBotao();

  el.botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const atual = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("tema", atual);

    atualizarBotao();
  });
}

render();
initTema();