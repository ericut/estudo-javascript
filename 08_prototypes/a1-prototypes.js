//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// prototypes

function Pessoa(nome) {
  if (!nome) {
    this.nome = "Anonimo";
  } else {
    this.nome = nome;
  }

  this.dizerOla = () => console.log(this.nome + " diz: Olá!");
}

let pessoaA = new Pessoa("Eric");
Pessoa.digaOla = function () {
  console.log("Olá, meu nome é " + this.nome);
};
let pessoaB = new Pessoa("Frank");
console.log("---------------------------------");
try {
  pessoaA.digaOla();
} catch (e) {
  console.log("Falha no pessoaA.digaOla");
}
try {
  pessoaB.digaOla();
} catch (e) {
  console.log("Falha no pessoaB.digaOla");
}
console.log("---------------------------------");

// // // // // // // // // // // // // // // // // // // // // // // // // //
pessoaB.digaOla = function () {
  console.log("Oi meu nome é " + this.nome);
};
console.log("---------------------------------");
try {
  pessoaA.digaOla();
} catch (e) {
  console.log("Falha no pessoaA.digaOla");
}
try {
  pessoaB.digaOla();
} catch (e) {
  console.log("Falha no pessoaB.digaOla");
}
console.log("---------------------------------");

// // // // // // // // // // // // // // // // // // // // // // // // // //
Pessoa.prototype.digaOla = function () {
  console.log("Olá, eu sou o " + this.nome);
};
let pessoaC = new Pessoa("Li");
console.log("---------------------------------");
try {
  pessoaA.digaOla();
} catch (e) {
  console.log("Falha no pessoaA.digaOla");
}
try {
  pessoaB.digaOla();
} catch (e) {
  console.log("Falha no pessoaB.digaOla");
}
try {
  pessoaC.digaOla();
} catch (e) {
  console.log("Falha no pessoaC.digaOla");
}
console.log("---------------------------------");

// // // // // // // // // // // // // // // // // // // // // // // // // //
Pessoa.prototype.dizerOla = function () {
  console.log(this.nome + " vou dizer outro Oi!");
};
pessoaB.dizerOla = function () {
  console.log(this.nome + " consigo dizer outro Olá!");
};

console.log("---------------------------------");
try {
  pessoaA.dizerOla();
} catch (e) {
  console.log("Falha no pessoaA.dizerOla");
}
try {
  pessoaB.dizerOla();
} catch (e) {
  console.log("Falha no pessoaB.dizerOla");
}
try {
  pessoaC.dizerOla();
} catch (e) {
  console.log("Falha no pessoaC.dizerOla");
}
console.log("---------------------------------");
