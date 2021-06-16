const util = require('util');

const timeout = util.promisify(setTimeout);
// promisify génère la fonction qui aurait été écrit comme ceci :
// function timeout(delay) {
//   return new Promise((resolve) => { // ES2015 (Node 4+)
//     setTimeout(() => {
//       // appeler le callback du .then
//       resolve();
//     }, delay);
//   });
// }

timeout(500).then(() => console.log('A'));
timeout(0).then(() => console.log('B'));
timeout(1000).then(() => console.log('C'));
timeout(500).then(() => console.log('D'));

console.log('E');

// Les promesses ne fonctionne pour les callbacks appelés plusieurs fois
// setTimeout OK -> setInterval FAIL
// requete HTTP OK -> socket TCP FAIL
// lecture de fichier OK -> lecture de fichier ligne par ligne FAIL
function interval(delay) {
  return new Promise((resolve) => {
    setInterval(() => {
      // appeler le callback du .then
      resolve();
    }, delay);
  });
}

// setInterval(() => console.log('2s'), 2000);
// interval(2000).then(() => console.log('2s'));
