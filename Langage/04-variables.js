// 'use strict';

function hello() {
  var name = 'Romain';
  console.log(name);
}

hello(); // Romain
console.log(typeof name); // undefined

function hello2() {

  if (true) {
    nameGlob = 'Romain'; // erreur en mode strict
    var nameVar = 'Romain';
    let nameLet = 'Romain';
    const nameConst = 'Romain';
    nameLet = 'Régis';
    // nameConst = 'Régis'; // erreur
  }

  console.log(typeof nameGlob); // string
  console.log(typeof nameVar); // string
  console.log(typeof nameLet); // undefined
  console.log(typeof nameConst); // undefined
}


hello2();
console.log(typeof nameGlob); // string
