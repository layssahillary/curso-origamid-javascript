var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

//////////////////////////////////////////////

var numero = 20;

numero /=10; // ou numero = numero + 10;
console.log(numero); //30 

//////////////////////////////////////////////

// condicao ? true : false
var idade = 19;
naoPossuiDiabetes = true;
var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ?  'Pode beber' : 'Nao pode beber';
console.log(podeBeber); //true

//////////////////////////////////////////////

var possuiFaculdade = true;

if(possuiFaculdade)
  console.log('sim possui'); 
else
  console.log('Náo possui');
