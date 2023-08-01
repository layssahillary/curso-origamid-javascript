const h1 = documento.querySelector('h1');
const animaisLista = documento.querySelector('.animais-lista');

console.log(h1.innerHTML); // pega so o texto 
console.log(h1.outerHTML); // pega tudo de fora, tag e tudo que está envolvendo esse h1

h1.innerHTM = '<p>Novo titulo</p>';
h1.innerHTM = '<p>Novo titulo</p>';

console.log(animaisLista.innerHTML);

////////////////////////////////

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai, ex: section
lista.parentElement.parentElement; // pai do pai, ex: section e depois html
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

////////////////////////////////

// o node pega tudo, espacos enters etc

const lista2 = document.querySelector('.animais-lista');

lista2.previousElementSibling; // elemento acima
lista2.previousSibling; // node acima

lista2.firstChild; // primeiro node child
lista2.childNodes; // todos os node child

////////////////////////////////

const lista3 = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista3); // move lista para o final de contato
contato.insertBefore(lista3, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista3, titulo); // substitui titulo por lista

//////////////////////////////////

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

mapa.appendChild(novoH1);

animais.appendChild(novoH1);

////////////////////////////////

const titulo4 = document.querySelector('h1');
const titulo5 = document.querySelector('h1');
const novoTitulo = titulo4;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo4.cloneNode(true);
const contato2 = document.querySelector('.contato');
contato.appendChild(cloneTitulo);
