//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// promises api all settled

const p1 = Promise.allSettled([
  new Promise((resolve) => setTimeout(resolve, 3000, "P1")),
  new Promise((resolve, reject) => setTimeout(reject, 2000, "P2")),
  new Promise((resolve) => setTimeout(resolve, 4000, "P3")),
]);

p1.then((result) => console.log(result));
p1.catch((error) => console.log(error));
