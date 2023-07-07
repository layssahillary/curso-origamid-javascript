var  videoGames = [ 'Switch', 'PS4', 'Xbox'];

var ultimoItem = videoGames.pop(); // remove o ultimo item do array

videoGames.push('3DS') // adicionou no array o 3DS

////////////////////////////////

for (var numero = 1; numero <= 10; numero++) {
  console.log(numero); // 1 2 3 4 5 6 7 8 9 10 
} // inicio, condicao e incremento


////////////////////////////////

var i = 0;
while (i <= 10) { 
  console.log(i); // 1 2 3 4 5 6 7 8 9 10 
  i++; 
  // ou i = i + 5 //incrementa de 5 em 5 
}

var  frutas = [ 'Banana', 'Morango', 'Maça', 'Laranja'];

for (var item = 0; item < frutas.length; item++) {
  console.log(frutas[item]); // Banana, Morango, Maça, Laranja
}

////////////////////////////////

var makes = ['Blush', 'Iluminador', 'Batom', 'Corretivo'];
for (var i = 0; i < makes.length; i++) {
  console.log(makes[i]);
  if(makes[i] === 'Batom') {
    break;
  }
}

////////////////////////////////

var comidas = ['Hamburguer', 'Macarrao', 'Arroz', 'Pao'];

comidas.forEach(function(comida, index, array){
  frutas.pop()
  console.log(comida, index, array );
})

