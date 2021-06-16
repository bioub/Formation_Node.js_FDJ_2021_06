const readline = require('readline');
const fs = require('fs');
const path = require('path');

const editorConfigPath = path.resolve(__dirname, '.editorconfig');

const rl = readline.createInterface({
  input: fs.createReadStream(editorConfigPath),
});

let lineNumber = 1;
// on permet d'écouter un événement (ici line)
rl.on('line', (line) => {
  console.log((lineNumber++) + ' ' + line);
});
