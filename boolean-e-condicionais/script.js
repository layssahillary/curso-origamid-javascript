var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log( "é verdadeiro");
  var x = 10;
} else {
  console.log( "é falso");
}
console.log(x);


////////////////////////////////


if (possuiGraduacao) {
  console.log( "é verdadeiro");
  var x = 10;
} else if (possuiDoutorado){
  console.log( "Poussui doutorado");
} else {
  console.log( "Nao possui nada");
}

////////////////////////////////

var nome = 'Layssa';

if (nome){
  console.log(nome);
}  else {
  console.log('nome nao existe');
}

////////////////////////////////

if (!possuiGraduacao){
  console.log(possuiGraduacao);
  console.log("nao possui graduacao");
}

////////////////////////////////

var x = 10;
x === 10;
console.log(x); //true

////////////////////////////////

var x = 'Gatos';
console.log(x !== g);


//falsy

if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" 

//truthy

if(true)
if(1) 
if(' ')
if('layssa')
if(-5)
if({}) 

//truthy

if(!true) //false
if(!1) //false
if(!' ') //true
if(!undefined) //true
if(!!' ') //true
if(!!'') //false 

// comparçao 

10 == '10' //true
10 == 10; //true
10 === '10'; //false
10 === 10; //true
10 != 15; //true
10 != '10'; //false
10 !== '10'; //true

// e (&&)

true && true //true
true && false //false
false && true //true
'Gato' && 'Cao' // 'Cao'
(5-5) && (5+5) //0
'Gato' && false //false
(5>=5) && (3<6) //true 


if((5-5) && (5+5)){
  console.log('Verdadeiro')
} else{
  console.log('Falso');
}


if((5-10) && (5+5)){
  console.log('Verdadeiro')
} else{
  console.log('Falso');
}

// ou (||)

true || true //true
true || false //true
'Gato' || 'Cao' //'Gato'
(5-5) || (5+5); //

////////////////////////////////

var corFavorita ='Rosa'

switch (corFavorita){
  case 'Rosa':
    console.log('Olhe para a barbie');
    break;	
  case 'Amarelo':
    console.log('Olhe para o sol')
    break;
  case 'Verde':
    console.log('Olhe para a floresta');
    default:
      console.log('é rosa mesmo');
}