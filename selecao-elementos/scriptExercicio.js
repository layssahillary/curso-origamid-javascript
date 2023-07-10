// Retorne no console todas as imagens do site

const todasImagens = document.querySelectorAll('img');

todasImagens.forEach(function(item, index){
  console.log(item);
})

// Retorne no console apenas as imagens que começaram com a palavra imagem

const palavraImg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(palavraImg);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2');
const h2 = animais.querySelector('h2');

console.log(primeiroH2);
console.log(h2);

// Selecione o último p do site

const paragrafo = document.querySelectorAll('p');

console.log(paragrafo[--paragrafo.length]);




