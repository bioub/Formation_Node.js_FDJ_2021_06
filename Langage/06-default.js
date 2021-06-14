function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2)); // 3

function multiply(a, b, c) {
  // c = c || 1; // affecte 1 si c est falsy vaut false, 0, '', null, undefined, NaN...
  c = c ?? 1; // ES2020 affecte 1 si c est nullish vaut null ou undefined (Node.js 12+)
  return a * b * c;
}

console.log(multiply(1, 2)); // 2
