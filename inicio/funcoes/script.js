function areaQuadrado(lado){
  return lado * lado
}

console.log(areaQuadrado(10)); //100

function pi(){
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log();

////////////////////////////////

function imc (peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80,1.8)); //24.69

////////////////////////////////

function corFavorita(cor){
  if (cor === 'Azul') {
    return 'Voce Gosto de azul';
  } else if (cor === 'Verde') {
    return 'Voce gosto de verde';
  } else {
    return 'Voce nao gosto de cor';
  }
}

corFavorita(); // retorna 'Voce nao gosto de cor'

////////////////////////////////

function mostraConsole(){
  console.log('oi');
}

addEventListener('click', mostraConsole); 

// ou 

addEventListener('click', function(){ console.log('oi')});

////////////////////////////////

function imc2(peso, altura){
  const imc = peso / (altura**2);
  console.log(imc);
}

imc2(80,1.80); // retora o imc
console.log(imc2(80,1.80)); // retorna o imc e undefined 

////////////////////////////////

function terceiraIdade(idade){
  if (typeof idade !== 'number' ) { // typeof vai mostrar o tipo do dado da linha 71
    return 'Por favor preencha com um numero'
  } else if (idade >= 60) {
    return true; 
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

///////////////////////////////

function faltaVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} paises`
}

faltaVisitar(20) // falta visitar 173 paises

////////////////////////////

var profissao = 'Dev';

function dados() {
  var nome = 'Layssa';
  var idade = 22; // nao ta sendo usada
  function outrosDados() {
    var endereco = 'Sao Paulo';
    var idade = 23;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Layssa, 23, Sao Paulo, Dev'
outrosDados(); // retorna um erro
