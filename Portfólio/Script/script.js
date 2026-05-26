/* =============================================
   PORTFÓLIO — Ryan Carvalho
   ============================================= */

// ── 1. DADOS (arrays e objetos) ─────────────────

const dadosPerfil = {
  nome: "Ryan Carvalho",
  email: "ryancarvalhosilva0907@gmail.com",
  curso: "Tecnologia da Informação",
  dataFormatura: new Date("2027-12-01")
};

const habilidades = [
  "HTML5", "CSS3", "JavaScript ES6+",
  "Manipulação de DOM", "Fetch API / Async-Await",
  "APIs REST", "Git & GitHub",
  "Responsive Design", "JSON",
  "Node.js (básico)", "Lógica de Programação"
];

const projetos = [
  {
    tag: "JavaScript · DOM",
    nome: "Portfólio Interativo",
    descricao: "Portfólio pessoal com renderização dinâmica via DOM, quiz de perfil, consumo de APIs e modo escuro."
  },
  {
    tag: "API · Async/Await",
    nome: "Frases Motivacionais",
    descricao: "Busca frases em inglês via API e traduz para o português em tempo real com fetch assíncrono."
  },
  {
    tag: "JS · Datas",
    nome: "Contador de Formatura",
    descricao: "Calcula dinamicamente anos, meses e dias restantes até a data de formatura."
  },
  {
    tag: "UX · JS",
    nome: "Quiz Tech Profile",
    descricao: "Quiz interativo que identifica perfil Front-End ou Back-End com feedback personalizado."
  }
];

const perfis = {
  frontend: {
    emoji: "🎨",
    titulo: "Você é Front-End!",
    desc: "Você pensa visualmente e se importa com cada pixel. HTML, CSS e JavaScript no navegador são sua linguagem. Criar experiências bonitas e intuitivas é o que te motiva."
  },
  backend: {
    emoji: "⚙️",
    titulo: "Você é Back-End!",
    desc: "Você pensa em sistemas, estruturas e eficiência. Bancos de dados, APIs e lógica de negócio são onde você brilha. O que acontece nos bastidores é tão importante quanto a vitrine."
  }
};

