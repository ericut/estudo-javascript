//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// closures

// exemplo closure
function IMC() {
  let altura = 1.8;

  function calcula() {
    let peso = 70;
    console.log("IMC: " + peso / (altura * altura));
  }

  return calcula;
}

let imc = IMC();

imc();

// closure lexico
function Carro() {
  this.proprietario = "Eric";
  let ano = 2020;

  this.getAno = function () {
    return ano;
  };

  this.setAno = function (a) {
    ano = a;
  };
}

let carro = new Carro();

console.log(carro.proprietario);
console.log(carro.ano);
console.log(carro.getAno());
