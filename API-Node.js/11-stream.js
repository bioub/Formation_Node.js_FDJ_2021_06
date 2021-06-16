const fs = require('fs');
const path = require('path');

const editorConfigPath = path.resolve(__dirname, '.editorconfig');
const editorConfigCopyPath = path.resolve(__dirname, '.editorconfig.copy');

const readStream = fs.createReadStream(editorConfigPath);
// readStream.on('open', () => {
//   console.log('Fichier ouvert');
// });

// readStream.on('data', (buffer) => {
//   console.log('Paquet d octet reçu', buffer.toString('utf-8'));
// });

// readStream.on('close', () => {
//   console.log('Fichier fermé');
// });

const writeStream = fs.createWriteStream(editorConfigCopyPath);

// cat .editorconfig > .editorconfig.copy
// readStream.pipe(writeStream);

// ReadStream : lecture (méthode read)
// WriteStream : écrite (méthode write)
// DuplexSteam : lecture et écriture (ex: socket TCP)
// TransformStream : lecture -> transformation -> écriture

const zlib = require('zlib');

readStream.pipe(zlib.createGzip()).pipe(writeStream);
