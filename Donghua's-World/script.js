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
let perfil = document.querySelector('#perfil-infos');
let botao = document.querySelector('#perfil-botao');
let pesquisar = document.getElementById('pesquisar')

function mostrar() {
  // Alterna a visibilidade do menu
  perfil.style.display = perfil.style.display === 'none' ? 'block' : 'none';
}

function acao(opcao) {
  perfil.style.display = 'none'; // Esconde o menu após selecionar uma opção

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