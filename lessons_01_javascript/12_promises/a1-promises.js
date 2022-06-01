//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// promises

// exemplo de criação promise e execusão
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso p1"), 2000);
});

promise1.then(
  (res) => {
    console.log(res);
  },
  (rej) => {}
);

new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso p1"), 2000);
}).then(
  (res) => {
    console.log(res);
  },
  (rej) => {}
);

// // // // // // // // // // // // // // // // // // // // // // // // // //
// promise com o catch

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso p2"), 2000);
});

promise2.then((res) => {
  console.log(res);
});
promise2.catch((rej) => {});

promise2
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// // // // // // // // // // // // // // // // // // // // // // // // // //
// promise encadeamento com catch

const promise3 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Sucesso p3");
  } else {
    reject("Falha p3");
  }
});

promise3.then(console.log).catch(console.error);

// // // // // // // // // // // // // // // // // // // // // // // // // //
// promise com vinculo de catch

const promise4 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso p4");
  reject("Falha p4");
});

promise4
  .then(function acao1(res) {
    console.log(`${res} ação 1`);
    return res;
  })
  .then(function acao2(res) {
    console.log(`${res} ação 2`);
    return res;
  })
  .then(function acao2(res) {
    console.log(`${res} ação 3`);
    return res;
  })
  .then(function acao3(res) {
    console.log(`${res} ação 4`);
    return res;
  })
  .catch(function erro(rej) {
    console.log(rej);
    return rej;
  });

// // // // // // // // // // // // // // // // // // // // // // // // // //
// promise catch intercalados

const promise5 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso p5");
  reject("Falha p5");
});

promise5
  .then(function acao1(res) {
    console.log(`${res} ação 1`);
    return res;
  })
  .catch(function erro1(rej) {
    console.log("Erro primeiro catch p5");
    return rej;
  })
  .then(function acao2(res) {
    console.log(`${res} ação 2`);
    return res;
  })
  .then(function acao2(res) {
    console.log(`${res} ação 3`);
    return res;
  })
  .then(function acao3(res) {
    console.log(`${res} ação 4`);
    return res;
  })
  .catch(function erro2(rej) {
    console.log(rej);
    return rej;
  });

// // // // // // // // // // // // // // // // // // // // // // // // // //
// promise encadamento de catch na primeira promise

const promise6 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso p6");
  reject("Falha p6");
});

promise6
  .catch(function erro1(rej) {
    console.log("Erro no primeiro catch p6");
    return rej;
  })
  .catch(function erro2(rej) {
    console.log(rej);
    return rej;
  });

promise6
  .then(function acao1(res) {
    console.log(`${res} ação 1`);
    return res;
  })
  .then(function acao2(res) {
    console.log(`${res} ação 2`);
    return res;
  })
  .then(function acao2(res) {
    console.log(`${res} ação 3`);
    return res;
  })
  .then(function acao3(res) {
    console.log(`${res} ação 4`);
    return res;
  });

// // // // // // // // // // // // // // // // // // // // // // // // // //
// promise ecadeamento de then e catchs com excecao no meio do fluxo

const promise7 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso p7");
  reject("Falha p7");
});

promise7.catch(function erro1(rej) {
  console.log("Erro no primeiro catch p7");
  return rej;
});

promise7
  .then(function acao1(res) {
    console.log("Promise rejeitada acao1");
    throw new Error("Erro p7");
  })
  .catch(function erro2(rej) {
    console.log("Tratamento das rejeições em p7 ou acao1");
    return rej;
  })
  .then(function acao2(res) {
    console.log(`${res} ação 2`);
    return res;
  })
  .then(function acao4(res) {
    console.log(`${res} ação 3`);
    return res;
  })
  .catch(function erro3(rej) {
    console.log("Tratamento das rejeições em p7 ou acao2 e acao3");
    return rej;
  });
