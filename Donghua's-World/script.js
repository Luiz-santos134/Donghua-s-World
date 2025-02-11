const imgs = document.querySelector('#container');
const img = document.querySelectorAll('#container img'); // Seleciona todas as imagens

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 8) { // Quando chega na última imagem, volta para a primeira
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 12.5}%)`; // Corrigido para mover corretamente
}

setInterval(carrossel, 1800);

// -------------------------==============------------------------------------------------------
function toggleTheme() {
  let claro = document.querySelector('#temaClaro')
  let escuro = document.querySelector('#temaEscuro')

  document.documentElement.classList.toggle("light-theme");

  if (claro.style.display == 'block')
  {
    claro.style.display = 'none';
    escuro.style.display = 'block'
  }
  else{
    claro.style.display = 'block';
    escuro.style.display = 'none';
  }
}


let perfil = document.querySelector('#perfil-infos');
let botao = document.querySelector('#perfil-botao');
let pesquisar = document.getElementById('pesquisar')

function mostrar() {
  // Alterna a visibilidade do menu
  perfil.style.display = perfil.style.display === 'none' ? 'block' : 'none';
}

function acao(opcao) {
  perfil.style.display = 'none'; // Esconde o perfil após selecionar uma opção

  if(opcao == 'perfil')
  {
    window.location.href = "perfil.html";
  }
  else if(opcao == 'salvos')
  {
    window.location.href = "salvos.html";
  }
}

function mostrarPesquisa() {
  var input = document.getElementById("pesquisar");
  input.style.display = input.style.display === 'none' ? 'block' : 'none';
  input.focus();
}

function link(nome_botao){
  if(nome_botao == 'veja_mais')
    {
      window.location.href = "veja_mais.html";
    }
    else if(nome_botao == 'pode_gostar')
    {
      window.location.href = "pode_gostar.html";
    }
}

//  ----------------------------------------------------------------------------------------------------------------------------------------------------------

const episodios = [
  { id: 1, titulo: "Episódio 1", url: "https://www.youtube.com/embed/KXuQL2E0aUU" },
  { id: 2, titulo: "Episódio 2", url: "https://www.youtube.com/embed/TQqc5s7oSRY?si=AG-8wcZRy-BUxwMD" },
  { id: 3, titulo: "Episódio 3", url: "https://www.youtube.com/embed/1SdBYVRrixk?si=94s2V47vMqTAsanf" }
];

// Pegar o ID do episódio atual pela URL
const params = new URLSearchParams(window.location.search);
let episodioAtual = parseInt(params.get("ep")) || 1; // Se não houver parâmetro, começa do ep 1

// Atualizar vídeo na página
function carregarEpisodio() {
  const episodio = episodios.find(e => e.id === episodioAtual);
  if (episodio) {
      document.getElementById("video").src = episodio.url;
      document.getElementById("titulo-episodio").innerText = episodio.titulo;
  }
}

// Mudar para o próximo ou anterior
function mudarEpisodio(direcao) {
  const novoEpisodio = episodioAtual + direcao;
  if (episodios.some(e => e.id === novoEpisodio)) {
      episodioAtual = novoEpisodio;
      window.history.pushState({}, "", `?ep=${episodioAtual}`);
      carregarEpisodio();
  }
}

// Carregar episódio ao abrir a página
carregarEpisodio();
