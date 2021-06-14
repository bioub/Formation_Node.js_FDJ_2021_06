'use strict';

globalThis.varGlobal = 'varGlobal';
const varModule = 'varModule';

function externe() {
  const varClosure = 'varClosure';

  function interne() {
    const varLocal = 'varLocal';
    console.log(varLocal);
    console.log(varClosure);
    console.log(varModule);
    console.log(varGlobal);
  }

  interne();
}

externe();
console.log(typeof interne); // undefined

// pile d'appel
// ^
// |
// |
// |interne
// |externe
// +----------------------------------> temps
