const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, 'package.json');
const tmpPath = path.resolve(__dirname, 'tmp');
const packageCopyPath = path.resolve(tmpPath, 'package.json.copy');

// Style Synchrone
function mkdirIfNotExistsSync(dirPath) {
  try {
    fs.accessSync(dirPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(dirPath);
    } else {
      throw err;
    }
  }
}

try {
  mkdirIfNotExistsSync(tmpPath);
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
function mkdirIfNotExistsAsync(dirPath, cb) {
  fs.access(dirPath, (err) => {
    if (err && err.code === 'ENOENT') {
      fs.mkdir(dirPath, (err) => {
        if (err) {
          cb(err);
        } else {
          cb();
        }
      });
    } else if (err) {
      cb(err);
    } else {
      cb();
    }
  });
}

mkdirIfNotExistsAsync(dirPath, () => {
  if (err) {
    console.log(err);
  } else {
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
});

// Style Asynchrone basé sur des promesses (nouveauté de Node 12)
function mkdirIfNotExistsPromise(dirPath) {
  return fs.promises.access(dirPath).catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.promises.mkdir(dirPath);
    } else {
      throw err;
    }
  });
}

mkdirIfNotExistsPromise(tmpPath)
  .then(() => fs.readFile(packagePath))
  .then((buffer) => fs.promises.writeFile(packageCopyPath, buffer))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err));

// Style Asynchrone basé sur des promesses (nouveauté de Node 12) + async/await (ES2017)
async function mkdirInNotExistsAsyncAwait(dirPath) {
  try {
    await fs.promises.access(tmpPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.promises.mkdir(tmpPath);
    } else {
      throw err;
    }
  }
}

(async () => {
  try {
    await mkdirInNotExistsAsyncAwait(tmpPath);
    const buffer = await fs.promises.readFile(packagePath);
    await fs.promises.writeFile(packageCopyPath, buffer);
    console.log('Copy Done');
  } catch (err) {
    console.log(err);
  }
})();

// ES2022 : top level await
// try {
//   await mkdirInNotExistsAsyncAwait(tmpPath);
//   const buffer = await fs.promises.readFile(packagePath);
//   await fs.promises.writeFile(packageCopyPath, buffer);
//   console.log('Copy Done');
// } catch (err) {
//   console.log(err);
// }
