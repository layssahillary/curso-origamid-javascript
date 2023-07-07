//window.alert('Isso mesmo');

document.querySelector('h1');

const h1Selecionado = document.querySelector('h1');

function callbackh1(){
  console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);


// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
//const elementoAtivo = document.querySelectorAll('.ativo'); seleciona todos os elementos que tem .ativo

// Retorne a linguagem do navegador

const linguagem = window.navigator.language;
console.log(linguagem); // pt-br 

// Retorne a largura da janela 

const largura = window.innerWidth;
