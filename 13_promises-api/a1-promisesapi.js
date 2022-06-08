//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// promises api

// // Promise.resolve
// // Promise.reject
// // Promise.all
// // Promise.allSettled
// // Promise.race
// // Promise.any

// exemplo Promise.resolve
const p1 = new Promise((resolve) => resolve(console.log("Sempre será resolvida")));

Promise.resolve(console.log("Sempre será resolvida direta"));

// exemplo Promise.reject
// Promise.reject(console.log("Sempre será rejeitada"));

// exemplo Promise.all
Promise.all([
  new Promise((resolve) => setTimeout(resolve, 1200, "P1")),
  new Promise((resolve) => setTimeout(resolve, 2000, "P2")),
  new Promise((resolve) => setTimeout(resolve, 2500, "P3")),
])
  .then((results) => results.data[0].name)
  .then((name) => console.info(name))
  .catch((erro) => console.error("Exceção lançada na: " + erro));

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve([]), 1200)),
//   new Promise((resolve) => setTimeout(() => resolve([10]), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve([3, 4]), 2500)),
// ])
//   .then((results) => {
//     console.log(results);
//     return results.length;
//   })
//   .then((size) => console.info(size))
//   .catch((erro) => console.error(erro));

//
// espera todas serem resolvidas ou uma ser rejeitada

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve([]), 1200)),
  new Promise((resolve, reject) => setTimeout(() => reject([10]), 2000)),
  new Promise((resolve) => setTimeout(() => resolve([3, 4]), 2500)),
])
  .then((results) => {
    console.log(results);
    return results.length;
  })
  .then((size) => console.info(size))
  .catch((erro) => console.error(erro));
