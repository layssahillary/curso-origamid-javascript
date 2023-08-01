const img = document.querySelector('img');

function callback(){
  console.log('Clicou')
}

img.addEventListener('click', callback);

////////////////////////////////

function callback2(event){
  console.log(event);
}

img.addEventListener('click', callback2);

////////////////////////////////

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

animaisLista.addEventListener('click', callbackLista); 

console.log(animaisLista);

////////////////////////////////

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

////////////////////////////////

const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
h1.addEventListener('mousemove', callback);

window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

////////////////////////////////

function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul'); //add a class com a cor azul e vermelha no css 
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);

