const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, 'package.json');
const tmpPath = path.resolve(__dirname, 'tmp');
const packageCopyPath = path.resolve(tmpPath, 'package.json.copy');

// Style Synchrone
// pile d'appel

try {
  try {
    fs.accessSync(tmpPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(tmpPath);
    } else {
      throw err;
    }
  }

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

// Callback Hell / Pyramid of Doom
fs.access(tmpPath, (err) => {
  if (err && err.code === 'ENOENT') {
    fs.mkdir(tmpPath, (err) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    });
  } else if (err) {
    console.log(err);
  } else {
    next();
  }
});

function next() {
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
}

// Style Asynchrone basé sur des promesses (nouveauté de Node 12)
fs.promises
  .access(tmpPath)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.promises.mkdir(tmpPath);
    } else {
      throw err;
    }
  })
  .then(() => fs.promises.readFile(packagePath))
  .then((buffer) => fs.promises.writeFile(packageCopyPath, buffer))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err));

// Style Asynchrone basé sur des promesses (nouveauté de Node 12) + async/await (ES2017)
(async () => {
  try {
    try {
      await fs.promises.access(tmpPath);
    } catch (err) {
      if (err.code === 'ENOENT') {
        await fs.promises.mkdir(tmpPath);
      } else {
        throw err;
      }
    }

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
