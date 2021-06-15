const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, 'package.json');
const packageCopyPath = path.resolve(__dirname, 'package.json.copy');


// Style Synchrone
// pile d'appel
// ^
// |
// |
// |
// |try { readFileSync XXXXXXXXXXXXXXXX - writeFileSync XXXXXXXXXXXXXXXXXX - lg }
// +-------------------------------------------------------------------------------> temps
//                                 DONE

try {
  const buffer = fs.readFileSync(packagePath);
  fs.writeFileSync(packageCopyPath, buffer);
  console.log('Copy Done');
} catch (err) {
  console.log(err);
}

// Style Asynchrone basé sur des callbacks
// le callback est toujours en dernier dans fs
// et le premier paramètre du callback sera l'erreur si besoin
// le deuxième le retour de la fonction
// pile d'appel
// ^
// |
// |
// |                                      writeFile                       lg
// |try { readFile } .................... =>        ..................... =>
// +-------------------------------------------------------------------------------> temps
//                                 DONE

// Callback Hell / Pyramid of Doom
fs.readFile(packagePath, (err, buffer) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(packageCopyPath, buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy Done');
      }
    });
  }
});

// Style Asynchrone basé sur des promesses (nouveauté de Node 12)
fs.promises.readFile(packagePath)
  .then((buffer) => fs.promises.writeFile(packageCopyPath, buffer))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err));

// Style Asynchrone basé sur des promesses (nouveauté de Node 12) + async/await (ES2017)
(async () => {
  try {
    const buffer = await fs.promises.readFile(packagePath);
    await fs.promises.writeFile(packageCopyPath, buffer);
    console.log('Copy Done');
  } catch (err) {
    console.log(err);
  }
})();


// ES2022 : top level await
// try {
//   const buffer = await fs.promises.readFile(packagePath);
//   await fs.promises.writeFile(packageCopyPath, buffer);
//   console.log('Copy Done');
// } catch (err) {
//   console.log(err);
// }
