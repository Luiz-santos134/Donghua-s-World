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




// Lista de donghuas (poderia vir de um banco de dados ou JSON externo)
const donghuas = {
    "1": { titulo: "Soul Land", title: "Soul Land", imagem: "img2.png", descricao: "Tang San, um gênio das artes marciais, sacrifica tudo para obter conhecimento proibido e renasce em um mundo onde o cultivo espiritual define o destino. Agora, em Douluo Dalu, ele deve despertar seu espírito marcial, superar desafios e desvendar segredos ancestrais para se tornar um verdadeiro mestre das almas. Embarque nessa jornada épica repleta de batalhas incríveis, companheirismo e evolução!" },
    "2": { titulo: "Demon Hunter", title: "Demon Hunter", imagem: "img3.png", descricao: "Em um mundo onde demônios espreitam nas sombras e ameaçam a humanidade, caçadores se levantam para protegê-la. Um jovem prodígio, marcado pelo destino e movido pela vingança, trilha um caminho sangrento para se tornar o mais temido dos caçadores de demônios. Entre segredos ocultos, batalhas intensas e poderes ancestrais, sua jornada será repleta de desafios que testarão sua força e determinação!" }
  };
  
  // Pega o ID da URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  
  // Se o ID for válido, exibe as informações
  if (donghuas[id]) {
    document.querySelector("title").innerText = donghuas[id].title;

    document.querySelector(".titulo").innerText = donghuas[id].titulo;
    let titulos = document.getElementsByClassName("epTitulo");
    for (let t = 0; t < titulos.length; t++) {
      titulos[t].innerText = donghuas[id].titulo;
    }
    //baner img fundo
    document.getElementById("imagem").src = donghuas[id].imagem;
    
    // Seleciona todos os elementos com a classe "imagem1" e altera o src
    let imagens = document.getElementsByClassName("imagem1");
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].src = donghuas[id].imagem;
    }

    document.getElementById("descricao").innerText = donghuas[id].descricao;
  } else {
      document.body.innerHTML = "<h1>Donghua não encontrado!</h1>";
  }
