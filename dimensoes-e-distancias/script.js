const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

////////////////////////////////

const primeiroh2 = documento.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

////////////////////////////////

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

////////////////////////////////

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerHeight,
  window.outerWidth,
)

////////////////////////////////

if(h2rect.top < 0){
  console.log('Passou do elemento')
}

////////////////////////////////

const small =  window.matchMedia('(max-width: 600px)').matches;

if(small){
  console.log('Usuario mobile');
} else{
  console.log('Usuario desktop');
}