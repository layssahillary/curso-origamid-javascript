var pessoa = {
  nome: 'Layssa',
  idade: '23',
}

console.log(pessoa.nome);

////////////////////////////////

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado; // o this faz referencia ao lados na linha 11, quando da consoole so do this ele aparece o objeto e suas propriedades
  }
}

// ou, sem a palavra function

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado; // o this faz referencia ao lados na linha 11, quando da consoole so do this ele aparece o objeto e suas propriedades
  },
  cinco(){
    return 5
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco())

////////////////////////////////

console.log(Math.random());

////////////////////////////////

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000'; // adicionando novas proriedades
menu.color= 'blue'; // adicionando novos metodos
menu.esconder = function(){
  console.log('Escondi')
}

var bg = menu.backgroundColor; //'#000'

////////////////////////////////

var height = 100
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight(){
    return this.height / 2; //this.height = this.menu mesma coisa
    return height / 2; // vai dividir o height da linha 61 e nao o da linha 64
  }
}

////////////////////////////////
// outras propriedades

menu.hasOwnProperty('backgroundColor') // true

'Layssa'.length // 5

////////////////////////////////

var nome = 'Layssa';

nome.length; // 6
nome.charAt(1); // 'a'
nome.replace('yssa', 'ryssa'); // 'Laryssa'
nome; // 'Layssa'

////////////////////////////////

var nome = 'LaYssa';
var nomeMinusculo = nome.toLocaleLowerCase(); //layssa

////////////////////////////////

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

////////////////////////////////


function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

////////////////////////////////

var btn = document.querySelector('.btn');

////////////////////////////////

// nomeie 3 propriedades ou métodos de strings
var nome = 'Layssa';
fixed 
length
slice

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
addEventListener
appendChild
id
innerHtml

console.log(btn)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

