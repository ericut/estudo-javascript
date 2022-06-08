//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// immediately invoked function expression

// declaration
// function myFunc() {
//   ..code
// }

// expression
// let myFunc = function() {
//   ..code
// }

// iife immediately
// (function () { ...code })()

// iife exception
// let myFunc = function() { ...code }()

(function mensagem() {
  console.log("Exemplo de IIFE");
})();

(function () {
  console.log("Exemplo 2 de IIFE");
})();

const unicoID = (function () {
  let count = 0;
  return function () {
    ++count;
    return `id_${count}`;
  };
})();

console.log(unicoID());
console.log(unicoID());
console.log(unicoID.count);
