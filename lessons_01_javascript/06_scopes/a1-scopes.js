//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// escopo de bloco
if (true) {
  // escopo funcional
  const message = "Hello";
  console.log(message);
}
// #### error refeer
// console.log(message);

for (const color of ["verde", "vermelho", "amarelo"]) {
  const message = "Olá";
  console.log(color);
  console.log(message);
}
// #### error refeer
// console.log(color);
// console.log(message);

// exemplo de escopo de bloco com var porem será escopo global
if (true) {
  var count = 0;
  console.log(count);
}
console.log(count);

//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// exemplo de escopo local com var dentro de função
function executar() {
  var text = "escopo local com var";
  console.log(text);
}
executar();
// #### error refeer
// console.log(text);

// exemplo de escopo local let const
function executar2() {
  let txt = 0;
  const teste = 2;
  function executar3() {}
  console.log(txt);
  console.log(teste);
  console.log(executar3);
}
executar2();
// #### error refeer
// console.log(txt);
// console.log(teste);
// console.log(executar3);

//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// exemplo de escopo aninhado
function executar3() {
  const txt = "escopo aninhado";
  if (true) {
    const name = "if interna";
    console.log(txt);
  }
  // #### error refeer
  // console.log(name);
}
executar3();

// exemplo escopo global
let gName = "global var";
console.log(gName);

//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// hoisting - chama função ainda não declarada
printName();

function printName() {
  console.log("Nome: " + gName);
}
