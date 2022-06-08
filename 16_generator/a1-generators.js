//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// generators

// função normal
function getID(range) {
  let i = 0;
  while (i < range) {
    i++;
  }
}

// função geradora
function* getID(range) {
  let i = 0;
  while (i < range) {
    i++;
    yield i;
  }
}

let it = getID(3);

console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// for of
let it2 = getID(5);
for (const item of it2) {
  console.log(item);
}

console.log("---------------------------------");
// // // // // // // // // // // // // // // // // // // // // // // // // //

// função geradora
function* getUniqueID() {
  let i = 0;
  while (true) {
    i++;
    yield i;
  }
}

const cars = {};
const idCarsGenerator = getUniqueID();

function addCar(car) {
  const id = idCarsGenerator.next().value;
  cars[id] = { id, car };
}

addCar("Palio");
addCar("Fox");
addCar("Twingo");
addCar("Honda");
addCar("Ferrari");

console.log(cars);

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
  *carGenerator() {
    const brands = Object.values(this.allModel);
    let currentBrandIndex = 0;

    while (currentBrandIndex < brands.length) {
      yield* brands[currentBrandIndex];
      currentBrandIndex++;
    }
  },
};

let itA = carModalAll.carGenerator();

console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());
console.log(itA.next());

for (const car of carModalAll.carGenerator()) {
  console.log(car);
}
