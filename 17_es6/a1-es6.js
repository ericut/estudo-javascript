//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// es6 - es2015 -

// let + cont
// arrow functions
// classes
// template string
// destructing
// default, rest, spread operators

// let - const

// es5
// var global
if (true) {
  var v = "aula es5";
}
console.log(v);

// es6
// let escopo
if (true) {
  let x = "aula es6";
  console.log(x);
}

const MyNum = 39393;
console.log(MyNum);
// MyNum = 050505; // imutável

const Aluno = {
  nome: "Eric",
  sobrenome: "Li",
};
console.log(Aluno.nome);

Aluno.nome = "Frank"; // valores mutaveis, porém campos e estrutura de objeto não são
console.log(Aluno.nome);

console.log("---------------------------------");
// // // // // // // // // // // // // // // // // // // // // // // // // //

// arrow functrions

// es5
var soma = function (a, b) {
  return a + b;
};

function soma2(a, b) {
  return a + b;
}

// es6
let soma3 = (a, b) => a + b;
let soma4 = (a, b) => {
  return a + b;
};

let log = () => {
  console.log("error");
};

const Aluno2 = {
  nome: "Ana",
  getAluno: function () {
    return console.log(this);
  },
};
Aluno2.getAluno();

const Aluno3 = {
  nome: "Ana",
  getAluno: () => console.log(this), // this perde referência em arrow functions em objetos
};
Aluno3.getAluno();

console.log("---------------------------------");
// // // // // // // // // // // // // // // // // // // // // // // // // //

// classes

// es5
function Carro(marca) {
  this.marca = marca;
}
Carro.prototype.getMarca = function getMarca() {};

// es6
class Carro2 {
  constructor(marca) {
    this.marca = marca;
  }

  getMarca() {
    return this.marca;
  }
}

class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  getMarca() {
    return this.marca;
  }
  getModelo() {
    return this.modelo;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, porta) {
    super(marca, modelo);
    this.porta = porta;
  }
  getInfo() {
    return console.log("Marca: " + super.getMarca() + ", Modelo: " + super.getModelo());
  }
}
