//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// proxy

let Carro = {
  proprietario: "Eric",
  ano: "2019",
};

const handler = {
  get(target, property, receiver) {
    console.log(`GET ${property}`);
    if (property in target) {
      return target[property];
    }
    return "Propriedade inexistente";
  },
};

let carroProxy = new Proxy(Carro, handler);

console.log(Carro.modelo);
console.log(carroProxy.modelo);

// // // // // // // // // // // // // // // // // // // // // // // // // //
console.log("---------------------------------");
let tradutor = {
  Carro: "Car",
  Ano: "Year",
};

const handler2 = {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return property;
    }
  },
  set(target, property, value) {
    if (typeof value === "string") {
      target[property] = value;
      return true;
    } else {
      return false;
    }
  },
};

let tradutorProxy = new Proxy(tradutor, handler2);

console.log(tradutorProxy["Carro"]);
console.log(tradutorProxy["Modelo"]);

tradutorProxy["Modelo"] = "Model";
tradutorProxy["Marca"] = 3434;

console.log(tradutorProxy["Modelo"]);
console.log(tradutorProxy["Marca"]);
