//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// iterators

const carModel = ["Onix", "Twingo", "HB20", "Honda"];

// for
for (let index = 0; index < carModel.length; index++) {
  console.log(carModel[index]);
}

// while
let index = 0;
while (index < carModel.length) {
  console.log(carModel[index]);
  index++;
}

// for-of
for (const car of carModel) {
  console.log(car);
}

console.log("---------------------------------");
// // // // // // // // // // // // // // // // // // // // // // // // // //

const carModalAll = {
  allModel: {
    Fiat: ["Palio", "Chronos", "Uno"],
    Volkswagen: ["Gol", "Up", "Golf"],
    Chevrolet: ["Monza", "Corsa", "Onix"],
  },
  //
  [Symbol.iterator]() {
    const brands = Object.values(this.allModel);
    let currentModelIndex = 0;
    let currentBrandIndex = 0;
    return {
      next() {
        // lista de todos os modelos
        const models = brands[currentBrandIndex];
        // verificar a navegação dos modelos
        if (!(currentModelIndex < models.length)) {
          currentBrandIndex++;
          currentModelIndex = 0;
        }
        // validar se navegou nas marcas
        if (!(currentBrandIndex < brands.length)) {
          return {
            value: undefined,
            done: true,
          };
        }

        return {
          value: brands[currentBrandIndex][currentModelIndex++],
          done: false,
        };
      },
    };
  },
};

for (const car of carModalAll) {
  console.log(car);
}
