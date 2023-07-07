// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeParente = 30;
var minhaIdade = 22;

if ( minhaIdade > idadeParente ) {
  console.log("Eu sou mais velha");
} else if ( minhaIdade === idadeParente ) {
  console.log("Mesma idade");
} else {
  console.log("Eu sou mais nova");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // resposta: true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // resposta: true
var idade = 28; // resposta: true
var possuiDoutorado = false; // resposta: false
var empregoFuturo; // resposta: false
var dinheiroNaConta = 0; // resposta: false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturous, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
 console.log("Brasil tme mais habitantes")
} else {
  console.log("Brasil tem menos habitantes")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // resposta: Falso 

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // resposta: Cão