const names = ['Régis', 'Romain', 'Jean', 'Paul'];
names.push('Eric');

// names.forEach(function (name, index) {
//   console.log(`${index} - Hello ${name.toUpperCase()}`);
// });

// Programmation fonctionnelle
names
  .filter((name) => name.length === 4)
  .map((name) => name.toUpperCase())
  .forEach((name, index) => {
    console.log(`${index} - Hello ${name}`);
  });

console.log('FIN');

// pile d'appel
// ^
// |
// |
// |     => - => - =>
// |.... forEach                - lg
// +----------------------------------> temps
//                           FIN
