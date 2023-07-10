// foreach é o metodo de array

const imgs = document.querySelectorAll('img');

let i=0
imgs.forEach(function(img, index, array){ // item, index do array e o proprio array
  console.log(img, index, array);
});

////////////////////////////////

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function(item){
  console.log(item);
});

////////////////////////////////

const imgens = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
})

imgs.forEach(item => {
  console.log(item);
})

let a = 0;
imgs.forEach((item) => console.log(a++));

////////////////////////////////









