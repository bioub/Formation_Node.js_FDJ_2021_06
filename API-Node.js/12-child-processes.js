const child_process = require('child_process');

const buffer1 = child_process.execFileSync('ls', ['-l', '.']);
console.log(buffer1.toString('utf-8'));

const buffer2 = child_process.execSync('ls -l .');
console.log(buffer2.toString('utf-8'));

const buffer3 = child_process.spawnSync('node', ['01-process.js']);
console.log(buffer3.stdout.toString('utf-8'));
