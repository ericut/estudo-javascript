//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// curry

// função padrão
function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] - ${message}`);
}
log(new Date(), "DEBUG", "Exemplo de função");

// função currying
const logCurrying = (date) => (type) => (message) =>
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] - ${message}`);
logCurrying(new Date())("DEBUG")("Exemplo de currying");

// parametro fixo
let logNow = logCurrying(new Date());
logNow("DEBUG")("Exemplo currying com parâmetro fixo");

//
let logDebugNow = logNow("DEBUG");
logDebugNow("Exemplo nova função por currying com parametros fixo");
