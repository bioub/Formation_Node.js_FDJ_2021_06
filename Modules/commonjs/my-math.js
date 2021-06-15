// function(exports, require) {
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// créer une fonction sum globale
// globalThis.sum = sum;

// exporter la fonction sum (sans variable globale)
exports.sum = sum;
exports.multiply = multiply;

// }
