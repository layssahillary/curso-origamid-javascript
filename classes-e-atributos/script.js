const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
} else{
  menu.classList.add('nao-possui-azul');
}

menu.className = menu.className + ' vemelho'
menu.className+=' roxo'

console.log(menu.classList);
console.log(menu.className);

////////////////////////////////

const animais = document.querySelector('.animais');

console.log(animais.attributes.id);

////////////////////////////////

 const img = document.querySelector('img');
 const srcImg = img.getAttribute('alt');
 const altrarAlt = img.setAttribute('alt', 'é uma raposa');
 const possuiAlt = img.hasAttribute('alt')

console.log(possuiAlt);

////////////////////////////////

const carro = {
  portas: 4,
  andar: function(km){
    console.log(`Andou ${km}`);
  }
}