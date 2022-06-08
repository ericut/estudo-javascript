//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// promises api race

// const p1 = Promise.race([
//   new Promise((resolve) => setTimeout(resolve, 2000, "P1")),
//   new Promise((resolve, reject) => setTimeout(reject, 1000, "P2")),
// ]);

// p1.then((result) => console.log(result));
// p1.catch((error) => console.log(error));

// várias promises com rejeição trazendo a primeira rejeição

// const p2 = Promise.race([
//   new Promise((resolve) => setTimeout(resolve, 3000, "P1")),
//   new Promise((resolve, reject) => setTimeout(reject, 2000, "P2")),
//   new Promise((resolve) => setTimeout(resolve, 4000, "P3")),
// ]);

// p2.then((result) => console.log(result));
// p2.catch((error) => console.log(error));

//

function showStatus() {
  console.log("Aguarde dados sendo carregados...");
}

function timeout(delay, result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, delay);
  });
}

function getCarInfo(car) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Car details: " + car);
    }, 1000);
  });
}

function showCarInfo(car) {
  return getCarInfo(car).then((info) => {
    console.log("Car info: " + car);
    return true;
  });
}

Promise.race([showCarInfo("Twingo"), timeout(300)]).then((displayed) => {
  if (!displayed) {
    showStatus();
  }
});
