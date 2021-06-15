const assert = require('assert'); // binaire de node
const chalk = require('chalk'); // node_modules
const hello = require('./hello'); // fichier local

try {
  assert.strictEqual(hello('Romain'), 'Hello fdgdf');
  console.log(`Test hello ${chalk.bold.whiteBright.bgGreen('SUCCESS')}`);
}
catch(err) {
  console.log(`Test hello ${chalk.bold.whiteBright.bgRed('FAIL')}`);
  process.exit(1);
}
