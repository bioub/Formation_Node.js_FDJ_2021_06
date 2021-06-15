const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, 'package.json');

// Par défaut lire un fichier retourne un Buffer (tableau d'octet)
// Appeler toString permet d'appliquer un encodage de caractères
// const buffer = fs.readFileSync(packagePath);
// console.log(buffer.toString('utf8'));
// console.log(buffer.toString('latin1'));
// console.log(buffer.toString('ascii'));

// On peut dans les options passer l'encodage directement
// const content = fs.readFileSync(packagePath, { encoding: 'utf-8' });
// console.log(content);

// Style Synchrone
const content = fs.readFileSync(packagePath, { encoding: 'utf-8' });
console.log(content);

// Style Asynchrone basé sur des callbacks
// le callback est toujours en dernier dans fs
// et le premier paramètre du callback sera l'erreur si besoin
// le deuxième le retour de la fonction
fs.readFile(packagePath, { encoding: 'utf-8' }, (err, content) => {
  console.log(content);
});

// Style Asynchrone basé sur des promesses (nouveauté de Node 12)
fs.promises.readFile(packagePath, { encoding: 'utf-8' })
  .then((content) => console.log(content));
