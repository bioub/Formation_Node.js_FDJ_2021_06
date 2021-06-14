function externe(msg) {
  function interne() {
    console.log(msg);
  }

  return interne;
}

const hello = externe('Hello');
hello();

// pile d'appel
// ^
// |
// |
// |
// |externe - interne/hello
// +----------------------------------> temps

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// ..1s.. 0 ..1s.. 1 ..1s.. 2 (si setTimeout est synchrone)
// ..1s.. 0 1 2 (si on avait une closure)
// ..1s.. 3 3 3 (si pas de closure)

// pile d'appel
// ^
// |
// |
// |
// |for { st - st - st }          fct - fct - fct
// +------------------------------1s-------------> temps
//                                3     3     3

for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
