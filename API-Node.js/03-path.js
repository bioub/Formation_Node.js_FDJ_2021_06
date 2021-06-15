const path = require('path');

// assemble un chemin absolu
console.log(path.resolve('package.json'));
console.log(path.resolve('logs', 'app.log'));

// assemble un chemin relatif
console.log(path.join('logs', 'app.log'));

// bonne pratique pour faire référence à des fichiers
// (voir aussi process.chdir(__dirname))
console.log(path.resolve(__dirname, 'logs', 'app.log'));
console.log(path.join(__dirname, 'logs', 'app.log'));

console.log(path.extname('package.json'));
console.log(path.basename(path.join(__dirname, 'logs', 'app.log')));
console.log(path.dirname(path.join(__dirname, 'logs', 'app.log')));
console.log(path.parse(path.join(__dirname, 'logs', 'app.log')));