// Frases locais (fallback garantido)
const frasesFallback = [
  { content: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { content: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { content: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { content: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { content: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { content: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { content: "Programs must be written for people to read.", author: "Harold Abelson" }
];

// ── 2. INICIALIZAÇÃO ────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  exibirDadosDinamicos();
  renderSkills();
  renderProjects();
  mostrarDiaEStatus();
  iniciarContador();
  configurarSaudacao();
  configurarThemeToggle();
  buscarFrase();
});

// ── 3. EXIBIÇÃO DINÂMICA DE DADOS ───────────────

function exibirDadosDinamicos() {
  // Injeta nome dinamicamente no título hero (se o elemento existir)
  const elNome = document.getElementById("nome-dinamico");
  if (elNome) elNome.textContent = dadosPerfil.nome;

  // Injeta email no contato
  const elEmail = document.getElementById("email-dinamico");
  if (elEmail) {
    elEmail.textContent = dadosPerfil.email;
    elEmail.href = `mailto:${dadosPerfil.email}`;
  }
}

// ── 4. RENDERIZAÇÃO DE HABILIDADES ─────────────

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = "";

  habilidades.forEach((skill, i) => {
    const tag = document.createElement("span");
    tag.className = "skill-tag";
    tag.textContent = skill;
    tag.style.animationDelay = `${i * 0.06}s`;
    grid.appendChild(tag);
  });
}

// ── 5. RENDERIZAÇÃO DE PROJETOS ─────────────────

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";

  projetos.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <p class="project-tag">${p.tag}</p>
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
    `;
    grid.appendChild(card);
  });
}

// ── 6. SAUDAÇÃO PERSONALIZADA ───────────────────

function configurarSaudacao() {
  const btn   = document.getElementById("greet-btn");
  const input = document.getElementById("name-input");
  const msg   = document.getElementById("greeting-msg");
  if (!btn || !input || !msg) return;

  function saudar() {
    const nome = input.value.trim();
    if (!nome) {
      msg.textContent = "Por favor, escreva seu nome! 😊";
      return;
    }
    const hora = new Date().getHours();
    let saudacao;
    if (hora >= 5 && hora < 12)       saudacao = "Bom dia";
    else if (hora >= 12 && hora < 18) saudacao = "Boa tarde";
    else                               saudacao = "Boa noite";

    msg.textContent = `${saudacao}, ${nome}! Seja bem-vindo(a) ao meu portfólio. 🚀`;
  }

  btn.addEventListener("click", saudar);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") saudar(); });
}

// ── 7. DIA DA SEMANA & STATUS ACADÊMICO ─────────

function mostrarDiaEStatus() {
  const dias = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
  const hoje = new Date();

  const elDia    = document.getElementById("current-day");
  const elStatus = document.getElementById("status-badge");

  if (elDia)    elDia.textContent = dias[hoje.getDay()];
  if (elStatus) {
    const fimSemana = hoje.getDay() === 0 || hoje.getDay() === 6;
    elStatus.textContent = fimSemana ? "📅 Fim de semana" : "✅ Em aprovação acadêmica";
  }
}

// ── 8. CONTADOR DE FORMATURA ────────────────────

function iniciarContador() {
  function atualizar() {
    const agora = new Date();
    const diff  = dadosPerfil.dataFormatura - agora;

    const elAnos  = document.getElementById("cd-anos");
    const elMeses = document.getElementById("cd-meses");
    const elDias  = document.getElementById("cd-dias");

    if (diff <= 0) {
      if (elAnos)  elAnos.textContent  = "🎓";
      if (elMeses) elMeses.textContent = "0";
      if (elDias)  elDias.textContent  = "0";
      return;
    }

    const totalDias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const anos  = Math.floor(totalDias / 365);
    const meses = Math.floor((totalDias % 365) / 30);
    const dias  = totalDias % 30;

    if (elAnos)  elAnos.textContent  = anos;
    if (elMeses) elMeses.textContent = meses;
    if (elDias)  elDias.textContent  = dias;
  }

  atualizar();
  setInterval(atualizar, 60000);
}

// ── 9. QUIZ DE PERFIL TECH ──────────────────────

function mostrarPerfil(tipo) {
  const result = document.getElementById("quiz-result");
  const perfil = perfis[tipo];
  if (!result || !perfil) return;

  document.querySelectorAll(".quiz-btn").forEach(btn => btn.classList.remove("active"));
  const btnAtivo = document.querySelector(`.quiz-btn[data-tipo="${tipo}"]`);
  if (btnAtivo) btnAtivo.classList.add("active");

  result.classList.remove("hidden");
  result.innerHTML = `
    <strong>${perfil.emoji} ${perfil.titulo}</strong><br/>
    <span style="color:var(--text-muted)">${perfil.desc}</span>
  `;
}

// ── 10. FRASE MOTIVACIONAL + TRADUÇÃO ASSÍNCRONA ─

async function buscarFrase() {
  const elFrase    = document.getElementById("frase-texto");
  const elTraducao = document.getElementById("frase-traducao");
  const btn        = document.getElementById("nova-frase-btn");

  if (!elFrase) return;

  // Registra clique do botão apenas uma vez
  if (btn && !btn.dataset.bound) {
    btn.dataset.bound = "true";
    btn.addEventListener("click", buscarFrase);
  }

  // Feedback visual
  elFrase.style.opacity = "0.3";
  if (elTraducao) elTraducao.textContent = "Traduzindo...";

  let fraseEN = "";
  let autorEN = "";

  // Tenta API externa (ZenQuotes via proxy CORS)
  try {
    const res = await fetch("https://zenquotes.io/api/random");
    if (!res.ok) throw new Error("Falhou");
    const data = await res.json();
    fraseEN = data[0].q;
    autorEN = data[0].a;
  } catch {
    // Fallback local
    const rand = frasesFallback[Math.floor(Math.random() * frasesFallback.length)];
    fraseEN = rand.content;
    autorEN = rand.author;
  }

  elFrase.textContent = `${fraseEN} — ${autorEN}`;
  elFrase.style.opacity = "1";

  // Tradução assíncrona via MyMemory API (gratuita, sem chave)
  if (elTraducao) {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(fraseEN)}&langpair=en|pt-BR`;
      const res  = await fetch(url);
      const data = await res.json();
      const trad = data?.responseData?.translatedText;
      elTraducao.textContent = (trad && trad !== fraseEN) ? `↳ ${trad}` : "";
    } catch {
      elTraducao.textContent = "";
    }
  }
}

// ── 11. ALTERNADOR DE TEMA CLARO / ESCURO ────────

function configurarThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  // Restaurar tema salvo no localStorage
  const temaSalvo = localStorage.getItem("tema-ryan");
  if (temaSalvo === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    btn.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      btn.textContent = "🌙";
      localStorage.setItem("tema-ryan", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      btn.textContent = "☀️";
      localStorage.setItem("tema-ryan", "light");
    }
  });
}